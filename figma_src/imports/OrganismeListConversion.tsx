import svgPaths from "./svg-g4voo3gaf9";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <AtomeIconTrioHelper additionalClassNames="absolute contents inset-0">{children}</AtomeIconTrioHelper>
    </div>
  );
}
type AtomeIconTrioHelperProps = {
  additionalClassNames?: string;
};

function AtomeIconTrioHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<AtomeIconTrioHelperProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

export default function OrganismeListConversion() {
  return (
    <div className="relative size-full" data-name="organisme . list . conversion">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
          <div className="relative shrink-0 w-[195px]" data-name="organisme . conversion">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
              <div className="h-[20px] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] w-full whitespace-nowrap" data-name="atome . title section list">
                <p className="absolute font-['roboto:SemiBold',sans-serif] left-0 top-0">CONVERSION</p>
                <p className="-translate-x-full absolute font-['roboto:Regular',sans-serif] left-[195px] text-right top-0">36%</p>
              </div>
              <div className="relative shrink-0" data-name="atome . icon . trio">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[42px] items-center relative">
                    <Wrapper>
                      <g id="security-safe">
                        <path d={svgPaths.p2221f7c0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Group">
                          <path d={svgPaths.p3fa24ef0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                          <path d="M10 10.4167V12.9167" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        </g>
                        <g id="Vector_4" opacity="0" />
                      </g>
                    </Wrapper>
                    <Wrapper>
                      <g id="tag-2">
                        <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                        <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_4" opacity="0" stroke="var(--stroke-0, #444955)" />
                      </g>
                    </Wrapper>
                    <AtomeIconTrioHelper additionalClassNames="relative shrink-0 size-[20px]">
                      <g id="vuesax/linear/receipt-text">
                        <path d={svgPaths.p39feaa00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p3e7ea80} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d="M5 7.5H10" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M5.625 10.8333H9.375" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </AtomeIconTrioHelper>
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