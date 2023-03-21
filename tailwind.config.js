/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/public/**/*.{js,ts,jsx,tsx}",
    "./screens/members/**/*.{js,ts,jsx,tsx}",
    "./screens/public/**/*.{js,ts,jsx,tsx}",
    "./screens/vendor/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffe082',
        'orangeLight': "#ffccbc"
      },
      flexBasis: {
        '1/12': '8.3333%',
        '2/12': '16.6667%',
        '3/12': '25%',
        '4/12': '33.333%',
        '5/12': '41.6667%',
        '6/12': '50%',
        '7/12': '58.333%',
        '8/12': '66.667%',
        '9/12': '75%',
        '10/12': '83.333%',
        '11/12': '91.667%',
        '12/12': '100%',
      },
      minWidth: {
        '1/2': '50%',
        '3/4': '75%',
        '9/10': '90%',
      }
    },
  },
  plugins: [],
};
