module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
      proprietary: {
        100: '#d15672',
        200: '#bd425e',
        300: '#a92e4a',
        400: '#951a36',
        500: '#810622',
        600: '#6d000e',
        700: '#590000',
        800: '#450000',
        900: '#310000'
      }
    }},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
