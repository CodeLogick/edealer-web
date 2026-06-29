/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  // Allow dev origins for Docker/Remote Access
  allowedDevOrigins: ['172.18.208.1', 'localhost', '127.0.0.1'],
};

module.exports = nextConfig;