/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true, // 启用生产环境的源映射，方便调试
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    // appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 添加错误处理
  onError: (err) => {
    console.error('Server Error:', err);
    return err;
  },
  // 添加详细的错误页面配置
  webpack: (config, { isServer }) => {
    // 保持现有的 webpack 配置
    config.devtool = 'source-map';
    return config;
  }
}

// 如果是开发环境，添加更多调试信息
if (process.env.NODE_ENV !== 'production') {
  nextConfig.generateEtags = false;
  nextConfig.reactStrictMode = true;
}

module.exports = nextConfig
