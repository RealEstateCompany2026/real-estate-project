"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

/**
 * Sheet - Panneau latéral modal
 * Organism du design system RealAgent
 *
 * Panneau modal qui s'affiche depuis le bord droit de l'écran.
 * Utilisé pour :
 * - Notifications / Activity logs (420px)
 * - Étapes de sélection intermédiaire dans les parcours (1024px)
 *
 * Structure :
 * - Overlay semi-transparent (backdrop)
 * - Sheet container avec animation slide-in
 * - Header : titre + bouton close
 * - Content : contenu personnalisé (children)
 * - Footer (optionnel) : sticky bottom
 *
 * Variantes :
 * - narrow: 420px de large (notifications, logs)
 * - wide: 1024px de large (sélections, formulaires)
 */

export interface SheetProps {
  /**
   * État d'ouverture du sheet
   */
  isOpen: boolean;
  /**
   * Callback appelé à la fermeture
   */
  onClose: () => void;
  /**
   * Titre du sheet
   */
  title?: string;
  /**
   * Largeur du sheet
   * @default "narrow"
   */
  width?: "narrow" | "wide";
  /**
   * Contenu du sheet
   */
  children: React.ReactNode;
  /**
   * Footer sticky optionnel
   */
  footer?: React.ReactNode;
  /**
   * Afficher le divider du header
   * @default true
   */
  showHeaderDivider?: boolean;
  /**
   * Classe CSS additionnelle
   */
  className?: string;
  /**
   * Icône personnalisée pour le bouton de fermeture (par défaut: X)
   */
  closeIcon?: React.ReactNode;
  /**
   * Header personnalisé (remplace le header par défaut)
   */
  customHeader?: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  title,
  width = "narrow",
  children,
  footer,
  showHeaderDivider = true,
  className = "",
  closeIcon,
  customHeader,
}: SheetProps) => {
  // Largeur selon la variante
  const sheetWidth = width === "narrow" ? "420px" : "1024px";

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
        className="fixed inset-0 z-40 transition-opacity duration-300 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex flex-col transition-transform duration-300 bg-surface-neutral-default ${className}`}
        style={{
          width: sheetWidth,
          boxShadow: "0px 0px 10px 7px rgba(0, 0, 0, 0.05)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        {customHeader ? (
          <div
            className="sticky top-0 z-10"
            style={{
              borderBottom: showHeaderDivider ? "1px solid var(--edge-default)" : "none",
              backgroundColor: "var(--surface-neutral-default)",
            }}
          >
            {customHeader}
          </div>
        ) : (
          <div
            className="sticky top-0 z-10 flex items-center justify-between px-5 py-6 border-edge-default"
            style={{
              borderBottom: showHeaderDivider ? "1px solid var(--edge-default)" : "none",
              backgroundColor: "var(--surface-neutral-default)",
            }}
          >
            {/* Title */}
            <h4 className="text-[28px] font-bold tracking-[0.28px] text-content-strong" style={{ lineHeight: "34px" }}>
              {title}
            </h4>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-2xl p-3 transition-colors text-icon-neutral-default hover:bg-surface-neutral-action"
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
