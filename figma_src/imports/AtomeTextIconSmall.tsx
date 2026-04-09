import svgPaths from "./svg-wusdbh2jfn";
type AtomeTextIconSmallProps = {
  className?: string;
  propriete1?: "small default light" | "small disabled light" | "small default dark" | "small disabled dark";
};

function AtomeTextIconSmall({ className, propriete1 = "small default light" }: AtomeTextIconSmallProps) {
  const isSmallDefaultDarkOrSmallDisabledDark = ["small default dark", "small disabled dark"].includes(propriete1);
  const isSmallDisabledLight = propriete1 === "small disabled light";
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">
          <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${propriete1 === "small default dark" ? "text-[#d0d1d4]" : isSmallDisabledLight ? "text-[#a1a4aa]" : "text-[#444955]"}`}>
            <p className="leading-[16px]">Text</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/arrow-down">
            <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallDefaultDarkOrSmallDisabledDark ? "0 0 24 24" : "0 0 16 16"}>
                <g id="arrow-down">
                  <path d={isSmallDefaultDarkOrSmallDisabledDark ? svgPaths.p336ed396 : svgPaths.p3993d9c0} id="Vector" stroke={isSmallDisabledLight ? "var(--stroke-0, #A1A4AA)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <g id="Vector_2" opacity="0" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AtomeTextIconSmall1() {
  return <AtomeTextIconSmall className="relative size-full" />;
}