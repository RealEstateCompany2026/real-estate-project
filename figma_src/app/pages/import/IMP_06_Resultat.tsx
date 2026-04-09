import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarImport } from "../../components/organisms/AppBars";
import { Button } from "../../components/atoms/Button";
import { CheckCircle2, Users, AlertTriangle, XCircle } from "lucide-react";

/**
 * IMP-06 - Résultat & actions
 * 
 * Récapitulatif de l'import avec statistiques :
 * - Lignes importées avec succès
 * - Avertissements
 * - Erreurs
 * 
 * Actions : voir les données, réimporter, corriger les erreurs, aller au dashboard
 */
export default function IMP_06_Resultat() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const importType = searchParams.get("type") || "clients";

  const stats = {
    total: 482,
    success: 478,
    warning: 3,
    error: 1,
  };

  const handleViewData = () => {
    navigate("/database");
  };

  const handleReimport = () => {
    navigate("/IMP_01_ChoixTypeImport");
  };

  const handleFixErrors = () => {
    navigate(`/IMP_04_Previsualisation?type=${importType}`);
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const getTypeLabel = () => {
    switch (importType) {
      case "clients":
        return "clients";
      case "biens":
        return "biens";
      case "documents":
        return "documents";
      default:
        return "éléments";
    }
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
          <div className="max-w-3xl w-full mx-auto px-8 py-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--surface-success-default)",
                }}
              >
                <CheckCircle2
                  size={48}
                  style={{ color: "var(--icon-on-branded)" }}
                />
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-4xl font-bold text-center mb-3"
              style={{ color: "var(--text-strong)" }}
            >
              Import terminé ! 🎉
            </h1>

            {/* Description */}
            <p
              className="text-lg text-center mb-8"
              style={{ color: "var(--text-body)" }}
            >
              Vos données ont été importées avec succès.
            </p>

            {/* Stats */}
            <div
              className="rounded-xl p-6 mb-8"
              style={{
                backgroundColor: "var(--surface-container)",
                border: "1px solid var(--border-default)",
              }}
            >
              <h2
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-strong)" }}
              >
                Récapitulatif de l'import
              </h2>

              <div className="space-y-3">
                {/* Total */}
                <div className="flex items-center justify-between p-3 rounded-lg"
                  style={{ backgroundColor: "var(--surface-page)" }}
                >
                  <div className="flex items-center gap-3">
                    <Users size={20} style={{ color: "var(--icon-default)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                      Total de {getTypeLabel()}
                    </span>
                  </div>
                  <span className="text-lg font-bold" style={{ color: "var(--text-strong)" }}>
                    {stats.total}
                  </span>
                </div>

                {/* Success */}
                <div className="flex items-center justify-between p-3 rounded-lg"
                  style={{ backgroundColor: "var(--surface-success-subtle)" }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} style={{ color: "var(--icon-success-strong)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--text-success-strong)" }}>
                      Importés avec succès
                    </span>
                  </div>
                  <span className="text-lg font-bold" style={{ color: "var(--text-success-strong)" }}>
                    {stats.success}
                  </span>
                </div>

                {/* Warning */}
                {stats.warning > 0 && (
                  <div className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "var(--surface-warning-subtle)" }}
                  >
                    <div className="flex items-center gap-3">
                      <AlertTriangle size={20} style={{ color: "var(--icon-warning-strong)" }} />
                      <span className="text-sm font-medium" style={{ color: "var(--text-warning-strong)" }}>
                        Avec avertissements
                      </span>
                    </div>
                    <span className="text-lg font-bold" style={{ color: "var(--text-warning-strong)" }}>
                      {stats.warning}
                    </span>
                  </div>
                )}

                {/* Error */}
                {stats.error > 0 && (
                  <div className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "var(--surface-error-subtle)" }}
                  >
                    <div className="flex items-center gap-3">
                      <XCircle size={20} style={{ color: "var(--icon-error-strong)" }} />
                      <span className="text-sm font-medium" style={{ color: "var(--text-error-strong)" }}>
                        Non importés (erreurs)
                      </span>
                    </div>
                    <span className="text-lg font-bold" style={{ color: "var(--text-error-strong)" }}>
                      {stats.error}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                variant="filled"
                size="large"
                onClick={handleViewData}
                className="w-full"
              >
                Voir mes {getTypeLabel()}
              </Button>

              <div className="grid grid-cols-2 gap-3">
                {stats.error > 0 && (
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleFixErrors}
                  >
                    Corriger les erreurs
                  </Button>
                )}
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleReimport}
                >
                  Nouvel import
                </Button>
              </div>

              <button
                onClick={handleDashboard}
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
                Aller au tableau de bord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
