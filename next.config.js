module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
  },
  env: {
    IMAGE_BASE_URL:
      process.env.NODE_ENV === 'development'
        ? `http://${process.env.VERCEL_URL}/api`
        : `https://${process.env.VERCEL_URL}/api`,
  },
};
