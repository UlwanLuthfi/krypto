/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        background: '#010922',
        primary: '#8989DA',
        secondary: '#86CFD0',
        anjing: '#342D67',
      },
      fontFamily: { outfit: ['Outfit'] },
    },
  },
  plugins: [],
};
