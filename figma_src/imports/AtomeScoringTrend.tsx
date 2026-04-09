import svgPaths from "./svg-z9oao59v8e";
import { imgArrowDropDown } from "./svg-r1m5c";

export default function AtomeScoringTrend() {
  return (
    <div className="relative size-full" data-name="atome . scoring . trend">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Body . sm">
            <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">score</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <div className="relative size-[24px]" data-name="icn_arrow_drop_down">
                <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-10px] mask-size-[24px_24px]" data-name="arrow_drop_down" style={{ maskImage: `url('${imgArrowDropDown}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d={svgPaths.p29d06c00} fill="var(--fill-0, #0DA500)" id="arrow_drop_down" stroke="var(--stroke-0, #0DA500)" strokeWidth="0.025" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}