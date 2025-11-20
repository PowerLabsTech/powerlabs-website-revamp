'use client';

import { ArrowDownIcon } from '@/components/ui';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IArticleData } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { createRouteFromTitle } from '@/utils/stringUtils';
import { fetchSearchedArticle } from '@/services/cms';
import Link from 'next/link';

const categories = [
  'All',
  'Stories',
  'Releases',
  'Product Announcements',
  'Research',
];

export default function LatestPost({
  articles,
  handleLoadMore,
  loading,
}: {
  articles: IArticleData[];
  handleLoadMore: () => void;
  loading: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IArticleData[]>([]);
  const [debouncedTerm, setDebouncedTerm] = useState<string>(searchTerm);
  const router = useRouter();

  const filteredPosts = articles?.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' ||
      post.attributes.tag.toLowerCase() === activeCategory.toLowerCase();

    return matchesCategory;
  });

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedTerm(searchTerm), 400);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (!debouncedTerm) {
      setSearchResults([]);
      return;
    }

    const fetchResults = async () => {
      const response = await fetchSearchedArticle(debouncedTerm);
      setSearchResults(response.data);
    };

    fetchResults();
  }, [debouncedTerm]);

  const navigateToPost = (title: string, postId: number) => {
    router.push(
      `outlet/blog/posts/${createRouteFromTitle(title)}?id=${postId}`
    );
  };

  return (
    <>
      <div className="space-y-10">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-4">
          <p className="metallic-text font-medium text-2xl md:text-[32px]">
            Latest Posts
          </p>
          <div className="relative w-full md:w-auto">
            {/* Input + Button Row */}
            <div className="flex gap-4 items-center w-full md:w-auto">
              <input
                type="text"
                placeholder="Search by Keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow bg-[#161B22] border border-gray-700 rounded-md py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <button
                onClick={() => setDebouncedTerm(searchTerm)}
                className="border-[0.5px] border-[#007AFF] w-[80px] h-[40px] p-[8px] rounded flex-shrink-0 hover:opacity-70 cursor-pointer"
              >
                Search
              </button> */}
            </div>

            {/* Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-0 top-full mt-2 w-full bg-[#1E222A] border border-gray-700 rounded-lg shadow-lg min-h-72 overflow-y-auto z-50">
                {searchResults.map((article) => (
                  <>
                    <div
                      key={article.id}
                      className="flex items-center gap-3 p-3 hover:bg-gray-800 cursor-pointer"
                      onClick={() =>
                        navigateToPost(article.attributes.title, article.id)
                      }
                    >
                      <span className="text-sm text-gray-200">
                        {article.attributes.title}
                      </span>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'hover:bg-[#161B22] text-gray-400'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Blog Grid */}
          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts?.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            {loading && (
              <div className="w-full flex items-center justify-center">
                Loading...
              </div>
            )}
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-[#161B22] border border-gray-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center mx-auto"
                disabled={loading}
              >
                Load more
                <ArrowDownIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

const BlogCard: React.FC<{ post: IArticleData }> = ({ post }) => {
  return (
    <Link href={`/resources/blog/posts/${post.attributes.slug}`}>
      <div className="bg-[#0D1117] text-white rounded-lg overflow-hidden group cursor-pointer">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={post.attributes.coverImage.data.attributes.url ?? ''}
            alt={post.attributes.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            // In a real Next.js app, you'd use the Image component:
            // import Image from 'next/image';
            // <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" ... />
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 h-14 line-clamp-2">
            {post.attributes.title}
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {post.attributes.author ?? 'John Doe'}{' '}
            {post.attributes.authorRole && ` - ${post.attributes.authorRole}`}
          </p>
          <div className="border-[0.5px] border-[#FAFAFA1F] mb-2"></div>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pLogoIcon.png"
                alt="logo"
                width={10}
                height={10}
              />
            </div>

            <div className="flex flex-col  text-xs text-gray-400">
              <div>
                <span className="text-blue-500">{post.attributes.tag}</span>
              </div>
              <div>
                <span>{post.attributes.date}</span>
                <span className="mx-2">•</span>
                <span>{post.attributes.readingTime ?? ''} mins read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
