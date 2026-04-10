"use client";

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
                backgroundColor: isCompleted || isActive ? "var(--purple-500)" : "var(--neutral-200)",
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
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex items-center">
            {/* Step circle + label */}
            <div className="flex flex-col items-center gap-2">
              {/* Circle */}
              <div
                className={`
                  flex items-center justify-center
                  w-8 h-8 rounded-full
                  transition-all duration-200
                  ${isCompleted || isActive ? "bg-surface-branded-default" : "bg-surface-neutral-action"}
                `}
              >
                {isCompleted ? (
                  <Check
                    size={18}
                    className={`${isCompleted || isActive ? "text-content-branded-on-action" : "text-content-placeholder"}`}
                    strokeWidth={3}
                  />
                ) : (
                  <span
                    className={`${isActive ? "font-bold" : "font-semibold"} text-[var(--text-sm)]`}
                    style={{
                      color: isCompleted || isActive ? "var(--text-branded-on-action)" : "var(--text-placeholder)",
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
                    text-[var(--text-sm)]
                    tracking-[0.14px]
                    ${isActive ? "font-bold text-purple-500" : isCompleted ? "font-medium text-content-body" : "font-medium text-content-placeholder"}
                  `}
                >
                  {step}
                </p>
              )}
            </div>

            {/* Connecting line */}
            {!isLast && (
              <div
                className="h-[2px] bg-surface-neutral-action"
                style={{
                  width: "60px",
                  marginLeft: "var(--scale-300)",
                  marginRight: "var(--scale-300)",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
