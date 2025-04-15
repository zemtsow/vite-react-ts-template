/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      screens: {
        "mobileS": "320px",
        "mobileM": "375px",
        "mobileL": "425px",
        "xxl": "1400px",
        "bigTablet": "1921px",
      },
      width: {
        "screen-break": "1920px"
      },
      spacing: {
        '100': '100px'
      },
      padding: {
        "y-100": "100px 0"
      },
    },
  },
  plugins: [typography],
}

