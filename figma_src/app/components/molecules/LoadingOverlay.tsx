import { Spinner, SpinnerSize } from "../atoms/Spinner";
import { useTheme } from "../../context/ThemeContext";

/**
 * LoadingOverlay - Overlay de chargement
 * 
 * Composant molecule qui affiche un spinner centré sur un overlay semi-transparent
 * pour bloquer l'interaction pendant un chargement.
 * 
 * Specs:
 * - Background: Semi-transparent adaptatif (light/dark)
 * - Spinner: Centré avec variant primary
 * - Sizes: sm/md/lg du spinner
 * - Z-index: 50 (peut être modifié)
 * - Position: absolute (relatif au parent) ou fixed (fullscreen)
 * 
 * Variants:
 * - fullscreen: Couvre toute la fenêtre (position fixed)
 * - container: Couvre le parent (position absolute)
 * 
 * Usage:
 * // Fullscreen overlay
 * {isLoading && <LoadingOverlay fullscreen />}
 * 
 * // Container overlay
 * <div className="relative">
 *   <MyContent />
 *   {isLoading && <LoadingOverlay />}
 * </div>
 * 
 * // Avec message
 * <LoadingOverlay fullscreen message="Chargement des données..." />
 * 
 * // Avec taille personnalisée
 * <LoadingOverlay size="lg" message="Import en cours..." />
 */

export interface LoadingOverlayProps {
  /**
   * Taille du spinner
   * @default "md"
   */
  size?: SpinnerSize;
  /**
   * Message optionnel affiché sous le spinner
   */
  message?: string;
  /**
   * Mode fullscreen (couvre toute la fenêtre)
   * @default false
   */
  fullscreen?: boolean;
  /**
   * Z-index de l'overlay
   * @default 50
   */
  zIndex?: number;
  /**
   * Opacité du background (0-1)
   * @default 0.5
   */
  backgroundOpacity?: number;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function LoadingOverlay({
  size = "md",
  message,
  fullscreen = false,
  zIndex = 50,
  backgroundOpacity = 0.5,
  className = "",
}: LoadingOverlayProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Couleur de background selon le thème
  const backgroundColor = isDark
    ? `rgba(34, 37, 43, ${backgroundOpacity})` // neutral-700
    : `rgba(255, 255, 255, ${backgroundOpacity})`; // white

  // Couleur du texte
  const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-600)"; // --text-body

  return (
    <div
      className={`
        ${fullscreen ? "fixed" : "absolute"}
        inset-0 
        flex flex-col items-center justify-center 
        gap-[16px]
        ${className}
      `.trim()}
      style={{
        backgroundColor,
        zIndex,
      }}
      role="alert"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Spinner */}
      <Spinner size={size} variant="primary" />

      {/* Message optionnel */}
      {message && (
        <p
          className="text-[16px] leading-[20px] tracking-[0.16px] font-medium"
          style={{
            fontFamily: "Roboto, sans-serif",
            color: textColor,
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

/**
 * LoadingOverlayFullscreen - Raccourci pour overlay fullscreen
 * 
 * Usage:
 * {isLoading && <LoadingOverlayFullscreen message="Chargement..." />}
 */
export function LoadingOverlayFullscreen(
  props: Omit<LoadingOverlayProps, "fullscreen">
) {
  return <LoadingOverlay {...props} fullscreen />;
}

/**
 * LoadingOverlayContainer - Raccourci pour overlay container
 * 
 * Usage:
 * <div className="relative">
 *   <MyContent />
 *   {isLoading && <LoadingOverlayContainer />}
 * </div>
 */
export function LoadingOverlayContainer(
  props: Omit<LoadingOverlayProps, "fullscreen">
) {
  return <LoadingOverlay {...props} fullscreen={false} />;
}
