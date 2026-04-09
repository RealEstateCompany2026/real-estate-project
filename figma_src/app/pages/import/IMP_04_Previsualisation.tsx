import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarImport } from "../../components/organisms/AppBars";
import { Button } from "../../components/atoms/Button";
import { ListItemImportSuccess } from "../../components/molecules/ListItemImportSuccess";
import { ListItemImportError } from "../../components/molecules/ListItemImportError";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";

/**
 * IMP-04 - Prévisualisation
 * 
 * Résumé de l'import avant validation :
 * - Nombre de lignes valides
 * - Avertissements
 * - Erreurs
 * - Gestion des doublons
 * 
 * Organisation par catégories :
 * - Informations de profil
 * - Informations de contact
 * - Informations professionnelles
 */

interface ImportItem {
  id: number;
  sourceField: string;
  targetField: string;
  status: "success" | "warning" | "error";
  category: "profile" | "contact" | "professional";
  errorMessage?: string;
  sampleValue?: string;
}

export default function IMP_04_Previsualisation() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const importType = searchParams.get("type") || "clients";

  // Mock des données à importer organisées par catégorie
  const items: ImportItem[] = [
    // Informations de profil
    { id: 1, sourceField: "nom", targetField: "Nom", status: "success", category: "profile", sampleValue: "Martin" },
    { id: 2, sourceField: "prenom", targetField: "Prénom", status: "success", category: "profile", sampleValue: "Sophie" },
    { id: 3, sourceField: "date_naiss", targetField: "Date de naissance", status: "error", category: "profile", errorMessage: "Format de date invalide (ligne 45)", sampleValue: "32/13/1990" },
    
    // Informations de contact
    { id: 4, sourceField: "email", targetField: "Email", status: "success", category: "contact", sampleValue: "sophie.martin@email.fr" },
    { id: 5, sourceField: "tel", targetField: "Téléphone", status: "success", category: "contact", sampleValue: "+33 6 12 34 56 78" },
    { id: 6, sourceField: "ville", targetField: "Ville", status: "success", category: "contact", sampleValue: "Paris" },
    { id: 7, sourceField: "code_postal", targetField: "Code postal", status: "success", category: "contact", sampleValue: "75001" },
    
    // Informations professionnelles
    { id: 8, sourceField: "statut_client", targetField: "Statut client", status: "warning", category: "professional", errorMessage: "3 valeurs ne correspondent à aucun statut existant", sampleValue: "VIP" },
    { id: 9, sourceField: "entreprise", targetField: "Entreprise", status: "success", category: "professional", sampleValue: "ACME Corp" },
  ];

  const stats = {
    total: items.length,
    success: items.filter((i) => i.status === "success").length,
    warning: items.filter((i) => i.status === "warning").length,
    error: items.filter((i) => i.status === "error").length,
  };

  // Grouper par catégorie
  const profileItems = items.filter((i) => i.category === "profile");
  const contactItems = items.filter((i) => i.category === "contact");
  const professionalItems = items.filter((i) => i.category === "professional");

  const handleNext = () => {
    navigate(`/IMP_05_ImportEnCours?type=${importType}`);
  };

  const handleBack = () => {
    navigate(`/IMP_03_MappingColonnes?type=${importType}`);
  };

  const handleRemap = (itemId: number) => {
    console.log("Remap item", itemId);
    // Dans une vraie app, retourner au mapping pour corriger
  };

  // Fonction pour afficher un item selon son statut
  const renderItem = (item: ImportItem) => {
    if (item.status === "success") {
      return (
        <ListItemImportSuccess
          key={item.id}
          sourceTableName={item.sourceField}
          targetTableName={item.targetField}
        />
      );
    }
    
    // Pour warning et error, on utilise ListItemImportError
    return (
      <ListItemImportError
        key={item.id}
        sourceTableName={item.sourceField}
        targetTableName={item.targetField}
        errorMessage={item.errorMessage || "Erreur inconnue"}
        onRemap={() => handleRemap(item.id)}
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

        <div className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-8 py-8">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--neutral-400)" }}>
              Prévisualisation de l'import
            </h1>
            <p className="text-base mb-8" style={{ color: "var(--text-body)" }}>
              Vérifiez les données avant de lancer l'importation définitive.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {/* Total */}
              <div
                className="rounded-lg p-4"
                style={{
                  backgroundColor: "var(--surface-neutral-default)",
                  border: "1px solid var(--border-neutral-default)",
                }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--text-strong)" }}>
                  {stats.total}
                </div>
                <div className="text-sm" style={{ color: "var(--text-body)" }}>
                  Champs au total
                </div>
              </div>

              {/* Success */}
              <div
                className="rounded-lg p-4"
                style={{
                  backgroundColor: "var(--surface-success)",
                  border: "1px solid var(--border-success)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 size={20} style={{ color: "var(--icon-success)" }} />
                  <div className="text-2xl font-bold" style={{ color: "var(--text-success)" }}>
                    {stats.success}
                  </div>
                </div>
                <div className="text-sm" style={{ color: "var(--text-body)" }}>
                  Champs valides
                </div>
              </div>

              {/* Warning */}
              <div
                className="rounded-lg p-4"
                style={{
                  backgroundColor: "var(--surface-warning)",
                  border: "1px solid var(--border-warning)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle size={20} style={{ color: "var(--icon-warning)" }} />
                  <div className="text-2xl font-bold" style={{ color: "var(--text-warning)" }}>
                    {stats.warning}
                  </div>
                </div>
                <div className="text-sm" style={{ color: "var(--text-body)" }}>
                  Avertissements
                </div>
              </div>

              {/* Error */}
              <div
                className="rounded-lg p-4"
                style={{
                  backgroundColor: "var(--surface-error)",
                  border: "1px solid var(--border-error)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <XCircle size={20} style={{ color: "var(--icon-error)" }} />
                  <div className="text-2xl font-bold" style={{ color: "var(--text-error)" }}>
                    {stats.error}
                  </div>
                </div>
                <div className="text-sm" style={{ color: "var(--text-body)" }}>
                  Erreurs
                </div>
              </div>
            </div>

            {/* Items Lists by Category */}
            <div className="space-y-8 mb-8">
              {/* Section Informations de profil */}
              {profileItems.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Informations de profil
                  </h2>
                  <div className="overflow-hidden">
                    {profileItems.map((item) => renderItem(item))}
                  </div>
                </div>
              )}

              {/* Section Informations de contact */}
              {contactItems.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Informations de contact
                  </h2>
                  <div className="overflow-hidden">
                    {contactItems.map((item) => renderItem(item))}
                  </div>
                </div>
              )}

              {/* Section Informations professionnelles */}
              {professionalItems.length > 0 && (
                <div>
                  <h2
                    className="text-lg font-semibold mb-4"
                    style={{ color: "var(--text-strong)" }}
                  >
                    Informations professionnelles
                  </h2>
                  <div className="overflow-hidden">
                    {professionalItems.map((item) => renderItem(item))}
                  </div>
                </div>
              )}
            </div>

            {/* Info message */}
            {stats.error > 0 && (
              <div
                className="mb-6 p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--surface-error)",
                  borderColor: "var(--border-error)",
                }}
              >
                <div className="text-sm font-medium" style={{ color: "var(--text-error)" }}>
                  ⚠️ {stats.error} erreur(s) détectée(s). Corrigez les erreurs avant de lancer l'import.
                </div>
              </div>
            )}

            {stats.warning > 0 && stats.error === 0 && (
              <div
                className="mb-6 p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--surface-warning)",
                  borderColor: "var(--border-warning)",
                }}
              >
                <div className="text-sm" style={{ color: "var(--text-warning)" }}>
                  ⚠️ {stats.warning} avertissement(s). L'import peut continuer mais certaines données nécessitent votre attention.
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="large" onClick={handleBack}>
                Précédent
              </Button>
              <Button 
                variant="filled" 
                size="large" 
                onClick={handleNext} 
                disabled={stats.error > 0}
              >
                Lancer l'import
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}