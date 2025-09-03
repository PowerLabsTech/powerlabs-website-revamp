import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Container from '@/components/container';
import ReactMarkdown from 'react-markdown';
import Footer from '@/components/footer';

function getPageContent() {
  const filePath = path.join(process.cwd(), 'content', 'terms.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export default function Terms() {
  const { content } = getPageContent();
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-6  ">
        <div className="w-full flex items-center justify-center text-4xl">
          <h3 className="metallic-text underline decoration-solid decoration-2">
            Terms and Conditions
          </h3>
        </div>
        <article className="prose prose-invert lg:prose-xl mx-auto">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
