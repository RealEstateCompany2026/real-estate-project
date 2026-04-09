import svgPaths from "./svg-euyiz2zje8";
import { imgInfo, imgIcnInfo } from "./svg-9sa7x";
type LabelProps = {
  className?: string;
  icon?: boolean;
  label?: string;
  type?: "default light" | "required light" | "default dark" | "required dark";
};

function Label({ className, icon = true, label = "Label", type = "default light" }: LabelProps) {
  const isDefaultLightOrRequiredLight = ["default light", "required light"].includes(type);
  const isRequiredDarkOrDefaultDark = ["required dark", "default dark"].includes(type);
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">
          {isDefaultLightOrRequiredLight && (
            <div className="flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
              <p className="leading-[20px]">{label}</p>
            </div>
          )}
          {isDefaultLightOrRequiredLight && icon && (
            <div className="relative shrink-0 size-[20px]" data-name="icn_info">
              <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="info" style={{ maskImage: `url('${imgInfo}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                  <path d={svgPaths.p35a3ef40} fill="var(--fill-0, #444955)" id="info" />
                </svg>
              </div>
            </div>
          )}
          {isRequiredDarkOrDefaultDark && (
            <div className="flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
              <p className="leading-[20px]">{label}</p>
            </div>
          )}
          {isRequiredDarkOrDefaultDark && icon && (
            <div className="relative shrink-0 size-[20px]" data-name="icn_info">
              <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="info" style={{ maskImage: `url('${imgIcnInfo}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.pd379380} fill="var(--fill-0, #444955)" id="info" />
                </svg>
              </div>
            </div>
          )}
          {["required light", "required dark"].includes(type) && (
            <div className="-translate-y-1/2 absolute flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] left-[-8px] not-italic text-[16px] text-[red] top-[10px] tracking-[0.16px] whitespace-nowrap">
              <p className="leading-[20px]">*</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Label1() {
  return <Label className="relative size-full" />;
}