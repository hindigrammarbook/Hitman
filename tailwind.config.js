module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    
    extend: {},
    animation: {
      'slide-left': 'slideLeft 10s linear infinite',
      'slide-right': 'slideRight 10s linear infinite',
    },
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideRight: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },

    fontFamily: {
      geologica: ['Geologica', 'sans-serif'],
      times:['Tinos', 'serif'],
      opensas:['Open Sans', 'sans-serif']
    },
   

  },
  plugins: [],
};
