module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'cursive': ['Oooh Baby', 'cursive'],
      'oxygen': ['Oxygen', 'sans-serif'],
      'oswald': ['Oswald', 'sans-serif'],
    },
    colors: {
      'black': '#040403',
      'gray': '#383838',
      'light-gray': '#9C9B9B',
      'orange': '#ef780e',
      'white':'#ffffff',
    },
    keyframes: {
      FadeIn: {
        "0%": {
          opacity: 0,
          transform: 'scale(0.8)'
        },
        "100%": {
          opacity: 1,
          transform: 'scale(1)'
        }
      },
      spin: {
        "0%": {
          transform: 'rotate(0deg)'
        },
        "100%": {
          transform: 'rotate(360deg)'
        }
      },
      bounce: {
        '0%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
        },
        '100%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
        },
      }
    },
    extend: {
      animation: {
        'spin-fast': 'spin 0.5s linear',
        'FadeIn': 'FadeIn 0.5s linear',
      },
    },
  },
  plugins: [],
}
