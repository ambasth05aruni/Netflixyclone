/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "nsans-light":['Nsans Light'],
        "nsans-bold":['Nsans Bold'],
        "nsans-medium":['Nsans Medium'],
      
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}