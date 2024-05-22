import type { Config } from "tailwindcss";
import { appTheme } from './public/appTheme';

const config: Config = {
  prefix: 'tw-',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: { ...appTheme }
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false
  // }
};
export default config;
