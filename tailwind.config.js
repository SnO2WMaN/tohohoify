const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        twitter: {
          1: '#1da1f2',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
