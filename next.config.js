// // const { i18n } = require("./next-i18next.config");

// const nextConfig = {
//   reactStrictMode: false,
//   // i18n,
//   images: {
//     remotePatterns: [
//       {
//          protocol: "https",
//          hostname: "i0.wp.com",
//         port: "",
//         // pathname: "/account123/**",
//       },
//     ],
//   },
// };
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};  
module.exports = nextConfig;
