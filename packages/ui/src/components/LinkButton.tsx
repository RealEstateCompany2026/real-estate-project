"use client";

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

/**
 * LinkButton - Bouton avec style de lien
 *
 * Bouton stylisé comme un lien hypertexte avec tous les états interactifs.
 *
 * Specs:
 * - Font: Roboto SemiBold 16px/20px
 * - Letter-spacing: 0.16px
 * - Text-decoration: underline
 * - Gap: 8px (entre icônes et texte)
 * - Padding: 12px
 * - Border-radius: 16px
 *
 * Variants:
 * - neutral: Texte neutre (grey-600)
 * - branded: Texte violet (purple-500)
 */

export type LinkButtonVariant = "neutral" | "branded";

export interface LinkButtonProps {
  /**
   * Variante de style
   */
  variant?: LinkButtonVariant;
  /**
   * Icône à gauche du texte
   */
  iconLeft?: LucideIcon;
  /**
   * Icône à droite du texte
   */
  iconRight?: LucideIcon;
  /**
   * Texte du bouton
   */
  children: ReactNode;
  /**
   * Fonction appelée au clic
   */
  onClick?: () => void;
  /**
   * Désactiver le bouton
   */
  disabled?: boolean;
  /**
   * Classes CSS supplémentaires
   */
  className?: string;
  /**
   * Type HTML du bouton
   */
  type?: "button" | "submit" | "reset";
}

export function LinkButton({
  variant = "neutral",
  iconLeft: IconLeft,
  iconRight: IconRight,
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: LinkButtonProps) {
  const getVariantStyles = () => {
    if (disabled) {
      return {
        default: "text-neutral-400",
        hover: "text-neutral-400",
      };
    }

    switch (variant) {
      case "branded":
        return {
          default: "text-[#7b72f9]",
          hover: "hover:text-[#635cc7]",
        };
      case "neutral":
      default:
        return {
          default: "text-neutral-600",
          hover: "hover:text-neutral-700",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-[8px]
        px-[12px] py-[12px] rounded-[16px]
        font-semibold text-[16px] leading-[20px] tracking-[0.16px]
        underline decoration-1 underline-offset-2
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${disabled ? "cursor-not-allowed opacity-50" : `cursor-pointer ${styles.hover}`}
        ${styles.default}
        ${className}
      `.trim()}
    >
      {IconLeft && <IconLeft size={20} />}
      {children}
      {IconRight && <IconRight size={20} />}
    </button>
  );
}
