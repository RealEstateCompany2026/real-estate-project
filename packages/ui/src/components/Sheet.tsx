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
  /** Header personnalisé (remplace le header par défaut) */
  customHeader?: React.ReactNode;
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
        className="fixed inset-0 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />

      {/* Sheet Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex flex-col
          transition-transform duration-300
          rounded-tl-[16px] rounded-bl-[16px]
          ${className}`}
        style={{
          width: sheetWidth,
          backgroundColor: "var(--surface-neutral-default)",
          boxShadow: "0px 0px 10px 7px rgba(0, 0, 0, 0.05)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        {customHeader ? (
          <div
            className="sticky top-0 z-10"
            style={{
              borderBottom: showHeaderDivider
                ? "1px solid var(--border-neutral-default)"
                : "none",
              backgroundColor: "var(--surface-neutral-default)",
            }}
          >
            {customHeader}
          </div>
        ) : (
          <div
            className="sticky top-0 z-10 flex items-center justify-between"
            style={{
              padding: isNarrow ? "47px 20px 0 20px" : "51px 40px 0 40px",
              borderBottom: showHeaderDivider
                ? "1px solid var(--border-neutral-default)"
                : "none",
              backgroundColor: "var(--surface-neutral-default)",
              /* Inherit border-radius from container for sticky header */
              borderTopLeftRadius: "16px",
            }}
          >
            {/* Title — H4 Bold */}
            <div className="flex items-center p-[10px]">
              <h4
                className="text-[28px] font-bold leading-[34px] tracking-[0.28px] whitespace-nowrap"
                style={{ color: "var(--text-headings)" }}
              >
                {title}
              </h4>
            </div>

            {/* Close Button — icon button */}
            <button
              onClick={onClose}
              className="p-[12px] rounded-[16px] transition-colors"
              style={{ color: "var(--text-caption)" }}
              aria-label="Fermer"
            >
              {closeIcon ? closeIcon : <X size={20} />}
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>

        {/* Footer (sticky bottom) */}
        {footer && footer}
      </div>
    </>
  );
};
