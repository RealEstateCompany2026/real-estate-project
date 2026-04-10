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
 * Affiche un KPI avec icône, valeur et barres de progression
 * Deux variantes : vertical (9 barres empilées) et straight (1 barre horizontale)
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
  /** Couleur des barres remplies (hex ou couleur CSS) - calculée automatiquement si percentage fourni */
  color?: string;
  /** Nombre de barres remplies sur 9 (pour vertical uniquement) - calculé automatiquement si percentage fourni */
  filledBars?: number;
  /** Variante de l'indicateur */
  variant?: "vertical" | "straight";
  /** État hover */
  hover?: boolean;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Calcule la couleur en fonction du pourcentage
 * < 25% = error (rouge)
 * 25-60% = warning (orange)
 * > 60% = success (vert)
 */
function getColorFromPercentage(percentage: number): string {
  if (percentage < 25) {
    return "var(--error-500) dark:var(--error-600)";
  }
  if (percentage <= 60) {
    return "var(--warning-500) dark:var(--warning-600)";
  }
  return "var(--success-500) dark:var(--success-600)";
}

/**
 * Retourne la couleur pour les barres non remplies (neutral)
 */
function getEmptyBarColor(hover: boolean = false): string {
  return hover
    ? "bg-neutral-100 dark:bg-neutral-500"
    : "bg-neutral-50 dark:bg-neutral-600";
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
 * KpiIndicator - Indicateur KPI avec icône, valeur et barres
 */
export function KpiIndicator({
  kpi,
  icon,
  value,
  percentage,
  color,
  filledBars,
  variant = "vertical",
  hover = false,
  className = "",
}: KpiIndicatorProps) {
  const totalBars = 9;
  const isVertical = variant === "vertical";

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
      : "var(--success-500) dark:var(--success-600)";
  const finalFilledBars =
    filledBars !== undefined
      ? filledBars
      : percentage !== undefined
        ? getFilledBarsFromPercentage(percentage)
        : 5;
  const emptyBarColor = getEmptyBarColor(hover);

  // Rendu des barres pour la version verticale
  const renderVerticalBars = () => {
    return (
      <div className="inline-grid gap-1 leading-none relative shrink-0">
        {Array.from({ length: totalBars }).map((_, index) => (
          <div
            key={index}
            className={`
              w-6 h-1 rounded-[2px] transition-colors
              ${index < finalFilledBars ? "bg-[var(--bar-color)]" : emptyBarColor}
            `}
            style={
              index < finalFilledBars
                ? { backgroundColor: finalColor }
                : undefined
            }
          />
        ))}
      </div>
    );
  };

  // Rendu de la barre horizontale pour la version straight
  const renderStraightBar = () => {
    const percentage = (finalFilledBars / totalBars) * 100;
    return (
      <div className="h-1 w-24 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-600 flex-1">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${percentage}%`,
            backgroundColor: finalColor,
          }}
        />
      </div>
    );
  };

  return (
    <div
      className={`
        inline-flex items-center gap-3
        ${className}
      `.trim()}
    >
      {/* Icon */}
      <div className="shrink-0">{resolvedIcon}</div>

      {/* Value */}
      <div className="text-sm font-semibold text-content-body min-w-[40px]">
        {value}
      </div>

      {/* Bars */}
      {isVertical ? renderVerticalBars() : renderStraightBar()}
    </div>
  );
}
