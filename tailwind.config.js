/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      boxShadow: {
        '3xl': '0 0 10px 2px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        darkblue: '#5680E9',
        aqua: '#84CEEB',
        lightblue: '#5AB9EA',
        gray: '#C1C8E4',
        purple: '#8860D0',
        dark: '#222222',
        darker: '#333333',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

