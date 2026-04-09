import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/atoms/Button";

/**
 * P05 Demo - Parcours Import Base de Données (IMP)
 * 
 * Page de démonstration pour accéder facilement à tous les écrans
 * du parcours P05 (Import Base de Données).
 */
export default function P05Demo() {
  const navigate = useNavigate();

  const screens = [
    {
      id: "IMP-01",
      name: "Choix du type d'import",
      path: "/IMP_01_ChoixTypeImport",
      description: "Sélection : Clients, Biens, Affaires. Option « Pas de fichier ».",
    },
    {
      id: "IMP-02",
      name: "Upload fichier",
      path: "/IMP_02_UploadFichier",
      description: "Zone drag & drop, formats acceptés, barre de progression, aperçu 5 lignes.",
    },
    {
      id: "IMP-03",
      name: "Mapping des colonnes",
      path: "/IMP_03_MappingColonnes",
      description: "Tableau colonne source ↔ champ cible avec auto-mapping + dropdowns.",
    },
    {
      id: "IMP-04",
      name: "Prévisualisation",
      path: "/IMP_04_Previsualisation",
      description: "Résumé : lignes valides / avertissements / erreurs. Détail par ligne. Gestion doublons.",
    },
    {
      id: "IMP-05",
      name: "Import en cours",
      path: "/IMP_05_ImportEnCours",
      description: "Barre de progression. Option de navigation (import en arrière-plan).",
    },
    {
      id: "IMP-06",
      name: "Résultat & actions",
      path: "/IMP_06_Resultat",
      description: "Récapitulatif chiffré + CTA (voir, réimporter, corriger, dashboard).",
    },
    {
      id: "IMP-07",
      name: "Erreur de parsing",
      path: "/IMP_07_ErreurParsing",
      description: "Message d'erreur + suggestion FAQ + bouton réessayer.",
    },
  ];

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm mb-4 px-4 py-2 rounded-lg transition-colors"
            style={{
              color: "var(--text-subtle)",
              backgroundColor: "var(--surface-container)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--surface-container)";
            }}
          >
            ← Retour à l'accueil
          </button>
        </div>

        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "var(--text-strong)" }}
        >
          Parcours P05 - Import Base de Données (IMP)
        </h1>
        <p
          className="text-lg mb-4"
          style={{ color: "var(--text-body)" }}
        >
          Import de données avec mapping automatique et validation
        </p>
        <div
          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
          style={{
            backgroundColor: "var(--surface-branded-subtle)",
            color: "var(--text-branded-strong)",
          }}
        >
          Vague 1 • 7 écrans
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto mb-8">
        <div
          className="rounded-lg p-6 border"
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: "var(--border-default)",
          }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--text-strong)" }}
          >
            🎯 Composants utilisés
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • FileUpload (molecule)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Zone drag & drop pour fichiers
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • ColumnMappingRow (molecule)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Association colonne source ↔ champ cible
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • ListItemImport* (molecules)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Affichage des items (success, error, select)
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-2" style={{ color: "var(--text-body)" }}>
                • ProgressBar (atom)
              </div>
              <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                Barre de progression d'import
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screens Grid */}
      <div className="max-w-4xl mx-auto space-y-4">
        {screens.map((screen, index) => (
          <div
            key={screen.id}
            className="rounded-lg p-6 border transition-all"
            style={{
              backgroundColor: "var(--surface-container)",
              borderColor: "var(--border-default)",
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{
                      backgroundColor: "var(--surface-branded-default)",
                      color: "var(--text-on-branded)",
                    }}
                  >
                    {index + 1}
                  </div>
                  <div
                    className="px-2 py-1 rounded text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: "var(--surface-branded-subtle)",
                      color: "var(--text-branded-strong)",
                    }}
                  >
                    {screen.id}
                  </div>
                </div>

                {/* Screen Name */}
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-strong)" }}
                >
                  {screen.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-body)" }}
                >
                  {screen.description}
                </p>
              </div>

              {/* Button */}
              <Button
                variant="filled"
                size="medium"
                onClick={() => navigate(screen.path)}
                className="ml-4"
              >
                Voir l'écran
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Start */}
      <div className="max-w-4xl mx-auto mt-8">
        <div
          className="rounded-lg p-6 border"
          style={{
            backgroundColor: "var(--surface-branded-subtle)",
            borderColor: "var(--border-branded-default)",
          }}
        >
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: "var(--text-branded-strong)" }}
          >
            🚀 Démarrage rapide
          </h3>
          <p
            className="text-sm mb-4"
            style={{ color: "var(--text-branded-strong)" }}
          >
            Commencez par le choix du type d'import pour voir le parcours complet en action.
          </p>
          <Button
            variant="filled"
            size="large"
            onClick={() => navigate("/IMP_01_ChoixTypeImport")}
          >
            Démarrer un import
          </Button>
        </div>
      </div>

      {/* Info Box */}
      <div className="max-w-4xl mx-auto mt-6">
        <div
          className="rounded-lg p-4 border text-sm"
          style={{
            backgroundColor: "var(--surface-container)",
            borderColor: "var(--border-default)",
            color: "var(--text-subtle)",
          }}
        >
          <strong style={{ color: "var(--text-body)" }}>Note :</strong> Ce parcours permet
          d'importer des données depuis un fichier CSV ou Excel avec auto-mapping intelligent
          des colonnes, validation des données et gestion des erreurs.
        </div>
      </div>
    </div>
  );
}
