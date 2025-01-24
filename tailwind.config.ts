import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      "2xl": "1400px",
    },
    fontFamily: {
      primary: ["var(--font-orbitron)"],
      secondary: ["var(--font-Rajdhani)"],
      tertiary: ["var(--font-Aldrich)"],
    },

    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

      },
      backgroundImage: {
        site: "url('/site-bg.webp')",
        banner: "url('/img/banner-bg.webp')",
        about: "url('/img/about.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
