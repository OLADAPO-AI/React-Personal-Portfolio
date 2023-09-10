/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },

      backgroundImage: {
        'dark': "url('/src/assets/background/dark.png')",
        'light': "url('/src/assets/background/lights.png')",  
      },
    },
  },
  plugins: [],
}

