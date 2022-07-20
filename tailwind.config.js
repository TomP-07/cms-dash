/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js, ts, jsx, tsx}",
    "./src/components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#fdfdfe",
          200: "#fbfbfd",
          300: "#f8f9fc",
          400: "#f6f7fb",
          500: "#f4f5fa",
          600: "#c3c4c8",
          700: "#929396",
          800: "#626264",
          900: "#313132",
        },
        primary: {
          100: "#e9ddff",
          200: "#d3bbfe",
          300: "#bd99fe",
          400: "#a777fd",
          500: "#9155fd",
          600: "#7444ca",
          700: "#573398",
          800: "#3a2265",
          900: "#1d1133",
        },
        text: {
          DEFAULT: "#3a3541de"
        },
        scrollBar: {
          DEFAULT: "#C2C4D1",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
