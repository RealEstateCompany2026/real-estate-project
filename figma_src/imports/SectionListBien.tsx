import imgRectangle278 from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";
import svgPaths from "./svg-52mg6kolhl";

function SectionListBienHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

export default function SectionListBien() {
  return (
    <div className="relative size-full" data-name="section . list . bien">
      <div className="content-stretch flex flex-col items-start pr-[63px] relative size-full">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="h-[120px] relative shrink-0 w-[160px]" data-name="atome . image . bien">
            <div className="absolute inset-0 rounded-bl-[16px] rounded-tl-[16px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-tl-[16px] size-full" src={imgRectangle278} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[94px]">
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
              <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
                    <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">VENTE</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/location">
                <SectionListBienHelper>
                  <g>
                    <path d={svgPaths.p3cede380} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                    <path d={svgPaths.p31303b00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                    <path d={svgPaths.p304c5900} id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                  </g>
                </SectionListBienHelper>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="atome . icon + text . medium">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative w-full">
                  <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/tag-2">
                    <SectionListBienHelper>
                      <g id="tag-2">
                        <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                        <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_4" opacity="0" />
                      </g>
                    </SectionListBienHelper>
                  </div>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">450 000€</p>
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