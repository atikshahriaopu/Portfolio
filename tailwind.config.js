/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        // Solarized Dark color palette
        solarized: {
          base03: "#002b36", // background
          base02: "#073642", // background highlights
          base01: "#586e75", // comments / secondary content
          base00: "#657b83", // body text / default code
          base0: "#839496", // primary content
          base1: "#93a1a1", // optional emphasized content
          base2: "#eee8d5", // background highlights (light)
          base3: "#fdf6e3", // background (light)
          yellow: "#b58900",
          orange: "#cb4b16",
          red: "#dc322f",
          magenta: "#d33682",
          violet: "#6c71c4",
          blue: "#268bd2",
          cyan: "#2aa198",
          green: "#859900",
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
