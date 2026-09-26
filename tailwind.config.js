/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050509',
          900: '#0a0a12',
          800: '#0f0f1a',
          700: '#16162a',
          600: '#1e1e36',
          500: '#2a2a48',
        },
        brand: {
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          purple: '#8b5cf6',
          'purple-light': '#a78bfa',
          cyan: '#06b6d4',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.15) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 3s ease-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
          '100%': { transform: 'scale(0.95)', opacity: '0.7' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
