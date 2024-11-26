/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': 'rgba(119, 119, 125, .2)',
        'blue-custom': 'rgba(0, 128, 240, 1)',
        'dark-gray-custom': 'rgb(28 28 33)',
        'light-gray-custom': 'rgb(14, 14, 16)',
        'light-blue-gray': '#BEC1CF',
        'black-200': '#0E0E10',
        'black-300': '#1C1C21',
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}