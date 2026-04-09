import svgPaths from "./svg-aydryxafkc";
import { imgAutorenew, imgIconButton } from "./svg-1rhrk";

function ListImportDataSelectedSuccessHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center p-[12px] relative">
        <div className="relative shrink-0 size-[20px]" data-name="icn_autorenew">
          {children}
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ListImportDataSelectedSuccessIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">
          <div className="relative shrink-0 size-[20px]" data-name="icn_check">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
type ListImportDataSelectedSuccessBodyMdDarkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ListImportDataSelectedSuccessBodyMdDarkText({ text, additionalClassNames = "" }: ListImportDataSelectedSuccessBodyMdDarkTextProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type ListImportDataSelectedSuccessBodyMdLightTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ListImportDataSelectedSuccessBodyMdLightText({ text, additionalClassNames = "" }: ListImportDataSelectedSuccessBodyMdLightTextProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type ListImportDataSelectedSuccessProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function ListImportDataSelectedSuccess({ className, propriete1 = "light" }: ListImportDataSelectedSuccessProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || `h-[80px] relative ${isDark ? "bg-[#111215]" : ""}`}>
      <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative">
        <div className="absolute content-stretch flex flex-col h-[80px] items-start justify-center left-0 px-[10px] py-[17px] top-0">
          <div className="content-stretch flex items-center relative shrink-0 w-[660px]">
            {isLight && (
              <>
                <ListImportDataSelectedSuccessBodyMdLightText text="database_table_name" additionalClassNames="w-[360px]" />
                <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
                  <div className="bg-white relative rounded-[16px] shrink-0" data-name="icon button">
                    <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <ListImportDataSelectedSuccessHelper>
                      <div className="absolute inset-[4.17%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-1px] mask-size-[24px_24px]" data-name="autorenew" style={{ maskImage: `url('${imgAutorenew}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 18.3333">
                          <path d={svgPaths.pa369ec0} fill="var(--fill-0, #444955)" id="autorenew" />
                        </svg>
                      </div>
                    </ListImportDataSelectedSuccessHelper>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <ListImportDataSelectedSuccessBodyMdLightText text="import_table_name" additionalClassNames="w-[160px]" />
                    <ListImportDataSelectedSuccessIconButton>
                      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgAutorenew}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
                          <path d={svgPaths.p12294b00} fill="var(--fill-0, #0DA500)" id="check" />
                        </svg>
                      </div>
                    </ListImportDataSelectedSuccessIconButton>
                  </div>
                </div>
              </>
            )}
            {isDark && (
              <>
                <ListImportDataSelectedSuccessBodyMdDarkText text="Body . md . Regular . 16/20px" additionalClassNames="w-[360px]" />
                <div className="content-stretch flex gap-[30px] items-center relative shrink-0">
                  <div className="bg-[#111215] relative rounded-[16px] shrink-0" data-name="icon button">
                    <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <ListImportDataSelectedSuccessHelper>
                      <div className="absolute inset-[4.17%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-1px] mask-size-[24px_24px]" data-name="autorenew" style={{ maskImage: `url('${imgIconButton}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
                          <path d={svgPaths.p1418dc00} fill="var(--fill-0, #444955)" id="autorenew" />
                        </svg>
                      </div>
                    </ListImportDataSelectedSuccessHelper>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0">
                    <ListImportDataSelectedSuccessBodyMdDarkText text="Body . md . Regular . 16/20px" additionalClassNames="w-[160px]" />
                    <ListImportDataSelectedSuccessIconButton>
                      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgIconButton}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
                          <path d={svgPaths.p23b3580} fill="var(--fill-0, #444955)" id="check" />
                        </svg>
                      </div>
                    </ListImportDataSelectedSuccessIconButton>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-[1191px]" data-name="horizontal divider . 1191 px">
          <div className="absolute bottom-full left-0 right-0 top-0">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1191 1">
                <line id="Line 16" stroke={isDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #444955)"} x2="1191" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListImportDataSelectedSuccess1() {
  return <ListImportDataSelectedSuccess className="relative size-full" />;
}