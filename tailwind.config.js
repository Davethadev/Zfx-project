/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7B2EDA",
        dark: "#12121A",
        gray: "#696974",
        secondary: "#243543",
      },
    },
  },
  plugins: [],
};
