import clsx from "clsx";
import imgPropriete1DefaultLight from "figma:asset/ae63bbca1a8511d4e4bf069f0d6e0eabea84b9c1.png";
import imgPropriete1DefaultDark from "figma:asset/745eb8075f4b0dbca29e929762ec0e878857f203.png";
import svgPaths from "./svg-jcjhv9ie57";
import { imgConversionPath, imgDatabase, imgAdd, imgUpload } from "./svg-6btt7";
import imgRectangle278 from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";
import imgEllipse4 from "figma:asset/38f078296e38a0b1610ab714d659cb7e61dcac65.png";
import imgRectangle279 from "figma:asset/dc3a33a41f3934c3675617a19f06288a7d587269.png";
type ButtonProps = {
  text: string;
  additionalClassNames?: string;
};

function Button({ children, text, additionalClassNames = "" }: React.PropsWithChildren<ButtonProps>) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={clsx("content-stretch flex items-center relative", additionalClassNames)}>
          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper24({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center p-[23px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper23({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pr-[63px] relative size-full">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">{children}</div>
    </div>
  );
}

function Wrapper22({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[195px]">{children}</div>
    </div>
  );
}
type Wrapper21Props = {
  additionalClassNames?: string;
};

function Wrapper21({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper21Props>) {
  return (
    <div style={{ maskImage: `url('${imgConversionPath}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type Wrapper20Props = {
  additionalClassNames?: string;
};

function Wrapper20({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper20Props>) {
  return (
    <div style={{ maskImage: `url('${imgConversionPath}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper19({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper18({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}
type Wrapper17Props = {
  additionalClassNames?: string;
};

function Wrapper17({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper17Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="content-stretch flex items-start px-[10px] py-[8px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper16({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-1px_0_0_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1191 1">
        {children}
      </svg>
    </div>
  );
}

function Wrapper15({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">{children}</div>
    </div>
  );
}
type Wrapper14Props = {
  additionalClassNames?: string;
};

function Wrapper14({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper14Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[120px] relative shrink-0 w-[220px]">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">{children}</div>
    </div>
  );
}

function CardGraphIndicateurHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper12({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper13>
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[195px]">{children}</div>
    </Wrapper13>
  );
}

function VuesaxLinearReceiptText({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper14 additionalClassNames="relative shrink-0 size-[20px]">
      <g id="vuesax/linear/receipt-text">{children}</g>
    </Wrapper14>
  );
}

function Wrapper11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function IcnDatabaseMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database" style={{ maskImage: `url('${imgDatabase}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          {children}
        </svg>
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
type Wrapper10Props = {
  additionalClassNames?: string;
};

function Wrapper10({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper10Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgConversionPath}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper14 additionalClassNames="absolute contents inset-0">
      <g>{children}</g>
    </Wrapper14>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[120px] relative shrink-0 w-[86px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[19px] pr-[38px] py-[48px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("rounded-[16px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}
type BodyMdLightProps = {
  additionalClassNames?: string;
};

function BodyMdLight({ children, additionalClassNames = "" }: React.PropsWithChildren<BodyMdLightProps>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">{children}</div>
      </div>
    </div>
  );
}
type AtomeIconTextMediumProps = {
  additionalClassNames?: string;
};

function AtomeIconTextMedium({ children, additionalClassNames = "" }: React.PropsWithChildren<AtomeIconTextMediumProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper14 additionalClassNames="absolute contents inset-0">
      <g id="tag-2">{children}</g>
    </Wrapper14>
  );
}

function ListBienVuesaxLinearTag({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper4>{children}</Wrapper4>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[94px]">
      <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
        <AtomeStickerText text="VENTE" />
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/location">
          <Wrapper9>
            <path d={svgPaths.p3d149500} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
            <path d={svgPaths.p21efb480} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
            <path d={svgPaths.p1a4bb100} id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
          </Wrapper9>
        </div>
      </div>
      <AtomeIconTextMedium additionalClassNames="w-full">{children}</AtomeIconTextMedium>
    </div>
  );
}

function VuesaxLinearFormatSquare({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper14 additionalClassNames="absolute contents inset-0">
        <g id="format-square">{children}</g>
      </Wrapper14>
    </div>
  );
}

function VuesaxLinearHome({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper14 additionalClassNames="absolute contents inset-0">
        <g id="home-2">{children}</g>
      </Wrapper14>
    </div>
  );
}

function VuesaxLinearArchiveTick({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper14 additionalClassNames="absolute contents inset-0">
        <g id="archive-tick">{children}</g>
      </Wrapper14>
    </div>
  );
}

function VuesaxLinearSettings({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper14 additionalClassNames="absolute contents inset-0">
        <g id="settings">{children}</g>
      </Wrapper14>
    </div>
  );
}

function VuesaxLinearSecuritySafe({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper14 additionalClassNames="absolute contents inset-0">
        <g id="security-safe">{children}</g>
      </Wrapper14>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
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

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <div className="flex-none h-px rotate-90 w-[84px]">
        <div className="relative size-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 1">
              {children}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function H6DesktopLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5 additionalClassNames="relative shrink-0">
      <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[0px] tracking-[0.2px] whitespace-nowrap">
        <p className="text-[20px]">{children}</p>
      </div>
    </Wrapper5>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("content-stretch flex gap-[8px] items-center", additionalClassNames)}>
      <H6DesktopLight>{children}</H6DesktopLight>
      <Wrapper6 additionalClassNames="relative shrink-0">
        <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
          <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
            </svg>
          </div>
        </div>
      </Wrapper6>
    </div>
  );
}

function ListBienVerticalDivider84Px({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[84px] relative shrink-0 w-0">
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}
type OrganismeSuggestionProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function OrganismeSuggestion({ text, text1, additionalClassNames = "" }: OrganismeSuggestionProps) {
  return (
    <div className={clsx("absolute bg-[#ecedee] left-[115px] rounded-[16px] w-[1191px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[20px] relative w-full">
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/lamp-on">
            <Wrapper14 additionalClassNames="absolute contents inset-0">
              <g id="lamp-on">
                <path d={svgPaths.p34c2e00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p1c587a00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Vector_3" opacity="0" />
              </g>
            </Wrapper14>
          </div>
          <BodyMdLight additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
            <p className="flex-[1_0_0] font-['roboto:SemiBold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#444955] text-[16px] tracking-[0.16px]">{text}</p>
          </BodyMdLight>
          <div className="bg-[#7b72f9] relative rounded-[16px] shrink-0" data-name="button">
            <div aria-hidden="true" className="absolute border border-[#7b72f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <Wrapper15>
              <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap">{text1}</p>
              <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                <Wrapper14 additionalClassNames="absolute contents inset-0">
                  <g id="arrow-right">
                    <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <g id="Vector_2" opacity="0" />
                  </g>
                </Wrapper14>
              </div>
            </Wrapper15>
          </div>
        </div>
      </div>
    </div>
  );
}
type FicheClientProprietaireLightModeH6DesktopLightTextProps = {
  text: string;
  additionalClassNames?: string;
};

function FicheClientProprietaireLightModeH6DesktopLightText({ text, additionalClassNames = "" }: FicheClientProprietaireLightModeH6DesktopLightTextProps) {
  return (
    <Wrapper5 additionalClassNames={clsx("absolute left-[115px]", additionalClassNames)}>
      <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[20px] tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[24px]">{text}</p>
      </div>
    </Wrapper5>
  );
}
type FicheClientProprietaireLightModeHelperProps = {
  additionalClassNames?: string;
};

function FicheClientProprietaireLightModeHelper({ additionalClassNames = "" }: FicheClientProprietaireLightModeHelperProps) {
  return (
    <div className={clsx("absolute h-0 left-[115px] w-[1191px]", additionalClassNames)}>
      <Wrapper16>
        <line id="Line 2" stroke="var(--stroke-0, #EDEBEB)" x2="1191" y1="0.5" y2="0.5" />
      </Wrapper16>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute content-stretch flex gap-[66px] items-center w-[352px]", additionalClassNames)}>
      <BodyMdLight additionalClassNames="shrink-0 w-[112px]">
        <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
      </BodyMdLight>
      <Wrapper17 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
        <p className="flex-[1_0_0] font-['roboto:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#444955] text-[16px] tracking-[0.16px]">{text1}</p>
      </Wrapper17>
    </div>
  );
}
type AtomeIconTextScoringClientBodyMdDarkTextProps = {
  text: string;
};

function AtomeIconTextScoringClientBodyMdDarkText({ text }: AtomeIconTextScoringClientBodyMdDarkTextProps) {
  return (
    <Wrapper7>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper7>
  );
}
type BodyMdLightTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BodyMdLightText({ text, additionalClassNames = "" }: BodyMdLightTextProps) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative px-[10px] py-[8px]">
          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
        </div>
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
type OrganismeMessageRecuBodySmDarkTextProps = {
  text: string;
};

function OrganismeMessageRecuBodySmDarkText({ text }: OrganismeMessageRecuBodySmDarkTextProps) {
  return (
    <Wrapper7>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d0d1d4] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper7>
  );
}
type OrganismeMessageRecuBodySmLightTextProps = {
  text: string;
};

function OrganismeMessageRecuBodySmLightText({ text }: OrganismeMessageRecuBodySmLightTextProps) {
  return (
    <Wrapper7>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper7>
  );
}

function OrganismeListSuggestions() {
  return (
    <Wrapper8>
      <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />
    </Wrapper8>
  );
}
type AtomeStickerTextProps = {
  text: string;
};

function AtomeStickerText({ text }: AtomeStickerTextProps) {
  return (
    <div className="h-[20px] relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Wrapper18>
        <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">{text}</p>
      </Wrapper18>
    </div>
  );
}
type IcnCloseProps = {
  additionalClassNames?: string;
};

function IcnClose({ additionalClassNames = "" }: IcnCloseProps) {
  return (
    <Wrapper10 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>
      <path d={svgPaths.p2aa77200} fill="var(--fill-0, #444955)" />
    </Wrapper10>
  );
}

function IcnCheck() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgConversionPath}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
          <path d={svgPaths.p23b3580} fill="var(--fill-0, #0DA500)" id="check" />
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearTag1() {
  return (
    <Wrapper4>
      <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
      <g id="Vector_4" opacity="0" />
    </Wrapper4>
  );
}

function VuesaxLinearTag() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <VuesaxLinearTag1 />
    </div>
  );
}
type AtomeTitleSectionListTextProps = {
  text: string;
};

function AtomeTitleSectionListText({ text }: AtomeTitleSectionListTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['roboto:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#d0d1d4] text-[16px] top-0 tracking-[0.16px] whitespace-nowrap">{text}</p>
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
      <Wrapper19>
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
      </Wrapper19>
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
                  <Wrapper19>
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
                  </Wrapper19>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper19>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_database_upload">
                      <Wrapper21 additionalClassNames="inset-[12.5%_4.17%_4.17%_12.5%] mask-position-[-3px_-3px]">
                        <path d={svgPaths.p14d59900} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="database_upload" />
                      </Wrapper21>
                    </div>
                  </Wrapper19>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper19>
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
                  </Wrapper19>
                </div>
                <ButtonNavBien className="h-[50px] relative rounded-[16px] shrink-0 w-full" propriete1={isDark ? "default dark" : undefined} />
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper19>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_content_paste">
                      <Wrapper20 additionalClassNames="inset-[4.17%_12.5%_12.5%_12.5%] mask-position-[-3px_-1px]">
                        <path d={svgPaths.p32cd3180} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="content_paste" />
                      </Wrapper20>
                    </div>
                  </Wrapper19>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper19>
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
                  </Wrapper19>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper19>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_calendar_today">
                      <Wrapper20 additionalClassNames="inset-[8.33%_12.5%] mask-position-[-3px_-2px]">
                        <path d={svgPaths.p1fd79700} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="calendar_today" />
                      </Wrapper20>
                    </div>
                  </Wrapper19>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper19>
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
                  </Wrapper19>
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
        <Wrapper2>
          <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is0Dark ? "text-[#444955]" : is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : is1Light ? "text-white" : "text-[#a1a4aa]"}`}>{is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : is1Light ? "1" : is0Dark ? "0" : "0"}</p>
        </Wrapper2>
      </div>
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
      <Wrapper1>
        <line id="Line 57" stroke={propriete1 === "hover dark" ? "var(--stroke-0, #333740)" : propriete1 === "default dark" ? "var(--stroke-0, #22252B)" : propriete1 === "hover light" ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #ECEDEE)"} x2="84" y1="0.5" y2="0.5" />
      </Wrapper1>
    </div>
  );
}

function SectionListEntretien({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[220px]"} data-name="section . list . entretien">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">
          <AtomeTitleSectionListText text="ENTRETIEN" />
          <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
            <AtomeIconTextMedium additionalClassNames="w-[70px]">
              <VuesaxLinearSecuritySafe>
                <path d={svgPaths.pacd22f0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Group">
                  <path d={svgPaths.p3e7eb200} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d="M12 12.5V15.5" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                </g>
                <g id="Vector_4" opacity="0" />
              </VuesaxLinearSecuritySafe>
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                <p className="leading-[20px]">Crée</p>
              </div>
            </AtomeIconTextMedium>
            <IcnDatabaseMedium>
              <path d={svgPaths.p2cbf71b0} fill="var(--fill-0, #444955)" id="database" />
            </IcnDatabaseMedium>
            <Wrapper11>
              <VuesaxLinearSettings>
                <path d={svgPaths.p1ae4c70} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M2 12H7" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d="M17 12H22" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Vector_4" opacity="0" />
              </VuesaxLinearSettings>
              <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                <p className="leading-[20px]">7 j</p>
              </div>
            </Wrapper11>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionListTransaction({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[220px]"} data-name="section . list . transaction">
      <Wrapper22>
        <AtomeTitleSectionListText text="TRANSACTION" />
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <AtomeIconTextMedium additionalClassNames="w-[44px]">
            <VuesaxLinearArchiveTick>
              <path d={svgPaths.p1de04b00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p21906b20} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
            </VuesaxLinearArchiveTick>
            <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
              <p className="leading-[20px]">2</p>
            </div>
          </AtomeIconTextMedium>
          <Wrapper11>
            <VuesaxLinearTag />
            <IcnCheck />
          </Wrapper11>
          <Wrapper11>
            <VuesaxLinearReceiptText>
              <path d={svgPaths.p2606a200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d={svgPaths.pc38d600} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d="M6 9H12" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M6.75 13H11.25" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Vector_5" opacity="0" />
            </VuesaxLinearReceiptText>
            <IcnClose additionalClassNames="size-[20px]" />
          </Wrapper11>
        </div>
      </Wrapper22>
    </div>
  );
}
type IconDpeProps = {
  className?: string;
  type?: "A" | "B" | "C" | "D" | "E" | "F" | "G";
};

function IconDpe({ className, type = "A" }: IconDpeProps) {
  const isB = type === "B";
  const isC = type === "C";
  const isD = type === "D";
  const isE = type === "E";
  const isF = type === "F";
  const isG = type === "G";
  return (
    <div className={className || `relative rounded-[16px] size-[20px] ${isG ? "bg-[#ec0119]" : isF ? "bg-[#ff882f]" : isE ? "bg-[#ffbc02]" : isD ? "bg-[#fdeb03]" : isC ? "bg-[#4ac57b]" : isB ? "bg-[#01bb54]" : "bg-[#00a774]"}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
            <p className="leading-[16px]">{isG ? "G" : isF ? "F" : isE ? "E" : isD ? "D" : isC ? "C" : isB ? "B" : "A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionListType({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[220px]"} data-name="section . list . type">
      <Wrapper22>
        <AtomeTitleSectionListText text="TYPE" />
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
          <Wrapper11>
            <VuesaxLinearHome>
              <path d={svgPaths.p550ea80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
            </VuesaxLinearHome>
            <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
              <p className="leading-[20px]">T3</p>
            </div>
          </Wrapper11>
          <Wrapper11>
            <VuesaxLinearFormatSquare>
              <path d={svgPaths.p3cdc2c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p107add00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p28e63f40} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p210cb300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p2f229a00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Vector_6" opacity="0" />
            </VuesaxLinearFormatSquare>
            <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
              <p className="leading-[20px]">120m²</p>
            </div>
          </Wrapper11>
          <IconDpe className="bg-[#00a774] relative rounded-[16px] shrink-0 size-[20px]" />
        </div>
      </Wrapper22>
    </div>
  );
}

function AtomeImageBien({ className }: { className?: string }) {
  return (
    <div className={className || "h-[120px] relative w-[160px]"} data-name="atome . image . bien">
      <div className="absolute inset-0 rounded-bl-[16px] rounded-tl-[16px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-tl-[16px] size-full" src={imgRectangle278} />
      </div>
    </div>
  );
}
type ListBienProps = {
  className?: string;
  propriete1?: "défaut light" | "hover light" | "default dark" | "hover dark";
};

function ListBien({ className, propriete1 = "défaut light" }: ListBienProps) {
  const isDefaultDark = propriete1 === "default dark";
  const isDefaultDarkOrHoverDark = ["default dark", "hover dark"].includes(propriete1);
  const isDefautLight = propriete1 === "défaut light";
  const isHoverDark = propriete1 === "hover dark";
  const isHoverLight = propriete1 === "hover light";
  const isHoverLightOrDefaultDarkOrHoverDark = ["hover light", "default dark", "hover dark"].includes(propriete1);
  return (
    <div className={className || `h-[120px] relative rounded-[16px] w-[1199px] ${isHoverDark ? "bg-[#22252b]" : isDefaultDark ? "bg-[#111215]" : isHoverLight ? "bg-[#ecedee]" : "bg-white"}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isHoverDark ? "border-[#333740]" : isDefaultDark ? "border-[#22252b]" : isHoverLight ? "border-[#dadbdd]" : "border-[#ecedee]"}`} />
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
          {isHoverLightOrDefaultDarkOrHoverDark && (
            <>
              <div className="h-[120px] relative shrink-0 w-[333px]" data-name="section . list . bien">
                <Wrapper23>
                  <AtomeImageBien className="h-[120px] relative shrink-0 w-[160px]" />
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[94px]">
                    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
                      <div className={`h-[20px] relative rounded-[16px] shrink-0 ${isHoverDark ? "bg-[#333740]" : isDefaultDark ? "bg-[#444955]" : "bg-[#dadbdd]"}`} data-name="atome . sticker">
                        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isHoverDark ? "border-[#333740]" : "border-[#444955]"}`} />
                        <Wrapper18>
                          <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isHoverDark ? "text-[#d0d1d4]" : isDefaultDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>VENTE</p>
                        </Wrapper18>
                      </div>
                      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/location">
                        <Wrapper9>
                          <path d={svgPaths.p3d149500} id="Vector" stroke={isHoverDark ? "var(--stroke-0, #D0D1D4)" : isDefaultDark ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #444955)"} strokeWidth="1.5" />
                          <path d={svgPaths.p21efb480} id="Vector_2" stroke={isHoverDark ? "var(--stroke-0, #D0D1D4)" : isDefaultDark ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #444955)"} strokeWidth="1.5" />
                          <path d={svgPaths.p1a4bb100} id="Vector_3" opacity="0" stroke={isHoverDark ? "var(--stroke-0, #D0D1D4)" : isDefaultDark ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #444955)"} />
                        </Wrapper9>
                      </div>
                    </div>
                    <AtomeIconTextMedium additionalClassNames="w-full">
                      <ListBienVuesaxLinearTag>
                        <path d={svgPaths.p7410180} id="Vector" stroke={isHoverDark ? "var(--stroke-0, #D0D1D4)" : isDefaultDark ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p24ca100} id="Vector_2" stroke={isHoverDark ? "var(--stroke-0, #D0D1D4)" : isDefaultDark ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeWidth="1.5" />
                        <path d={svgPaths.pe4fd680} id="Vector_3" stroke={isHoverDark ? "var(--stroke-0, #D0D1D4)" : isDefaultDark ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_4" opacity="0" />
                      </ListBienVuesaxLinearTag>
                      <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isHoverDark ? "text-[#d0d1d4]" : isDefaultDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>
                        <p className="leading-[20px]">450 000€</p>
                      </div>
                    </AtomeIconTextMedium>
                  </div>
                </Wrapper23>
              </div>
              <ListBienVerticalDivider84Px>
                <line id="Line 57" stroke={isHoverDark ? "var(--stroke-0, #333740)" : isDefaultDark ? "var(--stroke-0, #22252B)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListBienVerticalDivider84Px>
              <Wrapper12>
                <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
                  <p className={`absolute font-["roboto:SemiBold",sans-serif] leading-[20px] left-0 not-italic text-[16px] top-0 tracking-[0.16px] whitespace-nowrap ${isHoverDark ? "text-[#737780]" : isDefaultDark ? "text-[#444955]" : "text-[#a1a4aa]"}`}>TYPE</p>
                </div>
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                  <Wrapper11>
                    <VuesaxLinearHome>
                      <path d={svgPaths.p550ea80} id="Vector" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M12 17.99V14.99" id="Vector_2" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_3" opacity="0" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} />
                    </VuesaxLinearHome>
                    <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                      <p className="leading-[20px]">T3</p>
                    </div>
                  </Wrapper11>
                  <Wrapper11>
                    <VuesaxLinearFormatSquare>
                      <path d={svgPaths.p3cdc2c00} id="Vector" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p107add00} id="Vector_2" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p28e63f40} id="Vector_3" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p210cb300} id="Vector_4" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p2f229a00} id="Vector_5" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_6" opacity="0" />
                    </VuesaxLinearFormatSquare>
                    <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                      <p className="leading-[20px]">120m²</p>
                    </div>
                  </Wrapper11>
                  <IconDpe className="bg-[#00a774] relative rounded-[16px] shrink-0 size-[20px]" />
                </div>
              </Wrapper12>
              <ListBienVerticalDivider84Px>
                <line id="Line 57" stroke={isHoverDark ? "var(--stroke-0, #333740)" : isDefaultDark ? "var(--stroke-0, #22252B)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListBienVerticalDivider84Px>
              <Wrapper12>
                <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
                  <p className={`absolute font-["roboto:SemiBold",sans-serif] leading-[20px] left-0 not-italic text-[16px] top-0 tracking-[0.16px] whitespace-nowrap ${isHoverDark ? "text-[#737780]" : isDefaultDark ? "text-[#444955]" : "text-[#a1a4aa]"}`}>TRANSACTION</p>
                </div>
                <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
                  <AtomeIconTextMedium additionalClassNames="w-[44px]">
                    <VuesaxLinearArchiveTick>
                      <path d={svgPaths.p1de04b00} id="Vector" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p21906b20} id="Vector_2" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_3" opacity="0" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} />
                    </VuesaxLinearArchiveTick>
                    <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                      <p className="leading-[20px]">2</p>
                    </div>
                  </AtomeIconTextMedium>
                  <Wrapper11>
                    <ListBienVuesaxLinearTag>
                      <path d={svgPaths.p7410180} id="Vector" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p24ca100} id="Vector_2" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeWidth="1.5" />
                      <path d={svgPaths.pe4fd680} id="Vector_3" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_4" opacity="0" />
                    </ListBienVuesaxLinearTag>
                    <IcnCheck />
                  </Wrapper11>
                  <Wrapper11>
                    <VuesaxLinearReceiptText>
                      <path d={svgPaths.p2606a200} id="Vector" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d={svgPaths.pc38d600} id="Vector_2" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <path d="M6 9H12" id="Vector_3" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6.75 13H11.25" id="Vector_4" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_5" opacity="0" />
                    </VuesaxLinearReceiptText>
                    <Wrapper10 additionalClassNames="relative shrink-0 size-[20px]">
                      <path d={svgPaths.p2aa77200} fill={isDefaultDarkOrHoverDark ? "var(--fill-0, #D0D1D4)" : "var(--fill-0, #444955)"} />
                    </Wrapper10>
                  </Wrapper11>
                </div>
              </Wrapper12>
              <ListBienVerticalDivider84Px>
                <line id="Line 57" stroke={isHoverDark ? "var(--stroke-0, #333740)" : isDefaultDark ? "var(--stroke-0, #22252B)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListBienVerticalDivider84Px>
              <Wrapper13>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">
                  <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
                    <p className={`absolute font-["roboto:SemiBold",sans-serif] leading-[20px] left-0 not-italic text-[16px] top-0 tracking-[0.16px] whitespace-nowrap ${isHoverDark ? "text-[#737780]" : isDefaultDark ? "text-[#444955]" : "text-[#a1a4aa]"}`}>ENTRETIEN</p>
                  </div>
                  <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
                    <AtomeIconTextMedium additionalClassNames="w-[70px]">
                      <VuesaxLinearSecuritySafe>
                        <path d={svgPaths.pacd22f0} id="Vector" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Group">
                          <path d={svgPaths.p3e7eb200} id="Vector_2" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                          <path d="M12 12.5V15.5" id="Vector_3" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        </g>
                        <g id="Vector_4" opacity="0" />
                      </VuesaxLinearSecuritySafe>
                      <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                        <p className="leading-[20px]">Crée</p>
                      </div>
                    </AtomeIconTextMedium>
                    <IcnDatabaseMedium>
                      <path d={svgPaths.p2cbf71b0} fill={isDefaultDarkOrHoverDark ? "var(--fill-0, #D0D1D4)" : "var(--fill-0, #444955)"} id="database" />
                    </IcnDatabaseMedium>
                    <Wrapper11>
                      <VuesaxLinearSettings>
                        <path d={svgPaths.p1ae4c70} id="Vector" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M2 12H7" id="Vector_2" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M17 12H22" id="Vector_3" stroke={isDefaultDarkOrHoverDark ? "var(--stroke-0, #D0D1D4)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_4" opacity="0" />
                      </VuesaxLinearSettings>
                      <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                        <p className="leading-[20px]">7 j</p>
                      </div>
                    </Wrapper11>
                  </div>
                </div>
              </Wrapper13>
              <ListBienVerticalDivider84Px>
                <line id="Line 57" stroke={isHoverDark ? "var(--stroke-0, #333740)" : isDefaultDark ? "var(--stroke-0, #22252B)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListBienVerticalDivider84Px>
              <Wrapper8>
                {isDefaultDarkOrHoverDark && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="0 dark" />}
                {isHoverLight && (
                  <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" data-name="atome . ai . suggestion">
                    <div className="absolute bg-[#ecedee] inset-[0_1.47%] rounded-[16px]" data-name="Sticker">
                      <div aria-hidden="true" className="absolute border border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <Wrapper2>
                        <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a4aa] text-[14px] tracking-[0.14px] whitespace-nowrap">0</p>
                      </Wrapper2>
                    </div>
                  </div>
                )}
              </Wrapper8>
            </>
          )}
          {isDefautLight && (
            <>
              <div className="h-[120px] relative shrink-0 w-[333px]" data-name="section . list . bien">
                <Wrapper23>
                  <AtomeImageBien className="h-[120px] relative shrink-0 w-[160px]" />
                  <Wrapper3>
                    <VuesaxLinearTag />
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">450 000€</p>
                    </div>
                  </Wrapper3>
                </Wrapper23>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <SectionListType className="h-[120px] relative shrink-0 w-[220px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <SectionListTransaction className="h-[120px] relative shrink-0 w-[220px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <SectionListEntretien className="h-[120px] relative shrink-0 w-[220px]" />
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <OrganismeListSuggestions />
            </>
          )}
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
            <Wrapper18>
              <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>{isDark ? "LABEL" : "REÇU"}</p>
            </Wrapper18>
          </div>
          <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1={isDark ? "none dark" : undefined} />
          <div className="content-stretch flex items-center relative shrink-0">
            {isLight && (
              <>
                <OrganismeMessageRecuBodySmLightText text="le 12 fév 2026" />
                <OrganismeMessageRecuBodySmLightText text="à 12:47" />
              </>
            )}
            {isDark && (
              <>
                <OrganismeMessageRecuBodySmDarkText text="Body . sm . Regular . 14/16px" />
                <OrganismeMessageRecuBodySmDarkText text="Body . sm . Regular . 14/16px" />
              </>
            )}
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-circle-right">
            <Wrapper14 additionalClassNames="absolute contents inset-0">
              <g id="arrow-circle-right">
                <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d={svgPaths.p1129f1c0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <g id="Vector_3" opacity="0" />
              </g>
            </Wrapper14>
          </div>
        </div>
        <div className={`relative rounded-[16px] shrink-0 w-full ${isDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`}>
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#22252b]" : "border-[#ecedee]"}`} />
          <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
            <BodyMdLight additionalClassNames="shrink-0 w-full">
              <p className={`relative text-[#444955] text-[16px] tracking-[0.16px] ${isDark ? 'font-["roboto:Regular",sans-serif] leading-[20px] not-italic shrink-0 whitespace-nowrap' : 'flex-[1_0_0] font-["Roboto:Regular",sans-serif] font-normal leading-[22px] min-h-px min-w-px'}`} style={isLight ? { fontVariationSettings: "'wdth' 100" } : undefined}>
                {isDark ? "Body . md . Regular . 16/20px" : "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."}
              </p>
            </BodyMdLight>
            <div className={`relative rounded-[16px] shrink-0 ${isDark ? "bg-[#111215]" : "bg-white"}`} data-name="button">
              <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border border-[#111215]" : "border-0 border-[#444955]"}`} />
              <Wrapper15>
                <div className="relative shrink-0 size-[20px]" data-name="icn_attach_file">
                  <div className="absolute bottom-[8.33%] left-[22.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.5px_-2px] mask-size-[24px_24px] right-1/4 top-[8.33%]" data-name="attach_file" style={{ maskImage: `url('${imgConversionPath}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 20">
                      <path d={svgPaths.p2507e0f0} fill="var(--fill-0, #444955)" id="attach_file" />
                    </svg>
                  </div>
                </div>
                <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Button title</p>
              </Wrapper15>
            </div>
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
        <CardGraphIndicateurHelper>
          <div className={`flex flex-col font-["roboto:Bold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] tracking-[0.2px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#333740]"}`}>
            <p className="leading-[24px]">22 fév 2026</p>
          </div>
        </CardGraphIndicateurHelper>
        <CardGraphIndicateurHelper>
          <p className={`font-["roboto:Regular",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>28 réactions positives</p>
        </CardGraphIndicateurHelper>
        <div className="relative shrink-0" data-name="atome . icon + text . medium">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center py-[8px] relative">
              <div className="relative shrink-0 size-[20px]" data-name="icn_arrow_drop_up">
                <div className="absolute inset-[37.5%_29.17%_41.67%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-9px] mask-size-[24px_24px]" data-name="arrow_drop_up" style={{ maskImage: `url('${imgConversionPath}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                    <path d="M0 5L5 0L10 5H0Z" fill="var(--fill-0, #0DA500)" id="arrow_drop_up" />
                  </svg>
                </div>
              </div>
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
          <Wrapper11>
            <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isShadowDark ? "text-[#ecedee]" : "text-[#444955]"}`}>
              <p className="leading-[20px]">{isDefaultLightOrDefaultDark ? "Text" : isShadowDark ? "Label" : "Label"}</p>
            </div>
            <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
              <Wrapper14 additionalClassNames="absolute contents inset-0">
                <g id="arrow-down">
                  <path d={svgPaths.p336ed396} id="Vector" stroke={isShadowDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  {["shadow light", "shadow dark"].includes(propriete1) && <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke={isShadowDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #444955)"} />}
                  {isDefaultLightOrDefaultDark && <g id="Vector_2" opacity="0" />}
                </g>
              </Wrapper14>
            </div>
          </Wrapper11>
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
type CardLogsProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function CardLogs({ className, propriete1 = "default light" }: CardLogsProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || "relative w-[360px]"}>
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[10px] py-[6px] relative w-full">
        <div className="h-0 relative shrink-0 w-full" data-name="horizontal divider . 350 px">
          <div className="absolute bottom-full left-0 right-0 top-0">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                <line id="Line 18" stroke={isDefaultDark ? "var(--stroke-0, #333740)" : "var(--stroke-0, #ECEDEE)"} x2="350" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-start relative shrink-0">
            <Wrapper7>
              <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#444955]" : "text-[#d0d1d4]"}`}>12 fév. 2026</p>
            </Wrapper7>
            <Wrapper7>
              <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#444955]" : "text-[#d0d1d4]"}`}>12:56</p>
            </Wrapper7>
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <Wrapper7>
              <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Auteur</p>
            </Wrapper7>
            <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDefaultDark ? "border-[#d0d1d4]" : "border-[#444955]"}`} />
              <Wrapper18>
                <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isDefaultDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>CATÉGORIE</p>
              </Wrapper18>
            </div>
          </div>
          <Wrapper17 additionalClassNames="shrink-0 w-full">
            <p className={`flex-[1_0_0] font-["roboto:Regular",sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] tracking-[0.14px] ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
          </Wrapper17>
        </div>
      </div>
    </div>
  );
}
type TokenClientIaSuggestionsProps = {
  className?: string;
  propriete1?: "0" | "1" | "2" | "3" | "4";
};

function TokenClientIaSuggestions({ className, propriete1 = "0" }: TokenClientIaSuggestionsProps) {
  const is2 = propriete1 === "2";
  return (
    <div className={className || "h-[24px] relative w-[34px]"}>
      <div className={`absolute inset-[0_1.47%] rounded-[20px] ${["1", "2", "3", "4"].includes(propriete1) ? "bg-[#7b72f9]" : ""}`} data-name="Sticker">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <Wrapper2>
          <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is2 ? "text-white" : "text-[#474747]"}`}>{is2 ? "2" : ["1", "3", "4"].includes(propriete1) ? "label" : "label"}</p>
        </Wrapper2>
      </div>
    </div>
  );
}
type IconButtonMegaProps = {
  className?: string;
  propriete1?: "outlined default light" | "outlined hover light" | "neutral default light" | "branded default light" | "outlined default dark" | "outlined hover dark" | "neutral default dark" | "branded default dark" | "neutral hover light" | "neutral hover dark" | "branded hover dark" | "branded hover light";
};

function IconButtonMega({ className, propriete1 = "outlined default light" }: IconButtonMegaProps) {
  const isNeutralDefaultLightOrBrandedDefaultLightOrBrandedDefaultDarkOr = ["neutral default light", "branded default light", "branded default dark", "neutral default dark", "neutral hover light", "neutral hover dark", "branded hover light", "branded hover dark"].includes(propriete1);
  const isOutlinedDefaultLightOrOutlinedHoverLightOrOutlinedHoverDarkOr = ["outlined default light", "outlined hover light", "outlined hover dark", "outlined default dark"].includes(propriete1);
  return (
    <div className={className || `relative rounded-[28px] size-[70px] ${propriete1 === "neutral hover dark" ? "bg-[#333740]" : ["outlined hover dark", "outlined default dark"].includes(propriete1) ? "" : propriete1 === "neutral default dark" ? "bg-[#111215]" : ["branded default dark", "branded hover light"].includes(propriete1) ? "bg-[#635cc7]" : ["branded default light", "branded hover dark"].includes(propriete1) ? "bg-[#7b72f9]" : ["outlined hover light", "neutral hover light"].includes(propriete1) ? "bg-[#dadbdd]" : "bg-white"}`}>
      <div aria-hidden={isOutlinedDefaultLightOrOutlinedHoverLightOrOutlinedHoverDarkOr ? "true" : undefined} className={propriete1 === "outlined default dark" ? "absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[28px]" : propriete1 === "outlined hover dark" ? "absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[28px]" : isNeutralDefaultLightOrBrandedDefaultLightOrBrandedDefaultDarkOr ? "flex flex-row items-center justify-center size-full" : propriete1 === "outlined hover light" ? "absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[28px]" : "absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[28px]"}>
        {isNeutralDefaultLightOrBrandedDefaultLightOrBrandedDefaultDarkOr && (
          <div className="content-stretch flex items-center justify-center p-[23px] relative size-full">
            <IcnClose additionalClassNames="size-[24px]" />
          </div>
        )}
      </div>
      {isOutlinedDefaultLightOrOutlinedHoverLightOrOutlinedHoverDarkOr && (
        <Wrapper24>
          <IcnClose additionalClassNames="size-[24px]" />
        </Wrapper24>
      )}
    </div>
  );
}

export default function FicheClientProprietaireLightMode() {
  return (
    <div className="bg-white relative size-full" data-name="Fiche Client . propriétaire . light mode">
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
      <IconButtonMega className="absolute bg-white left-[calc(66.67%+62px)] rounded-[28px] size-[70px] top-[39px]" />
      <div className="absolute content-stretch flex items-center justify-between left-[115px] top-[451px] w-[1191px]">
        <Wrapper additionalClassNames="relative shrink-0">
          <span className="leading-[24px]">{`Messages `}</span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            (4)
          </span>
        </Wrapper>
        <div className="relative rounded-[16px] shrink-0" data-name="button">
          <Wrapper15>
            <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Voir tout</p>
            <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
              <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="arrow-right">
                    <path d={svgPaths.p3a9aee80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                    <g id="Vector_2" opacity="0" />
                  </g>
                </svg>
              </div>
            </div>
          </Wrapper15>
        </div>
      </div>
      <FicheClientProprietaireLightModeHelper additionalClassNames="top-[2229px]" />
      <FicheClientProprietaireLightModeHelper additionalClassNames="top-[1891px]" />
      <div className="absolute content-stretch flex gap-[8px] items-center left-[115px] top-[1945px]">
        <H6DesktopLight>
          <span className="leading-[24px]">{`Documents du client `}</span>
          <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            (6)
          </span>
        </H6DesktopLight>
        <Wrapper6 additionalClassNames="relative shrink-0">
          <div className="relative shrink-0 size-[20px]" data-name="Icn_upload">
            <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="upload" style={{ maskImage: `url('${imgUpload}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p31c8a300} fill="var(--fill-0, #444955)" id="upload" />
              </svg>
            </div>
          </div>
        </Wrapper6>
      </div>
      <div className="absolute content-stretch flex gap-[8px] items-center left-[115px] top-[2017px]">
        <div className="bg-white relative rounded-[16px] shrink-0" data-name="button">
          <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <Wrapper15>
            <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Acte de naissance</p>
            <div className="relative shrink-0 size-[20px]" data-name="icn_info">
              <Wrapper21 additionalClassNames="inset-[8.33%] mask-position-[-2px_-2px]">
                <path d={svgPaths.pd379380} fill="var(--fill-0, #444955)" id="info" />
              </Wrapper21>
            </div>
          </Wrapper15>
        </div>
        <Button text="Contrat de réservation" additionalClassNames="gap-[8px] justify-center p-[12px]" />
        <Button text="CNI" additionalClassNames="gap-[8px] justify-center p-[12px]" />
        <Button text="mandat" additionalClassNames="gap-[8px] justify-center p-[12px]" />
        <Button text="Extrait KBis" additionalClassNames="gap-[8px] justify-center p-[12px]" />
        <Button text="Contrat de mariage" additionalClassNames="gap-[8px] justify-center p-[12px]" />
      </div>
      <div className="absolute h-0 left-[115px] top-[1387px] w-[1191px]">
        <Wrapper16>
          <line id="Line 4" stroke="var(--stroke-0, #ECEDEE)" x2="1191" y1="0.5" y2="0.5" />
        </Wrapper16>
      </div>
      <Wrapper additionalClassNames="absolute left-[115px] top-[1441px]">
        <span className="leading-[24px]">{`Biens du client `}</span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[26px] tracking-[0.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          (2)
        </span>
      </Wrapper>
      <div className="absolute bg-white h-[100px] left-[115px] top-0 w-[1191px]" data-name="app bar fiche client">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center py-[27px] relative size-full">
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="bar fiche client light">
              <Wrapper6 additionalClassNames="relative shrink-0">
                <div className="relative shrink-0 size-[20px]" data-name="icn_arrow_left_alt">
                  <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgConversionPath}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                      <path d={svgPaths.p3f7b8a00} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                    </svg>
                  </div>
                </div>
              </Wrapper6>
              <Wrapper5 additionalClassNames="relative shrink-0">
                <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">Jean-Philippe Bertoglio</p>
                </div>
              </Wrapper5>
              <AtomeStickerText text="VENDEUR" />
              <AtomeStickerText text="ACQUÉREUR" />
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
                    {["very low . light", "low . light"].includes("medium . light") && <BodyMdLightText text="Body . md . SemiBold . 16/20px" additionalClassNames="relative shrink-0" />}
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
                    {["medium . light", "high . light"].includes("medium . light") && (
                      <Wrapper7>
                        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{"medium . light" === "high . light" ? "Body . md . SemiBold . 16/20px" : "medium . light" === "medium . light" ? "50" : ""}</p>
                      </Wrapper7>
                    )}
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
                    {"medium . light" === "very high . light" && <BodyMdLightText text="Body . md . SemiBold . 16/20px" additionalClassNames="relative shrink-0" />}
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
              <TokenClientIaSuggestions className="h-[24px] relative shrink-0 w-[34px]" propriete1="2" />
            </div>
          </div>
        </div>
      </div>
      <FicheClientProprietaireLightModeHelper additionalClassNames="top-[763px]" />
      <FicheClientProprietaireLightModeH6DesktopLightText text="Informations de contact" additionalClassNames="top-[817px]" />
      <Wrapper6 additionalClassNames="absolute left-[calc(25%+3px)] top-[817px]">
        <div className="relative shrink-0 size-[20px]" data-name="Icn_edit">
          <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="edit" style={{ maskImage: `url('${imgUpload}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <path d={svgPaths.p3629cf40} fill="var(--fill-0, #444955)" id="edit" />
            </svg>
          </div>
        </div>
      </Wrapper6>
      <BodyMdLightText text="Informations personnelles" additionalClassNames="absolute left-[115px] top-[889px]" />
      <Helper text="Nom" text1="BERTOGLIO" additionalClassNames="left-[115px] top-[935px]" />
      <Helper text="Réside" text1="8 place des Mathurins 75008 Paris. France." additionalClassNames="left-[calc(33.33%+46px)] top-[935px]" />
      <Helper text="Prénom" text1="Jean-Philippe" additionalClassNames="left-[115px] top-[979px]" />
      <Helper text="Né le" text1="12 fév 1962" additionalClassNames="left-[115px] top-[1023px]" />
      <Helper text="Tél. Mobile" text1="06 78 93 02 18" additionalClassNames="left-[calc(33.33%+46px)] top-[1019px]" />
      <Helper text="Profession" text1="Chef d’entreprise" additionalClassNames="left-[calc(58.33%+97px)] top-[935px]" />
      <Helper text="Revenus" text1="80K - 120K€ /an" additionalClassNames="left-[calc(58.33%+97px)] top-[979px]" />
      <Helper text="Email (1)" text1="jp.bertoglio@gmail.com" additionalClassNames="left-[calc(33.33%+46px)] top-[1063px]" />
      <Helper text="Email (2)" text1="-" additionalClassNames="left-[calc(33.33%+46px)] top-[1127px]" />
      <Helper text="À" text1="Annecy" additionalClassNames="left-[115px] top-[1067px]" />
      <Helper text="Statut marital" text1="Célibataire" additionalClassNames="left-[115px] top-[1111px]" />
      <BodyMdLightText text="Informations de contact" additionalClassNames="absolute left-[calc(33.33%+46px)] top-[889px]" />
      <BodyMdLightText text="Informations professionnelles" additionalClassNames="absolute left-[calc(58.33%+97px)] top-[889px]" />
      <FicheClientProprietaireLightModeH6DesktopLightText text="Activité du client" additionalClassNames="top-[2279px]" />
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[115px] top-[2367px] w-[1191px]">
        <CardLogs className="relative shrink-0 w-full" />
        <CardLogs className="relative shrink-0 w-full" />
        <CardLogs className="relative shrink-0 w-full" />
        <CardLogs className="relative shrink-0 w-full" />
      </div>
      <GraphCourbe className="absolute h-[320px] left-[115px] top-[100px] w-[1191px]" />
      <OrganismeMessageRecu className="absolute left-[115px] top-[519px] w-[600px]" />
      <ListBien className="absolute bg-white h-[120px] left-[115px] rounded-[16px] top-[1511px] w-[1199px]" />
      <div className="absolute bg-white h-[120px] left-[115px] rounded-[16px] top-[1648px] w-[1199px]" data-name="list . bien">
        <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
            <div className="h-[120px] relative shrink-0 w-[333px]" data-name="section . list . bien">
              <div className="content-stretch flex flex-col items-start pr-[63px] relative size-full">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                  <div className="h-[120px] relative shrink-0 w-[160px]" data-name="atome . image . bien">
                    <div className="absolute inset-0 rounded-bl-[16px] rounded-tl-[16px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-tl-[16px] size-full" src={imgRectangle279} />
                    </div>
                  </div>
                  <Wrapper3>
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/tag-2">
                      <VuesaxLinearTag1 />
                    </div>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">450 000€</p>
                    </div>
                  </Wrapper3>
                </div>
              </div>
            </div>
            <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
            <SectionListType className="h-[120px] relative shrink-0 w-[220px]" />
            <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
            <SectionListTransaction className="h-[120px] relative shrink-0 w-[220px]" />
            <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
            <SectionListEntretien className="h-[120px] relative shrink-0 w-[220px]" />
            <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
            <OrganismeListSuggestions />
          </div>
        </div>
      </div>
      <OrganismeSuggestion text="Suggestion d’actions pour compléter la fiche contact du client. Suggestion d’actions pour compléter la fiche contact du client" text1="Programmer" additionalClassNames="top-[2093px]" />
      <OrganismeSuggestion text="Suggestion d’actions pour compléter la fiche contact du client. Suggestion d’actions pour compléter la fiche contact du client" text1="Programmer" additionalClassNames="top-[1215px]" />
      <div className="absolute bg-white left-[91.67%] rounded-[28px] size-[70px] top-[15px]" data-name="icon button mega">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <Wrapper24>
          <div className="relative shrink-0 size-[24px]" data-name="icn_history_2">
            <div className="absolute inset-[8.33%_8.33%_8.33%_8.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.051px_-2px] mask-size-[24px_24px]" data-name="history_2" style={{ maskImage: `url('${imgConversionPath}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.95 20">
                <path d={svgPaths.p4062f80} fill="var(--fill-0, #A1A4AA)" id="history_2" />
              </svg>
            </div>
          </div>
        </Wrapper24>
      </div>
      <div className="absolute bottom-0 h-[calc(100%-calc(50%-1043.5px)+0px)] left-0 pointer-events-none top-[calc(50%-1043.5px)]">
        <AgentNavigationRailDesktop className="-translate-y-1/2 bg-white h-[1024px] pointer-events-auto sticky top-0 w-[90px]" />
      </div>
    </div>
  );
}