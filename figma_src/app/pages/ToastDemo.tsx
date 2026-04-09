import { Button } from "../components/atoms/Button";
import { ThemeToggle } from "../components/ThemeToggle";
import { useToast } from "../context/ToastContext";
import { CheckCircle2, XCircle, AlertTriangle, Info } from "lucide-react";

/**
 * ToastDemo - Page de démonstration du système de Toast
 */
export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              Toast / Notification System
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Design System RealAgent - Système de notifications temporaires
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
                <li>• Width: 400px</li>
                <li>• Padding: 16px</li>
                <li>• Border-radius: 16px</li>
                <li>• Gap: 12px entre les toasts</li>
                <li>• Auto-dismiss: 5000ms (configurable)</li>
                <li>• Position: Bottom-right (configurable)</li>
                <li>• Max toasts: 5 simultanés</li>
                <li>• Animation: Slide + fade</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 Variantes
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>Success:</strong> Vert avec CheckCircle2</li>
                <li>• <strong>Error:</strong> Rouge avec XCircle</li>
                <li>• <strong>Warning:</strong> Orange avec AlertTriangle</li>
                <li>• <strong>Info:</strong> Bleu/violet avec Info</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage rapide */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
            Usage rapide
          </h2>
          <div className="p-4 rounded-lg mb-4" style={{ background: "var(--surface-neutral-action)" }}>
            <pre className="text-sm overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`import { useToast } from "@/context/ToastContext";

