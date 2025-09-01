'use client';
import { ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Shop() {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      (
      <div className="w-full p-10">
        <div className="min-h-screen  text-white">
          {/* Back Button */}
          <div
            className="max-w-4xl mx-auto px-4 py-6 flex items-center gap-2 text-gray-300"
            onClick={() => router.back()}
          >
            <ArrowLeft size={18} />
            <span className="cursor-pointer hover:text-white">Back</span>
          </div>

          {/* Header Section */}
          <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center justify-center px-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerlabsIcon.png"
                alt="User avatar"
                width={50}
                height={50}
              />
              <p className="text-gray-400 text-sm">Mar 22, 2024</p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold metallic-text">
                {params.slug?.toString().replace('_', ' ')}
              </h3>
            </div>
          </div>

          {/* content*/}

          {/* <CodeBlock htmlContent={article.attributes.text} /> */}
        </div>
      </div>
      )
    </>
  );
}
