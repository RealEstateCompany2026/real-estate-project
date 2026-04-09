import svgPaths from "./svg-px16y9czvu";
import { imgArrowLeftAlt, imgIconButton } from "./svg-egv4v";

function AppBarFicheDocumentVuesaxLinearCalendar({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/calendar-2">
        {children}
      </div>
    </div>
  );
}

function AppBarFicheDocumentHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}

function AppBarFicheDocumentVuesaxLinearProfileCircle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/profile-circle">
        {children}
      </div>
    </div>
  );
}

function AppBarFicheDocumentAtomeIconTextMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarFicheDocumentHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarFicheDocumentIconButton({ children }: React.PropsWithChildren<{}>) {
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
type AtomeIdAffaireProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function AtomeIdAffaire({ className, propriete1 = "default light" }: AtomeIdAffaireProps) {
  return (
    <div className={className || "h-[20px] relative w-[74px]"}>
      <div className={`absolute flex flex-col font-["roboto:Regular",sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] tracking-[0.16px] whitespace-nowrap ${propriete1 === "default dark" ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
        <p className="leading-[20px]">55679201</p>
      </div>
    </div>
  );
}
type AppBarFicheDocumentProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarFicheDocument({ className, propriete1 = "light" }: AppBarFicheDocumentProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[27px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar fiche document light">
              <AppBarFicheDocumentIconButton>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
                    <path d={svgPaths.p1f93a640} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarFicheDocumentIconButton>
              <AppBarFicheDocumentHelper>
                <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">Nom du document</p>
                </div>
              </AppBarFicheDocumentHelper>
              <AppBarFicheDocumentAtomeIconTextMedium>
                <AppBarFicheDocumentVuesaxLinearProfileCircle>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="profile-circle">
                      <path d={svgPaths.p35d95c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p22ef9d00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p14d24500} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheDocumentVuesaxLinearProfileCircle>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">NOM, prénom</p>
                </div>
              </AppBarFicheDocumentAtomeIconTextMedium>
              <AtomeIdAffaire className="h-[20px] relative shrink-0 w-[74px]" />
              <div className="bg-[#fff0e5] h-[24px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#ffdabf] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheDocumentHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#ff6b00] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">EN ATTENTE</p>
                </AppBarFicheDocumentHelper1>
              </div>
              <AppBarFicheDocumentAtomeIconTextMedium>
                <AppBarFicheDocumentVuesaxLinearCalendar>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="calendar-2">
                      <path d="M6.66667 1.66667V4.16667" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M13.3333 1.66667V4.16667" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M2.91667 7.575H17.0833" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.p118ff00} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_5" opacity="0" />
                      <path d="M9.99542 11.4168H10.0029" id="Vector_6" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6.91274 11.4168H6.92023" id="Vector_7" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M6.91274 13.9168H6.92023" id="Vector_8" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </AppBarFicheDocumentVuesaxLinearCalendar>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">03 jan. 2027</p>
                </div>
              </AppBarFicheDocumentAtomeIconTextMedium>
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar fiche document dark">
              <AppBarFicheDocumentIconButton>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgIconButton}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                    <path d={svgPaths.p3f7b8a00} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarFicheDocumentIconButton>
              <AppBarFicheDocumentHelper>
                <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dadbdd] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">H4 . Bold . Desktop</p>
                </div>
              </AppBarFicheDocumentHelper>
              <AppBarFicheDocumentAtomeIconTextMedium>
                <AppBarFicheDocumentVuesaxLinearProfileCircle>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="profile-circle">
                      <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarFicheDocumentVuesaxLinearProfileCircle>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarFicheDocumentAtomeIconTextMedium>
              <AtomeIdAffaire className="h-[20px] relative shrink-0 w-[74px]" propriete1="default dark" />
              <div className="bg-[#803600] h-[24px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#bf5000] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarFicheDocumentHelper1>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#ffe1cc] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">LABEL</p>
                </AppBarFicheDocumentHelper1>
              </div>
              <AppBarFicheDocumentAtomeIconTextMedium>
                <AppBarFicheDocumentVuesaxLinearCalendar>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="calendar-2">
                      <path d="M8 2V5" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M16 2V5" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M3.5 9.09H20.5" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.pb7b9300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_5" opacity="0" />
                      <path d="M11.9945 13.7002H12.0035" id="Vector_6" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M8.29529 13.7002H8.30427" id="Vector_7" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M8.29529 16.7002H8.30427" id="Vector_8" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </AppBarFicheDocumentVuesaxLinearCalendar>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarFicheDocumentAtomeIconTextMedium>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarFicheDocument1() {
  return <AppBarFicheDocument className="bg-white relative size-full" />;
}