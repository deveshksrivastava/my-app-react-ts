
/** @type {import('tailwindcss').Config} */

const prod = process.env.NODE_ENV === 'production';
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'site-color': prod ? '#75FF33': '#FF0000',
        'custom-blue': '#1DA1F2',
        'custom-green': '#17BF63',
        'custom-red': '#E0245E',
        'custom-white':'#FFFFFF'
      },
      backgroundImage:{
        "banner-logo":"url('/src/images/main_banner.jpg')",
        "mso-logo":"url('/src/images/main_banner1.jpg')",
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
