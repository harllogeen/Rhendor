const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./public/index.html",
    "./src/Pages/onboarding/*.js",
    "./src/Pages/us/*.js",
    "./src/Pages/user/*.js",
    "./src/Pages/*.js",
    "./src/components/*.js",
    "./src/components/assets/*.js",
    "./src/components/features/*.js",
    "./src/components/form/*.js",
    "./src/components/icons/*.js",
    "./src/components/layouts/*.js",
    "./src/components/nav/*.js",
    "./src/components/others/*.js",
    "./src/components/pageComponent/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontSize: {
      '3xs': '.375rem',
      '2xs': '.5rem',
      ...defaultTheme.fontSize,
    },
    screens: {
      '3xs': '200px',
      '2xs': '350px',
      'xs': '450px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'base': {
          100: '#c29be1',
          200: '#ad6ce1',
          300: '#9741db',
          400: '#8219D5',
          500: '#530094',
          600: '#320059',
          700: '#1C0C5B',
          800: '#180328',
          900: '#2A2438',
        },
        'accent': {
          400: '#F7931E',
          600: '#bf454d',
          700: '#F8444F',
          800: '#cf1622',
        },
        'extra': {
          400: '#fhiei3478'
        }
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
