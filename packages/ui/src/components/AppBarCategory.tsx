"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Plus, Search } from "lucide-react";
import { Menu } from "./Menu";
import type { MenuItemProps } from "./MenuItem";

/**
 * AppBarCategory - Barre d'en-tête des pages catégorie (listes)
 * Organism du design system RealAgent
 *
 * Hauteur fixe : 100px. Utilisé en haut des pages listes : Clients, Biens,
 * Affaires, Documents, Évènements, Automatisations.
 *
 * Figma : "app bar . category" — h=100px, py=25
 *
 * Composition :
 *   1. Nom de la rubrique [category_name] — H4 Bold
 *   2. Dropdown "Catégorie ∨" — ghost button qui ouvre un Menu de filtres
 *   3. Icon button "+" — ajouter une fiche
 *   4. Icon button "🔍" — ouvrir la recherche
 */

export interface AppBarCategoryProps {
  /** Nom de la rubrique (ex: "Clients", "Biens", "Affaires") */
  title: string;
  /** Label du dropdown filtre (ex: "Tous les clients", "Actifs") */
  filterLabel?: string;
  /** Items du menu dropdown (filtres) */
  filterItems?: MenuItemProps[];
  /** Callback clic sur "+" (ajouter) */
  onAdd?: () => void;
  /** Callback clic sur recherche */
  onSearch?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export function AppBarCategory({
  title,
  filterLabel = "Catégorie",
  filterItems = [],
  onAdd,
  onSearch,
  className = "",
}: AppBarCategoryProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconColor = "var(--icon-neutral-default)";

  // Fermer le menu au clic extérieur
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div
      className={`bg-surface-neutral-default h-[100px] flex items-center py-[25px] ${className}`.trim()}
    >
      <div className="flex gap-[8px] items-center">
        {/* 1. Nom de la rubrique — H4 Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]">
          {title}
        </h4>

        {/* 2. Dropdown filtre — ghost button + Menu (conditionnel) */}
        {filterItems.length > 0 && (
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex gap-[8px] items-center justify-center p-[12px] rounded-lg transition-colors hover:bg-[var(--surface-neutral-action)] text-content-body"
            >
              <span className="text-base font-semibold font-roboto tracking-[0.16px] leading-[20px] whitespace-nowrap">
                {filterLabel}
              </span>
              <ChevronDown
                size={20}
                style={{ color: iconColor }}
                className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Menu dropdown */}
            {menuOpen && (
              <div className="absolute top-full left-0 mt-[4px] z-50">
                <Menu
                  items={filterItems.map((item) => ({
                    ...item,
                    onClick: () => {
                      item.onClick?.();
                      setMenuOpen(false);
                    },
                  }))}
                  maxHeight={400}
                />
              </div>
            )}
          </div>
        )}

        {/* 3. Icon button "+" (ajouter) */}
        <button
          type="button"
          aria-label="Ajouter"
          onClick={onAdd}
          className="flex items-center justify-center p-[12px] rounded-lg transition-colors hover:bg-[var(--surface-neutral-action)]"
        >
          <Plus size={20} style={{ color: iconColor }} />
        </button>

        {/* 4. Icon button recherche */}
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
