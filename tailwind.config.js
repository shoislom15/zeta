module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "about-career": "url('/src/assets/career_about.jpg')",
      },
      colors: {
        orange: "rgb(250, 84, 28)",
        version: "rgb(0, 103, 170)",
        versionbg: "rgba(0, 177, 237, 0.16)",
        headerbg: "rgba(255, 255, 255, 0.8) !important",
        headertext: "#637381 !important",
        hometext: "#919eab !important",
        primary: "#FA541C",
        footerText: "#637381",
        transparent: "transparent",
        inputcolor: "rgba(145, 158, 171, 0.08)",
        aquaText: "rgb(34, 184, 207)",
      },
      spacing: {
        "120px": "120px",
        alt2: "-4px",
        "12%": "12%",
      },
      width: {
        "75px": "75px",
        "6px": "6px",
        "564px": "564px",
        "480px": "480px",
      },

      maxWidth: {
        "466px": "466px",
      },

      height: {
        "6px": "6px",
      },
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "4rem": "4rem",
        "0.875rem": "0.875rem",
      },
      lineHeight: {
        1.25: "1.25",
      },
      keyframes: {
        spin: {
          "100%": { transform: "rotate(-360deg)" },
        },
        round: {
          "0%": { transform: "translate(7px, 0)" },
          "13%": { transform: "translate(5px, -5px)" },
          "26%": { transform: "translate(0px, -7px)" },
          "39%": { transform: "translate(-5px, -5px)" },
          "52%": { transform: "translate(-7px, 0px)" },
          "65%": { transform: "translate(-5px, 5px)" },
          "78%": { transform: "translate(0px, 7px)" },
          "91%": { transform: "translate(5px, 5px)" },
          "100%": { transform: "translate(7px, 0px)" },
        },
        altRound: {
          "0%": { transform: "translate(7px, 0)" },
          "91%": { transform: "translate(5px, 5px)" },
          "78%": { transform: "translate(0px, 7px)" },
          "65%": { transform: "translate(-5px, 5px)" },
          "52%": { transform: "translate(-7px, 0px)" },
          "39%": { transform: "translate(-5px, -5px)" },
          "26%": { transform: "translate(0px, -7px)" },
          "13%": { transform: "translate(5px, -5px)" },
          "100%": { transform: "translate(7px, 0px)" },
        },
      },
      screens: {
        "900px": "900px",
        "1100px": "1100px",
      },
    },
  },
  plugins: [],
};
