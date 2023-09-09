/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Bg-Chair": "url('./src/assets/images/bg.png')",
        "doctors-bg": "url('./src/assets/images/appointment.png')",
        "footer-bg": "url('./src/assets/images/footer.png')",
        "appointment-bg": "url('./src/assets/images/bg.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#3A4256",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
