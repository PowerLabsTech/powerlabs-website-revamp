import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ews-app-landing-page.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/website/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
