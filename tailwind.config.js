```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDF8F0',
          100: '#F5EDE0',
          200: '#E8D5B8',
          300: '#D2B48C',
          400: '#C4A06A',
          500: '#B8860B',
          600: '#A07050',
          700: '#8B6340',
          800: '#6B4E30',
          900: '#4A3520',
        },
        desert: {
          dark: '#1A1208',
          deeper: '#120D05',
          card: 'rgba(210, 180, 140, 0.08)',
          border: 'rgba(210, 180, 140, 0.2)',
        },
        terracotta: {
          light: '#E8845C',
          DEFAULT: '#D4734A',
          dark: '#B85C38',
        },
        sunset: {
          light: '#F4A460',
          DEFAULT: '#E8943A',
          dark: '#D4802A',
        },
      },
      fontFamily: {
        display: ['"Segoe UI"', 'system-ui', 'sans-serif'],
        body: ['"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(210, 180, 140, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(210, 180, 140, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
