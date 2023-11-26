/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: './dist',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
