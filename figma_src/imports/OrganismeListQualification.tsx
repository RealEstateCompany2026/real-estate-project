import svgPaths from "./svg-r0m8xe2j7u";
import { imgPerson2 } from "./svg-ikxcc";

function AtomeIconIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function AtomeIconIconTrioIcnVitalSigns() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]" data-name="vital_signs" style={{ maskImage: `url('${imgPerson2}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 13.3333">
          <path d={svgPaths.p6ff9340} fill="var(--fill-0, #0DA500)" id="vital_signs" />
        </svg>
      </div>
    </div>
  );
}

export default function OrganismeListQualification() {
  return (
    <div className="relative size-full" data-name="organisme . list . qualification">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
          <div className="relative shrink-0 w-[195px]" data-name="organisme . metrics">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
              <div className="h-[20px] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] w-full whitespace-nowrap" data-name="atome . title section list">
                <p className="absolute font-['roboto:SemiBold',sans-serif] left-0 top-0">QUALIFICATION</p>
                <p className="-translate-x-full absolute font-['roboto:Regular',sans-serif] left-[195px] text-right top-0">82%</p>
              </div>
              <div className="relative shrink-0" data-name="atome . icon + icon . trio">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[18px] items-center relative">
                    <AtomeIconIcon>
                      <div className="relative shrink-0 size-[20px]" data-name="icn_person">
                        <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="person_2" style={{ maskImage: `url('${imgPerson2}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                            <path d={svgPaths.p2d66dc00} fill="var(--fill-0, #444955)" id="person_2" />
                          </svg>
                        </div>
                      </div>
                      <AtomeIconIconTrioIcnVitalSigns />
                    </AtomeIconIcon>
                    <AtomeIconIcon>
                      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/wallet-money">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="vuesax/linear/wallet-money">
                            <path d={svgPaths.p32769560} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.pf6a900} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p2ea24300} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.pf0d1800} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.pcc90080} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <g id="Vector_6" opacity="0" />
                          </g>
                        </svg>
                      </div>
                      <AtomeIconIconTrioIcnVitalSigns />
                    </AtomeIconIcon>
                    <AtomeIconIcon>
                      <div className="relative shrink-0 size-[20px]" data-name="icn_calendar_check">
                        <div className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_check" style={{ maskImage: `url('${imgPerson2}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9792 17.0833">
                            <path d={svgPaths.p1ec73600} fill="var(--fill-0, #444955)" id="calendar_check" />
                          </svg>
                        </div>
                      </div>
                      <AtomeIconIconTrioIcnVitalSigns />
                    </AtomeIconIcon>
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