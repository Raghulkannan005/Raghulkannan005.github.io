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
        darkGradient: 'darkColorGradientChanger 1s ease-in-out infinite',
        lightGradient: 'lightColorGradientChanger 1s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        darkColorGradientChanger:{
        '0%': { backgroundImage: 'linear-gradient(to left, #F59E0B, #00FF7F, #FF1493)' },
        '33%': { backgroundImage: 'linear-gradient(to left, #00FF7F, #FF1493, #F59E0B)' },
        '66%': { backgroundImage: 'linear-gradient(to left, #FF1493, #F59E0B, #00FF7F)' },
        '100%': { backgroundImage: 'linear-gradient(to left, #F59E0B, #00FF7F, #FF1493)' }
        }
      ,
      lightColorGradientChanger: {
        '0%': { backgroundImage: 'linear-gradient(to left, #FFF700, #FF2E7E, #00FFFF)' },
        '33%': { backgroundImage: 'linear-gradient(to left, #FF2E7E, #00FFFF, #FFF700)' },
        '66%': { backgroundImage: 'linear-gradient(to left, #00FFFF, #FFF700, #FF2E7E)' },
        '100%': { backgroundImage: 'linear-gradient(to left, #FFF700, #FF2E7E, #00FFFF)' }
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