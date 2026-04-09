/**
 * Badge - Composant de label contextuel (AtomeSticker)
 * Based on Figma AtomeSticker
 * 
 * Structure:
 * - Pill-shaped badge (border-radius 16px)
 * - Hauteur fixe 20px, largeur auto
 * - Border 1px + background coloré
 * - 6 variantes sémantiques × 2 modes (light/dark)
 * - Support automatique light/dark via useTheme
 * 
 * Variantes:
 * - default: gris neutre
 * - disabled: gris désactivé
 * - information: bleu
 * - warning: orange
 * - success: vert
 * - error: rouge
 * 
 * Usage:
 * <Badge variant="success" label="Actif" />
 * <Badge variant="warning" label="En attente" />
 * <Badge variant="error" label="Erreur" />
 */

"use client";

import { useTheme } from "../../context/ThemeContext";

export type BadgeVariant = "default" | "disabled" | "information" | "warning" | "success" | "error";

export interface BadgeProps {
  variant?: BadgeVariant;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

// Couleurs exactes depuis Figma AtomeSticker
const BADGE_COLORS = {
  light: {
    default: {
      bg: "transparent",
      border: "var(--neutral-500)",
      text: "var(--neutral-500)",
    },
    disabled: {
      bg: "var(--neutral-50)",
      border: "#A1A4AA",
      text: "#A1A4AA",
    },
    information: {
      bg: "#E5E6FF",
      border: "#BFC2FF",
      text: "#000AFF",
    },
    warning: {
      bg: "#FFF0E5",
      border: "#FFDABF",
      text: "#FF6B00",
    },
    success: {
      bg: "#E6F6E5",
      border: "#C3E9BF",
      text: "var(--success-500)",
    },
    error: {
      bg: "#FFE5E5",
      border: "#FFBFBF",
      text: "var(--error-500)",
    },
  },
  dark: {
    default: {
      bg: "transparent",
      border: "var(--neutral-200)",
      text: "var(--neutral-100)",
    },
    disabled: {
      bg: "var(--neutral-700)",
      border: "var(--neutral-500)",
      text: "#A1A4AA",
    },
    information: {
      bg: "#4A4595",
      border: "#635CC7",
      text: "#E5E3FE",
    },
    warning: {
      bg: "#803600",
      border: "#BF5000",
      text: "#FFE1CC",
    },
    success: {
      bg: "#0C6304",
      border: "#109204",
      text: "#CFEDCC",
    },
    error: {
      bg: "#800000",
      border: "#BF0000",
      text: "#FFCCCC",
    },
  },
};

export function Badge({ variant = "default", label, children, className = "", theme }: BadgeProps) {
  const themeContext = useTheme();
  const currentTheme = theme || themeContext.theme;
  const isDark = currentTheme === "dark";
  
  // Fallback pour les variantes invalides
  const safeVariant = variant in BADGE_COLORS.light ? variant : "default";
  const colors = isDark ? BADGE_COLORS.dark[safeVariant] : BADGE_COLORS.light[safeVariant];

  const content = label || children;

  return (
    <div
      className={`relative inline-flex h-[20px] items-center rounded-[16px] ${className}`.trim()}
      style={{
        backgroundColor: colors.bg,
      }}
    >
      {/* Border overlay (méthode Figma exacte) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[16px] border border-solid"
        style={{
          borderColor: colors.border,
        }}
      />

      {/* Content */}
      <div className="relative flex h-full items-center px-[8px] py-[4px]">
        <p
          className="shrink-0 whitespace-nowrap text-center font-['Roboto',sans-serif] text-[12px] leading-[14px] tracking-[0.12px] uppercase"
          style={{
            fontWeight: 700, // Bold
            color: colors.text,
          }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}