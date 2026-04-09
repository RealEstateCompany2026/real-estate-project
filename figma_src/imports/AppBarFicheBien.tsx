import svgPaths from "./svg-jtatgvcsg8";
import { imgArrowLeftAlt, imgDatabase, imgIconButton, imgIconButton1 } from "./svg-0qj6s";

function AppBarFicheBienVuesaxLinearProfileCircle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/profile-circle">
        {children}
      </div>
    </div>
  );
}

function AppBarFicheBienHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}

function AppBarFicheBienAtomeIconTextMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarFicheBienHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarFicheBienIconButton3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="Propriété 1=Medium">
        {children}
      </div>
    </Wrapper>
  );
}

function AppBarFicheBienIconButton2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="icn_arrow_left_alt">
        {children}
      </div>
    </Wrapper>
  );
}

function AppBarFicheBienIconButton1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/tag-2">
        <div className="absolute contents inset-0" data-name="vuesax/linear/tag-2">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

function AppBarFicheBienIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/security-safe">
        <div className="absolute contents inset-0" data-name="vuesax/linear/security-safe">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}
type AtomeAiSuggestionProps = {
  className?: string;
  propriete1?: "0 light" | "1 light" | "2 light" | "3 light" | "4 light" | "0 dark" | "4 dark" | "3 dark" | "2 dark" | "1 dark";
};

function AtomeAiSuggestion({ className, propriete1 = "0 light" }: AtomeAiSuggestionProps) {
  const is1Light = propriete1 === "1 light";
  const is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark = ["2 light", "3 light", "4 light", "0 dark", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1);
  return (
    <div className={className || "h-[24px] relative rounded-[16px] w-[34px]"}>
      <div className={`absolute inset-[0_1.47%] rounded-[16px] ${["1 light", "2 light", "3 light", "4 light", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "bg-[#7b72f9]" : ""}`} data-name="Sticker">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${["1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "border-[#968ffa]" : propriete1 === "0 dark" ? "border-[#444955]" : ["1 light", "2 light", "3 light", "4 light"].includes(propriete1) ? "border-[#635cc7]" : "border-[#a1a4aa]"}`} />
        <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative">
          <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[6px] py-[4px] relative">
                <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : is1Light ? "text-white" : "text-[#a1a4aa]"}`}>{is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : is1Light ? "1" : "0"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type AppBarFicheBienProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarFicheBien({ className, propriete1 = "light" }: AppBarFicheBienProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[27px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar fiche bien light">
              <AppBarFicheBienIconButton2>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
                    <path d={svgPaths.p1f93a640} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarFicheBienIconButton2>
              <AppBarFicheBienHelper>
                <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">identifiant du bien</p>
                </div>
              </AppBarFicheBienHelper>
              <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheBienHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">À VENDRE</p>
                </AppBarFicheBienHelper1>
              </div>
              <AppBarFicheBienAtomeIconTextMedium>
                <AppBarFicheBienVuesaxLinearProfileCircle>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="profile-circle">
                      <path d={svgPaths.p35d95c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p22ef9d00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p14d24500} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheBienVuesaxLinearProfileCircle>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">CAPELLO, Jean-François</p>
                </div>
              </AppBarFicheBienAtomeIconTextMedium>
              <AppBarFicheBienIconButton3>
                <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database" style={{ maskImage: `url('${imgDatabase}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path d={svgPaths.p2ca4e80} fill="var(--fill-0, #444955)" id="database" />
                  </svg>
                </div>
              </AppBarFicheBienIconButton3>
              <AppBarFicheBienIconButton>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="security-safe">
                    <path d={svgPaths.p2221f7c0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <g id="Group">
                      <path d={svgPaths.p3fa24ef0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M10 10.4167V12.9167" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    </g>
                    <g id="Vector_4" opacity="0" />
                  </g>
                </svg>
              </AppBarFicheBienIconButton>
              <AppBarFicheBienIconButton1>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="tag-2">
                    <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                    <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <g id="Vector_4" opacity="0" />
                  </g>
                </svg>
              </AppBarFicheBienIconButton1>
              <div className="bg-[#e6f6e5] h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#c3e9bf] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheBienHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0da500] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">PUBLIÉ</p>
                </AppBarFicheBienHelper1>
              </div>
              <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar fiche bien dark">
              <AppBarFicheBienIconButton2>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgIconButton}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                    <path d={svgPaths.p3f7b8a00} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarFicheBienIconButton2>
              <AppBarFicheBienHelper>
                <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dadbdd] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">H4 . Bold . Desktop</p>
                </div>
              </AppBarFicheBienHelper>
              <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheBienHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#dadbdd] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">LABEL</p>
                </AppBarFicheBienHelper1>
              </div>
              <AppBarFicheBienAtomeIconTextMedium>
                <AppBarFicheBienVuesaxLinearProfileCircle>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="profile-circle">
                      <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheBienVuesaxLinearProfileCircle>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarFicheBienAtomeIconTextMedium>
              <AppBarFicheBienIconButton3>
                <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database" style={{ maskImage: `url('${imgIconButton1}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p2cbf71b0} fill="var(--fill-0, #444955)" id="database" />
                  </svg>
                </div>
              </AppBarFicheBienIconButton3>
              <AppBarFicheBienIconButton>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="security-safe">
                    <path d={svgPaths.pacd22f0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <g id="Group">
                      <path d={svgPaths.p3e7eb200} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M12 12.5V15.5" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    </g>
                    <g id="Vector_4" opacity="0" />
                  </g>
                </svg>
              </AppBarFicheBienIconButton>
              <AppBarFicheBienIconButton1>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="tag-2">
                    <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                    <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <g id="Vector_4" opacity="0" />
                  </g>
                </svg>
              </AppBarFicheBienIconButton1>
              <div className="bg-[#0c6304] h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#109204] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheBienHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#cfedcc] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">LABEL</p>
                </AppBarFicheBienHelper1>
              </div>
              <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarFicheBien1() {
  return <AppBarFicheBien className="bg-white relative size-full" />;
}