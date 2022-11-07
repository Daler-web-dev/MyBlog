/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

const production = process.env.NODE_ENV === "production";

const url = production
  ? "http://www.yoursite.com"
  : "http://localhost:1337";

module.exports = {nextConfig, url}
