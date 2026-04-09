import { useState } from "react";
import { Spinner } from "../components/atoms/Spinner";
import {
  LoadingOverlay,
  LoadingOverlayFullscreen,
  LoadingOverlayContainer,
} from "../components/molecules/LoadingOverlay";
import { Button } from "../components/atoms/Button";
import { ThemeToggle } from "../components/ThemeToggle";
import { useToast } from "../context/ToastContext";

/**
 * LoaderDemo - Page de démonstration des composants Spinner et LoadingOverlay
 */
export default function LoaderDemo() {
  const { toast } = useToast();
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showContainer1, setShowContainer1] = useState(false);
  const [showContainer2, setShowContainer2] = useState(false);
  const [showContainer3, setShowContainer3] = useState(false);

  // Simule un chargement avec timeout
  const simulateLoading = (
    setter: (value: boolean) => void,
    duration: number = 3000,
    successMessage: string = "Chargement terminé"
  ) => {
    setter(true);
    setTimeout(() => {
      setter(false);
      toast.success(successMessage);
    }, duration);
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              Spinner / Loader
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Design System RealAgent - Indicateurs de chargement
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
                🔄 Spinner (Atom)
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Icône Loader2 de Lucide</li>
                <li>• Animation rotation continue (1s)</li>
                <li>• 3 tailles: sm (16px), md (24px), lg (32px)</li>
                <li>• 3 variants: primary, neutral, inverse</li>
                <li>• Support light/dark mode</li>
                <li>• ARIA labels pour accessibilité</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🌐 LoadingOverlay (Molecule)
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Overlay semi-transparent</li>
                <li>• Spinner centré + message optionnel</li>
                <li>• Fullscreen ou container</li>
                <li>• Z-index et opacité configurables</li>
                <li>• Bloque l'interaction pendant chargement</li>
                <li>• Raccourcis: Fullscreen / Container</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Spinner - Tailles */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-body)" }}>
            Spinner - Tailles
          </h2>

          <div className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h3 className="text-xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
              Variant Primary (Branded Purple)
            </h3>
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-center gap-3">
                <Spinner size="sm" variant="primary" />
                <p className="text-sm font-medium" style={{ color: "var(--text-caption)" }}>
                  Small (16px)
                </p>
                <code className="text-xs px-2 py-1 rounded" style={{ background: "var(--surface-neutral-action)", color: "var(--text-caption)" }}>
                  size="sm"
                </code>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Spinner size="md" variant="primary" />
                <p className="text-sm font-medium" style={{ color: "var(--text-caption)" }}>
                  Medium (24px)
                </p>
                <code className="text-xs px-2 py-1 rounded" style={{ background: "var(--surface-neutral-action)", color: "var(--text-caption)" }}>
                  size="md"
                </code>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Spinner size="lg" variant="primary" />
                <p className="text-sm font-medium" style={{ color: "var(--text-caption)" }}>
                  Large (32px)
                </p>
                <code className="text-xs px-2 py-1 rounded" style={{ background: "var(--surface-neutral-action)", color: "var(--text-caption)" }}>
                  size="lg"
                </code>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<Spinner size="sm" variant="primary" />
