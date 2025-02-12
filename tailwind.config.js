/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "hover:text-gray-700",
    "hover:text-blue-500",
    "hover:text-pink-500",
    "hover:shadow-yellow-400",
    "hover:shadow-green-400",
    "hover:shadow-blue-600",
    "hover:shadow-blue-300",
    "hover:shadow-green-700",
    "hover:shadow-sky-300",
    "hover:shadow-red-400",
    "hover:shadow-gray-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
