import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ['@react-pdf/renderer', 'pdfjs-dist'],
  experimental: {
    serverActions: {
      bodySizeLimit: '15mb',
    },
  },
}

export default nextConfig
