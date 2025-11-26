import Container from '@/components/container';
import CodeBlock from './codeBlock';
import ShareArticle from '@/components/shareArticles';
import { fetchArticleBySlug } from '@/services/cms';
import { displayFriendlyDate } from '@/utils/stringUtils';
import Image from 'next/image';
import { IArticleData } from '@/interfaces';
import BackButtonFallback from './backFallback';

// auto-generate meta tags using Next.js API
export async function generateMetadata({ params }: any) {
  const { post } = params;
  const article: IArticleData | null = await fetchArticleBySlug(post);

  if (!article) {
    return {
      title: 'Article Not Found - PowerLabs Blog',
      description: 'This article does not exist.',
    };
  }

  const { title, summary, coverImage } = article.attributes;

  const canonicalUrl = `https://powerlabstech.com/resources/blog/posts/${post}`;

  return {
    title,
    description: summary,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description: summary,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: coverImage?.data?.attributes?.url || '',
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: any) {
  const article: IArticleData | null = await fetchArticleBySlug(params.post);

  if (!article) {
    return (
      <div className="p-10 text-center text-gray-400">Article not found</div>
    );
  }

  return (
    <Container>
      <div className="w-full p-10">
        <div className="min-h-screen text-white">
          {/* Back */}
          <div className="max-w-4xl mx-auto px-4 py-6 flex items-center gap-2 text-gray-300">
            <BackButtonFallback />
          </div>

          {/* Header */}
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            {/* date and mins read */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <p className="text-gray-400 text-sm">
                {displayFriendlyDate(article.attributes.date)}
              </p>
              <span>|</span>
              <span>{article.attributes.readingTime} mins</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 text-gray-400 text-sm mt-1">
              <Image
                src={
                  article.attributes.avatar?.data?.attributes?.url ||
                  'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerlabsIconWhite.png'
                }
                alt="User avatar"
                width={30}
                height={30}
              />
              <div>
                <p className="text-white font-semibold">
                  {article.attributes.author ?? 'PowerLabs Team'}
                </p>
                {article.attributes.authorRole && (
                  <p>{article.attributes.authorRole}</p>
                )}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-semibold mt-4">
              {article.attributes.title}
            </h1>
            <p className="text-gray-300 mt-2 italic">
              {article.attributes.summary}
            </p>
          </div>

          {/* Content */}
          <CodeBlock content={article.attributes.text} />

          {/* Share */}
          <ShareArticle article={article} />
        </div>
      </div>
    </Container>
  );
}
