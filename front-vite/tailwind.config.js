/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'found-list-res': 'linear-gradient(to bottom right, #CED4DAA1, #64ADDEA1)',
      })
    },
    fontFamily: {
      'logo': ['Yanone Kaffeesatz', 'sans-serif'],

    },
    colors: {
      'dark-blue': '#001E39',
      'blue': '#04476D',
      'light-blue': '#66ACD4',
      'light-green': '#83C2AC',
      'dark-green': '#1E6D51',
      'semi-white': '#F9F9F9',
      'white': '#FFFFFF',
      'light-gray': '#D0D0D0',
      'dark-gray': '#444444',
      'black': '#000000',
      'light-cyan': '#F4F5FC',
      'font-table': '#5C6F88',
      'theme-dark': '#212529',
      'table-comp-res': '#0A47817A',
      'white-transparent' : '#EEEEEE',
      'white-employee': '#F7F2FA',
    }
  },
  plugins: [require("daisyui")],
}

