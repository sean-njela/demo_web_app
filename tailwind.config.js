/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm color palette
        warmth: {
          100: '#FFF7ED', // Light cream
          200: '#FFEDD5', // Light peach
          300: '#FED7AA', // Peach
          400: '#FDBA74', // Light orange
          500: '#F97316', // Orange
          600: '#EA580C', // Dark orange
          700: '#C2410C', // Rust
          800: '#9A3412', // Brown
          900: '#7C2D12', // Dark brown
        },
        burgundy: {
          100: '#FEF2F2', // Light pink
          200: '#FEE2E2', // Pink
          300: '#FECACA', // Salmon
          400: '#FCA5A5', // Light red
          500: '#F87171', // Red
          600: '#EF4444', // Bright red
          700: '#B91C1C', // Dark red
          800: '#991B1B', // Burgundy
          900: '#7F1D1D', // Dark burgundy
        },
        earth: {
          100: '#F5F5F4', // Light gray
          200: '#E7E5E4', // Gray
          300: '#D6D3D1', // Dark gray
          400: '#A8A29E', // Light brown
          500: '#78716C', // Medium brown
          600: '#57534E', // Dark brown
          700: '#44403C', // Very dark brown
          800: '#292524', // Almost black
          900: '#1C1917', // Black
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in forwards',
        'slide-up': 'slideUp 0.9s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};