<Spinner size="md" variant="primary" />
<Spinner size="lg" variant="primary" />`}
              </pre>
            </div>
          </div>

          <div className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h3 className="text-xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
              Variant Neutral (Grey)
            </h3>
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-center gap-3">
                <Spinner size="sm" variant="neutral" />
                <p className="text-sm font-medium" style={{ color: "var(--text-caption)" }}>
                  Small (16px)
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Spinner size="md" variant="neutral" />
                <p className="text-sm font-medium" style={{ color: "var(--text-caption)" }}>
                  Medium (24px)
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Spinner size="lg" variant="neutral" />
                <p className="text-sm font-medium" style={{ color: "var(--text-caption)" }}>
                  Large (32px)
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<Spinner size="sm" variant="neutral" />
<Spinner size="md" variant="neutral" />
<Spinner size="lg" variant="neutral" />`}
              </pre>
            </div>
          </div>

          <div className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h3 className="text-xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
              Variant Inverse (White/Black)
            </h3>
            <div
              className="p-6 rounded-lg mb-4"
              style={{ background: "var(--text-body)" }}
            >
              <div className="flex items-center gap-12">
                <div className="flex flex-col items-center gap-3">
                  <Spinner size="sm" variant="inverse" />
                  <p className="text-sm font-medium" style={{ color: "var(--surface-page)" }}>
                    Small (16px)
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Spinner size="md" variant="inverse" />
                  <p className="text-sm font-medium" style={{ color: "var(--surface-page)" }}>
                    Medium (24px)
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Spinner size="lg" variant="inverse" />
                  <p className="text-sm font-medium" style={{ color: "var(--surface-page)" }}>
                    Large (32px)
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<Spinner size="sm" variant="inverse" />
<Spinner size="md" variant="inverse" />
<Spinner size="lg" variant="inverse" />`}
              </pre>
            </div>
          </div>
        </section>

        {/* LoadingOverlay - Fullscreen */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-body)" }}>
            LoadingOverlay - Fullscreen
          </h2>

          <div className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                Fullscreen Overlay
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                Couvre toute la fenêtre avec position fixed. Utilisé pour les chargements globaux.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="branded"
                  onClick={() => simulateLoading(setShowFullscreen, 3000, "Chargement fullscreen terminé")}
                >
                  Afficher Fullscreen (3s)
                </Button>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`// Usage basique
{isLoading && <LoadingOverlay fullscreen />}

// Avec message
{isLoading && (
  <LoadingOverlay 
    fullscreen 
    message="Chargement des données..." 
  />
)}

// Raccourci
{isLoading && (
  <LoadingOverlayFullscreen 
    message="Import en cours..." 
    size="lg"
  />
)}`}
              </pre>
            </div>
          </div>
        </section>

        {/* LoadingOverlay - Container */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-body)" }}>
            LoadingOverlay - Container
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Container 1 - Sans message */}
            <div className="p-6 rounded-xl relative h-[300px]" style={{ background: "var(--surface-neutral-default)" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                Sans message
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                Overlay simple avec spinner centré.
              </p>
              <Button
                variant="neutral"
                onClick={() => simulateLoading(setShowContainer1, 2000, "Container 1 terminé")}
              >
                Charger (2s)
              </Button>

              {/* Contenu simulé */}
              <div className="mt-6 space-y-2">
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "80%" }} />
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "60%" }} />
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "70%" }} />
              </div>

              {showContainer1 && <LoadingOverlayContainer />}
            </div>

            {/* Container 2 - Avec message */}
            <div className="p-6 rounded-xl relative h-[300px]" style={{ background: "var(--surface-neutral-default)" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                Avec message
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                Overlay avec message sous le spinner.
              </p>
              <Button
                variant="neutral"
                onClick={() => simulateLoading(setShowContainer2, 2500, "Container 2 terminé")}
              >
                Charger (2.5s)
              </Button>

              {/* Contenu simulé */}
              <div className="mt-6 space-y-2">
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "75%" }} />
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "65%" }} />
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "80%" }} />
              </div>

              {showContainer2 && (
                <LoadingOverlayContainer message="Chargement..." />
              )}
            </div>

            {/* Container 3 - Large spinner */}
            <div className="p-6 rounded-xl relative h-[300px]" style={{ background: "var(--surface-neutral-default)" }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                Large spinner
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                Overlay avec grand spinner et message.
              </p>
              <Button
                variant="neutral"
                onClick={() => simulateLoading(setShowContainer3, 3000, "Container 3 terminé")}
              >
                Charger (3s)
              </Button>

              {/* Contenu simulé */}
              <div className="mt-6 space-y-2">
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "70%" }} />
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "55%" }} />
                <div className="h-4 rounded" style={{ background: "var(--surface-neutral-action)", width: "85%" }} />
              </div>

              {showContainer3 && (
                <LoadingOverlayContainer
                  size="lg"
                  message="Import de fichiers..."
                />
              )}
            </div>
          </div>

          <div className="p-6 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-body)" }}>
              Code exemple
            </h3>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`// Container parent doit être "relative"
<div className="relative">
  {/* Contenu normal */}
  <MyContent />

  {/* Overlay qui couvre le container */}
  {isLoading && <LoadingOverlayContainer />}
