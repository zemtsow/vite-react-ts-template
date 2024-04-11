/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#46C669"
      },
      screens: {
        "mobileS": "320px",
        "mobileM": "375px",
        "mobileL": "425px",
      },
      margin: {
        "y-100": "100px 0"
      },
      padding: {
        "y-100": "100px 0"
      },
    },
  },
  plugins: [],
}

