module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: "/projects/:path*",
        destination: "/craft/:path*",
        permanent: true,
      },
    ];
  },
};
