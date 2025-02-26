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
        'gradient-button': 'linear-gradient(62.38deg, #E33237 5.62%, #FF6145 94.38%)',
        'gradient-hero': 'linear-gradient(180deg, #FFD757 50%, #FFCA57 100%)'
      },
    },
  },
  plugins: [],
}

