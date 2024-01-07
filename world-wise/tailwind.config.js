/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        manrope: ['"Manrope", sans-serif'],
        balsam: ["'Balsamiq Sans', sans-serif"],
        roboto: ["'Roboto', sans-serif"],
      }
    },
  },
  plugins: [],
};
