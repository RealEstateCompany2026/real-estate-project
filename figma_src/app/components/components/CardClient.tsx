/**
 * COMPONENT: CardClient
 *
 * Card de client avec KPI indicators en format vertical
 * Version card du composant ListClient
 *
 * Largeur: 350px
 * Structure: Header + 4 KPIs (2x2 grid) + AI Suggestions
 */

import { useHoverState } from "../../hooks/useHoverState";
import { ListClientName } from "../molecules/ListClientName";
import { KpiIndicator } from "../atoms/KpiIndicator";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { VerticalDivider } from "../atoms/VerticalDivider";
import { HorizontalDivider } from "../atoms/HorizontalDivider";

export interface CardClientProps {
  firstName: string;
  lastName: string;
  badges?: Array<{ label: string; variant?: "default" | "success" | "warning" | "error" | "information" }>;
  qualification: number; // Pourcentage 0-100
  engagement: number; // Pourcentage 0-100
  conversion: number; // Pourcentage 0-100
  reactivation: number; // Pourcentage 0-100
  aiSuggestions?: number; // 0-4
  onClientClick?: () => void;
  className?: string;
  theme?: "light" | "dark";
  forceHover?: boolean; // Force l'état hover pour les démos
}

export function CardClient({
  firstName,
  lastName,
  badges,
  qualification,
  engagement,
  conversion,
  reactivation,
  aiSuggestions = 0,
  onClientClick,
  className = "",
  theme = "light",
  forceHover = false,
}: CardClientProps) {
  const { hovered, handlers } = useHoverState(forceHover);

  const getBorderColor = () => {
    if (theme === "dark") {
      return "var(--neutral-700)"; // neutral-700
    }
    return "var(--neutral-50)"; // neutral-50
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
      className={`relative ${className}`.trim()}
      style={{
        width: "100%",
      }}
      {...handlers}
    >
      <div
        className="content-stretch flex flex-col gap-[22px] items-center pb-[24px] relative rounded-[16px] size-full"
        style={{
          backgroundColor: getBackgroundColor(),
        }}
      >
        {/* Border */}
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]"
          style={{
            borderColor: getBorderColor(),
          }}
        />

        {/* Content */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {/* Header: Client Name */}
          <div className="h-[120px] relative shrink-0 w-full">
            <ListClientName
              firstName={firstName}
              lastName={lastName}
              badges={badges}
              onClick={onClientClick}
              theme={theme}
            />
          </div>

          {/* KPI Sections */}
          <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-full">
            {/* Horizontal Divider */}
            <HorizontalDivider theme={theme} variant={hovered ? "hover" : "default"} />

            {/* Row 1: Qualification | Engagement */}
            <div className="content-stretch flex gap-[38px] items-center relative shrink-0">
              <div style={{ width: "77px" }}>
                <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="vertical" theme={theme} hover={hovered} />
              </div>
              <div className="h-[84px] relative shrink-0 w-0">
                <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
              </div>
              <div style={{ width: "78px" }}>
                <KpiIndicator kpi="eng" value={`${engagement}%`} percentage={engagement} variant="vertical" theme={theme} hover={hovered} />
              </div>
            </div>

            {/* Horizontal Divider */}
            <HorizontalDivider theme={theme} variant={hovered ? "hover" : "default"} />

            {/* Row 2: Conversion | Réactivation */}
            <div className="content-stretch flex gap-[38px] items-center relative shrink-0">
              <div style={{ width: "78px" }}>
                <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="vertical" theme={theme} hover={hovered} />
              </div>
              <div className="h-[84px] relative shrink-0 w-0">
                <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
              </div>
              <div style={{ width: "78px" }}>
                <KpiIndicator kpi="reac" value={`${reactivation}%`} percentage={reactivation} variant="vertical" theme={theme} hover={hovered} />
              </div>
            </div>

            {/* Horizontal Divider */}
            <HorizontalDivider theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* AI Suggestions Badge - Toujours affiché */}
        <AiSuggestion count={aiSuggestions} theme={theme} />
      </div>
    </div>
  );
}
