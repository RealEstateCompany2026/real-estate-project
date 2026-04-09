import { Check } from "lucide-react";

/**
 * Stepper - Indicateur de progression multi-étapes
 * 
 * Affiche la progression à travers un processus en plusieurs étapes.
 * 
 * Specs:
 * - Horizontal, responsive
 * - Cercles: 32px diameter
 * - Lignes connectrices entre les étapes
 * - États: completed, active, future
 * - Support light/dark mode via tokens
 * 
 * États:
 * - Completed: Checkmark blanc sur fond branded, label body
 * - Active: Numéro blanc sur fond branded, label branded bold
 * - Future: Numéro neutral sur fond neutral-action, label neutral
 * 
 * Usage:
 * <Stepper
 *   steps={["Identité", "Agence", "Profil", "Confirmation"]}
 *   currentStep={1}
 *   completedSteps={[0]}
 * />
 */

export interface StepperProps {
  /**
   * Labels des étapes
   */
  steps: string[];
  /**
   * Index de l'étape active (0-based)
   */
  currentStep: number;
  /**
   * Indices des étapes complétées
   */
  completedSteps?: number[];
  /**
   * Variante d'affichage
   * - default: avec numéros et labels
   * - minimal: petits points sans texte, discret
   */
  variant?: "default" | "minimal";
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  completedSteps = [],
  variant = "default",
  className = "",
}: StepperProps) {
  const getStepState = (index: number): "completed" | "active" | "future" => {
    if (completedSteps.includes(index)) return "completed";
    if (index === currentStep) return "active";
    return "future";
  };

  // Variante minimaliste : petits points discrets
  if (variant === "minimal") {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`.trim()}>
        {steps.map((step, index) => {
          const state = getStepState(index);
          const isCompleted = state === "completed";
          const isActive = state === "active";

          return (
            <div
              key={index}
              className="rounded-full transition-all duration-300"
              style={{
                width: isActive ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  isCompleted || isActive
                    ? "var(--surface-branded-default)"
                    : "var(--neutral-200)",
                opacity: isActive ? 1 : 0.5,
              }}
            />
          );
        })}
      </div>
    );
  }

  // Variante default : avec numéros et labels
  return (
    <div className={`flex items-center justify-center ${className}`.trim()}>
      {steps.map((step, index) => {
        const state = getStepState(index);
        const isCompleted = state === "completed";
        const isActive = state === "active";
        const isFuture = state === "future";
        const isLast = index === steps.length - 1;

        // Colors basées sur tokens
        const circleBackground = isCompleted || isActive 
          ? "var(--surface-branded-default)"
          : "var(--surface-neutral-action)";

        const circleColor = isCompleted || isActive
          ? "var(--text-branded-on-action)"
          : "var(--text-placeholder)";

        const labelColor = isActive
          ? "var(--text-branded-action)"
          : isCompleted
            ? "var(--text-body)"
            : "var(--text-placeholder)";

        const lineColor = "var(--surface-neutral-action)";

        return (
          <div key={index} className="flex items-center">
            {/* Step circle + label */}
            <div className="flex flex-col items-center" style={{ gap: "var(--scale-200)" }}>
              {/* Circle */}
              <div
                className="
                  flex items-center justify-center
                  rounded-full
                  transition-all duration-200
                "
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: circleBackground,
                }}
              >
                {isCompleted ? (
                  <Check size={18} style={{ color: circleColor }} strokeWidth={3} />
                ) : (
                  <span
                    className={`${isActive ? "font-bold" : "font-semibold"}`}
                    style={{
                      color: circleColor,
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-sm)",
                      lineHeight: "var(--lh-sm)",
                    }}
                  >
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Label */}
              {variant === "default" && (
                <p
                  className={`
                    whitespace-nowrap
                    transition-all duration-200
                    ${isActive ? "font-bold" : "font-medium"}
                  `}
                  style={{
                    color: labelColor,
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--lh-sm)",
                    letterSpacing: "0.14px",
                  }}
                >
                  {step}
                </p>
              )}
            </div>

            {/* Connecting line */}
            {!isLast && (
              <div
                style={{
                  height: "var(--border-width-50)",
                  width: "60px",
                  marginLeft: "var(--scale-300)",
                  marginRight: "var(--scale-300)",
                  backgroundColor: lineColor,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}