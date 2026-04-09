import { useState } from "react";
import {
  AppBarCategory,
  AppBarBasic,
  AppBarImport,
  AppBarDetail,
  AppBarEventQuinte,
  AppBarClientAncres,
  AppBarBienAncres,
  AppBarAffaireAncres,
  AppBarFicheClient,
  AppBarFicheBien,
  AppBarAnnonce,
} from "../components/organisms";
import { ThemeToggle } from "../components/ThemeToggle";
import { IconButton } from "../components/atoms/Button";
import { Badge } from "../components/atoms/Badge";
import { Chip, ChipDate, ChipId } from "../components/atoms/Chip";
import { ChipScoreAuto } from "../components/atoms/ChipScore";
import { KpiIndicator } from "../components/atoms/KpiIndicator";
import {
  User,
  Calendar,
  Database,
  BookOpen,
  FileText,
  Home,
  Maximize2,
  MapPin,
  Tag,
  MessageSquare,
  MessageCircle,
  FileCheck,
  Image,
  Mail,
  DoorOpen,
  Heart,
  DollarSign,
  Scale,
} from "lucide-react";

/**
 * AppBarsDemo - Page de démonstration des composants AppBar
 */
export default function AppBarsDemo() {
  const [saving, setSaving] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Fichier enregistré !");
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              AppBars Components
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Design System RealAgent - Famille de barres de navigation
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
                <li>• Hauteur fixe: 100px</li>
                <li>• Padding vertical: 27px</li>
                <li>• Padding horizontal: 20px</li>
                <li>• Titre: H4 Bold 28px/34px</li>
                <li>• Support complet light/dark mode</li>
                <li>• Composants atomiques réutilisables</li>
                <li>• IconButton variant="ghost" pour tous</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 Variantes
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>Category:</strong> Pages liste avec dropdown ghost</li>
                <li>• <strong>Basic:</strong> Pages liste simples</li>
                <li>• <strong>Import:</strong> Flows d'import</li>
                <li>• <strong>Detail:</strong> Fiches détail</li>
                <li>• <strong>Annonce:</strong> Informations d'annonce immobilière</li>
                <li>• <strong>Metrics:</strong> Métriques d'affaire</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AppBarCategory */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              1. AppBarCategory
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour les pages liste avec dropdown de catégorie (ghost, sans shadow) + actions
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Utilise: DropdownButton ghost (shadow=false) + IconButton
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarCategory
              title="Rubrique"
              category="Categorie"
              categoryOpen={categoryOpen}
              onCategoryClick={() => setCategoryOpen(!categoryOpen)}
              showAdd
              onAdd={() => console.log("Add clicked")}
              showSearch
              onSearch={() => console.log("Search clicked")}
            />
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Code d'usage :
            </p>
            <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<AppBarCategory
  title="Rubrique"
  category="Categorie"
  categoryOpen={isOpen}
  onCategoryClick={() => setIsOpen(!isOpen)}
  showAdd
  onAdd={() => console.log("Add clicked")}
  showSearch
  onSearch={() => console.log("Search clicked")}
/>`}
            </pre>
            <p className="text-xs mt-2" style={{ color: "var(--text-caption)" }}>
              💡 Cliquez sur "Categorie" pour voir le chevron tourner (isOpen true/false)
            </p>
          </div>
        </section>

        {/* AppBarBasic */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              2. AppBarBasic
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour les pages liste simples sans dropdown
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Utilise: IconButton (atomic design)
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarBasic
              title="Base de données"
              showAdd
              onAdd={() => console.log("Add clicked")}
              showSearch
              onSearch={() => console.log("Search clicked")}
            />
          </div>
        </section>

        {/* AppBarImport */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              3. AppBarImport
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour les flows d'import avec bouton retour ghost et bouton save
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Utilise: IconButton variant="ghost" pour le bouton retour
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarImport
              title="Import d'une base de données"
              fileName="Nom_du_fichier.csv"
              saveLabel="Enregistrer"
              onBack={() => console.log("Back clicked")}
              onSave={handleSave}
              saving={saving}
            />
          </div>
        </section>

        {/* AppBarFicheClient */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              4. AppBarFicheClient
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour les fiches client avec badges et KPI indicators
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants: IconButton ghost, Badge, 4× KpiIndicator (straight), AiSuggestion
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarFicheClient
              clientName="NOM, Prénom du client"
              tags={["VENDEUR", "ACQUÉREUR"]}
              qualification={64}
              engagement={82}
              conversion={24}
              reactivation={49}
              aiSuggestions={1}
              onBack={() => console.log("Back clicked")}
            />
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Composants utilisés :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <code>IconButton variant="ghost"</code> - Bouton retour (transparent)</li>
              <li>• <code>Badge</code> - Badges VENDEUR, ACQUÉREUR (variant default)</li>
              <li>• <code>KpiIndicator variant="straight"</code> - Qualification (Database icon)</li>
              <li>• <code>KpiIndicator variant="straight"</code> - Engagement (MessageCircle icon)</li>
              <li>• <code>KpiIndicator variant="straight"</code> - Conversion (ScrollText icon)</li>
              <li>• <code>KpiIndicator variant="straight"</code> - Réactivation (Flame icon)</li>
              <li>• <code>AiSuggestion</code> - Badge violet avec nombre de suggestions</li>
            </ul>
          </div>
        </section>

        {/* AppBarClientAncres - Navigation par ancres pour fiche client */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              5. AppBarClientAncres - Navigation par ancres
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Barre de navigation sticky avec ancres pour les sections de la fiche client
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants: Navigation par ancres avec scroll automatique
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarClientAncres />
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Navigation par ancres :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <strong>Profil</strong> - Informations personnelles</li>
              <li>• <strong>Activités</strong> - Historique d'interactions</li>
              <li>• <strong>Affaires</strong> - Projets en cours</li>
              <li>• <strong>Biens</strong> - Propriétés liées</li>
              <li>• <strong>Documents</strong> - Fichiers et contrats</li>
              <li>• <strong>Messages</strong> - Conversations</li>
            </ul>
            <p className="text-xs mt-2" style={{ color: "var(--text-caption)" }}>
              💡 Barre sticky qui reste visible lors du scroll, facilite la navigation dans une fiche client longue
            </p>
          </div>
        </section>

        {/* AppBarBienAncres - Navigation par ancres pour fiche bien */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              5b. AppBarBienAncres - Navigation par ancres (Fiche bien)
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Barre de navigation sticky avec ancres pour les sections de la fiche bien
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants: Navigation par ancres avec scroll automatique
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarBienAncres />
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Navigation par ancres :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <strong>Galerie</strong> - Photos du bien</li>
              <li>• <strong>Caractéristiques</strong> - Détails du bien</li>
              <li>• <strong>Activités</strong> - Historique d'activités</li>
              <li>• <strong>Affaires</strong> - Affaires liées</li>
              <li>• <strong>Annonce</strong> - Information d'annonce</li>
              <li>• <strong>Carnet</strong> - Notes et historique</li>
              <li>• <strong>Documents</strong> - Fichiers et contrats</li>
              <li>• <strong>Messages</strong> - Conversations</li>
            </ul>
            <p className="text-xs mt-2" style={{ color: "var(--text-caption)" }}>
              💡 Barre sticky qui reste visible lors du scroll, facilite la navigation dans une fiche bien longue
            </p>
          </div>
        </section>

        {/* AppBarAffaireAncres - Navigation par ancres pour fiche affaire */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              5c. AppBarAffaireAncres - Navigation par ancres (Fiche affaire)
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Barre de navigation sticky avec ancres pour les sections de la fiche affaire
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants: Navigation par ancres avec scroll automatique
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarAffaireAncres />
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Navigation par ancres :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <strong>Mandat</strong> - Informations du mandat</li>
              <li>• <strong>Activité</strong> - Activités liées</li>
              <li>• <strong>Annonce</strong> - Publication de l'annonce</li>
              <li>• <strong>Leads</strong> - Demandes reçues</li>
              <li>• <strong>Visites</strong> - Visites organisées</li>
              <li>• <strong>Promesse</strong> - Promesses de vente</li>
              <li>• <strong>Finance</strong> - Financement</li>
              <li>• <strong>Notaire</strong> - Actes notariés</li>
              <li>• <strong>CA</strong> - Chiffre d'affaires</li>
              <li>• <strong>Messages</strong> - Conversations</li>
            </ul>
            <p className="text-xs mt-2" style={{ color: "var(--text-caption)" }}>
              💡 Barre sticky qui reste visible lors du scroll, facilite la navigation dans une fiche affaire longue
            </p>
          </div>
        </section>

        {/* AppBarAnnonce */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              6. AppBarAnnonce - Informations de l'annonce
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Barre d'informations pour l'annonce immobilière avec type, surface, orientation, année, ville et prix
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants: Icônes Lucide + Texte Bold 20px + Sticker prix/m²
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarAnnonce
              type="T4"
              surface="82 m²"
              annee="2018"
              ville="Montpellier"
              prix="340 000 €"
              prixM2="1 450€ /m2"
            />
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Composants utilisés :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <code>Building</code> - Icône type de bien</li>
              <li>• <code>Square</code> - Icône surface</li>
              <li>• <code>Compass</code> - Icône orientation (N.E)</li>
              <li>• <code>Clock SVG</code> - Icône année de construction</li>
              <li>• <code>MapPin</code> - Icône ville</li>
              <li>• <code>Tag</code> - Icône prix</li>
              <li>• <code>Sticker</code> - Badge prix au m² avec bordure</li>
            </ul>
          </div>
        </section>

        {/* AppBarFicheBien */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              7. AppBarFicheBien
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour les fiches de biens avec contact, KPI Qualification et badges
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants: IconButton ghost, Badge, Chip Medium, KpiIndicator (straight), AiSuggestion
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarFicheBien
              bienId="identifiant du bien"
              transactionType="À VENDRE"
              contactName="CAPELLO, Jean-François"
              qualification={64}
              showCarnet={true}
              showMandat={true}
              aiSuggestions={1}
              onBack={() => console.log("Back clicked")}
            />
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Composants utilisés :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <code>IconButton variant="ghost"</code> - Bouton retour (transparent)</li>
              <li>• <code>Badge variant="default"</code> - Badge "À VENDRE"</li>
              <li>• <code>Chip size="medium"</code> - Nom client avec icône User</li>
              <li>• <code>KpiIndicator variant="straight"</code> - Qualification (Database icon)</li>
              <li>• <code>Badge variant="success"</code> - Badge "CARNET" (vert)</li>
              <li>• <code>Badge variant="success"</code> - Badge "MANDAT" (vert)</li>
              <li>• <code>AiSuggestion</code> - Badge AI</li>
            </ul>
          </div>
        </section>

        {/* AppBarDetail - Fiche Affaire */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              8. AppBarDetail - Fiche Affaire
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour les fiches d'affaire avec infos du bien immobilier (avec icônes)
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants atomiques: IconButton ghost, Badge, 4× Chip Medium avec icônes (Home, Maximize2, MapPin, Tag)
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarDetail
              title="identifiant de l'affaire"
              onBack={() => console.log("Back clicked")}
              badges={[{ label: "VENTE", variant: "default" }]}
              aiSuggestions={1}
              gap="lg"
            >
              {/* Chip Medium type de bien avec icône Home */}
              <Chip size="medium" icon={<Home size={20} />}>T4</Chip>

              {/* Chip Medium surface avec icône Maximize2 */}
              <Chip size="medium" icon={<Maximize2 size={20} />}>84 m²</Chip>

              {/* Chip Medium ville avec icône MapPin */}
              <Chip size="medium" icon={<MapPin size={20} />}>Charleville-Mézière</Chip>

              {/* Chip Medium prix avec icône Tag */}
              <Chip size="medium" icon={<Tag size={20} />}>360 000€</Chip>
            </AppBarDetail>
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Composants atomiques utilisés :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <code>IconButton variant="ghost"</code> - Bouton retour</li>
              <li>• <code>Badge</code> - Badge "VENTE" (variant default)</li>
              <li>• <code>Chip size="medium" icon=&lt;Home /&gt;</code> - Type de bien (T4)</li>
              <li>• <code>Chip size="medium" icon=&lt;Maximize2 /&gt;</code> - Surface (84 m²)</li>
              <li>• <code>Chip size="medium" icon=&lt;MapPin /&gt;</code> - Ville (Charleville-Mézière)</li>
              <li>• <code>Chip size="medium" icon=&lt;Tag /&gt;</code> - Prix (360 000€)</li>
              <li>• <code>AiSuggestion</code> - Badge AI</li>
            </ul>
          </div>
        </section>

        {/* AppBarDetail - Messagerie */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              9. AppBarDetail - Messagerie
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour la messagerie avec contact, KPI engagement et events
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants atomiques: Chip Medium, KpiIndicator Straight, AppBarEventQuinte, ChipDate, IconButton Close
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarDetail
              title="Messages"
              hideBack={true}
              gap="lg"
              onClose={() => console.log("Close clicked")}
            >
              {/* Chip Medium nom client */}
              <Chip size="medium" icon={<User size={20} />}>
                CAPELLO, Jean-François
              </Chip>

              {/* Groupe KpiIndicator + Events + Date */}
              <div className="flex items-center gap-[24px]">
                {/* KpiIndicator Straight Engagement */}
                <KpiIndicator
                  icon={<MessageCircle size={20} />}
                  value="82%"
                  percentage={82}
                  variant="straight"
                />

                {/* 5 MessageStatusDot */}
                <AppBarEventQuinte
                  statuses={["success", "success", "fail", "none", "none"]}
                />

                {/* ChipDate */}
                <ChipDate icon={<Calendar size={20} />}>280 j</ChipDate>
              </div>
            </AppBarDetail>
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Composants atomiques utilisés :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <code>IconButton variant="ghost"</code> - Bouton retour</li>
              <li>• <code>Chip size="medium"</code> - Nom client avec icône User</li>
              <li>• <code>ChipScoreAuto</code> - Scoring client (50)</li>
              <li>• <code>AppBarEventQuinte</code> - 5× MessageStatusDot avec gap 8px</li>
              <li>• <code>ChipDate</code> - Date avec icône Calendar</li>
            </ul>
          </div>
        </section>

        {/* AppBarDetail - Document */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              10. AppBarDetail - Fiche Document
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Pour les documents avec statut, contact, ID affaire et date
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--text-body)" }}>
              Composants atomiques: IconButton ghost, Badge warning, Chip Medium, ChipId, ChipDate
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <AppBarDetail
              title="Nom du document"
              onBack={() => console.log("Back clicked")}
              badges={[{ label: "EN ATTENTE", variant: "warning" }]}
              gap="lg"
            >
              {/* Chip Medium nom client */}
              <Chip size="medium" icon={<User size={20} />}>
                NOM, prénom
              </Chip>

              {/* ChipId pour l'ID affaire */}
              <ChipId>55679201</ChipId>

              {/* ChipDate */}
              <ChipDate icon={<Calendar size={20} />}>03 jan. 2027</ChipDate>
            </AppBarDetail>
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Composants atomiques utilisés :
            </p>
            <ul className="text-xs space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• <code>IconButton variant="ghost"</code> - Bouton retour</li>
              <li>• <code>Badge variant="warning"</code> - Badge "EN ATTENTE"</li>
              <li>• <code>Chip size="medium"</code> - Nom client avec icône User</li>
              <li>• <code>ChipId</code> - ID affaire (font regular, sans icône)</li>
              <li>• <code>ChipDate</code> - Date avec icône Calendar (gap 8px)</li>
            </ul>
          </div>
        </section>

        {/* Atomic Design Summary */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            🧬 Atomic Design - Composants utilisés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ⚛️ Atomes
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>IconButton variant="ghost"</strong> - Transparent (light & dark)</li>
                <li>• <strong>Badge</strong> - Labels de statut colorés</li>
                <li>• <strong>Chip</strong> - Texte + icône (size medium/small)</li>
                <li>• <strong>ChipDate</strong> - Date avec icône (gap 8px)</li>
                <li>• <strong>ChipId</strong> - ID sans icône (font regular)</li>
                <li>• <strong>ChipScore</strong> - Scoring avec jauge</li>
                <li>• <strong>ChipScoreAuto</strong> - Scoring auto-calculé</li>
                <li>• <strong>MessageStatusDot</strong> - Point de statut coloré</li>
                <li>• <strong>AiSuggestion</strong> - Badge AI violet</li>
                <li>• <strong>DropdownButton ghost</strong> - Dropdown sans shadow</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🧩 Molécules & Organismes
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>AppBarEventQuinte</strong> - 5× MessageStatusDot</li>
                <li>• <strong>AppBarCategory</strong> - Titre + dropdown + actions</li>
                <li>• <strong>AppBarBasic</strong> - Titre + actions</li>
                <li>• <strong>AppBarImport</strong> - Back + titre + save</li>
                <li>• <strong>AppBarDetail</strong> - Fiches avec métadonnées</li>
                <li>• <strong>AppBarAnnonce</strong> - Informations annonce immobilière</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 IconButton Ghost
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>Light mode:</strong> Transparent bg, #444955 text</li>
                <li>• <strong>Dark mode:</strong> Transparent bg, #444955 text</li>
                <li>• <strong>Hover:</strong> #dadbdd background</li>
                <li>• <strong>Usage:</strong> Boutons retour, actions secondaires</li>
                <li>• <strong>Avantage:</strong> Meilleur rendu en dark mode</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                📦 Lucide Icons utilisées
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>User</strong> - Contact, nom client</li>
                <li>• <strong>Calendar</strong> - Dates, durées</li>
                <li>• <strong>Home</strong> - Type de bien</li>
                <li>• <strong>Maximize2</strong> - Surface</li>
                <li>• <strong>Compass</strong> - Orientation (N.E, S.O, etc.)</li>
                <li>• <strong>MapPin</strong> - Ville, localisation</li>
                <li>• <strong>Tag</strong> - Prix</li>
                <li>• <strong>Badge Success</strong> - Statuts DATA, CARNET, MANDAT, ANNONCE</li>
                <li>• <strong>MessageSquare, Mail, DoorOpen, Heart, etc.</strong> - Métriques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Caractéristiques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ✨ Fonctionnalités
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• 5 variantes adaptées aux besoins</li>
                <li>• Bouton retour ghost (transparent)</li>
                <li>• Badges de statut colorés</li>
                <li>• Support suggestions AI</li>
                <li>• Composants atomiques réutilisables</li>
                <li>• Gap configurable (8px, 24px, 40px)</li>
                <li>• DropdownButton ghost avec chevron rotatif</li>
                <li>• Métriques d'affaire complètes</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 Design Tokens
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• --surface-neutral-default (background)</li>
                <li>• --text-headings (titre)</li>
                <li>• --text-body (texte)</li>
                <li>• --icon-neutral-default (icônes)</li>
                <li>• --surface-branded-default (bouton save)</li>
                <li>• --surface-neutral-action (bouton hover)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                📏 Gaps utilisés
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>8px</strong> - AppBarCategory (entre titre et dropdown)</li>
                <li>• <strong>24px</strong> - AppBarDetail (entre métadonnées)</li>
                <li>• <strong>40px</strong> - AppBarDetail Metrics (entre métriques)</li>
                <li>• <strong>4px</strong> - Chip standard (icône-texte)</li>
                <li>• <strong>8px</strong> - ChipDate, AppBarEventQuinte</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ♿ Accessibilité
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Bouton retour avec aria-label</li>
                <li>• Titres sémantiques (h4)</li>
                <li>• États disabled gérés</li>
                <li>• Contraste colors conforme WCAG AA</li>
                <li>• Navigation clavier complète</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}