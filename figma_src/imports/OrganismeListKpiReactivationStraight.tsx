import svgPaths from "./svg-kkr2rqd4ez";
import { imgHeat } from "./svg-bt2nr";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="atome . icon + text . medium">
        <div className="relative shrink-0 size-[20px]" data-name="icn_heat">
          <div className="absolute inset-[12.5%_20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-3px] mask-size-[24px_24px]" data-name="heat" style={{ maskImage: `url('${imgHeat}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
              <path d={svgPaths.p2d6753c0} fill="var(--fill-0, #444955)" id="heat" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">49%</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#ff6b00] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[14px]" />
    </div>
  );
}

export default function OrganismeListKpiReactivationStraight() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="organisme . list . kpi . reactivation . straight">
      <Frame />
      <Group />
    </div>
  );
}