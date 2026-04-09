import svgPaths from "./svg-olz3apaw00";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="atome . icon + text . medium">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="message-circle-check">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6668">
                <path d={svgPaths.p243e82f1} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
            <div className="absolute inset-[-30%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5.33333">
                <path d={svgPaths.p371ae280} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">82%</p>
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

export default function OrganismeListKpiEngagementStraight() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="organisme . list . kpi . engagement . straight">
      <Frame />
      <Group />
    </div>
  );
}