import svgPaths from "./svg-npm3jhyqq5";
import { imgDatabase } from "./svg-giqcj";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="atome . icon + text . medium">
        <div className="relative shrink-0 size-[20px]" data-name="icn_database">
          <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database" style={{ maskImage: `url('${imgDatabase}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p296a4c80} fill="var(--fill-0, #444955)" id="database" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">64%</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#0da500] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[14px]" />
    </div>
  );
}

export default function OrganismeListKpiQualificationStraight() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="organisme . list . kpi . qualification . straight">
      <Frame />
      <Group />
    </div>
  );
}