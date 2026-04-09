import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarCategory } from "../../components/organisms/AppBars";
import { Spotlight } from "../../components/molecules/Spotlight";
import { TooltipOnboarding } from "../../components/molecules/TooltipOnboarding";
import { Button } from "../../components/atoms/Button";
import { Upload } from "lucide-react";

/**
 * OBT-04 - Spotlight : Import
 * 
 * Highlight du bouton d'import avec un tooltip explicatif.
 * Quatrième étape du tour guidé (étape 4/5).
 */
export default function OBT_04_SpotlightImport() {
  const navigate = useNavigate();
  const importButtonRef = useRef<HTMLDivElement>(null);
  const [targetRect, setTargetRect] = React.useState({
    top: 20,
    left: 1200,
    width: 180,
    height: 40,
  });

  useEffect(() => {
    // Calculer la position du bouton import à mettre en évidence
    if (importButtonRef.current) {
      const rect = importButtonRef.current.getBoundingClientRect();
      setTargetRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  const handleNext = () => {
    navigate("/OBT_05_SpotlightHelp");
  };

  const handlePrevious = () => {
    navigate("/OBT_03_SpotlightIA");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      {/* Navigation Rail */}
      <NavRail activeSection="database" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* AppBar avec bouton Import */}
        <div
          className="h-16 px-6 flex items-center justify-between border-b"
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: "var(--border-default)",
          }}
        >
          <div>
            <h1
              className="text-xl font-semibold"
              style={{ color: "var(--text-strong)" }}
            >
              Base de données
            </h1>
            <p
              className="text-sm"
              style={{ color: "var(--text-subtle)" }}
            >
              Gérez vos contacts et données
            </p>
          </div>

          {/* Bouton Import (à mettre en évidence) */}
          <div ref={importButtonRef}>
            <Button variant="filled" size="medium">
              <Upload className="w-4 h-4 mr-2" />
              Importer des données
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {/* Placeholder content */}
            <div
              className="rounded-lg p-8 text-center"
              style={{
                backgroundColor: "var(--surface-container)",
                border: "1px solid var(--border-default)",
              }}
            >
              <div style={{ color: "var(--text-subtle)" }}>
                Votre base de données est vide
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Overlay */}
      <Spotlight targetRect={targetRect} onSkip={handleSkip}>
        <TooltipOnboarding
          currentStep={4}
          totalSteps={5}
          title="Import de données"
          description="Importez facilement vos contacts et biens existants depuis un fichier CSV ou Excel. Notre assistant vous guidera pour mapper automatiquement vos colonnes."
          position={{
            top: targetRect.top + targetRect.height + 16,
            left: targetRect.left + targetRect.width / 2 - 180,
          }}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSkip={handleSkip}
        />
      </Spotlight>
    </div>
  );
}
