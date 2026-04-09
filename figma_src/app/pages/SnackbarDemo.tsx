import { useTheme } from "../context/ThemeContext";
import { Snackbar } from "../components/molecules/Snackbar";
import { Undo2, ExternalLink, Info } from "lucide-react";

export default function SnackbarDemo() {
  const { theme, toggleTheme } = useTheme();

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  const handleLinkClick = () => {
    console.log("Link clicked");
  };

  return (
    <div
      className="min-h-screen p-[48px]"
      style={{
        backgroundColor: "var(--surface-page)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-[48px]">
          <div>
            <h1
              className="text-[48px] font-bold mb-[8px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Snackbar Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Notifications temporaires - Simple, avec Button, avec LinkButton
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-[24px] py-[12px] rounded-[8px] transition-colors"
            style={{
              backgroundColor: "var(--surface-branded-default)",
              color: "white",
              fontFamily: "Roboto, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {/* Section 1: Snackbar simple (texte uniquement) */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. Snackbar simple (texte uniquement)
          </h2>
          <div
            className="p-[32px] rounded-[16px] flex flex-col gap-[24px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <Snackbar message="Fichier téléchargé avec succès" />
            <Snackbar message="Modifications enregistrées automatiquement" />
            <Snackbar message="Email envoyé à jean.dupont@example.com" />
            <Snackbar message="Contact ajouté à vos favoris" />
          </div>
        </section>

        {/* Section 2: Snackbar avec Button */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. Snackbar avec Button
          </h2>
          <p
            className="text-[14px] mb-[16px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Permet à l'utilisateur d'annuler ou d'effectuer une action rapide
          </p>
          <div
            className="p-[32px] rounded-[16px] flex flex-col gap-[24px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <Snackbar
              message="Email supprimé"
              buttonLabel="Annuler"
              onButtonClick={handleButtonClick}
            />
            <Snackbar
              message="Propriété archivée"
              buttonLabel="Annuler"
              buttonIcon={Undo2}
              onButtonClick={handleButtonClick}
            />
            <Snackbar
              message="3 contacts supprimés de la liste"
              buttonLabel="Restaurer"
              onButtonClick={handleButtonClick}
            />
            <Snackbar
              message="Rendez-vous annulé et notification envoyée"
              buttonLabel="Annuler"
              buttonIcon={Undo2}
              onButtonClick={handleButtonClick}
            />
          </div>
        </section>

        {/* Section 3: Snackbar avec LinkButton */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Snackbar avec LinkButton
          </h2>
          <p
            className="text-[14px] mb-[16px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Propose une navigation ou plus d'informations
          </p>
          <div
            className="p-[32px] rounded-[16px] flex flex-col gap-[24px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <Snackbar
              message="Nouvelle mise à jour disponible"
              linkLabel="En savoir plus"
              onLinkClick={handleLinkClick}
            />
            <Snackbar
              message="Nouvelle version de RealAgent disponible (v2.5.0)"
              linkLabel="Voir les nouveautés"
              linkIcon={ExternalLink}
              onLinkClick={handleLinkClick}
            />
            <Snackbar
              message="Votre abonnement expire dans 7 jours"
              linkLabel="Renouveler"
              onLinkClick={handleLinkClick}
            />
            <Snackbar
              message="Nouveau message de Pierre Martin"
              linkLabel="Lire"
              linkIcon={Info}
              onLinkClick={handleLinkClick}
            />
          </div>
        </section>

        {/* Section 4: Comparaison Light vs Dark */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Spécifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {/* Light Mode */}
            <div
              className="p-[24px] rounded-[12px]"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="text-[18px] font-bold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Light Mode
              </h3>
              <ul
                className="space-y-[8px] text-[14px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                <li>✅ Background: neutral-700 (#22252B)</li>
                <li>✅ Text: white (#FFFFFF)</li>
                <li>✅ Button: Ghost variant blanc</li>
                <li>✅ Link: Blanc souligné</li>
                <li>✅ Border-radius: 8px</li>
                <li>✅ Shadow: 0px 4px 12px rgba(0,0,0,0.15)</li>
              </ul>
            </div>

            {/* Dark Mode */}
            <div
              className="p-[24px] rounded-[12px]"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="text-[18px] font-bold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Dark Mode
              </h3>
              <ul
                className="space-y-[8px] text-[14px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                <li>✅ Background: neutral-50 (#ECEDEE)</li>
                <li>✅ Text: grey-700 (#333740)</li>
                <li>✅ Button: Outlined neutral-500 (#737780)</li>
                <li>✅ Link: neutral-500 souligné (#737780)</li>
                <li>✅ Border-radius: 8px</li>
                <li>✅ Shadow: 0px 4px 12px rgba(0,0,0,0.15)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Exemples en contexte */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. Positionnement (bottom-center)
          </h2>
          <p
            className="text-[14px] mb-[16px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Les Snackbars apparaissent généralement en bas au centre de l'écran
          </p>
          <div
            className="relative h-[400px] rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Simulated page content */}
            <div className="p-[32px]">
              <div
                className="w-full h-[80px] rounded-[12px] mb-[16px]"
                style={{ backgroundColor: "var(--surface-page)" }}
              />
              <div
                className="w-full h-[80px] rounded-[12px] mb-[16px]"
                style={{ backgroundColor: "var(--surface-page)" }}
              />
              <div
                className="w-full h-[80px] rounded-[12px]"
                style={{ backgroundColor: "var(--surface-page)" }}
              />
            </div>

            {/* Snackbar positioned at bottom-center */}
            <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2">
              <Snackbar
                message="Propriété mise à jour avec succès"
                linkLabel="Voir"
                linkIcon={ExternalLink}
                onLinkClick={handleLinkClick}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}