/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        login: "#F5F5F5",
        dash: "#DDDDDD",
        revenues: "#DDEFE0",
        transactions: "#F4ECDD",
        likes: "#EFDADA",
        users: "#DEE0EF",
      },
      textColor: {
        loginBtn: "#858585",
        link: "#346BD5",
        gray: "#858585",
      },
    },
  },
  plugins: [],
};
