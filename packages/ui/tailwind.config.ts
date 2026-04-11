import type { Config } from "tailwindcss";

/**
 * RealAgent Design System — Tailwind Configuration
 *
 * This config maps CSS custom properties (from tokens.css) to Tailwind utilities.
 *
 * TOKEN LAYERS:
 *   Layer 1 (Primitives):  --neutral-500, --purple-500, etc.   → palette.neutral.500, palette.purple.500
 *   Layer 2 (Semantic):    --branded-500, --success-500, etc.   → (used internally by Layer 3)
 *   Layer 3 (Mapped):      --surface-*, --text-*, --icon-*, --border-*  → surface.*, text.*, icon.*, border.*
 *
 * RULE: Components should ONLY use Layer 3 mapped tokens.
 *       Layer 1 palette colors are exposed for rare exceptions (scores, gradients).
 */

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "var(--neutral-white)",
            black: "var(--neutral-black)",

            // ── Layer 1: Palette (use sparingly, prefer mapped tokens) ──
            neutral: {
                white: "var(--neutral-white)",
                50: "var(--neutral-50)",
                100: "var(--neutral-100)",
                200: "var(--neutral-200)",
                300: "var(--neutral-300)",
                400: "var(--neutral-400)",
                500: "var(--neutral-500)",
                600: "var(--neutral-600)",
                700: "var(--neutral-700)",
                800: "var(--neutral-800)",
                black: "var(--neutral-black)",
            },
            purple: {
                50: "var(--purple-50)",
                100: "var(--purple-100)",
                200: "var(--purple-200)",
                300: "var(--purple-300)",
                400: "var(--purple-400)",
                500: "var(--purple-500)",
                600: "var(--purple-600)",
                700: "var(--purple-700)",
                800: "var(--purple-800)",
                900: "var(--purple-900)",
            },
            green: {
                50: "var(--green-50)",
                100: "var(--green-100)",
                200: "var(--green-200)",
                300: "var(--green-300)",
                400: "var(--green-400)",
                500: "var(--green-500)",
                600: "var(--green-600)",
                700: "var(--green-700)",
                800: "var(--green-800)",
            },
            red: {
                50: "var(--red-50)",
                100: "var(--red-100)",
                200: "var(--red-200)",
                300: "var(--red-300)",
                400: "var(--red-400)",
                500: "var(--red-500)",
                600: "var(--red-600)",
                700: "var(--red-700)",
                800: "var(--red-800)",
            },
            blue: {
                50: "var(--blue-50)",
                100: "var(--blue-100)",
                200: "var(--blue-200)",
                300: "var(--blue-300)",
                400: "var(--blue-400)",
                500: "var(--blue-500)",
                600: "var(--blue-600)",
                700: "var(--blue-700)",
                800: "var(--blue-800)",
            },
            orange: {
                50: "var(--orange-50)",
                100: "var(--orange-100)",
                200: "var(--orange-200)",
                300: "var(--orange-300)",
                400: "var(--orange-400)",
                500: "var(--orange-500)",
                600: "var(--orange-600)",
                700: "var(--orange-700)",
                800: "var(--orange-800)",
            },

            // ── Layer 3: Mapped tokens (PREFERRED — use these in components) ──

            // Surface colors → bg-surface-*
            surface: {
                page: "var(--surface-page)",
                "neutral-default": "var(--surface-neutral-default)",
                "neutral-action": "var(--surface-neutral-action)",
                "neutral-action-hover": "var(--surface-neutral-action-hover)",
                "branded-default": "var(--surface-branded-default)",
                "branded-action": "var(--surface-branded-action)",
                "branded-action-hover": "var(--surface-branded-action-hover)",
                "branded-subtle": "var(--surface-branded-subtle)",
                elevated: "var(--surface-elevated)",
                container: "var(--surface-container)",
                disabled: "var(--surface-disabled)",
                success: "var(--surface-success)",
                "success-subtle": "var(--surface-success-subtle)",
                error: "var(--surface-error)",
                "error-subtle": "var(--surface-error-subtle)",
                information: "var(--surface-information)",
                warning: "var(--surface-warning)",
                "warning-subtle": "var(--surface-warning-subtle)",
            },

            // Icon colors → text-icon-*
            icon: {
                "neutral-default": "var(--icon-neutral-default)",
                "neutral-action": "var(--icon-neutral-action)",
                "neutral-action-hover": "var(--icon-neutral-action-hover)",
                "neutral-on-action": "var(--icon-neutral-on-action)",
                "branded-default": "var(--icon-branded-default)",
                "branded-action": "var(--icon-branded-action)",
                "branded-action-hover": "var(--icon-branded-action-hover)",
                "branded-on-action": "var(--icon-branded-on-action)",
                placeholder: "var(--icon-placeholder)",
                disabled: "var(--icon-disabled)",
                success: "var(--icon-success)",
                error: "var(--icon-error)",
                information: "var(--icon-information)",
                warning: "var(--icon-warning)",
            },

            // Text colors → text-content-*
            content: {
                hero: "var(--text-hero)",
                headings: "var(--text-headings)",
                body: "var(--text-body)",
                caption: "var(--text-caption)",
                strong: "var(--text-strong)",
                subtle: "var(--text-subtle)",
                placeholder: "var(--text-placeholder)",
                "neutral-action": "var(--text-neutral-action)",
                "neutral-on-action": "var(--text-neutral-on-action)",
                "branded-action": "var(--text-branded-action)",
                "branded-on-action": "var(--text-branded-on-action)",
                "branded-strong": "var(--text-branded-strong)",
                disabled: "var(--text-disabled)",
                success: "var(--text-success)",
                error: "var(--text-error)",
                information: "var(--text-information)",
                warning: "var(--text-warning)",
            },

            // Border colors → border-edge-*
            edge: {
                "neutral-default": "var(--border-neutral-default)",
                "neutral-action": "var(--border-neutral-action)",
                default: "var(--border-default)",
                subtle: "var(--border-subtle)",
                divider: "var(--border-divider)",
                "branded-default": "var(--border-branded-default)",
                "branded-action": "var(--border-branded-action)",
                disabled: "var(--border-disabled)",
                success: "var(--border-success)",
                "success-default": "var(--border-success-default)",
                error: "var(--border-error)",
                "error-default": "var(--border-error-default)",
                information: "var(--border-information)",
                "information-default": "var(--border-information-default)",
                warning: "var(--border-warning)",
                "warning-default": "var(--border-warning-default)",
            },
        },

        // Keep Tailwind defaults for spacing, borderRadius, borderWidth, boxShadow
        // and EXTEND with our DS tokens below

        extend: {
            // DS token spacing aliases (override matching keys from Tailwind defaults)
            spacing: {
                "20": "80px",
                "24": "96px",
                "64": "256px",
            },

            borderRadius: {
                none: "0px",
                DEFAULT: "var(--border-radius-200)",  // 8px
                md: "var(--border-radius-200)",        // 8px
                lg: "var(--border-radius-400)",        // 16px
                "2xl": "var(--border-radius-700)",     // 28px
            },

            boxShadow: {
                card: "0px 4px 12px rgba(0, 0, 0, 0.05)",
            },

            fontFamily: {
                sans: ["var(--font-family)", "sans-serif"],
            },

            fontSize: {
                h1: ["var(--text-h1)", { lineHeight: "var(--lh-h1)", fontWeight: "700" }],
                h2: ["var(--text-h2)", { lineHeight: "var(--lh-h2)", fontWeight: "700" }],
                h3: ["var(--text-h3)", { lineHeight: "var(--lh-h3)", fontWeight: "700" }],
                h4: ["var(--text-h4)", { lineHeight: "var(--lh-h4)", fontWeight: "700" }],
                h5: ["var(--text-h5)", { lineHeight: "var(--lh-h5)", fontWeight: "700" }],
                h6: ["var(--text-h6)", { lineHeight: "var(--lh-h6)", fontWeight: "700" }],
            },
        },
    },
    plugins: [],
};

export default config;
