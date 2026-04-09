import svgPaths from "./svg-por5anprnq";
import { imgDatabase } from "./svg-89my7";

function SectionListEntretienHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

export default function SectionListEntretien() {
  return (
    <div className="relative size-full" data-name="section . list . entretien">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">
          <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
            <p className="absolute font-['roboto:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#d0d1d4] text-[16px] top-0 tracking-[0.16px] whitespace-nowrap">ENTRETIEN</p>
          </div>
          <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
            <div className="relative shrink-0 w-[70px]" data-name="atome . icon + text . medium">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative w-full">
                  <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/security-safe">
                    <SectionListEntretienHelper>
                      <g id="security-safe">
                        <path d={svgPaths.p2221f7c0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Group">
                          <path d={svgPaths.p3fa24ef0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                          <path d="M10 10.4167V12.9167" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        </g>
                        <g id="Vector_4" opacity="0" />
                      </g>
                    </SectionListEntretienHelper>
                  </div>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">Crée</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[20px]" data-name="icn_database_medium">
              <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database" style={{ maskImage: `url('${imgDatabase}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <path d={svgPaths.p2ca4e80} fill="var(--fill-0, #444955)" id="database" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0" data-name="atome . icon + text . medium">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative">
                  <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/settings">
                    <SectionListEntretienHelper>
                      <g id="settings">
                        <path d={svgPaths.p2544fc00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M1.66667 10H5.83333" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M14.1667 10H18.3333" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_4" opacity="0" />
                      </g>
                    </SectionListEntretienHelper>
                  </div>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">7 j</p>
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