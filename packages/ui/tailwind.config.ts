import type { Config } from "tailwindcss";
import tokens from "./src/tokens.json";

// Mappers for Atomic Design Variables
const colors = Object.fromEntries(
    Object.keys(tokens.colors).map((key) => [key, `var(--color-${key})`])
);

const fontSize = Object.fromEntries(
    Object.entries(tokens.typography).map(([key, val]) => {
        const value: [string, { lineHeight: string; fontWeight: string }] = [
            `var(--font-size-${key})`,
            { lineHeight: `var(--line-height-${key})`, fontWeight: `var(--font-weight-${key})` }
        ];
        return [key, value];
    })
);

const spacing = Object.fromEntries(
    Object.keys(tokens.spacing).map((key) => [key, `var(--spacing-${key})`])
);

const borderRadius = Object.fromEntries(
    Object.keys(tokens.radius).map((key) => [key, `var(--radius-${key})`])
);

const boxShadow = Object.fromEntries(
    Object.keys(tokens.shadows).map((key) => [key, `var(--shadow-${key})`])
);

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        // Override Tailwind's default palette to STRICTLY use Figma tokens
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            ...colors,
            // Create semantic aliases based on extracted naming convention if needed
            primary: `var(--color-white-couleur-primaire)`,
            background: `var(--color-grey-ultra-background)`,
            'background-subtle': `var(--color-grey-light-background)`,
            'background-softBlue': `var(--color-soft-blue-background)`,
            'neutral-grey-light': `var(--color-grey-light-textes)`,
            'neutral-grey-bold': `var(--color-grey-bold-textes)`,
            'neutral-anthracite': `var(--color-anthracite-textes)`,
            'semantic-info': `var(--color-blue-couleur-fonctionnelle)`,
            'semantic-success': `var(--color-green-couleur-fonctionnelle)`,
            'semantic-warning': `var(--color-yellow-couleur-fonctionnelle)`,
            'semantic-destructive': `var(--color-red-couleur-fonctionnelle)`,
        },
        spacing: {
            ...spacing,
            '0': '0px',
            px: '1px',
            '0.5': '0.125rem',
            '1': '0.25rem',
            '1.5': '0.375rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '64': '16rem',
        },
        borderRadius: {
            ...borderRadius,
            none: '0px',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
        },
        boxShadow: {
            ...boxShadow,
            DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            card: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-roboto)', 'sans-serif'],
            },
            fontSize: {
                ...fontSize
            }
        },
    },
    plugins: [],
};

export default config;
