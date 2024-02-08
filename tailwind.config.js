/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        colortext1: '#0075FF',
        backgorundcolor: '#E5F1FF',
      },
      screens: {
        '2xl': '1320px',
      },
      
    },
  },
  plugins: [],
}

