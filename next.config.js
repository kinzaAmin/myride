const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
//   i18:{
// locales:["en" , "ar"],
// defaultLocales:"en",
//     }
   i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
