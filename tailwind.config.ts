import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: {
               DEFAULT: "#021bbe",
               100: "#ccd1f2",
               200: "#9aa4e5",
               300: "#6776d8",
               400: "#3549cb",
               500: "#021bbe",
               600: "#021698",
               700: "#011072",
               800: "#010b4c",
               900: "#000526",
            },
            danger: {
               DEFAULT: "#d53002",
               100: "#f7d6cc",
               200: "#eeac9a",
               300: "#e68367",
               400: "#dd5935",
               500: "#d53002",
               600: "#aa2602",
               700: "#801d01",
               800: "#551301",
               900: "#2b0a00",
            },
            success: {
               DEFAULT: "#00dc54",
               100: "#ccf8dd",
               200: "#99f1bb",
               300: "#66ea98",
               400: "#33e376",
               500: "#00dc54",
               600: "#00b043",
               700: "#008432",
               800: "#005822",
               900: "#002c11",
            },
            warning: {
               DEFAULT: "#fed102",
               100: "#fff6cc",
               200: "#ffed9a",
               300: "#fee367",
               400: "#feda35",
               500: "#fed102",
               600: "#cba702",
               700: "#987d01",
               800: "#665401",
               900: "#332a00",
            },
            info: {
               DEFAULT: "#04d9ff",
               100: "#cdf7ff",
               200: "#9bf0ff",
               300: "#68e8ff",
               400: "#36e1ff",
               500: "#04d9ff",
               600: "#03aecc",
               700: "#028299",
               800: "#025766",
               900: "#012b33",
            },
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [],
};
export default config;
