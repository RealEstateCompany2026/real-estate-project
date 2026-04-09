import { useState } from "react";
import { SearchBar } from "../components/molecules";
import { ThemeToggle } from "../components/ThemeToggle";
import { IconButton } from "../components/atoms";
import { Filter, SlidersHorizontal, X } from "lucide-react";

/**
 * SearchDemo - Page de démonstration du composant SearchBar
 * Affiche tous les états et variations du SearchBar
 */
export default function SearchDemo() {
  // États pour les différentes SearchBars
  const [basicSearch, setBasicSearch] = useState("");
  const [propertySearch, setPropertySearch] = useState("");
  const [contactSearch, setContactSearch] = useState("");
  const [loadingSearch, setLoadingSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string, type: string) => {
    console.log(`🔍 Recherche ${type}:`, query);
    
    // Simulate search
    if (type === "loading") {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        alert(`Recherche terminée pour: "${query}"`);
      }, 2000);
    } else {
      alert(`Recherche: "${query}"`);
    }
  };

  const handleClear = (type: string) => {
    console.log(`🗑️ Clear ${type}`);
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              SearchBar Component
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Design System RealAgent - Barre de recherche complète
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Tailles */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Tailles
          </h2>
          
          <div className="space-y-6">
            {/* Small */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Small (48px)
              </h3>
              <SearchBar
                value={basicSearch}
                onChange={setBasicSearch}
                onSearch={(query) => handleSearch(query, "small")}
                placeholder="Recherche small (48px)..."
                size="sm"
              />
            </div>

            {/* Medium */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Medium (56px) - Défaut
              </h3>
              <SearchBar
                value={propertySearch}
                onChange={setPropertySearch}
                onSearch={(query) => handleSearch(query, "medium")}
                placeholder="Recherche medium (56px)..."
                size="md"
              />
            </div>

            {/* Large */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Large (64px)
              </h3>
              <SearchBar
                value={contactSearch}
                onChange={setContactSearch}
                onSearch={(query) => handleSearch(query, "large")}
                placeholder="Recherche large (64px)..."
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* États */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            États
          </h2>
          
          <div className="space-y-6">
            {/* Empty */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Vide
              </h3>
              <SearchBar
                placeholder="État vide - tapez pour voir le bouton clear..."
              />
              <p className="text-sm mt-2" style={{ color: "var(--text-caption)" }}>
                • Icône Search visible à gauche<br />
                • Placeholder affiché<br />
                • Pas de bouton clear
              </p>
            </div>

            {/* Loading */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Loading
              </h3>
              <SearchBar
                value={loadingSearch}
                onChange={setLoadingSearch}
                onSearch={(query) => handleSearch(query, "loading")}
                placeholder="Tapez et appuyez sur Entrée pour simuler un loading..."
                loading={isSearching}
              />
              <p className="text-sm mt-2" style={{ color: "var(--text-caption)" }}>
                • Spinner animé à droite<br />
                • Input désactivé pendant le chargement<br />
                • Pas de bouton clear
              </p>
            </div>

            {/* Disabled */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Disabled
              </h3>
              <SearchBar
                value="Recherche désactivée"
                placeholder="Champ désactivé..."
                disabled
              />
              <p className="text-sm mt-2" style={{ color: "var(--text-caption)" }}>
                • Opacité 50%<br />
                • Non interactif<br />
                • Background disabled
              </p>
            </div>

            {/* Auto Focus */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Auto Focus
              </h3>
              <SearchBar
                placeholder="Ce champ a l'auto-focus..."
                autoFocus
              />
              <p className="text-sm mt-2" style={{ color: "var(--text-caption)" }}>
                • Focus automatique au chargement<br />
                • Utile pour les modales de recherche
              </p>
            </div>
          </div>
        </section>

        {/* Cas d'usage réels */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Cas d'usage - CRM Immobilier
          </h2>
          
          <div className="space-y-8">
            {/* Recherche de biens */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Recherche de biens immobiliers
              </h3>
              <div className="flex gap-2">
                <div className="flex-1">
                  <SearchBar
                    placeholder="Rechercher un bien (adresse, ville, référence)..."
                    onSearch={(query) => console.log("Recherche bien:", query)}
                  />
                </div>
                <IconButton
                  icon={<Filter />}
                  variant="neutral"
                  title="Filtres avancés"
                  size="lg"
                />
              </div>
            </div>

            {/* Recherche de contacts */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Recherche de contacts
              </h3>
              <div className="flex gap-2">
                <div className="flex-1">
                  <SearchBar
                    placeholder="Rechercher un contact (nom, email, téléphone)..."
                    onSearch={(query) => console.log("Recherche contact:", query)}
                  />
                </div>
                <IconButton
                  icon={<SlidersHorizontal />}
                  variant="neutral"
                  title="Options de tri"
                  size="lg"
                />
              </div>
            </div>

            {/* Recherche globale */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Recherche globale
              </h3>
              <SearchBar
                placeholder="Recherche globale (Cmd+K)"
                size="lg"
                onSearch={(query) => console.log("Recherche globale:", query)}
              />
              <p className="text-sm mt-2" style={{ color: "var(--text-caption)" }}>
                💡 Appuyez sur Entrée pour lancer la recherche
              </p>
            </div>
          </div>
        </section>

        {/* Callbacks & Events */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Événements & Callbacks
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Callbacks disponibles
              </h3>
              <SearchBar
                placeholder="Tapez et testez les événements (regardez la console)..."
                onChange={(value) => console.log("📝 onChange:", value)}
                onSearch={(query) => console.log("🔍 onSearch:", query)}
                onClear={() => console.log("🗑️ onClear")}
              />
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <p className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  Événements disponibles :
                </p>
                <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>• <code>onChange(value: string)</code> - À chaque frappe</li>
                  <li>• <code>onSearch(query: string)</code> - Appui sur Entrée</li>
                  <li>• <code>onClear()</code> - Clic sur le bouton X</li>
                </ul>
              </div>
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
                <li>• Icône Search toujours visible à gauche</li>
                <li>• Bouton Clear (X) visible quand il y a du texte</li>
                <li>• Spinner de loading pendant les recherches</li>
                <li>• Support Enter pour lancer la recherche</li>
                <li>• Auto-focus optionnel</li>
                <li>• 3 tailles : sm (48px), md (56px), lg (64px)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 Design Tokens
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Background: var(--surface-neutral-default)</li>
                <li>• Border: var(--border-neutral-default)</li>
                <li>• Border focus: var(--border-neutral-emphasis)</li>
                <li>• Icons: var(--icon-neutral-default)</li>
                <li>• Text: var(--text-body)</li>
                <li>• Placeholder: var(--text-placeholder)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ⌨️ Raccourcis clavier
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <kbd className="px-2 py-1 rounded text-xs bg-[var(--surface-neutral-default)]">Enter</kbd> Lance la recherche</li>
                <li>• <kbd className="px-2 py-1 rounded text-xs bg-[var(--surface-neutral-default)]">Esc</kbd> Efface le champ (natif)</li>
                <li>• Suggestion : <kbd className="px-2 py-1 rounded text-xs bg-[var(--surface-neutral-default)]">Cmd+K</kbd> pour focus global</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ♿ Accessibilité
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Support aria-label personnalisé</li>
                <li>• Bouton clear avec label accessible</li>
                <li>• Spinner avec aria-label "Recherche en cours"</li>
                <li>• Navigation clavier complète</li>
                <li>• Focus visible sur le bouton clear</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Exemples de code
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Usage basique
              </h3>
              <pre 
                className="p-4 rounded-lg overflow-x-auto text-sm"
                style={{ 
                  background: "var(--surface-neutral-action)",
                  color: "var(--text-body)",
                }}
              >
{`const [query, setQuery] = useState("");

<SearchBar
  value={query}
  onChange={setQuery}
  onSearch={(q) => performSearch(q)}
  placeholder="Rechercher..."
/>`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Avec loading
              </h3>
              <pre 
                className="p-4 rounded-lg overflow-x-auto text-sm"
                style={{ 
                  background: "var(--surface-neutral-action)",
                  color: "var(--text-body)",
                }}
              >
{`const [isLoading, setIsLoading] = useState(false);

const handleSearch = async (query: string) => {
  setIsLoading(true);
  const results = await api.search(query);
  setIsLoading(false);
};

<SearchBar
  value={query}
  onChange={setQuery}
  onSearch={handleSearch}
  loading={isLoading}
  placeholder="Rechercher..."
/>`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
