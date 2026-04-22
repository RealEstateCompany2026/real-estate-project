"use client";

import React from "react";
import { ArrowRight, Tag } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { Chip } from "./Chip";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListPromesse - Ligne de liste promesse / offre d'achat
 * Organism du design system RealAgent
 *
 * Ligne (100px) avec 2 variantes (prop useCase) :
 *
 * Variante "vente" (côté vendeur) :
 *   - Ligne 1 : "Offre d'achat"
 *   - Ligne 2 : acquéreur • ville • type • surface • DPE • vendeur
 *   - Droite : Chip montant + ÉDITION + ACCORD + Voir + AI
 *
 * Variante "acquisition" (côté acquéreur) :
 *   - Ligne 1 : "Promesse de vente"
 *   - Ligne 2 : vendeur • ville • type • surface • DPE • acquéreur
 *   - Droite : Chip montant + ÉDITION + ACCORD + Voir + AI
 *
 * Figma : "List . promesse" — h=100px, px=20, justify-between
 */

export interface PromesseWorkflow {
  edition: BadgeVariant;
  accord: BadgeVariant;
}

export interface ListPromesseProps {
  /** Variante d'affaire */
  useCase: "vente" | "acquisition";
  /** Nom de l'acquéreur */
  buyerName?: string;
  /** Nom du vendeur */
  sellerName?: string;
  /** Ville / commune du bien */
  city?: string;
  /** Type du bien (T3, Maison, etc.) */
  propertyType?: string;
  /** Surface du bien (ex: "85m²") */
  surface?: string;
  /** Note DPE du bien (A-G) — masqué si absent */
  dpeGrade?: DpeType;
  /** Montant de l'offre / promesse en euros (ex: "320 000 €") */
  amount?: string;
  /** Statuts des 2 étapes du workflow */
  workflow: PromesseWorkflow;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur "Voir" */
  onView?: () => void;
  /** Callback au clic sur la ligne */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Dot separator — rond 5px entre les blocs texte de la ligne 2
 */
function Dot() {
  return (
    <span className="size-[5px] rounded-full bg-content-body shrink-0" />
  );
}

export function ListPromesse({
  useCase,
  buyerName,
  sellerName,
  city,
  propertyType,
  surface,
  dpeGrade,
  amount,
  workflow,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListPromesseProps) {
  const title = useCase === "vente" ? "Offre d'achat" : "Promesse de vente";

  /* Ligne 2 : ordre des personnes inversé selon le useCase */
  const firstPerson = useCase === "vente" ? buyerName : sellerName;
  const lastPerson = useCase === "vente" ? sellerName : buyerName;

  /* Collecte des blocs texte de la ligne 2 pour gérer les dots */
  const blocks: React.ReactNode[] = [];

  if (firstPerson) {
    blocks.push(
      <span key="p1" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {firstPerson}
      </span>
    );
  }
  if (city) {
    blocks.push(
      <span key="city" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {city}
      </span>
    );
  }
  if (propertyType) {
    blocks.push(
      <span key="type" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {propertyType}
      </span>
    );
  }
  if (surface) {
    blocks.push(
      <span key="surface" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {surface}
      </span>
    );
  }

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action rounded-lg flex items-center justify-between h-[100px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : titre + infos */}
      <div className="flex flex-col justify-center shrink-0">
        {/* Ligne 1 — Titre : 20/24 semibold, px=10 py=6 */}
        <span className="text-[20px] font-semibold font-roboto text-content-body leading-[24px] px-[10px] py-[6px]">
          {title}
        </span>

        {/* Ligne 2 — Blocs texte xsm séparés par dots */}
        <div className="flex items-center">
          {blocks.map((block, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Dot />}
              {block}
            </React.Fragment>
          ))}
          {dpeGrade && <IconDpe type={dpeGrade} size="small" />}
          {lastPerson && (
            <>
              {blocks.length > 0 && <Dot />}
              <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
                {lastPerson}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Droite : chip montant + workflow badges + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        {amount && (
          <Chip icon={<Tag size={20} />} size="medium">
            {amount}
          </Chip>
        )}

        <div className="flex gap-[24px] items-center">
          <Badge variant={workflow.edition}>ÉDITION</Badge>
          <Badge variant={workflow.accord}>ACCORD</Badge>
        </div>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
