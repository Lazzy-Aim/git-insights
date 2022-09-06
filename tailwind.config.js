/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#040D21',
        'background': '#031729',
        'card': '#283A49',
        'button': '#7BDA9E',
      },
    },
  },
  plugins: [],
}