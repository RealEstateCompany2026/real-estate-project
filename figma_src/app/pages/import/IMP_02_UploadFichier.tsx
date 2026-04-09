import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { FileUpload } from "../../components/molecules/FileUpload";
import { Button } from "../../components/atoms/Button";
import { ProgressBar } from "../../components/atoms/ProgressBar";
import { InlineMessage } from "../../components/molecules/InlineMessage";
import { Sheet } from "../../components/organisms/Sheet";
import { FileSpreadsheet } from "lucide-react";

/**
 * IMP-02 - Upload fichier
 * 
 * Zone de drag & drop pour télécharger le fichier à importer.
 * Formats acceptés : CSV, Excel
 * Affiche une barre de progression et un aperçu des 5 premières lignes.
 */
export default function IMP_02_UploadFichier() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const importType = searchParams.get("type") || "clients";

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [preview, setPreview] = useState<string[][] | null>(null);

  const handleFileSelect = (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      
      // Simuler upload
      setUploading(true);
      setUploadProgress(0);
      
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            
            // Simuler aperçu
            setPreview([
              ["Nom", "Prénom", "Email", "Téléphone", "Ville"],
              ["Martin", "Sophie", "sophie.martin@email.fr", "0612345678", "Paris"],
              ["Dubois", "Pierre", "pierre.dubois@email.fr", "0623456789", "Lyon"],
              ["Bernard", "Marie", "marie.bernard@email.fr", "0634567890", "Marseille"],
              ["Petit", "Jean", "jean.petit@email.fr", "0645678901", "Toulouse"],
              ["Robert", "Claire", "claire.robert@email.fr", "0656789012", "Nice"],
            ]);
            
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleNext = () => {
    navigate(`/IMP_03_MappingColonnes?type=${importType}`);
  };

  const handleClose = () => {
    navigate("/IMP_01_ChoixTypeImport");
  };

  const getTypeLabel = () => {
    switch (importType) {
      case "clients":
        return "clients";
      case "biens":
        return "biens immobiliers";
      case "documents":
        return "documents";
      default:
        return "données";
    }
  };

  return (
    <Sheet
      isOpen={true}
      onClose={handleClose}
      title="Importer une base de données"
      width="wide"
      showHeaderDivider={false}
      footer={
        preview && !uploading ? (
          <div
            className="px-8 py-6 flex items-center justify-between"
            style={{
              backgroundColor: "var(--surface-container)",
            }}
          >
            <Button
              variant="ghost"
              onClick={() => {
                setFile(null);
                setPreview(null);
              }}
            >
              Changer de fichier
            </Button>

            <Button variant="branded" onClick={handleNext}>
              Continuer vers le mapping
            </Button>
          </div>
        ) : undefined
      }
    >
      {/* Content */}
      <div className="px-8 py-6">
        {/* Title */}
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--text-strong)" }}
        >
          Sélectionnez un fichier
        </h3>
        <p
          className="text-base mb-8"
          style={{ color: "var(--text-body)" }}
        >
          Importez votre base de données de {getTypeLabel()}
        </p>

        {/* File Upload */}
        {!file && (
          <FileUpload
            onFileSelect={handleFileSelect}
            maxFiles={1}
            accept=".csv,.xlsx,.xls"
            helperText="Formats acceptés : CSV, Excel (.xlsx, .xls) • Taille max : 10 MB"
          />
        )}

        {/* Upload Progress */}
        {uploading && (
          <div
            className="rounded-lg p-6 border"
            style={{
              backgroundColor: "var(--surface-container)",
              borderColor: "var(--border-default)",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <FileSpreadsheet size={32} style={{ color: "var(--icon-branded-default)" }} />
              <div className="flex-1">
                <div className="text-sm font-medium mb-1" style={{ color: "var(--text-strong)" }}>
                  {file?.name}
                </div>
                <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                  Téléchargement en cours...
                </div>
              </div>
            </div>
            <ProgressBar progress={uploadProgress} />
          </div>
        )}

        {/* Preview */}
        {preview && !uploading && (
          <div className="space-y-6">
            {/* Success message */}
            <InlineMessage
              type="success"
              title="Fichier téléchargé avec succès"
              message={`${preview.length - 1} lignes détectées`}
            />

            {/* Preview table */}
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-strong)" }}
              >
                Aperçu des 5 premières lignes
              </h3>
              <div
                className="rounded-lg border overflow-hidden"
                style={{
                  borderColor: "var(--border-default)",
                }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "var(--surface-neutral-subtle)",
                        }}
                      >
                        {preview[0].map((header, index) => (
                          <th
                            key={index}
                            className="px-4 py-3 text-left text-xs font-semibold"
                            style={{ color: "var(--text-strong)" }}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {preview.slice(1).map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          style={{
                            backgroundColor: rowIndex % 2 === 0
                              ? "var(--surface-container)"
                              : "var(--surface-page)",
                          }}
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-4 py-3 text-sm"
                              style={{ color: "var(--text-body)" }}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Sheet>
  );
}