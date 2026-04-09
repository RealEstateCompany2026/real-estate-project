/**
 * COMPONENT: ListClient
 *
 * Item de liste pour un client avec score, indicateurs et actions
 * Utilise les organismes du design system Figma avec dimensions exactes
 *
 * Largeur totale: 1191px
 * Hauteur: 120px
 *
 * États: default light, hover light, default dark, hover dark
 */

import { useHoverState } from "../../hooks/useHoverState";
import { ListItemDivider } from "../atoms/ListItemDivider";
import { VerticalDivider } from "../atoms/VerticalDivider";
import { KpiIndicator } from "../atoms/KpiIndicator";
import { ListSuggestions } from "../organisms/ListSuggestions";
import { ListClientName } from "../molecules/ListClientName";

export interface ListClientProps {
  firstName: string;
  lastName: string;
  badges?: Array<{ label: string; variant?: "default" | "success" | "warning" | "error" | "information" }>;
  aiSuggestions?: number; // 0-4
  qualification: number; // Pourcentage 0-100
  engagement: number; // Pourcentage 0-100
  conversion: number; // Pourcentage 0-100
  reactivation: number; // Pourcentage 0-100
  onClientClick?: () => void;
  className?: string;
  theme?: "light" | "dark";
  forceHover?: boolean; // Force l'état hover pour les démos
}

export function ListClient({
  firstName,
  lastName,
  badges,
  aiSuggestions = 0,
  qualification,
  engagement,
  conversion,
  reactivation,
  onClientClick,
  className = "",
  theme = "light",
  forceHover = false,
}: ListClientProps) {
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
    <div className={className}>
      <div
        className="flex items-center transition-colors"
        style={{
          width: "100%",
          minHeight: "120px",
          border: `1px solid ${getBorderColor()}`,
          borderRadius: "16px", // scale/400
          backgroundColor: getBackgroundColor(),
        }}
        {...handlers}
      >
        {/* Section 1: Nom du client - flex-1 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center h-full">
            <ListClientName
              firstName={firstName}
              lastName={lastName}
              badges={badges}
              onClick={onClientClick}
              theme={theme}
            />
          </div>
        </div>

        {/* Divider + Spacing */}
        <div className="flex items-center px-4 shrink-0 h-full">
          <div className="w-px h-[84px]">
            <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* Section 2: Qualification - 77px */}
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

        {/* Section 3: Engagement - 78px */}
        <div className="w-[78px] shrink-0 h-full">
          <div className="flex items-center justify-center h-full">
            <KpiIndicator kpi="eng" value={`${engagement}%`} percentage={engagement} variant="vertical" theme={theme} hover={hovered} />
          </div>
        </div>

        {/* Divider + Spacing */}
        <div className="flex items-center px-4 shrink-0 h-full">
          <div className="w-px h-[84px]">
            <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* Section 4: Conversion - 78px */}
        <div className="w-[78px] shrink-0 h-full">
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

        {/* Section 5: Réactivation - 78px */}
        <div className="w-[78px] shrink-0 h-full">
          <div className="flex items-center justify-center h-full">
            <KpiIndicator kpi="reac" value={`${reactivation}%`} percentage={reactivation} variant="vertical" theme={theme} hover={hovered} />
          </div>
        </div>

        {/* Divider + Spacing */}
        <div className="flex items-center px-4 shrink-0 h-full">
          <div className="w-px h-[84px]">
            <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* Section 6: AI Suggestions - 86px */}
        <div className="w-[86px] shrink-0 h-full">
          <div className="flex items-center justify-center h-full">
            <ListSuggestions count={aiSuggestions} theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}