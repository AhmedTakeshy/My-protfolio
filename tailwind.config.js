/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      xs: "480px",
      ss: "567px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
    fontFamily: {
      secondary: "Mova",
      primary: "PG",
    },

    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        // about: "url('./assets/about.png')",
        // services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
