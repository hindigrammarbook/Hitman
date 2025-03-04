module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    
    extend: {
      clipPath: {
        'circle': 'circle(20% at 50% 100%)', 
        'full': 'circle(150% at 50% 50%)',
      },
      backgroundImage: {
        smmImage: "url('/src/assets/smm1.webp')",
        seoImage:"url('/src/assets/seo1.webp')",
        googleImage:"url('/src/assets/google ads 1.webp')",
        LeadImage:"url('/src/assets/Lead Generation 1.webp')",
        webImage:"url('/src/assets/web designing 1.webp')",
        webDevImage:"url('/src/assets/web Development 1.webp')",
        smoImage:"url('/src/assets/smo1.webp')",
        appImage:"url('/src/assets/appImage.webp')",
      },
    },
    animation: {
      'slide-left': 'slideLeft 10s linear infinite',
      'slide-right': 'slideRight 10s linear infinite',
      'fade-in': 'fadeIn 2s ease-in forwards',
      
    
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      slideRight: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(100%)' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
     
    
    },
    
    },

    fontFamily: {
      geologica: ['Geologica', 'sans-serif'],
      times:['Tinos', 'serif'],
      opensas:['Open Sans', 'sans-serif']
    },
   

  },
  plugins: [
  ],
};
