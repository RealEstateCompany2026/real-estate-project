import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarCategory } from "../../components/organisms/AppBars";
import { Spotlight } from "../../components/molecules/Spotlight";
import { TooltipOnboarding } from "../../components/molecules/TooltipOnboarding";
import { AiSuggestionDashboard } from "../../components/organisms/AiSuggestionDashboard";

/**
 * OBT-01 - Spotlight : Dashboard
 * 
 * Highlight de la zone dashboard avec un tooltip explicatif.
 * Première étape du tour guidé (étape 1/5).
 */
export default function OBT_01_SpotlightDashboard() {
  const navigate = useNavigate();
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [targetRect, setTargetRect] = React.useState({
    top: 200,
    left: 400,
    width: 800,
    height: 400,
  });

  useEffect(() => {
    // Calculer la position de la zone dashboard à mettre en évidence
    if (dashboardRef.current) {
      const rect = dashboardRef.current.getBoundingClientRect();
      setTargetRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  const handleNext = () => {
    navigate("/OBT_02_SpotlightNavigation");
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      {/* Navigation Rail */}
      <NavRail activeSection="dashboard" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* AppBar */}
        <AppBarCategory
          title="Tableau de bord"
          subtitle="Vue d'ensemble de votre activité"
        />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6">
          <div ref={dashboardRef} className="space-y-6">
            {/* Widget IA Suggestions */}
            <AiSuggestionDashboard />

            {/* Autres widgets dashboard (placeholder) */}
            <div className="grid grid-cols-3 gap-6">
              <div
                className="rounded-lg p-6 h-32"
                style={{
                  backgroundColor: "var(--surface-container)",
                  border: "1px solid var(--border-default)",
                }}
              >
                <div style={{ color: "var(--text-subtle)" }}>Activité récente</div>
              </div>
              <div
                className="rounded-lg p-6 h-32"
                style={{
                  backgroundColor: "var(--surface-container)",
                  border: "1px solid var(--border-default)",
                }}
              >
                <div style={{ color: "var(--text-subtle)" }}>Affaires en cours</div>
              </div>
              <div
                className="rounded-lg p-6 h-32"
                style={{
                  backgroundColor: "var(--surface-container)",
                  border: "1px solid var(--border-default)",
                }}
              >
                <div style={{ color: "var(--text-subtle)" }}>Statistiques</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Overlay */}
      <Spotlight targetRect={targetRect} onSkip={handleSkip}>
        <TooltipOnboarding
          currentStep={1}
          totalSteps={5}
          title="Votre tableau de bord"
          description="C'est ici que vous retrouverez une vue d'ensemble de votre activité : suggestions IA, affaires en cours, statistiques clés et prochaines actions à mener."
          position={{
            top: targetRect.top + targetRect.height + 16,
            left: targetRect.left + targetRect.width / 2 - 180,
          }}
          onNext={handleNext}
          onSkip={handleSkip}
        />
      </Spotlight>
    </div>
  );
}
