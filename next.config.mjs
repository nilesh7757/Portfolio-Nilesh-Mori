/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'raw.githubusercontent.com',
        'github.com',
        'nilesh7757.github.io',
        'vercel.app'
      ],
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      deviceSizes: [360, 480, 640, 750, 828],
      imageSizes: [16, 32, 48, 64, 96],
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 31536000,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    output: 'export',
    basePath: '',
    assetPrefix: '',
    compiler: {
      removeConsole: true,
    },
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      optimizeCss: true,
      optimizePackageImports: [
        'framer-motion',
        'lucide-react',
        'react-icons',
        'swiper',
        '@radix-ui/react-dialog',
        '@radix-ui/react-tabs'
      ],
      scrollRestoration: true,
      optimizeServerComponents: true,
      optimizePackageImports: true,
    },
    // Performance optimizations
    webpack: (config, { dev, isServer }) => {
      // Production optimizations only
      if (!dev) {
        config.optimization = {
          ...config.optimization,
          minimize: true,
          splitChunks: {
            chunks: 'all',
            minSize: 10000,
            maxSize: 100000,
            minChunks: 1,
            maxAsyncRequests: 10,
            maxInitialRequests: 10,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
            },
          },
        };
      }
      return config;
    },
    headers: async () => {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'Content-Security-Policy',
              value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
            },
          ],
        },
      ];
    },
};    
export default nextConfig;
