"use client";

import React from "react";
import { Plus, Search } from "lucide-react";

/**
 * AppBarAjoutBdd - Barre d'en-tête de la page Base de données
 * Organism du design system RealAgent
 *
 * Hauteur fixe : 100px. Simple : titre + bouton upload + bouton recherche.
 *
 * Figma : "app bar . ajout bdd" — h=100px, px=20, py=25
 *
 * Composition :
 *   1. Titre "Base de données" — H4 Bold
 *   2. Icon button "+" — upload une BDD (xls, csv)
 *   3. Icon button "🔍" — recherche dans l'historique des imports
 */

export interface AppBarAjoutBddProps {
  /** Titre affiché (par défaut "Base de données") */
  title?: string;
  /** Callback clic sur "+" (ajouter/upload) */
  onAdd?: () => void;
  /** Callback clic sur recherche */
  onSearch?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export function AppBarAjoutBdd({
  title = "Base de données",
  onAdd,
  onSearch,
  className = "",
}: AppBarAjoutBddProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`bg-surface-neutral-default h-[100px] flex items-center px-[20px] py-[25px] ${className}`.trim()}
    >
      <div className="flex gap-[8px] items-center">
        {/* 1. Titre — H4 Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]">
          {title}
        </h4>

        {/* 2. Icon button "+" */}
        <button
          type="button"
          aria-label="Ajouter une base de données"
          onClick={onAdd}
          className="flex items-center justify-center p-[12px] rounded-lg transition-colors hover:bg-[var(--surface-neutral-action)]"
        >
          <Plus size={20} style={{ color: iconColor }} />
        </button>

        {/* 3. Icon button recherche */}
        <button
          type="button"
          aria-label="Rechercher"
          onClick={onSearch}
          className="flex items-center justify-center p-[12px] rounded-lg transition-colors hover:bg-[var(--surface-neutral-action)]"
        >
          <Search size={20} style={{ color: iconColor }} />
        </button>
      </div>
    </div>
  );
}
