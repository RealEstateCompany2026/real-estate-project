import type { Config } from "tailwindcss";

const sharedConfig: Config = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#7b72f9",
                    foreground: "#ffffff",
                },
                semantic: {
                    success: "#7cd064",
                    warning: "#f8d862",
                    danger: "#e95d66",
                    info: "#33a0fa",
                },
                neutral: {
                    anthracite: "#474747",
                    "grey-bold": "#6d6d6d",
                    grey: "#b6b6b6",
                    "grey-light": "#e5e5e5",
                    "grey-ultra": "#fcfbfc",
                },
                background: {
                    DEFAULT: "#ffffff",
                    subtle: "#fcfbfc",
                    softRed: "#ffe9e9",
                    softBlue: "#e9f7ff",
                    softYellow: "#fffbdb",
                    overlay: "rgba(0, 0, 0, 0.5)",
                },
                text: {
                    DEFAULT: "#474747",
                    muted: "#6d6d6d",
                    light: "#b6b6b6",
                }
            },
            fontFamily: {
                sans: ["var(--font-roboto)", "Roboto", "sans-serif"],
            },
            fontSize: {
                sm: ["0.875rem", { lineHeight: "1rem" }],
                base: ["1rem", { lineHeight: "1.375rem" }],
                lg: ["1.125rem", { lineHeight: "1.5rem" }],
                xl: ["1.25rem", { lineHeight: "1.625rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.75rem", { lineHeight: "2.125rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "5xl": ["2.5rem", { lineHeight: "2.5rem" }],
            },
            borderRadius: {
                sm: "0.25rem",
                md: "0.5rem",
                lg: "0.75rem",
                xl: "1rem",
            },
            boxShadow: {
                card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
            }
        },
    },
    plugins: [],
};

export default sharedConfig;
