'use client';

import { ArrowDownIcon } from '@/components/ui';
import { useState } from 'react';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  author: string;
  category: string;
  date: string;
  readTime: number;
  imageUrl: string;
}

interface BlogCardProps {
  post: Post;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Open House Event Report - Harmattan Drop',
    author: 'Powerlabs Team',
    category: 'Inside PowerLabs',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Open+House',
  },
  {
    id: 2,
    title: 'Sizing Optimisation: What’s New?',
    author: 'Precious Omoogun',
    category: 'Product Updates',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/1a202c/FFFFFF?text=Sizing',
  },
  {
    id: 3,
    title: 'PowerLabs Unveils New Partnership',
    author: 'Oluwadamilola Nwadibia',
    category: 'PowerLabs In The News',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/2d3748/FFFFFF?text=Partnership',
  },
  {
    id: 4,
    title: 'S01 E01 - NBDA',
    author: 'Marketing and Communications',
    category: 'Business Spotlight',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/4a5568/FFFFFF?text=NBDA',
  },
  {
    id: 5,
    title: 'Safety 101: How To Prevent Accidents',
    author: 'Tina Nnaji',
    category: 'Employee Experience',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/718096/FFFFFF?text=Safety',
  },
  {
    id: 6,
    title: 'PowerLabs Unveils New Partnership',
    author: 'Oluwadamilola Nwadibia',
    category: 'PowerLabs In The News',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/2d3748/FFFFFF?text=Partnership',
  },
  {
    id: 7,
    title: 'S01 E01 - NBDA',
    author: 'Marketing and Communications',
    category: 'Business Spotlight',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/4a5568/FFFFFF?text=NBDA',
  },
  {
    id: 8,
    title: 'Safety 101: How To Prevent Accidents',
    author: 'Tina Nnaji',
    category: 'Employee Experience',
    date: 'Mar 22, 2024',
    readTime: 5,
    imageUrl: 'https://placehold.co/600x400/718096/FFFFFF?text=Safety',
  },
];

const categories = [
  'All',
  'Inside PowerLabs',
  'Product Update',
  'PowerLabs In The News',
  'Business Spotlight',
  'Employee Experience',
];

export default function LatestPost() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = mockPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="space-y-10">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-4">
          <p className="metallic-text font-medium text-2xl md:text-[32px]">
            Latest Posts
          </p>

          <div className="flex gap-4 items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Search by Keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow bg-[#161B22] border border-gray-700 rounded-md py-2 pl-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="border-[0.5px] border-[#007AFF] w-[80px] h-[40px] p-[8px] rounded flex-shrink-0">
              Search
            </button>
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
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-[#161B22] border border-gray-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center mx-auto">
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

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-[#0D1117] text-white rounded-lg overflow-hidden group">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          // In a real Next.js app, you'd use the Image component:
          // import Image from 'next/image';
          // <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" ... />
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 h-14">{post.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{post.author}</p>
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
              <span>{post.category}</span>
            </div>
            <div>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} mins read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
