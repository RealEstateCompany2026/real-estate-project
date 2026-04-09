import { AppBar, AppBarAction, AppBarChip } from "../components/AppBar";
import { Card, CardHeader, CardSection } from "../components/Card";
import { Button, IconButton, IconButtonMega, SendingIconButton, ButtonMultiLabel, ButtonMultiLabelControlled, ButtonPagination, ButtonPaginationMini, ButtonSort, useSortState, Chip, ChipDate, ChipId, ChipScore, ChipScoreAuto, ChipTrend, MessageStatusDot, Badge as AtomBadge, BadgeCriteria } from "../components/atoms";
import type { SendingStatus } from "../components/atoms";
import { PlusIcon } from "../components/atoms/icons";
import {
  Badge,
  StatusBadge,
  ClientTypeBadge,
  DealTypeBadge,
} from "../components/Badge";
import { Search, Plus, Edit, Trash2, Info, X, Home, ArrowDown, Calendar } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";

/**
 * PaginationDemo - Composant de démonstration pour la pagination
 */
function PaginationDemo() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="space-y-[16px]">
      {/* Info */}
      <div className="flex items-center justify-between p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
        <p style={{ color: "var(--text-body)" }}>
          <strong>Page {page}</strong> sur {totalPages}
        </p>
        <div className="flex gap-[12px]">
          <ButtonPagination
            onPrevious={() => setPage(p => Math.max(1, p - 1))}
            onNext={() => setPage(p => Math.min(totalPages, p + 1))}
            canGoPrevious={page > 1}
            canGoNext={page < totalPages}
            variant="light"
          />
        </div>
      </div>

      {/* Content simulation */}
      <div className="p-[24px] rounded-[12px] border border-solid" style={{ borderColor: "var(--border-neutral-default)", minHeight: "120px" }}>
        <h6 className="mb-[8px]" style={{ color: "var(--text-headings)" }}>
          Contenu de la page {page}
        </h6>
        <p style={{ color: "var(--text-body)" }}>
          Ceci est le contenu simulé de la page {page}. Utilisez les boutons de pagination ci-dessus pour naviguer.
        </p>
      </div>

      {/* Mini variant */}
      <div className="flex items-center justify-between">
        <p className="text-sm" style={{ color: "var(--text-caption)" }}>Variante mini :</p>
        <ButtonPaginationMini
          onPrevious={() => setPage(p => Math.max(1, p - 1))}
          onNext={() => setPage(p => Math.min(totalPages, p + 1))}
          canGoPrevious={page > 1}
          canGoNext={page < totalPages}
        />
      </div>
    </div>
  );
}

/**
 * SortDemo - Composant de démonstration pour le tri
 */
function SortDemo() {
  const { sortBy, sortDirection, handleSort } = useSortState();

  return (
    <div className="space-y-[16px]">
      <div className="flex flex-wrap gap-[12px]">
        <ButtonSort 
          label="Clients"
          count={482}
          sortDirection={sortBy === "clients" ? sortDirection : "none"}
          onClick={() => handleSort("clients")}
        />
        <ButtonSort 
          label="Date"
          sortDirection={sortBy === "date" ? sortDirection : "none"}
          onClick={() => handleSort("date")}
        />
        <ButtonSort 
          label="Prix"
          count={156}
          sortDirection={sortBy === "price" ? sortDirection : "none"}
          onClick={() => handleSort("price")}
        />
        <ButtonSort 
          label="Statut"
          sortDirection={sortBy === "status" ? sortDirection : "none"}
          onClick={() => handleSort("status")}
        />
      </div>
      <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-action)" }}>
        <p style={{ color: "var(--text-body)" }}>
          <strong>État actuel :</strong> {sortBy ? `Tri par "${sortBy}" (${sortDirection})` : "Aucun tri actif"}
        </p>
        <p className="text-sm mt-[4px]" style={{ color: "var(--text-caption)" }}>
          Cliquez sur un bouton pour activer le tri. Re-cliquez pour inverser, puis une 3e fois pour désactiver.
        </p>
      </div>
    </div>
  );
}

/**
 * Dashboard page (P02-DASH-01)
 * Main dashboard with metrics, recent activity, and quick actions
 * 
 * This is a demonstration page showing all base components
 */
