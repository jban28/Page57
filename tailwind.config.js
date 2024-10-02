/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./src/components/*.jsx", "./index.html"],
  theme: {
    screens: {
      'xs': '32rem',
      'sm': '40rem',
      'md': '48rem',
      'lg': '64rem',
      'xl': '80rem',
      '2xl': '96rem'
    },
    colors: {
      white: "#FFFFFF",
      blue: {
        DEFAULT: "#095ba7",
        dark: "#074c88"
      },
      yellow: {
        DEFAULT: "#ffc211",
        dark: "#deaa12"
      }
    },
    fontFamily: {
      sans: ['Noto Sans KR', 'Playpen Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        hex: "url(./src/assets/hex.png)",
      },
      transitionProperty: {
        'height': 'height' 
      },
      spacing: {
        navh: 'calc(2.5rem + 1rlh)'
      },
      gridTemplateColumns: {
        'header': '30% 1fr'
      }
    },
  },
  plugins: [],
}

