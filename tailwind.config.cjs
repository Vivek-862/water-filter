/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { opacity: 0, transform: "translateY(-40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
