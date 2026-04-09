import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { ProgressBarWithControls } from "../../components/organisms/ProgressBarWithControls";
import { CollapsibleSection } from "../../components/molecules/CollapsibleSection";
import { Button } from "../../components/atoms/Button";
import { Badge } from "../../components/atoms/Badge";
import { FileUpload } from "../../components/molecules/FileUpload";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

/**
 * OBS-03 - Documents réglementaires
 * 
 * Téléchargement des documents obligatoires :
 * - Carte professionnelle
 * - Assurance RC Pro
 * - Garantie financière
 * - etc.
 * 
 * Affiche le statut par document et les alertes d'expiration.
 */
export default function OBS_03_Documents() {
  const navigate = useNavigate();

  const [documents] = useState([
    {
      id: "carte-pro",
      name: "Carte professionnelle",
      required: true,
      status: "uploaded" as "uploaded" | "missing" | "expired",
      expiryDate: "15/06/2026",
    },
    {
      id: "rc-pro",
      name: "Assurance RC Professionnelle",
      required: true,
      status: "missing" as "uploaded" | "missing" | "expired",
      expiryDate: null,
    },
    {
      id: "garantie-fin",
      name: "Garantie financière",
      required: true,
      status: "missing" as "uploaded" | "missing" | "expired",
      expiryDate: null,
    },
    {
      id: "kbis",
      name: "Extrait Kbis",
      required: false,
      status: "missing" as "uploaded" | "missing" | "expired",
      expiryDate: null,
    },
  ]);

  const handleNext = () => {
    navigate("/OBS_04_Parametres");
  };

  const handlePrevious = () => {
    navigate("/OBS_02_Organisation");
  };

  const getStatusIcon = (status: "uploaded" | "missing" | "expired") => {
    switch (status) {
      case "uploaded":
        return <CheckCircle2 size={16} style={{ color: "var(--icon-success-strong)" }} />;
      case "expired":
        return <AlertCircle size={16} style={{ color: "var(--icon-error-strong)" }} />;
      case "missing":
        return <Clock size={16} style={{ color: "var(--icon-subtle)" }} />;
    }
  };

  const getStatusText = (status: "uploaded" | "missing" | "expired") => {
    switch (status) {
      case "uploaded":
        return "Téléchargé";
      case "expired":
        return "Expiré";
      case "missing":
        return "À télécharger";
    }
  };

  const steps = ["Profil", "Organisation", "Documents", "Paramètres"];

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="dashboard" />

      <div className="flex-1 flex flex-col">
        {/* Progress Bar with Controls */}
        <div className="flex justify-center pt-6 pb-4" style={{ backgroundColor: "var(--surface-container)" }}>
          <ProgressBarWithControls
            label="Étape 3/4"
            progress={75}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-strong)" }}>
                Documents réglementaires
              </h1>
              <p className="text-base" style={{ color: "var(--text-body)" }}>
                Téléchargez vos documents professionnels obligatoires.
              </p>
            </div>

            {/* Documents list */}
            <div className="space-y-4">
              {documents.map((doc) => (
                <CollapsibleSection
                  key={doc.id}
                  title={doc.name}
                  description={doc.required ? "Obligatoire" : "Optionnel"}
                  defaultExpanded={doc.status === "missing" && doc.required}
                  badge={
                    doc.status === "uploaded" ? (
                      <Badge variant="success" label="Téléchargé" />
                    ) : doc.status === "expired" ? (
                      <Badge variant="error" label="Expiré" />
                    ) : undefined
                  }
                >
                  <div className="space-y-4">
                    {/* Status */}
                    <div className="flex items-center gap-2 p-3 rounded-lg"
                      style={{
                        backgroundColor: doc.status === "uploaded"
                          ? "var(--surface-success-subtle)"
                          : doc.status === "expired"
                          ? "var(--surface-error-subtle)"
                          : "var(--surface-neutral-subtle)",
                      }}
                    >
                      {getStatusIcon(doc.status)}
                      <div className="flex-1">
                        <div className="text-sm font-medium" style={{ color: "var(--text-strong)" }}>
                          {getStatusText(doc.status)}
                        </div>
                        {doc.expiryDate && (
                          <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                            Expire le {doc.expiryDate}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Upload zone */}
                    {doc.status !== "uploaded" && (
                      <FileUpload
                        onFileSelect={(files) => console.log("Files:", files)}
                        maxFiles={1}
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    )}

                    {doc.status === "uploaded" && (
                      <div className="flex items-center justify-between">
                        <div className="text-sm" style={{ color: "var(--text-body)" }}>
                          📄 carte-professionnelle.pdf
                        </div>
                        <Button variant="ghost" size="small">
                          Remplacer
                        </Button>
                      </div>
                    )}
                  </div>
                </CollapsibleSection>
              ))}
            </div>

            {/* Alert */}
            <div
              className="mt-6 p-4 rounded-lg border"
              style={{
                backgroundColor: "var(--surface-warning-subtle)",
                borderColor: "var(--border-warning-default)",
              }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle size={20} style={{ color: "var(--icon-warning-strong)", marginTop: 2 }} />
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "var(--text-strong)" }}>
                    Documents obligatoires manquants
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-body)" }}>
                    Vous pouvez passer cette étape et télécharger vos documents plus tard depuis vos paramètres.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}