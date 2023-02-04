/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors and names are pulled directly from invision files
        "primary-blue": "#0C0EB7",
        white: "#FFFFFF",
        "off-white": "#FAFAFA",
        black: "#000000",
        "gray-01": "#848484",
        "gray-02": "#878787",
        "gray-03": "#858585",
      },
    },
  },
  plugins: [],
};
