/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      orange: {
        50: "rgba(254, 245, 242, 1)",
        100: "rgba(251, 234, 228, 1)",
        200: "rgba(246, 210, 197, 1)",
        300: "rgba(241, 183, 162, 1)",
        400: "rgba(235, 152, 123, 1)",
        500: "rgba(225, 104, 59, 1)",
        600: "rgba(217, 82, 33, 1)",
        700: "rgba(190, 72, 30, 1)",
        800: "rgba(155, 59, 23, 1)",
        900: "rgba(111, 42, 18, 1)",
        950: "rgba(84, 32, 12, 1)",
      },
      hvidgul: {
        50: "rgba(255, 253, 250, 1)",
        100: "rgba(255, 253, 250, 1)",
        200: "rgba(255, 253, 250, 1)",
        300: "rgba(255, 253, 250, 1)",
        400: "rgba(255, 253, 250, 1)",
        500: "rgba(254, 252, 245, 1)",
        600: "rgba(255, 226, 158, 1)",
        700: "rgba(255, 189, 36, 1)",
        800: "rgba(219, 154, 0, 1)",
        900: "rgba(158, 111, 1, 1)",
        950: "rgba(117, 81, 0, 1)",
      },
      brun: {
        50: "rgba(241, 239, 238, 1)",
        100: "rgba(228, 222, 221, 1)",
        200: "rgba(201, 190, 187, 1)",
        300: "rgba(174, 157, 153, 1)",
        400: "rgba(146, 125, 119, 1)",
        500: "rgba(113, 95, 90, 1)",
        600: "rgba(91, 76, 72, 1)",
        700: "rgba(68, 57, 53, 1)",
        800: "rgba(45, 38, 36, 1)",
        900: "rgba(23, 19, 18, 1)",
        950: "rgba(11, 10, 9, 1)",
      },
      white: "#fff",
      black: "#000",
      "transparent-brun": "rgba(91, 76, 72, 0.6000000238418579)",
    },

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      none: "0px",
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "160px",
      "6xl": "208px",
      "7xl": "320px",
      "8xl": "360px",
      "9xl": "424px",
    },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["EB Garamond", "serif"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      konsultativDesk: ["0.8rem", { lineHeight: "1.2rem" }],
      bodyDesk: ["1.125rem", { lineHeight: "1.7rem" }],
      baseDesk: ["1.5rem", { lineHeight: "2.25rem" }],
      smallDesk: ["2rem", { lineHeight: "3rem" }],
      smallMediumDesk: ["2.45rem", { lineHeight: "3.7rem" }],
      mediumDesk: ["3.5rem", { lineHeight: "5.25rem" }],
      mediumLargeDesk: ["4.7rem", { lineHeight: "7rem" }],
      largeDesk: ["6.3rem", { lineHeight: "9.45rem" }],

      konsultativMobile: ["0.8rem", { lineHeight: "1.2rem" }],
      bodyMobile: ["1rem", { lineHeight: "1.5rem" }],
      baseMobile: ["1.2rem", { lineHeight: "1.8rem" }],
      smallMobile: ["1.4rem", { lineHeight: "2.1rem" }],
      smallMediumMobile: ["1.7rem", { lineHeight: "2.5rem" }],
      mediumMobile: ["2rem", { lineHeight: "3rem" }],
      mediumLargeMobile: ["2.5rem", { lineHeight: "3.75rem" }],
      largeMobile: ["3rem", { lineHeight: "4.5rem" }],
    },
  },

  /* Tilføj dit fontvægt-hierarki nedenfor */
  fontWeight: {
    light: "300",
    regular: "400",
    semibold: "500",
    bold: "600",
    extrabold: "700",
  },

  /* Borders - borderstørrelser herunder */
  borderWidth: {
    0: "0px",
    DEFAULT: "1px",
    2: "2px",
    3: "3px",
    4: "4px",
  },

  extend: {
    /* Border radius størrelser herunder */
    borderRadius: {
      none: "0px",
      xs: "10px",
      s: "40px",
      m: "60px",
      lg: "70px",
      xl: "80px",
    },
    /* Box shadows herunder */
    boxShadow: {
      box: "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 16px -162px 45px 0px rgba(113, 100, 71, 0.00), 11px -103px 42px 0px rgba(113, 100, 71, 0.01), 6px -58px 35px 0px rgba(113, 100, 71, 0.05), 3px -26px 26px 0px rgba(113, 100, 71, 0.09), 1px -6px 14px 0px rgba(113, 100, 71, 0.10)",
      filter: " 0px -278px 78px 0px rgba(119, 106, 99, 0.00), 0px -178px 71px 0px rgba(119, 106, 99, 0.01), 0px -100px 60px 0px rgba(119, 106, 99, 0.05), 0px -45px 45px 0px rgba(119, 106, 99, 0.09), 0px -11px 24px 0px rgba(119, 106, 99, 0.10)",
      card: "0px 70px 20px 0px rgba(188, 184, 174, 0.00), 0px 45px 18px 0px rgba(188, 184, 174, 0.01), 0px 25px 15px 0px rgba(188, 184, 174, 0.05), 0px 11px 11px 0px rgba(188, 184, 174, 0.09), 0px 3px 6px 0px rgba(188, 184, 174, 0.10)",
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
