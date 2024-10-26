import { radixThemePreset } from "radix-themes-tw";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [radixThemePreset],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
      },
    },
  },
  plugins: [require("postcss-import"), require("tailwindcss-animate")],
};
export default config;
