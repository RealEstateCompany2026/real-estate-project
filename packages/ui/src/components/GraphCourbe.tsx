"use client";

import React from "react";

/**
 * GraphCourbe - Graphique en courbe avec indicateur de tendance
 * Organism du design system RealAgent
 *
 * Specs Figma (node 1053:16697):
 * - Container: h-320px, rounded-20px, bg neutral-50 (surface-neutral-action)
 * - Matrice: inset top 6.25% right 2.02% bottom 8.13% left 0
 *   - échelle: flex row, gap-27px → lignes (94.5%) + labels Y (w-37px)
 *   - lignes: h-200px, 3 horizontal lines très légères
 *   - chronologie: flex row, gap-77px, dates en Body sm Bold
 * - Dropdown: h-44px, px-20 py-12, rounded-16px, shadow 1px 1px 8px, bg white
 * - GraphIndication: px-12 py-8, rounded-16px, shadow 0 0 8px, bg white
 *   - H6 Bold (20px) date + Body sm (14px) label + IconText (16px) trend
 * - Courbe: branded (purple-500), gradient fill underneath
 * - Point sélectionné: ellipse 19px, stroke branded, fill white — HORS du SVG stretched
 * - Ligne verticale pointillée: pleine hauteur container, fine, dashed
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
  /** Index du point sélectionné (0-based). null = aucun. */
  selectedIndex?: number | null;
  /** Texte descriptif dans la popup (ex: "28 réactions positives") */
  selectedLabel?: string;
  /** Date/titre dans la popup (ex: "22 fév 2026") */
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

/* ================================================================
   Helpers
   ================================================================ */

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
  viewBoxHeight: number,
): string {
  if (points.length === 0) return "";
  const curvePart = buildCurvePath(points);
  const lastX = points[points.length - 1].x;
  const firstX = points[0].x;
  return `${curvePart} L${lastX},${viewBoxHeight} L${firstX},${viewBoxHeight} Z`;
}

/* ================================================================
   Sub-components
   ================================================================ */

function TrendArrow({ direction }: { direction: "up" | "down" }) {
  const color =
    direction === "up" ? "var(--icon-success)" : "var(--icon-error)";
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d={
          direction === "up"
            ? "M10 5L14 9H6L10 5Z"
            : "M10 15L6 11H14L10 15Z"
        }
        fill={color}
      />
    </svg>
  );
}

/* ================================================================
   Defaults
   ================================================================ */

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

