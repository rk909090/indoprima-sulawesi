import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Satu alamat kanonis untuk SEO: www.indoprimasulawesi.com → indoprimasulawesi.com (redirect permanen 308).
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.indoprimasulawesi.com' }],
        destination: 'https://indoprimasulawesi.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
