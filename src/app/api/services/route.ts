import { NEWS_LETTERS_TYPE } from '@/enums';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextResponse } from 'next/server';
import md5 from 'md5';

interface Iinterests {
  category_id: string;
  list_id: string;
  id: string;
  name: string;
  subscriber_count: string;
  display_order: number;
  _links: [];
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!,
});

export async function POST(req: Request) {
  try {
    const { email, newsLetterType } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: 'failed', error: 'Invalid email. Email not provided' },
        { status: 400 }
      );
    }

    let type = newsLetterType as NEWS_LETTERS_TYPE;

    if (!newsLetterType) {
      type = NEWS_LETTERS_TYPE.GENERAL;
    }

    // we want to hash the email to get the subscriber hash. This is required in case a user wants to update their preferences or duplicate emails
    const subscriberHash = md5(email.toLowerCase());

    // we also need to fetch the interest categories to get the groups id
    const cats = (await mailchimp.lists.getListInterestCategories(
      process.env.MAILCHIMP_AUDIENCE_ID!
    )) as any;

    const categoryId = cats.categories[0].id;

    // fetch interests to get the interest id
    const interests = (await getInterestByCategoryId(
      categoryId
    )) as Iinterests[];

    const groupId = interests.find((interest) => interest.name === type)?.id;

    if (!groupId) {
      return NextResponse.json(
        { success: 'failed', error: 'Invalid newsletter type' },
        { status: 400 }
      );
    }

    const response = await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_AUDIENCE_ID ?? '',
      subscriberHash,
      {
        email_address: email,
        status_if_new: 'subscribed',
        interests: { [groupId]: true },
      }
    );

    if (response) {
      return NextResponse.json({ success: 'subscribed' }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: 'failed', error: 'Unexpected Mailchimp response' },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error('Mailchimp error:', err);
    return NextResponse.json(
      { success: 'failed', error: err.message },
      { status: 500 }
    );
  }
}

async function getInterestByCategoryId(categoryId: string) {
  if (
    !categoryId ||
    !process.env.MAILCHIMP_AUDIENCE_ID ||
    !process.env.MAILCHIMP_API_KEY ||
    !process.env.MAILCHIMP_SERVER_PREFIX
  ) {
    console.error('Missing Mailchimp configuration');
    return [];
  }

  try {
    const response = await fetch(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/interest-categories/${categoryId}/interests`,
      {
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching interests: ${response.statusText}`);
    }

    const data = await response.json();
    return data.interests;
  } catch (error) {
    console.error('Error fetching interests:', error);
    return [];
  }
}
