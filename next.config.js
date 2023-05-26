/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 2,
    disableStaticImages: true,
  },
}

module.exports = nextConfig
