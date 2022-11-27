/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors:{
      'white' : '#FFFFFF',
      'gray' : '#97ADBD',
      'light-gray':'#F3F5F7',
      'light-red' : '#A4797C',
      'light-green':'#EEFFDB',
      'dark-blue':'#234558'
    },
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
