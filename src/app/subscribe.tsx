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
      className="scrollOver2 relative  w-full bg-no-repeat bg-center flex h-[370px]  justify-center"
      style={{
        backgroundImage:
          "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spiral.png')",
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute translate-y-1/2 z-10 text-left text-white space-y-4">
        <div className="text-center">
          <h2 className="md:text-[40px] font-medium metallic-text">{title}</h2>
          <p className="font-normal text-base">{subtitle}</p>
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
        <div>
          <p className="text-xs ">
            *This information may be transcribed, used, and stored by third
            parties in accordance with our{' '}
            <span className="underline decoration-solid text-blue-500 decoration-blue-500 italic">
              privacy policy
            </span>
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
