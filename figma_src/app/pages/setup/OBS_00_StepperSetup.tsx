import React from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { Button } from "../../components/atoms/Button";
import { CheckCircle2 } from "lucide-react";

/**
 * OBS-00 - Stepper Setup Introduction
 * 
 * Page d'introduction au parcours de setup initial.
 * Présentation des 4 étapes de configuration.
 */
export default function OBS_00_StepperSetup() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/OBS_01_ProfilProfessionnel");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  const steps = [
    {
      label: "Profil professionnel",
      description: "Complétez vos informations professionnelles",
    },
    {
      label: "Organisation",
      description: "Configurez votre agence et votre équipe",
    },
    {
      label: "Documents",
      description: "Personnalisez vos modèles de documents",
    },
    {
      label: "Paramètres",
      description: "Ajustez les paramètres de l'application",
    },
  ];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="dashboard" />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div
          className="h-16 px-8 flex items-center justify-between border-b"
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: "var(--border-default)",
          }}
        >
          <h1 className="text-xl font-semibold" style={{ color: "var(--text-strong)" }}>
            Configuration initiale
          </h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto flex items-center justify-center">
          <div className="max-w-4xl w-full mx-auto px-8 py-12">
            {/* Welcome Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: "var(--surface-branded-subtle)" }}>
                <CheckCircle2 size={40} style={{ color: "var(--icon-branded-strong)" }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--text-strong)" }}>
                Bienvenue sur RealAgent ! 👋
              </h2>
              <p className="text-lg mb-2" style={{ color: "var(--text-body)" }}>
                Configurons ensemble votre espace de travail en 4 étapes simples.
              </p>
              <p className="text-base" style={{ color: "var(--text-subtle)" }}>
                Cela ne prendra que quelques minutes.
              </p>
            </div>

            {/* Steps List */}
            <div className="grid gap-4 mb-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: "var(--surface-container)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold"
                      style={{
                        backgroundColor: "var(--surface-branded-subtle)",
                        color: "var(--text-branded-strong)",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--text-strong)" }}>
                        {step.label}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--text-body)" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-4">
              <Button variant="ghost" size="large" onClick={handleSkip}>
                Passer cette étape
              </Button>
              <Button variant="filled" size="large" onClick={handleStart}>
                Commencer la configuration
              </Button>
            </div>

            {/* Info */}
            <div
              className="mt-8 p-4 rounded-lg text-center text-sm"
              style={{
                backgroundColor: "var(--surface-branded-subtle)",
                color: "var(--text-branded-strong)",
              }}
            >
              💡 Vous pourrez modifier ces paramètres à tout moment depuis votre profil
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}