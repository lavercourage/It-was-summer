/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Error(220403) : Module not found: Can't resolve 'fs'
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: "empty",
  //     };
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
