import React from "react";
import { Button } from "../atoms/Button";

/**
 * WelcomeModal Component
 * 
 * Modale de bienvenue personnalisée pour le début du parcours d'onboarding.
 * Affiche un message de bienvenue avec le prénom de l'utilisateur et propose
 * de démarrer le tour guidé ou de le passer.
 * 
 * @component
 * @example
 * <WelcomeModal
 *   firstName="Sophie"
 *   onStart={() => startTour()}
 *   onSkip={() => skipTour()}
 * />
 */

export interface WelcomeModalProps {
  /** Prénom de l'utilisateur */
  firstName?: string;
  /** Callback pour démarrer le tour */
  onStart: () => void;
  /** Callback pour passer le tour */
  onSkip: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  firstName = "Agent",
  onStart,
  onSkip,
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 9999,
      }}
    >
      {/* Modal Card */}
      <div
        className="rounded-xl shadow-2xl max-w-md w-full mx-4"
        style={{
          backgroundColor: "var(--surface-container)",
          border: "1px solid var(--border-default)",
        }}
      >
        {/* Icon/Illustration */}
        <div className="px-8 pt-8 pb-4 flex justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--surface-branded-default)",
            }}
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
                stroke="var(--icon-on-branded)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="var(--icon-on-branded)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="var(--icon-on-branded)"
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
          <h2
            className="text-2xl font-bold mb-3"
            style={{
              color: "var(--text-strong)",
            }}
          >
            Bienvenue sur RealAgent{firstName ? `, ${firstName}` : ""} !
          </h2>

          {/* Description */}
          <p
            className="text-base leading-relaxed mb-2"
            style={{
              color: "var(--text-body)",
            }}
          >
            Nous sommes ravis de vous accompagner dans la gestion de votre activité immobilière.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "var(--text-body)",
            }}
          >
            Souhaitez-vous faire un tour rapide de l'application ? Cela ne prendra que 2 minutes.
          </p>
        </div>

        {/* Actions */}
        <div className="px-8 pb-8 pt-4 flex flex-col gap-3">
          {/* Bouton principal */}
          <Button
            variant="filled"
            size="large"
            onClick={onStart}
            className="w-full"
          >
            C'est parti ! 🚀
          </Button>

          {/* Bouton secondaire */}
          <button
            onClick={onSkip}
            className="text-sm py-2 px-4 rounded-lg transition-colors"
            style={{
              color: "var(--text-subtle)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-body)";
              e.currentTarget.style.backgroundColor = "var(--surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-subtle)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Passer cette étape
          </button>
        </div>
      </div>
    </div>
  );
};
