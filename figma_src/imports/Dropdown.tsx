import svgPaths from "./svg-sug55oj38r";
type DropdownProps = {
  className?: string;
  propriete1?: "shadow light" | "shadow dark" | "default dark" | "default light";
};

function Dropdown({ className, propriete1 = "shadow light" }: DropdownProps) {
  const isDefaultLight = propriete1 === "default light";
  const isShadowDarkOrDefaultDark = ["shadow dark", "default dark"].includes(propriete1);
  return (
    <div className={className || `h-[44px] relative rounded-[16px] w-[104px] ${isShadowDarkOrDefaultDark ? "bg-[#333740]" : "bg-white"}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${propriete1 === "default dark" ? "border-[#333740]" : isDefaultLight ? "border-white" : propriete1 === "shadow dark" ? "border-[#333740] shadow-[1px_1px_8px_0px_rgba(0,0,0,0.15)]" : "border-white shadow-[1px_1px_8px_0px_rgba(0,0,0,0.15)]"}`} />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative size-full">
          <div className="relative shrink-0" data-name="atome . text + icon . medium">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative">
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">{isShadowDarkOrDefaultDark ? "Text" : isDefaultLight ? "Label" : "Label"}</p>
                </div>
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
                  <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isShadowDarkOrDefaultDark ? "0 0 24 24" : "0 0 20 20"}>
                      <g id="arrow-down">
                        <path d={isShadowDarkOrDefaultDark ? svgPaths.p336ed396 : svgPaths.p1134a680} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        {["shadow light", "default light"].includes(propriete1) && <path d={svgPaths.p304c5900} id="Vector_2" opacity="0" stroke="var(--stroke-0, #444955)" />}
                        {isShadowDarkOrDefaultDark && <g id="Vector_2" opacity="0" />}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dropdown1() {
  return <Dropdown className="bg-white relative rounded-[16px] size-full" />;
}