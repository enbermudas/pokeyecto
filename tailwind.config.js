/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e4dba0",
        secondary: "#a0cbe4",
        accent: "#b094e0",
        base: "#000c0b",
      },
    },
  },
  plugins: [],
};
