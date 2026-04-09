import svgPaths from "./svg-x1hcdmt01s";
import { imgAdd, imgButton } from "./svg-k4e4u";

function ListImportDataSelectHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">{children}</div>
    </div>
  );
}

function ListImportDataSelectHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[360px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type ListImportDataSelectProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function ListImportDataSelect({ className, propriete1 = "light" }: ListImportDataSelectProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || `h-[80px] relative ${isDark ? "bg-[#111215]" : ""}`}>
      <div className="content-stretch flex flex-col gap-[10px] h-full items-start relative">
        <div className="absolute content-stretch flex flex-col h-[80px] items-start justify-center left-0 px-[10px] top-0">
          <div className="content-stretch flex items-center relative shrink-0 w-[539px]">
            {isLight && (
              <>
                <ListImportDataSelectHelper>
                  <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">database_table_name</p>
                </ListImportDataSelectHelper>
                <div className="bg-white relative rounded-[16px] shrink-0" data-name="button">
                  <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <ListImportDataSelectHelper1>
                    <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
                      <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                          <path d={svgPaths.pe7cde70} fill="var(--fill-0, #444955)" id="add" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Sélectionner</p>
                  </ListImportDataSelectHelper1>
                </div>
              </>
            )}
            {isDark && (
              <>
                <ListImportDataSelectHelper>
                  <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Body . md . Regular . 16/20px</p>
                </ListImportDataSelectHelper>
                <div className="bg-[#111215] relative rounded-[16px] shrink-0" data-name="button">
                  <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <ListImportDataSelectHelper1>
                    <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
                      <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgButton}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Sélectionner</p>
                  </ListImportDataSelectHelper1>
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

export default function ListImportDataSelect1() {
  return <ListImportDataSelect className="relative size-full" />;
}