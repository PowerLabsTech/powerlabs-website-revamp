import React from 'react';
import { NEWS_LETTERS_TYPE } from '@/enums';
import { subscribe } from '@/services/mailchimp';

export default function Subscribe({
  newsLetterType = NEWS_LETTERS_TYPE.GENERAL,
  buttonText = 'Subscribe',
}: {
  newsLetterType?: NEWS_LETTERS_TYPE;
  buttonText?: string;
}) {
  const [formData, setFormData] = React.useState({ EMAIL: '' });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<'success' | 'error' | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.EMAIL) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      setLoading(true);

      const response = await subscribe(formData.EMAIL, newsLetterType);

      if (response?.ok && response.status === 200) {
        setStatus('success');
        setMessage('Thank you for subscribing! 🎉');
        setFormData({ EMAIL: '' }); // clear field
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Unexpected error. Please try again.');
      console.error('Subscribe error:', err);
    } finally {
      setLoading(false);
    }
  }

  // Auto-clear messages after 4s
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 mb-2 w-full max-w-[540px] mx-auto text-default"
    >
      <div className="lg:flex ">
        <div className="flex-1">
          <input
            autoComplete="off"
            name="email"
            type="email"
            value={formData.EMAIL}
            placeholder="John@example.com"
            onChange={(e) => setFormData({ EMAIL: e.target.value })}
            className={`lg:mt-1.5 border border-[#FAFAFA]/20 px-[0.875rem] py-2.5 rounded-lg text-default placeholder:opacity-60 text-base bg-[#1018280D] lg:w-[23rem] w-full mt-[2rem] ${
              status === 'success'
                ? 'border-green-500'
                : status === 'error'
                ? 'border-red-500'
                : 'border-default/20 focus:border-[#1570EF]'
            }`}
          />
          {message && (
            <p
              className={`mt-1 text-sm ${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 rounded-sm font-medium text-white px-4 py-2 text-[0.875rem] lg:mt-2 mt-[3rem] w-full disabled:opacity-60 cursor-pointer hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? 'Submitting...' : buttonText}
          </button>
        </div>
      </div>
    </form>
  );
}

export function SubscribeBlog({
  newsLetterType = NEWS_LETTERS_TYPE.GENERAL,
}: {
  newsLetterType?: NEWS_LETTERS_TYPE;
}) {
  const [formData, setFormData] = React.useState({ EMAIL: '' });
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<'success' | 'error' | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.EMAIL) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    try {
      setLoading(true);

      const response = await subscribe(formData.EMAIL, newsLetterType);

      if (response?.ok && response.status === 200) {
        setStatus('success');
        setMessage('Thank you for subscribing! 🎉');
        setFormData({ EMAIL: '' }); // clear input
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Subscribe error:', err);
      setStatus('error');
      setMessage('Unexpected error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  // Auto-clear message after 4s
  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 mb-2 w-full max-w-[480px] mx-auto text-default"
    >
      <div className="lg:flex gap-2">
        <div className="flex-1">
          <input
            autoComplete="off"
            name="email"
            type="email"
            value={formData.EMAIL}
            placeholder="John@example.com"
            onChange={(e) => setFormData({ EMAIL: e.target.value })}
            className={`lg:mt-1.5 border border-[#FAFAFA]/20 px-[0.875rem] py-2.5 rounded-lg text-default placeholder:opacity-60 text-base bg-[#18191AED] lg:w-[23rem] w-full mt-[2rem] ${
              status === 'success'
                ? 'border-green-500'
                : status === 'error'
                ? 'border-red-500'
                : 'border-default/20 focus:border-[#1570EF]'
            }`}
          />
          {message && (
            <p
              className={`mt-1 text-sm ${
                status === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-white rounded-sm font-medium text-blue-500 px-4 py-2 text-[0.875rem] lg:mt-2 mt-[3rem] w-full disabled:opacity-60 cursor-pointer hover:bg-blue-50 transition-all"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </form>
  );
}
