/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: [" Helvetica", "sans-serif"],
      },
      daisyui: {
        themes: ["dark"],
      },
    },
  },
  plugins: [require("daisyui")],
};
