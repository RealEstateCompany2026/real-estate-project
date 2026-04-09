import clsx from "clsx";
import imgPropriete1DefaultLight from "figma:asset/ae63bbca1a8511d4e4bf069f0d6e0eabea84b9c1.png";
import imgPropriete1DefaultDark from "figma:asset/745eb8075f4b0dbca29e929762ec0e878857f203.png";
import svgPaths from "./svg-u15n79h1v2";
import { imgConversionPath, imgAtomeScoringTrend, imgAdd, imgSearch, imgTrendingFlat } from "./svg-vrlxi";
import imgEllipse4 from "figma:asset/38f078296e38a0b1610ab714d659cb7e61dcac65.png";

function TrendingFlat() {
  return (
    <div style={{ maskImage: `url('${imgTrendingFlat}')` }} className="absolute inset-[31.25%_8.33%_31.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-7.5px] mask-size-[24px_24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 7.5">
        <path d={svgPaths.p6b3e6f0} fill="var(--fill-0, #A1A4AA)" id="trending_flat" />
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <ListClient1>
      <AtomeTitleSectionList text="QUALIFICATION" text1="82%" additionalClassNames="text-[#d0d1d4]" />
      <div className="relative shrink-0" data-name="atome . icon + icon . trio">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[18px] items-center relative">
            <AtomeIconIcon />
            <AtomeIconIcon1 />
            <div className="relative shrink-0" data-name="atome . icon + icon">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative">
                  <IcnCalendarCheck />
                  <div className="relative shrink-0 size-[20px]" data-name="icn_trending_flat">
                    <div style={{ maskImage: `url('${imgTrendingFlat}')` }} className="absolute inset-[31.25%_8.33%_31.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-7.5px] mask-size-[24px_24px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 7.5">
                        <path d={svgPaths.p6b3e6f0} fill="var(--fill-0, #A1A4AA)" id="trending_flat" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ListClient1>
  );
}

function ListClient1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center relative w-full">
          <OrganismeListName className="h-[120px] relative shrink-0 w-[213px]" />
          <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
          <OrganismeListScoring className="h-[120px] relative shrink-0 w-[90px]" />
          <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
          <div className="h-[120px] relative shrink-0 w-[220px]" data-name="organisme . list . qualification">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
                <div className="relative shrink-0 w-[195px]" data-name="organisme . metrics">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">{children}</div>
                </div>
              </div>
            </div>
          </div>
          <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
          <OrganismeListEngagement className="h-[120px] relative shrink-0 w-[220px]" />
          <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
          <OrganismeListConversion className="h-[120px] relative shrink-0 w-[220px]" />
          <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
          <div className="h-[120px] relative shrink-0 w-[86px]" data-name="organisme. list . suggestions">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center pl-[19px] pr-[38px] py-[48px] relative size-full">
                <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">
          <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
            <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearArrowDown() {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-down">
          <path d={svgPaths.p336ed396} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}
type OrganismeListConversion1Props = {
  additionalClassNames?: string;
};

function OrganismeListConversion1({ additionalClassNames = "" }: OrganismeListConversion1Props) {
  return (
    <div className="h-[120px] relative shrink-0 w-[220px]">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
          <div className="relative shrink-0 w-[195px]" data-name="organisme . conversion">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
              <AtomeTitleSectionList text="CONVERSION" text1="36%" additionalClassNames="text-[#a1a4aa]" />
              <AtomeIconTrio className="relative shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AtomeMessageStatus1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="9" fill="var(--fill-0, #ECEDEE)" id="Ellipse 48" r="8.5" stroke="var(--stroke-0, #A1A4AA)" />
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <OrganismeListEngagement1>
      <div className="relative shrink-0" data-name="atome . event . quinte">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-px relative">
            <AtomeMessageStatus1 />
            <AtomeMessageStatus1 />
            <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1="Fail light" />
            <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1="success light" />
            <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1="success light" />
          </div>
        </div>
      </div>
      <AtomeTextIconDate className="relative shrink-0" />
    </OrganismeListEngagement1>
  );
}
type OrganismeListEngagement1Props = {
  additionalClassNames?: string;
};

function OrganismeListEngagement1({ children, additionalClassNames = "" }: React.PropsWithChildren<OrganismeListEngagement1Props>) {
  return (
    <div className="h-[120px] relative shrink-0 w-[220px]">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
          <div className="relative shrink-0 w-[195px]" data-name="organisme . engagement">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
              <AtomeTitleSectionList text="ENGAGEMENT" text1="48%" additionalClassNames="text-[#a1a4aa]" />
              <div className="relative shrink-0 w-full" data-name="organisme event quinte + icon text date">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative w-full">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalDivider84Px1() {
  return (
    <div className="h-[84px] relative shrink-0 w-0">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-px rotate-90 w-[84px]">
          <div className="relative size-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 1">
                <line id="Line 57" stroke="var(--stroke-0, #DADBDD)" x2="84" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganismeListSuggestions() {
  return (
    <div className="h-[120px] relative shrink-0 w-[86px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[19px] pr-[38px] py-[48px] relative size-full">
          <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />
        </div>
      </div>
    </div>
  );
}

function ListClientAtomeMessageStatus() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="9" fill="var(--fill-0, white)" id="Ellipse 48" r="8.5" stroke="var(--stroke-0, #A1A4AA)" />
      </svg>
    </div>
  );
}
type AtomeTitleSectionListProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function AtomeTitleSectionList({ text, text1, additionalClassNames = "" }: AtomeTitleSectionListProps) {
  return (
    <div className={clsx("h-[20px] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] w-full whitespace-nowrap", additionalClassNames)}>
      <p className="absolute font-['roboto:SemiBold',sans-serif] left-0 top-0">{text}</p>
      <p className="-translate-x-full absolute font-['roboto:Regular',sans-serif] left-[195px] text-right top-0">{text1}</p>
    </div>
  );
}

function VuesaxLinearWalletMoney() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="vuesax/linear/wallet-money">
          <path d={svgPaths.p188fc300} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30545500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p707cc0} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1f776980} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p38e14a80} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function AtomeIconIcon1() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">
          <VuesaxLinearWalletMoney />
          <IcnVitalSigns />
        </div>
      </div>
    </div>
  );
}

