import svgPaths from "./svg-859j51xh0r";
type OrganismeIaSuggestionProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function OrganismeIaSuggestion({ className, propriete1 = "default light" }: OrganismeIaSuggestionProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || `relative rounded-[16px] w-[1191px] ${isDefaultDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/lamp-on">
            <div className="absolute contents inset-0" data-name="vuesax/linear/lamp-on">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="lamp-on">
                  <path d={svgPaths.p34c2e00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p1c587a00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <g id="Vector_3" opacity="0" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Body . md . light">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">
                <p className={`leading-[20px] not-italic relative text-[#444955] text-[16px] tracking-[0.16px] ${isDefaultDark ? 'font-["roboto:SemiBold",sans-serif] shrink-0 whitespace-nowrap' : 'flex-[1_0_0] font-["roboto:Bold",sans-serif] min-h-px min-w-px'}`}>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"}</p>
              </div>
            </div>
          </div>
          <div className={`relative rounded-[16px] shrink-0 ${isDefaultDark ? "bg-[#635cc7]" : "bg-[#7b72f9]"}`} data-name="button">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDefaultDark ? "border-[#635cc7]" : "border-[#7b72f9]"}`} />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDark ? "text-[#111215]" : "text-white"}`}>Programmer</p>
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                  <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 24 24" : "0 0 20 20"}>
                      <g id="arrow-right">
                        <path d={isDefaultDark ? svgPaths.p1c2f080 : svgPaths.p3a9aee80} id="Vector" stroke={isDefaultDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, white)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_2" opacity="0" />
                      </g>
                    </svg>
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

export default function OrganismeIaSuggestion1() {
  return <OrganismeIaSuggestion className="bg-[#ecedee] relative rounded-[16px] size-full" />;
}