/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      grey: {
        1: "#121212",
        2: "#333333",
        3: "#555555",
        4: "#777777",
        5: "#999999",
        6: "#BBBBBB",
        7: "#DDDDDD",
      },
    },
  },
  plugins: [],
};
