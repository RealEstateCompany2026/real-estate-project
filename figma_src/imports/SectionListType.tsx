import svgPaths from "./svg-rpq5d456gq";

function SectionListTypeHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function SectionListTypeAtomeIconTextMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}
type IconDpeProps = {
  className?: string;
  type?: "A" | "B" | "C" | "D" | "E" | "F" | "G";
};

function IconDpe({ className, type = "A" }: IconDpeProps) {
  const isB = type === "B";
  const isC = type === "C";
  const isD = type === "D";
  const isE = type === "E";
  const isF = type === "F";
  const isG = type === "G";
  return (
    <div className={className || `relative rounded-[16px] size-[20px] ${isG ? "bg-[#ec0119]" : isF ? "bg-[#ff882f]" : isE ? "bg-[#ffbc02]" : isD ? "bg-[#fdeb03]" : isC ? "bg-[#4ac57b]" : isB ? "bg-[#01bb54]" : "bg-[#00a774]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">{isG ? "G" : isF ? "F" : isE ? "E" : isD ? "D" : isC ? "C" : isB ? "B" : "A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionListType() {
  return (
    <div className="relative size-full" data-name="section . list . type">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[195px]">
          <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
            <p className="absolute font-['roboto:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#d0d1d4] text-[16px] top-0 tracking-[0.16px] whitespace-nowrap">TYPE</p>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <SectionListTypeAtomeIconTextMedium>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/home-2">
                <SectionListTypeHelper>
                  <g id="home-2">
                    <path d={svgPaths.p11095310} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M10 14.9917V12.4917" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                  </g>
                </SectionListTypeHelper>
              </div>
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                <p className="leading-[20px]">T3</p>
              </div>
            </SectionListTypeAtomeIconTextMedium>
            <SectionListTypeAtomeIconTextMedium>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/format-square">
                <SectionListTypeHelper>
                  <g id="format-square">
                    <path d={svgPaths.p9818000} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.pa852840} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p169aca80} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.pcf2c780} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p699ac00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <g id="Vector_6" opacity="0" />
                  </g>
                </SectionListTypeHelper>
              </div>
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                <p className="leading-[20px]">120m²</p>
              </div>
            </SectionListTypeAtomeIconTextMedium>
            <IconDpe className="bg-[#00a774] relative rounded-[16px] shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}