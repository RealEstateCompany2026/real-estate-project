"use client";

import { Image as ImageIcon } from "lucide-react";

/**
 * Gallery - Galerie photos (strip 3 images)
 *
 * Figma: Gallery . FicheBien (node 1344:4634)
 *
 * Structure Figma:
 * - Container: h-277px, w-full (1191px dans Figma)
 * - 3 images côte à côte avec 2px gap
 *   - Image 1 (gauche): ~34.6%, rounded-tl-16 + rounded-bl-16
 *   - Image 2 (centre): ~34.6%, pas de radius
 *   - Image 3 (droite): ~30.5%, overflow hidden
 * - Bouton "Galerie" flottant top-right
 *   - bg: var(--surface-neutral-default), p-12, rounded-16
 *   - text: SemiBold 16px/20px, var(--text-neutral-action)
 *   - icône gallery 20×20
 *
 * Utilisé dans : fiche bien (pleine largeur), sheet annonce (version étroite).
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface GalleryProps {
  /** Liste des images (URL + alt) — les 3 premières sont affichées */
  images: Array<{ url: string; alt?: string }>;
  /** Callback au clic sur "Galerie" */
  onGalleryClick?: () => void;
  /** Label du bouton */
  galleryLabel?: string;
  /** Hauteur du strip */
  height?: number;
  className?: string;
}

export function Gallery({
  images,
  onGalleryClick,
  galleryLabel = "Galerie",
  height = 277,
  className = "",
}: GalleryProps) {
  // Fallback si pas assez d'images
  const img1 = images[0];
  const img2 = images[1];
  const img3 = images[2];

  if (images.length === 0) {
    return (
      <div
        className={`relative w-full rounded-tl-[16px] rounded-bl-[16px] overflow-hidden
          flex items-center justify-center ${className}`.trim()}
        style={{
          height: `${height}px`,
          backgroundColor: "var(--surface-neutral-action)",
          color: "var(--text-subtle)",
        }}
      >
        <ImageIcon size={40} style={{ color: "var(--text-disabled)" }} />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${className}`.trim()}
      style={{ height: `${height}px` }}
    >
      {/* Images strip — CSS Grid for proportional layout */}
      <div
        className="w-full h-full"
        style={{
          display: "grid",
          gridTemplateColumns: img3
            ? "412fr 412fr 363fr"
            : img2
              ? "1fr 1fr"
              : "1fr",
          gap: "2px",
        }}
      >
        {/* Image 1 — left corners rounded */}
        {img1 && (
          <div className="relative overflow-hidden rounded-tl-[16px] rounded-bl-[16px]">
            <img
              src={img1.url}
              alt={img1.alt ?? ""}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}

        {/* Image 2 — no radius */}
        {img2 && (
          <div className="relative overflow-hidden">
            <img
              src={img2.url}
              alt={img2.alt ?? ""}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}

        {/* Image 3 — no radius, overflow hidden */}
        {img3 && (
          <div className="relative overflow-hidden">
            <img
              src={img3.url}
              alt={img3.alt ?? ""}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Bouton "Galerie" flottant top-right */}
      {onGalleryClick && (
        <button
          onClick={onGalleryClick}
          className="absolute top-[20px] right-[20px] flex items-center gap-[8px]
            p-[12px] rounded-[16px] border border-solid transition-colors"
          style={{
            backgroundColor: "var(--surface-neutral-default)",
            borderColor: "var(--surface-neutral-default)",
          }}
        >
          <span
            className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
            style={{ color: "var(--text-neutral-action)" }}
          >
            {galleryLabel}
          </span>
          <ImageIcon
            size={20}
            style={{ color: "var(--text-neutral-action)" }}
          />
        </button>
      )}
    </div>
  );
}
