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
        'desert': {
          50: '#fdf6ec',
          100: '#fbe9d2',
          200: '#f7dab7',
          300: '#f3cb9c',
          400: '#efbc81',
          500: '#e9ad66',
          600: '#d4a373',
          700: '#b8825c',
          800: '#9c6146',
          900: '#804130',
        },
        'background': {
          DEFAULT: '#111827',
          100: '#1f2937',
          200: '#374151',
        },
        'foreground': {
          DEFAULT: '#f9fafb',
          100: '#e5e7eb',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 12px 24px 0 rgba(31, 38, 135, 0.4)'
      },
      backdropBlur: {
        'glass': '8px'
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