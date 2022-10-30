/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
