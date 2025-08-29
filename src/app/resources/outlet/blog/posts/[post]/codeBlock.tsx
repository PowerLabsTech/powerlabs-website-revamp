'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';

import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
// add other languages you need

export default function CodeBlock({ htmlContent }: { htmlContent: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div
      className="max-w-4xl mx-auto px-4 mt-8 space-y-6  cms-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
