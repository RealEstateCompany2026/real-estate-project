/**
 * ATOM: ImageBien
 * 
 * Image de bien immobilier avec coins arrondis à gauche
 * Dimensions: 160px × 120px
 * Border-radius: 16px (gauche uniquement)
 */

export interface ImageBienProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ImageBien({ src, alt = "Bien immobilier", className = "" }: ImageBienProps) {
  return (
    <div
      className={`relative ${className}`.trim()}
      style={{
        width: "160px",
        height: "120px",
      }}
    >
      <div className="absolute inset-0 rounded-bl-[16px] rounded-tl-[16px]">
        <img
          alt={alt}
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-tl-[16px] size-full"
          src={src}
        />
      </div>
    </div>
  );
}
