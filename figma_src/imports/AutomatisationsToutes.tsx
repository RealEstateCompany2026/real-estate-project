import clsx from "clsx";
import imgPropriete1DefaultLight from "figma:asset/ae63bbca1a8511d4e4bf069f0d6e0eabea84b9c1.png";
import imgPropriete1DefaultDark from "figma:asset/745eb8075f4b0dbca29e929762ec0e878857f203.png";
import svgPaths from "./svg-08dgju0thr";
import { imgConversionPath, imgBtnIcnTinyGroup, imgSearch } from "./svg-2rq0i";
import imgEllipse4 from "figma:asset/38f078296e38a0b1610ab714d659cb7e61dcac65.png";
type Wrapper8Props = {
  additionalClassNames?: string;
};

function Wrapper8({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper8Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
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
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div style={{ maskImage: `url('${imgConversionPath}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center size-full">
      <div className="content-stretch flex flex-col items-start justify-center px-[10px] relative size-full">{children}</div>
    </div>
  );
}

function ListAutomation1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[70px] relative shrink-0 w-[1191px]">
      <Wrapper4>{children}</Wrapper4>
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

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[46px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[50px] relative shrink-0 w-[170px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type Frame112BodySmLightTextProps = {
  text: string;
};

function Frame112BodySmLightText({ text }: Frame112BodySmLightTextProps) {
  return (
    <Wrapper>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}

function Helper2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[30px] items-center justify-end min-h-px min-w-px relative">
      <Switch className="bg-[#d0d1d4] h-[30px] relative rounded-[16px] shrink-0 w-[48px]" />
      <BtnIcnTinyGroup />
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

function Helper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[30px] items-center justify-end min-h-px min-w-px relative">
      <Switch className="bg-[#0da500] h-[30px] relative rounded-[16px] shrink-0 w-[48px]" type="On light" />
      <BtnIcnTinyGroup />
    </div>
  );
}

function Helper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" />
      <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" />
    </div>
  );
}
type IcnPlusProps = {
  additionalClassNames?: string;
};

function IcnPlus({ additionalClassNames = "" }: IcnPlusProps) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgBtnIcnTinyGroup}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
        </svg>
      </div>
    </div>
  );
}

function ListAutomationBtnIcnTiny() {
  return (
    <Wrapper2>
      <IcnPlus additionalClassNames="size-[24px]" />
    </Wrapper2>
  );
}

function IconButton2() {
  return (
    <Wrapper3>
      <div className="relative shrink-0 size-[20px]" data-name="icn_more_vert">
        <div className="absolute inset-[16.67%_41.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_-4px] mask-size-[24px_24px]" data-name="more_vert" style={{ maskImage: `url('${imgConversionPath}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
            <path d={svgPaths.p3f25c480} fill="var(--fill-0, #444955)" id="more_vert" />
          </svg>
        </div>
      </div>
    </Wrapper3>
  );
}

function IconButton1() {
  return (
    <Wrapper3>
      <div className="relative shrink-0 size-[20px]" data-name="icn_content_copy">
        <div className="absolute inset-[8.33%_16.67%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="content_copy" style={{ maskImage: `url('${imgConversionPath}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
            <path d={svgPaths.p1c126400} fill="var(--fill-0, #444955)" id="content_copy" />
          </svg>
        </div>
      </div>
    </Wrapper3>
  );
}

function IconButton() {
  return (
    <Wrapper3>
      <div className="relative shrink-0 size-[20px]" data-name="icn_timelapse">
        <Wrapper5 additionalClassNames="inset-[8.33%] mask-position-[-2px_-2px]">
          <path d={svgPaths.p1e78e400} fill="var(--fill-0, #444955)" id="timelapse" />
        </Wrapper5>
      </div>
    </Wrapper3>
  );
}
type BodyMdLightTextProps = {
  text: string;
};

function BodyMdLightText({ text }: BodyMdLightTextProps) {
  return (
    <Wrapper>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}

function HorizontalDivider1191Px() {
  return (
    <div className="h-0 relative shrink-0 w-[1191px]">
      <div className="absolute bottom-full left-0 right-0 top-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1191 1">
            <line id="Line 16" stroke="var(--stroke-0, #ECEDEE)" x2="1191" y1="0.5" y2="0.5" />
          </svg>
        </div>
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
                      <Wrapper5 additionalClassNames="inset-[12.5%_4.17%_4.17%_12.5%] mask-position-[-3px_-3px]">
                        <path d={svgPaths.p14d59900} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="database_upload" />
                      </Wrapper5>
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
type SwitchProps = {
  className?: string;
  type?: "Off light" | "On light" | "Off dark" | "On dark";
};

function Switch({ className, type = "Off light" }: SwitchProps) {
  const isOnLightOrOnDark = ["On light", "On dark"].includes(type);
  return (
    <div className={className || `h-[30px] relative rounded-[16px] w-[48px] ${type === "Off dark" ? "bg-[#444955]" : isOnLightOrOnDark ? "bg-[#0da500]" : "bg-[#d0d1d4]"}`}>
      <div className={`flex flex-row items-center size-full ${isOnLightOrOnDark ? "justify-end" : ""}`}>
        <div className={`content-stretch flex items-center px-[3px] py-[5px] relative size-full ${isOnLightOrOnDark ? "justify-end" : ""}`}>
          <Wrapper8 additionalClassNames="relative shrink-0 size-[24px]">
            <circle cx="12" cy="12" fill={["On dark", "Off dark"].includes(type) ? "var(--fill-0, #111215)" : "var(--fill-0, white)"} id="Ellipse 4" r="12" />
          </Wrapper8>
        </div>
      </div>
    </div>
  );
}
type AtomeStickerProps = {
  className?: string;
  type?: "Default light" | "Disabled light" | "default dark" | "disabled dark" | "information light" | "warning light" | "success light" | "information dark" | "warning dark" | "success dark" | "error light" | "error dark";
};

function AtomeSticker({ className, type = "Default light" }: AtomeStickerProps) {
  const isDefaultDark = type === "default dark";
  const isDisabledLight = type === "Disabled light";
  const isErrorDark = type === "error dark";
  const isErrorLight = type === "error light";
  const isInformationDark = type === "information dark";
  const isInformationLight = type === "information light";
  const isSuccessDark = type === "success dark";
  const isSuccessLight = type === "success light";
  const isWarningDark = type === "warning dark";
  const isWarningLight = type === "warning light";
  return (
    <div className={className || `h-[20px] relative rounded-[16px] ${type === "disabled dark" ? "bg-[#22252b]" : isSuccessDark ? "bg-[#0c6304]" : isWarningDark ? "bg-[#803600]" : isInformationDark ? "bg-[#4a4595]" : isErrorDark ? "bg-[#800000]" : isDisabledLight ? "bg-[#ecedee]" : isSuccessLight ? "bg-[#e6f6e5]" : isWarningLight ? "bg-[#fff0e5]" : isInformationLight ? "bg-[#e5e6ff]" : isErrorLight ? "bg-[#ffe5e5]" : ""}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isSuccessDark ? "border-[#109204]" : isWarningDark ? "border-[#bf5000]" : isInformationDark ? "border-[#635cc7]" : isErrorDark ? "border-[#bf0000]" : isDefaultDark ? "border-[#d0d1d4]" : isDisabledLight ? "border-[#a1a4aa]" : isSuccessLight ? "border-[#c3e9bf]" : isWarningLight ? "border-[#ffdabf]" : isInformationLight ? "border-[#bfc2ff]" : isErrorLight ? "border-[#ffbfbf]" : "border-[#444955]"}`} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
          <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isSuccessDark ? "text-[#cfedcc]" : isWarningDark ? "text-[#ffe1cc]" : isInformationDark ? "text-[#e5e3fe]" : isErrorDark ? "text-[#fcc]" : isDefaultDark ? "text-[#dadbdd]" : isDisabledLight ? "text-[#a1a4aa]" : isSuccessLight ? "text-[#0da500]" : isWarningLight ? "text-[#ff6b00]" : isInformationLight ? "text-[#000aff]" : isErrorLight ? "text-[red]" : "text-[#444955]"}`}>LABEL</p>
        </div>
      </div>
    </div>
  );
}
type ListAutomationProps = {
  className?: string;
  propriete1?: "Inactive light" | "Active light" | "Inactive dark" | "Active dark";
};

function ListAutomation({ className, propriete1 = "Inactive light" }: ListAutomationProps) {
  const isInactiveDark = propriete1 === "Inactive dark";
  const isInactiveDarkOrActiveDark = ["Inactive dark", "Active dark"].includes(propriete1);
  const isInactiveLightOrActiveLight = ["Inactive light", "Active light"].includes(propriete1);
  return (
    <div className={className || `h-[70px] relative w-[1191px] ${isInactiveDarkOrActiveDark ? "bg-[#111215]" : "bg-white"}`}>
      <Wrapper4>
        <HorizontalDivider1191Px />
        <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
            {isInactiveLightOrActiveLight && (
              <>
                <BodyMdLightText text="Nom de l’automatisation" />
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" />
                  <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" />
                  <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" />
                </div>
              </>
            )}
            {isInactiveDarkOrActiveDark && (
              <>
                <Wrapper>
                  <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Body . md . SemiBold . 16/20px</p>
                </Wrapper>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" type="default dark" />
                  <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" type="default dark" />
                  <AtomeSticker className="h-[24px] relative rounded-[16px] shrink-0" type="default dark" />
                </div>
              </>
            )}
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[30px] items-center justify-end min-h-px min-w-px relative">
            <Switch className={`h-[30px] relative rounded-[16px] shrink-0 w-[48px] ${isInactiveDark ? "bg-[#444955]" : ["Active light", "Active dark"].includes(propriete1) ? "bg-[#0da500]" : "bg-[#d0d1d4]"}`} type={propriete1 === "Active dark" ? "On dark" : isInactiveDark ? "Off dark" : propriete1 === "Active light" ? "On light" : undefined} />
            <Wrapper1>
              {isInactiveLightOrActiveLight && (
                <>
                  <IconButton />
                  <IconButton1 />
                  <IconButton2 />
                </>
              )}
              {isInactiveDarkOrActiveDark && (
                <>
                  <Wrapper2>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_mail">
                      <div className="absolute inset-[16.67%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-4px] mask-size-[24px_24px]" data-name="mail" style={{ maskImage: `url('${imgConversionPath}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                          <path d={svgPaths.pb499780} fill="var(--fill-0, #444955)" id="mail" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper2>
                  <ListAutomationBtnIcnTiny />
                  <ListAutomationBtnIcnTiny />
                  <ListAutomationBtnIcnTiny />
                </>
              )}
            </Wrapper1>
          </div>
        </div>
      </Wrapper4>
    </div>
  );
}

export default function AutomatisationsToutes() {
  return (
    <div className="bg-white relative size-full" data-name="Automatisations . Toutes">
      <AgentNavigationRailDesktop className="-translate-y-1/2 absolute bg-white h-[1024px] left-0 top-[calc(50%-1022px)] w-[90px]" />
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
      <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[115px] top-[150px] w-[1291px]">
        <Frame112BodySmLightText text="Clients" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" />
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
        </div>
        <Frame112BodySmLightText text="Affaires" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" />
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper2 />
            </div>
          </ListAutomation1>
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper2 />
            </div>
          </ListAutomation1>
        </div>
        <Frame112BodySmLightText text="Biens" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation className="bg-white h-[70px] relative shrink-0 w-[1191px]" propriete1="Active light" />
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper2 />
            </div>
          </ListAutomation1>
        </div>
        <Frame112BodySmLightText text="Documents" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper2 />
            </div>
          </ListAutomation1>
        </div>
        <Frame112BodySmLightText text="Évènements" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper2 />
            </div>
          </ListAutomation1>
        </div>
        <Frame112BodySmLightText text="Autres" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper1 />
            </div>
          </ListAutomation1>
          <ListAutomation1>
            <HorizontalDivider1191Px />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-px relative">
                <BodyMdLightText text="Nom de l’automatisation" />
                <Helper />
              </div>
              <Helper2 />
            </div>
          </ListAutomation1>
        </div>
      </div>
      <div className="absolute bg-white h-[100px] left-[115px] top-0 w-[1191px]" data-name="app bar category">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center py-[25px] relative size-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar category light">
              <div className="relative shrink-0" data-name="H4 . Desktop . light">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[10px] relative">
                    <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                      <p className="leading-[34px]">Automatisations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[16px] shrink-0" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Categorie</p>
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
                      <Wrapper8 additionalClassNames="absolute contents inset-0">
                        <g id="arrow-down">
                          <path d={svgPaths.p336ed396} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                          <g id="Vector_2" opacity="0" />
                        </g>
                      </Wrapper8>
                    </div>
                  </div>
                </div>
              </div>
              <Wrapper3>
                <IcnPlus additionalClassNames="size-[20px]" />
              </Wrapper3>
              <Wrapper3>
                <div className="relative shrink-0 size-[20px]" data-name="icn_search">
                  <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p2e267b00} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                    </svg>
                  </div>
                </div>
              </Wrapper3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}