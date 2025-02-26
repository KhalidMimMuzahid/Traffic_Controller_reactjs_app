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


        // primary: "#153448", // Deep Blue Slate
        // secondary: "#3C5B6F", // Steel Teal
        // accent: "#948979", // Muted Sandstone
        // neutral: "#DFD0B8", // Warm Beige

        // primary: "#222831", // Deep Blue Slate
        // secondary: "#31363F", // Steel Teal
        // accent: "#76ABAE", // Muted Sandstone
        // neutral: "#EEEEEE", // Warm Beige