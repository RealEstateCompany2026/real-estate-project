"use client";

/**
 * ImageBien - Image de bien immobilier avec coins arrondis
 *
 * Dimensions: 150px × 100px
 * Border-radius: 8px (4 coins)
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
        relative overflow-hidden rounded-lg ${className}
      `.trim()}
      style={{
        width: "150px",
        height: "100px",
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
