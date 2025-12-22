// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // For external domains you might still use
    remotePatterns: [
      { protocol: 'https', hostname: 'a2zautobodyparts.co.za' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
    // Local images in /public work automatically
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  // Add environment variables
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  },
};

module.exports = withBundleAnalyzer(nextConfig);
