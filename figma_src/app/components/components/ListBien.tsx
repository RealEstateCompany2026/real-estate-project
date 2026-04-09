/**
 * COMPONENT: ListBien
 *
 * Item de liste pour un bien immobilier avec KPI indicators
 * Utilise les organismes du design system Figma avec dimensions exactes
 *
 * Largeur totale: 1191px
 * Hauteur: 120px
 *
 * Structure:
 * - Section Bien (622px)
 * - Divider + Spacing (63px)
 * - KPI Qualification (77px)
 * - Divider + Spacing (63px)
 * - KPI Entretien (77px)
 * - Divider + Spacing (63px)
 * - KPI Conversion (77px)
 * - Divider + Spacing (63px)
 * - Section AI Suggestions (86px)
 *
 * États: default light, hover light, default dark, hover dark
 */

import { useHoverState } from "../../hooks/useHoverState";
import { VerticalDivider } from "../atoms/VerticalDivider";
import { SectionListBien } from "../molecules/SectionListBien";
import { KpiIndicator } from "../atoms/KpiIndicator";
import { ListSuggestions } from "../organisms/ListSuggestions";

export interface ListBienProps {
  // Bien
  imageUrl: string;
  type: string;
  price: string;
  location: string;
  bienType: string;
  surface: string;
  dpe?: "A" | "B" | "C" | "D" | "E" | "F" | "G";

  // KPI Indicators
  qualification: number; // Pourcentage 0-100
  entretien: number; // Pourcentage 0-100
  conversion: number; // Pourcentage 0-100

  // AI
  aiSuggestions?: number;

  // Interactions
  onBienClick?: () => void;
  className?: string;
  theme?: "light" | "dark";
  forceHover?: boolean;
}

export function ListBien({
  imageUrl,
  type,
  price,
  location,
  bienType,
  surface,
  dpe = "A",
  qualification,
  entretien,
  conversion,
  aiSuggestions = 0,
  onBienClick,
  className = "",
  theme = "light",
  forceHover = false,
}: ListBienProps) {
  const { hovered, handlers } = useHoverState(forceHover);

  const getBorderColor = () => {
    const hovered = forceHover || isHovered;
    if (theme === "dark") {
      return hovered ? "var(--neutral-600)" : "var(--neutral-700)"; // neutral-600 : neutral-700
    }
    return hovered ? "var(--neutral-200)" : "var(--neutral-50)"; // neutral-200 : neutral-50
  };

  const getBackgroundColor = () => {
    const hovered = forceHover || isHovered;
    if (theme === "dark") {
      return hovered ? "var(--neutral-700)" : "var(--neutral-800)"; // neutral-700 : neutral-800
    }
    return hovered ? "var(--neutral-50)" : "var(--neutral-white)"; // neutral-50 : neutral-white
  };

  return (
    <div
      className={`flex items-center transition-colors ${className}`}
      style={{
        width: "100%",
        minHeight: "120px",
        border: `1px solid ${getBorderColor()}`,
        borderRadius: "16px",
        backgroundColor: getBackgroundColor(),
      }}
      {...handlers}
    >
      {/* Section Bien - flex-1 */}
      <div className="flex-1 min-w-0">
        <SectionListBien
          imageUrl={imageUrl}
          type={type}
          price={price}
          location={location}
          bienType={bienType}
          surface={surface}
          dpe={dpe}
          theme={theme}
          onClick={onBienClick}
        />
      </div>

      {/* Divider + Spacing */}
      <div className="flex items-center px-4 shrink-0 h-full">
        <div className="w-px h-[84px]">
          <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
        </div>
      </div>

      {/* KPI Qualification - 77px */}
      <div className="w-[77px] shrink-0 h-full">
        <div className="flex items-center justify-center h-full">
          <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="vertical" theme={theme} hover={hovered} />
        </div>
      </div>

      {/* Divider + Spacing */}
      <div className="flex items-center px-4 shrink-0 h-full">
        <div className="w-px h-[84px]">
          <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
        </div>
      </div>

      {/* KPI Entretien - 77px */}
      <div className="w-[77px] shrink-0 h-full">
        <div className="flex items-center justify-center h-full">
          <KpiIndicator kpi="ent" value={`${entretien}%`} percentage={entretien} variant="vertical" theme={theme} hover={hovered} />
        </div>
      </div>

      {/* Divider + Spacing */}
      <div className="flex items-center px-4 shrink-0 h-full">
        <div className="w-px h-[84px]">
          <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
        </div>
      </div>

      {/* KPI Conversion - 77px */}
      <div className="w-[77px] shrink-0 h-full">
        <div className="flex items-center justify-center h-full">
          <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="vertical" theme={theme} hover={hovered} />
        </div>
      </div>

      {/* Divider + Spacing */}
      <div className="flex items-center px-4 shrink-0 h-full">
        <div className="w-px h-[84px]">
          <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
        </div>
      </div>

      {/* AI Suggestions - 86px */}
      <div className="w-[86px] shrink-0 h-full">
        <ListSuggestions count={aiSuggestions} theme={theme} />
      </div>
    </div>
  );
}
