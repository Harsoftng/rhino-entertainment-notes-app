/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx,jsx}",
    "./pages/**/*.{html,js,ts,tsx,jsx}",
    "./components/**/*.{html,js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "forest"],
  },
  darkMode: ["selector", '[data-theme="forest"]'],
};
