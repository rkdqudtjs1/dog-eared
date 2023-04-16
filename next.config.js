/** @type {import('next').NextConfig} */

const witihPWA = require('next-pwa')({ dest: 'public' })


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['shopping-phinf.pstatic.net'],
  }
}

module.exports = witihPWA(nextConfig)
