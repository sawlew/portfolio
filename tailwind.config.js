/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      
      'xs': {'max': '314px'},
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide-2': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
        },
        '33.33%, 60%': {
            transform: 'translateY(-33.33%)',
        },
        '66.66%, 93.33%': {
            transform: 'translateY(-66.66%)',
        },
        '100%': {
            transform: 'translateY(-99.99%)',
        },
        },
      },
    },
  },
  plugins: [],
}

