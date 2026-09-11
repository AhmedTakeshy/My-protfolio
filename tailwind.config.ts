import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
      sans: ["var(--font-plex-sans)"],
      mono: ["var(--font-plex-mono)"],
      // Legacy aliases so any un-migrated class reference still resolves.
      primary: ["var(--font-plex-sans)"],
      secondary: ["var(--font-plex-sans)"],
    },

    extend: {
      colors: {
        bg: "#0B0E13",
        surface: "#141922",
        border: "#232A36",
        ink: "#E7EAEE",
        muted: "#7C8592",
        accent: "#FF7A45",
        // Legacy alias so any un-migrated `bg-primary`/`text-primary` usage
        // resolves to the new base instead of the old near-black.
        primary: "#0B0E13",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      transitionDuration: {
        '8000': '8000ms',
      }
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
