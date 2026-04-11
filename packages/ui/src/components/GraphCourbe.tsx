"use client";

import React from "react";

/**
 * GraphCourbe - Graphique en courbe avec indicateur de tendance
 * Organism du design system RealAgent
 *
 * Affiche une courbe de données avec échelle, dates et indicateur de point sélectionné.
 * Utilisé pour visualiser l'évolution d'une métrique dans le temps.
 *
 * Specs Figma:
 * - Hauteur: 320px
 * - Border-radius: 20px
 * - Background: surface-neutral-action (neutral-50 light / neutral-700 dark)
 * - Dropdown label: shadow, bg surface-neutral-default, rounded-2xl
 * - Indication popup: shadow, bg surface-neutral-default, rounded-2xl
 * - Courbe: couleur branded (purple-500), dégradé sous la courbe
 * - Grille: 3 lignes horizontales, couleur border-disabled
 * - Ligne verticale pointillée au point sélectionné
 * - Échelle verticale à droite, dates en bas
 * - Variantes: light / dark (auto via .dark class)
 * - Tokens Layer 3 uniquement, zéro couleur hardcodée
 */

export interface DataPoint {
  /** Label affiché en bas (ex: "10 avr") */
  label: string;
  /** Valeur numérique du point */
  value: number;
}

export interface GraphCourbeProps {
  /** Titre affiché dans le dropdown (en haut à gauche) */
  title?: string;
  /** Points de données à afficher */
  data?: DataPoint[];
  /** Index du point sélectionné (0-based). Si null, aucun point n'est sélectionné. */
  selectedIndex?: number | null;
  /** Texte descriptif affiché dans la popup (ex: "28 réactions positives") */
  selectedLabel?: string;
  /** Date/titre affiché dans la popup (ex: "22 fév 2026") */
  selectedDate?: string;
  /** Pourcentage de variation (ex: "7%") */
  trendPercentage?: string;
  /** Direction de la tendance */
  trendDirection?: "up" | "down";
  /** Valeur max de l'échelle Y. Auto-calculée si non fournie. */
  maxY?: number;
  /** Classe CSS personnalisée */
  className?: string;
}

/* ---------- helpers ---------- */

function buildCurvePath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  if (points.length === 1) return `M${points[0].x},${points[0].y}`;

  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx1 = prev.x + (curr.x - prev.x) * 0.4;
    const cpx2 = curr.x - (curr.x - prev.x) * 0.4;
    d += ` C${cpx1},${prev.y} ${cpx2},${curr.y} ${curr.x},${curr.y}`;
  }
  return d;
}

function buildAreaPath(
  points: { x: number; y: number }[],
  viewBoxHeight: number
): string {
  if (points.length === 0) return "";
  const curvePart = buildCurvePath(points);
  const lastX = points[points.length - 1].x;
  const firstX = points[0].x;
  return `${curvePart} L${lastX},${viewBoxHeight} L${firstX},${viewBoxHeight} Z`;
}

/* ---------- sub-components ---------- */

