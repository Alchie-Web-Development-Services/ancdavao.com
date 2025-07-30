/** @type {import('tailwindcss').Config} */
import { join } from "path";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF2F4",
          100: "#FBE7EB",
          200: "#F7CEDA",
          300: "#F2A8C3",
          400: "#EB7EAA",
          500: "#E0528B",
          600: "#D03A74",
          700: "#8B2C45",
          800: "#6F2337",
          900: "#531A29",
        },
        secondary: {
          50: "#F0F9FA",
          100: "#E0F2F4",
          200: "#BEE7EB",
          300: "#99DCE0",
          400: "#6ECFD4",
          500: "#47BFC6",
          600: "#30A8B0",
          700: "#2899A7",
          800: "#207A84",
          900: "#185B62",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#FFFFFF",
          200: "#E5E5E5",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#2E2E2E",
          900: "#111827",
        },
        blush_overlay: "#8B2C45AA",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  corePlugins: {
    preflight: true,
  },
  important: true,
  darkMode: "class",
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["active", "disabled"],
      textColor: ["active", "disabled"],
    },
  },
};
