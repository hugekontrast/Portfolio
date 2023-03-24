/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#7ED957',
        'black': '#000000',
        'navy': '#14213d',
        'white': '#ffffff'
      }
    },
  },
  plugins: [],
}