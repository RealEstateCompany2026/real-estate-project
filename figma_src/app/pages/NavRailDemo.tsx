import { useState } from "react";
import { NavRail, NavSection } from "../components/organisms/NavRail";
import { ThemeToggle } from "../components/ThemeToggle";
import { useToast } from "../context/ToastContext";

/**
 * NavRailDemo - Page de démonstration du NavRail
 */
export default function NavRailDemo() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState<NavSection>("dashboard");
  const [avatarSelected, setAvatarSelected] = useState(false);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    setAvatarSelected(false);
    
    const labels: Record<NavSection, string> = {
      dashboard: "Tableau de bord",
      database: "Base de données",
      clients: "Clients",
      properties: "Biens",
      deals: "Affaires",
      documents: "Documents",
      calendar: "Agenda",
      automations: "Automatisations",
    };
    
    toast.info(`Navigation vers: ${labels[section]}`);
  };

  const handleAvatarClick = () => {
    setAvatarSelected(!avatarSelected);
    setActiveSection(undefined as any);
    toast.info(avatarSelected ? "Menu compte fermé" : "Menu compte ouvert");
  };

  const handleLogoClick = () => {
    setActiveSection("dashboard");
    setAvatarSelected(false);
    toast.success("Retour à l'accueil");
  };

  return (
    <div className="min-h-screen flex" style={{ background: "var(--surface-page)" }}>
      {/* NavRail */}
      <NavRail
        activeSection={activeSection}
        onNavigate={handleNavigate}
        avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
        avatarAlt="Marie Dupont"
        onAvatarClick={handleAvatarClick}
        onLogoClick={handleLogoClick}
        avatarSelected={avatarSelected}
      />

      {/* Contenu principal */}
      <div className="ml-[90px] flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
                NavRail - Navigation principale
              </h1>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                Design System RealAgent - Barre de navigation verticale
              </p>
            </div>
            <ThemeToggle />
          </div>

          {/* Introduction */}
          <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
              Vue d'ensemble
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  📐 Spécifications
                </h3>
                <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>• Largeur: 90px fixe</li>
                  <li>• Hauteur: 100vh (pleine hauteur)</li>
                  <li>• Position: fixed left 0</li>
                  <li>• Background: white (light) / #111215 (dark)</li>
                  <li>• Padding vertical: 10px</li>
                  <li>• Support complet light/dark mode</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  🎨 Structure
                </h3>
                <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>• Logo Orpi en haut (75px height)</li>
                  <li>• 3 sections de navigation séparées</li>
                  <li>• Dividers horizontaux (10px × 1px)</li>
                  <li>• Boutons 68×50px, radius 16px</li>
                  <li>• Avatar utilisateur en bas (54×54px)</li>
                  <li>• États: default, hover, selected</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contenu de la section active */}
          <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
              Section active: {activeSection ? getSectionLabel(activeSection) : "Menu compte"}
            </h2>

            {avatarSelected && (
              <div className="p-6 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                  Menu du compte utilisateur
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                  Lorsque l'avatar est sélectionné, un menu peut s'afficher avec les options suivantes :
                </p>
                <ul className="space-y-2">
                  <li className="p-3 rounded-lg hover:bg-opacity-50" style={{ background: "var(--surface-page)" }}>
                    <span className="font-medium" style={{ color: "var(--text-body)" }}>Mon profil</span>
                  </li>
                  <li className="p-3 rounded-lg hover:bg-opacity-50" style={{ background: "var(--surface-page)" }}>
                    <span className="font-medium" style={{ color: "var(--text-body)" }}>Paramètres</span>
                  </li>
                  <li className="p-3 rounded-lg hover:bg-opacity-50" style={{ background: "var(--surface-page)" }}>
                    <span className="font-medium" style={{ color: "var(--text-body)" }}>Notifications</span>
                  </li>
                  <li className="p-3 rounded-lg hover:bg-opacity-50" style={{ background: "var(--surface-page)" }}>
                    <span className="font-medium" style={{ color: "var(--text-body)" }}>Déconnexion</span>
                  </li>
                </ul>
              </div>
            )}

            {activeSection && !avatarSelected && (
              <div className="p-6 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                  {getSectionLabel(activeSection)}
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                  {getSectionDescription(activeSection)}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-32 rounded-lg"
                      style={{ background: "var(--surface-page)" }}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Sections de navigation */}
          <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
              Sections de navigation
            </h2>

            <div className="space-y-6">
              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-3" style={{ color: "var(--text-body)" }}>
                  Section 1 : Vue d'ensemble
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>📊 Tableau de bord</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>KPIs et métriques</p>
                  </div>
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>🗄️ Base de données</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>Import et gestion</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-3" style={{ color: "var(--text-body)" }}>
                  Section 2 : Données principales
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>👤 Clients</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>Contacts et leads</p>
                  </div>
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>🏠 Biens</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>Propriétés et mandats</p>
                  </div>
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>📋 Affaires</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>Transactions en cours</p>
                  </div>
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>📄 Documents</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>Contrats et fichiers</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-3" style={{ color: "var(--text-body)" }}>
                  Section 3 : Outils
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>📅 Agenda</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>RDV et tâches</p>
                  </div>
                  <div className="p-3 rounded" style={{ background: "var(--surface-page)" }}>
                    <p className="font-medium" style={{ color: "var(--text-body)" }}>⚡ Automatisations</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>Workflows IA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* États des boutons */}
          <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
              États des boutons
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--surface-neutral-action)" }}>
                    <th className="text-left p-3" style={{ color: "var(--text-body)" }}>État</th>
                    <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Background</th>
                    <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Icône</th>
                    <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Utilisation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                    <td className="p-3"><code>default</code></td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Transparent</td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Grey-400 (#a1a4aa)</td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>État normal</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                    <td className="p-3"><code>hover</code></td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Grey-200 (#dadbdd)</td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Purple-500 (#635CC7)</td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Survol souris</td>
                  </tr>
                  <tr>
                    <td className="p-3"><code>selected</code></td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Grey-300 (#ecedee)</td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Grey-700 (#444955)</td>
                    <td className="p-3" style={{ color: "var(--text-caption)" }}>Page active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Usage */}
          <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
              Code d'utilisation
            </h2>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`import { NavRail } from "@/components/organisms/NavRail";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  
  return (
    <div className="flex">
      <NavRail
        activeSection={activeSection}
        onNavigate={(section) => {
          setActiveSection(section);
          navigate(\`/\${section}\`);
        }}
        avatarSrc="/avatar.jpg"
        avatarAlt="Marie Dupont"
        onAvatarClick={() => setShowAccountMenu(true)}
        onLogoClick={() => navigate("/")}
      />
      
      <main className="ml-[90px] flex-1">
        {/* Contenu principal */}
      </main>
    </div>
  );
}`}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Helpers
function getSectionLabel(section: NavSection): string {
  const labels: Record<NavSection, string> = {
    dashboard: "Tableau de bord",
    database: "Base de données",
    clients: "Clients",
    properties: "Biens",
    deals: "Affaires",
    documents: "Documents",
    calendar: "Agenda",
    automations: "Automatisations",
  };
  return labels[section];
}

function getSectionDescription(section: NavSection): string {
  const descriptions: Record<NavSection, string> = {
    dashboard: "Vue d'ensemble avec KPIs, activité récente, suggestions IA et graphiques.",
    database: "Import et gestion de votre base de données clients et propriétés.",
    clients: "Gestion complète de vos contacts, leads et qualification.",
    properties: "Catalogue de biens, mandats, annonces et visites.",
    deals: "Suivi des transactions, promesses de vente et signatures.",
    documents: "Stockage et génération de contrats, mandats et documents.",
    calendar: "Planning des rendez-vous, visites et tâches.",
    automations: "Workflows automatisés et suggestions IA.",
  };
  return descriptions[section];
}
