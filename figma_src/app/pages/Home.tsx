import { Link } from "react-router";
import { Card, CardHeader, CardContent } from "../components/atoms/Card";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  Atom,
  Box,
  Component,
  Layout,
  Database,
  FileText,
  Home as HomeIcon,
  Sparkles,
  MessageSquare,
  Calendar,
  Search,
  Bell,
  Moon,
} from "lucide-react";

/**
 * Home - Page d'accueil du Design System
 * 
 * Navigation par famille de composants
 */
export default function Home() {
  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">RealAgent Design System</h1>
            <p className="text-lg" style={{ color: "var(--text-caption)" }}>
              Composants basés sur Atomic Design avec tokens
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Introduction */}
        <Card radius="scale400" padding="32px">
          <CardHeader
            title="Bienvenue"
            subtitle="Explorez tous les composants du Design System RealAgent"
          />
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  ⚛️ Atomic Design
                </h3>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Architecture en Atoms, Molecules et Organisms pour une réutilisabilité maximale.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  🎨 Design Tokens
                </h3>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Tous les styles (couleurs, typo, spacing, radius) sont basés sur des tokens CSS.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  🌓 Light/Dark Mode
                </h3>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Support complet du mode sombre avec basculement automatique des tokens.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Atoms */}
        <section className="space-y-4">
          <h2>Atoms - Composants de base</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <DemoCard
              icon={<Box size={24} />}
              title="Buttons"
              description="Boutons avec variants branded, outlined, ghost"
              to="/button-demo"
            />
            <DemoCard
              icon={<FileText size={24} />}
              title="TextFields"
              description="Champs de texte avec label et validation"
              to="/text-field-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="Checkboxes"
              description="Checkbox et toggle switches"
              to="/checkbox-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="Switches"
              description="Toggle switches on/off"
              to="/switch-demo"
            />
            <DemoCard
              icon={<Layout size={24} />}
              title="Cards"
              description="Conteneurs avec border, shadow et radius"
              to="/foundation-components-demo"
            />
            <DemoCard
              icon={<Atom size={24} />}
              title="Tous les Atoms"
              description="Collection complète des atoms"
              to="/atoms-demo"
            />
          </div>
        </section>

        {/* Molecules */}
        <section className="space-y-4">
          <h2>Molecules - Composants composites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <DemoCard
              icon={<FileText size={24} />}
              title="InputFields"
              description="Champs avec label, helper text et validation"
              to="/input-field-demo"
            />
            <DemoCard
              icon={<Search size={24} />}
              title="SearchBar"
              description="Barre de recherche avec suggestions"
              to="/search-demo"
            />
            <DemoCard
              icon={<Bell size={24} />}
              title="Toast & Snackbar"
              description="Notifications temporaires"
              to="/toast-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="Stepper & Upload"
              description="Multi-step et drag & drop"
              to="/foundation-components-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="Stepper Variants"
              description="Variantes default & minimal"
              to="/stepper-demo"
            />
            <DemoCard
              icon={<MessageSquare size={24} />}
              title="Messages"
              description="Bulles de chat et composer"
              to="/messages-demo"
            />
            <DemoCard
              icon={<Layout size={24} />}
              title="Tabs"
              description="Navigation par onglets"
              to="/tabs-demo"
            />
          </div>
        </section>

        {/* Organisms */}
        <section className="space-y-4">
          <h2>Organisms - Composants complexes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <DemoCard
              icon={<Layout size={24} />}
              title="AppBars"
              description="Headers de page avec actions"
              to="/appbars-demo"
            />
            <DemoCard
              icon={<Layout size={24} />}
              title="NavRail"
              description="Navigation verticale principale"
              to="/nav-rail-demo"
            />
            <DemoCard
              icon={<Layout size={24} />}
              title="Menu"
              description="Menus contextuels et dropdowns"
              to="/menu-demo"
            />
            <DemoCard
              icon={<Calendar size={24} />}
              title="DatePicker"
              description="Sélecteur de date"
              to="/date-picker-demo"
            />
            <DemoCard
              icon={<Sparkles size={24} />}
              title="AI Suggestions"
              description="Bannières et dashboards IA"
              to="/ai-components-demo"
            />
            <DemoCard
              icon={<Layout size={24} />}
              title="List Components"
              description="Items de liste pour import, clients, affaires et biens"
              to="/list-components-demo"
            />
          </div>
        </section>

        {/* Patterns */}
        <section className="space-y-4">
          <h2>Patterns - États et comportements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <DemoCard
              icon={<Component size={24} />}
              title="Loading States"
              description="Spinners, overlays et skeletons"
              to="/loader-demo"
            />
            <DemoCard
              icon={<FileText size={24} />}
              title="Progress"
              description="Barres de progression avec contrôles"
              to="/progress-demo"
            />
            <DemoCard
              icon={<FileText size={24} />}
              title="Logs"
              description="Historique et entrées de log"
              to="/logs-demo"
            />
            <DemoCard
              icon={<Moon size={24} />}
              title="🌓 Dark Mode Test"
              description="Vérification dark mode sur tous les parcours"
              to="/dark-mode-test"
            />
          </div>
        </section>

        {/* Pages d'application */}
        <section className="space-y-4">
          <h2>Parcours utilisateur</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <DemoCard
              icon={<Component size={24} />}
              title="P01 - Sign Up"
              description="Parcours création de compte (9 écrans)"
              to="/p01-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="P02 - Sign In"
              description="Parcours de connexion (8 écrans)"
              to="/p02-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="P03 - Onboarding"
              description="Tour guidé avec spotlights (7 écrans)"
              to="/p03-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="P04 - Setup"
              description="Configuration initiale (5 écrans)"
              to="/p04-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="P05 - Import"
              description="Import base de données (7 écrans)"
              to="/p05-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="P06 - Ajouter un client"
              description="Création client avec formulaire (7 écrans)"
              to="/p06-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="P07 - Ajouter un bien"
              description="Création bien immobilier (9 écrans)"
              to="/p07-demo"
            />
            <DemoCard
              icon={<Component size={24} />}
              title="P08 - Fiche Client"
              description="Vue complète d'un client (10 écrans)"
              to="/p08-demo"
            />
          </div>

          {/* P06 - Routes individuelles */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-strong)" }}>
              P06 - Écrans individuels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <DemoCard
                icon={<Component size={24} />}
                title="CLI_01_Page_Creation_Client"
                description="Formulaire complet de création"
                to="/CLI_01_Page_Creation_Client"
              />
              <DemoCard
                icon={<Component size={24} />}
                title="CLI_07_Modale_Creation_Rapide"
                description="Modale 420px création rapide"
                to="/CLI_07_Modale_Creation_Rapide"
              />
            </div>
          </div>

          {/* P07 - Routes individuelles */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-strong)" }}>
              P07 - Écrans individuels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <DemoCard
                icon={<Component size={24} />}
                title="BIE_01_Page_Creation_Bien"
                description="Formulaire complet de création"
                to="/BIE_01_Page_Creation_Bien"
              />
            </div>
          </div>

          {/* P08 - Routes individuelles */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-strong)" }}>
              P08 - Écrans individuels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <DemoCard
                icon={<Component size={24} />}
                title="FIC_01_Page_Fiche_Client"
                description="Vue complète d'un client"
                to="/FIC_01_Page_Fiche_Client"
              />
              <DemoCard
                icon={<Component size={24} />}
                title="FIC_01_Page_List_Client"
                description="Liste des clients avec filtres et graphique"
                to="/FIC_01_Page_List_Client"
              />
              <DemoCard
                icon={<Component size={24} />}
                title="FIB_01_Page_List_Bien"
                description="Liste des biens avec filtres et graphique"
                to="/FIB_01_Page_List_Bien"
              />
            </div>
          </div>
        </section>

        {/* Pages d'application */}
        <section className="space-y-4">
          <h2>Pages - Exemples complets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <DemoCard
              icon={<HomeIcon size={24} />}
              title="Dashboard"
              description="Tableau de bord principal"
              to="/dashboard"
            />
            <DemoCard
              icon={<Database size={24} />}
              title="Database"
              description="Base de données"
              to="/database"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

// DemoCard component
interface DemoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
}

function DemoCard({ icon, title, description, to }: DemoCardProps) {
  return (
    <Link to={to} className="block">
      <Card
        radius="scale300"
        padding="20px"
        className="h-full hover:shadow-lg transition-shadow cursor-pointer"
      >
        <div className="flex items-start gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ background: "var(--surface-branded-default)", color: "var(--text-branded-on-action)" }}
          >
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-1" style={{ color: "var(--text-body)" }}>
              {title}
            </h3>
            <p className="text-sm" style={{ color: "var(--text-caption)" }}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}