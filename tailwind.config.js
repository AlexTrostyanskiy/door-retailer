module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "card": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(3, 7, 18, 0.08) 0px 0px 0px 1px, rgba(3, 7, 18, 0.08) 0px 1px 2px -1px, rgba(3, 7, 18, 0.1) 0px 2px 8px 0px",
        "card-hover": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(3, 7, 18, 0.08) 0px 0px 0px 1px, rgba(3, 7, 18, 0.08) 0px 1px 2px -1px, rgba(3, 7, 18, 0.1) 0px 2px 8px 0px"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")]
};
