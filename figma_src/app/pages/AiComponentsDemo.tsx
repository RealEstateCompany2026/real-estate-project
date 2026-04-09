import { AiSuggestion, AiTitleWithBadge } from "../components/atoms";
import {
  AiSuggestionBanner,
  AiSuggestionDashboard,
} from "../components/organisms";
import { useTheme } from "../context/ThemeContext";

/**
 * AiComponentsDemo - Page de démonstration des composants IA
 * 
 * Démontre tous les composants de la famille IA:
 * - AiSuggestion (badge compteur)
 * - AiTitleWithBadge (titre + badge)
 * - AiSuggestionBanner (banner contextuel)
 * - AiSuggestionDashboard (dashboard résumé)
 */

export default function AiComponentsDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="min-h-screen p-[40px]"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#111215",
      }}
    >
      <div className="max-w-[1400px] mx-auto space-y-[60px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-[32px] leading-[40px] font-bold mb-[8px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Composants IA - RealAgent
            </h1>
            <p
              className="text-[16px] leading-[24px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Système de suggestions et d'actions détectées par l'IA
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-[16px] py-[12px] rounded-[12px] font-semibold text-[14px] transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--surface-neutral-action)",
              color: "var(--text-body)",
            }}
          >
            Mode: {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>

        {/* Section 1: AiSuggestion Badge */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. AiSuggestion - Badge compteur
          </h2>
          <div
            className="p-[32px] rounded-[16px]"
            style={{ backgroundColor: "var(--surface-neutral-action)" }}
          >
            <div className="flex flex-wrap gap-[32px] items-center">
              <div className="flex flex-col gap-[12px] items-center">
                <AiSuggestion count={0} />
                <span
                  className="text-[14px]"
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  count = 0
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-center">
                <AiSuggestion count={1} />
                <span
                  className="text-[14px]"
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  count = 1
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-center">
                <AiSuggestion count={3} />
                <span
                  className="text-[14px]"
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  count = 3
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-center">
                <AiSuggestion count={12} />
                <span
                  className="text-[14px]"
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  count = 12
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: AiTitleWithBadge */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. AiTitleWithBadge - Titre + Badge
          </h2>
          <div
            className="p-[32px] rounded-[16px]"
            style={{ backgroundColor: "var(--surface-neutral-action)" }}
          >
            <div className="flex flex-wrap gap-[32px] items-center">
              <AiTitleWithBadge title="Conseil" count={3} />
              <AiTitleWithBadge title="Service" count={0} />
              <AiTitleWithBadge title="Administratif" count={5} />
              <AiTitleWithBadge title="Transaction" count={1} />
            </div>
          </div>
        </section>

        {/* Section 3: AiSuggestionDashboard */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. AiSuggestionDashboard - Résumé en tête de page
          </h2>
          <div className="space-y-[24px]">
            <div>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Avec suggestions multiples:
              </p>
              <AiSuggestionDashboard
                conseil={3}
                service={1}
                administratif={5}
                transaction={2}
                onViewAll={() => alert("Voir toutes les suggestions")}
              />
            </div>
            <div>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Aucune suggestion:
              </p>
              <AiSuggestionDashboard
                conseil={0}
                service={0}
                administratif={0}
                transaction={0}
                onViewAll={() => alert("Aucune suggestion disponible")}
              />
            </div>
          </div>
        </section>

        {/* Section 4: AiSuggestionBanner */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. AiSuggestionBanner - Banner contextuel
          </h2>
          <div className="space-y-[24px]">
            <div>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Suggestion de contact:
              </p>
              <AiSuggestionBanner
                suggestion="Bonjour, M. Dupont n'a pas donné de nouvelles depuis 15 jours. Il serait opportun de le recontacter pour finaliser le dossier de vente."
                actionLabel="Programmer"
                onAction={() => alert("Programmer l'action")}
              />
            </div>
            <div>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Suggestion administrative:
              </p>
              <AiSuggestionBanner
                suggestion="Le DPE du bien situé au 25 rue Victor Hugo expire dans 30 jours. Pensez à programmer un nouveau diagnostic."
                actionLabel="Planifier"
                onAction={() => alert("Planifier le diagnostic")}
              />
            </div>
            <div>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Suggestion de transaction:
              </p>
              <AiSuggestionBanner
                suggestion="Votre client Mme Martin recherche un T3 dans le 16ème. Un nouveau bien correspondant à ses critères vient d'être ajouté au catalogue."
                actionLabel="Voir le bien"
                onAction={() => alert("Afficher le bien")}
              />
            </div>
          </div>
        </section>

        {/* Section 5: Usage examples */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. Exemples d'utilisation dans le CRM
          </h2>
          <div
            className="p-[32px] rounded-[16px] space-y-[32px]"
            style={{ backgroundColor: "var(--surface-neutral-action)" }}
          >
            <div>
              <h3
                className="text-[18px] font-semibold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                En tête de tableau de bord
              </h3>
              <AiSuggestionDashboard
                conseil={8}
                service={3}
                administratif={12}
                transaction={5}
                onViewAll={() => alert("Navigation vers page suggestions")}
              />
            </div>

            <div>
              <h3
                className="text-[18px] font-semibold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Dans une section contextuelle
              </h3>
              <AiSuggestionBanner
                suggestion="Cette affaire est en attente depuis 45 jours. L'IA suggère de relancer les parties prenantes ou de clôturer le dossier."
                actionLabel="Relancer"
                onAction={() => alert("Relance envoyée")}
              />
            </div>
          </div>
        </section>

        {/* Footer info */}
        <div
          className="p-[24px] rounded-[12px] border"
          style={{
            backgroundColor: "var(--surface-neutral-action)",
            borderColor: "var(--neutral-200)",
          }}
        >
          <h3
            className="text-[16px] font-semibold mb-[12px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            📝 Notes techniques
          </h3>
          <ul
            className="space-y-[8px] text-[14px] leading-[20px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            <li>
              • <strong>AiSuggestion</strong>: Badge 34×24px, état 0 (neutre) ou
              nombre (violet #7b72f9)
            </li>
            <li>
              • <strong>AiTitleWithBadge</strong>: Variante spécialisée de Text
              + Icon pour la famille IA
            </li>
            <li>
              • <strong>AiSuggestionDashboard</strong>: 4 catégories avec
              bouton CTA "Voir les suggestions"
            </li>
            <li>
              • <strong>AiSuggestionBanner</strong>: Banner contextuel avec
              icône lampe 💡 + texte + action
            </li>
            <li>• Support complet du light/dark mode avec ThemeProvider</li>
            <li>
              • Tokens de couleur et typographie conformes au design system
              Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}