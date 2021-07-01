module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  rewrites() {
    return [{source: '/badges/:path*', destination: '/api/:path*'}];
  },
};
