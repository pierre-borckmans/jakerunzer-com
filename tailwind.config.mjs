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
        gray: {
          50: "#f4f5f7",
          100: "#e4e8e9",
          200: "#ccd1d5",
          300: "#a8b1b8",
          400: "#7d8a93",
          500: "#626f78",
          600: "#545e66",
          700: "#495057",
          800: "#40454a",
          900: "#383b41",
          950: "#232529",
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
