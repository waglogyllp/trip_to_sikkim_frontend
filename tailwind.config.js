/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',  // Example color
        secondary: '#14171A',
        accent: '#657786',
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],  // Example font
        heading: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
