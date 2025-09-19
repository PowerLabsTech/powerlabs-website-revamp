'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-okaidia.css';

import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

// Extra languages
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import ReactMarkdown from 'react-markdown';
// add other languages you need

export default function CodeBlock({ content }: { content: string }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <article className="prose prose-invert lg:prose-xl mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
