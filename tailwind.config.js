// tailwind.config.js
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const { gray } = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./**/*.hbs'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '576px',
      'sm': '768px',
      'md': '992px',
      'lg': '1200px',
      'xl': '1351px',
      '2xl': '1576px',
    },
    fontFamily: {
      regular: ['sans-serif'],
      primary: ['sans-serif'],
    },
    colors:{
      transparent: 'transparent',
      inherit: 'inherit',
      primary: '#FD7C0F', 
      title: "#202020",
      body:"#FFE5CF",
      border:"#373D3D",
      white: '#ffffff',
      default: '#111717',
      gray:{
        50: '#f7f7f7',
        60: '#F2F3F3',
      },
    },
    extend: {
      boxShadow:{
        card : '0px 25px 50px -20px rgba(0, 0, 0, 0.1)',
        medium: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ]

}