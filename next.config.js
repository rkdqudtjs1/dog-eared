/** @type {import('next').NextConfig} */

const witihPWA = require("next-pwa")({ dest: "public" });

const isDevelopment = process.env.NODE_ENV;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["shopping-phinf.pstatic.net"],
  },
};

module.exports = isDevelopment ? nextConfig : witihPWA(nextConfig);
