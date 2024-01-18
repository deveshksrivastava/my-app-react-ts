const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1DA1F2',
        'custom-green': '#17BF63',
        'custom-red': '#E0245E'
      },
      backgroundImage:{
        "banner-logo":"url('/src/images/main_banner.jpg')",

      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
