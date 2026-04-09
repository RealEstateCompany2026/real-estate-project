import svgPaths from "./svg-mrd61bm8nu";
import { imgArrowLeftAlt, imgIconButton } from "./svg-awrvk";

function AppBarFicheAffaireVuesaxLinearTag({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/tag-2">
        {children}
      </div>
    </div>
  );
}

function AppBarFicheAffaireVuesaxLinearLocation({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/location">
        {children}
      </div>
    </div>
  );
}

function AppBarFicheAffaireVuesaxLinearFormatSquare({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/format-square">
        {children}
      </div>
    </div>
  );
}

function AppBarFicheAffaireVuesaxLinearHome({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/home-2">
        {children}
      </div>
    </div>
  );
}

function AppBarFicheAffaireHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}

function AppBarFicheAffaireAtomeIconTextMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarFicheAffaireHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarFicheAffaireIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">
          <div className="relative shrink-0 size-[20px]" data-name="icn_arrow_left_alt">
            {children}
          </div>
        </div>
      </div>
    </div>
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
type AppBarFicheAffaireProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarFicheAffaire({ className, propriete1 = "light" }: AppBarFicheAffaireProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[27px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar fiche affaire light">
              <AppBarFicheAffaireIconButton>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
                    <path d={svgPaths.p1f93a640} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarFicheAffaireIconButton>
              <AppBarFicheAffaireHelper>
                <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">identifiant de l’affaire</p>
                </div>
              </AppBarFicheAffaireHelper>
              <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheAffaireHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">VENTE</p>
                </AppBarFicheAffaireHelper1>
              </div>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearHome>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="home-2">
                      <path d={svgPaths.p11095310} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M10 14.9917V12.4917" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearHome>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">T4</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearFormatSquare>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="format-square">
                      <path d={svgPaths.p9818000} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pa852840} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p169aca80} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pcf2c780} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p699ac00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_6" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearFormatSquare>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">84 m2</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearLocation>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p3cede380} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <path d={svgPaths.p31303b00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <path d={svgPaths.p304c5900} id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearLocation>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Charleville-Mézière</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearTag>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="tag-2">
                      <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                      <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearTag>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">360 000€</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar fiche affaire dark">
              <AppBarFicheAffaireIconButton>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgIconButton}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                    <path d={svgPaths.p3f7b8a00} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarFicheAffaireIconButton>
              <AppBarFicheAffaireHelper>
                <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dadbdd] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">H4 . Bold . Desktop</p>
                </div>
              </AppBarFicheAffaireHelper>
              <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheAffaireHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#dadbdd] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">LABEL</p>
                </AppBarFicheAffaireHelper1>
              </div>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearHome>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="home-2">
                      <path d={svgPaths.p550ea80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_3" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearHome>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearFormatSquare>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="format-square">
                      <path d={svgPaths.p3cdc2c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p107add00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p28e63f40} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p210cb300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p2f229a00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_6" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearFormatSquare>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearLocation>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.p3d149500} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <path d={svgPaths.p21efb480} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <g id="Vector_3" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearLocation>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AppBarFicheAffaireAtomeIconTextMedium>
                <AppBarFicheAffaireVuesaxLinearTag>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="tag-2">
                      <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                      <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheAffaireVuesaxLinearTag>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarFicheAffaireAtomeIconTextMedium>
              <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 dark" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarFicheAffaire1() {
  return <AppBarFicheAffaire className="bg-white relative size-full" />;
}