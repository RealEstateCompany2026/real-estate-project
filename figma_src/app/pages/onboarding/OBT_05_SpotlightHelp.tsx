import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarCategory } from "../../components/organisms/AppBars";
import { Spotlight } from "../../components/molecules/Spotlight";
import { TooltipOnboarding } from "../../components/molecules/TooltipOnboarding";

/**
 * OBT-05 - Spotlight : Aide
 * 
 * Highlight du menu Aide dans le NavRail avec un tooltip explicatif.
 * Cinquième et dernière étape du tour guidé (étape 5/5).
 */
export default function OBT_05_SpotlightHelp() {
  const navigate = useNavigate();
  const helpMenuRef = useRef<HTMLDivElement>(null);
  const [targetRect, setTargetRect] = React.useState({
    top: 900,
    left: 0,
    width: 90,
    height: 60,
  });

  useEffect(() => {
    // Calculer la position du menu Aide (en bas du NavRail)
    // Le menu Aide est généralement en bas du NavRail
    const navRailHeight = window.innerHeight;
    setTargetRect({
      top: navRailHeight - 120, // Position approximative du menu profile/aide
      left: 0,
      width: 90,
      height: 120,
    });
  }, []);

  const handleNext = () => {
    // Dernière étape, on va vers la modale de transition
    navigate("/OBT_06_TransitionModal");
  };

  const handlePrevious = () => {
    navigate("/OBT_04_SpotlightImport");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      {/* Navigation Rail */}
      <div ref={helpMenuRef}>
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
          currentStep={5}
          totalSteps={5}
          title="Centre d'aide et profil"
          description="Besoin d'aide ? Accédez à la documentation, au support et à vos paramètres de compte depuis ce menu. Vous pouvez également gérer votre profil et vos préférences."
          position={{
            top: targetRect.top - 200, // Au-dessus du menu
            left: 90 + 24, // À droite du NavRail avec 24px de marge
          }}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSkip={handleSkip}
          nextLabel="Terminer"
        />
      </Spotlight>
    </div>
  );
}
