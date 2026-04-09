import {
  Badge,
  BadgeCriteria,
  BadgePaymentMethod,
  Chip,
  ChipDate,
  ChipId,
  ChipScore,
  ChipScoreAuto,
  ChipTrend,
  MessageStatusDot,
  ButtonSort,
  useSortState,
  KpiIndicator,
} from "../components/atoms";
import { ThemeToggle } from "../components/ThemeToggle";
import { Database, MessageCircle, ScrollText, Flame, Drill } from "lucide-react";

/**
 * Atoms Demo Page
 * Showcases all atomic components from the RealAgent Design System
 * Includes: Badge, Chip, ChipScore, ChipTrend, MessageStatusDot, ButtonSort
 */
export default function AtomsDemo() {
  const { sortBy, sortDirection, handleSort } = useSortState();

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-neutral-container)" }}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              Atoms Components
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Design System RealAgent - Composants atomiques
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Badge (AtomeSticker) */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Badge (AtomeSticker)
          </h2>
          
          <div className="space-y-6">
            {/* All variants */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Toutes les variantes
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="default" label="Default" />
                <Badge variant="disabled" label="Disabled" />
                <Badge variant="information" label="Information" />
                <Badge variant="warning" label="Warning" />
                <Badge variant="success" label="Success" />
                <Badge variant="error" label="Error" />
              </div>
            </div>

            {/* Real use cases */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Cas d'usage réels
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="success" label="Actif" />
                <Badge variant="warning" label="En attente" />
                <Badge variant="error" label="Expiré" />
                <Badge variant="information" label="Nouveau" />
                <Badge variant="default" label="Standard" />
                <Badge variant="disabled" label="Archivé" />
              </div>
            </div>

            {/* Business statuses */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Statuts métier
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="success" label="Mandat signé" />
                <Badge variant="warning" label="À relancer" />
                <Badge variant="error" label="Perdu" />
                <Badge variant="information" label="Prospect" />
                <Badge variant="success" label="Compromis signé" />
                <Badge variant="warning" label="Offre en attente" />
              </div>
            </div>
          </div>
        </section>

        {/* BadgeCriteria */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            BadgeCriteria (Filtres de recherche)
          </h2>
          
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Variantes outlined / default
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <BadgeCriteria variant="outlined" label="Outlined" onRemove={() => alert('Filtre supprimé')} />
                <BadgeCriteria variant="default" label="Default" onRemove={() => alert('Filtre supprimé')} />
              </div>
            </div>

            {/* Search filters examples */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Exemples de filtres de recherche
              </h3>
              <div className="flex flex-wrap gap-3 items-center">
                <BadgeCriteria variant="outlined" label="Paris 75001" onRemove={() => {}} />
                <BadgeCriteria variant="outlined" label="Appartement" onRemove={() => {}} />
                <BadgeCriteria variant="outlined" label="2-3 pièces" onRemove={() => {}} />
                <BadgeCriteria variant="outlined" label="200k - 400k €" onRemove={() => {}} />
                <BadgeCriteria variant="outlined" label="Balcon" onRemove={() => {}} />
              </div>
            </div>

            {/* Default variant examples */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Variante default (fond coloré)
              </h3>
              <div className="flex flex-wrap gap-3 items-center">
                <BadgeCriteria variant="default" label="Lyon 69000" onRemove={() => {}} />
                <BadgeCriteria variant="default" label="Maison" onRemove={() => {}} />
                <BadgeCriteria variant="default" label="Jardin" onRemove={() => {}} />
                <BadgeCriteria variant="default" label="Garage" onRemove={() => {}} />
              </div>
            </div>

            {/* Without remove button */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Sans bouton de suppression
              </h3>
              <div className="flex flex-wrap gap-3 items-center">
                <BadgeCriteria variant="outlined" label="Non supprimable" />
                <BadgeCriteria variant="default" label="Non supprimable" />
              </div>
            </div>
          </div>
        </section>

        {/* BadgePaymentMethod */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            BadgePaymentMethod (Méthode de paiement)
          </h2>
          
          <div className="space-y-6">
            {/* Payment methods */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Tous les types de cartes
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <BadgePaymentMethod method="visa" />
                <BadgePaymentMethod method="mastercard" />
                <BadgePaymentMethod method="CB" />
                <BadgePaymentMethod method="Paypal" />
              </div>
            </div>
          </div>
        </section>

        {/* Chips */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Chips
          </h2>
          
          <div className="space-y-6">
            {/* Basic Chips */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Chip simple
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Chip label="Appartement" />
                <Chip label="Maison" />
                <Chip label="Terrain" />
                <Chip label="Commercial" />
              </div>
            </div>

            {/* ChipDate */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                ChipDate
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ChipDate date="23/03/2026" />
                <ChipDate date="15/12/2025" />
                <ChipDate date="01/01/2026" />
              </div>
            </div>

            {/* ChipId */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                ChipId
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ChipId id="AFF-2024-001" />
                <ChipId id="CLI-2024-042" />
                <ChipId id="BIE-2024-156" />
              </div>
            </div>
          </div>
        </section>

        {/* ChipScore */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            ChipScore (Scoring Client)
          </h2>
          
          <div className="space-y-6">
            {/* Manual scores */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Scores avec niveaux manuels
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ChipScore score={5} level="veryLow" />
                <ChipScore score={25} level="low" />
                <ChipScore score={50} level="medium" />
                <ChipScore score={75} level="high" />
                <ChipScore score={95} level="veryHigh" />
              </div>
            </div>

            {/* Auto scores */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Scores automatiques (0-100)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ChipScoreAuto score={95} />
                <ChipScoreAuto score={78} />
                <ChipScoreAuto score={54} />
                <ChipScoreAuto score={28} />
                <ChipScoreAuto score={12} />
              </div>
            </div>

            {/* Disabled */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Désactivé
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ChipScore score={75} level="high" disabled />
                <ChipScoreAuto score={75} disabled />
              </div>
            </div>
          </div>
        </section>

        {/* ChipTrend */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            ChipTrend (Tendance)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Directions de tendance
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ChipTrend label="+12%" trend="up" />
                <ChipTrend label="-8%" trend="down" />
                <ChipTrend label="0%" trend="neutral" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Exemples métier
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ChipTrend label="+24.5%" trend="up" />
                <ChipTrend label="-15.3%" trend="down" />
                <ChipTrend label="+5.2%" trend="up" />
                <ChipTrend label="-2.1%" trend="down" />
                <ChipTrend label="0.0%" trend="neutral" />
              </div>
            </div>
          </div>
        </section>

        {/* MessageStatusDot */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            MessageStatusDot (Statut Message)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                États de statut
              </h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-3">
                  <MessageStatusDot status="success" />
                  <span style={{ color: "var(--text-body)" }}>Success (envoyé)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageStatusDot status="fail" />
                  <span style={{ color: "var(--text-body)" }}>Fail (échoué)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageStatusDot status="none" />
                  <span style={{ color: "var(--text-body)" }}>None (non envoyé)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Tailles personnalisées
              </h3>
              <div className="flex flex-wrap gap-6 items-center">
                <MessageStatusDot status="success" size={12} />
                <MessageStatusDot status="success" size={18} />
                <MessageStatusDot status="success" size={24} />
                <MessageStatusDot status="success" size={32} />
              </div>
            </div>
          </div>
        </section>

        {/* ButtonSort */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            ButtonSort (Tri de colonnes)
          </h2>
          
          <div className="space-y-6">
            {/* États visuels */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                États du tri (3 états possibles)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ButtonSort label="Aucun tri" sortDirection="none" />
                <ButtonSort label="Tri ascendant" sortDirection="asc" />
                <ButtonSort label="Tri descendant" sortDirection="desc" />
              </div>
              <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                L'icône n'apparaît que lorsque le tri est actif (asc ou desc)
              </p>
            </div>

            {/* Avec compteur */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Avec compteur
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ButtonSort label="Clients" count={482} sortDirection="none" />
                <ButtonSort label="Clients" count={482} sortDirection="asc" />
                <ButtonSort label="Clients" count={482} sortDirection="desc" />
              </div>
            </div>

            {/* Exemple interactif */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Exemple interactif (cliquez pour trier)
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <ButtonSort
                  label="Nom"
                  sortDirection={sortBy === "name" ? sortDirection : "none"}
                  onClick={() => handleSort("name")}
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
                  label="Score"
                  sortDirection={sortBy === "score" ? sortDirection : "none"}
                  onClick={() => handleSort("score")}
                />
              </div>
              <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
                État actuel : {sortBy ? `${sortBy} (${sortDirection})` : "Aucun tri"} • Cycle: none → asc → desc → none
              </p>
            </div>
          </div>
        </section>

        {/* KpiIndicator */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            KpiIndicator (Indicateurs de performance)
          </h2>

          <div className="space-y-8">
            {/* Vertical variants */}
            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: "var(--text-body)" }}>
                Variante verticale (avec 9 barres de progression)
              </h3>
              <div className="flex flex-wrap gap-8 items-start">
                {/* Qualification */}
                <div className="flex flex-col items-center">
                  <div className="w-[81px]">
                    <KpiIndicator
                      icon={<Database size={20} style={{ color: "#444955" }} />}
                      value="64%"
                      percentage={64}
                      variant="vertical"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Qualification
                  </p>
                </div>

                {/* Engagement */}
                <div className="flex flex-col items-center">
                  <div className="w-[81px]">
                    <KpiIndicator
                      icon={<MessageCircle size={20} style={{ color: "#444955" }} />}
                      value="82%"
                      percentage={82}
                      variant="vertical"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Engagement
                  </p>
                </div>

                {/* Conversion */}
                <div className="flex flex-col items-center">
                  <div className="w-[81px]">
                    <KpiIndicator
                      icon={<ScrollText size={20} style={{ color: "#444955" }} />}
                      value="24%"
                      percentage={24}
                      variant="vertical"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Conversion
                  </p>
                </div>

                {/* Réactivation */}
                <div className="flex flex-col items-center">
                  <div className="w-[81px]">
                    <KpiIndicator
                      icon={<Flame size={20} style={{ color: "#444955" }} />}
                      value="49%"
                      percentage={49}
                      variant="vertical"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Réactivation
                  </p>
                </div>

                {/* Entretien */}
                <div className="flex flex-col items-center">
                  <div className="w-[81px]">
                    <KpiIndicator
                      icon={<Drill size={20} style={{ color: "#444955" }} />}
                      value="38"
                      percentage={38}
                      variant="vertical"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Entretien
                  </p>
                </div>
              </div>
            </div>

            {/* Straight variants */}
            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: "var(--text-body)" }}>
                Variante straight (avec 1 barre horizontale)
              </h3>
              <div className="flex flex-wrap gap-8 items-center">
                {/* Qualification Straight */}
                <div className="flex flex-col items-center">
                  <div className="w-auto">
                    <KpiIndicator
                      icon={<Database size={20} style={{ color: "#444955" }} />}
                      value="64%"
                      percentage={64}
                      variant="straight"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Qualification
                  </p>
                </div>

                {/* Engagement Straight */}
                <div className="flex flex-col items-center">
                  <div className="w-auto">
                    <KpiIndicator
                      icon={<MessageCircle size={20} style={{ color: "#444955" }} />}
                      value="82%"
                      percentage={82}
                      variant="straight"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Engagement
                  </p>
                </div>

                {/* Conversion Straight */}
                <div className="flex flex-col items-center">
                  <div className="w-auto">
                    <KpiIndicator
                      icon={<ScrollText size={20} style={{ color: "#444955" }} />}
                      value="24%"
                      percentage={24}
                      variant="straight"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Conversion
                  </p>
                </div>

                {/* Réactivation Straight */}
                <div className="flex flex-col items-center">
                  <div className="w-auto">
                    <KpiIndicator
                      icon={<Flame size={20} style={{ color: "#444955" }} />}
                      value="49%"
                      percentage={49}
                      variant="straight"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Réactivation
                  </p>
                </div>

                {/* Entretien Straight */}
                <div className="flex flex-col items-center">
                  <div className="w-auto">
                    <KpiIndicator
                      icon={<Drill size={20} style={{ color: "#444955" }} />}
                      value="38"
                      percentage={38}
                      variant="straight"
                    />
                  </div>
                  <p className="mt-2 text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                    Entretien
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Info */}
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                💡 Utilisation
              </h3>
              <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                <li>• <strong>Vertical:</strong> Affiche 9 barres de progression empilées, permet de voir la progression visuelle</li>
                <li>• <strong>Straight:</strong> Affiche 1 seule barre, version compacte pour les listes</li>
                <li>• <strong>percentage:</strong> Pourcentage (0-100) qui détermine automatiquement la couleur et les barres remplies</li>
                <li>• <strong>Couleurs automatiques:</strong> Rouge {'<'} 25%, Orange 25-60%, Vert {'>'} 60%</li>
                <li>• <strong>Barres remplies:</strong> Calculées proportionnellement au pourcentage (0-9 barres)</li>
                <li>• Icônes issues de lucide-react : Database, MessageCircle, ScrollText, Flame, Drill</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}