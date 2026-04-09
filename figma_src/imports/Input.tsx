import svgPaths from "./svg-y3ti0bhvcs";
import { imgInfo, imgIcnInfo } from "./svg-5ekpe";
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
type InputProps = {
  className?: string;
  hintText?: boolean;
  hintText1?: string;
  propriete1?: "default light" | "default dark";
};

function Input({ className, hintText = true, hintText1 = "Hint text", propriete1 = "default light" }: InputProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || "relative w-[339px]"}>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Label className="relative shrink-0" type={isDefaultDark ? "default dark" : undefined} />
        <div className={`relative shrink-0 w-full ${isDefaultDark ? "bg-[#111215]" : "bg-white"}`} data-name="Field">
          <div aria-hidden="true" className={`absolute border-b border-solid inset-0 pointer-events-none ${isDefaultDark ? "border-[#333740]" : "border-[#ecedee]"}`} />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[18px] relative w-full">
              <div className={`flex flex-[1_0_0] flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.16px] ${isDefaultDark ? "text-[#737780]" : "text-[#a1a4aa]"}`}>
                <p className="leading-[20px]">First name</p>
              </div>
            </div>
          </div>
        </div>
        {hintText && (
          <div className="flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#737780] text-[14px] tracking-[0.14px] w-[min-content]">
            <p className="leading-[16px]">{hintText1}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Input1() {
  return <Input className="relative size-full" />;
}