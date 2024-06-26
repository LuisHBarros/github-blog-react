module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3294F8",
        "base-title": {
          light: "#1A1A1A", // Versão clara
          dark: "#E7EDF4", // Versão escura
        },
        "base-subtitle": {
          light: "#2A2A2A",
          dark: "#C4D4E3",
        },
        "base-text": {
          light: "#3A3A3A",
          dark: "#AFC2D4",
        },
        "base-span": {
          light: "#505050",
          dark: "#7B96B2",
        },
        "base-label": {
          light: "#8A8A8A",
          dark: "#3A536B",
        },
        "base-border": {
          light: "#B0B0B0",
          dark: "#1C2F41",
        },
        "base-post": {
          light: "#D0D0D0",
          dark: "#112131",
        },
        "base-profile": {
          light: "#F0F0F0",
          dark: "#0B1B2B",
        },
        "base-background": {
          light: "#FFFFFF",
          dark: "#071422",
        },
        "base-input": {
          light: "#E0E0E0",
          dark: "#040F1A",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      lineHeight: {
        normal: "160%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
