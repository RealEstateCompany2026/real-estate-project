/**
 * GraphCourbe - Graphique en courbe avec indicateur de tendance
 * Organism du design system RealAgent
 * 
 * Affiche une courbe de données avec échelle, dates et indicateur de point sélectionné.
 * Utilisé pour visualiser l'évolution d'une métrique dans le temps.
 */

"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { TrendingUp } from "lucide-react";

export interface GraphCourbeProps {
  /** Titre affiché dans le dropdown (optionnel) */
  title?: string;
  /** Date du point sélectionné */
  selectedDate?: string;
  /** Valeur affichée au point sélectionné */
  selectedValue?: string;
  /** Pourcentage de variation */
  trendPercentage?: string;
  /** Direction de la tendance */
  trendDirection?: "up" | "down";
}

export const GraphCourbe: React.FC<GraphCourbeProps> = ({
  title = "Label",
  selectedDate = "22 fév 2026",
  selectedValue = "28 réactions positives",
  trendPercentage = "7%",
  trendDirection = "up",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="relative h-[320px] rounded-[20px] p-5"
      style={{
        backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-50)",
      }}
    >
      {/* Dropdown Label (en haut à gauche) - z-index élevé DANS le composant */}
      <div
        className="absolute top-5 left-5 px-5 py-3 rounded-2xl flex items-center gap-1 shadow-md"
        style={{
          backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-white)",
          zIndex: 2,
        }}
      >
        <span
          className="text-base font-semibold"
          style={{
            color: "var(--text-body)",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {title}
        </span>
        <svg
          className="size-5"
          fill="none"
          viewBox="0 0 20 20"
          style={{ color: "var(--text-body)" }}
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
        className="absolute top-[70px] right-[220px] px-3 py-2 rounded-2xl shadow-lg"
        style={{
          backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-white)",
          zIndex: 3,
        }}
      >
        <div
          className="text-xl font-bold mb-2"
          style={{
            color: "var(--text-strong)",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {selectedDate}
        </div>
        <div
          className="text-sm mb-2"
          style={{
            color: "var(--text-body)",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {selectedValue}
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp
            size={20}
            style={{ color: trendDirection === "up" ? "var(--success-500)" : "var(--error-500)" }}
          />
          <span
            className="text-base font-semibold"
            style={{
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
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
              fill={isDark ? "var(--neutral-700)" : "var(--neutral-200)"}
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
              stroke={isDark ? "var(--neutral-700)" : "var(--neutral-200)"}
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="50%"
              x2="95%"
              y2="50%"
              stroke={isDark ? "var(--neutral-700)" : "var(--neutral-200)"}
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="100%"
              x2="95%"
              y2="100%"
              stroke={isDark ? "var(--neutral-700)" : "var(--neutral-200)"}
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
            fill={isDark ? "var(--neutral-700)" : "var(--neutral-50)"}
            stroke="#7B72F9"
            strokeWidth="3"
          />
        </svg>

        {/* Échelle verticale (à droite) */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between text-right pr-2">
          <span
            className="text-sm font-bold"
            style={{
              color: "var(--text-subtle)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            50
          </span>
          <span
            className="text-sm font-bold"
            style={{
              color: "var(--text-subtle)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            25
          </span>
          <span
            className="text-sm font-bold"
            style={{
              color: "var(--text-subtle)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            0
          </span>
        </div>
      </div>

      {/* Dates en bas */}
      <div className="absolute bottom-2 left-5 right-20 flex justify-between">
        {["10 avr", "17 avr", "24 avr", "01 mai", "08 mai", "15 mai", "22 mai", "29 mai"].map(
          (date) => (
            <span
              key={date}
              className="text-sm font-bold"
              style={{
                color: "var(--text-subtle)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {date}
            </span>
          )
        )}
      </div>
    </div>
  );
};