/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FA26A0",
        secondary: "#FD77C4",
      },
      gridTemplateColumns: {
        primary: "grid-template-cols: 180px auto;",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
