/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        primaryBlue: "#004FB4",
        paleYellow: "#FFE8A3",
        skyBlue: "#DAE7FF",
        lightGrayBlue: "#DFE8F9",
        offWhite: "#FDFEFF",
      },
    },
  },
  plugins: [],
};
