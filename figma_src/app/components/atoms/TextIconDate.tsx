/**
 * ATOM: TextIconDate
 * 
 * Texte avec icône calendrier
 * Basé sur AtomeTextIconDate dans OrganismeListEngagement.tsx
 */

import svgPaths from "../../../imports/svg-7bp6xi25tm";
import { imgCalendarCheck } from "../../../imports/svg-yw0v3";

export interface TextIconDateProps {
  days: number;
  theme?: "light" | "dark";
}

export function TextIconDate({ days, theme = "light" }: TextIconDateProps) {
  const isDark = theme === "dark";
  
  return (
    <div className="relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">
          <div className="relative shrink-0 size-[20px]">
            <div 
              className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]"
              style={{ maskImage: `url('${imgCalendarCheck}')` }}
            >
              <svg 
                className="absolute block size-full" 
                fill="none" 
                preserveAspectRatio="none" 
                viewBox="0 0 15.9792 17.0833"
              >
                <path 
                  d={svgPaths.p1ec73600} 
                  fill="var(--fill-0, #444955)" 
                />
              </svg>
            </div>
          </div>
          <div 
            className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-family)",
              color: isDark ? "var(--text-caption)" : "var(--text-body)",
            }}
          >
            <p className="leading-[20px]">{days} j</p>
          </div>
        </div>
      </div>
    </div>
  );
}
