/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#162939",
      secondary: "#f07539",
    },
    screens: {
      xs: "480px",
      ss: "567px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        mova: "Mova",
      },
    },
  },
  plugins: [],
};
