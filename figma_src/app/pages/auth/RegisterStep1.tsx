import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Stepper } from "../../components/molecules/Stepper";

/**
 * LOG-02 - Inscription étape 1 : Identité
 * 
 * Collecte des informations personnelles de l'agent.
 */
export default function RegisterStep1() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => {
    // TODO: Validation
    console.log("Step 1 data:", formData);
    navigate("/register-step2");
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
            currentStep={0}
            completedSteps={[]}
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
          Créez votre compte
        </h4>

        {/* Form grid 2 columns */}
        <div
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <TextField
            placeholder="Prénom"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
          />
          <TextField
            placeholder="Nom"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
          />
          <TextField
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
          <TextField
            type="tel"
            placeholder="Téléphone"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
          />
        </div>

        {/* Next button */}
        <Button
          variant="branded"
          fullWidth
          onClick={handleNext}
          className="mb-6"
        >
          Suivant →
        </Button>

        {/* Login link */}
        <p className="text-center">
          <span
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            Déjà un compte ?{" "}
          </span>
          <Link
            to="/login"
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Se connecter
          </Link>
        </p>
      </Card>
    </div>
  );
}