function IcnVitalSigns() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]" data-name="vital_signs" style={{ maskImage: `url('${imgConversionPath}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
          <path d={svgPaths.p203c2b80} fill="var(--fill-0, #0DA500)" id="vital_signs" />
        </svg>
      </div>
    </div>
  );
}

function AtomeIconIcon() {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">
          <div className="relative shrink-0 size-[20px]" data-name="icn_person">
            <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="person_2" style={{ maskImage: `url('${imgConversionPath}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c4b9f00} fill="var(--fill-0, #444955)" id="person_2" />
              </svg>
            </div>
          </div>
          <IcnVitalSigns />
        </div>
      </div>
    </div>
  );
}

function IcnCalendarCheck() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_check" style={{ maskImage: `url('${imgConversionPath}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.175 20.5">
          <path d={svgPaths.p2721eb80} fill="var(--fill-0, #444955)" id="calendar_check" />
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[10px] py-[8px] relative", additionalClassNames)}>
      <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#737780] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type GraphCourbeBodySmLightTextProps = {
  text: string;
};

function GraphCourbeBodySmLightText({ text }: GraphCourbeBodySmLightTextProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <Text text={text} additionalClassNames="w-full" />
      </div>
    </div>
  );
}
type IcnArrowDropUpProps = {
  additionalClassNames?: string;
};

function IcnArrowDropUp({ additionalClassNames = "" }: IcnArrowDropUpProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="absolute inset-[37.5%_29.17%_41.67%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-9px] mask-size-[24px_24px]" data-name="arrow_drop_up" style={{ maskImage: `url('${imgConversionPath}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
          <path d="M0 5L5 0L10 5H0Z" fill="var(--fill-0, #0DA500)" id="arrow_drop_up" />
        </svg>
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
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
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
        </div>
      </div>
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
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
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
                    </div>
                  </div>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-[10px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
                    <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
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
                    </div>
                  </div>
                </div>
                <ButtonNavBien className="h-[50px] relative rounded-[16px] shrink-0 w-full" propriete1={isDark ? "default dark" : undefined} />
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
                      <div className="absolute contents left-0 top-0">
                        <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                      </div>
                      <div className="relative shrink-0 size-[24px]" data-name="icn_content_paste">
                        <div className="absolute inset-[4.17%_12.5%_12.5%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-1px] mask-size-[24px_24px]" data-name="content_paste" style={{ maskImage: `url('${imgConversionPath}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                            <path d={svgPaths.p32cd3180} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="content_paste" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-[10px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 1">
                    <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
                      <div className="absolute contents left-0 top-0">
                        <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                      </div>
                      <div className="relative shrink-0 size-[24px]" data-name="icn_calendar_today">
                        <div className="absolute inset-[8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_today" style={{ maskImage: `url('${imgConversionPath}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                            <path d={svgPaths.p1fd79700} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="calendar_today" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
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
                    </div>
                  </div>
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
type CardGraphIndicateurProps = {
  className?: string;
  propDefault?: "default light" | "default dark";
};

function CardGraphIndicateur({ className, propDefault = "default light" }: CardGraphIndicateurProps) {
  const isDefaultDark = propDefault === "default dark";
  return (
    <div className={className || `relative rounded-[16px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] ${isDefaultDark ? "bg-[#333740]" : "bg-white"}`}>
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative">
        <div className="relative shrink-0" data-name="H6 . Desktop . light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[8px] relative">
              <div className={`flex flex-col font-["roboto:Bold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] tracking-[0.2px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#333740]"}`}>
                <p className="leading-[24px]">22 fév 2026</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Body . sm . light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center py-[8px] relative">
              <p className={`font-["roboto:Regular",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>28 réactions positives</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="atome . icon + text . medium">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center py-[8px] relative">
              <IcnArrowDropUp additionalClassNames="shrink-0 size-[20px]" />
              <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                <p className="leading-[20px]">7%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type DropdownProps = {
  className?: string;
  propriete1?: "shadow light" | "shadow dark" | "default dark" | "default light";
};

function Dropdown({ className, propriete1 = "shadow light" }: DropdownProps) {
  const isDefaultLightOrDefaultDark = ["default light", "default dark"].includes(propriete1);
  const isShadowDark = propriete1 === "shadow dark";
  return (
    <div className={className || `h-[44px] relative rounded-[16px] w-[104px] ${["shadow dark", "default dark"].includes(propriete1) ? "bg-[#333740]" : "bg-white"}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${propriete1 === "default dark" ? "border-[#333740]" : propriete1 === "default light" ? "border-white" : isShadowDark ? "border-[#333740] shadow-[1px_1px_8px_0px_rgba(0,0,0,0.15)]" : "border-white shadow-[1px_1px_8px_0px_rgba(0,0,0,0.15)]"}`} />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative size-full">
          <div className="relative shrink-0" data-name="atome . text + icon . medium">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative">
                <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isShadowDark ? "text-[#ecedee]" : "text-[#444955]"}`}>
                  <p className="leading-[20px]">{isDefaultLightOrDefaultDark ? "Text" : isShadowDark ? "Label" : "Label"}</p>
                </div>
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
                  <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="arrow-down">
                        <path d={svgPaths.p336ed396} id="Vector" stroke={isShadowDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        {["shadow light", "shadow dark"].includes(propriete1) && <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke={isShadowDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #444955)"} />}
                        {isDefaultLightOrDefaultDark && <g id="Vector_2" opacity="0" />}
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
type GraphCourbeProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function GraphCourbe({ className, propriete1 = "default light" }: GraphCourbeProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || "h-[320px] relative w-[1191px]"}>
      <div className={`absolute inset-0 rounded-[20px] ${isDefaultDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} />
      <div className="absolute content-stretch flex flex-col gap-[10px] inset-[6.25%_2.02%_8.13%_0] items-center" data-name="Matrice">
        <div className="content-stretch flex gap-[27px] items-center relative shrink-0 w-full" data-name="échelle">
          <div className="h-[200px] relative shrink-0 w-[1103px]" data-name="échelle . lignes">
            <div className="absolute inset-[-0.5%_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1103 201">
                <g id="Ã©chelle . lignes">
                  <line id="Line 47" stroke={isDefaultDark ? "var(--stroke-0, #333740)" : "var(--stroke-0, #DADBDD)"} x1="1.69036e-09" x2="1103" y1="0.5" y2="0.5" />
                  <line id="Line 46" stroke={isDefaultDark ? "var(--stroke-0, #333740)" : "var(--stroke-0, #DADBDD)"} x1="1.68328e-09" x2="1103" y1="100.5" y2="100.5" />
                  <line id="Line 45" stroke={isDefaultDark ? "var(--stroke-0, #333740)" : "var(--stroke-0, #DADBDD)"} x1="1.23815e-09" x2="1103" y1="200.5" y2="200.5" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[68px] items-start relative shrink-0 w-[37px]" data-name="échelle . label">
            <GraphCourbeBodySmLightText text="50" />
            <GraphCourbeBodySmLightText text="25" />
            <GraphCourbeBodySmLightText text="0" />
          </div>
        </div>
        <div className="content-stretch flex gap-[77px] items-center relative shrink-0" data-name="chronologie . dates">
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="10 avr" />
            </div>
          </div>
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="17 avr" />
            </div>
          </div>
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="24 avr" />
            </div>
          </div>
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="01 mai" />
            </div>
          </div>
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="08 mai" />
            </div>
          </div>
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="15 mai" />
            </div>
          </div>
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="22 mai" />
            </div>
          </div>
          <div className="relative shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <Text text="22 mai" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[23.75%_7.31%_25.59%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1103.93 162.103">
          <path d={svgPaths.p3eeec900} fill={isDefaultDark ? "url(#paint0_linear_2_3232)" : "url(#paint0_linear_2_3202)"} id="Rectangle 289" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id={isDefaultDark ? "paint0_linear_2_3232" : "paint0_linear_2_3202"} x1="509.577" x2="509.577" y1="152.103" y2="10.6033">
              <stop offset="0.197115" stopColor={isDefaultDark ? "#22252B" : "#ECEDEE"} />
              <stop offset="1" stopColor={isDefaultDark ? "#45408D" : "#D9D6FF"} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[0_36.2%_0_63.8%] items-center justify-center">
        <div className="flex-none h-px rotate-90 w-[320px]">
          <div className="relative size-full">
            <div className="absolute inset-[-10px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 10">
                <line id="Line 48" stroke="var(--stroke-0, black)" strokeDasharray="2 2" strokeOpacity="0.05" strokeWidth="10" x2="320" y1="5" y2="5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[4.06%_7.2%_35.6%_0.34%] items-center justify-center">
        <div className="flex-none h-[101.033px] rotate-[-4.85deg] skew-x-[0.91deg] w-[1095.016px]">
          <div className="relative size-full">
            <div className="absolute inset-[-1.48%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1095.74 104.029">
                <path d={svgPaths.p3c5b5280} id="Line 49" stroke="var(--stroke-0, #7B72F9)" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[38.13%_35.02%_55.94%_63.38%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.5" cy="9.5" fill={isDefaultDark ? "var(--fill-0, #22252B)" : "var(--fill-0, white)"} id="Ellipse 46" r="8" stroke="var(--stroke-0, #7B72F9)" strokeWidth="3" />
        </svg>
      </div>
      <Dropdown className={`absolute inset-[6.25%_89.35%_80%_1.92%] rounded-[16px] ${isDefaultDark ? "bg-[#333740]" : "bg-white"}`} propriete1={isDefaultDark ? "shadow dark" : undefined} />
      <CardGraphIndicateur className={`absolute inset-[21.88%_19.57%_39.38%_66.66%] rounded-[16px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.15)] ${isDefaultDark ? "bg-[#333740]" : "bg-white"}`} propDefault={isDefaultDark ? "default dark" : undefined} />
    </div>
  );
}
type VerticalDivider84PxProps = {
  className?: string;
  propriete1?: "default light" | "default dark" | "hover dark" | "hover light";
};

function VerticalDivider84Px({ className, propriete1 = "default light" }: VerticalDivider84PxProps) {
  return (
    <div className={className || "h-[84px] relative w-0"}>
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none h-px rotate-90 w-[84px]">
          <div className="relative size-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 1">
                <line id="Line 57" stroke={propriete1 === "hover dark" ? "var(--stroke-0, #333740)" : propriete1 === "default dark" ? "var(--stroke-0, #22252B)" : propriete1 === "hover light" ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #ECEDEE)"} x2="84" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type OrganismeScoringSectionListProps = {
  className?: string;
  propriete1?: "Up light" | "Down light" | "Up dark" | "Down dark";
};

function OrganismeScoringSectionList({ className, propriete1 = "Up light" }: OrganismeScoringSectionListProps) {
  const isDownLightOrDownDark = ["Down light", "Down dark"].includes(propriete1);
  const isUpDark = propriete1 === "Up dark";
  return (
    <div className={className || "relative w-[60px]"}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[8px] relative w-full">
          <div className="mb-[-8px] relative shrink-0 w-full" data-name="H2 . Desktop . light">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[6px] relative w-full">
                <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] tracking-[0.4px] whitespace-nowrap ${isUpDark ? "text-[#d0d1d4]" : "text-[#333740]"}`}>
                  <p className="leading-[48px]">{isDownLightOrDownDark ? "H2 . SemiBold . Desktop" : isUpDark ? "76" : "76"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-8px] relative shrink-0 w-full" data-name="atome . scoring . trend">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative w-full">
                <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Body . sm">
                  <p className={`font-["roboto:Regular",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isUpDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>score</p>
                </div>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none">
                    {["Up light", "Up dark"].includes(propriete1) && <IcnArrowDropUp additionalClassNames="size-[24px]" />}
                    {isDownLightOrDownDark && (
                      <div className="relative size-[24px]" data-name="icn_arrow_drop_down">
                        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-10px] mask-size-[24px_24px]" data-name="arrow_drop_down" style={{ maskImage: `url('${imgAtomeScoringTrend}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                            <path d={svgPaths.p29d06c00} fill="var(--fill-0, #444955)" id="arrow_drop_down" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                          </svg>
                        </div>
                      </div>
                    )}
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

function OrganismeListScoring({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[90px]"} data-name="organisme . list . scoring">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[28px] relative size-full">
          <OrganismeScoringSectionList className="relative shrink-0 w-[60px]" />
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
        <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative">
          <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[6px] py-[4px] relative">
                <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is0Dark ? "text-[#444955]" : is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : is1Light ? "text-white" : "text-[#a1a4aa]"}`}>{is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : is1Light ? "1" : is0Dark ? "0" : "0"}</p>
              </div>
            </div>
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

function AtomeIconTrio({ className }: { className?: string }) {
  return (
    <div className={className || "relative"} data-name="atome . icon . trio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[42px] items-center relative">
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/security-safe">
            <div className="absolute contents inset-0" data-name="vuesax/linear/security-safe">
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
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/tag-2">
            <div className="absolute contents inset-0" data-name="vuesax/linear/tag-2">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="tag-2">
                  <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                  <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_4" opacity="0" stroke="var(--stroke-0, #444955)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/receipt-text">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="vuesax/linear/receipt-text">
                <path d={svgPaths.p2606a200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d={svgPaths.pc38d600} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d="M6 9H12" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M6.75 13H11.25" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Vector_5" opacity="0" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type AtomeTextIconDateProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function AtomeTextIconDate({ className, propriete1 = "default light" }: AtomeTextIconDateProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">
          <IcnCalendarCheck />
          <div className={`flex flex-col font-["roboto:Regular",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${propriete1 === "default dark" ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
            <p className="leading-[20px]">280 j</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AtomeIconIconTrio({ className }: { className?: string }) {
  return (
    <div className={className || "relative"} data-name="atome . icon + icon . trio">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[18px] items-center relative">
          <AtomeIconIcon />
          <AtomeIconIcon1 />
          <div className="relative shrink-0" data-name="atome . icon + icon">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative">
                <IcnCalendarCheck />
                <IcnVitalSigns />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganismeListName({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[213px]"} data-name="organisme . list . name">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[30px] pr-[20px] py-[34px] relative size-full">
          <div className="relative shrink-0 w-[163px]" data-name="atome . first name + last name">
            <div className="content-stretch flex flex-col gap-[12px] items-start leading-[20px] not-italic relative text-[#444955] text-[16px] tracking-[0.16px] w-full">
              <p className="font-['roboto:Regular',sans-serif] relative shrink-0 w-full">Jean-Christophe</p>
              <p className="font-['roboto:Bold',sans-serif] relative shrink-0 w-full">LEMARCHAND</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganismeListConversion({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[220px]"} data-name="organisme . list . conversion">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
          <div className="relative shrink-0 w-[195px]" data-name="organisme . conversion">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
              <AtomeTitleSectionList text="CONVERSION" text1="36%" additionalClassNames="text-[#d0d1d4]" />
              <AtomeIconTrio className="relative shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrganismeListEngagement({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[220px]"} data-name="organisme . list . engagement">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
          <div className="relative shrink-0 w-[195px]" data-name="organisme . engagement">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
              <AtomeTitleSectionList text="ENGAGEMENT" text1="48%" additionalClassNames="text-[#d0d1d4]" />
              <div className="relative shrink-0 w-full" data-name="organisme event quinte + icon text date">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative">
                    <AtomeEventQuinte className="relative shrink-0" />
                    <AtomeTextIconDate className="relative shrink-0" />
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
type ListClientProps = {
  className?: string;
  propriete1?: "default light" | "hover light" | "default dark" | "hover dark";
};

function ListClient({ className, propriete1 = "default light" }: ListClientProps) {
  const isDefaultDark = propriete1 === "default dark";
  const isDefaultDarkOrHoverDark = ["default dark", "hover dark"].includes(propriete1);
  const isDefaultLight = propriete1 === "default light";
  const isDefaultLightOrDefaultDarkOrHoverDark = ["default light", "default dark", "hover dark"].includes(propriete1);
  const isHoverDark = propriete1 === "hover dark";
  const isHoverLight = propriete1 === "hover light";
  return (
    <div className={className || `relative rounded-[16px] ${isHoverDark ? "bg-[#22252b]" : isDefaultDark ? "bg-[#111215]" : isHoverLight ? "bg-[#ecedee]" : "bg-white"}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isHoverDark ? "border-[#333740]" : isDefaultDark ? "border-[#22252b]" : isHoverLight ? "border-[#dadbdd]" : "border-[#ecedee]"}`} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center relative">
          {["default light", "hover light"].includes(propriete1) && <OrganismeListName className="h-[120px] relative shrink-0 w-[213px]" />}
          {isDefaultDarkOrHoverDark && (
            <div className="h-[120px] relative shrink-0 w-[213px]" data-name="organisme . list . name">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col items-start justify-center pl-[30px] pr-[20px] py-[34px] relative size-full">
                  <div className="relative shrink-0 w-[163px]" data-name="atome . first name + last name">
                    <div className={`content-stretch flex flex-col gap-[12px] items-start leading-[20px] not-italic relative text-[16px] tracking-[0.16px] w-full ${isHoverDark ? "text-[#444955]" : "text-[#d0d1d4]"}`}>
                      <p className="font-['roboto:Regular',sans-serif] relative shrink-0 w-full">Jean-Christophe</p>
                      <p className="font-['roboto:Bold',sans-serif] relative shrink-0 w-full">LEMARCHAND</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isDefaultLightOrDefaultDarkOrHoverDark && (
            <>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1={isHoverDark ? "hover dark" : isDefaultDark ? "default dark" : undefined} />
              <OrganismeListScoring className="h-[120px] relative shrink-0 w-[90px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1={isHoverDark ? "hover dark" : isDefaultDark ? "default dark" : undefined} />
            </>
          )}
          {isDefaultDarkOrHoverDark && (
            <>
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="organisme . list . qualification">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
                    <div className="relative shrink-0 w-[195px]" data-name="organisme . metrics">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                        <div className={`h-[20px] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] w-full whitespace-nowrap ${isHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`} data-name="atome . title section list">
                          <p className="absolute font-['roboto:SemiBold',sans-serif] left-0 top-0">QUALIFICATION</p>
                          <p className="-translate-x-full absolute font-['roboto:Regular',sans-serif] left-[195px] text-right top-0">82%</p>
                        </div>
                        <div className="relative shrink-0" data-name="atome . icon + icon . trio">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[18px] items-center relative">
                              <div className="relative shrink-0" data-name="atome . icon + icon">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[4px] items-center relative">
                                    <div className="relative shrink-0 size-[20px]" data-name="icn_person">
                                      <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="person_2" style={{ maskImage: `url('${imgConversionPath}')` }}>
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                          <path d={svgPaths.p2c4b9f00} fill={isHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #D0D1D4)"} id="person_2" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="relative shrink-0 size-[20px]" data-name="icn_vital_signs">
                                      <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]" data-name="vital_signs" style={{ maskImage: `url('${imgConversionPath}')` }}>
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
                                          <path d={svgPaths.p203c2b80} fill={isHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="vital_signs" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0" data-name="atome . icon + icon">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[4px] items-center relative">
                                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/wallet-money">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                        <g id="vuesax/linear/wallet-money">
                                          <path d={svgPaths.p188fc300} id="Vector" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                          <path d={svgPaths.p30545500} id="Vector_2" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                          <path d={svgPaths.p707cc0} id="Vector_3" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                          <path d={svgPaths.p1f776980} id="Vector_4" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                          <path d={svgPaths.p38e14a80} id="Vector_5" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                          <g id="Vector_6" opacity="0" />
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="relative shrink-0 size-[20px]" data-name="icn_vital_signs">
                                      <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]" data-name="vital_signs" style={{ maskImage: `url('${imgConversionPath}')` }}>
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
                                          <path d={svgPaths.p203c2b80} fill={isHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="vital_signs" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0" data-name="atome . icon + icon">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[4px] items-center relative">
                                    <div className="relative shrink-0 size-[20px]" data-name="icn_calendar_check">
                                      <div className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_check" style={{ maskImage: `url('${imgConversionPath}')` }}>
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.175 20.5">
                                          <path d={svgPaths.p2721eb80} fill={isHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #D0D1D4)"} id="calendar_check" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="relative shrink-0 size-[20px]" data-name="icn_vital_signs">
                                      <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]" data-name="vital_signs" style={{ maskImage: `url('${imgConversionPath}')` }}>
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
                                          <path d={svgPaths.p203c2b80} fill={isHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="vital_signs" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1={isHoverDark ? "hover dark" : "default dark"} />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="organisme . list . engagement">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
                    <div className="relative shrink-0 w-[195px]" data-name="organisme . engagement">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                        <div className={`h-[20px] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] w-full whitespace-nowrap ${isHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`} data-name="atome . title section list">
                          <p className="absolute font-['roboto:SemiBold',sans-serif] left-0 top-0">ENGAGEMENT</p>
                          <p className="-translate-x-full absolute font-['roboto:Regular',sans-serif] left-[195px] text-right top-0">48%</p>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="organisme event quinte + icon text date">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center relative w-full">
                              {isDefaultDark && (
                                <>
                                  <AtomeEventQuinte className="relative shrink-0" />
                                  <div className="relative shrink-0" data-name="atome . text + icon . date">
                                    <div className="flex flex-row items-center size-full">
                                      <div className="content-stretch flex gap-[8px] items-center relative">
                                        <div className="relative shrink-0 size-[20px]" data-name="icn_calendar_check">
                                          <div className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_check" style={{ maskImage: `url('${imgConversionPath}')` }}>
                                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.175 20.5">
                                              <path d={svgPaths.p2721eb80} fill="var(--fill-0, #D0D1D4)" id="calendar_check" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div className="flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">
                                          <p className="leading-[20px]">280 j</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                              {isHoverDark && (
                                <>
                                  <div className="relative shrink-0" data-name="atome . event . quinte">
                                    <div className="flex flex-row items-center size-full">
                                      <div className="content-stretch flex gap-[8px] items-center py-px relative">
                                        <ListClientAtomeMessageStatus />
                                        <ListClientAtomeMessageStatus />
                                        <ListClientAtomeMessageStatus />
                                        <ListClientAtomeMessageStatus />
                                        <ListClientAtomeMessageStatus />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="relative shrink-0" data-name="atome . text + icon . date">
                                    <div className="flex flex-row items-center size-full">
                                      <div className="content-stretch flex gap-[8px] items-center relative">
                                        <IcnCalendarCheck />
                                        <div className="flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                                          <p className="leading-[20px]">280 j</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1={isHoverDark ? "hover dark" : "default dark"} />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="organisme . list . conversion">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
                    <div className="relative shrink-0 w-[195px]" data-name="organisme . conversion">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                        <div className={`h-[20px] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] w-full whitespace-nowrap ${isHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`} data-name="atome . title section list">
                          <p className="absolute font-['roboto:SemiBold',sans-serif] left-0 top-0">CONVERSION</p>
                          <p className="-translate-x-full absolute font-['roboto:Regular',sans-serif] left-[195px] text-right top-0">36%</p>
                        </div>
                        <div className="relative shrink-0" data-name="atome . icon . trio">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[42px] items-center relative">
                              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/security-safe">
                                <div className="absolute contents inset-0" data-name="vuesax/linear/security-safe">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <g id="security-safe">
                                      <path d={svgPaths.pacd22f0} id="Vector" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                      <g id="Group">
                                        <path d={svgPaths.p3e7eb200} id="Vector_2" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                                        <path d="M12 12.5V15.5" id="Vector_3" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                                      </g>
                                      <g id="Vector_4" opacity="0" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/tag-2">
                                <div className="absolute contents inset-0" data-name="vuesax/linear/tag-2">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <g id="tag-2">
                                      <path d={svgPaths.p7410180} id="Vector" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                      <path d={svgPaths.p24ca100} id="Vector_2" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeWidth="1.5" />
                                      <path d={svgPaths.pe4fd680} id="Vector_3" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                                      {isDefaultDark && <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_4" opacity="0" stroke="var(--stroke-0, #D0D1D4)" />}
                                      {isHoverDark && <g id="Vector_4" opacity="0" />}
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/receipt-text">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <g id="vuesax/linear/receipt-text">
                                    <path d={svgPaths.p2606a200} id="Vector" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                                    <path d={svgPaths.pc38d600} id="Vector_2" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                                    <path d="M6 9H12" id="Vector_3" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <path d="M6.75 13H11.25" id="Vector_4" stroke={isHoverDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #D0D1D4)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <g id="Vector_5" opacity="0" />
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
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1={isHoverDark ? "hover dark" : "default dark"} />
              <div className="h-[120px] relative shrink-0 w-[86px]" data-name="organisme. list . suggestions">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center pl-[19px] pr-[38px] py-[48px] relative size-full">
                    {isDefaultDark && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="0 dark" />}
                    {isHoverDark && (
                      <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" data-name="atome . ai . suggestion">
                        <div className="absolute inset-[0_1.47%] rounded-[16px]" data-name="Sticker">
                          <div aria-hidden="true" className="absolute border border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
                          <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative">
                            <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="Body . sm . light">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center px-[6px] py-[4px] relative">
                                  <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a4aa] text-[14px] tracking-[0.14px] whitespace-nowrap">0</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          {isDefaultLight && (
            <>
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="organisme . list . qualification">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
                    <div className="relative shrink-0 w-[195px]" data-name="organisme . metrics">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                        <AtomeTitleSectionList text="QUALIFICATION" text1="82%" additionalClassNames="text-[#d0d1d4]" />
                        <AtomeIconIconTrio className="relative shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <OrganismeListEngagement className="h-[120px] relative shrink-0 w-[220px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <OrganismeListConversion className="h-[120px] relative shrink-0 w-[220px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <OrganismeListSuggestions />
            </>
          )}
          {isHoverLight && (
            <>
              <VerticalDivider84Px1 />
              <OrganismeListScoring className="h-[120px] relative shrink-0 w-[90px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="organisme . list . qualification">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
                    <div className="relative shrink-0 w-[195px]" data-name="organisme . metrics">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                        <AtomeTitleSectionList text="QUALIFICATION" text1="82%" additionalClassNames="text-[#a1a4aa]" />
                        <AtomeIconIconTrio className="relative shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <Helper />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <OrganismeListConversion1 />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <OrganismeListSuggestions />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ListClientsProprietairesTousLightMode() {
  return (
    <div className="bg-white relative size-full" data-name="list clients . propriétaires . tous . light mode">
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
      <div className="absolute bg-white h-[100px] left-[115px] top-0 w-[1191px]" data-name="app bar category">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center py-[25px] relative size-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar category light">
              <div className="relative shrink-0" data-name="H4 . Desktop . light">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[10px] relative">
                    <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                      <p className="leading-[34px]">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[16px] shrink-0" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">tous</p>
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
                      <VuesaxLinearArrowDown />
                    </div>
                  </div>
                </div>
              </div>
              <IconButton />
              <div className="relative rounded-[16px] shrink-0" data-name="icon button">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center p-[12px] relative">
                    <div className="relative shrink-0 size-[20px]" data-name="icn_search">
                      <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <path d={svgPaths.p2e267b00} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[115px] top-[500px] w-[1199px]">
        <ListClient className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <Wrapper />
        <div className="bg-[#ecedee] relative rounded-[16px] shrink-0 w-full" data-name="list . client">
          <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[15px] items-center relative w-full">
              <OrganismeListName className="h-[120px] relative shrink-0 w-[213px]" />
              <VerticalDivider84Px1 />
              <OrganismeListScoring className="h-[120px] relative shrink-0 w-[90px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="organisme . list . qualification">
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
                    <div className="relative shrink-0 w-[195px]" data-name="organisme . metrics">
                      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
                        <AtomeTitleSectionList text="QUALIFICATION" text1="82%" additionalClassNames="text-[#a1a4aa]" />
                        <div className="relative shrink-0" data-name="atome . icon + icon . trio">
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[18px] items-center relative">
                              <AtomeIconIcon />
                              <div className="relative shrink-0" data-name="atome . icon + icon">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[4px] items-center relative">
                                    <VuesaxLinearWalletMoney />
                                    <div className="relative shrink-0 size-[20px]" data-name="icn_trending_flat">
                                      <TrendingFlat />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0" data-name="atome . icon + icon">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[4px] items-center relative">
                                    <IcnCalendarCheck />
                                    <div className="relative shrink-0 size-[20px]" data-name="icn_trending_flat">
                                      <TrendingFlat />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <Helper />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <OrganismeListConversion1 />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" propriete1="hover light" />
              <OrganismeListSuggestions />
            </div>
          </div>
        </div>
        <Wrapper />
        <ListClient className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListClient className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListClient className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListClient className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListClient className="bg-white relative rounded-[16px] shrink-0 w-full" />
      </div>
      <div className="absolute bg-white h-[54px] left-[calc(83.33%-3px)] rounded-[20px] top-[1746px] w-[117px]" data-name="button . pagination">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[7px] py-[4px] relative size-full">
            <div className="relative rounded-[16px] shrink-0" data-name="icon button">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[12px] relative">
                  <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-left">
                    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-left">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="arrow-left">
                          <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                          <g id="Vector_2" opacity="0" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#dadbdd] relative rounded-[16px] shrink-0" data-name="icon button">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[12px] relative">
                  <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="arrow-right">
                          <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #333740)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
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
      <div className="absolute h-[50px] left-[115px] rounded-[10px] top-[1748px]" data-name="dropdown">
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
                  <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-10px] mask-size-[24px_24px]" data-name="arrow_drop_down" style={{ maskImage: `url('${imgAtomeScoringTrend}')` }}>
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
      <GraphCourbe className="absolute h-[320px] left-[115px] top-[100px] w-[1191px]" />
      <div className="absolute content-stretch flex gap-[20px] items-center left-[115px] top-[438px]">
        <div className="relative shrink-0" data-name="atome . text + icon . small">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center relative">
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">
                <p className="leading-[16px]">Filtre 01</p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/arrow-down">
                <VuesaxLinearArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="atome . text + icon . small">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center relative">
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">
                <p className="leading-[16px]">Filtre 02</p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/arrow-down">
                <VuesaxLinearArrowDown />
              </div>
            </div>
          </div>
        </div>
        <IconButton />
      </div>
      <div className="absolute bottom-0 h-[calc(100%-calc(50%-502px)+0px)] left-0 pointer-events-none top-[calc(50%-502px)]">
        <AgentNavigationRailDesktop className="-translate-y-1/2 bg-white h-[1024px] pointer-events-auto sticky top-0 w-[90px]" />
      </div>
    </div>
  );
}