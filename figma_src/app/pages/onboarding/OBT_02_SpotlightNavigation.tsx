import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarCategory } from "../../components/organisms/AppBars";
import { Spotlight } from "../../components/molecules/Spotlight";
import { TooltipOnboarding } from "../../components/molecules/TooltipOnboarding";

/**
 * OBT-02 - Spotlight : Navigation
 * 
 * Highlight du menu latéral (NavRail) avec un tooltip explicatif.
 * Deuxième étape du tour guidé (étape 2/5).
 */
export default function OBT_02_SpotlightNavigation() {
  const navigate = useNavigate();
  const navRailRef = useRef<HTMLDivElement>(null);
  const [targetRect, setTargetRect] = React.useState({
    top: 80,
    left: 0,
    width: 90,
    height: 600,
  });

  useEffect(() => {
    // Calculer la position du NavRail à mettre en évidence
    // Le NavRail fait 90px de large et couvre toute la hauteur
    setTargetRect({
      top: 0,
      left: 0,
      width: 90,
      height: window.innerHeight,
    });
  }, []);

  const handleNext = () => {
    navigate("/OBT_03_SpotlightIA");
  };

  const handlePrevious = () => {
    navigate("/OBT_01_SpotlightDashboard");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      {/* Navigation Rail */}
      <div ref={navRailRef}>
        <NavRail activeSection="dashboard" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* AppBar */}
        <AppBarCategory
          title="Tableau de bord"
          subtitle="Vue d'ensemble de votre activité"
        />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {/* Contenu du dashboard (placeholder) */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "var(--surface-container)",
                border: "1px solid var(--border-default)",
              }}
            >
              <div style={{ color: "var(--text-subtle)" }}>Contenu du dashboard</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Overlay */}
      <Spotlight targetRect={targetRect} onSkip={handleSkip}>
        <TooltipOnboarding
          currentStep={2}
          totalSteps={5}
          title="Menu de navigation"
          description="Utilisez ce menu pour naviguer entre les différentes sections de l'application : gestion de vos clients, biens, affaires, documents, agenda et automatisations."
          position={{
            top: 200,
            left: 90 + 24, // À droite du NavRail avec 24px de marge
          }}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSkip={handleSkip}
        />
      </Spotlight>
    </div>
  );
}
