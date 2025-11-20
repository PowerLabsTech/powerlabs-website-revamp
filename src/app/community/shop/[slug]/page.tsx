import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { fetchShopBySlug } from '@/services/cms';
import { displayFriendlyDate } from '@/utils/stringUtils';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { pathsRoute } from '@/app/routes';

export default async function ShopPage({ params }: any) {
  const { slug } = params;
  const shop = await fetchShopBySlug(slug);

  if (!shop) return notFound();

  return (
    <>
      <div className="w-full p-10">
        <div className="min-h-screen  text-white">
          {/* Back Button */}
          <Link
            href={pathsRoute.shop}
            className="max-w-4xl mx-auto px-4 py-6 flex items-center gap-2 text-gray-300 hover:text-white"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </Link>

          {/* Header Section */}
          <div className="w-full mx-auto flex items-center justify-center py-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerlabsIcon.png"
                alt="User avatar"
                width={50}
                height={50}
              />
              <p>{displayFriendlyDate(shop.attributes.publishedAt ?? '')}</p>
            </div>
          </div>

          <h3 className="text-3xl font-semibold metallic-text text-center">
            {shop.attributes.collectionName}
          </h3>

          {/* Content */}
          <article className="prose prose-invert lg:prose-xl mx-auto">
            <ReactMarkdown>{shop.attributes.post}</ReactMarkdown>
          </article>
        </div>
      </div>
    </>
  );
}
