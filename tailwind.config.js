/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'input': '0px 4px 10px rgba(0, 0, 0, 0.25)',
      },
      borderColor: {
        'googleLogin': '3px solid #2A313B'
      }
    },
  },
  plugins: [],
}