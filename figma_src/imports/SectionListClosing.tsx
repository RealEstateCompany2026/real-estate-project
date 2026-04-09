import svgPaths from "./svg-tiu5e5glob";
import { imgCheck } from "./svg-vuc4v";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <SectionListClosingHelper additionalClassNames="absolute contents inset-0">{children}</SectionListClosingHelper>
    </div>
  );
}
type SectionListClosingHelperProps = {
  additionalClassNames?: string;
};

function SectionListClosingHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<SectionListClosingHelperProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function AtomeIconIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function SectionListClosingIcnCheck() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
          <path d={svgPaths.p12294b00} fill="var(--fill-0, #0DA500)" id="check" />
        </svg>
      </div>
    </div>
  );
}

export default function SectionListClosing() {
  return (
    <div className="relative size-full" data-name="section . list . closing">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">
          <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
            <p className="absolute font-['roboto:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#d0d1d4] text-[16px] top-0 tracking-[0.16px] whitespace-nowrap">CLOSING</p>
          </div>
          <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">
            <AtomeIconIcon>
              <Wrapper>
                <g id="document-text">
                  <path d={svgPaths.p32b60c80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d={svgPaths.p1cce7dc0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d="M6.66667 10.8333H10" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d="M6.66667 14.1667H13.3333" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <g id="Vector_5" opacity="0" />
                </g>
              </Wrapper>
              <SectionListClosingIcnCheck />
            </AtomeIconIcon>
            <AtomeIconIcon>
              <SectionListClosingHelper additionalClassNames="relative shrink-0 size-[20px]">
                <g id="vuesax/linear/money-recive">
                  <g id="Group">
                    <path d={svgPaths.p2a8aa300} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M10 6.25V13.75" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </g>
                  <path d={svgPaths.p3e8009c0} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M14.1667 2.5V5.83333H17.5" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p6126a00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <g id="Vector_6" opacity="0" />
                </g>
              </SectionListClosingHelper>
              <SectionListClosingIcnCheck />
            </AtomeIconIcon>
            <AtomeIconIcon>
              <Wrapper>
                <g id="judge">
                  <path d={svgPaths.p336f6d00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d={svgPaths.p1d8cd600} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d="M1.66667 17.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d={svgPaths.p35654800} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <g id="Vector_5" opacity="0" />
                </g>
              </Wrapper>
              <SectionListClosingIcnCheck />
            </AtomeIconIcon>
          </div>
        </div>
      </div>
    </div>
  );
}