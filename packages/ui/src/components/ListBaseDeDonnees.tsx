"use client";

import React from "react";
import { MoreVertical } from "lucide-react";

/**
 * ListBaseDeDonnees - Ligne de liste import base de données
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) — une seule variante (light/dark auto via tokens).
 *
 * Layout :
 *   - Gauche : date d'import + nom de l'import
 *   - Droite : icon button menu (more_vert)
 *
 * Figma : "list . database" — h=70px, px=20, justify-between
 */

export interface ListBaseDeDonneesProps {
  /** Date de l'import (ex: "26 Jan. 2026") */
  date: string;
  /** Nom de l'import de base de données */
  name: string;
  /** Callback clic sur menu (more) */
  onMore?: () => void;
  /** Callback au clic sur la ligne */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export function ListBaseDeDonnees({
  date,
  name,
  onMore,
  onClick,
  className = "",
}: ListBaseDeDonneesProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-lg flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : date + nom */}
      <div className="flex gap-[34px] items-center shrink-0">
        <span className="w-[120px] text-base font-bold font-roboto text-content-caption tracking-[0.16px] leading-[20px] whitespace-nowrap px-[10px] py-[8px]">
          {date}
        </span>
        <span className="w-[300px] text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap px-[10px] py-[8px]">
          {name}
        </span>
      </div>

      {/* Droite : icon button more */}
      <button
        type="button"
        aria-label="Plus d'options"
        onClick={(e) => {
          e.stopPropagation();
          onMore?.();
        }}
        className="flex items-center justify-center p-[12px] rounded-lg hover:bg-[var(--surface-neutral-action)] transition-colors"
      >
        <MoreVertical size={20} style={{ color: iconColor }} />
      </button>
    </div>
  );
}
