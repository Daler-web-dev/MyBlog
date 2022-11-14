/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  url: production
  ? "https://sheltered-inlet-25566.herokuapp.com"
  : "http://localhost:1337",
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


module.exports = nextConfig
