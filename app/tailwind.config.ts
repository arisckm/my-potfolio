import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F9F7F2",      
          surface: "#EEEBE3", 
          accent: "#8E9AAF",  
          text: "#2B2D42",    
        },
      },
    },
  },
  plugins: [],
};
export default config;