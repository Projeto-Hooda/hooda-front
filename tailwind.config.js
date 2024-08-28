/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Docker-One": ['Docker-One', 'sans-serif'],
        "Montserrat": ['Montserrat','sans-serif']
      },
      colors: { hoodaLaranja: '#fcae04' }


    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1281px',
    },
  },
  plugins: [],
}