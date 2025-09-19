import { IArticleData } from '@/interfaces';
import { Copy } from 'lucide-react';
import React from 'react';
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa6';

export default function ShareArticle({ article }: { article: IArticleData }) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = article?.attributes?.title || 'Check this out';

  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10 flex flex-col items-center">
      {/* Share Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-200">Share article</h2>
      </div>

      <div className="flex gap-6 text-gray-400 mt-6">
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
        >
          <FaFacebookF size={18} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
        >
          <FaLinkedinIn size={18} />
        </a>

        {/* Twitter (X) */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            currentUrl
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
        >
          <FaXTwitter size={18} />
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            title + ' ' + currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
        >
          <FaWhatsapp size={18} />
        </a>

        {/* Copy link */}
        <div className="relative">
          <button
            onClick={handleCopy}
            className="hover:text-black w-9 h-9 flex items-center justify-center rounded-full text-neutral-400 bg-neutral-800 hover:bg-white hover:text-black transition-colors"
          >
            <Copy size={18} />
          </button>

          {copied && (
            <span className="absolute top-12 left-1/2 -translate-x-1/2 text-sm text-blue-400">
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
