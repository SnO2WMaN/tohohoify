module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [process.env.APP_URL || process.env.VERCEL_URL],
  },
  env: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? `http://${process.env.VERCEL_URL}`
        : `https://${process.env.APP_URL || process.env.VERCEL_URL}`,
  },
};
