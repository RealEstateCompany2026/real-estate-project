"use client";

import React from "react";

/**
 * Spotlight Component
 *
 * Crée un overlay sombre avec une zone découpée pour mettre en évidence un élément spécifique.
 * Utilisé dans le parcours d'onboarding pour guider l'utilisateur.
 *
 * @component
 * @example
 * <Spotlight
 *   targetRect={{ top: 100, left: 200, width: 300, height: 150 }}
 *   onSkip={() => handleSkip()}
 * >
 *   <TooltipOnboarding ... />
 * </Spotlight>
 */

export interface SpotlightProps {
  /** Rectangle de la zone à mettre en évidence (position relative au viewport) */
  targetRect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  /** Padding autour de la zone mise en évidence (défaut: 8px) */
  padding?: number;
  /** Rayon de bordure de la zone découpée (défaut: 8px) */
  borderRadius?: number;
  /** Contenu à afficher (généralement un tooltip) */
  children?: React.ReactNode;
  /** Callback pour passer le tour */
  onSkip?: () => void;
  /** Z-index de l'overlay (défaut: 9999) */
  zIndex?: number;
}

export const Spotlight: React.FC<SpotlightProps> = ({
  targetRect,
  padding = 8,
  borderRadius = 8,
  children,
  onSkip,
  zIndex = 9999,
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    // Ne ferme pas si on clique sur la zone highlight ou le tooltip
    if (e.target === e.currentTarget && onSkip) {
      onSkip();
    }
  };

  return (
    <div
      className="fixed inset-0"
      style={{
        zIndex,
        pointerEvents: "auto",
      }}
      onClick={handleBackdropClick}
    >
      {/* Overlay avec découpe SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <mask id="spotlight-mask">
            {/* Rectangle blanc qui couvre tout l'écran */}
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* Rectangle noir pour découper la zone highlight */}
            <rect
              x={targetRect.left - padding}
              y={targetRect.top - padding}
              width={targetRect.width + padding * 2}
              height={targetRect.height + padding * 2}
              rx={borderRadius}
              ry={borderRadius}
              fill="black"
            />
          </mask>
        </defs>
        {/* Overlay sombre avec le masque appliqué */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="rgba(0, 0, 0, 0.7)"
          mask="url(#spotlight-mask)"
        />
      </svg>

      {/* Bordure autour de la zone highlight */}
      <div
        className="absolute border-2 pointer-events-none border-purple-500 dark:border-purple-400"
        style={{
          top: targetRect.top - padding,
          left: targetRect.left - padding,
          width: targetRect.width + padding * 2,
          height: targetRect.height + padding * 2,
          borderRadius: `${borderRadius}px`,
          boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Contenu (tooltip) */}
      {children}
    </div>
  );
};
