"use client";

import React from "react";
import { ArrowLeft, User, Database } from "lucide-react";
import { Badge } from "./Badge";
import { Chip } from "./Chip";
import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestion } from "./AiSuggestion";

/**
 * AppBarFicheBien - Barre d'en-tête de fiche bien
 * Organism du design system RealAgent
 *
 * Construction atomique avec composants du design system.
 * Affiche identifiant du bien, badges, contact, KPI Qualification et suggestion IA.
 */

export interface AppBarFicheBienProps {
  /** Titre affiché — format "Type · surface" */
  title?: string;
  /** Type de transaction (À VENDRE, À LOUER, etc.) */
  transactionType?: string;
  /** Nom du contact/propriétaire */
  contactName?: string;
  /** KPI Qualification (0-100) */
  qualification?: number;
  /** Carnet activé pour ce bien */
  carnetActive?: boolean;
  /** Au moins un mandat en cours */
  mandatActive?: boolean;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback lors du clic sur le bouton retour */
  onBack?: () => void;
}

export const AppBarFicheBien: React.FC<AppBarFicheBienProps> = ({
  title = "Bien",
  transactionType = "À VENDRE",
  contactName = "—",
  qualification = 0,
  carnetActive = false,
  mandatActive = false,
  aiSuggestions = 0,
  onBack,
}) => {
  return (
    <div className="h-[100px] flex items-center px-8 bg-surface-neutral-default">
      <div className="flex items-center gap-6">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="p-3 rounded-2xl transition-colors hover:opacity-70 text-content-body"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Titre du bien - H4 Desktop Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings">
          {title}
        </h4>

        {/* Badge type transaction */}
        <Badge variant="default">
          {transactionType}
        </Badge>

        {/* Chip nom du contact */}
        <Chip size="medium" icon={<User size={20} className="text-icon-neutral-default" />}>
          {contactName}
        </Chip>

        {/* KPI Qualification */}
        <KpiIndicator
          icon={<Database size={20} className="text-icon-neutral-default" />}
          value={`${qualification}%`}
          percentage={qualification}
          variant="straight"
        />

        {/* Badge CARNET */}
        <Badge variant={carnetActive ? "success" : "disabled"}>
          CARNET
        </Badge>

        {/* Badge MANDAT */}
        <Badge variant={mandatActive ? "success" : "disabled"}>
          MANDAT
        </Badge>

        {/* Badge IA */}
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
};
