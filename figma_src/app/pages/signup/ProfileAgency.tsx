import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Stepper } from "../../components/molecules/Stepper";

/**
 * SUP-05B - Profil admin + Organisation (B/C)
 * 
 * Pour les agences : informations personnelles + organisation
 * - Nom, prénom, téléphone
 * - Nom de l'agence, SIRET, adresse
 */
export default function SUP_05B_ProfileAgency() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Personal info
    firstName: "",
    lastName: "",
    phone: "",
    // Agency info
    agencyName: "",
    siret: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // TODO: Validation
    console.log("Profile agency data:", formData);
    navigate("/SUP_06_TeamInvitation");
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.phone &&
      formData.agencyName &&
      formData.siret &&
      formData.address &&
      formData.city &&
      formData.postalCode
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
        className="w-full max-w-[600px]"
      >
        {/* Stepper */}
        <div style={{ marginBottom: "var(--scale-800)" }}>
          <Stepper
            steps={["Compte", "Profil", "Équipe", "Confirmation"]}
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
          Complétez votre profil et votre agence
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
          Informations personnelles et coordonnées de votre agence
        </p>

        {/* Personal Information Section */}
        <div className="mb-8">
          <h5
            className="mb-4"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h5)",
              lineHeight: "var(--lh-h5)",
            }}
          >
            Informations personnelles
          </h5>

          <div className="space-y-4">
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
                  placeholder="Marie"
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
                  placeholder="Martin"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </div>
            </div>

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
                placeholder="01 23 45 67 89"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8"
          style={{
            height: "var(--border-width-25)",
            backgroundColor: "var(--neutral-100)",
          }}
        />

        {/* Agency Information Section */}
        <div className="mb-8">
          <h5
            className="mb-4"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h5)",
              lineHeight: "var(--lh-h5)",
            }}
          >
            Informations de l'agence
          </h5>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="agencyName"
                  style={{
                    display: "block",
                    marginBottom: "var(--scale-100)",
                    color: "var(--text-caption)",
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--lh-sm)",
                  }}
                >
                  Nom de l'agence *
                </label>
                <TextField
                  id="agencyName"
                  placeholder="Immobilier Premium"
                  value={formData.agencyName}
                  onChange={(e) => updateField("agencyName", e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="siret"
                  style={{
                    display: "block",
                    marginBottom: "var(--scale-100)",
                    color: "var(--text-caption)",
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--lh-sm)",
                  }}
                >
                  SIRET *
                </label>
                <TextField
                  id="siret"
                  placeholder="123 456 789 00012"
                  value={formData.siret}
                  onChange={(e) => updateField("siret", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                style={{
                  display: "block",
                  marginBottom: "var(--scale-100)",
                  color: "var(--text-caption)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                }}
              >
                Adresse *
              </label>
              <TextField
                id="address"
                placeholder="12 rue de la Paix"
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label
                  htmlFor="city"
                  style={{
                    display: "block",
                    marginBottom: "var(--scale-100)",
                    color: "var(--text-caption)",
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--lh-sm)",
                  }}
                >
                  Ville *
                </label>
                <TextField
                  id="city"
                  placeholder="Paris"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  style={{
                    display: "block",
                    marginBottom: "var(--scale-100)",
                    color: "var(--text-caption)",
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--lh-sm)",
                  }}
                >
                  Code postal *
                </label>
                <TextField
                  id="postalCode"
                  placeholder="75001"
                  value={formData.postalCode}
                  onChange={(e) => updateField("postalCode", e.target.value)}
                />
              </div>
            </div>
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
            Ces informations seront utilisées pour vos documents officiels et votre site web d'agence
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