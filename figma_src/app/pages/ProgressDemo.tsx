import { useState } from "react";
import { ProgressBar } from "../components/atoms";
import { ProgressBarWithControls } from "../components/organisms";
import { useTheme } from "../context/ThemeContext";

/**
 * ProgressDemo - Page de démonstration des composants Progress
 * 
 * Démontre :
 * - ProgressBar (atome) : Barre de progression pure
 * - ProgressBarWithControls (organisme) : Barre avec label et navigation
 */

export default function ProgressDemo() {
  const { theme, toggleTheme } = useTheme();
  const [simpleProgress, setSimpleProgress] = useState(45);
  const [stepProgress, setStepProgress] = useState(0);
  const [completionProgress, setCompletionProgress] = useState(65);

  // Animated progress demo
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const startAnimation = () => {
    setAnimatedProgress(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current > 100) {
        clearInterval(interval);
        current = 100;
      }
      setAnimatedProgress(current);
    }, 20);
  };

  // Step navigation
  const steps = ["Étape 1", "Étape 2", "Étape 3", "Étape 4", "Étape 5"];
  const currentStep = Math.floor((stepProgress / 100) * (steps.length - 1));

  const handlePreviousStep = () => {
    const newStep = Math.max(0, currentStep - 1);
    setStepProgress((newStep / (steps.length - 1)) * 100);
  };

  const handleNextStep = () => {
    const newStep = Math.min(steps.length - 1, currentStep + 1);
    setStepProgress((newStep / (steps.length - 1)) * 100);
  };

  return (
    <div
      className="min-h-screen p-[40px]"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#111215",
      }}
    >
      <div className="max-w-[1400px] mx-auto space-y-[60px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-[32px] leading-[40px] font-bold mb-[8px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Loading & Progress - RealAgent
            </h1>
            <p
              className="text-[16px] leading-[24px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Barres de progression et indicateurs de chargement
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-[16px] py-[12px] rounded-[12px] font-semibold text-[14px] transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--surface-neutral-action)",
              color: "var(--text-body)",
            }}
          >
            Mode: {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>

        {/* Section 1: ProgressBar (atome) */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. ProgressBar - Atome
          </h2>
          <div
            className="p-[32px] rounded-[16px] space-y-[32px]"
            style={{ backgroundColor: "var(--surface-neutral-action)" }}
          >
            {/* Interactive progress */}
            <div>
              <div className="flex items-center justify-between mb-[16px]">
                <span
                  className="text-[14px] font-semibold"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Progression interactive: {simpleProgress}%
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={simpleProgress}
                  onChange={(e) => setSimpleProgress(Number(e.target.value))}
                  className="w-[200px]"
                />
              </div>
              <ProgressBar progress={simpleProgress} />
            </div>

            {/* Static examples */}
            <div className="space-y-[16px]">
              <p
                className="text-[14px] font-semibold"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Exemples statiques:
              </p>
              <div className="space-y-[12px]">
                <div className="flex items-center gap-[16px]">
                  <span
                    className="text-[14px] w-[60px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    0%
                  </span>
                  <ProgressBar progress={0} />
                </div>
                <div className="flex items-center gap-[16px]">
                  <span
                    className="text-[14px] w-[60px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    20%
                  </span>
                  <ProgressBar progress={20} />
                </div>
                <div className="flex items-center gap-[16px]">
                  <span
                    className="text-[14px] w-[60px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    40%
                  </span>
                  <ProgressBar progress={40} />
                </div>
                <div className="flex items-center gap-[16px]">
                  <span
                    className="text-[14px] w-[60px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    60%
                  </span>
                  <ProgressBar progress={60} />
                </div>
                <div className="flex items-center gap-[16px]">
                  <span
                    className="text-[14px] w-[60px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    80%
                  </span>
                  <ProgressBar progress={80} />
                </div>
                <div className="flex items-center gap-[16px]">
                  <span
                    className="text-[14px] w-[60px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    100%
                  </span>
                  <ProgressBar progress={100} />
                </div>
              </div>
            </div>

            {/* Animated progress */}
            <div>
              <div className="flex items-center justify-between mb-[16px]">
                <span
                  className="text-[14px] font-semibold"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Animation: {animatedProgress}%
                </span>
                <button
                  onClick={startAnimation}
                  className="px-[16px] py-[8px] rounded-[8px] font-semibold text-[14px] transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: "#7b72f9",
                    color: "white",
                  }}
                >
                  Démarrer
                </button>
              </div>
              <ProgressBar progress={animatedProgress} />
            </div>

            {/* Custom colors */}
            <div className="space-y-[12px]">
              <p
                className="text-[14px] font-semibold"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Couleurs personnalisées:
              </p>
              <div className="flex items-center gap-[16px]">
                <span
                  className="text-[14px] w-[100px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Vert (default)
                </span>
                <ProgressBar progress={70} color="#0da500" />
              </div>
              <div className="flex items-center gap-[16px]">
                <span
                  className="text-[14px] w-[100px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Bleu
                </span>
                <ProgressBar progress={70} color="#7b72f9" />
              </div>
              <div className="flex items-center gap-[16px]">
                <span
                  className="text-[14px] w-[100px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Orange
                </span>
                <ProgressBar progress={70} color="#FF6B00" />
              </div>
              <div className="flex items-center gap-[16px]">
                <span
                  className="text-[14px] w-[100px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Rouge
                </span>
                <ProgressBar progress={70} color="#FF0000" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: ProgressBarWithControls (organisme) */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. ProgressBarWithControls - Organisme
          </h2>
          <div className="space-y-[32px]">
            {/* Example 1: Completion */}
            <div>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Exemple de complétion de profil:
              </p>
              <ProgressBarWithControls
                label="Complétion"
                progress={completionProgress}
                onPrevious={() =>
                  setCompletionProgress(Math.max(0, completionProgress - 10))
                }
                onNext={() =>
                  setCompletionProgress(Math.min(100, completionProgress + 10))
                }
                disablePrevious={completionProgress === 0}
                disableNext={completionProgress === 100}
              />
            </div>

            {/* Example 2: Step navigation */}
            <div>
              <p
                className="text-[14px] mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Navigation par étapes: {steps[currentStep]} ({currentStep + 1}/
                {steps.length})
              </p>
              <ProgressBarWithControls
                label="Progression"
                progress={stepProgress}
                onPrevious={handlePreviousStep}
                onNext={handleNextStep}
                disablePrevious={currentStep === 0}
                disableNext={currentStep === steps.length - 1}
              />
            </div>

            {/* Example 3: Upload simulation */}
            <div>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Simulation d'upload de documents:
              </p>
              <ProgressBarWithControls
                label="Téléchargement"
                progress={85}
                onPrevious={undefined}
                onNext={undefined}
                disablePrevious={true}
                disableNext={true}
              />
            </div>
          </div>
        </section>

        {/* Section 3: Use cases */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Cas d'usage dans RealAgent
          </h2>
          <div
            className="p-[32px] rounded-[16px] space-y-[32px]"
            style={{ backgroundColor: "var(--surface-neutral-action)" }}
          >
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Profil client - Complétion des informations
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Mesure du pourcentage de champs remplis dans une fiche client
              </p>
              <ProgressBarWithControls
                label="Profil client"
                progress={45}
                disablePrevious={true}
                disableNext={true}
              />
            </div>

            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Dossier de vente - Avancement
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Suivi de l'avancement d'un dossier de transaction immobilière
              </p>
              <ProgressBarWithControls
                label="Avancement dossier"
                progress={72}
                disablePrevious={true}
                disableNext={true}
              />
            </div>

            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Import de données
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Progression de l'import d'un fichier CSV de contacts
              </p>
              <ProgressBarWithControls
                label="Import en cours"
                progress={93}
                disablePrevious={true}
                disableNext={true}
              />
            </div>
          </div>
        </section>

        {/* Footer info */}
        <div
          className="p-[24px] rounded-[12px] border"
          style={{
            backgroundColor: "var(--surface-neutral-action)",
            borderColor: "var(--neutral-200)",
          }}
        >
          <h3
            className="text-[16px] font-semibold mb-[12px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            📝 Notes techniques
          </h3>
          <ul
            className="space-y-[8px] text-[14px] leading-[20px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            <li>
              • <strong>ProgressBar</strong>: Hauteur 20px, border-radius 20px,
              couleur #0da500 (vert)
            </li>
            <li>
              • Progression dynamique de 0% à 100% avec transition smooth (300ms)
            </li>
            <li>
              • Background: #ecedee (light) / #22252b (dark)
            </li>
            <li>
              • <strong>ProgressBarWithControls</strong>: Barre + label + boutons
              navigation
            </li>
            <li>
              • Label: Body.sm.SemiBold 14/16px, gap 24px entre éléments
            </li>
            <li>
              • Boutons mini avec icônes Lucide ArrowLeft/ArrowRight
            </li>
            <li>• Support complet du light/dark mode avec ThemeProvider</li>
            <li>
              • Couleurs personnalisables via prop <code>color</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
