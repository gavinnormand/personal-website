/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#222222",
        },
        menus: {
          DEFAULT: "#333333",
          dark: "#1A1A1A",
        },
        primary: {
          DEFAULT: "#222222",
          dark: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#444444",
          dark: "#BBBBBB",
        },
        accent: {
          DEFAULT: "#34A87C",
          dark: "#2D936C",
        },
        icon: {
          DEFAULT: "#FFFFFF",
          hover: "#BBBBBB",
        }
      },
    },
    screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        "mdlg": "812px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(primary|secondary)/,
    },
    {
      pattern: /dark:bg-(primary|secondary)-dark/, 
    },
  ],
};
