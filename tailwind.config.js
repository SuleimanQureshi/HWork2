/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#EA4C70',
          deep: '#5b3356',
          teal: '#187A84',
          cream: '#FDF6F0',
          text: '#2D2D2D',
        }
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'scroll var(--duration) linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
    },
  },
  plugins: [],
};
