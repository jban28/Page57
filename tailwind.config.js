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
      },
      colors: {
        primary: {
          DEFAULT: "#095ba7",
          100: "#e3f1ff",
          200: "#a5c6e8",
          300: "#73ace6",
          400: "#4890d9",
          500: "#085fa6",
          600: "#064273",
          700: "#042c4d",
          800: "#031d33",
          900: "#020e1a"
        },
        accent: {
          DEFAULT: "#ffc411",
          100: "#fff4d1",
          200: "#ffe9a6",
          300: "#ffdd75",
          400: "#ffca2b",
          500: "#ffbf00",
          600: "#d49f00",
          700: "#ad8200",
          800: "#785a00",
          900: "#423200"
        }
      }
    },
  },
  plugins: [],
}

