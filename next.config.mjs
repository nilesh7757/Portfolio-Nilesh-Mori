/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['raw.githubusercontent.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 60,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
};    
export default nextConfig;
