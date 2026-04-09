import { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/atoms/Card";
import { Button } from "../components/atoms/Button";
import { Stepper } from "../components/molecules/Stepper";
import { ThemeToggle } from "../components/ThemeToggle";

/**
 * StepperDemo - Démo des variantes du composant Stepper
 * 
 * Compare les versions default et minimal
 */
export default function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Identité", "Agence", "Profil", "Confirmation"];

  const completedSteps = Array.from({ length: currentStep }, (_, i) => i);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Stepper Demo</h1>
            <p className="text-lg" style={{ color: "var(--text-caption)" }}>
              Indicateur de progression multi-étapes avec 2 variantes
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Interactive controls */}
        <Card radius="scale400" padding="32px">
          <CardHeader
            title="Contrôles"
            subtitle="Naviguez entre les étapes pour tester les variantes"
          />
          <CardContent>
            <div className="flex gap-4 items-center justify-center">
              <Button
                variant="outlined"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                ← Précédent
              </Button>
              <span
                className="px-4 py-2 rounded-lg"
                style={{
                  background: "var(--surface-neutral-action)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-base)",
                  color: "var(--text-body)",
                }}
              >
                Étape {currentStep + 1} / {steps.length}
              </span>
              <Button
                variant="outlined"
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
              >
                Suivant →
              </Button>
              <Button variant="ghost" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Variante Default */}
        <Card radius="scale400" padding="32px">
          <CardHeader
            title="Variante Default"
            subtitle="Avec numéros, labels et lignes connectrices"
          />
          <CardContent>
            <div className="p-8 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <Stepper
                steps={steps}
                currentStep={currentStep}
                completedSteps={completedSteps}
                variant="default"
              />
            </div>

            <div className="mt-6 space-y-2">
              <h3 className="font-semibold" style={{ color: "var(--text-body)" }}>
                Caractéristiques :
              </h3>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-caption)" }}>
                <li>✓ Cercles 32px avec numéros ou checkmarks</li>
                <li>✓ Labels textuels sous chaque étape</li>
                <li>✓ Lignes connectrices entre les étapes</li>
                <li>✓ États visuels : completed (check), active (bold), future (neutral)</li>
                <li>✓ Adapté pour formulaires détaillés</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Variante Minimal */}
        <Card radius="scale400" padding="32px">
          <CardHeader
            title="Variante Minimal"
            subtitle="Petits points discrets sans texte ni chiffres"
          />
          <CardContent>
            <div className="p-8 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <Stepper
                steps={steps}
                currentStep={currentStep}
                completedSteps={completedSteps}
                variant="minimal"
              />
            </div>

            <div className="mt-6 space-y-2">
              <h3 className="font-semibold" style={{ color: "var(--text-body)" }}>
                Caractéristiques :
              </h3>
              <ul className="space-y-1 text-sm" style={{ color: "var(--text-caption)" }}>
                <li>✓ Petits points de 8px de hauteur</li>
                <li>✓ Point actif élargi à 24px pour plus de visibilité</li>
                <li>✓ Pas de labels, pas de numéros</li>
                <li>✓ Espacement réduit (gap-2)</li>
                <li>✓ Discret et minimaliste</li>
                <li>✓ Idéal pour économiser de l'espace vertical</li>
                <li>
                  💡 <strong>Utilisé dans P01</strong> - parcours création de compte
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Comparaison côte à côte */}
        <Card radius="scale400" padding="32px">
          <CardHeader
            title="Comparaison côte à côte"
            subtitle="Même état, deux visuels différents"
          />
          <CardContent>
            <div className="space-y-6">
              {/* Default */}
              <div>
                <p
                  className="mb-3 font-semibold text-sm"
                  style={{ color: "var(--text-caption)" }}
                >
                  Default
                </p>
                <div className="p-6 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                  <Stepper
                    steps={steps}
                    currentStep={currentStep}
                    completedSteps={completedSteps}
                    variant="default"
                  />
                </div>
              </div>

              {/* Minimal */}
              <div>
                <p
                  className="mb-3 font-semibold text-sm"
                  style={{ color: "var(--text-caption)" }}
                >
                  Minimal
                </p>
                <div className="p-6 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                  <Stepper
                    steps={steps}
                    currentStep={currentStep}
                    completedSteps={completedSteps}
                    variant="minimal"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage code */}
        <Card radius="scale400" padding="32px">
          <CardHeader title="Usage" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p
                  className="mb-2 font-semibold"
                  style={{ color: "var(--text-body)" }}
                >
                  Variante Default
                </p>
                <pre
                  className="p-4 rounded-lg overflow-x-auto"
                  style={{
                    background: "var(--neutral-900)",
                    color: "var(--neutral-50)",
                    fontSize: "var(--text-sm)",
                    fontFamily: "monospace",
                  }}
                >
{`<Stepper
  steps={["Identité", "Agence", "Profil", "Confirmation"]}
  currentStep={1}
  completedSteps={[0]}
  variant="default" // Ou omettez (default par défaut)
/>`}
                </pre>
              </div>

              <div>
                <p
                  className="mb-2 font-semibold"
                  style={{ color: "var(--text-body)" }}
                >
                  Variante Minimal
                </p>
                <pre
                  className="p-4 rounded-lg overflow-x-auto"
                  style={{
                    background: "var(--neutral-900)",
                    color: "var(--neutral-50)",
                    fontSize: "var(--text-sm)",
                    fontFamily: "monospace",
                  }}
                >
{`<Stepper
  steps={["Identité", "Agence", "Profil", "Confirmation"]}
  currentStep={1}
  completedSteps={[0]}
  variant="minimal" // Version discrète
/>`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Design tokens */}
        <Card radius="scale400" padding="32px">
          <CardHeader
            title="Design Tokens"
            subtitle="Tous les styles utilisent les tokens CSS"
          />
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  Couleurs
                </h3>
                <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>Active/Completed: --surface-branded-default</li>
                  <li>Future: --neutral-200</li>
                  <li>Text active: --text-branded-on-action</li>
                  <li>Text label: --text-body / --text-placeholder</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  Spacing
                </h3>
                <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>Default circle: 32px</li>
                  <li>Minimal dot: 8px height</li>
                  <li>Minimal active: 24px width</li>
                  <li>Gap minimal: gap-2 (8px)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