function TrendArrow({ direction }: { direction: "up" | "down" }) {
  const color =
    direction === "up" ? "var(--icon-success)" : "var(--icon-error)";
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ color }}
    >
      <path
        d={
          direction === "up"
            ? "M10 5L14 9H6L10 5Z"
            : "M10 15L6 11H14L10 15Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

/* ---------- defaults ---------- */

const DEFAULT_DATA: DataPoint[] = [
  { label: "10 avr", value: 18 },
  { label: "17 avr", value: 30 },
  { label: "24 avr", value: 25 },
  { label: "01 mai", value: 35 },
  { label: "08 mai", value: 32 },
  { label: "15 mai", value: 28 },
  { label: "22 mai", value: 22 },
  { label: "29 mai", value: 38 },
];

/* ---------- main ---------- */

export function GraphCourbe({
  title = "Label",
  data = DEFAULT_DATA,
  selectedIndex = 5,
  selectedDate = "22 fév 2026",
  selectedLabel = "28 réactions positives",
  trendPercentage = "7%",
  trendDirection = "up",
  maxY,
  className = "",
}: GraphCourbeProps) {
  /* Compute scale */
  const computedMax =
    maxY ?? Math.ceil(Math.max(...data.map((d) => d.value)) / 10) * 10;
  const midY = Math.round(computedMax / 2);

  /* SVG viewBox */
  const VB_W = 1000;
  const VB_H = 200;
  const PAD_TOP = 10;
  const PAD_BOT = 10;
  const usableH = VB_H - PAD_TOP - PAD_BOT;

  /* Map data to SVG coords */
  const points = data.map((d, i) => ({
    x: data.length === 1 ? VB_W / 2 : (i / (data.length - 1)) * VB_W,
    y: PAD_TOP + usableH - (d.value / computedMax) * usableH,
  }));

  const curvePath = buildCurvePath(points);
  const areaPath = buildAreaPath(points, VB_H);

  /* Selected point */
  const sel =
    selectedIndex != null && selectedIndex >= 0 && selectedIndex < points.length
      ? points[selectedIndex]
      : null;
  const selPctX = sel ? (sel.x / VB_W) * 100 : null;

  return (
    <div
      className={`relative h-[320px] rounded-[20px] bg-[var(--surface-neutral-action)] ${className}`.trim()}
    >
      {/* ── Dropdown label (top-left) ── */}
      <div
        className="absolute top-5 left-5 px-5 py-3 rounded-2xl flex items-center gap-1 z-[2]
          bg-[var(--surface-neutral-default)]
          shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)]"
      >
        <span
          className="text-base font-semibold"
          style={{ color: "var(--text-body)" }}
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

      {/* ── Chart area ── */}
      <div className="absolute inset-[60px_50px_40px_20px]">
        {/* Horizontal grid lines (3) */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0%"
            x2="100%"
            y2="0%"
            stroke="var(--border-disabled)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="var(--border-disabled)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="100%"
            stroke="var(--border-disabled)"
            strokeWidth="1"
          />
        </svg>

        {/* Vertical dashed line at selected point */}
        {selPctX != null && (
          <svg
            className="absolute"
            style={{
              left: `${selPctX}%`,
              top: "-60px",
              width: "2px",
              height: "calc(100% + 60px)",
            }}
            preserveAspectRatio="none"
          >
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="var(--border-disabled)"
              strokeWidth="2"
              strokeDasharray="4 3"
              opacity="0.6"
            />
          </svg>
        )}

        {/* Curve + gradient fill */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
        >
          <defs>
            <linearGradient
              id="graphCourbeGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--surface-branded-default)"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="var(--surface-branded-default)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Filled area under curve */}
          <path d={areaPath} fill="url(#graphCourbeGradient)" />

          {/* Curve line */}
          <path
            d={curvePath}
            fill="none"
            stroke="var(--border-branded-default)"
            strokeWidth="3"
          />

          {/* Selected dot */}
          {sel && (
            <circle
              cx={sel.x}
              cy={sel.y}
              r="8"
              fill="var(--surface-neutral-default)"
              stroke="var(--border-branded-default)"
              strokeWidth="3"
            />
          )}
        </svg>

        {/* Y-axis labels (right side) */}
        <div className="absolute -right-[40px] top-0 bottom-0 flex flex-col justify-between text-right">
          <span
            className="text-sm font-bold"
            style={{ color: "var(--text-subtle)" }}
          >
            {computedMax}
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "var(--text-subtle)" }}
          >
            {midY}
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "var(--text-subtle)" }}
          >
            0
          </span>
        </div>
      </div>

      {/* ── Indication popup ── */}
      {sel && selPctX != null && (
        <div
          className="absolute z-[3] px-3 py-2 rounded-2xl
            bg-[var(--surface-neutral-default)]
            shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)]"
          style={{
            top: "70px",
            left: `calc(${selPctX}% + 30px)`,
          }}
        >
          <div
            className="text-xl font-bold mb-2"
            style={{ color: "var(--text-headings)" }}
          >
            {selectedDate}
          </div>
          <div
            className="text-sm mb-2"
            style={{ color: "var(--text-caption)" }}
          >
            {selectedLabel}
          </div>
          <div className="flex items-center gap-1">
            <TrendArrow direction={trendDirection} />
            <span
              className="text-base font-semibold"
              style={{ color: "var(--text-body)" }}
            >
              {trendPercentage}
            </span>
          </div>
        </div>
      )}

      {/* ── X-axis dates ── */}
      <div className="absolute bottom-2 left-5 right-[50px] flex justify-between">
        {data.map((d, i) => (
          <span
            key={`${d.label}-${i}`}
            className="text-sm font-bold"
            style={{ color: "var(--text-subtle)" }}
          >
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
