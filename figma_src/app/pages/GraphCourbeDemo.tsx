import { useState } from "react";
import { GraphCourbe } from "../components/organisms/GraphCourbe";
import { ThemeToggle } from "../components/ThemeToggle";

/**
 * GraphCourbeDemo - Page de démonstration du composant GraphCourbe
 */
export default function GraphCourbeDemo() {
  const [selectedDate] = useState("22 fév 2026");
  const [selectedValue] = useState("28 réactions positives");

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              GraphCourbe Component
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Design System RealAgent - Graph de tendance avec courbe
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
                <li>• Titre configurable</li>
                <li>• Date sélectionnée affichée</li>
                <li>• Valeur sélectionnée affichée</li>
                <li>• Indicateur de tendance (hausse/baisse)</li>
                <li>• Pourcentage de variation</li>
                <li>• Graphique SVG responsive</li>
                <li>• Support complet light/dark mode</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 Caractéristiques
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>Titre:</strong> H6 Bold 20px/24px</li>
                <li>• <strong>Date:</strong> Caption 14px/16px</li>
                <li>• <strong>Valeur:</strong> H3 Bold 32px/38px</li>
                <li>• <strong>Tendance:</strong> Icône + texte avec couleur</li>
                <li>• <strong>Graph:</strong> Courbe avec gradient et points</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example 1: Tendance à la hausse */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              1. Engagement - Tendance à la hausse
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Graph avec tendance positive (+7%)
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <div className="p-8" style={{ background: "var(--surface-neutral-default)" }}>
              <GraphCourbe
                title="Engagement"
                selectedDate={selectedDate}
                selectedValue={selectedValue}
                trendPercentage="7%"
                trendDirection="up"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Code d'usage :
            </p>
            <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<GraphCourbe
  title="Engagement"
  selectedDate="22 fév 2026"
  selectedValue="28 réactions positives"
  trendPercentage="7%"
  trendDirection="up"
/>`}
            </pre>
          </div>
        </section>

        {/* Example 2: Tendance à la baisse */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              2. Qualification - Tendance à la baisse
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Graph avec tendance négative (-3%)
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <div className="p-8" style={{ background: "var(--surface-neutral-default)" }}>
              <GraphCourbe
                title="Qualification"
                selectedDate="15 mars 2026"
                selectedValue="12 critères validés"
                trendPercentage="3%"
                trendDirection="down"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Code d'usage :
            </p>
            <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<GraphCourbe
  title="Qualification"
  selectedDate="15 mars 2026"
  selectedValue="12 critères validés"
  trendPercentage="3%"
  trendDirection="down"
/>`}
            </pre>
          </div>
        </section>

        {/* Example 3: Conversion */}
        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              3. Conversion - Tendance à la hausse
            </h2>
            <p className="text-sm mb-2" style={{ color: "var(--text-caption)" }}>
              Graph de conversion avec tendance positive (+12%)
            </p>
          </div>

          <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-neutral-default)" }}>
            <div className="p-8" style={{ background: "var(--surface-neutral-default)" }}>
              <GraphCourbe
                title="Conversion"
                selectedDate="10 avril 2026"
                selectedValue="8 affaires conclues"
                trendPercentage="12%"
                trendDirection="up"
              />
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--text-body)" }}>
              Code d'usage :
            </p>
            <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<GraphCourbe
  title="Conversion"
  selectedDate="10 avril 2026"
  selectedValue="8 affaires conclues"
  trendPercentage="12%"
  trendDirection="up"
/>`}
            </pre>
          </div>
        </section>

        {/* Props */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Props
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border-neutral-default)" }}>
                  <th className="text-left p-2" style={{ color: "var(--text-body)" }}>
                    Prop
                  </th>
                  <th className="text-left p-2" style={{ color: "var(--text-body)" }}>
                    Type
                  </th>
                  <th className="text-left p-2" style={{ color: "var(--text-body)" }}>
                    Default
                  </th>
                  <th className="text-left p-2" style={{ color: "var(--text-body)" }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>title</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>string</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    -
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    Titre du graphique
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>selectedDate</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>string</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    -
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    Date sélectionnée
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>selectedValue</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>string</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    -
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    Valeur sélectionnée
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>trendPercentage</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>string</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    -
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    Pourcentage de variation
                  </td>
                </tr>
                <tr>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>trendDirection</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>"up" | "down"</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    <code>"up"</code>
                  </td>
                  <td className="p-2" style={{ color: "var(--text-caption)" }}>
                    Direction de la tendance
                  </td>
                </tr>
              </tbody>
            </table>
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
                📊 Fiche Client
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Engagement du client</li>
                <li>• Qualification du profil</li>
                <li>• Historique d'activité</li>
                <li>• Évolution du scoring</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🏢 Fiche Affaire
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Progression de l'affaire</li>
                <li>• Demandes de visite</li>
                <li>• Taux de conversion</li>
                <li>• Évolution du prix</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🏠 Fiche Bien
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Intérêt pour le bien</li>
                <li>• Nombre de visites</li>
                <li>• Évolution des demandes</li>
                <li>• Popularité du bien</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                📈 Tableau de bord
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• KPIs globaux</li>
                <li>• Performance de l'équipe</li>
                <li>• Métriques mensuelles</li>
                <li>• Objectifs atteints</li>
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
                <li>• Graphique SVG responsive</li>
                <li>• Courbe lissée avec gradient</li>
                <li>• Points de données visibles</li>
                <li>• Indicateur de tendance coloré</li>
                <li>• Tooltip au survol (à venir)</li>
                <li>• Animation d'entrée (à venir)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                🎨 Design Tokens
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• --text-body (titre et labels)</li>
                <li>• --text-caption (date)</li>
                <li>• --text-strong (valeur)</li>
                <li>• --success-500 (tendance positive)</li>
                <li>• --error-500 (tendance négative)</li>
                <li>• --branded-500 (courbe)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                📏 Typographie
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>Titre:</strong> H6 Bold 20px/24px</li>
                <li>• <strong>Date:</strong> Caption 14px/16px</li>
                <li>• <strong>Valeur:</strong> H3 Bold 32px/38px</li>
                <li>• <strong>Tendance:</strong> Caption 14px/16px</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                ♿ Accessibilité
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• Titre sémantique (h6)</li>
                <li>• Labels descriptifs</li>
                <li>• Contraste conforme WCAG AA</li>
                <li>• Support screen readers</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
