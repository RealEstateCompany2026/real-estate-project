"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

/**
 * GraphCourbe - Graphique en courbe avec indicateur de tendance
 * Organism du design system RealAgent
 *
 * Affiche une courbe de données avec échelle, dates et indicateur de point sélectionné.
 * Utilisé pour visualiser l'évolution d'une métrique dans le temps.
 *
 * Specs:
 * - Hauteur: 320px
 * - Border-radius: 20px
 * - Padding: 20px
 * - Affiche une courbe stylisée avec dégradé
 * - Grille horizontale
 * - Ligne verticale pointillée au point sélectionné
 * - Popup avec date, valeur et tendance
 * - Échelle verticale et dates en bas
 */

export interface GraphCourbeProps {
  /**
   * Titre affiché dans le dropdown (optionnel)
   * @default "Label"
   */
  title?: string;
  /**
   * Date du point sélectionné
   * @default "22 fév 2026"
   */
  selectedDate?: string;
  /**
   * Valeur affichée au point sélectionné
   * @default "28 réactions positives"
   */
  selectedValue?: string;
  /**
   * Pourcentage de variation
   * @default "7%"
   */
  trendPercentage?: string;
  /**
   * Direction de la tendance
   * @default "up"
   */
  trendDirection?: "up" | "down";
  /**
   * Classe CSS personnalisée
   */
  className?: string;
}

export const GraphCourbe: React.FC<GraphCourbeProps> = ({
  title = "Label",
  selectedDate = "22 fév 2026",
  selectedValue = "28 réactions positives",
  trendPercentage = "7%",
  trendDirection = "up",
  className = "",
}: GraphCourbeProps) => {
  return (
    <div
      className={`relative h-[320px] rounded-[20px] p-5 bg-surface-neutral-default ${className}`.trim()}
    >
      {/* Dropdown Label (en haut à gauche) - z-index élevé DANS le composant */}
      <div
        className="absolute top-5 left-5 px-5 py-3 rounded-2xl flex items-center gap-1 shadow-md bg-surface-neutral-default border border-edge-default z-[2]"
      >
        <span className="text-base font-semibold text-content-body">
          {title}
        </span>
        <svg
          className="size-5 text-content-body"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Indicateur de point sélectionné (popup) - z-index le plus élevé DANS le composant */}
      <div
        className="absolute top-[70px] right-[220px] px-3 py-2 rounded-2xl shadow-lg bg-surface-neutral-default border border-edge-default z-[3]"
      >
        <div className="text-xl font-bold mb-2 text-content-strong">
          {selectedDate}
        </div>
        <div className="text-sm mb-2 text-content-body">
          {selectedValue}
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp
            size={20}
            style={{
              color: trendDirection === "up" ? "var(--icon-success)" : "var(--icon-error)",
            }}
          />
          <span className="text-base font-semibold text-content-body">
            {trendPercentage}
          </span>
        </div>
      </div>

      {/* Zone graphique simplifiée */}
      <div className="absolute inset-[60px_20px_40px_20px]">
        {/* Ligne verticale pointillée (rectangles) alignée avec le point sélectionné - toute hauteur */}
        <svg
          className="absolute h-full"
          style={{
            left: "60.8%",
            width: "10px",
            top: "-60px",
            height: "320px",
          }}
          viewBox="0 0 10 320"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 80 }).map((_, index) => (
            <rect
              key={index}
              x="0"
              y={index * 4}
              width="10"
              height="2"
              fill="var(--border-disabled)"
              opacity="0.5"
            />
          ))}
        </svg>

        {/* Lignes horizontales - s'arrêtent à 95% pour correspondre à la dernière date */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0"
              x2="95%"
              y2="0"
              stroke="var(--border-disabled)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="50%"
              x2="95%"
              y2="50%"
              stroke="var(--border-disabled)"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="100%"
              x2="95%"
              y2="100%"
              stroke="var(--border-disabled)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Courbe stylisée - étendue jusqu'à 95% */}
        <svg
          className="absolute inset-0 h-full"
          style={{ width: "95%" }}
          preserveAspectRatio="none"
          viewBox="0 0 1000 200"
        >
          {/* Dégradé */}
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7B72F9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7B72F9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Zone sous la courbe - étendue jusqu'à x=1000 */}
          <path
            d="M0,120 Q200,80 400,100 T800,60 L1000,50 L1000,200 L0,200 Z"
            fill="url(#curveGradient)"
          />

          {/* Ligne de courbe - étendue jusqu'à x=1000 */}
          <path
            d="M0,120 Q200,80 400,100 T800,60 L1000,50"
            fill="none"
            stroke="#7B72F9"
            strokeWidth="3"
          />

          {/* Point sélectionné */}
          <circle
            cx="640"
            cy="95"
            r="8"
            fill="var(--surface-neutral-default)"
            stroke="#7B72F9"
            strokeWidth="3"
          />
        </svg>

        {/* Échelle verticale (à droite) */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between text-right pr-2">
          <span className="text-sm font-bold text-content-subtle">
            50
          </span>
          <span className="text-sm font-bold text-content-subtle">
            25
          </span>
          <span className="text-sm font-bold text-content-subtle">
            0
          </span>
        </div>
      </div>

      {/* Dates en bas */}
      <div className="absolute bottom-2 left-5 right-20 flex justify-between">
        {["10 avr", "17 avr", "24 avr", "01 mai", "08 mai", "15 mai", "22 mai", "29 mai"].map(
          (date) => (
            <span key={date} className="text-sm font-bold text-content-subtle">
              {date}
            </span>
          )
        )}
      </div>
    </div>
  );
};
