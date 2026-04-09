import { useTheme } from "../context/ThemeContext";
import { LogEntry } from "../components/molecules/LogEntry";
import { LogHistory } from "../components/organisms/LogHistory";

export default function LogsDemo() {
  const { theme, toggleTheme } = useTheme();

  // Données de test
  const sampleLogs = [
    {
      date: "12 fév. 2026",
      time: "12:56",
      author: "Jean Dupont",
      category: "MODIFICATION",
      description:
        "Modification du prix de vente de 450 000€ à 475 000€ pour le bien situé au 15 rue de la Paix, Paris 8ème.",
    },
    {
      date: "12 fév. 2026",
      time: "11:23",
      author: "Marie Martin",
      category: "CRÉATION",
      description:
        "Création d'un nouveau contact client : Sophie Leclerc, sophie.leclerc@email.fr, recherche appartement T3 à Lyon.",
    },
    {
      date: "11 fév. 2026",
      time: "17:45",
      author: "Pierre Durand",
      category: "MODIFICATION",
      description:
        "Mise à jour du statut du bien : passage de 'Disponible' à 'Sous offre' suite à la proposition de M. et Mme Blanc.",
    },
    {
      date: "11 fév. 2026",
      time: "14:30",
      author: "Jean Dupont",
      category: "SUPPRESSION",
      description:
        "Suppression de 3 photos obsolètes du bien situé au 28 avenue Victor Hugo. Remplacement prévu par de nouvelles photos professionnelles.",
    },
    {
      date: "10 fév. 2026",
      time: "09:15",
      author: "Sophie Blanc",
      category: "CRÉATION",
      description:
        "Ajout d'un nouveau bien : Maison T5, 150m², jardin 500m², garage double, 3 chambres, Bordeaux Caudéran, 620 000€.",
    },
    {
      date: "09 fév. 2026",
      time: "16:20",
      author: "Marie Martin",
      category: "MODIFICATION",
      description:
        "Modification des disponibilités pour les visites : ajout des créneaux samedi matin de 9h à 12h pour le bien réf. A2345.",
    },
  ];

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
              Logs Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Composants d'historique de logs - LogEntry & LogHistory
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

        {/* Section 1: Single LogEntry */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. LogEntry unique
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Affichage d'une seule entrée de log
          </p>
          <div
            className="max-w-[600px] rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <LogEntry
              date="12 fév. 2026"
              time="12:56"
              author="Jean Dupont"
              category="MODIFICATION"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
        </section>

        {/* Section 2: LogHistory with multiple entries */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. LogHistory avec plusieurs entrées
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Liste complète d'entrées de logs (utilisable dans une page)
          </p>
          <div
            className="max-w-[800px] rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <LogHistory logs={sampleLogs} />
          </div>
        </section>

        {/* Section 3: LogHistory with scroll */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. LogHistory avec scroll (utilisable dans une sheet modal)
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Hauteur limitée à 400px avec scroll vertical
          </p>
          <div
            className="max-w-[600px] rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <LogHistory logs={sampleLogs} maxHeight="400px" />
          </div>
        </section>

        {/* Section 4: Empty state */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. État vide
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Affichage quand aucun log n'est disponible
          </p>
          <div
            className="max-w-[600px] rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <LogHistory
              logs={[]}
              emptyMessage="Aucune activité récente sur ce bien"
            />
          </div>
        </section>

        {/* Section 5: Two columns layout */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. Layout responsive - 2 colonnes
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Affichage côte à côte pour comparer différents historiques
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div
              className="rounded-[16px] overflow-hidden"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="p-[16px] border-b" style={{ borderColor: "var(--border)" }}>
                <h3
                  className="text-[16px] font-bold"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-headings)",
                  }}
                >
                  Historique Bien A2345
                </h3>
              </div>
              <LogHistory logs={sampleLogs.slice(0, 3)} maxHeight="300px" />
            </div>
            <div
              className="rounded-[16px] overflow-hidden"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="p-[16px] border-b" style={{ borderColor: "var(--border)" }}>
                <h3
                  className="text-[16px] font-bold"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-headings)",
                  }}
                >
                  Historique Contact C789
                </h3>
              </div>
              <LogHistory logs={sampleLogs.slice(3, 6)} maxHeight="300px" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
