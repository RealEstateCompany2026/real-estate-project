"use client";

import React from "react";
import { UserCircle, Home, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";

/**
 * ListFinancement - Ligne de liste dossier de financement
 * Organism du design system RealAgent
 *
 * Suivi du dossier de financement de l'acquéreur, affiché dans :
 *   - L'affaire Vente (côté vendeur) : on voit l'acquéreur + statut dossier
 *   - L'affaire Recherche (côté acquéreur) : on voit les infos du bien + statut dossier
 *
 * Variante "vente" :
 *   - Gauche : nom acquéreur
 *   - Droite : badge statut (INCOMPLET, COMPLET, VALIDÉ…) + "Voir les notes" + AI
 *
 * Variante "recherche" :
 *   - Gauche : nom contact + type + surface + ville
 *   - Droite : badge statut + "Voir les notes" + AI
 *
 * Figma : "List . financement" — h=70px, px=20, py=13, justify-between
 */

/** Props communes */
interface ListFinancementBaseProps {
  /** Nom du contact */
  contactName: string;
  /** Statut du dossier de financement */
  status: { label: string; variant: BadgeVariant };
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur "Voir les notes" */
  onView?: () => void;
  /** Callback au clic sur la ligne */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/** Variant Vente : contact seul */
export interface ListFinancementVenteProps extends ListFinancementBaseProps {
  useCase: "vente";
  propertyType?: never;
  surface?: never;
  city?: never;
}

/** Variant Recherche : contact + infos bien */
export interface ListFinancementRechercheProps extends ListFinancementBaseProps {
  useCase: "recherche";
  /** Type de bien (T3, Maison, etc.) */
  propertyType: string;
  /** Surface (ex: "120m²") */
  surface: string;
  /** Ville / commune */
  city: string;
}

export type ListFinancementProps = ListFinancementVenteProps | ListFinancementRechercheProps;

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

export function ListFinancement(props: ListFinancementProps) {
  const {
    contactName,
    useCase,
    status,
    aiSuggestions = 0,
    onView,
    onClick,
    className = "",
  } = props;

  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-lg flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : contact + (infos bien si recherche) */}
      <div className="flex gap-[24px] items-center shrink-0">
        <IconText icon={<UserCircle size={20} style={{ color: iconColor }} />}>
          {contactName}
        </IconText>
        {useCase === "recherche" && (
          <>
            <IconText icon={<Home size={20} style={{ color: iconColor }} />}>
              {props.propertyType}
            </IconText>
            <IconText icon={<Maximize2 size={20} style={{ color: iconColor }} />}>
              {props.surface}
            </IconText>
            <IconText icon={<MapPin size={20} style={{ color: iconColor }} />}>
              {props.city}
            </IconText>
          </>
        )}
      </div>

      {/* Droite : badge statut + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <Badge variant={status.variant}>{status.label}</Badge>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir les notes
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
