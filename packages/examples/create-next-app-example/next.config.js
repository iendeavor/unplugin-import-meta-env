/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compress: false,

  webpack: (config) => {
    config.plugins.push(
      require("@final-env/unplugin").webpack({
        example: ".env.example.public",
      })
    );

    // Make output files easier to read.
    config.optimization.minimize = false;

    return config;
  },
};

module.exports = nextConfig;
