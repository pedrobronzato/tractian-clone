import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'tractian-webpage.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'imgix.tractian.com',
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts',
);

export default withNextIntl(nextConfig);
