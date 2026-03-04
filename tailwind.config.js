/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#0D192D',
          blue: '#1D3357',
          red: '#E63946',
        }
      },
      fontSize: {
        'title': ['48px', { lineHeight: '140%' }],
        'subtitle': ['32px', { lineHeight: '140%' }],
        'description': ['24px', { lineHeight: '140%' }],
        'card': ['20px', { lineHeight: '140%' }],
        // Responsive variants
        'title-mobile': ['32px', { lineHeight: '140%' }],
        'subtitle-mobile': ['24px', { lineHeight: '140%' }],
        'description-mobile': ['18px', { lineHeight: '140%' }],
        'card-mobile': ['16px', { lineHeight: '140%' }],
      },
      spacing: {
        '818': '818px',
        '1240': '1240px',
        '1280': '1280px',
        '1408': '1408px',
        '1440': '1440px',
      }
    },
  },
  plugins: [],
}