import React from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { Button } from "../../components/atoms/Button";
import { Badge } from "../../components/atoms/Badge";
import { CheckCircle2, User, Building2, FileText, Settings } from "lucide-react";

/**
 * OBS-05 - Confirmation Setup
 * 
 * Écran de confirmation de fin du setup :
 * - Message de succès
 * - Résumé de la complétion
 * - CTA vers dashboard ou import BDD
 */
export default function OBS_05_Confirmation() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  const handleGoToImport = () => {
    // Naviguer vers le parcours d'import (P05)
    navigate("/dashboard"); // Temporaire, sera remplacé par le parcours import
  };

  const completionSummary = [
    {
      icon: User,
      title: "Profil professionnel",
      description: "Vos informations personnelles complétées",
      completed: true,
      completionRate: 100,
    },
    {
      icon: Building2,
      title: "Organisation",
      description: "Informations de votre agence renseignées",
      completed: true,
      completionRate: 100,
    },
    {
      icon: FileText,
      title: "Documents",
      description: "1 document sur 3 téléchargé",
      completed: false,
      completionRate: 33,
    },
    {
      icon: Settings,
      title: "Paramètres",
      description: "Préférences configurées",
      completed: true,
      completionRate: 100,
    },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="dashboard" />

      <div className="flex-1 flex flex-col">
        {/* Note: No ProgressBar on confirmation page - it's the success screen */}
        
        <div className="flex-1 overflow-auto flex items-center justify-center">
          <div className="max-w-3xl w-full mx-auto px-8 py-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--surface-success-default)",
                }}
              >
                <CheckCircle2
                  size={48}
                  style={{ color: "var(--icon-on-branded)" }}
                />
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-4xl font-bold text-center mb-3"
              style={{ color: "var(--text-strong)" }}
            >
              Configuration terminée ! 🎉
            </h1>

            {/* Description */}
            <p
              className="text-lg text-center mb-8"
              style={{ color: "var(--text-body)" }}
            >
              Votre espace RealAgent est prêt. Vous pouvez maintenant commencer à utiliser l'application.
            </p>

            {/* Completion Summary */}
            <div
              className="rounded-xl p-6 mb-8"
              style={{
                backgroundColor: "var(--surface-container)",
                border: "1px solid var(--border-default)",
              }}
            >
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-strong)" }}
              >
                Résumé de votre configuration
              </h2>

              <div className="space-y-3">
                {completionSummary.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg"
                    style={{
                      backgroundColor: "var(--surface-page)",
                    }}
                  >
                    {/* Icon Ghost (sans fond) */}
                    <item.icon
                      size={20}
                      className="flex-shrink-0"
                      style={{
                        color: "var(--icon-default)",
                      }}
                    />

                    {/* Titre H5 */}
                    <h5
                      className="flex-1 text-base font-medium"
                      style={{ color: "var(--text-strong)" }}
                    >
                      {item.title}
                    </h5>

                    {/* Badge Status */}
                    {item.completed ? (
                      <Badge variant="success" label="Complet" />
                    ) : (
                      <Badge variant="warning" label={`${item.completionRate}%`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div
              className="rounded-lg p-4 mb-8"
              style={{
                backgroundColor: "var(--surface-branded-subtle)",
                border: "1px solid var(--border-branded-default)",
              }}
            >
              <div className="text-sm" style={{ color: "var(--text-branded-strong)" }}>
                💡 <strong>Conseil :</strong> Importez vos contacts existants pour gagner du temps.
                Vous pourrez ensuite profiter de toutes les fonctionnalités de RealAgent.
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button
                variant="filled"
                size="large"
                onClick={handleGoToImport}
                className="w-full"
              >
                Importer mes données
              </Button>

              <button
                onClick={handleGoToDashboard}
                className="text-sm py-3 px-4 rounded-lg transition-colors"
                style={{ color: "var(--text-subtle)" }}
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
      </div>
    </div>
  );
}