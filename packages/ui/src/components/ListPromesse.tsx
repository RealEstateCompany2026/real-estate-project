"use client";

import React from "react";
import { UserCircle, Home, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";

/**
 * ListPromesse - Ligne de liste promesse de vente/achat
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) avec 2 variantes Figma (prop useCase) :
 *
 * Variante "vente" (vente d'un bien — côté vendeur) :
 *   - Gauche : nom acquéreur
 *   - Droite : REÇUE + TRANSMISE + ACCORD + "Voir la promesse" + AI
 *
 * Variante "recherche" (recherche d'un bien — côté acquéreur) :
 *   - Gauche : nom contact + type + surface + ville
 *   - Droite : ENVOYÉE + ACCEPTÉE + "Voir la promesse" + AI
 *
 * Figma : "List . promesse" — h=70px, px=20, py=13, justify-between
 */

export interface PromesseWorkflowVente {
  recue: BadgeVariant;
  transmise: BadgeVariant;
  accord: BadgeVariant;
}

export interface PromesseWorkflowRecherche {
  envoyee: BadgeVariant;
  acceptee: BadgeVariant;
}

/** Props communes */
interface ListPromesseBaseProps {
  /** Nom du contact */
  contactName: string;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur "Voir la promesse" */
  onView?: () => void;
  /** Callback au clic sur la ligne */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/** Variant Vente : contact | REÇUE + TRANSMISE + ACCORD */
export interface ListPromesseVenteProps extends ListPromesseBaseProps {
  useCase: "vente";
  workflow: PromesseWorkflowVente;
  propertyType?: never;
  surface?: never;
  city?: never;
}

/** Variant Recherche : contact + infos bien | ENVOYÉE + ACCEPTÉE */
export interface ListPromesseRechercheProps extends ListPromesseBaseProps {
  useCase: "recherche";
  workflow: PromesseWorkflowRecherche;
  /** Type de bien (T3, Maison, etc.) */
  propertyType: string;
  /** Surface (ex: "120m²") */
  surface: string;
  /** Ville / commune */
  city: string;
}

export type ListPromesseProps = ListPromesseVenteProps | ListPromesseRechercheProps;

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

export function ListPromesse(props: ListPromesseProps) {
  const {
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

      {/* Droite : workflow badges + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <div className="flex gap-[24px] items-center">
          {useCase === "vente" ? (
            <>
              <Badge variant={(workflow as PromesseWorkflowVente).recue}>REÇUE</Badge>
              <Badge variant={(workflow as PromesseWorkflowVente).transmise}>TRANSMISE</Badge>
              <Badge variant={(workflow as PromesseWorkflowVente).accord}>ACCORD</Badge>
            </>
          ) : (
            <>
              <Badge variant={(workflow as PromesseWorkflowRecherche).envoyee}>ENVOYÉE</Badge>
              <Badge variant={(workflow as PromesseWorkflowRecherche).acceptee}>ACCEPTÉE</Badge>
            </>
          )}
        </div>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir la promesse
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
