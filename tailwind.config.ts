import type { Config } from "tailwindcss";

const sharedConfig: Omit<Config, "content"> = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#7b72f9", // Indigo - likely the main brand color
                    foreground: "#ffffff",
                },
                semantic: {
                    success: "#7cd064", // Green - Fonctionnelle
                    warning: "#f8d862", // Yellow - Fonctionnelle
                    danger: "#e95d66",  // Red - Fonctionnelle
                    info: "#33a0fa",    // Blue - Fonctionnelle
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
                    overlay: "rgba(0, 0, 0, 0.5)", // Black transparency 50%
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
                sm: ["0.875rem", { lineHeight: "1rem" }], // 14px, 16px LH
                base: ["1rem", { lineHeight: "1.375rem" }], // 16px, 22px LH
                lg: ["1.125rem", { lineHeight: "1.5rem" }], // 18px (intermediate)
                xl: ["1.25rem", { lineHeight: "1.625rem" }], // 20px, 26px LH (H3)
                "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px, 32px LH (H2)
                "3xl": ["1.75rem", { lineHeight: "2.125rem" }], // 28px, 34px LH (H1)
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px (intermediate)
                "5xl": ["2.5rem", { lineHeight: "2.5rem" }], // 40px, 40px LH (H0)
            },
            borderRadius: {
                sm: "0.25rem", // 4px
                md: "0.5rem",  // 8px
                lg: "0.75rem", // 12px
                xl: "1rem",    // 16px
            },
            boxShadow: {
                card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
            }
        },
    },
    plugins: [],
};

export default sharedConfig;
