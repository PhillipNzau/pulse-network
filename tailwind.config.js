/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        aeonikLight:['Aeonik-Light', 'sans-serif'],
        aeonik:['Aeonik-Regular', 'sans-serif'],
        aeonikBold:['Aeonik-Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

