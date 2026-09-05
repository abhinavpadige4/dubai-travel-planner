/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b', // Amber-500
        secondary: '#10b981', // Emerald-500
        accent: '#ef4444', // Red-500
        dark: '#0f172a', // Slate-900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}