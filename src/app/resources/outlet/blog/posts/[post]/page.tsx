'use client';
import { IArticleData } from '@/interfaces';
import { fetchArticleById } from '@/services/cms';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';
import CodeBlock from './codeBlock';
import { displayFriendlyDate } from '@/utils/stringUtils';
import ShareArticle from '@/components/shareArticles';

export default function BlogPostPage() {
  const [article, setArticle] = React.useState<IArticleData>();
  const param = useSearchParams();

  const fetchPostData = async () => {
    const id = param.get('id');
    if (!!id) {
      const response = await fetchArticleById(id);
      setArticle(response.data as IArticleData);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);
  const router = useRouter();
  return !!article ? (
    <div className="w-full p-10">
      <div className="min-h-screen  text-white">
        {/* Back Button */}
        <div
          className="max-w-4xl mx-auto px-4 py-6 flex items-center gap-2 text-gray-300"
          onClick={() => router.back()}
        >
          <ArrowLeft size={18} />
          <span className="cursor-pointer hover:text-white">Back</span>
        </div>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 text-sm">
            {displayFriendlyDate(article.attributes.date)}
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
            <Image
              src={
                article?.attributes?.avatar?.data?.attributes?.url ||
                'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerlabsIcon.png'
              }
              alt="User avatar"
              width={24}
              height={24}
              className="rounded-full object-cover w-6 h-6"
            />
            <span>{article?.attributes.author ?? 'PowerLabs Team'}</span>
            <span>|</span>
            <span>{article?.attributes.readingTime ?? ''} mins</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold mt-4">
            {article?.attributes.title}
          </h1>
          <p className="text-gray-300 mt-2 italic">
            {article.attributes.summary}
          </p>
        </div>
        {/* content*/}
        <CodeBlock content={article.attributes.text} />
        {/* Call to Action */}
        <ShareArticle article={article} />
      </div>
    </div>
  ) : (
    <></>
  );
}
