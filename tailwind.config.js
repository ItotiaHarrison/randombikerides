/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f1',
          100: '#dcf1de',
          200: '#bde4c2',
          300: '#93d09b',
          400: '#68b673',
          500: '#4a9b56',
          600: '#377c42',
          700: '#2d6a4f',
          800: '#265135',
          900: '#1e422c',
        },
        orange: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#fdba8c',
          400: '#ff8a4c',
          500: '#ff7f50',
          600: '#e03a00',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        },
      },
      fontFamily: {
        display: ['"Amatic SC"', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};