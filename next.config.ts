import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'decojoli-site.hb.ru-msk.vkcloud-storage.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
