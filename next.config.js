module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [process.env.APP_URL || process.env.VERCEL_URL],
  },
  env: {
    IMAGE_BASE_URL:
      process.env.NODE_ENV === 'development'
        ? `http://${process.env.VERCEL_URL}/api`
        : `https://${process.env.APP_URL || process.env.VERCEL_URL}/api`,
  },
};
