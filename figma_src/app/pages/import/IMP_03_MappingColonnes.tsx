import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarImport } from "../../components/organisms/AppBars";
import { Button } from "../../components/atoms/Button";
import { ProgressBarWithControls } from "../../components/organisms/ProgressBarWithControls";
import { ListItemImportSelect } from "../../components/molecules/ListItemImportSelect";
import { ListItemImportSuccess } from "../../components/molecules/ListItemImportSuccess";
import { ListItemImportError } from "../../components/molecules/ListItemImportError";
import { ThemeToggle } from "../../components/ThemeToggle";

/**
 * IMP-03 - Mapping des colonnes
 * 
 * Association des colonnes du fichier source avec les champs de la base de données.
 * Auto-mapping intelligent + possibilité de modifier manuellement.
 * 
 * Sections organisées par type de données :
 * - Informations de profil
 * - Informations de contact
 * - Informations professionnelles
 */

interface ColumnMapping {
  id: number;
  sourceColumn: string;
  targetField: string | null;
  status: "pending" | "success" | "error";
  errorMessage?: string;
  category: "profile" | "contact" | "professional";
}

export default function IMP_03_MappingColonnes() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const importType = searchParams.get("type") || "clients";

  // Mock des colonnes détectées dans le fichier, organisées par catégorie
  const [mappings, setMappings] = useState<ColumnMapping[]>([
    // Informations de profil
    { id: 1, sourceColumn: "nom", targetField: "Nom", status: "success", category: "profile" },
    { id: 2, sourceColumn: "prenom", targetField: "Prénom", status: "success", category: "profile" },
    { id: 3, sourceColumn: "date_naiss", targetField: "Date de naissance", status: "error", errorMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", category: "profile" },
    
    // Informations de contact
    { id: 4, sourceColumn: "email", targetField: "Email", status: "success", category: "contact" },
    { id: 5, sourceColumn: "tel", targetField: "Téléphone", status: "success", category: "contact" },
    { id: 6, sourceColumn: "ville", targetField: "Ville", status: "success", category: "contact" },
    { id: 7, sourceColumn: "code_postal", targetField: null, status: "pending", category: "contact" },
    
    // Informations professionnelles
    { id: 8, sourceColumn: "statut_client", targetField: null, status: "pending", category: "professional" },
    { id: 9, sourceColumn: "entreprise", targetField: "Entreprise", status: "success", category: "professional" },
  ]);

  const handleSelectTarget = (columnId: number) => {
    // Dans une vraie app, ouvrir une modale pour sélectionner le champ cible
    // Pour la démo, mapper automatiquement
    setTimeout(() => {
      setMappings((prev) =>
        prev.map((m) =>
          m.id === columnId
            ? { ...m, targetField: "Code postal", status: "success" as const }
            : m
        )
      );
    }, 500);
  };

  const handleRemap = (columnId: number) => {
    setMappings((prev) =>
      prev.map((m) =>
        m.id === columnId
          ? { ...m, targetField: null, status: "pending" as const, errorMessage: undefined }
          : m
      )
    );
  };

  const handleNext = () => {
    navigate(`/IMP_04_Previsualisation?type=${importType}`);
  };

  const handleBack = () => {
    navigate(`/IMP_02_UploadFichier?type=${importType}`);
  };

  // Calculer la progression
  const totalMappings = mappings.length;
  const completedMappings = mappings.filter((m) => m.status === "success").length;
  const progressPercentage = Math.round((completedMappings / totalMappings) * 100);

  // Grouper par catégorie
  const profileMappings = mappings.filter((m) => m.category === "profile");
  const contactMappings = mappings.filter((m) => m.category === "contact");
  const professionalMappings = mappings.filter((m) => m.category === "professional");

  // Fonction pour afficher un mapping selon son statut
  const renderMapping = (mapping: ColumnMapping) => {
    if (mapping.status === "success") {
      return (
        <ListItemImportSuccess
          key={mapping.id}
          sourceTableName={mapping.sourceColumn}
          targetTableName={mapping.targetField || ""}
          onRemap={() => handleRemap(mapping.id)}
        />
      );
    }
    
    if (mapping.status === "error") {
      return (
        <ListItemImportError
          key={mapping.id}
          sourceTableName={mapping.sourceColumn}
          targetTableName={mapping.targetField || "Non mappé"}
          errorMessage={mapping.errorMessage || "Erreur inconnue"}
          onRemap={() => handleRemap(mapping.id)}
        />
      );
    }
    
    return (
      <ListItemImportSelect
        key={mapping.id}
        tableName={mapping.sourceColumn}
        onSelect={() => handleSelectTarget(mapping.id)}
      />
    );
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="database" />

      <div className="flex-1 flex flex-col">
        <AppBarImport
          title="Import d'une base de données"
          currentFileName="clients_export.csv"
          onBack={handleBack}
          actions={<ThemeToggle variant="icon" />}
        />

        {/* Progress Bar Header */}
        <div
          className="px-8 py-4"
          style={{
            backgroundColor: "var(--surface-page)",
          }}
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                Complétion du mapping
              </span>
              <span className="text-sm font-semibold" style={{ color: "var(--text-strong)" }}>
                {completedMappings} / {totalMappings} colonnes mappées
              </span>
            </div>
            <ProgressBarWithControls
              label="Étape 3/6"
              progress={progressPercentage}
              onPrevious={handleBack}
              onNext={completedMappings === totalMappings ? handleNext : undefined}
              disableNext={completedMappings !== totalMappings}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-8 py-8">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--neutral-400)" }}>
              Associer les colonnes
            </h1>
            <p className="text-base mb-6" style={{ color: "var(--text-body)" }}>
              Faites correspondre les colonnes de votre fichier avec les champs RealAgent.
            </p>

            {/* Mappings Lists */}
            <div className="space-y-8">
              {/* Section Informations de profil */}
              {profileMappings.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Informations de profil
                  </h2>
                  <div className="overflow-hidden">
                    {profileMappings.map((mapping) => renderMapping(mapping))}
                  </div>
                </div>
              )}

              {/* Section Informations de contact */}
              {contactMappings.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Informations de contact
                  </h2>
                  <div className="overflow-hidden">
                    {contactMappings.map((mapping) => renderMapping(mapping))}
                  </div>
                </div>
              )}

              {/* Section Informations professionnelles */}
              {professionalMappings.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Informations professionnelles
                  </h2>
                  <div className="overflow-hidden">
                    {professionalMappings.map((mapping) => renderMapping(mapping))}
                  </div>
                </div>
              )}
            </div>

            {/* Info message */}
            <div
              className="mt-6 p-4 rounded-lg border"
              style={{
                backgroundColor: "var(--surface-branded-subtle)",
                borderColor: "var(--border-branded-default)",
              }}
            >
              <div className="text-sm" style={{ color: "var(--text-branded-strong)" }}>
                💡 <strong>Conseil :</strong> Mappez toutes les colonnes importantes pour garantir
                une importation complète de vos données.
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center justify-between">
              <Button variant="ghost" size="large" onClick={handleBack}>
                Précédent
              </Button>
              <Button variant="filled" size="large" onClick={handleNext}>
                Continuer vers la prévisualisation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}