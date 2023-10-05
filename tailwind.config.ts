import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        titleSize: "320px",
        img_2xl: "520px",
        loginInput: "300px",
      },
      height: {
        img_2xl: "420px",
        loginInput: "45px",
      },
      colors: {
        color_main_black: "#292929",
      },
    },
  },
  plugins: [],
};
export default config;
