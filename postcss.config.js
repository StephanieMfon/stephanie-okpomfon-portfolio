module.exports = {
  darkMode: "dark",
  theme: {
    extend: {
      colors: {
        light: "#ffffff", // Light mode text color
        dark: "#000000", // Dark mode text color
        primary: {
          light: "#4c51bf", // Light mode primary color
          dark: "#d53f8c", // Dark mode primary color
        },
      },
    },
    plugins: {
      tailwindcss: {},
      // autoprefixer: {},
    },
  },
};
