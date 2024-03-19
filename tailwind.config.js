/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,html}"],
  theme: {
    extend: {
      fontSize: {
        sm: [
          "0.8rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.03em",
            fontWeight: "500",
          },
        ],
        base: [
          "1em",
          {
            lineHeight: "1.2rem",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
