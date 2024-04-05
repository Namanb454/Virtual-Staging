/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#081d27', // Emerald green
          secondary: '#F39C12', // Orange
        },
      },
    },
  },
  plugins: [],
}