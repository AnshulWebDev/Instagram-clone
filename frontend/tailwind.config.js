/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobileS':'320px',
      'mobileM':'375px',
      'mobileL':'425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],

    },
  },
  plugins: [],
}