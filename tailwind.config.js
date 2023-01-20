module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px",
      "tel": "350px"
    },
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
