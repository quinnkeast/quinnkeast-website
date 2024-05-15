module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,md,mdx}",
    "./components/**/*.{js,jsx,ts,md,mdx}",
    "./_posts/**/*.{js,jsx,ts,md,mdx}",
    "../quinnkeast-projects/projects/**/*.{js,jsx,ts,md,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "CalibreWeb",
      serif: "TiemposTextWeb",
    },
    extend: {
      colors: {
        tan: {
          DEFAULT: "#FAF3E6",
        },
        black: {
          DEFAULT: "#25231b",
          lighter: "#8A8783",
        },
        yellow: {
          DEFAULT: "#FAB855",
        },
      },
      maxHeight: {
        "75vh": "75vh",
      },
      padding: {
        "2px": "2px",
      },
      fontSize: {
        projectBasis: [".925rem"],
        xxs: [
          ".625rem",
          {
            lineHeight: ".625rem",
            letterSpacing: ".325px",
          },
        ],
      },
    },
  },
  plugins: [],
};
