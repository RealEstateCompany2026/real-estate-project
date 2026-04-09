import svgPaths from "./svg-40asn6oygn";
import { imgArrowDropDown, imgIcnArrowDropDown } from "./svg-9wvgt";
type AtomeDatepickerMonthProps = {
  className?: string;
  propriete1?: "default . light" | "default. dark";
};

function AtomeDatepickerMonth({ className, propriete1 = "default . light" }: AtomeDatepickerMonthProps) {
  const isDefaultDark = propriete1 === "default. dark";
  return (
    <div className={className || "h-[36px] relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center relative">
          <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>
            <p className="leading-[16px]">Aout 2025</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="icn_arrow_drop_down">
            <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-10px] mask-size-[24px_24px]" data-name="arrow_drop_down" style={isDefaultDark ? { maskImage: `url('${imgIcnArrowDropDown}')` } : { maskImage: `url('${imgArrowDropDown}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 10 5" : "0 0 8.33333 4.16667"}>
                <path d={isDefaultDark ? svgPaths.p29d06c00 : svgPaths.p1ca7b580} fill="var(--fill-0, #444955)" id="arrow_drop_down" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AtomeDatepickerMonth1() {
  return <AtomeDatepickerMonth className="relative size-full" />;
}