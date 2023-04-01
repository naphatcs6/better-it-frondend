/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        sidecolor1: {
          1: '#1b7ecf',
          2: '#fca650',
          3: '#558f8f',
          4: '#8b5cbb',
          5: '#73bc5b',
          6: '#de60be',
          7: '#b8944d',
        },
        blackg: {
          bg: '#f4f3ef'
        }
      }
    },
  },
  plugins: [],
}

