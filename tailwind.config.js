/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('https://cdn.landin.ir/images/0e20afdd-29e6-4d87-9da0-5415e918b80f/f6e50f4f-3286-46af-b585-ce826583f026.jpg?fileid=68713')",
        'signup' : "url(/images/signup.jpg)",
        'hero-pattern': "url('/images/noise.png')",
      },
      fontFamily: {
        'vazir': ['Vazir'] 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ]
}
