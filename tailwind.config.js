/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans-serif']
    },
    extend: {
      colors: {
        'dark': '#1E1E1E',
        'primary': '#7B4AE2',
      },      
    },
  },
  plugins: [],
}