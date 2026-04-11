"use client";

import { MenuItem, type MenuItemProps } from "./MenuItem";

/**
 * Menu - Menu déroulant avec liste d'items
 * Organism du design system RealAgent
 *
 * Composant de menu contextuel ou dropdown affichant une liste d'items cliquables.
 *
 * Specs:
 * - Width: 347px par défaut (personnalisable)
 * - Border-radius: 16px
 * - Scrollbar optionnelle: 5px width, padding 8px
 * - Tokens pour colors light/dark automatiques
 *
 * Structure:
 * - Liste verticale de MenuItems
 * - Scrollbar personnalisée à droite (optionnelle)
 * - Border-radius sur le container
 */

export interface MenuProps {
  /**
   * Liste des items du menu
   */
  items: MenuItemProps[];
  /**
   * Afficher la scrollbar personnalisée
   */
  showScrollbar?: boolean;
  /**
   * Largeur du menu en pixels
   * @default 347
   */
  width?: number;
  /**
   * Hauteur max avant scroll (optionnel)
   */
  maxHeight?: number;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
}

export function Menu({
  items,
  showScrollbar = true,
  width = 347,
  maxHeight,
  className = "",
}: MenuProps) {
  return (
    <div
      className={`relative ${className}`.trim()}
      style={{
        width: `${width}px`,
      }}
    >
      <div className="content-stretch flex items-start relative w-full">
        {/* Menu items container */}
        <div
          className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[16px] overflow-hidden bg-surface-neutral-default"
          style={{
            maxHeight: maxHeight ? `${maxHeight}px` : undefined,
            overflowY: maxHeight ? "auto" : undefined,
          }}
        >
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>

        {/* Scrollbar (optionnelle) */}
        {showScrollbar && (
          <div className="relative self-stretch shrink-0">
            <div className="flex flex-row justify-center size-full">
              <div className="content-stretch flex h-full items-start justify-center p-[8px] relative">
                <div className="h-[49px] rounded-[16px] shrink-0 w-[5px] bg-surface-neutral-action-hover" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
