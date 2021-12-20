module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '3xl': '6.7rem',
      },
    },

    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Roboto'],
      },
      colors: {
        primary: '#191D21',
        secondary: '#2F343A',
        cta: '#B2DB5B',
        'brand-text': '#FC6011',
        rating: '#FFFF00',
        'fb-blue': '#367FC0',
        'google-red': '#DD4B39',
        border: '#FEBD00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
