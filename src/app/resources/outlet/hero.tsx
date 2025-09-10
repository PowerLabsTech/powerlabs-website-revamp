'use client';
import { SubscribeFormBlog } from '@/app/subscribe';
import { NEWS_LETTERS_TYPE } from '@/enums';
import { IArticleData } from '@/interfaces';
import { createRouteFromTitle } from '@/utils/stringUtils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroOutlet({ article }: { article?: IArticleData }) {
  return (
    <div className="space-y-10 grid place-content-center p-4">
      <div className="text-center">
        <h2 className="font-medium metallic-text text-4xl md:text-6xl mb-2">
          The Outlet
        </h2>
        <p className="text-base font-light">Not the science. Just the story.</p>
      </div>
      <SubscribeFormBlog newsLetterType={NEWS_LETTERS_TYPE.GENERAL} />
      <FeaturedCard article={article} />
    </div>
  );
}

function FeaturedCard({ article }: { article?: IArticleData }) {
  const router = useRouter();
  const navigateToPost = (title: string, postId: number) => {
    router.push(
      `outlet/blog/posts/${createRouteFromTitle(title)}?id=${postId}`
    );
  };
  return !!article?.attributes ? (
    <div
      className="bg-[#1570EF14] w-full lg:w-7xl  mx-auto p-6 md:p-10 flex flex-col lg:flex-row rounded-lg items-center gap-8 cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={() => navigateToPost(article.attributes.title, article.id)}
    >
      <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full relative rounded-lg overflow-hidden">
        <Image
          src={article?.attributes.coverImage.data.attributes.url}
          alt="article image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full space-y-6">
          <h3 className="text-[#1570EF]">Featured Blog</h3>
          <h3 className="text-white font-semiBold text-2xl md:text-4xl">
            {article?.attributes.title}
          </h3>
          <p className="font-extralight">
            {article?.attributes.author ?? 'PowerLabs Team'}
          </p>
          {/* handle dynamic author */}
          <div className="border-[0.5px] border-[#FAFAFA1F]"></div>
          <div className="flex gap-5 items-center">
            <div>
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pLogoIcon.png"
                alt="logo"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className="font-extralight">{article.attributes.tag}</p>
              <div className="flex flex-wrap gap-x-2 items-center">
                <p className="font-extralight">{article.attributes.date}</p>
                <div className="rounded-full h-1.5 bg-white w-1.5"></div>
                <p className="font-extralight">
                  {article.attributes.readingTime ?? ''} mins read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>No article found</div>
  );
}
