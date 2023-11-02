import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
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
        color_main_text: "#58644D",
        color_todo_gray: "#F4F4F4",
        color_todo_green: "#92BF1F",
        color_todo_darkGreen: "#008C36",
        color_todo_text: "#575756",
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
    require("tailwind-scrollbar"),
  ],
};
export default config;
