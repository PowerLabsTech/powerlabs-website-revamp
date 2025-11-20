import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchEventsBySlug } from '@/services/cms';
import { displayFriendlyDate } from '@/utils/stringUtils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export default async function EventPage({ params }: Props) {
  const { slug } = params;

  // Fetch event by slug (server-side)
  const response = await fetchEventsBySlug(slug);
  const event = response;

  if (!event) return notFound();

  return (
    <div className="w-full p-10 text-white min-h-screen">
      {/* Back Button */}
      <Link
        href="/community/events"
        className="max-w-4xl mx-auto px-4 py-6 flex items-center gap-2 text-gray-300 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center px-4">
        {/* Header */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerlabsIcon.png"
            alt="Author icon"
            width={50}
            height={50}
          />
          <p className="text-gray-400 text-sm">
            {displayFriendlyDate(event.attributes.publishedAt)}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-semibold metallic-text capitalize">
          {event.attributes.title}
        </h3>

        {/* Markdown Content */}
        <article className="prose prose-invert lg:prose-xl mx-auto">
          <ReactMarkdown>{event.attributes.post}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
