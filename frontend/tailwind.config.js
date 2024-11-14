/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        background: "#F3f3f3",
        favorite: "#FF5841",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
