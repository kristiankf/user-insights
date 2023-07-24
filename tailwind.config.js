/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "the-bg":
          "linear-gradient(180deg, rgb(200, 184, 158), rgb(246, 246, 246))",
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
    },
  },
  plugins: [],
};
