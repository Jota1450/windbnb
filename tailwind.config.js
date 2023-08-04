/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // grid configuration for site layout
        layout: "auto 1fr auto",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 1px 6px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
