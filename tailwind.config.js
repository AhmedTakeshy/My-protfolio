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
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ['var(--font-orbitron)'],
      secondary: ['var(--font-Rajdhani)'],
      tertiary: ['var(--font-Aldrich)'],
    },

    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('/site-bg.jpg')",
        banner: "url('/img/banner-bg.png')",
        about: "url('/img/about.png')",
      },
    },
  },
  plugins: [],
};
