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
          DEFAULT: "#EFEFEF",
          dark: "#222222",
        },
        menus: {
          DEFAULT: "#333333",
          dark: "#1A1A1A",
        },
        primary: {
          DEFAULT: "#222222",
          dark: "#EFEFEF",
        },
        secondary: {
          DEFAULT: "#333333",
          dark: "#DDDDDD",
        },
        accent: {
          DEFAULT: "#2D936C",
          dark: "#34A87C",
        },
        icon: {
          DEFAULT: "#FFFFFF",
          hover: "#CCCCCC",
        }
      },
    },
  },
  plugins: [],
};
