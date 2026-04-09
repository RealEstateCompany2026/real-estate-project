/**
 * KpiIndicator - Indicateur de performance KPI
 * Atom du design system RealAgent
 *
 * Affiche un KPI avec icône, valeur et barres de progression
 * Deux variantes : vertical (9 barres empilées) et straight (1 barre horizontale)
 */

"use client";

import React from "react";
import { Database, MessageCircle, ScrollText, Flame, Drill } from "lucide-react";
import { Chip } from "./Chip";

/** Mapping KPI type → Lucide icon + aria-label */
const KPI_CONFIG = {
  qual: { Icon: Database, label: 'Qualification' },
  eng:  { Icon: MessageCircle, label: 'Engagement' },
  conv: { Icon: ScrollText, label: 'Conversion' },
  reac: { Icon: Flame, label: 'Réactivation' },
  ent:  { Icon: Drill, label: 'Entretien' },
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
  /** Thème (light/dark) */
  theme?: "light" | "dark";
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Calcule la couleur en fonction du pourcentage et du thème
 * < 25% = error (rouge)
 * 25-60% = warning (orange)
 * > 60% = success (vert)
 */
function getColorFromPercentage(percentage: number, theme: "light" | "dark" = "light"): string {
  const isDark = theme === "dark";

  if (percentage < 25) {
    // error/500 (light) ou error/600 (dark)
    return isDark ? "var(--error-600)" : "var(--error-500)";
  }
  if (percentage <= 60) {
    // warning/500 (light) ou warning/600 (dark)
    return isDark ? "var(--warning-600)" : "var(--warning-500)";
  }
  // success/500 (light) ou success/600 (dark)
  return isDark ? "var(--success-600)" : "var(--success-500)";
}

/**
 * Retourne la couleur pour les barres non remplies (neutral)
 * neutral/50 ou neutral/100 (light hover)
 * neutral/600 ou neutral/500 (dark hover)
 */
function getEmptyBarColor(theme: "light" | "dark" = "light", hover: boolean = false): string {
  const isDark = theme === "dark";

  if (isDark) {
    // neutral/600 (default) ou neutral/500 (hover)
    return hover ? "var(--neutral-500)" : "var(--neutral-600)";
  } else {
    // neutral/50 (default) ou neutral/100 (hover)
    return hover ? "var(--neutral-100)" : "var(--neutral-50)";
  }
}

/**
 * Calcule le nombre de barres remplies en fonction du pourcentage
 * 9 barres au total, répartition proportionnelle
 */
function getFilledBarsFromPercentage(percentage: number): number {
  // Calcul proportionnel : 0% = 0 barres, 100% = 9 barres
  const bars = Math.ceil((percentage / 100) * 9);
  return Math.max(0, Math.min(9, bars)); // Clamp entre 0 et 9
}

/**
 * KpiIndicator - Indicateur KPI avec icône, valeur et barres
 *
 * Usage avec pourcentage automatique:
 * <KpiIndicator
 *   icon={<Database size={20} />}
 *   value="64%"
 *   percentage={64}
 *   variant="vertical"
 * />
 *
 * Usage manuel:
 * <KpiIndicator
 *   icon={<Database size={20} />}
 *   value="64%"
 *   color="#0da500"
 *   filledBars={5}
 *   variant="vertical"
 * />
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
  theme = "light",
  className = "",
}: KpiIndicatorProps) {
  const totalBars = 9;
  const isVertical = variant === "vertical";

  // Resolve icon from kpi prop or fallback to icon prop
  const kpiConfig = kpi ? KPI_CONFIG[kpi] : null;
  const iconColor = theme === "dark" ? "var(--neutral-200)" : "var(--neutral-500)";
  const resolvedIcon = kpiConfig
    ? <kpiConfig.Icon size={20} style={{ color: iconColor }} />
    : icon;

  // Calcul automatique si percentage fourni
  const finalColor = color || (percentage !== undefined ? getColorFromPercentage(percentage, theme) : (theme === "dark" ? "var(--success-600)" : "var(--success-500)"));
  const finalFilledBars = filledBars !== undefined ? filledBars : (percentage !== undefined ? getFilledBarsFromPercentage(percentage) : 5);
  const emptyBarColor = getEmptyBarColor(theme, hover);

  // Rendu des barres pour la version verticale
  const renderVerticalBars = () => {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        {Array.from({ length: totalBars }).map((_, index) => (
          <div
            key={index}
            className="col-1 h-[14px] mt-0 rounded-[8px] row-1 w-[6px]"
            style={{
              backgroundColor: index < finalFilledBars ? finalColor : emptyBarColor,
              marginLeft: `${index * 9}px`,
            }}
          />
        ))}
      </div>
    );
  };

  // Rendu de la barre pour la version straight
  const renderStraightBar = () => {
    return (
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div
          className="col-1 ml-0 mt-0 rounded-[8px] row-1 size-[14px]"
          style={{ backgroundColor: finalColor }}
        />
      </div>
    );
  };

  return (
    <div
      className={`content-stretch flex ${
        isVertical ? "flex-col justify-center" : ""
      } gap-[10px] items-center relative size-full ${className}`.trim()}
      aria-label={kpiConfig?.label}
    >
      {/* Icon + Text */}
      <div className="content-stretch flex items-center relative shrink-0">
        <Chip size="medium" icon={resolvedIcon}>
          {value}
        </Chip>
      </div>

      {/* Progress bars */}
      {isVertical ? renderVerticalBars() : renderStraightBar()}
    </div>
  );
}
