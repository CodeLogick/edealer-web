/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#00a86b',
        accent: '#ff6b6b',
        dark: '#1a1a1a',
        light: '#f8f9fa',
      },
    },
  },
  plugins: [],
}