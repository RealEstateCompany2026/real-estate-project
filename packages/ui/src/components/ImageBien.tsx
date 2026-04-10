"use client";

/**
 * ImageBien - Image de bien immobilier avec coins arrondis à gauche
 *
 * Dimensions: 160px × 120px
 * Border-radius: 16px (gauche uniquement)
 */

export interface ImageBienProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ImageBien({
  src,
  alt = "Bien immobilier",
  className = "",
}: ImageBienProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-bl-[16px] rounded-tl-[16px] ${className}
      `.trim()}
      style={{
        width: "160px",
        height: "120px",
      }}
    >
      <img
        alt={alt}
        src={src}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
