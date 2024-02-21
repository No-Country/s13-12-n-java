/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'logo': ['Yanone Kaffeesatz', 'sans-serif'],
      
    },
    colors: {
      'dark-blue': '#001E39',
      'blue': '#04476D',
      'light-blue': '#66ACD4',
      'light-green': '#83C2AC',
      'dark-green': '#1E6D51'
    }
  },
  plugins: [],
}

