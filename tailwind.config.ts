import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"], // Pretendard 폰트를 사용하도록 설정
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      translate: {
        "2/5": "40%",
        "9/20": "45%",
        "12/25": "48.56789%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
        "7/8": "89.7123455%",
      },
      spacing: {
        "108": "26rem",
        "120": "38rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "12": "3rem",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2.5xl": "2rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8rem",
      "11xl": "9rem",
      "12xl": "10rem",
      "13xl": "11rem",
      "14xl": "12rem",
    },
  },
  plugins: [require("daisyui")],
  variants: {
    extend: {
      writingMode: ["responsive"],
    },
  },
};
export default config;