/* ================================================================
   Main component
   ================================================================ */

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
  /* ── Compute scale ── */
  const computedMax =
    maxY ?? Math.ceil(Math.max(...data.map((d) => d.value)) / 10) * 10;
  const midY = Math.round(computedMax / 2);

  /* ── SVG viewBox for the curve (stretched horizontally) ── */
  const VB_W = 1000;
  const VB_H = 200;

  /* Map data → viewBox coordinates */
  const points = data.map((d, i) => ({
    x: data.length === 1 ? VB_W / 2 : (i / (data.length - 1)) * VB_W,
    y: VB_H - (d.value / computedMax) * VB_H,
  }));

  const curvePath = buildCurvePath(points);
  const areaPath = buildAreaPath(points, VB_H);

  /* ── Selected point: compute as percentages for CSS positioning ── */
  const sel =
    selectedIndex != null &&
    selectedIndex >= 0 &&
    selectedIndex < points.length
      ? points[selectedIndex]
      : null;

  // % positions relative to the grid-lines area
  const selPctX = sel ? (sel.x / VB_W) * 100 : null;
  const selPctY = sel ? (sel.y / VB_H) * 100 : null;

  /*
   * Figma layout (320px container):
   *   Matrice top: 6.25% = 20px
   *   Grid-lines height: 200px  (62.5%)
   *   Gap grid→dates: 10px
   *   Dates row: ~64px (with py-8 = 8px padding)
   *   Matrice bottom: 8.13% = 26px
   *   Y-labels: 27px gap + 37px width to the right of grid-lines
   *   Matrice right: 2.02% ≈ 24px
   */
  const GRID_TOP = 20; // px from container top
  const GRID_H = 200; // px
  const Y_LABEL_GAP = 27; // px between grid-lines and Y-labels
  const Y_LABEL_W = 37; // px
  const RIGHT_PAD = 24; // px from container right edge

  return (
    <div
      className={`relative h-[320px] rounded-[20px] overflow-hidden bg-[var(--surface-neutral-action)] ${className}`.trim()}
    >
      {/* ════════════════════════════════════════════════════
          Dropdown label (top-left)
          Figma: h-44, px-20 py-12, rounded-16, shadow 1px 1px 8px
          ════════════════════════════════════════════════════ */}
      <div
        className="absolute z-[4] flex items-center gap-1 rounded-[16px]
          bg-[var(--surface-elevated)]"
        style={{
          top: `${GRID_TOP}px`,
          left: "16px",
          height: "44px",
          padding: "12px 20px",
          boxShadow: "1px 1px 8px 0px rgba(0,0,0,0.15)",
        }}
      >
        <span
          className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
          style={{ color: "var(--text-body)" }}
        >
          {title}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ color: "var(--text-body)" }}
        >
          <path
            d="M6.5 8.5L10 12L13.5 8.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ════════════════════════════════════════════════════
          Grid-lines zone (where the curve lives)
          ════════════════════════════════════════════════════ */}
      <div
        className="absolute"
        style={{
          top: `${GRID_TOP}px`,
          left: "0px",
          right: `${Y_LABEL_GAP + Y_LABEL_W + RIGHT_PAD}px`,
          height: `${GRID_H}px`,
        }}
      >
        {/* ── 3 horizontal grid lines (very subtle) ── */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <line
            x1="0" y1="0" x2="100%" y2="0"
            stroke="var(--border-disabled)" strokeWidth="1" opacity="0.5"
          />
          <line
            x1="0" y1="50%" x2="100%" y2="50%"
            stroke="var(--border-disabled)" strokeWidth="1" opacity="0.5"
          />
          <line
            x1="0" y1="100%" x2="100%" y2="100%"
            stroke="var(--border-disabled)" strokeWidth="1" opacity="0.5"
          />
        </svg>

        {/* ── Curve: gradient fill + stroke ── */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
        >
          <defs>
            <linearGradient
              id="graphCourbeGrad"
              x1="0%" y1="0%" x2="0%" y2="100%"
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

          <path d={areaPath} fill="url(#graphCourbeGrad)" />

          <path
            d={curvePath}
            fill="none"
            stroke="var(--border-branded-default)"
            strokeWidth="3"
          />
        </svg>

        {/* ── Selected point ellipse (rendered OUTSIDE the stretched SVG to stay round) ── */}
        {sel && selPctX != null && selPctY != null && (
          <div
            className="absolute z-[2] pointer-events-none"
            style={{
              left: `${selPctX}%`,
              top: `${selPctY}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <circle
                cx="9.5"
                cy="9.5"
                r="7.5"
                fill="var(--surface-neutral-action)"
                stroke="var(--border-branded-default)"
                strokeWidth="3"
              />
            </svg>
          </div>
        )}
      </div>

      {/* ════════════════════════════════════════════════════
          Vertical dashed line at selected point (full container height)
          Figma: thin, dashed, spanning top to bottom
          ════════════════════════════════════════════════════ */}
      {sel && selPctX != null && (
        <div
          className="absolute top-0 bottom-0 z-[1] pointer-events-none"
          style={{
            left: `calc((100% - ${Y_LABEL_GAP + Y_LABEL_W + RIGHT_PAD}px) * ${selPctX / 100})`,
            borderLeft: "1.5px dashed var(--border-disabled)",
            opacity: 0.5,
          }}
        />
      )}

      {/* ════════════════════════════════════════════════════
          Y-axis labels (right of grid lines)
          Figma: w-37px, gap-68px, px-10 py-8, Body sm Bold
          ════════════════════════════════════════════════════ */}
      <div
        className="absolute flex flex-col justify-between"
        style={{
          top: `${GRID_TOP}px`,
          right: `${RIGHT_PAD}px`,
          width: `${Y_LABEL_W}px`,
          height: `${GRID_H}px`,
        }}
      >
        {[computedMax, midY, 0].map((v) => (
          <span
            key={v}
            className="text-[14px] font-bold leading-[16px] tracking-[0.14px] px-[10px] py-[8px]"
            style={{ color: "var(--text-subtle)" }}
          >
            {v}
          </span>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════
          X-axis dates (below grid lines)
          Figma: flex row, gap-77px, px-10 py-8, Body sm Bold
          ════════════════════════════════════════════════════ */}
      <div
        className="absolute flex justify-between items-center"
        style={{
          top: `${GRID_TOP + GRID_H + 10}px`,
          left: "0px",
          right: `${Y_LABEL_GAP + Y_LABEL_W + RIGHT_PAD}px`,
        }}
      >
        {data.map((d, i) => (
          <span
            key={`${d.label}-${i}`}
            className="text-[14px] font-bold leading-[16px] tracking-[0.14px] px-[10px] py-[8px]"
            style={{ color: "var(--text-subtle)" }}
          >
            {d.label}
          </span>
        ))}
      </div>

      {/* ════════════════════════════════════════════════════
          GraphIndication popup
          Figma: px-12 py-8, rounded-16px, shadow 0 0 8px
          Content: H6 Bold + Body sm Regular + icon+text md SemiBold
          ════════════════════════════════════════════════════ */}
      {sel && selPctX != null && (
        <div
          className="absolute z-[3] flex flex-col rounded-[16px]
            bg-[var(--surface-elevated)]"
          style={{
            top: `${GRID_TOP + GRID_H * 0.15}px`,
            left: `calc((100% - ${Y_LABEL_GAP + Y_LABEL_W + RIGHT_PAD}px) * ${selPctX / 100} + 24px)`,
            padding: "8px 12px",
            boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.15)",
          }}
        >
          {/* H6 Bold Desktop: 20px, bold, line-height 24px */}
          <div
            className="py-[8px]"
          >
            <span
              className="text-[20px] font-bold leading-[24px] tracking-[0.2px]"
              style={{ color: "var(--text-headings)" }}
            >
              {selectedDate}
            </span>
          </div>
          {/* Body sm Regular: 14px, regular, line-height 16px */}
          <div
            className="py-[8px]"
          >
            <span
              className="text-[14px] font-normal leading-[16px] tracking-[0.14px]"
              style={{ color: "var(--text-caption)" }}
            >
              {selectedLabel}
            </span>
          </div>
          {/* Icon + text medium: 16px SemiBold */}
          <div className="flex items-center gap-[4px] py-[8px]">
            <TrendArrow direction={trendDirection} />
            <span
              className="text-[16px] font-semibold leading-[20px] tracking-[0.16px]"
              style={{ color: "var(--text-body)" }}
            >
              {trendPercentage}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
