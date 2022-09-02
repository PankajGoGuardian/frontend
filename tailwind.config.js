// @type {import('tailwindcss').Config} 

module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "grey": "#081A51",
      "white": "mintcream",
      "grn": "#433F4D"
    },
      rotate: {
      '180': '180deg',
    }},
  },
  plugins: [],
}
