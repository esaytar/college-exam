/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        mainBlue: '#2886EB',
        main: '#222222',
        extra: '#767676',
        bgGray: "rgba(0, 0, 0, 0.04)"
      },
      fontFamily: {
        sfpro: ["SF Pro", "sans-serif"]
      }
    },
  },
  plugins: [],
}

