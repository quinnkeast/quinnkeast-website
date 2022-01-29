module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "CalibreWeb",
      serif: "TiemposTextWeb",
    },
    extend: {
      colors: {
        tan: {
          DEFAULT: "#f9f0e0",
        },
        black: {
          DEFAULT: "#25231b",
          lighter: "#8F897C",
        },
        yellow: {
          DEFAULT: "#F4AE23",
        },
      },
      maxHeight: {
        "75vh": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
