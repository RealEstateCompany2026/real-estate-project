import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/atoms/Button";

/**
 * P04 Demo - Parcours Onboarding Setup (OBS)
 * 
 * Page de démonstration pour accéder facilement à tous les écrans
 * du parcours P04 (Onboarding Setup).
 */
export default function P04Demo() {
  const navigate = useNavigate();

  const screens = [
    {
      id: "OBS-01",
      name: "Profil professionnel",
      path: "/OBS_01_ProfilProfessionnel",
      description: "Formulaire en sections dépliables : identité, contact, métier, réseau. Jauge de complétion.",
    },
    {
      id: "OBS-02",
      name: "Organisation",
      path: "/OBS_02_Organisation",
      description: "Identité agence, infos légales (SIRET, carte T/G), logo. Champs réseau pré-remplis si C.",
    },
    {
      id: "OBS-03",
      name: "Documents réglementaires",
      path: "/OBS_03_Documents",
      description: "Zone d'upload par type de document. Statut par document. Alertes d'expiration.",
    },
    {
      id: "OBS-04",
      name: "Paramètres app",
      path: "/OBS_04_Parametres",
      description: "Langue, fuseau, notifications, connexion calendrier.",
    },
    {
      id: "OBS-05",
      name: "Confirmation Setup",
      path: "/OBS_05_Confirmation",
      description: "Message de succès + résumé de la complétion + CTA vers dashboard ou import BDD.",
    },
  ];

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm mb-4 px-4 py-2 rounded-lg transition-colors"
            style={{
              color: "var(--text-subtle)",
              backgroundColor: "var(--surface-container)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface-container)";
            }}
          >
            ← Retour à l'accueil
          </button>
        </div>

        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--text-strong)" }}
        >
          Parcours P04 - Onboarding Setup (OBS)
        </h1>
        <p
          className="text-lg mb-4"
          style={{ color: "var(--text-body)" }}
        >
          Configuration initiale de l'espace de travail avec stepper persistant
        </p>
        <div
          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
          style={{
            backgroundColor: "var(--surface-branded-subtle)",
            color: "var(--text-branded-strong)",
          }}
        >
          Vague 1 • 5 écrans
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto mb-8">
        <div
          className="rounded-lg p-6 border"
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: "var(--border-default)",
          }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-strong)" }}
          >
            🎯 Composants utilisés
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • ProgressBarWithControls (organism)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Barre de progression avec navigation intégrée
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • CollapsibleSection (molecule)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Sections dépliables pour formulaires
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • CompletionGauge (atom)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Jauge de complétion avec pourcentage
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • FileUpload (molecule)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Zone de téléchargement drag & drop
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screens Grid */}
      <div className="max-w-4xl mx-auto space-y-4">
        {screens.map((screen, index) => (
          <div
            key={screen.id}
            className="rounded-lg p-6 border transition-all"
            style={{
              backgroundColor: "var(--surface-container)",
              borderColor: "var(--border-default)",
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--surface-branded-default)",
                      color: "var(--text-on-branded)",
                    }}
                  >
                    {index + 1}
                  </div>
                  <div
                    className="px-2 py-1 rounded text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: "var(--surface-branded-subtle)",
                      color: "var(--text-branded-strong)",
                    }}
                  >
                    {screen.id}
                  </div>
                </div>

                {/* Screen Name */}
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-strong)" }}
                >
                  {screen.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-body)" }}
                >
                  {screen.description}
                </p>
              </div>

              {/* Button */}
              <Button
                variant="filled"
                size="medium"
                onClick={() => navigate(screen.path)}
                className="ml-4"
              >
                Voir l'écran
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Start */}
      <div className="max-w-4xl mx-auto mt-8">
        <div
          className="rounded-lg p-6 border"
          style={{
            backgroundColor: "var(--surface-branded-subtle)",
            borderColor: "var(--border-branded-default)",
          }}
        >
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: "var(--text-branded-strong)" }}
          >
            🚀 Démarrage rapide
          </h3>
          <p
            className="text-sm mb-4"
            style={{ color: "var(--text-branded-strong)" }}
          >
            Commencez par le profil professionnel pour voir le parcours complet avec le stepper.
          </p>
          <Button
            variant="filled"
            size="large"
            onClick={() => navigate("/OBS_01_ProfilProfessionnel")}
          >
            Démarrer la configuration
          </Button>
        </div>
      </div>

      {/* Info Box */}
      <div className="max-w-4xl mx-auto mt-6">
        <div
          className="rounded-lg p-4 border text-sm"
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: "var(--border-default)",
            color: "var(--text-subtle)",
          }}
        >
          <strong style={{ color: "var(--text-body)" }}>Note :</strong> Ce parcours utilise
          un stepper horizontal persistant qui indique la progression. Les utilisateurs peuvent
          naviguer entre les étapes déjà visitées et passer certaines sections non obligatoires.
        </div>
      </div>
    </div>
  );
}