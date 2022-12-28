/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      colors:{
        mainColor:'#A0047D',
        backdrop:'rgba(0,0,0,.6)'
      }
    },
  },
  plugins: [],
}