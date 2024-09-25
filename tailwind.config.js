/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // If your HTML files are in the root directory
    './src/**/*.{html,js,jsx}', // If your JS/JSX files are in src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        coco: ['CocoGothic_trial', 'sans-serif'], // Add the CocoGothic font family
        cocoBold: ['CocoGothic-Bold_trial', 'sans-serif'],
        cocoFat: ['CocoGothic-Fat_trial', 'sans-serif'],
        catchy: ['catchy-mager', 'sans-serif'], // Add the catchy-mager font family
      },
      spacing: {
        30: '1.875rem',
        60: '3.75rem',
        110: '6.875rem',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        la: '#FF0000',
      },
      fontSize: {
        sm: '0.938rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '1xl': '1.375rem',
        '1-xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
        '5xl': '3.5rem',
        '6xl': '4rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    screens: {
      sml: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

