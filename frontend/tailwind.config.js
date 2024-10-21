/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(300%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(300%)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.5s ease-in-out",
        "slide-down": "slide-down 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
