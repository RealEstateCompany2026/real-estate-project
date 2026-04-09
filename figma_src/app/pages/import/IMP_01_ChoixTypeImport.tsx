import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Users, Home, FileText } from "lucide-react";
import { Button } from "../../components/atoms/Button";
import { Sheet } from "../../components/organisms/Sheet";

/**
 * IMP-01 - Choix du type d'import
 * 
 * Sheet latéral (1024px) de sélection du type de données à importer :
 * - Clients
 * - Biens immobiliers
 * - Documents
 * 
 * Option "Pas de fichier" (skip).
 */
export default function IMP_01_ChoixTypeImport() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const importTypes = [
    {
      id: "clients",
      label: "Une base de données de clients",
      icon: Users,
      description: "Importez vos contacts et prospects",
    },
    {
      id: "biens",
      label: "Une base de données de biens immobiliers",
      icon: Home,
      description: "Importez votre catalogue de propriétés",
    },
    {
      id: "documents",
      label: "Une base de données de documents",
      icon: FileText,
      description: "Importez vos documents et fichiers",
    },
  ];

  const handleNext = () => {
    if (selectedType) {
      navigate(`/IMP_02_UploadFichier?type=${selectedType}`);
    }
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  const handleClose = () => {
    navigate("/database");
  };

  return (
    <Sheet
      isOpen={true}
      onClose={handleClose}
      title="Importer une base de données"
      width="wide"
      showHeaderDivider={false}
      footer={
        <div
          className="px-8 py-6 flex items-center justify-between"
          style={{
            backgroundColor: "var(--surface-container)",
          }}
        >
          <button
            onClick={handleSkip}
            className="text-sm py-2 px-4 rounded-lg transition-colors"
            style={{ color: "var(--text-subtle)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--text-body)";
              e.currentTarget.style.backgroundColor = "var(--surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-subtle)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Pas de fichier pour le moment
          </button>

          <Button
            variant="branded"
            onClick={handleNext}
            disabled={!selectedType}
          >
            Continuer
          </Button>
        </div>
      }
    >
      {/* Content */}
      <div className="px-8 py-6">
        {/* Question */}
        <h3
          className="text-lg font-semibold mb-6"
          style={{ color: "var(--text-strong)" }}
        >
          Quel type de base souhaitez-vous importer ?
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {importTypes.map((type) => (
            <div key={type.id}>
              <Button
                variant={selectedType === type.id ? "branded" : "outlined"}
                iconLeft={<type.icon size={20} />}
                onClick={() => setSelectedType(type.id)}
              >
                {type.label}
              </Button>
            </div>
          ))}
        </div>

        {/* Conseils */}
        <div
          className="rounded-lg p-4"
          style={{
            backgroundColor: "var(--surface-information)",
          }}
        >
          <h4
            className="text-sm font-semibold mb-2"
            style={{ color: "var(--text-information)" }}
          >
            Quelques conseils pour préparer votre fichier avant l'import
          </h4>
          <ul
            className="text-xs space-y-1"
            style={{ color: "var(--text-information)" }}
          >
            <li>• Formats acceptés : CSV, Excel (.xlsx, .xls)</li>
            <li>• Vérifiez que la première ligne contient les en-têtes de colonnes</li>
            <li>• Supprimez les lignes vides et les doublons</li>
            <li>• Assurez-vous que les données sont cohérentes (dates, numéros, etc.)</li>
          </ul>
        </div>
      </div>
    </Sheet>
  );
}