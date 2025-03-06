/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#213555", // Deep Blue Slate
        secondary: "#3E5879", // Steel Teal
        accent: "#D8C4B6", // Muted Sandstone
        neutral: "#F5EFE7", // Warm Beige
      },
    },
  },
  plugins: [],
});