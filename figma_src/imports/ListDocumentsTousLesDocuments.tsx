import clsx from "clsx";
import imgPropriete1DefaultLight from "figma:asset/ae63bbca1a8511d4e4bf069f0d6e0eabea84b9c1.png";
import imgPropriete1DefaultDark from "figma:asset/745eb8075f4b0dbca29e929762ec0e878857f203.png";
import svgPaths from "./svg-yrfr7l8m68";
import { imgConversionPath, imgAdd, imgSearch, imgArrowDropDown } from "./svg-trokq";
import imgEllipse4 from "figma:asset/38f078296e38a0b1610ab714d659cb7e61dcac65.png";
type Wrapper9Props = {
  additionalClassNames?: string;
};

function Wrapper9({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper9Props>) {
  return (
    <div style={{ maskImage: `url('${imgConversionPath}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center px-[20px] relative size-full">{children}</div>
    </div>
  );
}

function ListDocument1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[70px] relative shrink-0 w-[1191px]">
      <Wrapper5>{children}</Wrapper5>
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
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[34px] relative shrink-0 w-[92px]">
      <div className="absolute flex flex-col font-['roboto:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[20px]">{children}</p>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] relative">{children}</div>
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
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type BodySmLightTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BodySmLightText({ text, additionalClassNames = "" }: BodySmLightTextProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#474747] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute content-stretch flex items-center top-[447px]", additionalClassNames)}>
      <BodySmLightText text={text} additionalClassNames="relative shrink-0" />
      <BtnIcnTiny className="relative rounded-[20px] shrink-0 size-[46px]" propriete1="nude" />
    </div>
  );
}

function BtnIcnTinyGroup() {
  return (
    <Wrapper1>
      <IconButton />
      <IconButton1 />
      <IconButton2 />
    </Wrapper1>
  );
}
type AtomeIconTextMediumTextProps = {
  text: string;
};

function AtomeIconTextMediumText({ text }: AtomeIconTextMediumTextProps) {
  return (
    <Wrapper2>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/profile-circle">
        <VuesaxLinearProfileCircle />
      </div>
      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </Wrapper2>
  );
}
type AtomeIdAffaireTextProps = {
  text: string;
};

function AtomeIdAffaireText({ text }: AtomeIdAffaireTextProps) {
  return <Wrapper3>{text}</Wrapper3>;
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[10px] py-[8px] relative", additionalClassNames)}>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BodyMdLightTextProps = {
  text: string;
};

function BodyMdLightText({ text }: BodyMdLightTextProps) {
  return (
    <div className="relative shrink-0 w-[251px]">
      <div className="flex flex-row items-center size-full">
        <Text text={text} additionalClassNames="w-full" />
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
};

function Helper({ text, text1, text2, text3 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
      <BodyMdLightText text={text} />
      <AtomeIdAffaireText text={text1} />
      <AtomeIconTextMediumText text={text2} />
      <div className="relative shrink-0" data-name="Body . md . light">
        <div className="flex flex-row items-center size-full">
          <Text text={text3} />
        </div>
      </div>
      <BtnIcnTinyGroup />
      <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />
    </div>
  );
}
type ListDocumentTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ListDocumentText({ text, additionalClassNames = "" }: ListDocumentTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[10px] py-[8px] relative", additionalClassNames)}>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function BtnIcnTiny1() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[46px]">
      <Wrapper6>
        <div className="relative shrink-0 size-[24px]" data-name="icn_plus">
          <Add />
        </div>
      </Wrapper6>
    </div>
  );
}

function IconButton2() {
  return (
    <Wrapper4>
      <div className="relative shrink-0 size-[20px]" data-name="icn_flag">
        <div className="absolute inset-[16.67%_16.67%_12.5%_20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-4px] mask-size-[24px_24px]" data-name="flag" style={{ maskImage: `url('${imgConversionPath}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
            <path d={svgPaths.p1157a80} fill="var(--fill-0, #444955)" id="flag" />
          </svg>
        </div>
      </div>
    </Wrapper4>
  );
}

function IconButton1() {
  return (
    <Wrapper4>
      <div className="relative shrink-0 size-[20px]" data-name="icn_send">
        <div className="absolute inset-[16.67%_8.33%_16.67%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-4px] mask-size-[24px_24px]" data-name="send" style={{ maskImage: `url('${imgConversionPath}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
            <path d={svgPaths.p1ef1000} fill="var(--fill-0, #444955)" id="send" />
          </svg>
        </div>
      </div>
    </Wrapper4>
  );
}

function IconButton() {
  return (
    <Wrapper4>
      <div className="relative shrink-0 size-[20px]" data-name="Icn_download">
        <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="download" style={{ maskImage: `url('${imgAdd}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p13494900} fill="var(--fill-0, #444955)" id="download" />
          </svg>
        </div>
      </div>
    </Wrapper4>
  );
}

function VuesaxLinearProfileCircle() {
  return (
    <Wrapper7>
      <g id="profile-circle">
        <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_4" opacity="0" />
      </g>
    </Wrapper7>
  );
}

function ListDocumentVuesaxLinearProfileCircle() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <VuesaxLinearProfileCircle />
    </div>
  );
}

function Add() {
  return (
    <div style={{ maskImage: `url('${imgAdd}')` }} className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
      </svg>
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
      <Wrapper8>
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
      </Wrapper8>
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
                  <Wrapper8>
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
                  </Wrapper8>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper8>
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
                  </Wrapper8>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper8>
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
                  </Wrapper8>
                </div>
                <ButtonNavBien className="h-[50px] relative rounded-[16px] shrink-0 w-full" propriete1={isDark ? "default dark" : undefined} />
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper8>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_content_paste">
                      <Wrapper9 additionalClassNames="inset-[4.17%_12.5%_12.5%_12.5%] mask-position-[-3px_-1px]">
                        <path d={svgPaths.p32cd3180} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="content_paste" />
                      </Wrapper9>
                    </div>
                  </Wrapper8>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper8>
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
                  </Wrapper8>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper8>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_calendar_today">
                      <Wrapper9 additionalClassNames="inset-[8.33%_12.5%] mask-position-[-3px_-2px]">
                        <path d={svgPaths.p1fd79700} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="calendar_today" />
                      </Wrapper9>
                    </div>
                  </Wrapper8>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper8>
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
                  </Wrapper8>
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

function IcnPlus({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icn_plus">
      <Add />
    </div>
  );
}
type BtnIcnTinyProps = {
  className?: string;
  propriete1?: "contour" | "nude" | "hover";
};

function BtnIcnTiny({ className, propriete1 = "contour" }: BtnIcnTinyProps) {
  const isContour = propriete1 === "contour";
  const isNudeOrHover = ["nude", "hover"].includes(propriete1);
  return (
    <div className={className || `relative rounded-[20px] size-[46px] ${propriete1 === "hover" ? "bg-[#f5f5f5]" : ""}`}>
      <div aria-hidden={isContour ? "true" : undefined} className={isNudeOrHover ? "flex flex-row items-center justify-center size-full" : "absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]"}>
        {isNudeOrHover && (
          <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
            <IcnPlus className="relative shrink-0 size-[24px]" />
          </div>
        )}
      </div>
      {isContour && (
        <Wrapper6>
          <IcnPlus className="relative shrink-0 size-[24px]" />
        </Wrapper6>
      )}
    </div>
  );
}
type AtomeAiSuggestionProps = {
  className?: string;
  propriete1?: "0 light" | "1 light" | "2 light" | "3 light" | "4 light" | "0 dark" | "4 dark" | "3 dark" | "2 dark" | "1 dark";
};

function AtomeAiSuggestion({ className, propriete1 = "0 light" }: AtomeAiSuggestionProps) {
  const is0Dark = propriete1 === "0 dark";
  const is4LightOr1DarkOr2DarkOr3DarkOr4Dark = ["4 light", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1);
  return (
    <div className={className || "h-[24px] relative rounded-[16px] w-[34px]"}>
      <div className={`absolute inset-[0_1.47%] rounded-[16px] ${["1 light", "2 light", "3 light", "4 light", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "bg-[#7b72f9]" : ""}`} data-name="Sticker">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${["1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "border-[#968ffa]" : is0Dark ? "border-[#444955]" : ["1 light", "2 light", "3 light", "4 light"].includes(propriete1) ? "border-[#635cc7]" : "border-[#a1a4aa]"}`} />
        <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative">
          <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[6px] py-[4px] relative">
                <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is0Dark ? "text-[#444955]" : is4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : ["1 light", "2 light", "3 light"].includes(propriete1) ? "text-white" : "text-[#a1a4aa]"}`}>{is4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : propriete1 === "3 light" ? "3" : propriete1 === "2 light" ? "2" : propriete1 === "1 light" ? "1" : is0Dark ? "0" : "0"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type HorizontalDivider1191PxProps = {
  className?: string;
  propriete1?: "défaut . light" | "default . dark";
};

function HorizontalDivider1191Px({ className, propriete1 = "défaut . light" }: HorizontalDivider1191PxProps) {
  return (
    <div className={className || "h-0 relative w-[1191px]"}>
      <div className="absolute bottom-full left-0 right-0 top-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1191 1">
            <line id="Line 16" stroke={propriete1 === "default . dark" ? "var(--stroke-0, #22252B)" : "var(--stroke-0, #ECEDEE)"} x2="1191" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type ListDocumentProps = {
  className?: string;
  propriete1?: "default light" | "hover light" | "hover dark" | "default dark";
};

function ListDocument({ className, propriete1 = "default light" }: ListDocumentProps) {
  const isDefaultDarkOrHoverDark = ["default dark", "hover dark"].includes(propriete1);
  const isDefaultLight = propriete1 === "default light";
  const isDefaultLightOrHoverLight = ["default light", "hover light"].includes(propriete1);
  const isHoverLight = propriete1 === "hover light";
  return (
    <div className={className || `h-[70px] relative w-[1191px] ${propriete1 === "hover dark" ? "bg-[#22252b]" : propriete1 === "default dark" ? "bg-[#111215]" : isHoverLight ? "bg-[#ecedee]" : "bg-white"}`}>
      <Wrapper5>
        <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
          {isDefaultLightOrHoverLight && (
            <>
              <div className="relative shrink-0 w-[251px]" data-name="Body . md . light">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{isHoverLight ? "Body . md . SemiBold . 16/20px" : "Nom du fichier"}</p>
                  </div>
                </div>
              </div>
              <Wrapper3>{isHoverLight ? "55679201" : "53890217"}</Wrapper3>
              <Wrapper2>
                <ListDocumentVuesaxLinearProfileCircle />
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">{isHoverLight ? "Texte" : "RASTAPOPULOS, Roberto"}</p>
                </div>
              </Wrapper2>
              <Wrapper additionalClassNames="relative shrink-0">
                <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{isHoverLight ? "Body . md . SemiBold . 16/20px" : "3 jan 2027"}</p>
              </Wrapper>
              <Wrapper1>
                {isDefaultLight && (
                  <>
                    <IconButton />
                    <IconButton1 />
                    <IconButton2 />
                  </>
                )}
                {isHoverLight && (
                  <>
                    <BtnIcnTiny1 />
                    <BtnIcnTiny1 />
                    <BtnIcnTiny1 />
                    <BtnIcnTiny1 />
                  </>
                )}
              </Wrapper1>
              <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />
            </>
          )}
          {isDefaultDarkOrHoverDark && (
            <>
              <div className="relative shrink-0 w-[251px]" data-name="Body . md . dark">
                <div className="flex flex-row items-center size-full">
                  <ListDocumentText text="Body . md . SemiBold . 16/20px" additionalClassNames="w-full" />
                </div>
              </div>
              <div className="h-[34px] relative shrink-0 w-[92px]" data-name="atome . id affaire">
                <div className="absolute flex flex-col font-['roboto:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">55679201</p>
                </div>
              </div>
              <Wrapper2>
                <ListDocumentVuesaxLinearProfileCircle />
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </Wrapper2>
              <div className="relative shrink-0" data-name="Body . md . dark">
                <div className="flex flex-row items-center size-full">
                  <ListDocumentText text="Body . md . SemiBold . 16/20px" />
                </div>
              </div>
              <Wrapper1>
                <BtnIcnTiny1 />
                <BtnIcnTiny1 />
                <BtnIcnTiny1 />
                <BtnIcnTiny1 />
              </Wrapper1>
              <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="0 dark" />
            </>
          )}
        </div>
      </Wrapper5>
    </div>
  );
}

export default function ListDocumentsTousLesDocuments() {
  return (
    <div className="bg-white relative size-full" data-name="list documents . tous les documents">
      <AgentNavigationRailDesktop className="-translate-y-1/2 absolute bg-white h-[1024px] left-0 top-[calc(50%-379px)] w-[90px]" />
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
      <div className="absolute content-stretch flex flex-col items-start left-[115px] top-[507px]">
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="Mandat de vente" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
        <ListDocument className="bg-white h-[70px] relative shrink-0 w-[1191px]" />
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
            <BodyMdLightText text="Acte de propriété" />
            <AtomeIdAffaireText text="53890217" />
            <AtomeIconTextMediumText text="RASTAPOPULOS, Roberto" />
            <div className="relative shrink-0" data-name="Body . md . light">
              <div className="flex flex-row items-center size-full">
                <Text text="3 jan 2027" />
              </div>
            </div>
            <BtnIcnTinyGroup />
            <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="2 light" />
          </div>
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="DPE" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="État Daté" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="Photos de bien" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="Pièce d’identité" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="Acte d’État Civil" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
            <BodyMdLightText text="Acte de mariage" />
            <AtomeIdAffaireText text="53890217" />
            <AtomeIconTextMediumText text="RASTAPOPULOS, Roberto" />
            <div className="relative shrink-0" data-name="Body . md . light">
              <div className="flex flex-row items-center size-full">
                <Text text="3 jan 2027" />
              </div>
            </div>
            <BtnIcnTinyGroup />
            <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />
          </div>
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="Contrat de réservation" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
            <BodyMdLightText text="Contrat de location" />
            <AtomeIdAffaireText text="53890217" />
            <AtomeIconTextMediumText text="RASTAPOPULOS, Roberto" />
            <div className="relative shrink-0" data-name="Body . md . light">
              <div className="flex flex-row items-center size-full">
                <Text text="3 jan 2027" />
              </div>
            </div>
            <BtnIcnTinyGroup />
            <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="3 light" />
          </div>
        </ListDocument1>
        <ListDocument1>
          <HorizontalDivider1191Px className="h-0 relative shrink-0 w-[1191px]" />
          <Helper text="État des lieux" text1="53890217" text2="RASTAPOPULOS, Roberto" text3="3 jan 2027" />
        </ListDocument1>
      </div>
      <BodySmLightText text="Actions" additionalClassNames="absolute left-[calc(75%+57px)] top-[458px]" />
      <Text1 text="Nom du document" additionalClassNames="gap-px left-[calc(8.33%+4px)]" />
      <Text1 text="Affaire" additionalClassNames="left-[calc(25%+65px)]" />
      <Text1 text="Client" additionalClassNames="left-[calc(33.33%+83px)]" />
      <Text1 text="Date de validité" additionalClassNames="left-[calc(58.33%+81px)]" />
      <div className="absolute bg-white h-[100px] left-[115px] top-0 w-[1191px]" data-name="app bar category">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center py-[25px] relative size-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar category light">
              <div className="relative shrink-0" data-name="H4 . Desktop . light">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[10px] relative">
                    <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                      <p className="leading-[34px]">Documents</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[16px] shrink-0" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Categorie</p>
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
                      <Wrapper7>
                        <g id="arrow-down">
                          <path d={svgPaths.p336ed396} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                          <g id="Vector_2" opacity="0" />
                        </g>
                      </Wrapper7>
                    </div>
                  </div>
                </div>
              </div>
              <Wrapper4>
                <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
                  <Add />
                </div>
              </Wrapper4>
              <Wrapper4>
                <div className="relative shrink-0 size-[20px]" data-name="icn_search">
                  <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p2e267b00} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                    </svg>
                  </div>
                </div>
              </Wrapper4>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[54px] left-[calc(83.33%-12px)] rounded-[20px] top-[1377px] w-[117px]" data-name="button . pagination">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[7px] py-[4px] relative size-full">
            <Wrapper4>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-left">
                <Wrapper7>
                  <g id="arrow-left">
                    <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <g id="Vector_2" opacity="0" />
                  </g>
                </Wrapper7>
              </div>
            </Wrapper4>
            <Wrapper4 additionalClassNames="bg-[#dadbdd]">
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                <Wrapper7>
                  <g id="arrow-right">
                    <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #333740)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <g id="Vector_2" opacity="0" />
                  </g>
                </Wrapper7>
              </div>
            </Wrapper4>
          </div>
        </div>
      </div>
      <div className="absolute h-[50px] left-[115px] rounded-[10px] top-[1379px]" data-name="dropdown">
        <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,minmax(0,1fr))] h-full inline-grid px-[10px] py-[6px] relative">
          <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="chips_label_icn_droite">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pr-[6px] relative">
                <div className="relative shrink-0" data-name="Form label">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[10px] py-[6px] relative">
                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6d6d6d] text-[16px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        100
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="icn_arrow_drop_down">
                  <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-10px] mask-size-[24px_24px]" data-name="arrow_drop_down" style={{ maskImage: `url('${imgArrowDropDown}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                      <path d={svgPaths.p29d06c00} fill="var(--fill-0, #6D6D6D)" id="arrow_drop_down" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
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