import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { ProgressBarWithControls } from "../../components/organisms/ProgressBarWithControls";
import { InputField } from "../../components/molecules/InputField";
import { SelectField } from "../../components/molecules/SelectField";
import { CollapsibleSection } from "../../components/molecules/CollapsibleSection";
import { CompletionGauge } from "../../components/atoms/CompletionGauge";
import { Button } from "../../components/atoms/Button";
import { Badge } from "../../components/atoms/Badge";

/**
 * OBS-01 - Profil professionnel
 * 
 * Formulaire de profil professionnel avec sections :
 * - Identité
 * - Contact
 * - Métier
 * - Réseau
 * 
 * Inclut une jauge de complétion.
 */
export default function OBS_01_ProfilProfessionnel() {
  const navigate = useNavigate();

  // États du formulaire
  const [formData, setFormData] = useState({
    // Identité
    prenom: "Sophie",
    nom: "Martin",
    civilite: "Mme",
    // Contact
    telephone: "+33 6 12 34 56 78",
    email: "sophie.martin@example.com",
    // Métier
    fonction: "Agent immobilier",
    carteProT: "CPI 7501 2023 000 000 001",
    carteProG: "",
    // Réseau
    reseau: "",
    codeAgence: "",
  });

  // Calculer le pourcentage de complétion
  const calculateCompletion = () => {
    const fields = Object.values(formData);
    const filled = fields.filter((value) => value && value.trim() !== "").length;
    return Math.round((filled / fields.length) * 100);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    navigate("/OBS_02_Organisation");
  };

  const handlePrevious = () => {
    navigate("/OBS_00_StepperSetup");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      {/* Navigation Rail */}
      <NavRail activeSection="dashboard" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Progress Bar with Controls */}
        <div className="flex justify-center pt-6 pb-4" style={{ backgroundColor: "var(--surface-container)" }}>
          <ProgressBarWithControls
            label="Étape 1/4"
            progress={25}
            onPrevious={handlePrevious}
            onNext={handleNext}
            disablePrevious={false}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--text-strong)" }}
              >
                Votre profil professionnel
              </h1>
              <p
                className="text-base"
                style={{ color: "var(--text-body)" }}
              >
                Complétez votre profil pour personnaliser votre expérience RealAgent.
              </p>
            </div>

            {/* Completion Gauge */}
            <div className="mb-8">
              <CompletionGauge
                percentage={calculateCompletion()}
                label="Profil complété"
                size="medium"
              />
            </div>

            {/* Form Sections */}
            <div className="space-y-8">
              {/* Section Identité */}
              <CollapsibleSection 
                title={
                  <div className="flex items-center gap-2">
                    <span>Identité</span>
                    <Badge variant="information" label="3/3" />
                  </div>
                }
                defaultExpanded={true}
              >
                <div className="space-y-6">
                  <div className="max-w-[390px]">
                    <SelectField
                      label="Civilité"
                      value={formData.civilite}
                      onChange={(value) => handleChange("civilite", value)}
                      options={[
                        { value: "Mme", label: "Mme" },
                        { value: "M.", label: "M." },
                        { value: "Autre", label: "Autre" },
                      ]}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="max-w-[390px]">
                      <InputField
                        label="Prénom"
                        value={formData.prenom}
                        onChange={(value) => handleChange("prenom", value)}
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div className="max-w-[390px]">
                      <InputField
                        label="Nom"
                        value={formData.nom}
                        onChange={(value) => handleChange("nom", value)}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Section Contact */}
              <CollapsibleSection 
                title={
                  <div className="flex items-center gap-2">
                    <span>Contact</span>
                    <Badge variant="information" label="2/2" />
                  </div>
                }
                defaultExpanded={true}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="max-w-[390px]">
                    <InputField
                      label="Téléphone"
                      value={formData.telephone}
                      onChange={(value) => handleChange("telephone", value)}
                      placeholder="+33 6 12 34 56 78"
                      required
                    />
                  </div>
                  <div className="max-w-[390px]">
                    <InputField
                      label="Email professionnel"
                      value={formData.email}
                      onChange={(value) => handleChange("email", value)}
                      placeholder="votre.email@agence.fr"
                      required
                    />
                  </div>
                </div>
              </CollapsibleSection>

              {/* Section Métier */}
              <CollapsibleSection 
                title={
                  <div className="flex items-center gap-2">
                    <span>Métier</span>
                    <Badge variant="information" label="2/3" />
                  </div>
                }
                defaultExpanded={true}
              >
                <div className="space-y-6">
                  <div className="max-w-[390px]">
                    <InputField
                      label="Fonction"
                      value={formData.fonction}
                      onChange={(value) => handleChange("fonction", value)}
                      placeholder="Agent immobilier / Négociateur / Directeur..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="max-w-[390px]">
                      <InputField
                        label="Carte professionnelle Transaction (Carte T)"
                        value={formData.carteProT}
                        onChange={(value) => handleChange("carteProT", value)}
                        placeholder="CPI 7501 2023 000 000 001"
                        helperText="Format: CPI + numéro à 18 chiffres"
                      />
                    </div>
                    <div className="max-w-[390px]">
                      <InputField
                        label="Carte professionnelle Gestion (Carte G)"
                        value={formData.carteProG}
                        onChange={(value) => handleChange("carteProG", value)}
                        placeholder="CPI 7501 2023 000 000 002"
                        helperText="Optionnel"
                      />
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Section Réseau */}
              <CollapsibleSection 
                title={
                  <div className="flex items-center gap-2">
                    <span>Réseau</span>
                    <Badge variant="information" label="0/2" />
                  </div>
                }
                defaultExpanded={false}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="max-w-[390px]">
                    <InputField
                      label="Nom du réseau"
                      value={formData.reseau}
                      onChange={(value) => handleChange("reseau", value)}
                      placeholder="Century 21, Orpi, ERA..."
                    />
                  </div>
                  <div className="max-w-[390px]">
                    <InputField
                      label="Code agence"
                      value={formData.codeAgence}
                      onChange={(value) => handleChange("codeAgence", value)}
                      placeholder="Code interne"
                    />
                  </div>
                </div>
              </CollapsibleSection>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center justify-end">
              <Button variant="text" size="large" onClick={() => navigate("/dashboard")}>
                Passer cette étape
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}