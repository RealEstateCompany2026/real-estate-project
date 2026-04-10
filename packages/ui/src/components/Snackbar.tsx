"use client";

import { LucideIcon } from "lucide-react";

/**
 * Snackbar - Notification temporaire
 *
 * Composant de notification qui apparaît en bas de l'écran pour afficher
 * des messages brefs à l'utilisateur. Peut contenir du texte simple,
 * un bouton d'action, ou un lien.
 *
 * Specs:
 * - Padding: 12px 16px
 * - Border-radius: 8px
 * - Gap: 12px (entre texte et action)
 * - Background Light: neutral-700 (#22252B)
 * - Background Dark: neutral-50 (#ECEDEE)
 * - Text color Light: white
 * - Text color Dark: grey-700 (#333740)
 * - Font: Roboto Regular 16px/20px
 * - Max-width: 600px
 * - Box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15)
 */

export interface SnackbarProps {
  /**
   * Message à afficher
   */
  message: string;
  /**
   * Label du bouton d'action (optionnel)
   */
  buttonLabel?: string;
  /**
   * Icône du bouton (optionnel)
   */
  buttonIcon?: LucideIcon;
  /**
   * Callback du bouton
   */
  onButtonClick?: () => void;
  /**
   * Label du lien (optionnel)
   */
  linkLabel?: string;
  /**
   * Icône du lien (optionnel)
   */
  linkIcon?: LucideIcon;
  /**
   * Callback du lien
   */
  onLinkClick?: () => void;
  /**
   * Classes CSS supplémentaires
   */
  className?: string;
}

export function Snackbar({
  message,
  buttonLabel,
  buttonIcon,
  onButtonClick,
  linkLabel,
  linkIcon,
  onLinkClick,
  className = "",
}: SnackbarProps) {
  // Déterminer le variant automatiquement
  const hasButton = Boolean(buttonLabel && onButtonClick);
  const hasLink = Boolean(linkLabel && onLinkClick);

  return (
    <div
      className={`
        inline-flex items-center gap-[12px]
        px-[16px] py-[12px] rounded-[8px]
        max-w-[600px] w-auto
        bg-neutral-700 dark:bg-neutral-50
        shadow-md
        ${className}
      `.trim()}
    >
      {/* Message */}
      <p className="flex-1 text-[16px] leading-[20px] tracking-[0.16px] text-white dark:text-neutral-600 font-roboto">
        {message}
      </p>

      {/* Action Button */}
      {hasButton && (
        <div className="shrink-0">
          <button
            onClick={onButtonClick}
            className={`
              inline-flex items-center justify-center gap-[8px]
              px-[12px] py-[8px] rounded-[8px]
              font-semibold text-[16px] leading-[20px] tracking-[0.16px]
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-[-4px]
              font-roboto
              text-white dark:text-neutral-500
              bg-transparent
              border border-white dark:border-neutral-500
              hover:opacity-80
            `}
          >
            {buttonLabel}
            {buttonIcon && <buttonIcon.type className="size-[20px]" strokeWidth={1.5} />}
          </button>
        </div>
      )}

      {/* Link Button */}
      {hasLink && !hasButton && (
        <div className="shrink-0">
          <button
            onClick={onLinkClick}
            className={`
              inline-flex items-center justify-center gap-[8px]
              px-[12px] py-[8px] rounded-[8px]
              font-semibold text-[16px] leading-[20px] tracking-[0.16px]
              underline decoration-1 underline-offset-2
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-[-4px]
              font-roboto
              text-white dark:text-neutral-500
              bg-transparent
              hover:opacity-80
            `}
          >
            {linkLabel}
            {linkIcon && <linkIcon.type className="size-[20px]" strokeWidth={1.5} />}
          </button>
        </div>
      )}
    </div>
  );
}
