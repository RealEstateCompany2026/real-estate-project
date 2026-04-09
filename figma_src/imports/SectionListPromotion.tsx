import svgPaths from "./svg-8s63o354nt";
import { imgDoorFront } from "./svg-rg7o4";

function SectionListPromotionHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function SectionListPromotionAtomeIconTextMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[44px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

export default function SectionListPromotion() {
  return (
    <div className="relative size-full" data-name="section . list . promotion">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">
          <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
            <p className="absolute font-['roboto:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#d0d1d4] text-[16px] top-0 tracking-[0.16px] whitespace-nowrap">PROMOTION</p>
          </div>
          <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">
            <SectionListPromotionAtomeIconTextMedium>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/direct-inbox">
                <SectionListPromotionHelper>
                  <g id="direct-inbox">
                    <path d={svgPaths.p36ec4800} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M10 7.5L8.33333 5.83333" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p3e483c00} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p3c5e300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <g id="Vector_5" opacity="0" />
                  </g>
                </SectionListPromotionHelper>
              </div>
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                <p className="leading-[20px]">8</p>
              </div>
            </SectionListPromotionAtomeIconTextMedium>
            <SectionListPromotionAtomeIconTextMedium>
              <div className="relative shrink-0 size-[20px]" data-name="icn_door_front">
                <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="door_front" style={{ maskImage: `url('${imgDoorFront}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path d={svgPaths.p167b1980} fill="var(--fill-0, #444955)" id="door_front" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                <p className="leading-[20px]">3</p>
              </div>
            </SectionListPromotionAtomeIconTextMedium>
            <SectionListPromotionAtomeIconTextMedium>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/heart">
                <SectionListPromotionHelper>
                  <g id="heart">
                    <path d={svgPaths.p122ec340} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_2" opacity="0" stroke="var(--stroke-0, #444955)" />
                  </g>
                </SectionListPromotionHelper>
              </div>
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                <p className="leading-[20px]">1</p>
              </div>
            </SectionListPromotionAtomeIconTextMedium>
          </div>
        </div>
      </div>
    </div>
  );
}