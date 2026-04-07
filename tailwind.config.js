/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfaf4",
          100: "#faf3e0",
          200: "#f5e6c8",
          300: "#edd9a3",
        },
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#795548",
          800: "#5d4037",
          900: "#4e342e",
        },
        gold: {
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ffa000",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Lato'", "sans-serif"],
      },
      boxShadow: {
        warm: "0 4px 24px rgba(121, 85, 72, 0.15)",
        "warm-lg": "0 8px 40px rgba(121, 85, 72, 0.2)",
      },
    },
  },
  plugins: [],
};
