"use client";

/**
 * NavAvatar - Avatar utilisateur pour NavRail
 *
 * Avatar circulaire en bas du NavRail.
 *
 * Specs:
 * - Taille: 54×54px
 * - Border-radius: 50% (cercle complet)
 * - États: default, selected
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
        className={`cursor-pointer rounded-full w-[54px] h-[54px] ${className}`.trim()}
        onClick={onClick}
        aria-label={alt}
        style={{
          border: "4px solid var(--surface-branded-action)",
          background: "var(--surface-branded-subtle)",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full p-1"
        />
      </button>
    );
  }

  // État default : image de profil
  return (
    <button
      className={`
        cursor-pointer
        overflow-hidden
        rounded-full
        w-[54px] h-[54px]
        ${className}
      `.trim()}
      onClick={onClick}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </button>
  );
}
