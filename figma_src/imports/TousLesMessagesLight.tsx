import clsx from "clsx";
import imgPropriete1DefaultLight from "figma:asset/ae63bbca1a8511d4e4bf069f0d6e0eabea84b9c1.png";
import imgPropriete1DefaultDark from "figma:asset/745eb8075f4b0dbca29e929762ec0e878857f203.png";
import svgPaths from "./svg-wtdfylpae7";
import { imgConversionPath, imgAdd } from "./svg-z7ba0";
import imgEllipse4 from "figma:asset/38f078296e38a0b1610ab714d659cb7e61dcac65.png";
type OrganismeMessageEnvoye1Props = {
  additionalClassNames?: string;
};

function OrganismeMessageEnvoye1({ children, additionalClassNames = "" }: React.PropsWithChildren<OrganismeMessageEnvoye1Props>) {
  return (
    <div className={clsx("absolute left-[calc(25%+30px)] w-[500px]", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">{children}</div>
    </div>
  );
}
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper7Props>) {
  return (
    <div style={{ maskImage: `url('${imgConversionPath}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-end size-full">
      <div className="content-stretch flex flex-col gap-[10px] items-end p-[10px] relative w-full">{children}</div>
    </div>
  );
}

function AtomeTitreIconSuggestion({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function AgentNavigationRailDesktopHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-[10px]">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BodyMdLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[10px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative">
      <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="Body . sm . light">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[6px] py-[4px] relative">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{children}</p>
    </Wrapper2>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-[#ecedee] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Wrapper3>
        <BodyMdLight>
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[22px] min-h-px min-w-px relative text-[#444955] text-[16px] text-right tracking-[0.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            {text}
          </p>
        </BodyMdLight>
      </Wrapper3>
    </div>
  );
}
type AtomeStickerTextProps = {
  text: string;
};

function AtomeStickerText({ text }: AtomeStickerTextProps) {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Wrapper4>
        <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">{text}</p>
      </Wrapper4>
    </div>
  );
}
type AtomeIconTextScoringClientBodyMdDarkTextProps = {
  text: string;
};

function AtomeIconTextScoringClientBodyMdDarkText({ text }: AtomeIconTextScoringClientBodyMdDarkTextProps) {
  return (
    <Wrapper2>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type AtomeIconTextScoringClientBodyMdLightTextProps = {
  text: string;
};

function AtomeIconTextScoringClientBodyMdLightText({ text }: AtomeIconTextScoringClientBodyMdLightTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

function VuesaxLinearArrowCircleLeft() {
  return (
    <Wrapper5>
      <g id="arrow-circle-left">
        <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d={svgPaths.p101eb340} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0" />
      </g>
    </Wrapper5>
  );
}

function IcnAttachFile() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-[8.33%] left-[22.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.5px_-2px] mask-size-[24px_24px] right-1/4 top-[8.33%]" data-name="attach_file" style={{ maskImage: `url('${imgConversionPath}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 20">
          <path d={svgPaths.p2507e0f0} fill="var(--fill-0, #444955)" id="attach_file" />
        </svg>
      </div>
    </div>
  );
}
type BodySmDarkTextProps = {
  text: string;
};

function BodySmDarkText({ text }: BodySmDarkTextProps) {
  return (
    <Wrapper2>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d0d1d4] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type BodySmLightTextProps = {
  text: string;
};

function BodySmLightText({ text }: BodySmLightTextProps) {
  return (
    <Wrapper2>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper2>
  );
}
type DashboardSuggestionsAtomeAiSuggestionTextProps = {
  text: string;
};

function DashboardSuggestionsAtomeAiSuggestionText({ text }: DashboardSuggestionsAtomeAiSuggestionTextProps) {
  return (
    <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]">
      <div className="absolute inset-[0_1.47%] rounded-[16px]" data-name="Sticker">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Wrapper1>
          <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
        </Wrapper1>
      </div>
    </div>
  );
}
type ButtonNavBienProps = {
  className?: string;
  propriete1?: "default light" | "hover light" | "Selected light" | "Selected dark" | "hover dark" | "default dark";
};

function ButtonNavBien({ className, propriete1 = "default light" }: ButtonNavBienProps) {
  const isSelectedDark = propriete1 === "Selected dark";
  return (
    <div className={className || `h-[50px] relative rounded-[16px] w-[68px] ${isSelectedDark ? "bg-[#22252b]" : propriete1 === "hover dark" ? "bg-[#333740]" : propriete1 === "Selected light" ? "bg-[#ecedee]" : propriete1 === "hover light" ? "bg-[#dadbdd]" : ""}`}>
      <Wrapper6>
        <div className="absolute contents left-0 top-0">
          <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="icn_cottage">
          <div className="absolute inset-[4.17%_4.17%_12.5%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[24px_24px]" data-name="cottage" style={{ maskImage: `url('${imgConversionPath}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
              <path d={svgPaths.p17adac00} fill={isSelectedDark ? "var(--fill-0, white)" : ["hover light", "Selected light", "default dark", "hover dark"].includes(propriete1) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="cottage" />
            </svg>
          </div>
        </div>
      </Wrapper6>
    </div>
  );
}
type AgentNavigationRailDesktopProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AgentNavigationRailDesktop({ className, propriete1 = "light" }: AgentNavigationRailDesktopProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[1024px] relative w-[90px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[348px] items-center py-[10px] relative size-full">
          <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
            <div className="h-[75px] relative shrink-0 w-full" data-name="avatar profile">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center px-[11px] py-[22px] relative size-full">
                  <div className="h-[30.2px] relative shrink-0 w-[59.351px]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.3514 30.2">
                      <g id="Group">
                        <path d={svgPaths.p13ffd780} fill={isDark ? "var(--fill-0, white)" : "var(--fill-0, #444955)"} id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[68px]">
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full" data-name="button . nav . dashboard">
                  <Wrapper6>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_speed">
                      <div className="absolute inset-[16.67%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-4px] mask-size-[24px_24px]" data-name="speed" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0017 16">
                          <path d={svgPaths.p53e9480} fill="var(--fill-0, #A1A4AA)" id="speed" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper6>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper6>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_database_upload">
                      <div className="absolute inset-[12.5%_4.17%_4.17%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database_upload" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p14d59900} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="database_upload" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper6>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper6>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_person">
                      <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="person_2" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p2c4b9f00} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="person_2" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper6>
                </div>
                <ButtonNavBien className="h-[50px] relative rounded-[16px] shrink-0 w-full" propriete1={isDark ? "default dark" : undefined} />
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper6>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_content_paste">
                      <Wrapper7 additionalClassNames="inset-[4.17%_12.5%_12.5%_12.5%] mask-position-[-3px_-1px]">
                        <path d={svgPaths.p32cd3180} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="content_paste" />
                      </Wrapper7>
                    </div>
                  </Wrapper6>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper6>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_data_table">
                      <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="data_table" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={svgPaths.p3cf36d00} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="data_table" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper6>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper6>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_calendar_today">
                      <Wrapper7 additionalClassNames="inset-[8.33%_12.5%] mask-position-[-3px_-2px]">
                        <path d={svgPaths.p1fd79700} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="calendar_today" />
                      </Wrapper7>
                    </div>
                  </Wrapper6>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper6>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_conversion_path">
                      <div className="absolute inset-[12.5%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-3px] mask-size-[24px_24px]" data-name="conversion_path" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                          <path d={svgPaths.p5aa8780} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="conversion_path" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper6>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[28px] shrink-0 size-[54px]">
            {["default light", "default dark"].includes(isDark ? "default dark" : undefined) && <img alt="" className="absolute block max-w-none size-full" height="54" src={(isDark ? "default dark" : undefined) === "default dark" ? imgPropriete1DefaultDark : imgPropriete1DefaultLight} width="54" />}
            {["selected light", "selected dark"].includes(isDark ? "default dark" : undefined) && (
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
                <circle cx="27" cy="27" fill="var(--fill-0, #635CC7)" id="Ellipse 3" r="25" stroke="var(--stroke-0, #4A4595)" strokeWidth="4" />
              </svg>
            )}
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
  const is0Dark = propriete1 === "0 dark";
  const is1Light = propriete1 === "1 light";
  const is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark = ["2 light", "3 light", "4 light", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1);
  return (
    <div className={className || "h-[24px] relative rounded-[16px] w-[34px]"}>
      <div className={`absolute inset-[0_1.47%] rounded-[16px] ${["1 light", "2 light", "3 light", "4 light", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "bg-[#7b72f9]" : ""}`} data-name="Sticker">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${["1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "border-[#968ffa]" : is0Dark ? "border-[#444955]" : ["1 light", "2 light", "3 light", "4 light"].includes(propriete1) ? "border-[#635cc7]" : "border-[#a1a4aa]"}`} />
        <Wrapper1>
          <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is0Dark ? "text-[#444955]" : is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : is1Light ? "text-white" : "text-[#a1a4aa]"}`}>{is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : is1Light ? "1" : is0Dark ? "0" : "0"}</p>
        </Wrapper1>
      </div>
    </div>
  );
}
type DashboardSuggestionsProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function DashboardSuggestions({ className, propriete1 = "default light" }: DashboardSuggestionsProps) {
  const isDefaultDark = propriete1 === "default dark";
  const isDefaultLight = propriete1 === "default light";
  return (
    <div className={className || `relative rounded-[16px] w-[1191px] ${isDefaultDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[28px] relative w-full">
          <div className="content-stretch flex gap-[46px] items-center relative shrink-0">
            <AtomeTitreIconSuggestion>
              <Wrapper>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Conseil"}</Wrapper>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />}
              {isDefaultDark && <DashboardSuggestionsAtomeAiSuggestionText text="0" />}
            </AtomeTitreIconSuggestion>
            <AtomeTitreIconSuggestion>
              <Wrapper>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Service"}</Wrapper>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />}
              {isDefaultDark && <DashboardSuggestionsAtomeAiSuggestionText text="0" />}
            </AtomeTitreIconSuggestion>
            <AtomeTitreIconSuggestion>
              <Wrapper>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Administratif"}</Wrapper>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />}
              {isDefaultDark && <DashboardSuggestionsAtomeAiSuggestionText text="0" />}
            </AtomeTitreIconSuggestion>
            <AtomeTitreIconSuggestion>
              <Wrapper>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Transaction"}</Wrapper>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />}
              {isDefaultDark && <DashboardSuggestionsAtomeAiSuggestionText text="0" />}
            </AtomeTitreIconSuggestion>
          </div>
          <div className={`relative rounded-[16px] shrink-0 ${isDefaultDark ? "bg-[#635cc7]" : "bg-[#7b72f9]"}`} data-name="button">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDefaultDark ? "border-[#635cc7]" : "border-[#7b72f9]"}`} />
            <Wrapper8>
              <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDark ? "text-[#111215]" : "text-white"}`}>Voir les suggestions</p>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                <Wrapper5>
                  <g id="arrow-right">
                    <path d={svgPaths.p1c2f080} id="Vector" stroke={isDefaultDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, white)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <g id="Vector_2" opacity="0" />
                  </g>
                </Wrapper5>
              </div>
            </Wrapper8>
          </div>
        </div>
      </div>
    </div>
  );
}
type AtomeMessageStatusProps = {
  className?: string;
  propriete1?: "none light" | "Fail light" | "success light" | "none dark" | "Fail dark" | "success dark";
};

function AtomeMessageStatus({ className, propriete1 = "none light" }: AtomeMessageStatusProps) {
  const isSuccessDark = propriete1 === "success dark";
  const isSuccessLight = propriete1 === "success light";
  return (
    <div className={className || "relative rounded-[8px] size-[18px]"}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="9" fill={isSuccessDark ? "var(--fill-0, #0DA500)" : propriete1 === "Fail dark" ? "var(--fill-0, #444955)" : propriete1 === "none dark" ? "var(--fill-0, #111215)" : isSuccessLight ? "var(--fill-0, #4ABC40)" : propriete1 === "Fail light" ? "var(--fill-0, #D0D1D4)" : "var(--fill-0, white)"} id="Ellipse 48" r="8.5" stroke={isSuccessDark ? "var(--stroke-0, #86D280)" : ["none dark", "Fail dark"].includes(propriete1) ? "var(--stroke-0, #737780)" : isSuccessLight ? "var(--stroke-0, #109204)" : "var(--stroke-0, #A1A4AA)"} />
      </svg>
    </div>
  );
}
type OrganismeMessageRecuProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function OrganismeMessageRecu({ className, propriete1 = "light" }: OrganismeMessageRecuProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || "relative w-[420px]"}>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#d0d1d4]" : "border-[#444955]"}`} />
            <Wrapper4>
              <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>{isDark ? "LABEL" : "REÇU"}</p>
            </Wrapper4>
          </div>
          <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1={isDark ? "none dark" : undefined} />
          <div className="content-stretch flex items-center relative shrink-0">
            {isLight && (
              <>
                <BodySmLightText text="le 12 fév 2026" />
                <BodySmLightText text="à 12:47" />
              </>
            )}
            {isDark && (
              <>
                <BodySmDarkText text="Body . sm . Regular . 14/16px" />
                <BodySmDarkText text="Body . sm . Regular . 14/16px" />
              </>
            )}
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-circle-right">
            <Wrapper5>
              <g id="arrow-circle-right">
                <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d={svgPaths.p1129f1c0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Vector_3" opacity="0" />
              </g>
            </Wrapper5>
          </div>
        </div>
        <div className={`relative rounded-[16px] shrink-0 w-full ${isDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`}>
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#22252b]" : "border-[#ecedee]"}`} />
          <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
            <div className="relative shrink-0 w-full" data-name="Body . md . light">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">
                  <p className={`relative text-[#444955] text-[16px] tracking-[0.16px] ${isDark ? 'font-["roboto:Regular",sans-serif] leading-[20px] not-italic shrink-0 whitespace-nowrap' : 'flex-[1_0_0] font-["Roboto:Regular",sans-serif] font-normal leading-[22px] min-h-px min-w-px'}`} style={isLight ? { fontVariationSettings: "'wdth' 100" } : undefined}>
                    {isDark ? "Body . md . Regular . 16/20px" : "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."}
                  </p>
                </div>
              </div>
            </div>
            <div className={`relative rounded-[16px] shrink-0 ${isDark ? "bg-[#111215]" : "bg-white"}`} data-name="button">
              <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border border-[#111215]" : "border-0 border-[#444955]"}`} />
              <Wrapper8>
                <IcnAttachFile />
                <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Button title</p>
              </Wrapper8>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type OrganismeMessageEnvoyeProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function OrganismeMessageEnvoye({ className, propriete1 = "light" }: OrganismeMessageEnvoyeProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || "relative w-[420px]"}>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-circle-left">
            <VuesaxLinearArrowCircleLeft />
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            {isLight && (
              <>
                <BodySmLightText text="le 12 fév 2026" />
                <BodySmLightText text="à 12:47" />
              </>
            )}
            {isDark && (
              <>
                <BodySmDarkText text="Body . sm . Regular . 14/16px" />
                <BodySmDarkText text="Body . sm . Regular . 14/16px" />
              </>
            )}
          </div>
          <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1={isDark ? "none dark" : undefined} />
          <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#d0d1d4]" : "border-[#444955]"}`} />
            <Wrapper4>
              <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>{isDark ? "LABEL" : "ENVOYÉ"}</p>
            </Wrapper4>
          </div>
        </div>
        <div className={`relative rounded-[16px] shrink-0 w-full ${isDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`}>
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#22252b]" : "border-[#ecedee]"}`} />
          <Wrapper3>
            <BodyMdLight>
              <p className={`relative text-[#444955] text-[16px] tracking-[0.16px] ${isDark ? 'font-["roboto:Regular",sans-serif] leading-[20px] not-italic shrink-0 whitespace-nowrap' : 'flex-[1_0_0] font-["Roboto:Regular",sans-serif] font-normal leading-[22px] min-h-px min-w-px text-right'}`} style={isLight ? { fontVariationSettings: "'wdth' 100" } : undefined}>
                {isDark ? "Body . md . Regular . 16/20px" : "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."}
              </p>
            </BodyMdLight>
            <div className={`relative rounded-[16px] shrink-0 ${isDark ? "bg-[#111215]" : "bg-white"}`} data-name="button">
              <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border border-[#111215]" : "border-0 border-[#444955]"}`} />
              <Wrapper8>
                <IcnAttachFile />
                <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Button title</p>
              </Wrapper8>
            </div>
          </Wrapper3>
        </div>
      </div>
    </div>
  );
}

export default function TousLesMessagesLight() {
  return (
    <div className="bg-white relative size-full" data-name="Tous les messages . light">
      <div className="absolute contents left-[91.67%] top-[904px]">
        <div className="absolute left-[91.67%] size-[70px] top-[904px]">
          <img alt="" className="absolute block max-w-none size-full" height="70" src={imgEllipse4} width="70" />
        </div>
        <div className="absolute contents left-[calc(91.67%+41px)] top-[904px]">
          <div className="absolute bg-[#7b72f9] h-[25px] left-[calc(91.67%+41px)] rounded-[20px] top-[904px] w-[29px]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(91.67%+55.5px)] not-italic text-[12px] text-center text-white top-[917px] w-[15px]">
            <p className="leading-[normal]">18</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[100px] left-[115px] top-0 w-[1191px]" data-name="app bar fiche client . messagerie">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center py-[27px] relative size-full">
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar messagerie light">
              <div className="relative rounded-[16px] shrink-0" data-name="icon button">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[12px] relative">
                    <div className="relative shrink-0 size-[20px]" data-name="icn_arrow_left_alt">
                      <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                          <path d={svgPaths.p3f7b8a00} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="H4 . Desktop . light">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[10px] relative">
                    <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                      <p className="leading-[34px]">Messagerie</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="atome . icon + text . medium">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative">
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/profile-circle">
                      <Wrapper5>
                        <g id="profile-circle">
                          <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Vector_4" opacity="0" />
                        </g>
                      </Wrapper5>
                    </div>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">CAPELLO, Jean-François</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center relative">
                    {["very low . light", "very low . dark"].includes("medium . light") && (
                      <div className="h-[20.4px] relative shrink-0 w-[32px]" data-name="very low">
                        <div className="absolute h-[20.141px] left-0 right-0 top-0" data-name="Union">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.141">
                            <path d={svgPaths.p319a7380} fill="var(--fill-0, #EC0119)" id="Union" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {["low . light", "low . dark"].includes("medium . light") && (
                      <div className="h-[20.706px] relative shrink-0 w-[32px]" data-name="low">
                        <div className="absolute h-[20.014px] left-0 right-0 top-0" data-name="Union">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.0137">
                            <path d={svgPaths.p2d8a4b80} fill="var(--fill-0, #FF882F)" id="Union" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {["very low . light", "low . light"].includes("medium . light") && <AtomeIconTextScoringClientBodyMdLightText text="Body . md . SemiBold . 16/20px" />}
                    {["medium . light", "medium . dark"].includes("medium . light") && (
                      <div className="h-[19.979px] relative shrink-0 w-[32px]" data-name="medium">
                        <div className="absolute h-[19.963px] left-0 right-0 top-0" data-name="Union">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19.963">
                            <path d={svgPaths.p3e2bce80} fill="var(--fill-0, #FDEB03)" id="Union" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {["very low . dark", "low . dark", "medium . dark"].includes("medium . light") && <AtomeIconTextScoringClientBodyMdDarkText text="Body . md . SemiBold . 16/20px" />}
                    {["high . light", "high . dark"].includes("medium . light") && (
                      <div className="h-[20.569px] relative shrink-0 w-[32px]" data-name="high">
                        <div className="absolute h-[19.979px] left-0 right-0 top-0" data-name="Union">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19.9793">
                            <path d={svgPaths.p21e37f00} fill="var(--fill-0, #4AC57B)" id="Union" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {["medium . light", "high . light"].includes("medium . light") && <Wrapper>{"medium . light" === "high . light" ? "Body . md . SemiBold . 16/20px" : "medium . light" === "medium . light" ? "50" : ""}</Wrapper>}
                    {["very high . light", "very high . dark"].includes("medium . light") && (
                      <div className="h-[20.408px] relative shrink-0 w-[32px]" data-name="very high">
                        <div className="absolute h-[20.111px] left-0 right-0 top-0" data-name="Union">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.1106">
                            <path d={svgPaths.p22896d00} fill="var(--fill-0, #00A774)" id="Union" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {["high . dark", "very high . dark"].includes("medium . light") && <AtomeIconTextScoringClientBodyMdDarkText text="Body . md . SemiBold . 16/20px" />}
                    {"medium . light" === "very high . light" && <AtomeIconTextScoringClientBodyMdLightText text="Body . md . SemiBold . 16/20px" />}
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="atome . event . quinte">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center py-px relative">
                    <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" />
                    <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" />
                    <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" />
                    <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" />
                    <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" />
                  </div>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative">
                    <div className="relative shrink-0 size-[20px]" data-name="icn_calendar_check">
                      <div className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_check" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.175 20.5">
                          <path d={svgPaths.p2721eb80} fill="var(--fill-0, #444955)" id="calendar_check" />
                        </svg>
                      </div>
                    </div>
                    <div className={`flex flex-col font-["roboto:Regular",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${"default light" === "default dark" ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                      <p className="leading-[20px]">280 j</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white left-[115px] rounded-[16px] top-[230px]" data-name="button">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Wrapper8>
          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Écrire un message</p>
          <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
            <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                <path d={svgPaths.pe7cde70} fill="var(--fill-0, #444955)" id="add" />
              </svg>
            </div>
          </div>
        </Wrapper8>
      </div>
      <OrganismeMessageEnvoye1 additionalClassNames="top-[524px]">
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-circle-left">
            <VuesaxLinearArrowCircleLeft />
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <BodySmLightText text="le 12 fév 2026" />
            <BodySmLightText text="à 12:47" />
          </div>
          <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1="success light" />
          <AtomeStickerText text="ENVOYÉ" />
        </div>
        <Text text="Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..." />
      </OrganismeMessageEnvoye1>
      <OrganismeMessageRecu className="absolute left-[115px] top-[296px] w-[500px]" />
      <OrganismeMessageEnvoye1 additionalClassNames="top-[926px]">
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-circle-left">
            <VuesaxLinearArrowCircleLeft />
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <BodySmLightText text="le 12 fév 2026" />
            <BodySmLightText text="à 12:47" />
          </div>
          <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1="success light" />
          <AtomeStickerText text="ENVOYÉ" />
        </div>
        <Text text="Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..." />
      </OrganismeMessageEnvoye1>
      <OrganismeMessageEnvoye className="absolute left-[calc(25%+30px)] top-[1100px] w-[500px]" />
      <OrganismeMessageEnvoye1 additionalClassNames="top-[1556px]">
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-circle-left">
            <VuesaxLinearArrowCircleLeft />
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <BodySmLightText text="le 12 fév 2026" />
            <BodySmLightText text="à 12:47" />
          </div>
          <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1="success light" />
          <AtomeStickerText text="ENVOYÉ" />
        </div>
        <Text text="Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..." />
      </OrganismeMessageEnvoye1>
      <OrganismeMessageRecu className="absolute left-[115px] top-[698px] w-[500px]" />
      <OrganismeMessageRecu className="absolute left-[115px] top-[1328px] w-[500px]" />
      <DashboardSuggestions className="absolute bg-[#ecedee] left-[115px] rounded-[16px] top-[100px] w-[1191px]" />
      <div className="absolute bottom-0 h-[calc(100%-calc(50%-440.5px)+0px)] left-0 pointer-events-none top-[calc(50%-440.5px)]">
        <AgentNavigationRailDesktop className="-translate-y-1/2 bg-white h-[1024px] pointer-events-auto sticky top-0 w-[90px]" />
      </div>
    </div>
  );
}