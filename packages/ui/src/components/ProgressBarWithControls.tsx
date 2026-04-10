"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProgressBar } from "./ProgressBar";

/**
 * ProgressBarWithControls - Barre de progression avec contrôles de navigation
 * Organism du design system RealAgent
 *
 * Composant complet intégrant :
 * - Label de titre (Body.sm.SemiBold 14/16)
 * - Boutons de navigation mini (gauche/droite)
 * - Barre de progression (ProgressBar)
 *
 * Dimensions:
 * - Width: 1191px max, 380px min, flexible
 * - Height: 100px
 * - Padding: 34px 10px
 * - Gap: 24px entre éléments
 * - Border-radius: 20px
 *
 * Background: white (light) / black (dark via tokens)
 */

export interface ProgressBarWithControlsProps {
  /**
   * Label affiché à gauche (ex: "Complétion", "Progression", etc.)
   */
  label: string;
  /**
   * Pourcentage de progression (0-100)
   */
  progress: number;
  /**
   * Callback bouton précédent (flèche gauche)
   */
  onPrevious?: () => void;
  /**
   * Callback bouton suivant (flèche droite)
   */
  onNext?: () => void;
  /**
   * Désactiver le bouton précédent
   */
  disablePrevious?: boolean;
  /**
   * Désactiver le bouton suivant
   */
  disableNext?: boolean;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
}

export function ProgressBarWithControls({
  label,
  progress,
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false,
  className = "",
}: ProgressBarWithControlsProps) {
  return (
    <div
      className={`h-[100px] max-w-[1191px] min-w-[380px] relative rounded-[20px] w-[1191px] bg-surface-neutral-default ${className}`.trim()}
    >
      <div className="flex flex-col justify-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] px-[10px] py-[34px] relative size-full">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            {/* Label */}
            <div className="relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
                  <p className="text-[14px] leading-[16px] tracking-[0.14px] font-semibold not-italic relative shrink-0 whitespace-nowrap text-content-body">
                    {label}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons (mini pagination) */}
            <div className="relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[12px] items-center relative">
                  {/* Previous button */}
                  <button
                    type="button"
                    onClick={onPrevious}
                    disabled={disablePrevious}
                    className="relative shrink-0 size-[24px] disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-70 transition-opacity text-icon-neutral-default"
                    aria-label="Précédent"
                  >
                    <ArrowLeft size={24} />
                  </button>

                  {/* Next button */}
                  <button
                    type="button"
                    onClick={onNext}
                    disabled={disableNext}
                    className="relative shrink-0 size-[24px] disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-70 transition-opacity text-icon-neutral-default"
                    aria-label="Suivant"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <ProgressBar progress={progress} />
          </div>
        </div>
      </div>
    </div>
  );
}
