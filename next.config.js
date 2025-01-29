/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true, // 启用源映射便于调试
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    // appDir: true,  // 不再需要，因为 app directory 现在是默认的
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.devtool = 'source-map';
    return config;
  }
}

module.exports = nextConfig
