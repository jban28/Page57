/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./src/components/*.jsx", "./index.html"],
  theme: {
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
      }
    },
  },
  plugins: [],
}

