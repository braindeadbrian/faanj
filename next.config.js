/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['vercel.app'],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Configure redirects if needed
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; 