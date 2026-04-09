/**
 * ATOM: TitleSectionList
 * 
 * Titre de section avec pourcentage aligné à droite
 * Basé sur AtomeTitleSectionList.tsx du design system Figma
 * Couleur: neutral/200 (adapté selon le thème)
 */

export interface TitleSectionListProps {
  children?: React.ReactNode;
  title?: string;
  percentage?: number;
  width?: number;
  theme?: "light" | "dark";
}

export function TitleSectionList({ 
  children,
  title, 
  percentage, 
  width = 195,
  theme = "light",
}: TitleSectionListProps) {
  const content = title || children;
  
  // neutral/200 selon le design Figma
  // Valeur exacte du Figma: #D0D1D4 (utilisée pour les deux modes)
  const textColor = "var(--neutral-200)";
  
  return (
    <div 
      className="relative leading-[20px] not-italic text-[16px] tracking-[0.16px] whitespace-nowrap"
      style={{
        height: "20px",
        width: `${width}px`,
      }}
    >
      <p 
        className="absolute left-0 top-0"
        style={{
          fontFamily: "var(--font-family)",
          fontWeight: "600",
          color: textColor,
        }}
      >
        {content}
      </p>
      {percentage !== undefined && (
        <p 
          className="-translate-x-full absolute text-right top-0"
          style={{
            left: `${width}px`,
            fontFamily: "var(--font-family)",
            fontWeight: "400", // Regular pour le pourcentage
            color: textColor,
          }}
        >
          {percentage}%
        </p>
      )}
    </div>
  );
}