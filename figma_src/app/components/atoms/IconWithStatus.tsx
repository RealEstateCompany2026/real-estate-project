/**
 * ATOM: IconWithStatus
 * 
 * Icône avec indicateur de statut (point vert)
 * Basé sur AtomeIconIcon.tsx du design system Figma
 */

import svgPaths from "../../../imports/svg-xvc99zx8eg";
import { imgPerson2 } from "../../../imports/svg-w1e6e";

export interface IconWithStatusProps {
  icon: React.ReactNode;
  showStatus?: boolean;
}

export function IconWithStatus({ icon, showStatus = true }: IconWithStatusProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">
          {icon}
          {showStatus && (
            <div className="relative shrink-0 size-[20px]">
              <div 
                className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]"
                style={{ maskImage: `url('${imgPerson2}')` }}
              >
                <svg 
                  className="absolute block size-full" 
                  fill="none" 
                  preserveAspectRatio="none" 
                  viewBox="0 0 18.3333 13.3333"
                >
                  <path 
                    d={svgPaths.p6ff9340} 
                    fill="var(--fill-0, #0DA500)" 
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
