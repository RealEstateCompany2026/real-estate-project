import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Stepper } from "../../components/molecules/Stepper";

/**
 * SUP-05A - Profil agent (A/D)
 * 
 * Profil simplifié pour agent solo :
 * - Nom, prénom, téléphone professionnel
 * - Carte professionnelle (T)
 */
export default function SUP_05A_ProfileSolo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    professionalCardNumber: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // TODO: Validation
    console.log("Profile solo data:", formData);
    navigate("/SUP_07_Confirmation");
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.phone &&
      formData.professionalCardNumber
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[480px]"
      >
        {/* Stepper */}
        <div style={{ marginBottom: "var(--scale-800)" }}>
          <Stepper
            steps={["Compte", "Profil", "Confirmation"]}
            currentStep={1}
            completedSteps={[0]}
            variant="minimal"
          />
        </div>

        {/* Heading */}
        <h4
          className="mb-3"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--lh-h4)",
          }}
        >
          Complétez votre profil
        </h4>

        <p
          className="mb-8"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
          }}
        >
          Quelques informations pour personnaliser votre compte
        </p>

        {/* Form */}
        <div className="space-y-4 mb-8">
          {/* Name fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                style={{
                  display: "block",
                  marginBottom: "var(--scale-100)",
                  color: "var(--text-caption)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                }}
              >
                Prénom *
              </label>
              <TextField
                id="firstName"
                placeholder="Jean"
                value={formData.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                style={{
                  display: "block",
                  marginBottom: "var(--scale-100)",
                  color: "var(--text-caption)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                }}
              >
                Nom *
              </label>
              <TextField
                id="lastName"
                placeholder="Dupont"
                value={formData.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                marginBottom: "var(--scale-100)",
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Téléphone professionnel *
            </label>
            <TextField
              id="phone"
              type="tel"
              placeholder="06 12 34 56 78"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          {/* Professional card number */}
          <div>
            <label
              htmlFor="professionalCardNumber"
              style={{
                display: "block",
                marginBottom: "var(--scale-100)",
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Numéro de carte professionnelle (T) *
            </label>
            <TextField
              id="professionalCardNumber"
              placeholder="CPI XXXX XXXX XXXX XXXX"
              value={formData.professionalCardNumber}
              onChange={(e) =>
                updateField("professionalCardNumber", e.target.value)
              }
            />
            <p
              className="mt-2"
              style={{
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-xs)",
                lineHeight: "var(--lh-xs)",
              }}
            >
              Votre carte professionnelle délivrée par la CCI
            </p>
          </div>
        </div>

        {/* Info box */}
        <div
          className="p-4 rounded-lg mb-8"
          style={{
            backgroundColor: "var(--info-light)",
            border: "var(--border-width-50) solid var(--info-default)",
          }}
        >
          <p
            style={{
              color: "var(--info-default)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            Ces informations apparaîtront sur vos documents et annonces officielles
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outlined"
            onClick={() => navigate("/signup/persona")}
            className="flex-1"
          >
            ← Retour
          </Button>

          <Button
            variant="branded"
            onClick={handleNext}
            disabled={!isFormValid()}
            className="flex-1"
          >
            Continuer →
          </Button>
        </div>

        {/* Footer */}
        <p
          className="text-center mt-8"
          style={{
            color: "var(--neutral-300)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--lh-xs)",
          }}
        >
          © 2026 RealAgent
        </p>
      </Card>
    </div>
  );
}