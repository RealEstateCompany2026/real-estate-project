"use client";

/**
 * DpeBadge - Badge DPE (Diagnostic de Performance Énergétique)
 * Atom du design system RealAgent
 *
 * Affiche la lettre DPE (A-G) dans un carré arrondi coloré (20×20px)
 * Couleurs réglementaires fixes — ne changent pas avec le thème light/dark
 *
 * Figma: "icon . DPE" — size 20×20, border-radius/md (16px), Bold 14px/16px
 */

const DPE_COLORS: Record<DpeGrade, string> = {
  A: "#00a774",
  B: "#33b54a",
  C: "#6cc21e",
  D: "#f0e400",
  E: "#f0a800",
  F: "#eb6021",
  G: "#d7221f",
};

export type DpeGrade = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export interface DpeBadgeProps {
  /** Lettre DPE (A à G) */
  grade: DpeGrade;
  /** Classes CSS additionnelles */
  className?: string;
}

export function DpeBadge({ grade, className = "" }: DpeBadgeProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl size-[20px] shrink-0 ${className}`.trim()}
      style={{ backgroundColor: DPE_COLORS[grade] }}
    >
      <span className="text-[14px] leading-[16px] tracking-[0.14px] font-bold text-content-branded-on-action text-center whitespace-nowrap font-roboto">
        {grade}
      </span>
    </div>
  );
}
