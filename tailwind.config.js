const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
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
