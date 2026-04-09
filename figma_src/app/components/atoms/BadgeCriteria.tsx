/**
 * BadgeCriteria - Badge de filtre/critère de recherche avec bouton de suppression
 * Based on Figma AtomeCriteria
 *
 * Structure:
 * - Pill-shaped badge avec icône CircleX à droite
 * - Padding intérieur: 8px de chaque côté
 * - Border-radius 16px
 * - 2 variantes : outlined (bordure seule), default (fond coloré)
 * - Support automatique light/dark via useTheme
 *
 * Variantes:
 * - outlined: bordure uniquement, fond transparent
 * - default: fond coloré (#ECEDEE light, #22252B dark)
 *
 * Usage:
 * <BadgeCriteria variant="outlined" label="Paris 75001" onRemove={() => {}} />
 * <BadgeCriteria variant="default" label="Appartement" onRemove={() => {}} />
 */

"use client";

import { CircleX } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export type BadgeCriteriaVariant = "outlined" | "default";

export interface BadgeCriteriaProps {
  variant?: BadgeCriteriaVariant;
  label: string;
  onRemove?: () => void;
  className?: string;
}

// Couleurs exactes depuis Figma AtomeCriteria
const BADGE_CRITERIA_COLORS = {
  light: {
    outlined: {
      bg: "transparent",
      border: "var(--neutral-500)",
      text: "var(--neutral-500)",
      iconColor: "var(--neutral-500)",
    },
    default: {
      bg: "var(--neutral-white)", // neutral/white
      border: "transparent",
      text: "var(--neutral-500)",
      iconColor: "var(--neutral-500)",
    },
  },
  dark: {
    outlined: {
      bg: "transparent",
      border: "var(--neutral-200)",
      text: "var(--neutral-100)",
      iconColor: "var(--neutral-100)",
    },
    default: {
      bg: "var(--neutral-700)",
      border: "transparent",
      text: "var(--neutral-100)",
      iconColor: "var(--neutral-100)",
    },
  },
};

export function BadgeCriteria({
  variant = "outlined",
  label,
  onRemove,
  className = "",
}: BadgeCriteriaProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = isDark
    ? BADGE_CRITERIA_COLORS.dark[variant]
    : BADGE_CRITERIA_COLORS.light[variant];

  return (
    <div
      className={`relative inline-flex items-center rounded-[16px] ${className}`.trim()}
      style={{
        backgroundColor: colors.bg,
      }}
    >
      {/* Border overlay - uniquement pour variant outlined */}
      {variant === "outlined" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[16px] border border-solid"
          style={{
            borderColor: colors.border,
          }}
        />
      )}

      {/* Content container - 8px padding de chaque côté */}
      <div
        className="relative flex items-center gap-[10px]"
        style={{
          padding: "8px",
        }}
      >
        {/* Label */}
        <p
          className="shrink-0 whitespace-nowrap font-['Roboto',sans-serif] text-[14px] leading-[16px] tracking-[0.14px]"
          style={{
            fontWeight: 700, // Bold
            color: colors.text,
          }}
        >
          {label}
        </p>

        {/* Remove button avec icône CircleX */}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="relative flex size-[18px] shrink-0 items-center justify-center transition-opacity hover:opacity-70 focus:outline-none focus-visible:opacity-70"
            aria-label={`Supprimer le filtre ${label}`}
          >
            <CircleX
              className="size-[18px]"
              strokeWidth={1.5}
              style={{ color: colors.iconColor }}
            />
          </button>
        )}
      </div>
    </div>
  );
}
