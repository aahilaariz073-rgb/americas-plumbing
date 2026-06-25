import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce no trailing slash (matches canonical URLs)
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Force www: redirect non-www apex host to www
  async redirects() {
    return [
      // Consolidate legacy /home route onto the canonical root
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Merge bathroom-fixtures (cannibalized fixture-installation) → hub
      {
        source: '/services/bathroom-fixtures',
        destination: '/services/fixture-installation',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'americasplumbing.com' }],
        destination: 'https://www.americasplumbing.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
