import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { CheckCircle2 } from "lucide-react";

/**
 * OBT-06 - Modale de transition
 * 
 * Modale de fin du tour guidé qui propose de passer à l'étape suivante :
 * la configuration de l'espace (Setup) ou d'aller directement au dashboard.
 */
export default function OBT_06_TransitionModal() {
  const navigate = useNavigate();

  const handleStartSetup = () => {
    // Redirige vers le parcours Setup (OBS-00)
    navigate("/OBS_00_StepperSetup");
  };

  const handleGoToDashboard = () => {
    // Redirige directement vers le dashboard
    navigate("/dashboard");
  };

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
        className="rounded-xl shadow-2xl max-w-lg w-full mx-4"
        style={{
          backgroundColor: "var(--surface-container)",
          border: "1px solid var(--border-default)",
        }}
      >
        {/* Icon */}
        <div className="px-8 pt-8 pb-4 flex justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--surface-success-subtle)",
            }}
          >
            <CheckCircle2
              size={40}
              style={{ color: "var(--icon-success-strong)" }}
            />
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
            Parfait ! Vous connaissez l'essentiel 🎉
          </h2>

          {/* Description */}
          <p
            className="text-base leading-relaxed mb-4"
            style={{
              color: "var(--text-body)",
            }}
          >
            Vous avez découvert les principales fonctionnalités de RealAgent.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "var(--text-body)",
            }}
          >
            Prêt pour la prochaine étape ? Configurons votre espace de travail pour personnaliser votre expérience.
          </p>
        </div>

        {/* Actions */}
        <div className="px-8 pb-8 pt-4 flex flex-col gap-3">
          {/* Bouton principal */}
          <Button
            variant="filled"
            size="large"
            onClick={handleStartSetup}
            className="w-full"
          >
            Configurer mon espace
          </Button>

          {/* Bouton secondaire */}
          <button
            onClick={handleGoToDashboard}
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
            Plus tard, aller au tableau de bord
          </button>
        </div>
      </div>
    </div>
  );
}
