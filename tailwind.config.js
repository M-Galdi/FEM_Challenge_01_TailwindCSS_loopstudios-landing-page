/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    // backgroundImage: {
    //   hero: "url('../images/desktop/image-hero.jpg')",
    // },

    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
