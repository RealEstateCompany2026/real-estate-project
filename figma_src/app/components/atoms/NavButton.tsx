import { LucideIcon } from "lucide-react";
import { useState } from "react";

/**
 * NavButton - Bouton de navigation pour NavRail
 * 
 * Bouton carré avec icône pour la navigation principale.
 * 
 * Specs:
 * - Taille: 68×50px
 * - Radius: var(--border-radius-400) (16px)
 * - États: default, hover, selected
 * - Support light/dark mode via tokens
 * 
 * États:
 * - Default: Background transparent, icône neutral
 * - Hover: Background surface-neutral-action-hover, icône branded
 * - Selected: Background surface-neutral-action, icône neutral-default
 * 
 * Usage:
 * <NavButton icon={Gauge} label="Dashboard" selected />
 * <NavButton icon={Database} label="Base de données" onClick={handleClick} />
 */

export interface NavButtonProps {
  /**
   * Icône Lucide à afficher
   */
  icon: LucideIcon;
  /**
   * Label accessible (non visible, pour screen readers)
   */
  label: string;
  /**
   * État sélectionné
   */
  selected?: boolean;
  /**
   * Callback au clic
   */
  onClick?: () => void;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function NavButton({
  icon: Icon,
  label,
  selected = false,
  onClick,
  className = "",
}: NavButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Styles dynamiques basés sur l'état
  const getStyles = () => {
    if (selected) {
      return {
        backgroundColor: "var(--surface-neutral-action)",
        color: "var(--icon-neutral-default)",
      };
    }
    if (isHovered) {
      return {
        backgroundColor: "var(--surface-neutral-action-hover)",
        color: "var(--icon-branded-default)",
      };
    }
    return {
      backgroundColor: "transparent",
      color: "var(--icon-neutral-default)",
    };
  };

  const styles = getStyles();

  return (
    <button
      className={`
        flex items-center justify-center
        transition-colors duration-200
        ${className}
      `.trim()}
      style={{
        width: "68px",
        height: "50px",
        borderRadius: "var(--border-radius-400)",
        backgroundColor: styles.backgroundColor,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
      aria-current={selected ? "page" : undefined}
    >
      <Icon
        size={24}
        style={{ color: styles.color }}
        strokeWidth={2}
      />
    </button>
  );
}
