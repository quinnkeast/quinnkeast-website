// hack for including classes from projects repo in tailwind
// if working with local projects, then requires projects repo
const isLocalProjects = process.env.LOCAL_PROJECTS === "true";
const mdxPath = isLocalProjects
  ? "../quinnkeast-projects/**/*.mdx"
  : "./temp-mdx-files/**/*.mdx";

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,md,mdx}",
    "./components/**/*.{js,jsx,ts,md,mdx}",
    "./_posts/**/*.{js,jsx,ts,md,mdx}",
    mdxPath,
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
