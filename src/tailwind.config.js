
/** @type {import('tailwindcss').Config} */

const prod = process.env.NODE_ENV === 'production';
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'site-color': prod ? '#283618': '#283618',
        'custom-blue': '#606c38',
        'custom-green': '#dda15e',
        'custom-red': '#dda15e',
        'custom-white':'#fefae0',
        'custom-white1':'#bc6c25'
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
// https://coolors.co/palette/606c38-283618-fefae0-dda15e-bc6c25