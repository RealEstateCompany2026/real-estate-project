import { useTheme } from "../../context/ThemeContext";
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
 * - Button/Link Dark Mode: neutral-500 (#737780)
 * 
 * Variants:
 * - simple: Texte uniquement
 * - withButton: Texte + bouton d'action
 * - withLink: Texte + lien
 * 
 * Usage:
 * <Snackbar message="Fichier téléchargé avec succès" />
 * 
 * <Snackbar 
 *   message="Email envoyé"
 *   buttonLabel="Annuler"
 *   onButtonClick={handleUndo}
 * />
 * 
 * <Snackbar 
 *   message="Nouvelle mise à jour disponible"
 *   linkLabel="En savoir plus"
 *   onLinkClick={handleLearnMore}
 * />
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Déterminer le variant automatiquement
  const hasButton = Boolean(buttonLabel && onButtonClick);
  const hasLink = Boolean(linkLabel && onLinkClick);

  const backgroundColor = isDark ? "var(--neutral-50)" : "var(--neutral-700)"; // neutral-50 (dark) / neutral-700 (light)
  const textColor = isDark ? "var(--neutral-600)" : "#FFFFFF"; // grey-700 (dark) / white (light)

  return (
    <div
      className={`
        inline-flex items-center gap-[12px] 
        px-[16px] py-[12px] rounded-[8px]
        max-w-[600px] w-auto
        ${className}
      `.trim()}
      style={{
        backgroundColor,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Message */}
      <p
        className="flex-1 text-[16px] leading-[20px] tracking-[0.16px]"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          color: textColor,
        }}
      >
        {message}
      </p>

      {/* Action Button */}
      {hasButton && (
        <div className="shrink-0">
          <button
            onClick={onButtonClick}
            className="
              inline-flex items-center justify-center gap-[8px] 
              px-[12px] py-[8px] rounded-[8px]
              font-semibold text-[16px] leading-[20px] tracking-[0.16px]
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-[-4px]
            "
            style={{
              fontFamily: "Roboto, sans-serif",
              color: isDark ? "var(--neutral-500)" : "#FFFFFF",
              backgroundColor: "transparent",
              border: isDark ? "1px solid var(--neutral-500)" : "1px solid #FFFFFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            {buttonLabel}
            {buttonIcon && (() => {
              const Icon = buttonIcon;
              return <Icon className="size-[20px]" strokeWidth={1.5} />;
            })()}
          </button>
        </div>
      )}

      {/* Link Button */}
      {hasLink && !hasButton && (
        <div className="shrink-0">
          <button
            onClick={onLinkClick}
            className="
              inline-flex items-center justify-center gap-[8px] 
              px-[12px] py-[8px] rounded-[8px]
              font-semibold text-[16px] leading-[20px] tracking-[0.16px]
              underline decoration-1 underline-offset-2
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-[-4px]
            "
            style={{
              fontFamily: "Roboto, sans-serif",
              color: isDark ? "var(--neutral-500)" : "#FFFFFF",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            {linkLabel}
            {linkIcon && (() => {
              const Icon = linkIcon;
              return <Icon className="size-[20px]" strokeWidth={1.5} />;
            })()}
          </button>
        </div>
      )}
    </div>
  );
}