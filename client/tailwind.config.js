/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A15351",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
