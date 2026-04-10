"use client";

import React from "react";
import { ArrowLeft, User, Database } from "lucide-react";
import { Badge } from "./Badge";
import { Chip } from "./Chip";
import { KpiIndicator } from "./KpiIndicator";

/**
 * AppBarFicheBien - Barre d'en-tête de fiche bien
 * Organism du design system RealAgent
 *
 * Construction atomique avec composants du design system.
 * Affiche identifiant du bien, badges, contact, KPI Qualification et suggestion IA.
 */

export interface AppBarFicheBienProps {
  /** Identifiant du bien */
  bienId?: string;
  /** Type de transaction (À VENDRE, À LOUER, etc.) */
  transactionType?: string;
  /** Nom du contact/client */
  contactName?: string;
  /** KPI Qualification (0-100) */
  qualification?: number;
  /** Badge CARNET */
  showCarnet?: boolean;
  /** Badge MANDAT */
  showMandat?: boolean;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback lors du clic sur le bouton retour */
  onBack?: () => void;
}

export const AppBarFicheBien: React.FC<AppBarFicheBienProps> = ({
  bienId = "identifiant du bien",
  transactionType = "À VENDRE",
  contactName = "CAPELLO, Jean-François",
  qualification = 64,
  showCarnet = true,
  showMandat = true,
  aiSuggestions = 1,
  onBack,
}) => {
  return (
    <div className="h-[100px] flex items-center px-8 bg-surface-neutral-default dark:bg-surface-neutral-default">
      <div className="flex items-center gap-6">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="p-3 rounded-2xl transition-colors hover:opacity-70 text-content-body"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Identifiant du bien - H4 Desktop Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-strong">
          {bienId}
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
        {showCarnet && (
          <Badge variant="success">
            CARNET
          </Badge>
        )}

        {/* Badge MANDAT */}
        {showMandat && (
          <Badge variant="success">
            MANDAT
          </Badge>
        )}

        {/* Badge IA */}
        {aiSuggestions > 0 && (
          <div className="h-6 px-3 rounded-2xl flex items-center justify-center bg-surface-branded-default dark:bg-surface-branded-default border border-solid border-surface-branded-default dark:border-surface-branded-default">
            <span className="font-bold text-[14px] leading-[16px] tracking-[0.14px] text-content-on-branded-default dark:text-content-on-branded-default">
              {aiSuggestions}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
