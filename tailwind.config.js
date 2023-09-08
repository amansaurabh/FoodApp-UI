/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '22px'],
      sm: ['14px', '20px'],
      base: ['16px', '32px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['62px', '69px'],
      '8xl': ['96px', '106px']
    },

    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': "#0E2368",
        "coral-red": "#E23744",
        "slate-gray": "#444957",
        "pale-blue": "#F5F6FF",
        "footer-text": "rgba(100, 104, 116, 1)",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}