/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'desert-sand': '#d4a373',
        'desert-orange': '#e3b06a',
        'desert-brown': '#8b6d5c',
        'warm-gray': '#6b7280',
        'dark-bg': '#111827',
        'darker-bg': '#0f172a',
        'card-bg': '#1f2937',
        'input-bg': '#374151',
        'accent-purple': '#a855f7',
        'accent-teal': '#10b981',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #111827, #1f2937)',
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      blur: {
        'glass': '8px'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    }
  },
  plugins: [],
}