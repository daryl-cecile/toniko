const original = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fire': 'linear-gradient(108deg, #FF7A00 15.39%, #FF613F 92.97%)'
      },
      textColor: {
        'black': '#4F4F4F'
      },
      colors: {
        'background': '#323232',
        'foreground': 'white',
        'fire-red': '#FF613F',
        'fire-orange': '#FF7A00',
        'tony-green': '#2F6951',
        'tony-white': '#FFEBD9',
        'tony-yellow': '#EFA920',
        'tony-red': '#FF4A22'
      }
    },
  },
  plugins: [],
}

