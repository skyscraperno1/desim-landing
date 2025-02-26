/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      lg: '960px',
    },
    fontFamily: {
    },
    extend: {
      colors: {
        themeBlue: '#004B83',
        yellowOne: '#FFD757',
        yellowTwo: '#FFCA57'
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(62.38deg, #E33237 5.62%, #FF6145 94.38%)',
      },
    },
  },
  plugins: [],
}

