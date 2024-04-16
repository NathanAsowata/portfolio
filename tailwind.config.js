/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: "#098D45",
        dark: "#002412",
        light: "#D8FFE8",
        hover: "#05B454",
      },
      fontFamily: {
        logo: ["Sofia", "cursive"],
        heading: ["Sofia Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

