/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: (config, options, { isServer }) => {
    config.cache = false;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
