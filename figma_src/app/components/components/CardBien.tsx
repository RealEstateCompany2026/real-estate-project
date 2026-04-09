/**
 * COMPONENT: CardBien
 *
 * Card de bien immobilier avec KPI indicators
 * Version card du composant ListBien
 *
 * Largeur: 350px
 * Structure: Image + Détails + 3 KPIs + AI Suggestions
 */

import { MapPin, Tag, House, Square } from "lucide-react";
import { useHoverState } from "../../hooks/useHoverState";
import { ImageBien } from "../atoms/ImageBien";
import { Badge } from "../atoms/Badge";
import { Chip } from "../atoms/Chip";
import { IconDpe, DpeType } from "../atoms/IconDpe";
import { KpiIndicator } from "../atoms/KpiIndicator";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { VerticalDivider } from "../atoms/VerticalDivider";
import { HorizontalDivider } from "../atoms/HorizontalDivider";

export interface CardBienProps {
  imageUrl: string;
  type: string;
  price: string;
  location: string;
  bienType: string;
  surface: string;
  dpe?: DpeType;
  qualification: number; // Pourcentage 0-100
  entretien: number; // Pourcentage 0-100
  conversion: number; // Pourcentage 0-100
  aiSuggestions?: number; // 0-4
  onBienClick?: () => void;
  className?: string;
  theme?: "light" | "dark";
  forceHover?: boolean;
}

export function CardBien({
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
}: CardBienProps) {
  const { hovered, handlers } = useHoverState(forceHover);

  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

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
      onClick={onBienClick}
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
          {/* Image Header */}
          <div className="h-[152px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[16px] rounded-tr-[16px] size-full"
              src={imageUrl}
            />
          </div>

          {/* Details and KPI Sections */}
          <div className="content-stretch flex flex-col gap-[22px] items-center relative shrink-0 w-full">
            {/* Horizontal Divider */}
            <HorizontalDivider theme={theme} variant={hovered ? "hover" : "default"} />

            {/* Details Section */}
            <div className="flex items-center justify-center relative shrink-0 w-full px-[20px]">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[259px]">
                {/* Row 1: Badge type + Chip prix + Badge CARNET */}
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                  <Badge variant="default" theme={theme}>
                    {type}
                  </Badge>

                  <Chip
                    size="medium"
                    icon={<Tag size={20} style={{ color: iconColor }} />}
                    iconPosition="left"
                    theme={theme}
                  >
                    {price}
                  </Chip>

                  <Badge variant="success" theme={theme}>
                    CARNET
                  </Badge>
                </div>

                {/* Row 2: Chip localisation */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <Chip
                    size="medium"
                    icon={<MapPin size={20} style={{ color: iconColor }} />}
                    iconPosition="left"
                    theme={theme}
                  >
                    {location}
                  </Chip>
                </div>

                {/* Row 3: Chip type + Chip surface + Icon DPE */}
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                  <Chip
                    size="medium"
                    icon={<House size={20} style={{ color: iconColor }} />}
                    iconPosition="left"
                    theme={theme}
                  >
                    {bienType}
                  </Chip>

                  <Chip
                    size="medium"
                    icon={<Square size={20} style={{ color: iconColor }} />}
                    iconPosition="left"
                    theme={theme}
                  >
                    {surface}
                  </Chip>

                  <IconDpe type={dpe} size="small" />
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <HorizontalDivider theme={theme} variant={hovered ? "hover" : "default"} />

            {/* KPIs Section */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[20px] relative w-full">
                  {/* Qualification */}
                  <div style={{ width: "77px" }}>
                    <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="vertical" theme={theme} hover={hovered} />
                  </div>

                  {/* Vertical Divider */}
                  <div className="h-[84px] relative shrink-0 w-0">
                    <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
                  </div>

                  {/* Entretien */}
                  <div style={{ width: "78px" }}>
                    <KpiIndicator kpi="ent" value={`${entretien}%`} percentage={entretien} variant="vertical" theme={theme} hover={hovered} />
                  </div>

                  {/* Vertical Divider */}
                  <div className="h-[84px] relative shrink-0 w-0">
                    <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
                  </div>

                  {/* Conversion */}
                  <div style={{ width: "78px" }}>
                    <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="vertical" theme={theme} hover={hovered} />
                  </div>
                </div>
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
