import svgPaths from "./svg-2wvn6hifl8";
import { imgCheck } from "./svg-slut2";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <SectionListTransactionHelper additionalClassNames="absolute contents inset-0">{children}</SectionListTransactionHelper>
    </div>
  );
}
type SectionListTransactionHelperProps = {
  additionalClassNames?: string;
};

function SectionListTransactionHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<SectionListTransactionHelperProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function SectionListTransactionAtomeIconIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

export default function SectionListTransaction() {
  return (
    <div className="relative size-full" data-name="section . list . transaction">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[195px]">
          <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
            <p className="absolute font-['roboto:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#d0d1d4] text-[16px] top-0 tracking-[0.16px] whitespace-nowrap">TRANSACTION</p>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <div className="relative shrink-0 w-[44px]" data-name="atome . icon + text . medium">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative w-full">
                  <Wrapper>
                    <g id="archive-tick">
                      <path d={svgPaths.p16073380} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p2fb40900} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                    </g>
                  </Wrapper>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">2</p>
                  </div>
                </div>
              </div>
            </div>
            <SectionListTransactionAtomeIconIcon>
              <Wrapper>
                <g id="tag-2">
                  <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                  <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <g id="Vector_4" opacity="0" />
                </g>
              </Wrapper>
              <div className="relative shrink-0 size-[20px]" data-name="icn_check">
                <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
                    <path d={svgPaths.p12294b00} fill="var(--fill-0, #0DA500)" id="check" />
                  </svg>
                </div>
              </div>
            </SectionListTransactionAtomeIconIcon>
            <SectionListTransactionAtomeIconIcon>
              <SectionListTransactionHelper additionalClassNames="relative shrink-0 size-[20px]">
                <g id="vuesax/linear/receipt-text">
                  <path d={svgPaths.p39feaa00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d={svgPaths.p3e7ea80} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d="M5 7.5H10" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M5.625 10.8333H9.375" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <g id="Vector_5" opacity="0" />
                </g>
              </SectionListTransactionHelper>
              <div className="relative shrink-0 size-[20px]" data-name="icn_close">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgCheck}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                    <path d={svgPaths.p19fbbe60} fill="var(--fill-0, #444955)" />
                  </svg>
                </div>
              </div>
            </SectionListTransactionAtomeIconIcon>
          </div>
        </div>
      </div>
    </div>
  );
}