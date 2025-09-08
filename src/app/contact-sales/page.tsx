'use client';
import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';

import { useLayoutEffect } from 'react';
import Form from '@/components/form';

export default function ContactSales() {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <MailchimpSubscribe
      url={url ?? ''}
      render={({ subscribe, status, message }) => (
        <Form
          status={status}
          message={message}
          onValidated={(formData) =>
            subscribe(formData as unknown as EmailFormFields)
          }
        />
      )}
    />
  );
}
