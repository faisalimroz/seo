/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e4e4e4', // Replace with your primary color
        secondary: '#0059A5', // Replace with your secondary color
      },
    },
  },
  plugins: [require('daisyui'),],
}

