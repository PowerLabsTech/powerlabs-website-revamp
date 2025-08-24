import SubscribeForm, { SubscribeBlog } from '@/components/subscribe';
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

export const Subscribe = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const url = process.env.MAILCHIMP_URL ?? '';
  return (
    <div
      className="scrollOver2 relative w-full bg-no-repeat bg-center flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage:
          "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spiral.png')",
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-2xl text-center text-white space-y-6">
        <div>
          <h2 className="text-3xl md:text-[40px] font-medium metallic-text">
            {title}
          </h2>
          <p className="font-normal text-base mt-2">{subtitle}</p>
        </div>
        <div>
          {
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <SubscribeForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              )}
            />
          }
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

export const SubscribeFormBlog = () => {
  const url = process.env.MAILCHIMP_URL ?? '';
  return (
    <div className="  z-10 text-left text-white ">
      <div>
        {
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <SubscribeBlog
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        }
      </div>
    </div>
  );
};
