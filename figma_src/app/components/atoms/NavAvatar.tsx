/**
 * NavAvatar - Avatar utilisateur pour NavRail
 * 
 * Avatar circulaire en bas du NavRail.
 * 
 * Specs:
 * - Taille: 54×54px
 * - Border-radius: 50% (cercle complet)
 * - États: default, selected
 * - Support light/dark mode via tokens
 * 
 * États:
 * - Default: Image de profil
 * - Selected: Border branded (4px), background branded-400
 * 
 * Usage:
 * <NavAvatar src="/avatar.jpg" alt="John Doe" />
 * <NavAvatar src="/avatar.jpg" alt="John Doe" selected />
 */

export interface NavAvatarProps {
  /**
   * URL de l'image
   */
  src: string;
  /**
   * Texte alternatif
   */
  alt: string;
  /**
   * État sélectionné (avec border branded)
   */
  selected?: boolean;
  /**
   * Callback au clic
   */
  onClick?: () => void;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function NavAvatar({
  src,
  alt,
  selected = false,
  onClick,
  className = "",
}: NavAvatarProps) {
  if (selected) {
    // État selected : cercle avec border branded
    return (
      <button
        className={`
          cursor-pointer
          ${className}
        `.trim()}
        onClick={onClick}
        aria-label={alt}
        style={{
          width: "54px",
          height: "54px",
          borderRadius: "50%",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 54 54"
          fill="none"
        >
          <circle
            cx="27"
            cy="27"
            r="25"
            fill="var(--branded-400)"
            stroke="var(--branded-600)"
            strokeWidth="4"
          />
        </svg>
      </button>
    );
  }

  // État default : image de profil
  return (
    <button
      className={`
        cursor-pointer
        overflow-hidden
        ${className}
      `.trim()}
      onClick={onClick}
      aria-label={alt}
      style={{
        width: "54px",
        height: "54px",
        borderRadius: "50%",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </button>
  );
}
