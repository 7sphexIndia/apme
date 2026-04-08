/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--white-rgb) / <alpha-value>)',
        black: 'rgb(var(--black-rgb) / <alpha-value>)',
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        'light-bg': 'rgb(var(--light-bg-rgb) / <alpha-value>)',
        stroke: 'rgb(var(--border-rgb) / <alpha-value>)',
        body: 'rgb(var(--body-text-rgb) / <alpha-value>)',
        mini: 'rgb(var(--mini-text-rgb) / <alpha-value>)',
        orange: 'rgb(var(--orange-rgb) / <alpha-value>)',
      },
      fontFamily: {
        heading: 'var(--heading-font)',
        body: 'var(--body-font)',
      },
      keyframes: {
        rotateCircle: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-8px,0)' },
        },
        scrollingTextLoop: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
      },
      animation: {
        'rotate-circle': 'rotateCircle 12s linear infinite',
        'float-y': 'floatY 3.5s ease-in-out infinite',
        'scroll-loop': 'scrollingTextLoop 20s linear infinite',
        'scroll-loop-fast': 'scrollingTextLoop 10s linear infinite',
      },
    },
  },
  plugins: [],
}

