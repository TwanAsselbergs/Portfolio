/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(150%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(400%)" },
        },
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-in-out",
        "slide-down": "slide-down 0.4s ease-in-out",
        scroll: "scroll 100s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
