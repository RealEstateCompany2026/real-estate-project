import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { AppBarImport } from "../../components/organisms/AppBars";
import { Button } from "../../components/atoms/Button";
import { ProgressBar } from "../../components/atoms/ProgressBar";
import { Loader2 } from "lucide-react";

/**
 * IMP-05 - Import en cours
 * 
 * Barre de progression de l'import en cours.
 * Option de navigation (import en arrière-plan).
 */
export default function IMP_05_ImportEnCours() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const importType = searchParams.get("type") || "clients";
  
  const [progress, setProgress] = useState(0);
  const [itemsProcessed, setItemsProcessed] = useState(0);
  const totalItems = 482;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Rediriger automatiquement vers le résultat
          setTimeout(() => {
            navigate(`/IMP_06_Resultat?type=${importType}`);
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
      
      setItemsProcessed((prev) => {
        const newValue = Math.floor((progress / 100) * totalItems);
        return Math.min(newValue, totalItems);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate, importType, progress]);

  const handleContinueLater = () => {
    navigate("/dashboard");
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
          <div className="max-w-2xl w-full mx-auto px-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--surface-branded-subtle)",
                }}
              >
                <Loader2
                  size={48}
                  className="animate-spin"
                  style={{ color: "var(--icon-branded-strong)" }}
                />
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-3xl font-bold text-center mb-3"
              style={{ color: "var(--text-strong)" }}
            >
              Import en cours...
            </h1>

            {/* Description */}
            <p
              className="text-base text-center mb-8"
              style={{ color: "var(--text-body)" }}
            >
              Vos données sont en cours d'importation. Cela peut prendre quelques instants.
            </p>

            {/* Progress */}
            <div
              className="rounded-xl p-8 mb-8"
              style={{
                backgroundColor: "var(--surface-container)",
                border: "1px solid var(--border-default)",
              }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                    Progression
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "var(--text-strong)" }}>
                    {itemsProcessed} / {totalItems} lignes
                  </span>
                </div>
                <ProgressBar progress={progress} />
              </div>

              {/* Status */}
              <div className="text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--text-branded-strong)" }}>
                  {Math.round(progress)}%
                </div>
                <div className="text-sm" style={{ color: "var(--text-subtle)" }}>
                  Importation des données...
                </div>
              </div>
            </div>

            {/* Info */}
            <div
              className="rounded-lg p-4 mb-6 text-center"
              style={{
                backgroundColor: "var(--surface-branded-subtle)",
                border: "1px solid var(--border-branded-default)",
              }}
            >
              <div className="text-sm" style={{ color: "var(--text-branded-strong)" }}>
                💡 Vous pouvez continuer à naviguer, l'import se poursuivra en arrière-plan
              </div>
            </div>

            {/* Action */}
            <div className="flex justify-center">
              <Button
                variant="outlined"
                size="large"
                onClick={handleContinueLater}
              >
                Continuer plus tard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}