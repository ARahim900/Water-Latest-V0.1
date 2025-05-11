/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#4E4456',
        'secondary': '#8A7A94',
        'accent': '#9F5CAC',
      },
    },
  },
  plugins: [],
}
