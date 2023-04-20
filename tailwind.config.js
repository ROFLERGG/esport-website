/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["index.html"],
  theme: {
    extend: {
    },
    plugins: [require("daisyui")],
}
}