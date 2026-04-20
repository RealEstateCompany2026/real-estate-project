"use client";

import React from "react";
import { ArrowLeft, Home, Maximize2, MapPin, Tag } from "lucide-react";
import { Badge } from "./Badge";
import { AiSuggestion } from "./AiSuggestion";
import { type DealType, DEAL_TYPE_LABELS } from "./deal-types";

/**
 * AppBarFicheAffaire - Barre d'en-tête de fiche affaire
 * Organism du design system RealAgent
 *
 * Hauteur fixe : 100px. Affiche en un coup d'œil les informations clés
 * de l'affaire : identifiant, type, bien associé, prix, suggestions IA.
 *
 * Figma : "app bar . fiche affaire" — h=100px, px=20, py=27
 *
 * Composition :
 *   1. Bouton retour (← vers liste affaires)
 *   2. Identifiant affaire [deal_id] — H4 Bold
 *   3. Badge type affaire [DealType] (VENTE, GESTION, ACQUISITION, LOCATION)
 *   4. Type de bien [PropertyType] (Home icon + T1, T2, T3…)
 *   5. Surface [living_area_sqm]
 *   6. Ville (extrait de [address_full])
 *   7. Prix [desired_selling_price]
 *   8. AI suggestions
 */

export interface AppBarFicheAffaireProps {
  /** Identifiant de l'affaire (ex: "MV.789.083.263") */
  dealId: string;
  /** Type d'affaire */
  dealType: DealType;
  /** Statut de l'affaire (détermine le variant du badge) */
  status?: string;
  /** Type de bien (ex: "T4", "Studio", "Maison") */
  propertyType: string;
  /** Surface (ex: "84 m²") */
  surface: string;
  /** Ville du bien */
  city: string;
  /** Prix affiché (ex: "360 000€") */
  price: string;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback retour */
  onBack?: () => void;
  /** Callback clic AI suggestions */
  onAiClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Icon+Text atom
 */
function IconText({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex gap-[4px] items-center shrink-0">
      <div className="shrink-0 size-[20px] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

export function AppBarFicheAffaire({
  dealId,
  dealType,
  status,
  propertyType,
  surface,
  city,
  price,
  aiSuggestions = 0,
  onBack,
  onAiClick,
  className = "",
}: AppBarFicheAffaireProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`bg-surface-neutral-default h-[100px] flex items-center px-[20px] py-[27px] ${className}`.trim()}
    >
      <div className="flex gap-[24px] items-center">
        {/* 1. Bouton retour */}
        <button
          type="button"
          onClick={onBack}
          className="p-[12px] rounded-2xl transition-colors hover:opacity-70 text-content-body"
        >
          <ArrowLeft size={20} />
        </button>

        {/* 2. Identifiant affaire — H4 Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]">
          {dealId}
        </h4>

        {/* 3. Badge type affaire */}
        <Badge variant={status === "EN_COURS" ? "default" : "disabled"}>{DEAL_TYPE_LABELS[dealType]}</Badge>

        {/* 4. Type de bien */}
        <IconText icon={<Home size={20} style={{ color: iconColor }} />}>
          {propertyType}
        </IconText>

        {/* 5. Surface */}
        <IconText icon={<Maximize2 size={20} style={{ color: iconColor }} />}>
          {surface}
        </IconText>

        {/* 6. Ville */}
        <IconText icon={<MapPin size={20} style={{ color: iconColor }} />}>
          {city}
        </IconText>

        {/* 7. Prix */}
        <IconText icon={<Tag size={20} style={{ color: iconColor }} />}>
          {price}
        </IconText>

        {/* 8. AI suggestions */}
        <AiSuggestion count={aiSuggestions} onClick={onAiClick} />
      </div>
    </div>
  );
}