</div>

// Avec message
{isLoading && (
  <LoadingOverlayContainer 
    message="Chargement des données..." 
  />
)}

// Avec spinner large
{isLoading && (
  <LoadingOverlayContainer 
    size="lg"
    message="Import en cours..."
  />
)}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Usage dans les boutons */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Spinner inline (dans les boutons)
          </h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-caption)" }}>
            Le spinner peut être utilisé inline dans les boutons pour indiquer un état de chargement.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              className="px-4 py-2 rounded-lg flex items-center gap-2"
              style={{ background: "var(--purple-500)", color: "#ffffff" }}
              disabled
            >
              <Spinner size="sm" variant="inverse" />
              <span>Enregistrement...</span>
            </button>

            <button
              className="px-4 py-2 rounded-lg flex items-center gap-2"
              style={{ background: "var(--surface-neutral-action)", color: "var(--text-body)" }}
              disabled
            >
              <Spinner size="sm" variant="neutral" />
              <span>Chargement...</span>
            </button>

            <button
              className="px-4 py-2 rounded-lg flex items-center gap-2 border"
              style={{ background: "transparent", color: "var(--text-body)", borderColor: "var(--neutral-400)" }}
              disabled
            >
              <Spinner size="sm" variant="primary" />
              <span>Import...</span>
            </button>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<button disabled>
  <Spinner size="sm" variant="inverse" />
  <span>Enregistrement...</span>
</button>

<button disabled>
  <Spinner size="sm" variant="neutral" />
  <span>Chargement...</span>
</button>`}
            </pre>
          </div>
        </section>

        {/* API Reference */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            API Reference
          </h2>

          <div className="space-y-8">
            {/* Spinner Props */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                Spinner Props
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--surface-neutral-action)" }}>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Prop</th>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Type</th>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Default</th>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>size</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>"sm" | "md" | "lg"</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>"md"</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Taille du spinner (16/24/32px)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>variant</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>"primary" | "neutral" | "inverse"</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>"primary"</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Couleur du spinner</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>className</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>string</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>""</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Classes CSS supplémentaires</td>
                    </tr>
                    <tr>
                      <td className="p-3"><code>ariaLabel</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>string</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>"Chargement..."</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Label accessible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* LoadingOverlay Props */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                LoadingOverlay Props
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--surface-neutral-action)" }}>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Prop</th>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Type</th>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Default</th>
                      <th className="text-left p-3" style={{ color: "var(--text-body)" }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>size</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>"sm" | "md" | "lg"</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>"md"</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Taille du spinner</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>message</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>string</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>undefined</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Message sous le spinner</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>fullscreen</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>boolean</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>false</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Mode fullscreen (fixed)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>zIndex</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>number</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>50</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Z-index de l'overlay</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--surface-neutral-action)" }}>
                      <td className="p-3"><code>backgroundOpacity</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>number (0-1)</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>0.5</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Opacité du background</td>
                    </tr>
                    <tr>
                      <td className="p-3"><code>className</code></td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>string</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>""</td>
                      <td className="p-3" style={{ color: "var(--text-caption)" }}>Classes CSS supplémentaires</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Cas d'usage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🔄 Spinner seul
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Inline dans les boutons</li>
                <li>• À côté de texte de chargement</li>
                <li>• Dans les cartes de contenu</li>
                <li>• SearchBar (loading state)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🌐 Overlay Container
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Chargement de formulaires</li>
                <li>• Chargement de tableaux</li>
                <li>• Chargement de modals</li>
                <li>• Chargement de panels</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🖥️ Overlay Fullscreen
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Import de fichiers volumineux</li>
                <li>• Sauvegarde globale</li>
                <li>• Connexion / Déconnexion</li>
                <li>• Navigation entre pages</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                💡 Bonnes pratiques
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Toujours fournir un message clair</li>
                <li>• Limiter la durée à 5s max si possible</li>
                <li>• Utiliser fullscreen pour actions globales</li>
                <li>• Désactiver les interactions pendant loading</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Overlay Demo */}
      {showFullscreen && (
        <LoadingOverlayFullscreen
          size="lg"
          message="Chargement des données..."
        />
      )}
    </div>
  );
}