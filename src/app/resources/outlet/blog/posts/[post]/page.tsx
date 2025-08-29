'use client';
import { IArticleData } from '@/interfaces';
import { fetchArticleById } from '@/utils/api';
import { ArrowLeft, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';
import CodeBlock from './codeBlock';

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
          <p className="text-gray-400 text-sm">Mar 22, 2024</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
            <Image
              src="" // Replace with the actual image path
              alt="User avatar"
              width={24}
              height={24}
              className="rounded-full object-cover w-6 h-6"
            />
            <span>Marketing & Communications</span>
            <span>|</span>
            <span>7 mins</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold mt-4">
            {article?.attributes.title}
          </h1>
          <p className="text-gray-300 mt-2 italic">
            In this week’s Business Spotlight, Ben talks us through his journey
            with NBDA, challenges he has faced around energy optimisation, and
            how Pai Enterprise has provided optimal solutions to these
            challenges.
          </p>
        </div>

        {/* content*/}

        <CodeBlock htmlContent={article.attributes.text} />

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-4 mt-10 flex flex-col items-center">
          {/* Share Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-200">
              Share article
            </h2>
          </div>
          <div className="flex gap-6 text-gray-400 mt-6">
            <a
              href="#"
              className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
            >
              <Linkedin size={18} />
            </a>
            {/* <a href="#" className="hover:text-white">
              <WhatsApp size={18} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
