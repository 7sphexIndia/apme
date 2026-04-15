/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        'light-bg': 'rgb(var(--light-bg-rgb) / <alpha-value>)',
        border: 'rgb(var(--border-rgb) / <alpha-value>)',
        body: 'rgb(var(--body-text-rgb) / <alpha-value>)',
      },
      fontFamily: {
        heading: 'var(--heading-font)',
        body: 'var(--body-font)',
      },
    },
  },
  plugins: [],
}
