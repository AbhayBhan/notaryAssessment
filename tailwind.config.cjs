/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        notaryDarkPurple : "#2a1b52",
        notaryYellow : "#fde482",
        notaryGrey : "#d5cfe3",
        notaryTextPurple : "#645688",
        notarySideBarPurple : "#673AB7",
        notaryProgressBar : "#8b36fd",
        notaryDarkGrey : "#a5a0b0",
        notaryLightYellow : '#fef2be',
        notaryLightBlue : "#e5edfe",
        notaryDarkBlue : "#6761ec",
        notaryAlertRed : "#F4989C"
      }
    },
  },
  plugins: [require("@tailwindcss/forms"),
    require('tw-elements/dist/plugin')
  ],
}
