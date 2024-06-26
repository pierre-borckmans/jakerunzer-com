import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        article: "var(--article)",
        pink: {
          50: "#ffeff2",
          100: "#ffe0e7",
          200: "#ffc6d6",
          300: "#ff97b3",
          400: "#ff5d8c",
          500: "#ff2469",
          600: "#ff1769",
          700: "#d7004c",
          800: "#b40048",
          900: "#990244",
          950: "#570020",
        },
        gray: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#cacaca",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
      },
      fontFamily: {
        serif: [
          "'Playfair Display Variable'",
          ...defaultTheme.fontFamily.serif,
        ],
        mono: ["'JetBrains Mono Variable'", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        xs: "400px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-headings": theme("colors.fg"),
            "--tw-prose-body": theme("colors.article"),
            "--tw-prose-code": theme("colors.article"),
            "--tw-prose-links": theme("colors.article"),
            "--tw-prose-quotes": theme("colors.article"),
            "--tw-prose-quote-borders": theme("colors.article"),

            "h1, h2, h3": {
              fontFamily: theme("fontFamily.serif").join(", "),
            },

            code: {
              "&::before": {
                display: "none",
              },
              "&::after": {
                display: "none",
              },
            },

            a: {
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.pink.500"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
