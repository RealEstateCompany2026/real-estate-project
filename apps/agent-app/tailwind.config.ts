import type { Config } from "tailwindcss";
import sharedConfig from "@real-estate/ui/tailwind.config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [sharedConfig],
    theme: {
        extend: {},
    },
};

export default config;
