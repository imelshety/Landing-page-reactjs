/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralWhite: "#FFFFFF",
        neutralGrey: "#717171",
        NeutralDGrey: "#4D4D4D",
        NeutralBlack: "#263238",
        brandPrimary: "#4CAF4F",
        BrandSecondary: "#263238",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
