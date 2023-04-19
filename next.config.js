/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kinopoiskapiunofficial.tech',
      },
    ],
  },
}

module.exports = nextConfig
