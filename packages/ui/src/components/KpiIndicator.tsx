"use client";

import React from "react";
import {
  Database,
  MessageCircle,
  ScrollText,
  Flame,
  Drill,
} from "lucide-react";

/**
 * KpiIndicator - Indicateur de performance KPI
 * Atom du design system RealAgent
 *
 * Affiche un KPI avec icône, valeur et indicateur visuel
 * Deux variantes :
 *   - vertical (défaut) : icône+valeur au-dessus, 9 barres verticales côte à côte en dessous (pour Lists/Cards)
 *   - straight : icône+valeur + pastille colorée en ligne (pour App bars)
 *
 * Couleurs des barres via tokens Layer 3 :
 *   - Remplies : --indicator-bar-filled-{success|error|warning} → *-500 (light) / *-600 (dark)
 *   - Vides : --indicator-bar-empty → neutral-100 (light) / neutral-600 (dark)
 *   - Vides hover (via group-hover) : --indicator-bar-empty-hover → neutral-200 (light) / neutral-500 (dark)
 */

/** Mapping KPI type → Lucide icon + aria-label */
const KPI_CONFIG = {
  qual: { Icon: Database, label: "Qualification" },
  eng: { Icon: MessageCircle, label: "Engagement" },
  conv: { Icon: ScrollText, label: "Conversion" },
  reac: { Icon: Flame, label: "Réactivation" },
  ent: { Icon: Drill, label: "Entretien" },
} as const;

type KpiType = keyof typeof KPI_CONFIG;

export interface KpiIndicatorProps {
  /** Type de KPI — sélectionne automatiquement l'icône et l'aria-label. Mutuellement exclusif avec icon. */
  kpi?: KpiType;
  /** Icône du KPI (élément React) — fallback si kpi n'est pas fourni */
  icon?: React.ReactNode;
  /** Valeur affichée (ex: "64%", "38") */
  value: string;
  /** Pourcentage pour calcul automatique de couleur et barres (0-100) */
  percentage?: number;
  /** Couleur des barres remplies (CSS color) - calculée automatiquement si percentage fourni */
  color?: string;
  /** Nombre de barres remplies sur 9 (pour vertical uniquement) - calculé automatiquement si percentage fourni */
  filledBars?: number;
  /** Variante de l'indicateur */
  variant?: "vertical" | "straight";
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Calcule la couleur en fonction du pourcentage
 * Uses indicator-bar-filled-* tokens that auto-switch:
 *   - Light: *-500 (bright)
 *   - Dark: *-600 (slightly deeper for contrast on dark bg)
 */
function getColorFromPercentage(percentage: number): string {
  if (percentage < 25) {
    return "var(--indicator-bar-filled-error)";
  }
  if (percentage <= 60) {
    return "var(--indicator-bar-filled-warning)";
  }
  return "var(--indicator-bar-filled-success)";
}

/**
 * Calcule le nombre de barres remplies en fonction du pourcentage
 * 9 barres au total, répartition proportionnelle
 */
function getFilledBarsFromPercentage(percentage: number): number {
  const bars = Math.ceil((percentage / 100) * 9);
  return Math.max(0, Math.min(9, bars));
}

/**
 * KpiIndicator - Indicateur KPI avec icône, valeur et indicateur visuel
 */
export function KpiIndicator({
  kpi,
  icon,
  value,
  percentage,
  color,
  filledBars,
  variant = "vertical",
  className = "",
}: KpiIndicatorProps) {
  const totalBars = 9;

  // Resolve icon from kpi prop or fallback to icon prop
  const kpiConfig = kpi ? KPI_CONFIG[kpi] : null;
  const iconColor = "var(--icon-neutral-default)";
  const resolvedIcon = kpiConfig
    ? React.createElement(kpiConfig.Icon, {
        size: 20,
        style: { color: iconColor },
      })
    : icon;

  // Calcul automatique si percentage fourni
  const finalColor = color
    ? color
    : percentage !== undefined
      ? getColorFromPercentage(percentage)
      : "var(--indicator-bar-filled-success)";
  const finalFilledBars =
    filledBars !== undefined
      ? filledBars
      : percentage !== undefined
        ? getFilledBarsFromPercentage(percentage)
        : 5;

  // Icon + value row (shared between both variants)
  const renderIconValue = () => (
    <div className="inline-flex gap-[4px] items-center shrink-0">
      {/* Icon */}
      <div className="shrink-0 size-[20px] flex items-center justify-center">
        {resolvedIcon}
      </div>
      {/* Value */}
      <div className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
        {value}
      </div>
    </div>
  );

  // Variante vertical : 9 barres verticales côte à côte (6px × 14px)
  if (variant === "vertical") {
    return (
      <div
        className={`inline-flex flex-col gap-[10px] items-center ${className}`.trim()}
      >
        {renderIconValue()}
        <div className="inline-flex gap-[3px]">
          {Array.from({ length: totalBars }).map((_, index) => {
            const isFilled = index < finalFilledBars;
            return (
              <div
                key={index}
                className={`w-[6px] h-[14px] rounded-lg transition-colors ${
                  isFilled
                    ? ""
                    : "indicator-bar-empty bg-[var(--indicator-bar-empty)]"
                }`}
                style={isFilled ? { backgroundColor: finalColor } : undefined}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Variante straight : pastille colorée 14×14
  return (
    <div
      className={`inline-flex gap-[10px] items-center ${className}`.trim()}
    >
      {renderIconValue()}
      <div
        className="size-[14px] rounded-lg shrink-0"
        style={{ backgroundColor: finalColor }}
      />
    </div>
  );
}
