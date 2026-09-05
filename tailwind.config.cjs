/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#D2B48C',
        terracotta: '#CC4E3C',
        sunset: '#FF6B35',
        'dark-bg': '#121212',
        'dark-card': '#1E1E1E',
        'glass-bg': 'rgba(30, 30, 30, 0.7)',
        'glass-border': 'rgba(210, 180, 140, 0.2)'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}