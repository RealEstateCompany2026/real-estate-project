"use client";

/**
 * NavLogo - Logo de l'application pour NavRail
 *
 * Logo affiché en haut du NavRail.
 *
 * Specs:
 * - Hauteur container: 75px
 * - Padding: 24px vertical, 12px horizontal
 * - Logo: Adaptif light/dark via tokens
 */

export interface NavLogoProps {
  /**
   * URL du logo (optionnel, utilise le logo Orpi par défaut)
   */
  src?: string;
  /**
   * Texte alternatif
   */
  alt?: string;
  /**
   * Callback au clic (redirection vers home)
   */
  onClick?: () => void;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
}

export function NavLogo({
  src,
  alt = "Logo",
  onClick,
  className = "",
}: NavLogoProps) {
  // Logo Orpi par défaut (SVG inline utilisant tokens)
  if (!src) {
    return (
      <button
        className={`
          w-full
          flex items-center justify-center
          cursor-pointer
          py-[22px] px-[11px]
          ${className}
        `.trim()}
        onClick={onClick}
        aria-label="Accueil"
        style={{
          height: "75px",
        }}
      >
        <svg
          className="w-[59.35px] h-[30.2px]"
          viewBox="0 0 59.3514 30.2"
          fill="none"
        >
          <path
            d="M14.6191 0.00927734C18.6152 0.00927734 21.8096 3.21729 21.8096 7.21338C21.8096 11.2095 18.6152 14.4175 14.6191 14.4175C10.623 14.4175 7.41504 11.2095 7.41504 7.21338C7.41504 3.21729 10.623 0.00927734 14.6191 0.00927734ZM14.6191 16.5137C18.6152 16.5137 21.8096 19.7217 21.8096 23.7178C21.8096 27.7139 18.6152 30.9219 14.6191 30.9219C10.623 30.9219 7.41504 27.7139 7.41504 23.7178C7.41504 19.7217 10.623 16.5137 14.6191 16.5137ZM44.7319 0.00927734C48.728 0.00927734 51.936 3.21729 51.936 7.21338C51.936 11.2095 48.728 14.4175 44.7319 14.4175C40.7358 14.4175 37.5278 11.2095 37.5278 7.21338C37.5278 3.21729 40.7358 0.00927734 44.7319 0.00927734Z"
            fill="var(--icon-branded-default)"
          />
        </svg>
      </button>
    );
  }

  // Logo personnalisé
  return (
    <button
      className={`
        w-full
        flex items-center justify-center
        cursor-pointer
        py-[24px] px-[12px]
        ${className}
      `.trim()}
      onClick={onClick}
      aria-label={alt}
      style={{
        height: "75px",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
    </button>
  );
}
