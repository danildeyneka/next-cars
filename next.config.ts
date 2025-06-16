import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ru-msk-dr3-1.store.cloud.mts.ru',
        port: '',
        pathname: '/store/images/items/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
