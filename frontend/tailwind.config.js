/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Play', 'Space Grotesk', 'sans-serif'],
        mono: ['monospace'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        play: ['Play', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        tages: ['Tagesschrift', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#ffd700',
          light: '#fff4b3',
          dark: '#997f00',
        },
        secondary: {
          DEFAULT: '#00f3ff',
          light: '#b3faff',
          dark: '#009199',
        },
        background: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          dark: '#000000',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};