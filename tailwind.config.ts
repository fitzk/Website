import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const colors =   {
  prussian_blue: {
    DEFAULT: "#002642",
    100: "#00080d",
    200: "#000f1b",
    300: "#001728",
    400: "#001f35",
    500: "#002642",
    600: "#005a9b",
    700: "#008ef4",
    800: "#4eb5ff",
    900: "#a6daff",
  },
  flax: {
    DEFAULT: "#f5dd90",
    100: "#473807",
    200: "#8e700d",
    300: "#d5a814",
    400: "#eec748",
    500: "#f5dd90",
    600: "#f7e4a5",
    700: "#f9ebbc",
    800: "#fbf1d2",
    900: "#fdf8e9",
  },
  atomic_tangerine: {
    DEFAULT: "#f68e5f",
    100: "#411704",
    200: "#812e08",
    300: "#c2450b",
    400: "#f2621f",
    500: "#f68e5f",
    600: "#f8a680",
    700: "#f9bca0",
    800: "#fbd2bf",
    900: "#fde9df",
  },
  bittersweet: {
    DEFAULT: "#f76c5e",
    100: "#410803",
    200: "#831106",
    300: "#c41909",
    400: "#f42f1d",
    500: "#f76c5e",
    600: "#f9897e",
    700: "#faa69f",
    800: "#fcc4bf",
    900: "#fde1df",
  },
  reseda_green: {
    DEFAULT: "#708b75",
    100: "#161c17",
    200: "#2c372e",
    300: "#435346",
    400: "#596f5d",
    500: "#708b75",
    600: "#8ca290",
    700: "#a8baac",
    800: "#c5d1c7",
    900: "#e2e8e3",
  },
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        darker: {
          extend: "dark",
          colors: {
            ...colors,
            background: colors.prussian_blue.DEFAULT,
            foreground: colors.prussian_blue[300],
            primary: colors.flax,
            secondary: colors.reseda_green,
            focus: "#F182F6",
            dark: "#000000"
          },
          textColor: {
            primary: colors.prussian_blue,
            dark: "#000000"

          }
        },
      },
    }),
    require("tailwindcss-animated"),
  ],
};

export default config;
