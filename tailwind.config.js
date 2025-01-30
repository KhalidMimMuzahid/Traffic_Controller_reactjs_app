/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#153448", // Deep Blue Slate
        secondary: "#3C5B6F", // Steel Teal
        accent: "#948979", // Muted Sandstone
        neutral: "#DFD0B8", // Warm Beige
      },
    },
  },
  plugins: [],
});
