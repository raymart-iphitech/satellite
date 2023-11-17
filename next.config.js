/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: ["https://data.earth.jaxa.jp"],
  },
}

module.exports = nextConfig
