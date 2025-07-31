/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B2C45",
          50: "#FBECEE", // very light tint
          100: "#F4D3D9",
          200: "#EDA8B1",
          300: "#E47D89",
          400: "#D94F64",
          500: "#C23455",
          600: "#A62C4A",
          700: "#8B2C45", // base
          800: "#6B2236",
          900: "#4E1928",
        },
      },
    },
  },
  plugins: [],
};
