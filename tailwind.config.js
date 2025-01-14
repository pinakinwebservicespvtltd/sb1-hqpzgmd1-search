/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#f8f7f6',
          100: '#e8e6e1',
          200: '#d5b69c',
          300: '#c19b7c',
          400: '#e23d28',
          500: '#d83a27',
          600: '#b62f1f',
          700: '#8c251a',
          800: '#661c13',
          900: '#40110c',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}