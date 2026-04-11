"use client";

import React from "react";
import { ArrowLeft, UserCircle, Calendar } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";

/**
 * AppBarFicheDocument - Barre d'en-tête de fiche document
 * Organism du design system RealAgent
 *
 * Hauteur fixe : 100px.
 *
 * Figma : "app bar . fiche document" — h=100px, px=20, py=27
 *
 * Composition :
 *   1. Bouton retour (← vers liste précédente)
 *   2. Nom du document [document_title] — H4 Bold
 *   3. Nom du contact associé [client_id] (optionnel)
 *   4. ID affaire associée [deal_id] (optionnel)
 *   5. Badge statut [document_status] : REÇU, VÉRIFIÉ, EXPIRÉ, REJETÉ, ARCHIVÉ
 *   6. Date de création [created_at]
 */

export type DocumentStatus =
  | "EN ATTENTE"
  | "REÇU"
  | "VÉRIFIÉ"
  | "EXPIRÉ"
  | "REJETÉ"
  | "ARCHIVÉ";

const STATUS_VARIANT: Record<DocumentStatus, BadgeVariant> = {
  "EN ATTENTE": "warning",
  "REÇU": "information",
  "VÉRIFIÉ": "success",
  "EXPIRÉ": "error",
  "REJETÉ": "error",
  "ARCHIVÉ": "disabled",
};

export interface AppBarFicheDocumentProps {
  /** Nom du document */
  documentName: string;
  /** Nom du contact associé (optionnel) */
  contactName?: string;
  /** ID de l'affaire associée (optionnel) */
  dealId?: string;
  /** Statut du document */
  status: DocumentStatus;
  /** Date de création (ex: "03 jan. 2027") */
  date: string;
  /** Callback retour */
  onBack?: () => void;
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

export function AppBarFicheDocument({
  documentName,
  contactName,
  dealId,
  status,
  date,
  onBack,
  className = "",
}: AppBarFicheDocumentProps) {
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

        {/* 2. Nom du document — H4 Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]">
          {documentName}
        </h4>

        {/* 3. Contact associé (optionnel) */}
        {contactName && (
          <IconText
            icon={<UserCircle size={20} style={{ color: iconColor }} />}
          >
            {contactName}
          </IconText>
        )}

        {/* 4. ID affaire (optionnel, texte regular) */}
        {dealId && (
          <span className="text-base font-normal font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
            {dealId}
          </span>
        )}

        {/* 5. Badge statut */}
        <Badge variant={STATUS_VARIANT[status]}>{status}</Badge>

        {/* 6. Date */}
        <IconText icon={<Calendar size={20} style={{ color: iconColor }} />}>
          {date}
        </IconText>
      </div>
    </div>
  );
}
