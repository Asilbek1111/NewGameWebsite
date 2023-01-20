module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4506AA",
        own_gray: "#F5F6FA",
        gray_light: "#B2C2DF",
        dark_gray: "#667281",
        light_blue: "#70AEFD",
      },
    },
    fontFamily: {
      audiowide: ["Audiowide"],
      
    },
  },
  plugins: [],
};
