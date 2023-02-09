/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "767px" },
        md: { min: "768px", max: "1023" },
        lg: { min: "1024" }
      },
    },
  },
  plugins: [],
};
