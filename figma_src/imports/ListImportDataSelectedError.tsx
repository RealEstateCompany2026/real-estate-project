import clsx from "clsx";
import svgPaths from "./svg-gtb381r0r7";
import { imgAutorenew, imgIconButton } from "./svg-qv6yq";

function ListImportDataSelectedErrorHelper1({ children }: React.PropsWithChildren<{}>) {
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
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type ListImportDataSelectedErrorHelperProps = {
  additionalClassNames?: string;
};

function ListImportDataSelectedErrorHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<ListImportDataSelectedErrorHelperProps>) {
  return (
    <div className={clsx("content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px py-[11px] relative rounded-[16px]", additionalClassNames)}>
      <Wrapper additionalClassNames="relative shrink-0 w-full">{children}</Wrapper>
    </div>
  );
}

function ListImportDataSelectedErrorIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">
          <div className="relative shrink-0 size-[20px]" data-name="icn_close">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
type ListImportDataSelectedErrorBodyMdDarkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ListImportDataSelectedErrorBodyMdDarkText({ text, additionalClassNames = "" }: ListImportDataSelectedErrorBodyMdDarkTextProps) {
  return (
    <Wrapper additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>
      <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type ListImportDataSelectedErrorBodyMdLightTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ListImportDataSelectedErrorBodyMdLightText({ text, additionalClassNames = "" }: ListImportDataSelectedErrorBodyMdLightTextProps) {
  return (
    <Wrapper additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>
      <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type ListImportDataSelectedErrorProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function ListImportDataSelectedError({ className, propriete1 = "light" }: ListImportDataSelectedErrorProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || `h-[80px] relative w-[1191px] ${isDark ? "bg-[#111215]" : ""}`}>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full">
        <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[80px] px-[10px] py-[5px] top-0">
          <div className="content-stretch flex items-center relative shrink-0 w-[1171px]">
            {isLight && (
              <>
                <ListImportDataSelectedErrorBodyMdLightText text="database_table_name" additionalClassNames="w-[360px]" />
                <div className="content-stretch flex flex-[1_0_0] gap-[30px] items-center min-h-px min-w-px relative">
                  <div className="bg-white relative rounded-[16px] shrink-0" data-name="icon button">
                    <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <ListImportDataSelectedErrorHelper1>
                      <div className="absolute inset-[4.17%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-1px] mask-size-[24px_24px]" data-name="autorenew" style={{ maskImage: `url('${imgAutorenew}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 18.3333">
                          <path d={svgPaths.pa369ec0} fill="var(--fill-0, #444955)" id="autorenew" />
                        </svg>
                      </div>
                    </ListImportDataSelectedErrorHelper1>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                    <ListImportDataSelectedErrorBodyMdLightText text="import_table_name" additionalClassNames="w-[160px]" />
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <ListImportDataSelectedErrorIconButton>
                        <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgAutorenew}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                            <path d={svgPaths.p19fbbe60} fill="var(--fill-0, #FF0000)" />
                          </svg>
                        </div>
                      </ListImportDataSelectedErrorIconButton>
                      <ListImportDataSelectedErrorHelper additionalClassNames="bg-[#ffe5e5]">
                        <p className="flex-[1_0_0] font-['roboto:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#bf0000] text-[14px] tracking-[0.14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                      </ListImportDataSelectedErrorHelper>
                    </div>
                  </div>
                </div>
              </>
            )}
            {isDark && (
              <>
                <ListImportDataSelectedErrorBodyMdDarkText text="Body . md . Regular . 16/20px" additionalClassNames="w-[360px]" />
                <div className="content-stretch flex flex-[1_0_0] gap-[30px] items-center min-h-px min-w-px relative">
                  <div className="bg-[#111215] relative rounded-[16px] shrink-0" data-name="icon button">
                    <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <ListImportDataSelectedErrorHelper1>
                      <div className="absolute inset-[4.17%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-1px] mask-size-[24px_24px]" data-name="autorenew" style={{ maskImage: `url('${imgIconButton}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
                          <path d={svgPaths.p1418dc00} fill="var(--fill-0, #444955)" id="autorenew" />
                        </svg>
                      </div>
                    </ListImportDataSelectedErrorHelper1>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                    <ListImportDataSelectedErrorBodyMdDarkText text="Body . md . Regular . 16/20px" additionalClassNames="w-[160px]" />
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <ListImportDataSelectedErrorIconButton>
                        <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgIconButton}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <path d={svgPaths.p2aa77200} fill="var(--fill-0, #444955)" />
                          </svg>
                        </div>
                      </ListImportDataSelectedErrorIconButton>
                      <ListImportDataSelectedErrorHelper additionalClassNames="bg-[#400000]">
                        <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">Body . sm . Regular . 14/16px</p>
                      </ListImportDataSelectedErrorHelper>
                    </div>
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

export default function ListImportDataSelectedError1() {
  return <ListImportDataSelectedError className="relative size-full" />;
}