function MyComponent() {
  const { toast } = useToast();

  const handleSave = () => {
    // Appeler l'API...
    toast.success("Fichier enregistré avec succès");
  };

  const handleError = () => {
    toast.error("Une erreur est survenue");
  };

  return <button onClick={handleSave}>Save</button>;
}`}
            </pre>
          </div>
        </section>

        {/* Demos interactives */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-body)" }}>
            Démos interactives
          </h2>

          {/* Success Toast */}
          <div className="p-6 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg" style={{ background: "var(--surface-success-default)" }}>
                <CheckCircle2 size={24} style={{ color: "var(--text-success)" }} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--text-body)" }}>
                  Success Toast
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                  Affiche un message de succès avec icône verte CheckCircle2
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="neutral"
                    onClick={() => toast.success("Opération réussie")}
                  >
                    Simple
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() =>
                      toast.success(
                        "Fichier enregistré",
                        "Le fichier a été enregistré avec succès dans votre bibliothèque"
                      )
                    }
                  >
                    Avec description
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() => toast.success("Message court", undefined, 3000)}
                  >
                    3 secondes
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`toast.success("Fichier enregistré");
toast.success("Fichier enregistré", "Description détaillée");
toast.success("Message court", undefined, 3000); // 3 secondes`}
              </pre>
            </div>
          </div>

          {/* Error Toast */}
          <div className="p-6 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg" style={{ background: "var(--surface-error-default)" }}>
                <XCircle size={24} style={{ color: "var(--text-error)" }} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--text-body)" }}>
                  Error Toast
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                  Affiche un message d'erreur avec icône rouge XCircle
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="neutral"
                    onClick={() => toast.error("Erreur")}
                  >
                    Simple
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() =>
                      toast.error(
                        "Échec de l'enregistrement",
                        "Impossible d'enregistrer le fichier. Vérifiez votre connexion."
                      )
                    }
                  >
                    Avec description
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() => toast.error("Erreur critique", "Le serveur ne répond pas", 10000)}
                  >
                    10 secondes
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`toast.error("Erreur");
toast.error("Échec de l'enregistrement", "Message détaillé");
toast.error("Erreur critique", "Description", 10000); // 10 secondes`}
              </pre>
            </div>
          </div>

          {/* Warning Toast */}
          <div className="p-6 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg" style={{ background: "var(--surface-warning-default)" }}>
                <AlertTriangle size={24} style={{ color: "var(--text-warning)" }} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--text-body)" }}>
                  Warning Toast
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                  Affiche un avertissement avec icône orange AlertTriangle
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="neutral"
                    onClick={() => toast.warning("Attention")}
                  >
                    Simple
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() =>
                      toast.warning(
                        "Modifications non sauvegardées",
                        "Vous avez des modifications non sauvegardées qui seront perdues"
                      )
                    }
                  >
                    Avec description
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() =>
                      toast.custom("warning", "Avertissement persistant", "Ce message ne disparaîtra pas automatiquement", {
                        persistent: true,
                      })
                    }
                  >
                    Persistant
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`toast.warning("Attention");
toast.warning("Modifications non sauvegardées", "Description");
toast.custom("warning", "Titre", "Description", { persistent: true });`}
              </pre>
            </div>
          </div>

          {/* Info Toast */}
          <div className="p-6 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg" style={{ background: "var(--surface-information-default)" }}>
                <Info size={24} style={{ color: "var(--text-information)" }} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1" style={{ color: "var(--text-body)" }}>
                  Info Toast
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
                  Affiche une information avec icône bleu/violet Info
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="neutral"
                    onClick={() => toast.info("Information")}
                  >
                    Simple
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() =>
                      toast.info(
                        "Nouvelle mise à jour",
                        "Une nouvelle version de l'application est disponible"
                      )
                    }
                  >
                    Avec description
                  </Button>
                  <Button
                    variant="neutral"
                    onClick={() => toast.info("Astuce du jour", "Utilisez Ctrl+S pour sauvegarder rapidement", 7000)}
                  >
                    7 secondes
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`toast.info("Information");
toast.info("Nouvelle mise à jour", "Description");
toast.info("Astuce", "Message", 7000); // 7 secondes`}
              </pre>
            </div>
          </div>
        </section>

        {/* Test Multiple Toasts */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
            Test de toasts multiples
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--text-caption)" }}>
            Affiche plusieurs toasts en même temps (max 5 affichés)
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="branded"
              onClick={() => {
                toast.success("Toast 1");
                setTimeout(() => toast.error("Toast 2"), 200);
                setTimeout(() => toast.warning("Toast 3"), 400);
                setTimeout(() => toast.info("Toast 4"), 600);
                setTimeout(() => toast.success("Toast 5"), 800);
              }}
            >
              Afficher 5 toasts
            </Button>
            <Button
              variant="neutral"
              onClick={() => {
                toast.success("Fichier 1 téléchargé");
                toast.success("Fichier 2 téléchargé");
                toast.success("Fichier 3 téléchargé");
                toast.success("Tous les fichiers téléchargés avec succès");
              }}
            >
              Simul téléchargements
            </Button>
            <Button
              variant="neutral"
              onClick={() => {
                toast.info("Démarrage du processus...");
                setTimeout(() => toast.info("Étape 1/3 terminée"), 1000);
                setTimeout(() => toast.info("Étape 2/3 terminée"), 2000);
                setTimeout(() => toast.success("Processus terminé !"), 3000);
              }}
            >
              Processus par étapes
            </Button>
          </div>
        </section>

        {/* API Reference */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            API Reference
          </h2>

          <div className="space-y-6">
            {/* toast.success */}
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                toast.success(title, description?, duration?)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Affiche un toast de succès (vert)
              </p>
              <pre className="text-xs overflow-x-auto p-3 rounded" style={{ background: "rgba(0,0,0,0.1)", color: "var(--text-caption)" }}>
{`toast.success("Opération réussie");
toast.success("Fichier enregistré", "Le fichier a été sauvegardé");
toast.success("Email envoyé", undefined, 3000); // 3 secondes`}
              </pre>
            </div>

            {/* toast.error */}
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                toast.error(title, description?, duration?)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Affiche un toast d'erreur (rouge)
              </p>
              <pre className="text-xs overflow-x-auto p-3 rounded" style={{ background: "rgba(0,0,0,0.1)", color: "var(--text-caption)" }}>
{`toast.error("Erreur");
toast.error("Échec de l'enregistrement", "Vérifiez votre connexion");
toast.error("Erreur critique", "Message", 10000); // 10 secondes`}
              </pre>
            </div>

            {/* toast.warning */}
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                toast.warning(title, description?, duration?)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Affiche un toast d'avertissement (orange)
              </p>
              <pre className="text-xs overflow-x-auto p-3 rounded" style={{ background: "rgba(0,0,0,0.1)", color: "var(--text-caption)" }}>
{`toast.warning("Attention");
toast.warning("Modifications non sauvegardées", "Les données seront perdues");`}
              </pre>
            </div>

            {/* toast.info */}
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                toast.info(title, description?, duration?)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Affiche un toast informatif (bleu/violet)
              </p>
              <pre className="text-xs overflow-x-auto p-3 rounded" style={{ background: "rgba(0,0,0,0.1)", color: "var(--text-caption)" }}>
{`toast.info("Information");
toast.info("Nouvelle version", "Mise à jour disponible");`}
              </pre>
            </div>

            {/* toast.custom */}
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                toast.custom(variant, title, description?, options?)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Affiche un toast personnalisé avec options avancées
              </p>
              <pre className="text-xs overflow-x-auto p-3 rounded" style={{ background: "rgba(0,0,0,0.1)", color: "var(--text-caption)" }}>
{`toast.custom("success", "Titre", "Description", { 
  duration: 7000,
  persistent: false 
});

// Toast persistant (ne disparaît pas automatiquement)
toast.custom("warning", "Important", "Message important", { 
  persistent: true 
});`}
              </pre>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
            Installation
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                1. Wrapper l'application avec ToastProvider
              </h3>
              <pre className="text-xs overflow-x-auto p-4 rounded" style={{ background: "var(--surface-neutral-action)", color: "var(--text-caption)" }}>
{`import { ToastProvider } from "@/context/ToastContext";

function App() {
  return (
    <ToastProvider position="bottom-right" defaultDuration={5000} maxToasts={5}>
      <YourApp />
    </ToastProvider>
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                2. Utiliser le hook useToast dans les composants
              </h3>
              <pre className="text-xs overflow-x-auto p-4 rounded" style={{ background: "var(--surface-neutral-action)", color: "var(--text-caption)" }}>
{`import { useToast } from "@/context/ToastContext";

function MyComponent() {
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      await saveData();
      toast.success("Données enregistrées avec succès");
    } catch (error) {
      toast.error("Échec de l'enregistrement", error.message);
    }
  };

  return <button onClick={handleSave}>Save</button>;
}`}
              </pre>
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
                <li>• 4 variants (success, error, warning, info)</li>
                <li>• Auto-dismiss configurable (par défaut 5s)</li>
                <li>• Mode persistant (sans auto-dismiss)</li>
                <li>• Bouton de fermeture manuel</li>
                <li>• Max 5 toasts affichés simultanément</li>
                <li>• Animation slide + fade</li>
                <li>• Position configurable (4 coins)</li>
                <li>• Support titre + description</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 Design
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Background semi-transparent avec bordure</li>
                <li>• Icônes Lucide colorées</li>
                <li>• Support light/dark mode complet</li>
                <li>• Font Roboto Medium 16px (titre)</li>
                <li>• Font Roboto Regular 14px (description)</li>
                <li>• Box shadow 4px blur</li>
                <li>• Border-radius 16px</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ⚡ Performance
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Composants légers sans dépendances lourdes</li>
                <li>• Animations CSS performantes</li>
                <li>• Gestion mémoire avec auto-cleanup</li>
                <li>• Portal-free (pas de ReactDOM.createPortal)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ♿ Accessibilité
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Bouton fermeture avec aria-label</li>
                <li>• Focus visible sur boutons</li>
                <li>• Contraste WCAG AA respecté</li>
                <li>• Keyboard navigation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
