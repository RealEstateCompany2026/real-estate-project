import svgPaths from "./svg-t61sz2csnq";
import { imgCalendarCheck, imgIcnCalendarCheck } from "./svg-cay7y";

function AppBarMessagerieVuesaxLinearProfileCircle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/profile-circle">
        {children}
      </div>
    </div>
  );
}

function AppBarMessagerieAtomeIconTextMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
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

function AppBarMessagerieIconButton({ children }: React.PropsWithChildren<{}>) {
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

function AtomeIconTextScoringClientBodyMdLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{children}</p>
    </Wrapper>
  );
}
type AppBarMessagerieH4DesktopLightTextProps = {
  text: string;
};

function AppBarMessagerieH4DesktopLightText({ text }: AppBarMessagerieH4DesktopLightTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">
          <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
            <p className="leading-[34px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type AtomeIconTextScoringClientBodyMdDarkTextProps = {
  text: string;
};

function AtomeIconTextScoringClientBodyMdDarkText({ text }: AtomeIconTextScoringClientBodyMdDarkTextProps) {
  return (
    <Wrapper>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type AtomeTextIconDateProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function AtomeTextIconDate({ className, propriete1 = "default light" }: AtomeTextIconDateProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">
          <div className="relative shrink-0 size-[20px]" data-name="icn_calendar_check">
            <div className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_check" style={isDefaultDark ? { maskImage: `url('${imgIcnCalendarCheck}')` } : { maskImage: `url('${imgCalendarCheck}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 19.175 20.5" : "0 0 15.9792 17.0833"}>
                <path d={isDefaultDark ? svgPaths.p2721eb80 : svgPaths.p1ec73600} fill="var(--fill-0, #444955)" id="calendar_check" />
              </svg>
            </div>
          </div>
          <div className={`flex flex-col font-["roboto:Regular",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
            <p className="leading-[20px]">280 j</p>
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

function AtomeEventQuinte({ className }: { className?: string }) {
  return (
    <div className={className || "relative"} data-name="atome . event . quinte">
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
  );
}
type AtomeIconTextScoringClientProps = {
  className?: string;
  type?: "very low . light" | "low . light" | "medium . light" | "high . light" | "very high . light" | "very low . dark" | "very high . dark" | "high . dark" | "medium . dark" | "low . dark";
};

function AtomeIconTextScoringClient({ className, type = "very low . light" }: AtomeIconTextScoringClientProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative">
          {["very low . light", "very low . dark"].includes(type) && (
            <div className="h-[20.4px] relative shrink-0 w-[32px]" data-name="very low">
              <div className="absolute h-[20.141px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.141">
                  <path d={svgPaths.p319a7380} fill="var(--fill-0, #EC0119)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["low . light", "low . dark"].includes(type) && (
            <div className="h-[20.706px] relative shrink-0 w-[32px]" data-name="low">
              <div className="absolute h-[20.014px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.0137">
                  <path d={svgPaths.p2d8a4b80} fill="var(--fill-0, #FF882F)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["very low . light", "low . light"].includes(type) && <AtomeIconTextScoringClientBodyMdLight>{type === "low . light" ? "25" : "5"}</AtomeIconTextScoringClientBodyMdLight>}
          {["medium . light", "medium . dark"].includes(type) && (
            <div className="h-[19.979px] relative shrink-0 w-[32px]" data-name="medium">
              <div className="absolute h-[19.963px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19.963">
                  <path d={svgPaths.p3e2bce80} fill="var(--fill-0, #FDEB03)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["very low . dark", "low . dark", "medium . dark"].includes(type) && <AtomeIconTextScoringClientBodyMdDarkText text="Body . md . SemiBold . 16/20px" />}
          {["high . light", "high . dark"].includes(type) && (
            <div className="h-[20.569px] relative shrink-0 w-[32px]" data-name="high">
              <div className="absolute h-[19.979px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19.9793">
                  <path d={svgPaths.p21e37f00} fill="var(--fill-0, #4AC57B)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["medium . light", "high . light"].includes(type) && <AtomeIconTextScoringClientBodyMdLight>{type === "high . light" ? "75" : type === "medium . light" ? "50" : ""}</AtomeIconTextScoringClientBodyMdLight>}
          {["very high . light", "very high . dark"].includes(type) && (
            <div className="h-[20.408px] relative shrink-0 w-[32px]" data-name="very high">
              <div className="absolute h-[20.111px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.1106">
                  <path d={svgPaths.p22896d00} fill="var(--fill-0, #00A774)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["high . dark", "very high . dark"].includes(type) && <AtomeIconTextScoringClientBodyMdDarkText text="Body . md . SemiBold . 16/20px" />}
          {type === "very high . light" && <AtomeIconTextScoringClientBodyMdLight>95</AtomeIconTextScoringClientBodyMdLight>}
        </div>
      </div>
    </div>
  );
}
type AppBarMessagerieProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarMessagerie({ className, propriete1 = "light" }: AppBarMessagerieProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[27px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar messagerie light">
              <AppBarMessagerieIconButton>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgCalendarCheck}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
                    <path d={svgPaths.p1f93a640} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarMessagerieIconButton>
              <AppBarMessagerieH4DesktopLightText text="Messagerie" />
              <AppBarMessagerieAtomeIconTextMedium>
                <AppBarMessagerieVuesaxLinearProfileCircle>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="profile-circle">
                      <path d={svgPaths.p35d95c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p22ef9d00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p14d24500} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarMessagerieVuesaxLinearProfileCircle>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">CAPELLO, Jean-François</p>
                </div>
              </AppBarMessagerieAtomeIconTextMedium>
              <AtomeIconTextScoringClient className="relative shrink-0" type="medium . light" />
              <AtomeEventQuinte className="relative shrink-0" />
              <AtomeTextIconDate className="relative shrink-0" />
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar messagerie dark">
              <AppBarMessagerieIconButton>
                <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgIcnCalendarCheck}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                    <path d={svgPaths.p3f7b8a00} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                  </svg>
                </div>
              </AppBarMessagerieIconButton>
              <AppBarMessagerieH4DesktopLightText text="H4 . Bold . Desktop" />
              <AppBarMessagerieAtomeIconTextMedium>
                <AppBarMessagerieVuesaxLinearProfileCircle>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="profile-circle">
                      <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </g>
                  </svg>
                </AppBarMessagerieVuesaxLinearProfileCircle>
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                  <p className="leading-[20px]">Texte</p>
                </div>
              </AppBarMessagerieAtomeIconTextMedium>
              <AtomeIconTextScoringClient className="relative shrink-0" type="medium . dark" />
              <AtomeEventQuinte className="relative shrink-0" />
              <AtomeTextIconDate className="relative shrink-0" propriete1="default dark" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarMessagerie1() {
  return <AppBarMessagerie className="bg-white relative size-full" />;
}