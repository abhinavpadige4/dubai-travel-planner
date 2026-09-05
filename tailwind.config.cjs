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
        'desert-dark': '#111827',
        'desert-muted': '#1f2937',
        'desert-light': '#374151',
        'desert-accent': '#a855f7',
        'desert-success': '#10b981'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #111827, #1f2937)',
        'glassmorphism': 'rgba(255, 255, 255, 0.1)'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      backdropFilter: {
        'glass': 'blur(8px)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}