import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Stepper } from "../../components/molecules/Stepper";
import { User, Building2, Users, Key } from "lucide-react";

/**
 * LOG-04 - Inscription étape 3 : Profil agent
 * 
 * Sélection du persona et informations professionnelles.
 */

type Persona = "A" | "B" | "C" | "D" | null;

const personas = [
  {
    id: "A" as Persona,
    icon: User,
    title: "Agent indépendant",
    description: "Je travaille seul et gère mon portefeuille client",
  },
  {
    id: "B" as Persona,
    icon: Building2,
    title: "Directeur d'agence",
    description: "Je dirige une agence et manage une équipe d'agents",
  },
  {
    id: "C" as Persona,
    icon: Users,
    title: "Agent en agence",
    description: "Je fais partie d'une équipe au sein d'une agence",
  },
  {
    id: "D" as Persona,
    icon: Key,
    title: "Gestionnaire locatif",
    description: "Je me spécialise dans la gestion de biens locatifs",
  },
];

export default function RegisterStep3() {
  const navigate = useNavigate();
  
  const [selectedPersona, setSelectedPersona] = useState<Persona>(null);
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  const handleNext = () => {
    console.log("Step 3 data:", { selectedPersona, yearsOfExperience });
    navigate("/register-step4");
  };

  const handleBack = () => {
    navigate("/register-step2");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[700px]"
      >
        {/* Stepper */}
        <div style={{ marginBottom: "var(--scale-800)" }}>
          <Stepper
            steps={["Identité", "Agence", "Profil", "Confirmation"]}
            currentStep={2}
            completedSteps={[0, 1]}
            variant="minimal"
          />
        </div>

        {/* Heading */}
        <h5
          className="mb-8"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h5)",
            lineHeight: "var(--lh-h5)",
          }}
        >
          Quel est votre profil ?
        </h5>

        {/* Persona cards - 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {personas.map((persona) => {
            const Icon = persona.icon;
            const isSelected = selectedPersona === persona.id;

            return (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(persona.id)}
                className="text-left transition-all duration-200"
                style={{
                  padding: "var(--scale-500)",
                  borderRadius: "var(--border-radius-400)",
                  backgroundColor: isSelected
                    ? "var(--branded-50)"
                    : "var(--surface-neutral-default)",
                  border: `var(--border-width-50) solid ${
                    isSelected ? "var(--branded-500)" : "var(--neutral-50)"
                  }`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      backgroundColor: isSelected
                        ? "var(--surface-branded-default)"
                        : "var(--surface-neutral-action)",
                    }}
                  >
                    <Icon
                      size={24}
                      style={{
                        color: isSelected
                          ? "var(--text-branded-on-action)"
                          : "var(--icon-neutral-default)",
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h6
                      className="mb-1"
                      style={{
                        color: "var(--text-headings)",
                        fontFamily: "var(--font-family)",
                        fontSize: "var(--text-h6)",
                        lineHeight: "var(--lh-h6)",
                      }}
                    >
                      {persona.title}
                    </h6>
                    <p
                      style={{
                        color: "var(--text-caption)",
                        fontFamily: "var(--font-family)",
                        fontSize: "var(--text-sm)",
                        lineHeight: "var(--lh-sm)",
                      }}
                    >
                      {persona.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Additional fields */}
        <div className="mb-8">
          <label
            style={{
              display: "block",
              marginBottom: "var(--scale-200)",
              color: "var(--text-body)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            Années d'expérience
          </label>
          <TextField
            type="number"
            placeholder="Ex: 5"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outlined"
            onClick={handleBack}
            className="flex-1"
          >
            ← Retour
          </Button>
          <Button
            variant="branded"
            onClick={handleNext}
            className="flex-1"
            disabled={!selectedPersona}
          >
            Suivant →
          </Button>
        </div>
      </Card>
    </div>
  );
}