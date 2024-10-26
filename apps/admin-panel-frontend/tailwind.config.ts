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
        "blue-100": "rgba(51, 65, 251, 1)",
        "gray-100": "rgba(0, 68, 148, 0.07)",
      },
    },
  },
  plugins: [require("postcss-import"), require("tailwindcss-animate")],
};
export default config;
