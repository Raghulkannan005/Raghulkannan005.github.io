/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeInOut 1s ease-in-out infinite',
        Gradient: 'darkColorGradientChanger 1s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        darkColorGradientChanger:{
          '0%': { backgroundImage: 'linear-gradient(to left, #F59E0B, #00FF7F, #FF1493, #1E90FF, #32CD32)' },
          '25%': { backgroundImage: 'linear-gradient(to left, #00FF7F, #FF1493, #1E90FF, #32CD32, #F59E0B)' },
          '50%': { backgroundImage: 'linear-gradient(to left, #FF1493, #1E90FF, #32CD32, #F59E0B, #00FF7F)' },
          '75%': { backgroundImage: 'linear-gradient(to left, #1E90FF, #32CD32, #F59E0B, #00FF7F, #FF1493)' },
          '100%': { backgroundImage: 'linear-gradient(to left, #F59E0B, #00FF7F, #FF1493, #1E90FF, #32CD32)' }
          }
      },
      colors: {
        'darkBlue': '#050536',
      },
      fontFamily: {
        rubi: ['Rubi', 'sans-serif'],
        signi: ['signi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}