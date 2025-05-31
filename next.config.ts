import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "andrew-construction.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  serverExternalPackages: ['@react-pdf/renderer', 'pdfjs-dist'],
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },
}

export default nextConfig
