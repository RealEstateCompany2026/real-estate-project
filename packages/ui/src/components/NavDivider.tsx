"use client";

/**
 * NavDivider - Séparateur horizontal pour NavRail
 *
 * Ligne horizontale fine pour séparer les sections de navigation.
 *
 * Specs:
 * - Largeur: 10px
 * - Hauteur: 1px
 * - Couleur: var(--neutral-400) (adaptatif light/dark)
 */

export interface NavDividerProps {
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function NavDivider({ className = "" }: NavDividerProps) {
  return (
    <div
      className={`bg-neutral-400 ${className}`}
      style={{
        width: "10px",
        height: "1px",
      }}
    />
  );
}