export default function Dashboard() {
  const [sendingStatus, setSendingStatus] = useState<SendingStatus>("idle");
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-full">
      {/* AppBar with filters and actions */}
      <AppBar title="Tableau de bord">
        <AppBarChip label="Tous" active />
        <AppBarChip label="Clients" />
        <AppBarChip label="Biens" />
        <AppBarAction icon="search" />
        <AppBarAction icon="add" variant="branded">
          Nouveau
        </AppBarAction>
      </AppBar>

      {/* Main content */}
      <div className="flex-1 p-[24px] overflow-auto">
        <div className="max-w-[1200px] mx-auto space-y-[24px]">
          {/* Welcome card */}
          <Card radius="lg" padding="lg">
            <div className="flex items-center justify-between mb-[16px]">
              <div>
                <CardHeader
                  title="RealAgent Design System"
                  subtitle="Design tokens avec support Light/Dark Mode"
                />
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="text-sm font-semibold" style={{ color: "var(--text-caption)" }}>
                  Mode actuel: <strong style={{ color: "var(--text-headings)" }}>{theme === "light" ? "☀️ Light" : "🌙 Dark"}</strong>
                </span>
                <ThemeToggle variant="button" />
              </div>
            </div>
            <p style={{ color: "var(--text-body)" }}>
              Tous les composants utilisent les design tokens du fichier theme.css qui s'adaptent automatiquement au thème.
            </p>
            
            {/* Quick Links to Demo Pages */}
            <div className="mt-[16px] flex gap-[12px] flex-wrap">
              <a 
                href="/button-demo" 
                className="px-[16px] py-[8px] rounded-[12px] text-sm font-semibold transition-all hover:scale-105"
                style={{ 
                  background: "var(--surface-branded-default)", 
                  color: "#ffffff",
                  textDecoration: "none"
                }}
              >
                📱 Button Demo
              </a>
              <a 
                href="/atoms-demo" 
                className="px-[16px] py-[8px] rounded-[12px] text-sm font-semibold transition-all hover:scale-105"
                style={{ 
                  background: "var(--surface-branded-default)", 
                  color: "#ffffff",
                  textDecoration: "none"
                }}
              >
                ⚛️ Atoms Demo
              </a>
              <a 
                href="/date-picker-demo" 
                className="px-[16px] py-[8px] rounded-[12px] text-sm font-semibold transition-all hover:scale-105"
                style={{ 
                  background: "var(--surface-branded-default)", 
                  color: "#ffffff",
                  textDecoration: "none"
                }}
              >
                📅 Date Picker Demo
              </a>
              <a 
                href="/search-demo" 
                className="px-[16px] py-[8px] rounded-[12px] text-sm font-semibold transition-all hover:scale-105"
                style={{ 
                  background: "var(--surface-branded-default)", 
                  color: "#ffffff",
                  textDecoration: "none"
                }}
              >
                🔍 Search Demo
              </a>
              <a 
                href="/app-bars-demo" 
                className="px-[16px] py-[8px] rounded-[12px] text-sm font-semibold transition-all hover:scale-105"
                style={{ 
                  background: "var(--surface-branded-default)", 
                  color: "#ffffff",
                  textDecoration: "none"
                }}
              >
                📊 AppBars Demo
              </a>
            </div>
          </Card>

          {/* Dark Mode Demo Card */}
          <Card radius="lg">
            <CardHeader 
              title="🎨 Light/Dark Mode - Design Tokens" 
              subtitle="Système de thème basé sur CSS variables avec support complet des deux modes" 
            />

            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Toggle de thème
              </h6>
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[16px]">
                  <ThemeToggle variant="icon" />
                  <ThemeToggle variant="button" />
                </div>
                <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-action)" }}>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-body)" }}>
                    <strong>Code d'usage :</strong>
                  </p>
                  <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`import { useTheme } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <>
      <p>Thème actuel: {theme}</p>
      <ThemeToggle variant="icon" />
      <ThemeToggle variant="button" />
    </>
  );
}`}
                  </pre>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Design Tokens - Mapping automatique
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div className="p-[16px] rounded-[12px] border" style={{ borderColor: "var(--border-neutral-default)" }}>
                  <h6 className="mb-[12px]" style={{ color: "var(--text-headings)", fontSize: "16px" }}>
                    Couleurs Surfaces
                  </h6>
                  <div className="space-y-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--surface-page)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--surface-page</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--surface-neutral-default)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--surface-neutral-default</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--surface-neutral-action)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--surface-neutral-action</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--surface-branded-default)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--surface-branded-default</span>
                    </div>
                  </div>
                </div>

                <div className="p-[16px] rounded-[12px] border" style={{ borderColor: "var(--border-neutral-default)" }}>
                  <h6 className="mb-[12px]" style={{ color: "var(--text-headings)", fontSize: "16px" }}>
                    Couleurs Texte
                  </h6>
                  <div className="space-y-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--text-headings)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--text-headings</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--text-body)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--text-body</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--text-caption)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--text-caption</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--text-branded-action)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--text-branded-action</span>
                    </div>
                  </div>
                </div>

                <div className="p-[16px] rounded-[12px] border" style={{ borderColor: "var(--border-neutral-default)" }}>
                  <h6 className="mb-[12px]" style={{ color: "var(--text-headings)", fontSize: "16px" }}>
                    Couleurs Icônes
                  </h6>
                  <div className="space-y-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--icon-neutral-default)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--icon-neutral-default</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--icon-branded-default)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--icon-branded-default</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--icon-success)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--icon-success</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded" style={{ background: "var(--icon-error)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--icon-error</span>
                    </div>
                  </div>
                </div>

                <div className="p-[16px] rounded-[12px] border" style={{ borderColor: "var(--border-neutral-default)" }}>
                  <h6 className="mb-[12px]" style={{ color: "var(--text-headings)", fontSize: "16px" }}>
                    Couleurs Bordures
                  </h6>
                  <div className="space-y-[8px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded border-2" style={{ borderColor: "var(--border-neutral-default)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--border-neutral-default</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded border-2" style={{ borderColor: "var(--border-branded-default)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--border-branded-default</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded border-2" style={{ borderColor: "var(--border-success)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--border-success</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="w-[24px] h-[24px] rounded border-2" style={{ borderColor: "var(--border-error)" }} />
                      <span className="text-sm" style={{ color: "var(--text-body)" }}>--border-error</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Comment créer des composants avec dark mode
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-action)" }}>
                <p className="text-sm mb-[12px]" style={{ color: "var(--text-body)" }}>
                  <strong>✅ BON :</strong> Utilisez les tokens CSS (s'adaptent automatiquement)
                </p>
                <pre className="text-xs mb-[16px] p-[12px] rounded" style={{ background: "var(--surface-page)", color: "var(--text-body)" }}>
{`// ✅ Utilise les tokens - s'adapte au thème
<div style={{ 
  background: "var(--surface-neutral-default)",
  color: "var(--text-body)",
  border: "1px solid var(--border-neutral-default)"
}}>
  Contenu adaptatif
</div>`}
                </pre>

                <p className="text-sm mb-[12px]" style={{ color: "var(--text-body)" }}>
                  <strong>❌ MAUVAIS :</strong> Couleurs hardcodées (ne s'adaptent pas)
                </p>
                <pre className="text-xs p-[12px] rounded" style={{ background: "var(--surface-page)", color: "var(--text-body)" }}>
{`// ❌ Hardcodé - reste blanc même en dark mode
<div style={{ 
  background: "#ffffff",
  color: "#444955",
  border: "1px solid #dadbdd"
}}>
  Contenu fixe
</div>`}
                </pre>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Liste complète des tokens disponibles
              </h6>
              <div className="grid grid-cols-3 gap-[8px] text-xs" style={{ color: "var(--text-caption)" }}>
                <div>
                  <strong style={{ color: "var(--text-body)" }}>Surface</strong>
                  <ul className="mt-[4px] space-y-[2px]">
                    <li>--surface-page</li>
                    <li>--surface-neutral-default</li>
                    <li>--surface-neutral-action</li>
                    <li>--surface-neutral-action-hover</li>
                    <li>--surface-branded-default</li>
                    <li>--surface-branded-action</li>
                    <li>--surface-disabled</li>
                    <li>--surface-success</li>
                    <li>--surface-error</li>
                    <li>--surface-information</li>
                    <li>--surface-warning</li>
                  </ul>
                </div>
                <div>
                  <strong style={{ color: "var(--text-body)" }}>Text</strong>
                  <ul className="mt-[4px] space-y-[2px]">
                    <li>--text-hero</li>
                    <li>--text-headings</li>
                    <li>--text-body</li>
                    <li>--text-caption</li>
                    <li>--text-placeholder</li>
                    <li>--text-neutral-action</li>
                    <li>--text-branded-action</li>
                    <li>--text-disabled</li>
                    <li>--text-success</li>
                    <li>--text-error</li>
                    <li>--text-information</li>
                    <li>--text-warning</li>
                  </ul>
                </div>
                <div>
                  <strong style={{ color: "var(--text-body)" }}>Icon & Border</strong>
                  <ul className="mt-[4px] space-y-[2px]">
                    <li>--icon-neutral-default</li>
                    <li>--icon-branded-default</li>
                    <li>--icon-success</li>
                    <li>--icon-error</li>
                    <li>--icon-information</li>
                    <li>--icon-warning</li>
                    <li>--border-neutral-default</li>
                    <li>--border-branded-default</li>
                    <li>--border-success</li>
                    <li>--border-error</li>
                    <li>--border-information</li>
                    <li>--border-warning</li>
                  </ul>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Fonctionnement technique
              </h6>
              <ul className="space-y-[8px]" style={{ color: "var(--text-body)" }}>
                <li>✓ <strong>ThemeProvider</strong> : Ajoute/enlève la classe <code className="px-2 py-1 rounded" style={{ background: "var(--surface-neutral-action)", fontSize: "12px" }}>.dark</code> sur <code className="px-2 py-1 rounded" style={{ background: "var(--surface-neutral-action)", fontSize: "12px" }}>&lt;html&gt;</code></li>
                <li>✓ <strong>LocalStorage</strong> : Sauvegarde le choix de l'utilisateur (persiste entre sessions)</li>
                <li>✓ <strong>CSS Variables</strong> : Les tokens changent automatiquement via <code className="px-2 py-1 rounded" style={{ background: "var(--surface-neutral-action)", fontSize: "12px" }}>.dark {}</code> dans theme.css</li>
                <li>✓ <strong>Hook useTheme()</strong> : Accède au thème et permet de le changer programmatiquement</li>
              </ul>
            </CardSection>
          </Card>

          {/* Design System Demo */}
          <Card radius="lg">
            <CardHeader title="Button - Composant principal avec texte" />

            {/* Primary Buttons */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Branded (Violet)
              </h6>
              <div className="flex flex-wrap gap-[12px]">
                <Button variant="branded">Action principale</Button>
                <Button variant="branded" iconLeft={<PlusIcon color="white" />}>
                  Avec icône gauche
                </Button>
                <Button variant="branded" iconRight={<PlusIcon color="white" />}>
                  Avec icône droite
                </Button>
                <Button variant="branded" disabled>
                  Désactivé
                </Button>
              </div>
            </CardSection>

            {/* Neutral Buttons */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Neutral (White background)
              </h6>
              <div className="flex flex-wrap gap-[12px]">
                <Button variant="neutral">Action neutre</Button>
                <Button variant="neutral" iconLeft={<Info className="w-[20px] h-[20px]" />}>
                  Avec icône
                </Button>
                <Button variant="neutral" disabled>
                  Désactivé
                </Button>
              </div>
            </CardSection>

            {/* Outlined Buttons */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Outlined (With border)
              </h6>
              <div className="flex flex-wrap gap-[12px]">
                <Button variant="outlined">Avec bordure</Button>
                <Button variant="outlined" iconLeft={<Edit className="w-[20px] h-[20px]" />}>
                  Éditer
                </Button>
                <Button variant="outlined" disabled>
                  Désactivé
                </Button>
              </div>
            </CardSection>

            {/* Ghost Buttons */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Ghost (Transparent)
              </h6>
              <div className="flex flex-wrap gap-[12px]">
                <Button variant="ghost">Action discrète</Button>
                <Button variant="ghost" iconLeft={<Edit className="w-[20px] h-[20px]" />}>
                  Éditer
                </Button>
                <Button variant="ghost" disabled>
                  Désactivé
                </Button>
              </div>
            </CardSection>
          </Card>

          {/* IconButtons demo */}
          <Card radius="lg">
            <CardHeader title="IconButton - Bouton icône uniquement" />

            {/* Standard size (md) */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Taille Standard (44×44px)
              </h6>
              <div className="flex gap-[12px]">
                <IconButton 
                  variant="branded" 
                  icon={<PlusIcon color="white" />} 
                  title="Branded" 
                />
                <IconButton
                  variant="neutral"
                  icon={<Search className="w-[20px] h-[20px]" />}
                  title="Neutral"
                />
                <IconButton
                  variant="outlined"
                  icon={<Edit className="w-[20px] h-[20px]" />}
                  title="Outlined"
                />
                <IconButton
                  variant="ghost"
                  icon={<Trash2 className="w-[20px] h-[20px]" />}
                  title="Ghost"
                />
                <IconButton
                  disabled
                  icon={<Plus className="w-[20px] h-[20px]" />}
                  title="Disabled"
                />
              </div>
            </CardSection>

            {/* Small size */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Taille Small (32×32px)
              </h6>
              <div className="flex gap-[12px]">
                <IconButton 
                  size="sm"
                  variant="branded" 
                  icon={<PlusIcon color="white" />} 
                  title="Small Branded" 
                />
                <IconButton
                  size="sm"
                  variant="neutral"
                  icon={<Search className="w-[16px] h-[16px]" />}
                  title="Small Neutral"
                />
                <IconButton
                  size="sm"
                  variant="ghost"
                  icon={<Edit className="w-[16px] h-[16px]" />}
                  title="Small Ghost"
                />
              </div>
            </CardSection>

            {/* Large size */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Taille Large (56×56px)
              </h6>
              <div className="flex gap-[12px]">
                <IconButton 
                  size="lg"
                  variant="branded" 
                  icon={<PlusIcon color="white" />} 
                  title="Large Branded" 
                />
                <IconButton
                  size="lg"
                  variant="outlined"
                  icon={<Search className="w-[24px] h-[24px]" />}
                  title="Large Outlined"
                />
                <IconButton
                  size="lg"
                  variant="ghost"
                  icon={<Trash2 className="w-[24px] h-[24px]" />}
                  title="Large Ghost"
                />
              </div>
            </CardSection>
          </Card>

          {/* IconButtonMega demo */}
          <Card radius="lg">
            <CardHeader title="IconButtonMega - Bouton icône extra large (70×70px)" subtitle="Variante mega avec icône 24px et border-radius 28px" />

            {/* All variants */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Toutes les variantes (70×70px)
              </h6>
              <div className="flex gap-[16px] items-center">
                <IconButtonMega 
                  variant="primary" 
                  icon={<X className="w-[24px] h-[24px]" />} 
                  title="Primary Mega" 
                />
                <IconButtonMega
                  variant="secondary"
                  icon={<Search className="w-[24px] h-[24px]" />}
                  title="Secondary Mega"
                />
                <IconButtonMega
                  variant="secondary"
                  outlined
                  icon={<Edit className="w-[24px] h-[24px]" />}
                  title="Secondary Outlined Mega"
                />
                <IconButtonMega
                  variant="ghost"
                  icon={<Trash2 className="w-[24px] h-[24px]" />}
                  title="Ghost Mega"
                />
                <IconButtonMega
                  disabled
                  icon={<Plus className="w-[24px] h-[24px]" />}
                  title="Disabled Mega"
                />
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Comparaison de tailles
              </h6>
              <div className="flex gap-[16px] items-center">
                <div className="flex flex-col items-center gap-[8px]">
                  <IconButton 
                    size="sm"
                    variant="primary" 
                    icon={<PlusIcon color="white" />} 
                    title="32×32px" 
                  />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>32px</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <IconButton 
                    variant="primary" 
                    icon={<PlusIcon color="white" />} 
                    title="44×44px" 
                  />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>44px</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <IconButton 
                    size="lg"
                    variant="primary" 
                    icon={<PlusIcon color="white" />} 
                    title="56×56px" 
                  />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>56px</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <IconButtonMega 
                    variant="primary" 
                    icon={<X className="w-[24px] h-[24px]" />} 
                    title="70×70px Mega" 
                  />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>70px MEGA</span>
                </div>
              </div>
            </CardSection>
          </Card>

          {/* SendingIconButton demo */}
          <Card radius="lg">
            <CardHeader 
              title="SendingIconButton - Bouton d'envoi avec feedback visuel (46×46px)" 
              subtitle="Bouton spécial qui change d'apparence après l'envoi (violet → vert avec check)" 
            />

            {/* All states */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Tous les états (46×46px)
              </h6>
              <div className="flex gap-[16px] items-center">
                <div className="flex flex-col items-center gap-[8px]">
                  <SendingIconButton status="idle" title="Prêt à envoyer" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>idle</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <SendingIconButton status="sending" title="Envoi en cours" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>sending</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <SendingIconButton status="sent" title="Envoyé avec succès" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>sent ✓</span>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Démo interactive
              </h6>
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[16px]">
                  <SendingIconButton 
                    status={sendingStatus}
                    onClick={() => {
                      setSendingStatus("sending");
                      setTimeout(() => {
                        setSendingStatus("sent");
                        setTimeout(() => setSendingStatus("idle"), 2000);
                      }, 1500);
                    }}
                  />
                  <div className="flex flex-col gap-[4px]">
                    <p style={{ color: "var(--text-body)" }}>
                      <strong>État actuel :</strong> {sendingStatus}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                      Cliquez pour simuler un envoi (idle → sending → sent → idle)
                    </p>
                  </div>
                </div>

                <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-body)" }}>
                    <strong>Code d'usage :</strong>
                  </p>
                  <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`const [status, setStatus] = useState<SendingStatus>("idle");

<SendingIconButton 
  status={status}
  onClick={async () => {
    setStatus("sending");
    await sendMessage();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2000);
  }}
/>`}
                  </pre>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Spécifications
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Taille</p>
                  <p style={{ color: "var(--text-body)" }}>46×46px (fixe)</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Border-radius</p>
                  <p style={{ color: "var(--text-body)" }}>16px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Icône</p>
                  <p style={{ color: "var(--text-body)" }}>20×20px (Send/Check)</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Padding</p>
                  <p style={{ color: "var(--text-body)" }}>12px</p>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                États et couleurs
              </h6>
              <div className="space-y-[12px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[32px] h-[32px] rounded-[8px]" style={{ background: "#7b72f9" }} />
                  <div>
                    <p style={{ color: "var(--text-body)" }}><strong>idle</strong> - Violet #7b72f9</p>
                    <p className="text-sm" style={{ color: "var(--text-caption)" }}>Prêt à envoyer (icône Send)</p>
                  </div>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="w-[32px] h-[32px] rounded-[8px]" style={{ background: "#635cc7" }} />
                  <div>
                    <p style={{ color: "var(--text-body)" }}><strong>sending</strong> - Violet hover #635cc7</p>
                    <p className="text-sm" style={{ color: "var(--text-caption)" }}>En cours d'envoi (icône Send, disabled)</p>
                  </div>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="w-[32px] h-[32px] rounded-[8px]" style={{ background: "#0da500" }} />
                  <div>
                    <p style={{ color: "var(--text-body)" }}><strong>sent</strong> - Vert #0da500</p>
                    <p className="text-sm" style={{ color: "var(--text-caption)" }}>Envoyé avec succès (icône Check)</p>
                  </div>
                </div>
              </div>
            </CardSection>
          </Card>

          {/* ButtonMultiLabel demo */}
          <Card radius="lg">
            <CardHeader 
              title="ButtonMultiLabel - Segmented Control" 
              subtitle="Groupe de boutons radio-like avec une seule option sélectionnable" 
            />

            {/* Basic usage */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Usage basique (3 options)
              </h6>
              <ButtonMultiLabelControlled
                options={["Option 1", "Option 2", "Option 3"]}
                defaultValue="Option 1"
              />
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Différents nombres d'options
              </h6>
              <div className="space-y-[16px]">
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>2 options</p>
                  <ButtonMultiLabelControlled
                    options={["Oui", "Non"]}
                    defaultValue="Oui"
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>4 options</p>
                  <ButtonMultiLabelControlled
                    options={["Jour", "Semaine", "Mois", "Année"]}
                    defaultValue="Semaine"
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>5 options</p>
                  <ButtonMultiLabelControlled
                    options={["Tous", "Clients", "Biens", "Deals", "Tâches"]}
                    defaultValue="Tous"
                  />
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Full width
              </h6>
              <ButtonMultiLabelControlled
                options={["Liste", "Grille", "Tableau"]}
                defaultValue="Liste"
                fullWidth
              />
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Cas d'usage réels
              </h6>
              <div className="space-y-[16px]">
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>
                    Filtre de type de bien
                  </p>
                  <ButtonMultiLabelControlled
                    options={["Appartement", "Maison", "Terrain", "Commercial"]}
                    defaultValue="Appartement"
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>
                    Statut de deal
                  </p>
                  <ButtonMultiLabelControlled
                    options={["En cours", "Gagné", "Perdu", "Archivé"]}
                    defaultValue="En cours"
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>
                    Type de client
                  </p>
                  <ButtonMultiLabelControlled
                    options={["Vendeur", "Acquéreur", "Locataire", "Propriétaire"]}
                    defaultValue="Vendeur"
                  />
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Code d'usage
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
                <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`// Version contrôlée (avec state)
const [view, setView] = useState("Liste");

<ButtonMultiLabel 
  options={["Liste", "Grille", "Tableau"]}
  value={view}
  onChange={setView}
/>

// Version non contrôlée (pour prototypage rapide)
<ButtonMultiLabelControlled
  options={["Option 1", "Option 2", "Option 3"]}
  defaultValue="Option 1"
  onValueChange={(value) => console.log(value)}
/>`}
                </pre>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Spécifications Figma
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Border-radius</p>
                  <p style={{ color: "var(--text-body)" }}>20px (coins externes)</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Padding</p>
                  <p style={{ color: "var(--text-body)" }}>6px (par bouton)</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Font - Selected</p>
                  <p style={{ color: "var(--text-body)" }}>Roboto Bold 16px/20px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Font - Unselected</p>
                  <p style={{ color: "var(--text-body)" }}>Roboto SemiBold 16px/20px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Background - Selected</p>
                  <p style={{ color: "var(--text-body)" }}>#dadbdd (gris clair)</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Background - Unselected</p>
                  <p style={{ color: "var(--text-body)" }}>#ffffff (blanc)</p>
                </div>
              </div>
            </CardSection>
          </Card>

          {/* ButtonPagination demo */}
          <Card radius="lg">
            <CardHeader 
              title="ButtonPagination - Navigation Previous/Next" 
              subtitle="Contrôles de pagination avec variantes standard et mini" 
            />

            {/* Standard ButtonPagination */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Version Standard (117×54px)
              </h6>
              <div className="space-y-[16px]">
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>Light mode (default)</p>
                  <ButtonPagination
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Next")}
                    canGoPrevious={true}
                    canGoNext={true}
                    variant="light"
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>Dark mode</p>
                  <ButtonPagination
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Next")}
                    canGoPrevious={true}
                    canGoNext={true}
                    variant="dark"
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>État désactivé (première page)</p>
                  <ButtonPagination
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Next")}
                    canGoPrevious={false}
                    canGoNext={true}
                    variant="light"
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>État désactivé (dernière page)</p>
                  <ButtonPagination
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Next")}
                    canGoPrevious={true}
                    canGoNext={false}
                    variant="light"
                  />
                </div>
              </div>
            </CardSection>

            {/* Mini variant */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Version Mini (48×24px)
              </h6>
              <div className="space-y-[16px]">
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>Icônes uniquement</p>
                  <ButtonPaginationMini
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Next")}
                    canGoPrevious={true}
                    canGoNext={true}
                  />
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>État désactivé (première page)</p>
                  <ButtonPaginationMini
                    onPrevious={() => console.log("Previous")}
                    onNext={() => console.log("Next")}
                    canGoPrevious={false}
                    canGoNext={true}
                  />
                </div>
              </div>
            </CardSection>

            {/* Interactive demo */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Démo interactive avec pagination
              </h6>
              <PaginationDemo />
            </CardSection>

            {/* Code usage */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Code d'usage
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
                <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`// Pagination standard
const [page, setPage] = useState(1);
const totalPages = 10;

<ButtonPagination 
  onPrevious={() => setPage(p => p - 1)}
  onNext={() => setPage(p => p + 1)}
  canGoPrevious={page > 1}
  canGoNext={page < totalPages}
  variant="light"
/>

// Pagination mini (icônes uniquement)
<ButtonPaginationMini 
  onPrevious={() => setPage(p => p - 1)}
  onNext={() => setPage(p => p + 1)}
  canGoPrevious={page > 1}
  canGoNext={page < totalPages}
/>`}
                </pre>
              </div>
            </CardSection>

            {/* Specs */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Spécifications Figma
              </h6>
              <div className="space-y-[16px]">
                <div>
                  <p className="font-semibold mb-[8px]" style={{ color: "var(--text-body)" }}>ButtonPagination (Standard)</p>
                  <div className="grid grid-cols-2 gap-[12px]">
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Taille</p>
                      <p style={{ color: "var(--text-body)" }}>117×54px</p>
                    </div>
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Border-radius</p>
                      <p style={{ color: "var(--text-body)" }}>20px</p>
                    </div>
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Gap</p>
                      <p style={{ color: "var(--text-body)" }}>12px</p>
                    </div>
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Boutons</p>
                      <p style={{ color: "var(--text-body)" }}>2× IconButton 44×44px</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-[8px]" style={{ color: "var(--text-body)" }}>ButtonPaginationMini</p>
                  <div className="grid grid-cols-2 gap-[12px]">
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Taille</p>
                      <p style={{ color: "var(--text-body)" }}>48×24px</p>
                    </div>
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Gap</p>
                      <p style={{ color: "var(--text-body)" }}>12px</p>
                    </div>
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Icônes</p>
                      <p style={{ color: "var(--text-body)" }}>24×24px</p>
                    </div>
                    <div>
                      <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Stroke</p>
                      <p style={{ color: "var(--text-body)" }}>#444955</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardSection>

            {/* Comparison */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Comparaison Standard vs Mini
              </h6>
              <div className="flex items-center gap-[32px]">
                <div className="flex flex-col items-center gap-[12px]">
                  <ButtonPagination
                    onPrevious={() => {}}
                    onNext={() => {}}
                    canGoPrevious={true}
                    canGoNext={true}
                  />
                  <p className="text-sm" style={{ color: "var(--text-caption)" }}>Standard 117×54px</p>
                </div>
                <div className="flex flex-col items-center gap-[12px]">
                  <ButtonPaginationMini
                    onPrevious={() => {}}
                    onNext={() => {}}
                    canGoPrevious={true}
                    canGoNext={true}
                  />
                  <p className="text-sm" style={{ color: "var(--text-caption)" }}>Mini 48×24px</p>
                </div>
              </div>
            </CardSection>
          </Card>

          {/* ButtonSort demo */}
          <Card radius="lg">
            <CardHeader 
              title="ButtonSort - Bouton de tri avec indicateur directionnel" 
              subtitle="Label + count optionnel + flèche (↑↓) qui indique la direction du tri" 
            />

            {/* All states */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                États de tri
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <div className="flex flex-col items-center gap-[8px]">
                  <ButtonSort label="Clients" count={482} sortDirection="none" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>none (pas trié)</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <ButtonSort label="Clients" count={482} sortDirection="asc" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>asc ↑</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <ButtonSort label="Clients" count={482} sortDirection="desc" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>desc ↓</span>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Avec et sans count
              </h6>
              <div className="flex flex-wrap gap-[16px]">
                <ButtonSort label="Clients" count={482} sortDirection="asc" />
                <ButtonSort label="Date" sortDirection="desc" />
                <ButtonSort label="Prix" count={156} sortDirection="none" />
                <ButtonSort label="Statut" sortDirection="none" />
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Démo interactive avec hook useSortState
              </h6>
              <SortDemo />
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Code d'usage
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
                <p className="text-sm mb-[8px]" style={{ color: "var(--text-body)" }}>
                  <strong>Méthode 1 : Avec le hook useSortState (recommandé)</strong>
                </p>
                <pre className="text-xs mb-[16px]" style={{ color: "var(--text-caption)" }}>
{`import { ButtonSort, useSortState } from "@/components/atoms";

function MyTable() {
  const { sortBy, sortDirection, handleSort } = useSortState();
  
  return (
    <div className="flex gap-4">
      <ButtonSort 
        label="Clients"
        count={482}
        sortDirection={sortBy === "clients" ? sortDirection : "none"}
        onClick={() => handleSort("clients")}
      />
      <ButtonSort 
        label="Date"
        sortDirection={sortBy === "date" ? sortDirection : "none"}
        onClick={() => handleSort("date")}
      />
    </div>
  );
}`}
                </pre>

                <p className="text-sm mb-[8px]" style={{ color: "var(--text-body)" }}>
                  <strong>Méthode 2 : Gestion manuelle du state</strong>
                </p>
                <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`const [sortDir, setSortDir] = useState<SortDirection>("none");

<ButtonSort 
  label="Clients"
  count={482}
  sortDirection={sortDir}
  onClick={() => {
    setSortDir(prev => 
      prev === "none" ? "asc" : 
      prev === "asc" ? "desc" : "none"
    );
  }}
/>`}
                </pre>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Spécifications Figma
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Font</p>
                  <p style={{ color: "var(--text-body)" }}>Roboto Regular 14px/16px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Padding</p>
                  <p style={{ color: "var(--text-body)" }}>10px horizontal, 8px vertical</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Icône</p>
                  <p style={{ color: "var(--text-body)" }}>24×24px (ArrowUp/ArrowDown)</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Stroke Width</p>
                  <p style={{ color: "var(--text-body)" }}>1.5px</p>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Comportement du tri (cycle 3 états)
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-action)" }}>
                <div className="space-y-[8px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[80px] font-semibold" style={{ color: "var(--text-body)" }}>1er clic :</div>
                    <p style={{ color: "var(--text-body)" }}>none → <strong>asc ↑</strong> (tri croissant)</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[80px] font-semibold" style={{ color: "var(--text-body)" }}>2e clic :</div>
                    <p style={{ color: "var(--text-body)" }}>asc → <strong>desc ↓</strong> (tri décroissant)</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[80px] font-semibold" style={{ color: "var(--text-body)" }}>3e clic :</div>
                    <p style={{ color: "var(--text-body)" }}>desc → <strong>none</strong> (pas de tri)</p>
                  </div>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Cas d'usage
              </h6>
              <ul className="space-y-[8px]" style={{ color: "var(--text-body)" }}>
                <li>✓ <strong>Tableaux de données</strong> : Tri par colonne (nom, date, prix, etc.)</li>
                <li>✓ <strong>Listes de clients</strong> : Tri par nombre de biens, statut, etc.</li>
                <li>✓ <strong>Catalogues de biens</strong> : Tri par prix, surface, date d'ajout</li>
                <li>✓ <strong>Dashboards</strong> : Tri des métriques et KPIs</li>
              </ul>
            </CardSection>
          </Card>

          {/* Chip demo */}
          <Card radius="lg">
            <CardHeader 
              title="Chip - Éléments inline Text + Icon" 
              subtitle="Composants compacts pour afficher des informations avec icônes optionnelles" 
            />

            {/* Medium size with icons */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Size Medium (16px) - Icône + Texte
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <Chip size="medium" icon={<Plus className="w-[20px] h-[20px]" />} iconPosition="right">
                  Text
                </Chip>
                <Chip size="medium" icon={<Home className="w-[20px] h-[20px]" />} iconPosition="left">
                  Texte
                </Chip>
                <Chip size="medium" icon={<ArrowDown className="w-[20px] h-[20px]" />} iconPosition="right">
                  Dropdown
                </Chip>
                <Chip size="medium" icon={<Search className="w-[20px] h-[20px]" />} iconPosition="left">
                  Recherche
                </Chip>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Size Small (14px) - Icône + Texte
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <Chip size="small" icon={<Plus className="w-[16px] h-[16px]" />} iconPosition="right">
                  Text
                </Chip>
                <Chip size="small" icon={<ArrowDown className="w-[16px] h-[16px]" />} iconPosition="right">
                  Text
                </Chip>
                <Chip size="small" icon={<Home className="w-[16px] h-[16px]" />} iconPosition="left">
                  Text
                </Chip>
                <Chip size="small" icon={<Edit className="w-[16px] h-[16px]" />} iconPosition="left">
                  Modifier
                </Chip>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                États disabled
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <Chip size="medium" icon={<Plus className="w-[20px] h-[20px]" />} iconPosition="right" disabled>
                  Text disabled
                </Chip>
                <Chip size="small" icon={<ArrowDown className="w-[16px] h-[16px]" />} iconPosition="right" disabled>
                  Text disabled
                </Chip>
                <Chip size="medium" disabled>
                  Sans icône disabled
                </Chip>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Sans icône (texte seul)
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <Chip size="medium">Texte simple</Chip>
                <Chip size="small">Texte simple</Chip>
                <Chip size="medium" fontWeight="regular">Font Regular</Chip>
                <Chip size="small" fontWeight="regular">Font Regular</Chip>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                ChipDate - Variante spéciale (gap 8px, font regular)
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <ChipDate icon={<Calendar className="w-[20px] h-[20px]" />}>
                  280 j
                </ChipDate>
                <ChipDate icon={<Calendar className="w-[20px] h-[20px]" />}>
                  15 jours
                </ChipDate>
                <ChipDate icon={<Calendar className="w-[20px] h-[20px]" />} disabled>
                  Expiré
                </ChipDate>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                ChipId - Variante pour IDs (font regular, sans icône)
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <ChipId>55679201</ChipId>
                <ChipId>12345678</ChipId>
                <ChipId>DEAL-2024-001</ChipId>
                <ChipId disabled>00000000</ChipId>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Code d'usage
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
                <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`import { Chip, ChipDate, ChipId } from "@/components/atoms";
import { Plus, Home, ArrowDown, Calendar } from "lucide-react";

// Chip standard avec icône
<Chip 
  size="medium" 
  icon={<Plus className="w-[20px] h-[20px]" />} 
  iconPosition="right"
>
  Ajouter
</Chip>

// Chip small
<Chip 
  size="small" 
  icon={<ArrowDown className="w-[16px] h-[16px]" />}
  iconPosition="right"
>
  Dropdown
</Chip>

// ChipDate (gap 8px, font regular)
<ChipDate icon={<Calendar className="w-[20px] h-[20px]" />}>
  280 j
</ChipDate>

// ChipId (font regular, sans icône)
<ChipId>55679201</ChipId>

// État disabled
<Chip size="medium" disabled>Désactivé</Chip>`}
                </pre>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Spécifications Figma
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Font Medium</p>
                  <p style={{ color: "var(--text-body)" }}>Roboto SemiBold 16px/20px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Font Small</p>
                  <p style={{ color: "var(--text-body)" }}>Roboto SemiBold 14px/16px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Gap standard</p>
                  <p style={{ color: "var(--text-body)" }}>4px entre texte et icône</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Gap date</p>
                  <p style={{ color: "var(--text-body)" }}>8px pour ChipDate</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Icône Medium</p>
                  <p style={{ color: "var(--text-body)" }}>20×20px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Icône Small</p>
                  <p style={{ color: "var(--text-body)" }}>16×16px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Font Regular (ID/Date)</p>
                  <p style={{ color: "var(--text-body)" }}>Roboto Regular 16px/20px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Letter-spacing</p>
                  <p style={{ color: "var(--text-body)" }}>0.16px (medium) / 0.14px (small)</p>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Cas d'usage
              </h6>
              <ul className="space-y-[8px]" style={{ color: "var(--text-body)" }}>
                <li>✓ <strong>Navigation</strong> : Labels avec icônes dans les menus, breadcrumbs</li>
                <li>✓ <strong>Filtres</strong> : Dropdown chips, filter pills</li>
                <li>✓ <strong>Métadonnées</strong> : Dates, durées, IDs de référence</li>
                <li>✓ <strong>Actions inline</strong> : Boutons texte + icône dans les listes</li>
                <li>✓ <strong>Tags</strong> : Catégories, labels, statuts compacts</li>
              </ul>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Différence avec Badge
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-action)" }}>
                <div className="space-y-[8px]">
                  <p style={{ color: "var(--text-body)" }}>
                    <strong>Chip</strong> : Élément inline simple, pas de background, juste texte + icône
                  </p>
                  <div className="flex gap-[12px] items-center">
                    <Chip size="medium" icon={<Plus className="w-[20px] h-[20px]" />} iconPosition="right">
                      Ajouter
                    </Chip>
                    <ChipId>55679201</ChipId>
                  </div>
                  <hr style={{ borderColor: "var(--border-neutral-default)", margin: "12px 0" }} />
                  <p style={{ color: "var(--text-body)" }}>
                    <strong>Badge</strong> : Élément avec background coloré, padding, border-radius
                  </p>
                  <div className="flex gap-[8px]">
                    <Badge variant="branded">Branded</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="error">Error</Badge>
                  </div>
                </div>
              </div>
            </CardSection>
          </Card>

          {/* ChipScore, ChipTrend, MessageStatusDot demo */}
          <Card radius="lg">
            <CardHeader 
              title="Chips spécialisés - Scoring, Tendances, Statuts" 
              subtitle="Composants métier pour afficher scores clients, tendances et statuts de messages" 
            />

            {/* ChipScore */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                ChipScore - Jauge de scoring client
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <div className="flex flex-col items-center gap-[8px]">
                  <ChipScore score={5} level="veryLow" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>Very Low (5)</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <ChipScore score={25} level="low" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>Low (25)</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <ChipScore score={50} level="medium" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>Medium (50)</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <ChipScore score={75} level="high" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>High (75)</span>
                </div>
                <div className="flex flex-col items-center gap-[8px]">
                  <ChipScore score={95} level="veryHigh" />
                  <span className="text-xs" style={{ color: "var(--text-caption)" }}>Very High (95)</span>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                ChipScoreAuto - Détection automatique du niveau
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <ChipScoreAuto score={8} />
                <ChipScoreAuto score={32} />
                <ChipScoreAuto score={58} />
                <ChipScoreAuto score={82} />
                <ChipScoreAuto score={98} />
              </div>
              <p className="text-sm mt-[8px]" style={{ color: "var(--text-caption)" }}>
                Le niveau est calculé automatiquement selon le score
              </p>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                ChipTrend - Tendances avec flèches
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <ChipTrend label="score" trend="up" />
                <ChipTrend label="score" trend="down" />
                <ChipTrend label="prix" trend="up" />
                <ChipTrend label="visites" trend="down" />
                <ChipTrend label="stable" trend="neutral" />
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                MessageStatusDot - Indicateurs de statut
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <div className="flex items-center gap-[8px]">
                  <MessageStatusDot status="success" />
                  <span style={{ color: "var(--text-body)" }}>Success</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <MessageStatusDot status="fail" />
                  <span style={{ color: "var(--text-body)" }}>Fail</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <MessageStatusDot status="none" />
                  <span style={{ color: "var(--text-body)" }}>None</span>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Tailles personnalisées
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <MessageStatusDot status="success" size={12} />
                <MessageStatusDot status="success" size={18} />
                <MessageStatusDot status="success" size={24} />
                <MessageStatusDot status="success" size={32} />
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Code d'usage
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
                <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`import { 
  ChipScore, 
  ChipScoreAuto, 
  ChipTrend, 
  MessageStatusDot 
} from "@/components/atoms";

// Score client avec niveau manuel
<ChipScore score={75} level="high" />

// Score avec détection auto du niveau
<ChipScoreAuto score={82} />

// Tendance
<ChipTrend label="score" trend="up" />
<ChipTrend label="prix" trend="down" />

// Statut de message
<MessageStatusDot status="success" />
<MessageStatusDot status="fail" size={24} />`}
                </pre>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Spécifications ChipScore
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Icône jauge</p>
                  <p style={{ color: "var(--text-body)" }}>32×20px (SVG semi-circulaire)</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Font</p>
                  <p style={{ color: "var(--text-body)" }}>Roboto SemiBold 16px/20px</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Padding</p>
                  <p style={{ color: "var(--text-body)" }}>10px horizontal, 8px vertical</p>
                </div>
                <div>
                  <p className="text-sm mb-[4px]" style={{ color: "var(--text-caption)" }}>Niveaux</p>
                  <p style={{ color: "var(--text-body)" }}>5 (veryLow → veryHigh)</p>
                </div>
              </div>
              <div className="mt-[12px] space-y-[4px]">
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>Couleurs des jauges :</p>
                <div className="flex gap-[8px] items-center">
                  <div className="w-[16px] h-[16px]" style={{ background: "#EC0119", borderRadius: "4px" }}></div>
                  <span className="text-sm" style={{ color: "var(--text-body)" }}>Rouge (0-14)</span>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="w-[16px] h-[16px]" style={{ background: "#FF882F", borderRadius: "4px" }}></div>
                  <span className="text-sm" style={{ color: "var(--text-body)" }}>Orange (15-36)</span>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="w-[16px] h-[16px]" style={{ background: "#FDEB03", borderRadius: "4px" }}></div>
                  <span className="text-sm" style={{ color: "var(--text-body)" }}>Jaune (37-61)</span>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="w-[16px] h-[16px]" style={{ background: "#4AC57B", borderRadius: "4px" }}></div>
                  <span className="text-sm" style={{ color: "var(--text-body)" }}>Vert clair (62-84)</span>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="w-[16px] h-[16px]" style={{ background: "#00A774", borderRadius: "4px" }}></div>
                  <span className="text-sm" style={{ color: "var(--text-body)" }}>Vert foncé (85-100)</span>
                </div>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Cas d'usage
              </h6>
              <ul className="space-y-[8px]" style={{ color: "var(--text-body)" }}>
                <li>✓ <strong>Scoring client</strong> : Évaluation de la qualité des leads (ChipScore)</li>
                <li>✓ <strong>Tendances</strong> : Évolution du score, du prix, des visites (ChipTrend)</li>
                <li>✓ <strong>Statuts de messages</strong> : Envoyé/Échoué/En attente (MessageStatusDot)</li>
                <li>✓ <strong>KPIs immobiliers</strong> : Notation des biens, scoring vendeur</li>
                <li>✓ <strong>Tableaux de données</strong> : Affichage compact de métriques</li>
              </ul>
            </CardSection>
          </Card>

          {/* Badge atomique (AtomeSticker) et BadgeCriteria (AtomeCriteria) */}
          <Card radius="lg">
            <CardHeader 
              title="🆕 Badge & BadgeCriteria - Nouveaux composants atomiques" 
              subtitle="Badges de statut (AtomeSticker) et filtres de recherche avec suppression (AtomeCriteria)" 
            />

            {/* Badge (AtomeSticker) */}
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Badge (AtomeSticker) - Labels contextuels
              </h6>
              <div className="flex flex-wrap gap-[16px] items-center">
                <AtomBadge variant="default" label="Default" />
                <AtomBadge variant="disabled" label="Disabled" />
                <AtomBadge variant="information" label="Information" />
                <AtomBadge variant="warning" label="Warning" />
                <AtomBadge variant="success" label="Success" />
                <AtomBadge variant="error" label="Error" />
              </div>
              <p className="text-sm mt-[8px]" style={{ color: "var(--text-caption)" }}>
                6 variantes sémantiques, hauteur 20px, Roboto Bold 12px
              </p>
            </CardSection>

            {/* Badge use cases */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Cas d'usage réels - Statuts métier
              </h6>
              <div className="flex flex-wrap gap-[12px] items-center">
                <AtomBadge variant="success" label="Actif" />
                <AtomBadge variant="warning" label="En attente" />
                <AtomBadge variant="error" label="Expiré" />
                <AtomBadge variant="information" label="Nouveau" />
                <AtomBadge variant="success" label="Mandat signé" />
                <AtomBadge variant="error" label="Perdu" />
                <AtomBadge variant="disabled" label="Archivé" />
              </div>
            </CardSection>

            {/* BadgeCriteria (AtomeCriteria) */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                BadgeCriteria (AtomeCriteria) - Filtres de recherche avec suppression
              </h6>
              <div className="space-y-[12px]">
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>
                    Variante outlined (hauteur 24px)
                  </p>
                  <div className="flex flex-wrap gap-[8px] items-center">
                    <BadgeCriteria variant="outlined" label="Paris 75001" onRemove={() => alert('Filtre supprimé')} />
                    <BadgeCriteria variant="outlined" label="Appartement" onRemove={() => {}} />
                    <BadgeCriteria variant="outlined" label="2-3 pièces" onRemove={() => {}} />
                    <BadgeCriteria variant="outlined" label="200k - 400k €" onRemove={() => {}} />
                    <BadgeCriteria variant="outlined" label="Balcon" onRemove={() => {}} />
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-[8px]" style={{ color: "var(--text-caption)" }}>
                    Variante default (fond coloré)
                  </p>
                  <div className="flex flex-wrap gap-[8px] items-center">
                    <BadgeCriteria variant="default" label="Lyon 69000" onRemove={() => {}} />
                    <BadgeCriteria variant="default" label="Maison" onRemove={() => {}} />
                    <BadgeCriteria variant="default" label="Jardin" onRemove={() => {}} />
                    <BadgeCriteria variant="default" label="Garage" onRemove={() => {}} />
                  </div>
                </div>
              </div>
            </CardSection>

            {/* Code d'usage */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Code d'usage
              </h6>
              <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-subdued)" }}>
                <pre className="text-xs" style={{ color: "var(--text-caption)" }}>
{`import { Badge, BadgeCriteria } from "../components/atoms";

// Badge de statut (AtomeSticker)
<Badge variant="success" label="Actif" />
<Badge variant="warning" label="En attente" />
<Badge variant="error" label="Expiré" />

// Badge de filtre avec suppression (AtomeCriteria)
<BadgeCriteria 
  variant="outlined" 
  label="Paris 75001" 
  onRemove={() => removeFilter()} 
/>
<BadgeCriteria 
  variant="default" 
  label="Appartement" 
  onRemove={() => {}} 
/>`}
                </pre>
              </div>
            </CardSection>

            {/* Spécifications */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Spécifications techniques
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <p className="text-sm font-semibold mb-[8px]" style={{ color: "var(--text-headings)" }}>Badge (AtomeSticker)</p>
                  <ul className="text-sm space-y-[4px]" style={{ color: "var(--text-body)" }}>
                    <li>• Hauteur : 20px (fixe)</li>
                    <li>• Border-radius : 16px (pill)</li>
                    <li>• Font : Roboto Bold 12px/14px</li>
                    <li>• Padding : 8px horizontal, 4px vertical</li>
                    <li>• 6 variantes × 2 modes (light/dark)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-[8px]" style={{ color: "var(--text-headings)" }}>BadgeCriteria (AtomeCriteria)</p>
                  <ul className="text-sm space-y-[4px]" style={{ color: "var(--text-body)" }}>
                    <li>• Hauteur : 24px (outlined), auto (default)</li>
                    <li>• Border-radius : 16px (pill)</li>
                    <li>• Font : Roboto Bold 14px/16px</li>
                    <li>• Icône X : 18px container, lucide-react</li>
                    <li>• 2 variantes × 2 modes (light/dark)</li>
                  </ul>
                </div>
              </div>
            </CardSection>

            {/* Différence Badge vs BadgeCriteria */}
            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Badge vs BadgeCriteria - Quand utiliser quoi ?
              </h6>
              <div className="grid grid-cols-2 gap-[16px]">
                <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-action)" }}>
                  <p className="font-semibold mb-[8px]" style={{ color: "var(--text-headings)" }}>Badge (AtomeSticker)</p>
                  <ul className="text-sm space-y-[4px]" style={{ color: "var(--text-body)" }}>
                    <li>✓ Statuts métier (Actif, Expiré, Nouveau)</li>
                    <li>✓ Labels non-interactifs</li>
                    <li>✓ Affichage de contexte</li>
                    <li>✓ Indicateurs visuels sémantiques</li>
                    <li>✗ Pas de suppression</li>
                  </ul>
                </div>
                <div className="p-[16px] rounded-[12px]" style={{ background: "var(--surface-neutral-action)" }}>
                  <p className="font-semibold mb-[8px]" style={{ color: "var(--text-headings)" }}>BadgeCriteria (AtomeCriteria)</p>
                  <ul className="text-sm space-y-[4px]" style={{ color: "var(--text-body)" }}>
                    <li>✓ Filtres de recherche actifs</li>
                    <li>✓ Critères sélectionnés</li>
                    <li>✓ Tags supprimables</li>
                    <li>✓ Interactif (bouton X)</li>
                    <li>✓ Callback onRemove</li>
                  </ul>
                </div>
              </div>
            </CardSection>
          </Card>

          {/* Focus Ring Demo */}
          <Card radius="lg" variant="info" padding="lg">
            <CardHeader title="⌨️ Focus Ring (Accessibilité)" />
            <p className="mb-[16px]" style={{ color: "var(--text-information)" }}>
              Appuyez sur <kbd className="px-2 py-1 rounded bg-gray-200 text-gray-800">Tab</kbd> pour naviguer et voir apparaître l'anneau de focus (2px à 4px de distance).
            </p>
            <div className="flex flex-wrap gap-[12px]">
              <Button variant="branded">Naviguez ici</Button>
              <IconButton variant="branded" icon={<PlusIcon color="white" />} title="Et ici" />
              <Button variant="outlined">Puis ici</Button>
              <IconButton variant="ghost" icon={<Search className="w-[20px] h-[20px]" />} title="Et là" />
            </div>
            <ul className="mt-[16px] space-y-[8px]" style={{ color: "var(--text-information)" }}>
              <li>✓ Focus ring visible uniquement au clavier (:focus-visible)</li>
              <li>✓ Couleur Branded : #635cc7 (branded hover)</li>
              <li>✓ Couleur Neutral/Outlined/Ghost : #333740 (dark text)</li>
              <li>✓ Structure exacte Figma : border-2 à inset-[-4px]</li>
            </ul>
          </Card>

          {/* Badges demo */}
          <Card radius="lg">
            <CardHeader title="Badges & Status" />
            <CardSection>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Badges de statut
              </h6>
              <div className="flex flex-wrap gap-[8px]">
                <Badge variant="branded">Branded</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="neutral">Neutral</Badge>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Status badges avec icônes
              </h6>
              <div className="flex flex-wrap gap-[8px]">
                <StatusBadge variant="success" icon="✓">
                  Actif
                </StatusBadge>
                <StatusBadge variant="error" icon="✗">
                  Erreur
                </StatusBadge>
                <StatusBadge variant="warning" icon="⚠️">
                  En attente
                </StatusBadge>
              </div>
            </CardSection>

            <CardSection divider>
              <h6 className="mb-[12px]" style={{ color: "var(--text-headings)" }}>
                Types de clients et deals
              </h6>
              <div className="space-y-[8px]">
                <div className="flex gap-[8px]">
                  <span style={{ color: "var(--text-caption)" }}>
                    Client types:
                  </span>
                  <ClientTypeBadge type="VENDEUR" />
                  <ClientTypeBadge type="ACQUÉREUR" />
                  <ClientTypeBadge type="LOCATAIRE" />
                </div>
                <div className="flex gap-[8px]">
                  <span style={{ color: "var(--text-caption)" }}>
                    Deal types:
                  </span>
                  <DealTypeBadge type="VENTE" />
                  <DealTypeBadge type="ACQUISITION" />
                  <DealTypeBadge type="LOCATION" />
                  <DealTypeBadge type="À VENDRE" />
                  <DealTypeBadge type="À LOUER" />
                </div>
              </div>
            </CardSection>
          </Card>

          {/* Infrastructure checklist */}
          <Card radius="lg" variant="success" padding="lg">
            <CardHeader title="✅ Composants Button & IconButton finalisés" />
            <ul className="space-y-[8px]">
              <li style={{ color: "var(--text-success)" }}>
                ✓ 16+ variantes Figma importées et analysées
              </li>
              <li style={{ color: "var(--text-success)" }}>
                ✓ Structure 100% conforme (padding, gap, border-radius, fonts)
              </li>
              <li style={{ color: "var(--text-success)" }}>
                ✓ 3 variants : Primary, Secondary, Ghost
              </li>
              <li style={{ color: "var(--text-success)" }}>
                ✓ 3 tailles pour IconButton : sm (32px), md (44px), lg (56px)
              </li>
              <li style={{ color: "var(--text-success)" }}>
                ✓ Focus Ring avec couleurs exactes Figma
              </li>
              <li style={{ color: "var(--text-success)" }}>
                ✓ Accessibilité clavier (:focus-visible)
              </li>
              <li style={{ color: "var(--text-success)" }}>
                ✓ Documentation complète + page démo /button-demo
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}