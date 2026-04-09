import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarCategory } from "../../components/organisms/AppBars";
import { Spotlight } from "../../components/molecules/Spotlight";
import { TooltipOnboarding } from "../../components/molecules/TooltipOnboarding";
import { AiSuggestionDashboard } from "../../components/organisms/AiSuggestionDashboard";

/**
 * OBT-03 - Spotlight : IA & triggers
 * 
 * Highlight du widget IA avec un tooltip explicatif.
 * Troisième étape du tour guidé (étape 3/5).
 */
export default function OBT_03_SpotlightIA() {
  const navigate = useNavigate();
  const iaWidgetRef = useRef<HTMLDivElement>(null);
  const [targetRect, setTargetRect] = React.useState({
    top: 200,
    left: 400,
    width: 600,
    height: 200,
  });

  useEffect(() => {
    // Calculer la position du widget IA à mettre en évidence
    if (iaWidgetRef.current) {
      const rect = iaWidgetRef.current.getBoundingClientRect();
      setTargetRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  const handleNext = () => {
    navigate("/OBT_04_SpotlightImport");
  };

  const handlePrevious = () => {
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
          <div className="space-y-6">
            {/* Widget IA Suggestions */}
            <div ref={iaWidgetRef}>
              <AiSuggestionDashboard />
            </div>

            {/* Autres widgets */}
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
          currentStep={3}
          totalSteps={5}
          title="Assistant IA et suggestions"
          description="Notre intelligence artificielle analyse votre activité en temps réel et vous propose des actions personnalisées pour optimiser votre prospection, qualification et suivi client."
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
