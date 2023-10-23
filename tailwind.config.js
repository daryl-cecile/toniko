const original = require('tailwindcss/defaultConfig')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'black': '#4F4F4F'
      },
    },
  },
  plugins: [],
}

