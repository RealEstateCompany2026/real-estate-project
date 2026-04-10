/**
 * CardLog - Carte d'activité / log
 * Molecule du design system RealAgent
 *
 * Affiche une entrée d'activité avec date, heure, auteur, catégorie et description.
 */

"use client";

import React from "react";
import { Badge } from "./Badge";

export interface CardLogProps {
  /** Date de l'activité */
  date: string;
  /** Heure de l'activité */
  time: string;
  /** Auteur de l'activité */
  author: string;
  /** Catégorie/type d'activité */
  category: string;
  /** Description de l'activité */
  description: string;
  /** Variante de couleur pour la catégorie */
  categoryVariant?: "default" | "primary" | "success" | "warning" | "error";
}

export const CardLog: React.FC<CardLogProps> = ({
  date,
  time,
  author,
  category,
  description,
  categoryVariant = "default",
}) => {
  return (
    <div className="px-[10px] py-[6px]">
      {/* Divider top */}
      <div className="h-px mb-2 bg-[var(--border-default)]" />

      {/* Contenu */}
      <div className="space-y-2">
        {/* Date et heure */}
        <div className="flex items-center gap-2">
          <div className="text-sm font-bold font-roboto text-sm leading-4 tracking-0.14 text-content-subtle">
            {date}
          </div>
          <div className="text-sm font-bold font-roboto text-sm leading-4 tracking-0.14 text-content-subtle">
            {time}
          </div>
        </div>

        {/* Auteur et catégorie */}
        <div className="flex items-center gap-2">
          <div className="text-sm font-bold font-roboto text-sm leading-4 tracking-0.14 text-content-body">
            {author}
          </div>
          <Badge variant={categoryVariant}>
            {category}
          </Badge>
        </div>

        {/* Description */}
        <div className="text-sm font-roboto text-sm leading-4 tracking-0.14 text-content-body">
          {description}
        </div>
      </div>
    </div>
  );
};
