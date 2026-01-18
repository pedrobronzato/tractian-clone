import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
};

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts',
);

export default withNextIntl(nextConfig);
