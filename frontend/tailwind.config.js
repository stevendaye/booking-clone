/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#003B95",
        "secondary-blue": "#00224F",
        "light-blue": "#006CE4",
        "main-yellow": "#FFB700",
        "main-gray": "#e4e4e4",
        "secondary-gray": "#808080",
      },
      fontFamily: {
        bookingRegular: "BookingRegular",
        bookingBold: "BookingBold",
        bookingExtraBold: "BookingExtraBold",
        circularXXWeb: "CircularXXWeb",
      },
    },
  },
  plugins: [],
};
