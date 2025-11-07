/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'power-on': 'power-on 1.5s ease-out forwards',
        'flicker': 'flicker 0.5s ease-out forwards',
        'tube-warmup': 'tube-warmup 2s ease-in-out forwards',
        'switch-on': 'switch-on 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'switch-off': 'switch-off 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'metal-shine': 'metal-shine 4s ease-in-out infinite',
        'spin': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 1s ease-out forwards',
        'slide-down': 'slide-down 1s ease-out forwards',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px #C0C0C0, 0 0 10px #C0C0C0, 0 0 15px #C0C0C0' },
          '100%': { 'box-shadow': '0 0 10px #C0C0C0, 0 0 20px #C0C0C0, 0 0 30px #C0C0C0' }
        },
        'switch-on': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(2px) rotate(15deg)' },
          '100%': { transform: 'translateY(4px) rotate(30deg)' }
        },
        'switch-off': {
          '0%': { transform: 'translateY(4px) rotate(30deg)' },
          '50%': { transform: 'translateY(2px) rotate(15deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' }
        },
        'metal-shine': {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' }
        },
        'power-on': {
          '0%': { opacity: '0', filter: 'brightness(0)' },
          '50%': { opacity: '0.5', filter: 'brightness(0.5)' },
          '100%': { opacity: '1', filter: 'brightness(1)' }
        },
        flicker: {
          '0%': { opacity: '1' },
          '25%': { opacity: '0.8' },
          '50%': { opacity: '1' },
          '75%': { opacity: '0.9' },
          '100%': { opacity: '1' }
        },
        'tube-warmup': {
          '0%': { filter: 'brightness(0) sepia(1) hue-rotate(-50deg) saturate(200%)' },
          '50%': { filter: 'brightness(0.5) sepia(0.8) hue-rotate(-25deg) saturate(150%)' },
          '100%': { filter: 'brightness(1) sepia(0) hue-rotate(0deg) saturate(100%)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        portfolio: {
          "primary": "#FF4C60", // Pink-Red
          "secondary": "#6C6CE5", // Blue
          "accent": "#FFD15C", // Yellow
          "neutral": "#353353", // Dark Purple
          "base-100": "#353353", // Dark Purple (Background)
          "base-200": "#302F4E", // Slightly lighter purple
          "base-300": "#2B2A47", // Darker purple
          "base-content": "#FFFFFF", // White text
          "info": "#6C6CE5", // Blue
          "success": "#6C6CE5", // Blue
          "warning": "#FFD15C", // Yellow
          "error": "#FF4C60", // Pink-Red
        },
      },
    ],
  },
}