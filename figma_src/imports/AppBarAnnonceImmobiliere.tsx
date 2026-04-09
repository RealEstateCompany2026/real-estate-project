import svgPaths from "./svg-6xq6bgetjp";
import { imgBuildCircle, imgIconButton } from "./svg-rmnac";

function AppBarAnnonceImmobiliereHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarAnnonceImmobiliereIconButton4({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="relative shrink-0 size-[20px]" data-name="icn_build_circle">
        {children}
      </div>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">
          <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[20px] tracking-[0.2px] whitespace-nowrap">{children}</div>
        </div>
      </div>
    </div>
  );
}

function AppBarAnnonceImmobiliereIconButton3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/tag-2">
        <div className="absolute contents inset-0" data-name="vuesax/linear/tag-2">
          {children}
        </div>
      </div>
    </Wrapper1>
  );
}

function AppBarAnnonceImmobiliereIconButton2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/location">
        <div className="absolute contents inset-0" data-name="vuesax/linear/location">
          {children}
        </div>
      </div>
    </Wrapper1>
  );
}

function AppBarAnnonceImmobiliereIconButton1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/format-square">
        <div className="absolute contents inset-0" data-name="vuesax/linear/format-square">
          {children}
        </div>
      </div>
    </Wrapper1>
  );
}

function AppBarAnnonceImmobiliereIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/building-3">
        <div className="absolute contents inset-0" data-name="vuesax/linear/building-3">
          {children}
        </div>
      </div>
    </Wrapper1>
  );
}
type AppBarAnnonceImmobiliereH6DesktopLightTextProps = {
  text: string;
};

function AppBarAnnonceImmobiliereH6DesktopLightText({ text }: AppBarAnnonceImmobiliereH6DesktopLightTextProps) {
  return (
    <Wrapper>
      <p className="leading-[24px]">{text}</p>
    </Wrapper>
  );
}
type AppBarAnnonceImmobiliereProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarAnnonceImmobiliere({ className, propriete1 = "light" }: AppBarAnnonceImmobiliereProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[10px] py-[20px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar annonce light">
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="building-3">
                      <path d="M1.66667 18.3333H18.3333" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.p1bdb7980} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M16.6504 18.3417V15" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.p1f129300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M2.5 11.6667H12.5" id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M7.5 18.3333V15.2083" id="Vector_6" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.p36710180} id="Vector_7" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_8" opacity="0" />
                    </g>
                  </svg>
                </AppBarAnnonceImmobiliereIconButton>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="T4" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton1>
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
                </AppBarAnnonceImmobiliereIconButton1>
                <Wrapper>
                  <p>
                    <span className="leading-[24px]">82 m</span>
                    <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      ²
                    </span>
                  </p>
                </Wrapper>
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton4>
                  <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="build_circle" style={{ maskImage: `url('${imgBuildCircle}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                      <path d={svgPaths.p11ed3200} fill="var(--fill-0, #444955)" id="build_circle" />
                    </svg>
                  </div>
                </AppBarAnnonceImmobiliereIconButton4>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="2018" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton2>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p3cede380} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <path d={svgPaths.p31303b00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <g id="Vector_3" opacity="0" />
                    </g>
                  </svg>
                </AppBarAnnonceImmobiliereIconButton2>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="Ville" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton3>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="tag-2">
                      <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                      <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarAnnonceImmobiliereIconButton3>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="340 000 €" />
              </div>
              <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarAnnonceImmobiliereHelper>
                  <p className="font-['roboto:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">
                    <span className="leading-[14px]">1 450€ /</span>
                    <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      m2
                    </span>
                  </p>
                </AppBarAnnonceImmobiliereHelper>
              </div>
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar annonce dark">
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="building-3">
                      <path d="M2 22H22" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.p3bbf2e00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M19.9805 22.01V18" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.pb78e000} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M3 14H15" id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M9 22V18.25" id="Vector_6" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.p29ba0200} id="Vector_7" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_8" opacity="0" />
                    </g>
                  </svg>
                </AppBarAnnonceImmobiliereIconButton>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="H6 . Bold . Desktop" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton1>
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
                </AppBarAnnonceImmobiliereIconButton1>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="H6 . Bold . Desktop" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton4>
                  <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="build_circle" style={{ maskImage: `url('${imgIconButton}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p1520ab0} fill="var(--fill-0, #444955)" id="build_circle" />
                    </svg>
                  </div>
                </AppBarAnnonceImmobiliereIconButton4>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="H6 . Bold . Desktop" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton2>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.p3d149500} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <path d={svgPaths.p21efb480} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                      <g id="Vector_3" opacity="0" />
                    </g>
                  </svg>
                </AppBarAnnonceImmobiliereIconButton2>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="H6 . Bold . Desktop" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0">
                <AppBarAnnonceImmobiliereIconButton3>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="tag-2">
                      <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                      <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarAnnonceImmobiliereIconButton3>
                <AppBarAnnonceImmobiliereH6DesktopLightText text="H6 . Bold . Desktop" />
              </div>
              <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarAnnonceImmobiliereHelper>
                  <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#dadbdd] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">LABEL</p>
                </AppBarAnnonceImmobiliereHelper>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarAnnonceImmobiliere1() {
  return <AppBarAnnonceImmobiliere className="bg-white relative size-full" />;
}