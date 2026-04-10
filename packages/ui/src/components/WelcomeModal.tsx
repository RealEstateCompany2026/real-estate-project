"use client";

import React from "react";
import { Button } from "./Button";

/**
 * WelcomeModal - Modale de bienvenue
 * Organism du design system RealAgent
 *
 * Modale personnalisée pour le début du parcours d'onboarding.
 * Affiche un message de bienvenue avec le prénom de l'utilisateur et propose
 * de démarrer le tour guidé ou de le passer.
 *
 * Structure:
 * - Overlay semi-transparent
 * - Card centrée avec icon/illustration
 * - Titre personnalisé avec prénom
 * - Description du tour
 * - Deux boutons d'action (CTA primary + secondary)
 */

export interface WelcomeModalProps {
  /**
   * Prénom de l'utilisateur
   */
  firstName?: string;
  /**
   * Callback pour démarrer le tour
   */
  onStart: () => void;
  /**
   * Callback pour passer le tour
   */
  onSkip: () => void;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  firstName = "Agent",
  onStart,
  onSkip,
  className = "",
}: WelcomeModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${className}`.trim()}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
      }}
    >
      {/* Modal Card */}
      <div
        className="rounded-xl shadow-2xl max-w-md w-full mx-4 bg-surface-neutral-default border border-edge-default"
      >
        {/* Icon/Illustration */}
        <div className="px-8 pt-8 pb-4 flex justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center bg-surface-branded-default"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="var(--icon-branded-on-action)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="var(--icon-branded-on-action)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="var(--icon-branded-on-action)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Contenu */}
        <div className="px-8 py-4 text-center">
          {/* Titre */}
          <h2 className="text-2xl font-bold mb-3 text-content-strong">
            Bienvenue sur RealAgent{firstName ? `, ${firstName}` : ""} !
          </h2>

          {/* Description */}
          <p className="text-base leading-relaxed mb-2 text-content-body">
            Nous sommes ravis de vous accompagner dans la gestion de votre activité immobilière.
          </p>
          <p className="text-base leading-relaxed text-content-body">
            Souhaitez-vous faire un tour rapide de l'application ? Cela ne prendra que 2 minutes.
          </p>
        </div>

        {/* Actions */}
        <div className="px-8 pb-8 pt-4 flex flex-col gap-3">
          {/* Bouton principal */}
          <Button
            variant="default"
            size="lg"
            onClick={onStart}
            className="w-full"
          >
            C'est parti ! 🚀
          </Button>

          {/* Bouton secondaire */}
          <button
            onClick={onSkip}
            className="text-sm py-2 px-4 rounded-lg transition-colors text-content-subtle hover:text-content-body hover:bg-surface-neutral-action"
          >
            Passer cette étape
          </button>
        </div>
      </div>
    </div>
  );
};
