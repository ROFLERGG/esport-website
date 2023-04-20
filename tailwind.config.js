/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")]
}