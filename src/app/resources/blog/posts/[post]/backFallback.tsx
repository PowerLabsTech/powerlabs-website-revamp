'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BackButtonFallback() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (window.history.length > 1) {
      setCanGoBack(true);
    }
  }, []);

  if (canGoBack) {
    return (
      <button
        className="flex items-center gap-2 hover:text-white"
        onClick={() => router.back()}
      >
        ← Back
      </button>
    );
  }

  return (
    <Link
      href="/resources/blog"
      className="flex items-center gap-2 hover:text-white"
    >
      ← Back
    </Link>
  );
}
