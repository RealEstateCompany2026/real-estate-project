import svgPaths from "./svg-fqaa9so73w";
import { imgAttachFile, imgAdd, imgOrganismeMessageEdition, imgButton } from "./svg-77axi";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">{children}</div>
    </div>
  );
}

function ComponentMessageEditionButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function ComponentMessageEditionHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ComponentMessageEditionHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">{children}</div>
      </div>
    </div>
  );
}
type ComponentMessageEditionProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function ComponentMessageEdition({ className, propriete1 = "light" }: ComponentMessageEditionProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || "relative w-[550px]"}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center relative w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {isLight && (
              <>
                <ComponentMessageEditionHelper>
                  <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[20px] tracking-[0.2px] whitespace-nowrap">
                    <p className="leading-[24px]">Votre message</p>
                  </div>
                </ComponentMessageEditionHelper>
                <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
                  <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="organisme . message . édition">
                    <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative w-full">
                      <ComponentMessageEditionHelper1>
                        <div className="flex-[1_0_0] font-['roboto:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#444955] text-[0px] text-[16px] tracking-[0.16px] whitespace-pre-wrap">
                          <p className="leading-[20px] mb-0">{`Bonjour Jean-Philippe, `}</p>
                          <p>
                            <span className="leading-[20px]">{`Pourriez-vous m’apporter quelques précisions concernant votre profil afin que je puisse améliorer mes capacités à vous apporter une pleine satisfaction svp ? Pour cela, rien de plus simple. Il vous suffit de `}</span>
                            <span className="decoration-solid font-['Roboto:Bold',sans-serif] font-bold leading-[20px] tracking-[0.16px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                              cliquer ici
                            </span>
                          </p>
                        </div>
                      </ComponentMessageEditionHelper1>
                      <div className="bg-white relative rounded-[16px] shrink-0" data-name="Status=default, Type=outlined light">
                        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <Wrapper>
                          <div className="relative shrink-0 size-[20px]" data-name="icn_attach_file">
                            <div className="absolute bottom-[8.33%] left-[22.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.5px_-2px] mask-size-[24px_24px] right-1/4 top-[8.33%]" data-name="attach_file" style={{ maskImage: `url('${imgAttachFile}')` }}>
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4167 16.6667">
                                <path d={svgPaths.p205bf000} fill="var(--fill-0, #444955)" id="attach_file" />
                              </svg>
                            </div>
                          </div>
                          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Pièce jointe</p>
                        </Wrapper>
                      </div>
                    </div>
                  </div>
                  <ComponentMessageEditionButton>
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Ajouter une pièce jointe</p>
                    <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
                      <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                          <path d={svgPaths.pe7cde70} fill="var(--fill-0, #444955)" id="add" />
                        </svg>
                      </div>
                    </div>
                  </ComponentMessageEditionButton>
                </div>
              </>
            )}
            {isDark && (
              <>
                <ComponentMessageEditionHelper>
                  <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dadbdd] text-[20px] tracking-[0.2px] whitespace-nowrap">
                    <p className="leading-[24px]">H6 . Bold . Desktop</p>
                  </div>
                </ComponentMessageEditionHelper>
                <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
                  <div className="bg-[#111215] relative rounded-[16px] shrink-0 w-full" data-name="organisme . message . édition">
                    <div aria-hidden="true" className="absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative w-full">
                      <ComponentMessageEditionHelper1>
                        <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Body . md . Regular . 16/20px</p>
                      </ComponentMessageEditionHelper1>
                      <div className="bg-[#111215] relative rounded-[16px] shrink-0" data-name="button">
                        <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
                        <Wrapper>
                          <div className="relative shrink-0 size-[20px]" data-name="icn_attach_file">
                            <div className="absolute bottom-[8.33%] left-[22.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.5px_-2px] mask-size-[24px_24px] right-1/4 top-[8.33%]" data-name="attach_file" style={{ maskImage: `url('${imgOrganismeMessageEdition}')` }}>
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 20">
                                <path d={svgPaths.p2507e0f0} fill="var(--fill-0, #444955)" id="attach_file" />
                              </svg>
                            </div>
                          </div>
                          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Pièce jointe</p>
                        </Wrapper>
                      </div>
                    </div>
                  </div>
                  <ComponentMessageEditionButton>
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Ajouter une pièce jointe</p>
                    <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
                      <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgButton}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
                        </svg>
                      </div>
                    </div>
                  </ComponentMessageEditionButton>
                </div>
              </>
            )}
          </div>
          <div className={`relative rounded-[16px] shrink-0 ${isDark ? "bg-[#635cc7]" : "bg-[#7b72f9]"}`} data-name="button">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#635cc7]" : "border-[#7b72f9]"}`} />
            <Wrapper>
              <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDark ? "text-[#111215]" : "text-white"}`}>Envoyer le message</p>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/send-2">
                <div className="absolute contents inset-0" data-name="vuesax/linear/send-2">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDark ? "0 0 24 24" : "0 0 20 20"}>
                    <g id="send-2">
                      <path d={isDark ? svgPaths.p329d5d00 : svgPaths.p1a1f9880} id="Vector" stroke={isDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, white)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={isDark ? svgPaths.p22007680 : svgPaths.p14777600} id="Vector_2" stroke={isDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, white)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_3" opacity="0" />
                    </g>
                  </svg>
                </div>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComponentMessageEdition1() {
  return <ComponentMessageEdition className="relative size-full" />;
}