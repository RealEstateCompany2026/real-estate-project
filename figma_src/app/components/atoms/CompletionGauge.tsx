import React from "react";

/**
 * CompletionGauge Component
 * 
 * Jauge de complétion avec pourcentage et barre de progression.
 * Affiche visuellement le niveau de complétion d'un formulaire.
 * 
 * @component
 * @example
 * <CompletionGauge 
 *   percentage={75} 
 *   label="Profil complété" 
 * />
 */

export interface CompletionGaugeProps {
  /** Pourcentage de complétion (0-100) */
  percentage: number;
  /** Label descriptif */
  label?: string;
  /** Taille de la jauge (défaut: 'medium') */
  size?: "small" | "medium" | "large";
  /** Afficher le pourcentage (défaut: true) */
  showPercentage?: boolean;
}

export const CompletionGauge: React.FC<CompletionGaugeProps> = ({
  percentage,
  label = "Complétion",
  size = "medium",
  showPercentage = true,
}) => {
  // Clamp percentage entre 0 et 100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  // Déterminer la couleur en fonction du pourcentage
  const getColor = () => {
    if (clampedPercentage >= 100) {
      return "var(--surface-success-default)";
    } else if (clampedPercentage >= 75) {
      return "var(--surface-branded-default)";
    } else if (clampedPercentage >= 50) {
      return "var(--surface-warning-default)";
    } else {
      return "var(--surface-error-subtle)";
    }
  };

  const heights = {
    small: "h-1",
    medium: "h-2",
    large: "h-3",
  };

  return (
    <div className="w-full">
      {/* Label and percentage */}
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span
              className="text-sm font-medium"
              style={{ color: "var(--text-body)" }}
            >
              {label}
            </span>
          )}
          {showPercentage && (
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--text-strong)" }}
            >
              {clampedPercentage}%
            </span>
          )}
        </div>
      )}

      {/* Progress bar */}
      <div
        className={`w-full ${heights[size]} rounded-full overflow-hidden`}
        style={{
          backgroundColor: "var(--surface-neutral-subtle)",
        }}
      >
        <div
          className={`${heights[size]} rounded-full transition-all duration-300`}
          style={{
            width: `${clampedPercentage}%`,
            backgroundColor: getColor(),
          }}
        />
      </div>
    </div>
  );
};
