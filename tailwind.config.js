/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        rancho: ['Rancho', 'Brush Script MT'],
      },
      colors: {
        'chocolate': '#331A15',
        'chocolate-black': '#1B1A1A',
        'chocolate-light': '#E3B577'
      }
    },
  },
  plugins: [require("daisyui")],
}

