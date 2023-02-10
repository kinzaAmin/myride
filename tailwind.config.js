/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/BGImage.svg')",
        background1: "url('/background1.png')",
        // // "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        raleway: "Raleway",
        nova: "Proxima Nova",
        //roboto: "Roboto-thin"
      },
      colors: {
        primary: "#ff0000",
        darkGray: "#4F504D",
      }
    },
  },
  plugins: [],
};
