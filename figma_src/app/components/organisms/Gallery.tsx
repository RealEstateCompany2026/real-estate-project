/**
 * Gallery - Galerie photos de bien immobilier
 * Organism du design system RealAgent
 *
 * Remplace GalleryFicheBien (raw Figma import)
 * Navigation, miniatures, compteur, expand
 */

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export interface GalleryProps {
  images: Array<{ url: string; alt?: string }>;
  onExpand?: () => void;
  theme?: "light" | "dark";
  className?: string;
}

export function Gallery({ images, onExpand, theme = "light", className = "" }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div
        className={`relative w-full rounded-[16px] overflow-hidden flex items-center justify-center ${className}`}
        style={{
          height: "277px",
          backgroundColor: theme === "dark" ? "var(--neutral-700)" : "var(--neutral-50)",
          color: theme === "dark" ? "var(--neutral-200)" : "var(--neutral-500)",
        }}
      >
        {/* TODO: brancher photos bien */}
        Aucune photo disponible
      </div>
    );
  }

  return (
    <div className={`relative w-full rounded-[16px] overflow-hidden ${className}`}
         style={{ height: "277px" }}>
      {/* Image principale */}
      <img src={images[activeIndex]?.url} alt={images[activeIndex]?.alt ?? ""}
           className="w-full h-full object-cover" />

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2"
                  onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}>
            <ChevronLeft size={20} color="white" />
          </button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2"
                  onClick={() => setActiveIndex((i) => (i + 1) % images.length)}>
            <ChevronRight size={20} color="white" />
          </button>
        </>
      )}

      {/* Compteur + Expand */}
      <div className="absolute bottom-3 right-3 flex gap-2">
        <span className="bg-black/60 text-white text-sm px-3 py-1 rounded-full">
          {activeIndex + 1}/{images.length}
        </span>
        {onExpand && (
          <button className="bg-black/60 text-white rounded-full p-2" onClick={onExpand}>
            <Maximize2 size={16} />
          </button>
        )}
      </div>

      {/* Miniatures (desktop) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1">
          {images.slice(0, 5).map((img, i) => (
            <div key={i} className={`w-[48px] h-[36px] rounded-md overflow-hidden cursor-pointer border-2
              ${i === activeIndex ? "border-white" : "border-transparent"}`}
              onClick={() => setActiveIndex(i)}>
              <img src={img.url} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          {images.length > 5 && (
            <div className="w-[48px] h-[36px] rounded-md bg-black/60 flex items-center justify-center text-white text-xs">
              +{images.length - 5}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
