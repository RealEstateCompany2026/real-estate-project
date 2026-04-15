"use client";

import React, { useState } from "react";
import { Trash2, Image as ImageIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DiaporamaImage {
  id: string;
  url: string;
  alt?: string;
}

export interface DiaporamaProps {
  /** Liste des images du diaporama */
  images: DiaporamaImage[];
  /** Index de l'image sélectionnée par défaut */
  defaultSelectedIndex?: number;
  /** Callback quand l'utilisateur clique sur le bouton supprimer d'une image */
  onDelete?: (image: DiaporamaImage, index: number) => void;
  /** Hauteur max de l'image principale */
  mainImageMaxHeight?: number;
  /** Classes CSS additionnelles */
  className?: string;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Diaporama - Visualiseur de galerie photos
 * Organism du design system RealAgent
 *
 * Affiche :
 * - Une image principale (pleine largeur, rounded, object-cover)
 * - Un bouton supprimer en overlay (top-right de l'image principale)
 * - Un strip de thumbnails horizontal scrollable
 * - Navigation : clic sur thumbnail → change l'image principale
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */
export function Diaporama({
  images,
  defaultSelectedIndex = 0,
  onDelete,
  mainImageMaxHeight = 500,
  className = "",
}: DiaporamaProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  // Garde-fou : si l'index est hors limites
  const safeIndex = Math.min(selectedIndex, images.length - 1);
  const currentImage = images[safeIndex];

  if (images.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-[12px] rounded-[12px] ${className}`}
        style={{
          height: `${mainImageMaxHeight}px`,
          backgroundColor: "var(--surface-neutral-action)",
        }}
      >
        <ImageIcon size={40} style={{ color: "var(--text-disabled)" }} />
        <p
          className="text-[14px] leading-[20px] font-medium"
          style={{ color: "var(--text-subtle)" }}
        >
          Aucune photo
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-[16px] ${className}`}>
      {/* Image principale */}
      <div className="relative w-full">
        <img
          src={currentImage.url}
          alt={currentImage.alt ?? ""}
          className="w-full rounded-[12px] object-cover"
          style={{ maxHeight: `${mainImageMaxHeight}px` }}
        />
        {/* Bouton supprimer — overlay top-right */}
        {onDelete && (
          <button
            className="absolute top-[12px] right-[12px] p-[10px] rounded-full transition-colors"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
            onClick={() => onDelete(currentImage, safeIndex)}
            aria-label="Supprimer cette photo"
          >
            <Trash2 size={18} style={{ color: "var(--text-caption)" }} />
          </button>
        )}
      </div>

      {/* Strip thumbnails — scroll horizontal */}
      {images.length > 1 && (
        <div className="flex gap-[8px] overflow-x-auto pb-[4px]">
          {images.map((image, index) => (
            <button
              key={image.id}
              className="shrink-0 overflow-hidden rounded-[8px] transition-all"
              style={{
                width: "120px",
                height: "80px",
                border:
                  index === safeIndex
                    ? "2px solid var(--border-brand-default)"
                    : "2px solid transparent",
                opacity: index === safeIndex ? 1 : 0.7,
              }}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Photo ${index + 1}`}
            >
              <img
                src={image.url}
                alt={image.alt ?? ""}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
