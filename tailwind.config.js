/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralWhite: "#FFFFFF",
        neutralGrey: "#717171",
        NeutralDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        BrandSecondary: "#263238",
      },
    },
  },
  plugins: [],
};
