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
        deepBlue:"#052a45",
        deepGray:"#637177",
        deepPink:"#fc8e76",
        lightPink:"#fda491",
        lightGray:"#031d30",
        lightBlue:"#fdb9aa",
      }
    }
  },
  plugins: []
};
