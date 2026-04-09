import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Switch } from "../../components/atoms/Switch";
import { Stepper } from "../../components/molecules/Stepper";

/**
 * LOG-03 - Inscription étape 2 : Agence
 * 
 * Collecte des informations de l'agence.
 * Option de skip si agent indépendant.
 */
export default function RegisterStep2() {
  const navigate = useNavigate();
  
  const [isIndependent, setIsIndependent] = useState(false);
  const [formData, setFormData] = useState({
    agencyName: "",
    siret: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
  });

  const handleNext = () => {
    console.log("Step 2 data:", { isIndependent, formData });
    navigate("/register-step3");
  };

  const handleBack = () => {
    navigate("/register-step1");
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[600px]"
      >
        {/* Stepper */}
        <div style={{ marginBottom: "var(--scale-800)" }}>
          <Stepper
            steps={["Identité", "Agence", "Profil", "Confirmation"]}
            currentStep={1}
            completedSteps={[0]}
            variant="minimal"
          />
        </div>

        {/* Heading */}
        <h4
          className="mb-8"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--lh-h4)",
          }}
        >
          Informations de l'agence
        </h4>

        {/* Independent agent toggle */}
        <div
          style={{
            marginBottom: "var(--scale-600)",
            padding: "var(--scale-400)",
            borderRadius: "var(--border-radius-200)",
            backgroundColor: "var(--surface-neutral-action)",
          }}
        >
          <Switch
            checked={isIndependent}
            onChange={setIsIndependent}
            label="Je suis agent indépendant"
          />
        </div>

        {/* Form - disabled if independent */}
        <div
          className="grid grid-cols-2 gap-4 mb-8"
          style={{ opacity: isIndependent ? 0.5 : 1 }}
        >
          <div className="col-span-2">
            <TextField
              placeholder="Nom de l'agence"
              value={formData.agencyName}
              onChange={(e) => updateField("agencyName", e.target.value)}
              disabled={isIndependent}
            />
          </div>
          <TextField
            placeholder="SIRET"
            value={formData.siret}
            onChange={(e) => updateField("siret", e.target.value)}
            disabled={isIndependent}
          />
          <TextField
            type="tel"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            disabled={isIndependent}
          />
          <div className="col-span-2">
            <TextField
              placeholder="Adresse"
              value={formData.address}
              onChange={(e) => updateField("address", e.target.value)}
              disabled={isIndependent}
            />
          </div>
          <TextField
            placeholder="Ville"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            disabled={isIndependent}
          />
          <TextField
            placeholder="Code postal"
            value={formData.zipCode}
            onChange={(e) => updateField("zipCode", e.target.value)}
            disabled={isIndependent}
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
          >
            Suivant →
          </Button>
        </div>
      </Card>
    </div>
  );
}