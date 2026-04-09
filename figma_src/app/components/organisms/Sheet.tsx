/**
 * Sheet - Panneau latéral modal
 * Based on Figma SheetsSide_420px & SheetsSide_1024px
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
 * 
 * Variantes :
 * - narrow: 420px de large (notifications, logs)
 * - wide: 1024px de large (sélections, formulaires)
 * 
 * Usage:
 * <Sheet
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Notifications"
 *   width="narrow"
 * >
 *   <div>Contenu du sheet</div>
 * </Sheet>
 */

"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export interface SheetProps {
  /** État d'ouverture du sheet */
  isOpen: boolean;
  /** Callback appelé à la fermeture */
  onClose: () => void;
  /** Titre du sheet */
  title?: string;
  /** Largeur du sheet */
  width?: "narrow" | "wide";
  /** Contenu du sheet */
  children: React.ReactNode;
  /** Footer sticky optionnel */
  footer?: React.ReactNode;
  /** Afficher le divider du header */
  showHeaderDivider?: boolean;
  /** Classe CSS additionnelle */
  className?: string;
  /** Icône personnalisée pour le bouton de fermeture (par défaut: X) */
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
  showHeaderDivider = true,
  className = "",
  closeIcon,
  customHeader,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          backgroundColor: isDark
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(0, 0, 0, 0.4)",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet Container */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 flex flex-col transition-transform duration-300 ${className}`}
        style={{
          width: sheetWidth,
          backgroundColor: isDark
            ? "var(--neutral-800)"
            : "var(--neutral-white)",
          boxShadow: "0px 0px 10px 7px rgba(0, 0, 0, 0.05)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        {customHeader ? (
          <div
            className="sticky top-0 z-10"
            style={{
              borderColor: "var(--border-default)",
              borderBottom: showHeaderDivider ? "1px solid var(--border-default)" : "none",
              backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
            }}
          >
            {customHeader}
          </div>
        ) : (
          <div
            className="sticky top-0 z-10 flex items-center justify-between px-5 py-6"
            style={{
              borderColor: "var(--border-default)",
              borderBottom: showHeaderDivider ? "1px solid var(--border-default)" : "none",
              backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
            }}
          >
            {/* Title */}
            <h4
              className="text-[28px] font-bold tracking-[0.28px]"
              style={{
                color: "var(--text-strong)",
                fontFamily: "Roboto, sans-serif",
                lineHeight: "34px",
              }}
            >
              {title}
            </h4>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="rounded-2xl p-3 transition-colors"
              style={{
                color: "var(--icon-default)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--surface-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="Fermer"
            >
              {closeIcon ? closeIcon : <X size={20} />}
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Footer (sticky bottom) */}
        {footer && footer}
      </div>
    </>
  );
};