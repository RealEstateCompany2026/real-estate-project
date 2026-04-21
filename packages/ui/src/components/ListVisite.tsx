"use client";

import React from "react";
import { Calendar, UserCircle, Home, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";

/**
 * ListVisite - Ligne de liste visite
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) avec 2 variantes Figma (prop useCase) :
 *
 * Variante "vente" (vente d'un bien) :
 *   - Gauche : date/heure + nom acquéreur
 *   - Droite : CALENDRIER + ODJ + CR + "Voir le mandat" + AI
 *
 * Variante "recherche" (recherche d'un bien) :
 *   - Gauche : date/heure + nom contact + type + surface + ville
 *   - Droite : PROGRAMMÉ + CR + "Voir le mandat" + AI
 *
 * Figma : "List . visite" — h=70px, px=20, py=13, justify-between
 */

export interface VisiteWorkflowVente {
  calendrier: BadgeVariant;
  odj: BadgeVariant;
  cr: BadgeVariant;
}

export interface VisiteWorkflowRecherche {
  programme: BadgeVariant;
  cr: BadgeVariant;
}

/** Props communes */
interface ListVisiteBaseProps {
  /** Date et heure de la visite (ex: "12 fév. 2026 à 14h00") */
  dateTime: string;
  /** Nom du contact (acquéreur ou propriétaire) */
  contactName: string;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur le bouton "Voir le mandat" */
  onView?: () => void;
  /** Callback au clic sur la ligne */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/** Variant Vente : date + contact | CALENDRIER + ODJ + CR */
export interface ListVisiteVenteProps extends ListVisiteBaseProps {
  useCase: "vente";
  workflow: VisiteWorkflowVente;
  propertyType?: never;
  surface?: never;
  city?: never;
}

/** Variant Recherche : date + contact + type + surface + ville | PROGRAMMÉ + CR */
export interface ListVisiteRechercheProps extends ListVisiteBaseProps {
  useCase: "recherche";
  workflow: VisiteWorkflowRecherche;
  /** Type de bien (T3, Maison, etc.) */
  propertyType: string;
  /** Surface (ex: "120m²") */
  surface: string;
  /** Ville / commune */
  city: string;
}

export type ListVisiteProps = ListVisiteVenteProps | ListVisiteRechercheProps;

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

export function ListVisite(props: ListVisiteProps) {
  const {
    dateTime,
    contactName,
    useCase,
    workflow,
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
      {/* Gauche : date/heure + contact + (infos bien si recherche) */}
      <div className="flex gap-[24px] items-center shrink-0">
        <IconText icon={<Calendar size={20} style={{ color: iconColor }} />}>
          {dateTime}
        </IconText>
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

      {/* Droite : workflow badges + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <div className="flex gap-[24px] items-center">
          {useCase === "vente" ? (
            <>
              <Badge variant={(workflow as VisiteWorkflowVente).calendrier}>CALENDRIER</Badge>
              <Badge variant={(workflow as VisiteWorkflowVente).odj}>ODJ</Badge>
              <Badge variant={workflow.cr}>CR</Badge>
            </>
          ) : (
            <>
              <Badge variant={(workflow as VisiteWorkflowRecherche).programme}>PROGRAMMÉ</Badge>
              <Badge variant={workflow.cr}>CR</Badge>
            </>
          )}
        </div>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir le mandat
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
