```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDF8F0',
          100: '#F9F0E0',
          200: '#F0E0C0',
          300: '#E8D0A0',
          400: '#D2B48C',
          500: '#C4A070',
          600: '#B08850',
          700: '#907040',
          800: '#705830',
          900: '#504020',
        },
        terracotta: {
          50: '#FDEEE8',
          100: '#FDDCD0',
          200: '#FBB8A0',
          300: '#F79470',
          400: '#F27040',
          500: '#E85A28',
          600: '#D04820',
          700: '#B03818',
          800: '#902C14',
          900: '#702010',
        },
        sunset: {
          50: '#FFF5EE',
          100: '#FFE8D0',
          200: '#FFD0A0',
          300: '#FFB070',
          400: '#FF9040',
          500: '#FF7020',
          600: '#E05818',
          700: '#C04010',
          800: '#A03008',
          900: '#802000',
        },
        dark: {
          50: '#2A2A2E',
          100: '#242428',
          200: '#1E1E22',
          300: '#18181C',
          400: '#121216',
          500: '#0C0C10',
          600: '#08080C',
          700: '#060608',
          800: '#040406',
          900: '#020204',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
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
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(210, 180, 140, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(210, 180, 140, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-sm': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'sand': '0 4px 20px rgba(210, 180, 140, 0.15)',
        'terracotta': '0 4px 20px rgba(232, 90, 40, 0.2)',
      },
      backgroundImage: {
        'desert-gradient': 'linear-gradient(135deg, #1E1E22 0%, #2A2A2E 50%, #18181C 100%)',
        'sand-gradient': 'linear-gradient(135deg, #D2B48C 0%, #E8D0A0 50%, #D2B48C 100%)',
        'terracotta-gradient': 'linear-gradient(135deg, #E85A28 0%, #FF7020 50%, #E85A28 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #E85A28 0%, #FF7020 50%, #FF9040 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(12,12,16,0.3) 0%, rgba(12,12,16,0.8) 100%)',
      },
    },
  },
  plugins: [],
}
