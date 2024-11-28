/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#0A033C",
        offerColor: "#FF6652",
        paraColor: "#5D5A6F",
        activeColor: "#9C4DF4",
        backColor: "#3E4756",
        whiteColor: "#fff",
        lightWhiteColor: "#F2E5FF",
        starColor: "#FFC107"
      }
    }
  },
  plugins: []
};
