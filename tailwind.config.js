/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nsdl-red': '#B33D44',
        'nsdl-pink': '#FFF1F2',
        'nsdl-bg': '#F8F9FA',
      }
    },
  },
  plugins: [],
}