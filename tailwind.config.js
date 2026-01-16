/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Gowun Batang"', 'serif'],
        sans: ['"Gowun Dodum"', 'sans-serif'],
      },
      colors: {
        warm: {
          50: '#FDFBF7', // Cream
          100: '#F7F1E3',
          200: '#EBE0C7',
          300: '#DFCFA9',
          900: '#5C4B35', // Deep Brown Text
        },
        blossom: {
          light: '#FFECEC',
          pink: '#FFB7B2',
          deep: '#FF6961'
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E5B2'
        }
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1.5s ease-out forwards',
        'sway': 'sway 3s ease-in-out infinite alternate',
        'scroll-down': 'scrollDown 40s linear infinite',
        'scroll-down-fast': 'scrollDown 25s linear infinite',
        'scroll-down-slow': 'scrollDown 50s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sway: {
          '0%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(2deg)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}