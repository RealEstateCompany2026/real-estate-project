import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { ProgressBarWithControls } from "../../components/organisms/ProgressBarWithControls";
import { CollapsibleSection } from "../../components/molecules/CollapsibleSection";
import { InputField } from "../../components/molecules/InputField";
import { Button } from "../../components/atoms/Button";
import { Badge } from "../../components/atoms/Badge";
import { Upload } from "lucide-react";

/**
 * OBS-02 - Organisation
 * 
 * Formulaire d'organisation (agence) :
 * - Identité agence
 * - Informations légales (SIRET, carte T/G)
 * - Logo
 * - Réseau (pré-rempli si applicable)
 */
export default function OBS_02_Organisation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomAgence: "Agence Martin Immobilier",
    emailAgence: "contact@martin-immobilier.fr",
    telephoneAgence: "+33 1 23 45 67 89",
    adresse: "12 Avenue des Champs-Élysées",
    codePostal: "75008",
    ville: "Paris",
    siret: "123 456 789 00012",
    carteT: "CPI 7501 2023 000 000 001",
    carteG: "",
    logo: null as File | null,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    navigate("/OBS_03_Documents");
  };

  const handlePrevious = () => {
    navigate("/OBS_01_ProfilProfessionnel");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="dashboard" />

      <div className="flex-1 flex flex-col">
        {/* Progress Bar with Controls */}
        <div className="flex justify-center pt-6 pb-4" style={{ backgroundColor: "var(--surface-container)" }}>
          <ProgressBarWithControls
            label="Étape 2/4"
            progress={50}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-strong)" }}>
                Votre organisation
              </h1>
              <p className="text-base" style={{ color: "var(--text-body)" }}>
                Renseignez les informations de votre agence immobilière.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section Identité agence */}
              <CollapsibleSection 
                title={
                  <div className="flex items-center gap-2">
                    <span>Identité de l'agence</span>
                    <Badge variant="information" label="5/5" />
                  </div>
                }
                defaultExpanded={true}
              >
                <div className="space-y-6">
                  <InputField
                    label="Nom de l'agence"
                    value={formData.nomAgence}
                    onChange={(value) => handleChange("nomAgence", value)}
                    required
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <InputField
                      label="Email de l'agence"
                      value={formData.emailAgence}
                      onChange={(value) => handleChange("emailAgence", value)}
                      required
                    />
                    <InputField
                      label="Téléphone"
                      value={formData.telephoneAgence}
                      onChange={(value) => handleChange("telephoneAgence", value)}
                      required
                    />
                  </div>
                  <InputField
                    label="Adresse"
                    value={formData.adresse}
                    onChange={(value) => handleChange("adresse", value)}
                    required
                  />
                  <div className="grid grid-cols-3 gap-6">
                    <InputField
                      label="Code postal"
                      value={formData.codePostal}
                      onChange={(value) => handleChange("codePostal", value)}
                      required
                    />
                    <div className="col-span-2">
                      <InputField
                        label="Ville"
                        value={formData.ville}
                        onChange={(value) => handleChange("ville", value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </CollapsibleSection>

              {/* Section Informations légales */}
              <CollapsibleSection 
                title={
                  <div className="flex items-center gap-2">
                    <span>Informations légales</span>
                    <Badge variant="information" label="2/3" />
                  </div>
                }
                defaultExpanded={true}
              >
                <div className="space-y-6">
                  <InputField
                    label="SIRET"
                    value={formData.siret}
                    onChange={(value) => handleChange("siret", value)}
                    placeholder="123 456 789 00012"
                    helperText="14 chiffres"
                    required
                  />
                  <div className="grid grid-cols-2 gap-6">
                    <InputField
                      label="Carte professionnelle Transaction"
                      value={formData.carteT}
                      onChange={(value) => handleChange("carteT", value)}
                      required
                    />
                    <InputField
                      label="Carte professionnelle Gestion"
                      value={formData.carteG}
                      onChange={(value) => handleChange("carteG", value)}
                      helperText="Optionnel"
                    />
                  </div>
                </div>
              </CollapsibleSection>

              {/* Section Logo */}
              <CollapsibleSection 
                title={
                  <div className="flex items-center gap-2">
                    <span>Logo de l'agence</span>
                    <Badge variant="information" label="0/1" />
                  </div>
                }
                defaultExpanded={false}
              >
                <div
                  className="border-2 border-dashed rounded-lg p-8 text-center"
                  style={{
                    borderColor: "var(--border-subtle)",
                    backgroundColor: "var(--surface-neutral-subtle)",
                  }}
                >
                  <Upload size={32} style={{ color: "var(--icon-subtle)", margin: "0 auto 16px" }} />
                  <p className="text-sm mb-2" style={{ color: "var(--text-body)" }}>
                    Glissez-déposez votre logo ici
                  </p>
                  <p className="text-xs mb-4" style={{ color: "var(--text-subtle)" }}>
                    PNG, JPG ou SVG • Max 2 MB
                  </p>
                  <Button variant="outlined" size="small">
                    Parcourir les fichiers
                  </Button>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}