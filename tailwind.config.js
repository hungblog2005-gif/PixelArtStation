/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0078f2",
        "primary-hover": "#0069d2",
        "background-base": "#121212",
        surface: "#181818",
        card: "#202020",
        "text-main": "#FFFFFF",
        "text-muted": "#AAAAAA",
        "border-light": "#2A2A2A",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -1px rgba(0,0,0,0.24)",
      },
    },
  },
  plugins: [],
}
