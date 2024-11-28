/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '470px',
      },
      animation: {
        fade: 'fadeInOut 1s ease-in-out infinite',
        Gradient: 'darkColorGradientChanger 1s ease-in-out infinite', // increased duration to 3s
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        darkColorGradientChanger:{
          '0%': { backgroundImage: 'linear-gradient(to right, #FDE047, #F59E0B, #FF1493, #1E90FF, #32CD32)' },
          '20%': { backgroundImage: 'linear-gradient(to right, #32CD32, #FDE047, #F59E0B, #FF1493, #1E90FF)' },
          '40%': { backgroundImage: 'linear-gradient(to right, #1E90FF, #32CD32, #FDE047, #F59E0B, #FF1493)' },
          '60%': { backgroundImage: 'linear-gradient(to right, #FF1493, #1E90FF, #32CD32, #FDE047, #F59E0B)' },
          '80%': { backgroundImage: 'linear-gradient(to right, #F59E0B, #FF1493, #1E90FF, #32CD32, #FDE047)' },
          '100%': { backgroundImage: 'linear-gradient(to right, #FDE047, #F59E0B, #FF1493, #1E90FF, #32CD32)' }
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