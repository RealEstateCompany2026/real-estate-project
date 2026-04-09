import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/atoms/Button";

/**
 * P03 Demo - Parcours Onboarding Product Tour (OBT)
 * 
 * Page de démonstration pour accéder facilement à tous les écrans
 * du parcours P03 (Onboarding Product Tour).
 */
export default function P03Demo() {
  const navigate = useNavigate();

  const screens = [
    {
      id: "OBT-00",
      name: "Modale bienvenue",
      path: "/OBT_00_WelcomeModal",
      description: "Message de bienvenue + CTA « C'est parti » + lien « Passer »",
    },
    {
      id: "OBT-01",
      name: "Spotlight : Dashboard",
      path: "/OBT_01_SpotlightDashboard",
      description: "Highlight zone dashboard + tooltip explicatif",
    },
    {
      id: "OBT-02",
      name: "Spotlight : Navigation",
      path: "/OBT_02_SpotlightNavigation",
      description: "Highlight menu latéral + tooltip",
    },
    {
      id: "OBT-03",
      name: "Spotlight : IA & triggers",
      path: "/OBT_03_SpotlightIA",
      description: "Highlight widget IA + tooltip",
    },
    {
      id: "OBT-04",
      name: "Spotlight : Import",
      path: "/OBT_04_SpotlightImport",
      description: "Highlight bouton import + tooltip",
    },
    {
      id: "OBT-05",
      name: "Spotlight : Aide",
      path: "/OBT_05_SpotlightHelp",
      description: "Highlight menu Aide + tooltip",
    },
    {
      id: "OBT-06",
      name: "Modale de transition",
      path: "/OBT_06_TransitionModal",
      description: "« Prochaine étape : configurons votre espace » + CTA",
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
          Parcours P03 - Onboarding Product Tour (OBT)
        </h1>
        <p
          className="text-lg mb-4"
          style={{ color: "var(--text-body)" }}
        >
          Tour guidé de l'application avec spotlights et tooltips
        </p>
        <div
          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
          style={{
            backgroundColor: "var(--surface-branded-subtle)",
            color: "var(--text-branded-strong)",
          }}
        >
          Vague 1 • 7 écrans
        </div>
      </div>

      {/* Screens Grid */}
      <div className="max-w-4xl mx-auto space-y-4">
        {screens.map((screen) => (
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
                {/* Badge ID */}
                <div
                  className="inline-block px-2 py-1 rounded text-xs font-mono font-semibold mb-2"
                  style={{
                    backgroundColor: "var(--surface-branded-default)",
                    color: "var(--text-on-branded)",
                  }}
                >
                  {screen.id}
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
            Commencez par la modale de bienvenue pour voir le parcours complet en action.
          </p>
          <Button
            variant="filled"
            size="large"
            onClick={() => navigate("/OBT_00_WelcomeModal")}
          >
            Démarrer le parcours OBT
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
          des composants Spotlight et TooltipOnboarding pour créer un tour guidé interactif
          de l'application. Les utilisateurs peuvent naviguer entre les étapes ou passer le tour
          à tout moment.
        </div>
      </div>
    </div>
  );
}
