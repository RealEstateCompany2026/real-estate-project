"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

/**
 * Sheet - Panneau latéral modal (Side Sheet)
 *
 * Figma: sheets . side . 420px / sheets . side . 1024px
 *
 * Specs:
 * - Border-radius: 16px uniquement sur les bords GAUCHES (tl + bl)
 * - Shadow: 0px 0px 10px 7px rgba(0,0,0,0.05)
 * - Background: var(--surface-neutral-default) — white (light) / neutral-800 (dark)
 * - Title: H4 Bold 28px/34px, tracking 0.28px, var(--text-headings)
 * - Close icon: 20×20, p-12, rounded-16
 * - Narrow (420px): header px-20 py-47, title+close justify-between w-350
 * - Wide (1024px): header px-40 py-51
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface SheetProps {
  /** État d'ouverture du sheet */
  isOpen: boolean;
  /** Callback appelé à la fermeture */
  onClose: () => void;
  /** Titre du sheet */
  title?: string;
  /** Largeur du sheet
   * @default "narrow"
   */
  width?: "narrow" | "wide";
  /** Contenu du sheet */
  children: React.ReactNode;
  /** Footer sticky optionnel */
  footer?: React.ReactNode;
  /** Afficher le divider du header
   * @default false
   */
  showHeaderDivider?: boolean;
  /** Classe CSS additionnelle */
  className?: string;
  /** Icône personnalisée pour le bouton de fermeture */
  closeIcon?: React.ReactNode;
  /**
   * Header personnalisé (remplace le header par défaut)
   * @deprecated Utiliser `headerAfterTitle` et `headerActions` à la place
   */
  customHeader?: React.ReactNode;
  /** Composants affichés après le titre (badges, chips, IconDpe, etc.) */
  headerAfterTitle?: React.ReactNode;
  /** Composants affichés avant le close button (switches, boutons action, etc.) */
  headerActions?: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  title,
  width = "narrow",
  children,
  footer,
  showHeaderDivider = false,
  className = "",
  closeIcon,
  customHeader,
  headerAfterTitle,
  headerActions,
}: SheetProps) => {
  const sheetWidth = width === "narrow" ? "420px" : "1024px";
  const isNarrow = width === "narrow";

  // Bloquer le scroll du body quand le sheet est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Gestion de l'échappement (ESC)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay (Backdrop) */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex flex-col
          transition-transform duration-300
          rounded-tl-[16px] rounded-bl-[16px]
          bg-surface-neutral-default shadow-[0px_0px_10px_7px_rgba(0,0,0,0.05)]
          ${className}`}
        style={{
          width: sheetWidth,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        {customHeader ? (
          <div
            className={`sticky top-0 z-10 bg-surface-neutral-default ${
              showHeaderDivider ? "border-b border-edge-default" : ""
            }`}
          >
            {customHeader}
          </div>
        ) : (
          <div
            className={`sticky top-0 z-10 flex items-center justify-between rounded-tl-[16px] bg-surface-neutral-default ${
              isNarrow
                ? "pt-[47px] px-[20px]"
                : "pt-[51px] px-[40px]"
            } ${showHeaderDivider ? "border-b border-edge-default" : ""}`}
          >
            {/* Left side — Title + headerAfterTitle */}
            <div className="flex items-center gap-3 p-[10px]">
              <h4 className="text-[28px] font-bold leading-[34px] tracking-[0.28px] whitespace-nowrap text-content-headings">
                {title}
              </h4>
              {headerAfterTitle}
            </div>

            {/* Right side — headerActions + Close Button */}
            <div className="flex items-center gap-3">
              {headerActions}
              <button
                onClick={onClose}
                className="p-[12px] rounded-[16px] transition-colors text-content-caption"
                aria-label="Fermer"
              >
                {closeIcon ? closeIcon : <X size={20} />}
              </button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>

        {/* Footer (sticky bottom) */}
        {footer && (
          <div className="sticky bottom-0 bg-surface-neutral-default border-t border-edge-divider px-5 py-4 flex items-center gap-3">
            {footer}
          </div>
        )}
      </div>
    </>
  );
};
