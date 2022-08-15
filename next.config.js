/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: "api-key111"
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
}

module.exports = nextConfig
