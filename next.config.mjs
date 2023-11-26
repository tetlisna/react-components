/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './dist',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  qbasePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
