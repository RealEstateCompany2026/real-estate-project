import svgPaths from "./svg-utsy77ac3c";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="atome . icon + text . medium">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="scroll-text">
          <div className="absolute bottom-1/2 left-[41.67%] right-[37.5%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-1px_-24%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 2">
                <path d="M5.16667 1H1" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[33.33%_37.5%_66.67%_41.67%]" data-name="Vector">
            <div className="absolute inset-[-1px_-24%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 2">
                <path d="M5.16667 1H1" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_20.83%_29.17%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-8.57%_-8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 13.6667">
                <path d={svgPaths.p1d9bd480} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-6.67%_-6%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 17">
                <path d={svgPaths.p14b02680} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">24%</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[red] col-1 ml-0 mt-0 rounded-[8px] row-1 size-[14px]" />
    </div>
  );
}

export default function OrganismeListKpiConversionStraight() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="organisme . list . kpi . conversion . straight">
      <Frame />
      <Group />
    </div>
  );
}