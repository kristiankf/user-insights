/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "the-bg":
          "linear-gradient(rgba(255, 136, 0, 0.39), rgba(255, 255, 255, 0.5))",
      },
      colors: {
        primary: "#0B2E66",
        secondary: "#F99A00",
      },
      fontFamily: {
        heading: ["Butler"],
        body: ["Inter"],
        "heading-light": ["Butler Light"],
        "heading-normal": ["Butler Normal"],
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
