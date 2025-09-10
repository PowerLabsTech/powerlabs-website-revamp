import SubscribeForm, { SubscribeBlog } from '@/components/subscribe';
import { NEWS_LETTERS_TYPE } from '@/enums';
import React from 'react';

export const Subscribe = ({
  title,
  subtitle,
  newsLetterType = NEWS_LETTERS_TYPE.GENERAL,
  buttonText = 'Subscribe',
}: {
  title: string;
  subtitle: string;
  newsLetterType?: NEWS_LETTERS_TYPE;
  buttonText?: string;
}) => {
  return (
    <div
      className="scrollOver2 relative w-full bg-no-repeat bg-center flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage:
          "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spiral.png')",
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-5xl text-center text-white space-y-6">
        <div>
          <h2 className="text-3xl md:text-[40px] font-medium metallic-text">
            {title}
          </h2>
          <p className="font-normal text-base mt-2">{subtitle}</p>
        </div>
        <div>
          <SubscribeForm
            newsLetterType={newsLetterType}
            buttonText={buttonText}
          />
        </div>
        <div className="w-full flex justify-center">
          <p className="text-xs max-w-md">
            *This information may be transcribed, used, and stored by third
            parties in accordance with our{' '}
            <a
              href="/privacy-policy"
              className="underline decoration-solid text-blue-500 decoration-blue-500 italic"
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export const SubscribeFormBlog = ({
  newsLetterType = NEWS_LETTERS_TYPE.GENERAL,
}: {
  newsLetterType?: NEWS_LETTERS_TYPE;
}) => {
  return (
    <div className="  z-10 text-left text-white ">
      <div>
        <SubscribeBlog newsLetterType={newsLetterType} />
      </div>
    </div>
  );
};
