/**
 * ATOM: ProgressBar
 * 
 * Barre de progression visuelle indiquant l'avancement d'une tâche ou d'un processus.
 * 
 * Specs:
 * - Hauteur: 20px
 * - Border-radius: 20px
 * - Background: var(--surface-neutral-action) [grey-100 light / grey-800 dark]
 * - Fill: var(--success-500) [green-500] ou couleur personnalisée
 * - Progress: 0-100%
 * 
 * Usage:
 * <ProgressBar progress={65} />
 * <ProgressBar progress={100} color="var(--branded-500)" />
 */

export interface ProgressBarProps {
  /**
   * Pourcentage de progression (0-100)
   */
  progress: number;
  /**
   * Couleur personnalisée de la barre (optionnel)
   * Par défaut: var(--success-500)
   */
  color?: string;
  className?: string;
}

export function ProgressBar({
  progress,
  color,
  className = "",
}: ProgressBarProps) {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={`flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[20px] ${className}`.trim()}
      style={{
        backgroundColor: "var(--surface-neutral-action)",
      }}
    >
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center relative size-full">
          <div
            className="h-[20px] rounded-[20px] shrink-0 transition-all duration-300 ease-out"
            style={{
              backgroundColor: color || "var(--success-500)",
              width: `${clampedProgress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}