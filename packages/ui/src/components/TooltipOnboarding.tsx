"use client";

import React from "react";
import { Button } from "./Button";

/**
 * TooltipOnboarding Component
 *
 * Tooltip spécifique pour le parcours d'onboarding avec compteur d'étapes,
 * titre, description et boutons de navigation.
 *
 * @component
 * @example
 * <TooltipOnboarding
 *   currentStep={1}
 *   totalSteps={5}
 *   title="Votre tableau de bord"
 *   description="C'est ici que vous retrouverez..."
 *   position={{ top: 200, left: 400 }}
 *   onNext={() => goToNextStep()}
 *   onSkip={() => skipTour()}
 * />
 */

export interface TooltipOnboardingProps {
  /** Numéro de l'étape actuelle (1-based) */
  currentStep: number;
  /** Nombre total d'étapes */
  totalSteps: number;
  /** Titre du tooltip */
  title: string;
  /** Description/explication */
  description: string;
  /** Position du tooltip */
  position: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  /** Callback pour passer à l'étape suivante */
  onNext?: () => void;
  /** Callback pour passer le tour */
  onSkip?: () => void;
  /** Callback pour revenir en arrière (optionnel) */
  onPrevious?: () => void;
  /** Largeur du tooltip (défaut: 360px) */
  width?: number;
  /** Texte du bouton principal (défaut: "Suivant") */
  nextLabel?: string;
  /** Texte du bouton secondaire (défaut: "Passer") */
  skipLabel?: string;
}

export const TooltipOnboarding: React.FC<TooltipOnboardingProps> = ({
  currentStep,
  totalSteps,
  title,
  description,
  position,
  onNext,
  onSkip,
  onPrevious,
  width = 360,
  nextLabel = "Suivant",
  skipLabel = "Passer",
}) => {
  return (
    <div
      className="absolute rounded-lg shadow-lg bg-surface-neutral-default dark:bg-surface-neutral-700 border border-edge-default"
      style={{
        ...position,
        width: `${width}px`,
        zIndex: 10000,
        pointerEvents: "auto",
      }}
    >
      {/* Header avec compteur d'étapes */}
      <div className="px-4 py-3 border-b border-edge-default">
        <div className="text-sm font-medium text-content-branded-strong">
          Étape {currentStep} sur {totalSteps}
        </div>
      </div>

      {/* Contenu */}
      <div className="px-4 py-4">
        {/* Titre */}
        <h3 className="text-lg font-semibold mb-2 text-content-strong">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-content-body">
          {description}
        </p>
      </div>

      {/* Footer avec boutons */}
      <div className="px-4 py-3 flex items-center justify-between border-t border-edge-default">
        {/* Bouton Précédent (si disponible) */}
        {onPrevious && currentStep > 1 ? (
          <Button
            variant="ghost"
            size="small"
            onClick={onPrevious}
          >
            Précédent
          </Button>
        ) : (
          <div /> // Spacer
        )}

        {/* Boutons de droite */}
        <div className="flex items-center gap-2">
          {/* Bouton Passer */}
          {onSkip && (
            <Button
              variant="ghost"
              size="small"
              onClick={onSkip}
            >
              {skipLabel}
            </Button>
          )}

          {/* Bouton Suivant */}
          {onNext && (
            <Button
              variant="filled"
              size="small"
              onClick={onNext}
            >
              {nextLabel}
            </Button>
          )}
        </div>
      </div>

      {/* Indicateur visuel (flèche pointant vers la cible) - optionnel */}
      {/* On peut l'ajouter plus tard si nécessaire */}
    </div>
  );
};
