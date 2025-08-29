import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ews-app-s3.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/website/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'ews-blog-s3.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
