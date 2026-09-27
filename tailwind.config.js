/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f5f2',
          100: '#ece7df',
          200: '#d8d0c2',
          300: '#b8ab94',
          400: '#96856a',
          500: '#76654d',
          600: '#5d4f3c',
          700: '#4a3e30',
          800: '#3a3127',
          900: '#2a231c',
          950: '#1a1510',
        },
        ember: {
          50: '#fef5ee',
          100: '#fde7d3',
          200: '#fac9a3',
          300: '#f6a368',
          400: '#f17a36',
          500: '#e85d1f',
          600: '#cf4815',
          700: '#a83713',
          800: '#7e2d15',
          900: '#5a2210',
        },
        jade: {
          50: '#f0f7f4',
          100: '#dcebe3',
          200: '#bbd8c9',
          300: '#8fbfa3',
          400: '#5fa07c',
          500: '#3f8460',
          600: '#2f6a4c',
          700: '#285540',
          800: '#224434',
          900: '#1c382c',
        },
        cream: '#faf7f2',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
