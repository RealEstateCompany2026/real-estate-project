/**
 * NavDivider - Séparateur horizontal pour NavRail
 * 
 * Ligne horizontale fine pour séparer les sections de navigation.
 * 
 * Specs:
 * - Largeur: 10px (var(--scale-600) + var(--scale-200))
 * - Hauteur: var(--border-width-25) (1px)
 * - Couleur: var(--neutral-400) (adaptatif light/dark)
 * 
 * Usage:
 * <NavDivider />
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
      className={className}
      style={{
        width: "10px",
        height: "var(--border-width-25)",
        backgroundColor: "var(--neutral-400)",
      }}
    />
  );
}
