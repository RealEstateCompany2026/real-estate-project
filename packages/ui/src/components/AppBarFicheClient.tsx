"use client";

import React from "react";
import { ArrowLeft, Database, MessageCircle, ScrollText, Flame } from "lucide-react";
import { Badge } from "./Badge";
import { KpiIndicator } from "./KpiIndicator";
import { AiTitleWithBadge } from "./AiTitleWithBadge";
import { AiSuggestion } from "./AiSuggestion";

/**
 * AppBarFicheClient - Barre d'en-tête de fiche client
 * Organism du design system RealAgent
 *
 * Construction atomique avec composants du design system.
 * Affiche nom du client, tags, KPI indicators et suggestion IA.
 */

export interface AppBarFicheClientProps {
  /** Nom du client */
  clientName?: string;
  /** Tags du client */
  tags?: string[];
  /** KPI Qualification (0-100) */
  qualification?: number;
  /** KPI Engagement (0-100) */
  engagement?: number;
  /** KPI Conversion (0-100) */
  conversion?: number;
  /** KPI Réactivation (0-100) */
  reactivation?: number;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback lors du clic sur le bouton retour */
  onBack?: () => void;
}

export const AppBarFicheClient: React.FC<AppBarFicheClientProps> = ({
  clientName = "NOM, Prénom du client",
  tags = ["VENDEUR", "ACQUÉREUR"],
  qualification = 64,
  engagement = 82,
  conversion = 24,
  reactivation = 49,
  aiSuggestions = 1,
  onBack,
}) => {
  return (
    <div className="h-[100px] flex items-center px-8 bg-surface-neutral-default">
      <div className="flex items-center gap-6">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="p-3 rounded-lg transition-colors hover:opacity-70 text-content-body"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Nom du client - H4 Desktop Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings">
          {clientName}
        </h4>

        {/* Tags */}
        {tags.map((tag, index) => (
          <Badge key={index} variant="default">
            {tag}
          </Badge>
        ))}

        {/* KPI Qualification */}
        <KpiIndicator
          icon={<Database size={20} className="text-icon-neutral-default" />}
          value={`${qualification}%`}
          percentage={qualification}
          variant="straight"
        />

        {/* KPI Engagement */}
        <KpiIndicator
          icon={<MessageCircle size={20} className="text-icon-neutral-default" />}
          value={`${engagement}%`}
          percentage={engagement}
          variant="straight"
        />

        {/* KPI Conversion */}
        <KpiIndicator
          icon={<ScrollText size={20} className="text-icon-neutral-default" />}
          value={`${conversion}%`}
          percentage={conversion}
          variant="straight"
        />

        {/* KPI Réactivation */}
        <KpiIndicator
          icon={<Flame size={20} className="text-icon-neutral-default" />}
          value={`${reactivation}%`}
          percentage={reactivation}
          variant="straight"
        />

        {/* Badge IA */}
        {aiSuggestions > 0 && (
          <AiSuggestion count={aiSuggestions} />
        )}
      </div>
    </div>
  );
};
