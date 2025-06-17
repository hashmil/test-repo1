import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // ESLint errors will now fail the build to catch issues early
    // If you need to temporarily bypass this, use --max-warnings flag in build scripts
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
