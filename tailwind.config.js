/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      permanent: ["Permanent Marker", "sans-serif"],
      Obitron: ["Orbitron", "sans-serif"],
      Outfit: ["Outfit", "sans -serif"],
      Raleway: ["Raleway", "sans-serif"],
    },

    extend: {
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animated")],
};
