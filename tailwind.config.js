/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "spacegrotesk": ["Space Grotesk"]
      },
      colors: {
        aGrey: {
          DEFAULT: "#505050",
          100: "#606060",
          300: "#505050",
          500: "#404040",
          700: "#2d2d2d",
          800: "#282828"
        },
        aDark: {
          DEFAULT: "#0e1114",
          100: "#2e3741",
          500: "#191e23",
          800: "#0e1114"
        }
      },
    },
  }
}