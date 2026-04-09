/**
 * DEMO PAGE: InlineMessage Component
 * 
 * Page de démonstration du composant InlineMessage
 * Montre tous les types de messages: info, warning, error, success
 */

import { useState } from "react";
import { InlineMessage } from "../components/molecules";
import { Button } from "../components/atoms/Button";

export default function InlineMessageDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={theme === "dark" ? "dark" : ""}
      style={{ minHeight: "100vh" }}
    >
      <div
        className="min-h-screen p-8"
        style={{ backgroundColor: theme === "dark" ? "#111215" : "#FFFFFF" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header avec bouton theme toggle */}
          <div className="flex items-center justify-between mb-8">
            <h1
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h1)",
                lineHeight: "var(--lh-h1)",
              }}
            >
              Composant InlineMessage
            </h1>
            <Button
              variant="primary"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "Mode Dark" : "Mode Light"}
            </Button>
          </div>

          {/* Messages Info */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Information
            </h2>

            <InlineMessage
              type="info"
              message="Cette action nécessite une connexion internet active. Assurez-vous d'être connecté avant de continuer."
              theme={theme}
            />
          </section>

          {/* Messages Warning */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Avertissement
            </h2>

            <InlineMessage
              type="warning"
              message="Cette opération est irréversible. Toutes les données associées seront définitivement supprimées après validation."
              theme={theme}
            />
          </section>

          {/* Messages Error */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Erreur
            </h2>

            <InlineMessage
              type="error"
              message="Le format de la colonne 'date_signature' est invalide. Attendu: YYYY-MM-DD, trouvé: DD/MM/YYYY. Veuillez vérifier et corriger les données."
              theme={theme}
            />
          </section>

          {/* Messages Success */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Succès
            </h2>

            <InlineMessage
              type="success"
              message="L'importation des données a été réalisée avec succès. Tous les enregistrements ont été correctement mappés et sauvegardés."
              theme={theme}
            />
          </section>

          {/* Messages multiples */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Messages multiples
            </h2>

            <div className="space-y-4">
              <InlineMessage
                type="info"
                message="Nouvelle fonctionnalité disponible : synchronisation automatique des contacts."
                theme={theme}
              />
              <InlineMessage
                type="warning"
                message="Le quota de stockage est bientôt atteint (85%)."
                theme={theme}
              />
              <InlineMessage
                type="error"
                message="Échec de la connexion au serveur. Code erreur: 503"
                theme={theme}
              />
              <InlineMessage
                type="success"
                message="Les paramètres ont été enregistrés avec succès."
                theme={theme}
              />
            </div>
          </section>

          {/* Bouton retour */}
          <Button
            variant="text"
            size="lg"
            onClick={() => window.history.back()}
          >
            ← Retour
          </Button>
        </div>
      </div>
    </div>
  );
}
