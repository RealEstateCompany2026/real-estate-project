import React from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarImport } from "../../components/organisms/AppBars";
import { Button } from "../../components/atoms/Button";
import { XCircle, HelpCircle, RotateCcw } from "lucide-react";

/**
 * IMP-07 - Erreur de parsing
 * 
 * Écran d'erreur lors du parsing du fichier.
 * Message d'erreur explicatif + suggestions + lien FAQ + bouton réessayer.
 */
export default function IMP_07_ErreurParsing() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/IMP_02_UploadFichier");
  };

  const handleBack = () => {
    navigate("/IMP_01_ChoixTypeImport");
  };

  const handleFAQ = () => {
    // Ouvrir la FAQ dans un nouvel onglet
    window.open("https://help.realagent.fr/import-erreurs", "_blank");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="database" />

      <div className="flex-1 flex flex-col">
        <AppBarImport
          title="Import d'une base de données"
          currentFileName="clients_export.csv"
        />

        <div className="flex-1 overflow-auto flex items-center justify-center">
          <div className="max-w-2xl w-full mx-auto px-8 py-8">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--surface-error-subtle)",
                }}
              >
                <XCircle
                  size={48}
                  style={{ color: "var(--icon-error-strong)" }}
                />
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-3xl font-bold text-center mb-3"
              style={{ color: "var(--text-strong)" }}
            >
              Erreur lors de la lecture du fichier
            </h1>

            {/* Description */}
            <p
              className="text-base text-center mb-8"
              style={{ color: "var(--text-body)" }}
            >
              Nous n'avons pas pu lire votre fichier. Veuillez vérifier le format et réessayer.
            </p>

            {/* Error Details */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                backgroundColor: "var(--surface-error-subtle)",
                border: "1px solid var(--border-error-default)",
              }}
            >
              <div className="flex items-start gap-3">
                <XCircle size={20} style={{ color: "var(--icon-error-strong)", marginTop: 2 }} />
                <div className="flex-1">
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--text-error-strong)" }}
                  >
                    Détails de l'erreur
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-error-strong)" }}
                  >
                    Le fichier ne semble pas être au format CSV ou Excel valide. 
                    Erreur technique : "Unable to parse file - Invalid delimiter at line 42"
                  </p>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div
              className="rounded-xl p-6 mb-6"
              style={{
                backgroundColor: "var(--surface-container)",
                border: "1px solid var(--border-default)",
              }}
            >
              <h3
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--text-strong)" }}
              >
                Suggestions pour corriger le problème
              </h3>
              <ul
                className="text-sm space-y-2"
                style={{ color: "var(--text-body)" }}
              >
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--text-branded-strong)" }}>•</span>
                  <span>Vérifiez que votre fichier est au format CSV ou Excel (.xlsx, .xls)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--text-branded-strong)" }}>•</span>
                  <span>Assurez-vous que le séparateur utilisé est une virgule (,) ou un point-virgule (;)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--text-branded-strong)" }}>•</span>
                  <span>Vérifiez qu'il n'y a pas de caractères spéciaux non encodés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "var(--text-branded-strong)" }}>•</span>
                  <span>Essayez d'exporter à nouveau votre fichier depuis votre logiciel source</span>
                </li>
              </ul>
            </div>

            {/* FAQ Link */}
            <button
              onClick={handleFAQ}
              className="w-full mb-6 p-4 rounded-lg border-2 transition-all flex items-center justify-center gap-3"
              style={{
                borderColor: "var(--border-branded-default)",
                backgroundColor: "var(--surface-branded-subtle)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-branded-strong)";
                e.currentTarget.style.backgroundColor = "var(--surface-branded-default)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-branded-default)";
                e.currentTarget.style.backgroundColor = "var(--surface-branded-subtle)";
              }}
            >
              <HelpCircle size={20} style={{ color: "var(--icon-branded-strong)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--text-branded-strong)" }}>
                Consulter la FAQ sur les erreurs d'import
              </span>
            </button>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                variant="filled"
                size="large"
                onClick={handleRetry}
                className="w-full"
                iconLeft={<RotateCcw size={20} />}
              >
                Réessayer avec un autre fichier
              </Button>

              <button
                onClick={handleBack}
                className="w-full text-sm py-3 px-4 rounded-lg transition-colors"
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
                Retour au choix du type d'import
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}