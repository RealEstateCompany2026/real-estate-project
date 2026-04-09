import clsx from "clsx";
import imgPropriete1DefaultLight from "figma:asset/ae63bbca1a8511d4e4bf069f0d6e0eabea84b9c1.png";
import imgPropriete1DefaultDark from "figma:asset/745eb8075f4b0dbca29e929762ec0e878857f203.png";
import svgPaths from "./svg-4zldoswgpg";
import { imgConversionPath, imgAdd, imgSearch, imgArrowDropDown } from "./svg-ywd7h";
import imgEllipse4 from "figma:asset/38f078296e38a0b1610ab714d659cb7e61dcac65.png";

function Wrapper14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pl-[28px] pr-[47px] py-[28px] relative size-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[258px]">{children}</div>
    </div>
  );
}
type Wrapper13Props = {
  additionalClassNames?: string;
};

function Wrapper13({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper13Props>) {
  return (
    <div style={{ maskImage: `url('${imgConversionPath}')` }} className={clsx("absolute mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_24px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        {children}
      </svg>
    </div>
  );
}

function Wrapper12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgConversionPath}')` }} className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}
type Wrapper10Props = {
  additionalClassNames?: string;
};

function Wrapper10({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper10Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function OrganismeListSuggestions({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[120px] relative shrink-0 w-[88px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[19px] pr-[38px] py-[48px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[120px] relative shrink-0 w-[220px]">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">{children}</div>
      </div>
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

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[44px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper10 additionalClassNames="absolute contents inset-0">
      <g id="arrow-down">{children}</g>
    </Wrapper10>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgConversionPath}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function ListAffaireVuesaxLinearGallery({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper10 additionalClassNames="absolute contents inset-0">
        <g id="gallery">{children}</g>
      </Wrapper10>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
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

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper10 additionalClassNames="absolute contents inset-0">
        <g id="profile-circle">{children}</g>
      </Wrapper10>
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

function AtomeIconIcon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <ListAffaireVuesaxLinearDocumentText />
      <Wrapper5>{children}</Wrapper5>
    </Wrapper4>
  );
}

function ListAffaireVerticalDivider84Px({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[84px] relative shrink-0 w-0">
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}
type AtomeTextIconSmallTextProps = {
  text: string;
};

function AtomeTextIconSmallText({ text }: AtomeTextIconSmallTextProps) {
  return (
    <Wrapper4>
      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">{text}</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/arrow-down">
        <VuesaxLinearArrowDown />
      </div>
    </Wrapper4>
  );
}

function IconButton() {
  return (
    <Wrapper6>
      <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
        <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
          </svg>
        </div>
      </div>
    </Wrapper6>
  );
}

function VuesaxLinearArrowDown() {
  return (
    <Wrapper7>
      <path d={svgPaths.p336ed396} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
      <g id="Vector_2" opacity="0" />
    </Wrapper7>
  );
}

function IcnCheck() {
  return (
    <Wrapper5>
      <path d={svgPaths.p23b3580} fill="var(--fill-0, #0DA500)" id="check" />
    </Wrapper5>
  );
}

function AtomeIconIcon() {
  return (
    <Wrapper4>
      <ListAffaireVuesaxLinearDocumentText />
      <IcnCheck />
    </Wrapper4>
  );
}
type ListAffaireAtomeTitleSectionListTextProps = {
  text: string;
};

function ListAffaireAtomeTitleSectionListText({ text }: ListAffaireAtomeTitleSectionListTextProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['roboto:SemiBold',sans-serif] leading-[20px] left-0 not-italic text-[#d0d1d4] text-[16px] top-0 tracking-[0.16px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function ListAffaireVuesaxLinearJudge() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper10 additionalClassNames="absolute contents inset-0">
        <g id="judge">
          <path d={svgPaths.p19f2fc40} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p180c6c80} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M2 21H8" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p368d0e80} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </Wrapper10>
    </div>
  );
}

function ListAffaireVuesaxLinearMoneyRecive() {
  return (
    <Wrapper10 additionalClassNames="relative shrink-0 size-[20px]">
      <g id="vuesax/linear/money-recive">
        <g id="Group">
          <path d={svgPaths.p1c91d800} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 7.5V16.5" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <path d={svgPaths.p3bbf0400} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M17 3V7H21" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M22 2L17 7" id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_6" opacity="0" />
      </g>
    </Wrapper10>
  );
}
type WrapperProps = {
  text: string;
  text1: string;
};

function Wrapper({ text, text1, children }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">
      <Wrapper8>
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/direct-inbox">
          <Wrapper10 additionalClassNames="absolute contents inset-0">
            <g id="direct-inbox">
              <path d="M12 2V9L14 7" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M12 9L10 7" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p1fe19180} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p147d7800} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Vector_5" opacity="0" />
            </g>
          </Wrapper10>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">{"8"}</p>
        </div>
      </Wrapper8>
      <Wrapper8>
        <div className="relative shrink-0 size-[20px]" data-name="icn_door_front">
          <Wrapper11>
            <path d={svgPaths.p1563d300} fill="var(--fill-0, #444955)" id="door_front" />
          </Wrapper11>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">{text}</p>
        </div>
      </Wrapper8>
      <Wrapper8>
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/heart">
          <Wrapper10 additionalClassNames="absolute contents inset-0">
            <g id="heart">{children}</g>
          </Wrapper10>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">{text1}</p>
        </div>
      </Wrapper8>
    </div>
  );
}

function ListAffaireVuesaxLinearDocumentText() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <Wrapper10 additionalClassNames="absolute contents inset-0">
        <g id="document-text">
          <path d={svgPaths.p42a4a00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p35359700} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M8 13H12" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M8 17H16" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </Wrapper10>
    </div>
  );
}
type ListAffaireAtomeIconTextMediumTextProps = {
  text: string;
};

function ListAffaireAtomeIconTextMediumText({ text }: ListAffaireAtomeIconTextMediumTextProps) {
  return (
    <Wrapper8>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/message-notif">
        <Wrapper10 additionalClassNames="absolute contents inset-0">
          <g id="message-notif">
            <path d={svgPaths.p1f74b800} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p32688800} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M15.9965 11H16.0054" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M11.9945 11H12.0035" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M7.99451 11H8.00349" id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g id="Vector_6" opacity="0" />
          </g>
        </Wrapper10>
      </div>
      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] w-[41px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </Wrapper8>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text, children }: React.PropsWithChildren<Text2Props>) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Wrapper4>
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/home-2">
          <Wrapper10 additionalClassNames="absolute contents inset-0">
            <g id="home-2">{children}</g>
          </Wrapper10>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">{text}</p>
        </div>
      </Wrapper4>
      <Wrapper4>
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/format-square">
          <Wrapper10 additionalClassNames="absolute contents inset-0">
            <g id="format-square">
              <path d={svgPaths.p3cdc2c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p107add00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p28e63f40} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p210cb300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p2f229a00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Vector_6" opacity="0" />
            </g>
          </Wrapper10>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">{"120m²"}</p>
        </div>
      </Wrapper4>
      <Wrapper4>
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/tag-2">
          <Wrapper10 additionalClassNames="absolute contents inset-0">
            <g id="tag-2">
              <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
              <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <g id="Vector_4" opacity="0" />
            </g>
          </Wrapper10>
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">{"450 000€"}</p>
        </div>
      </Wrapper4>
    </div>
  );
}

function VuesaxLinearProfileCircle() {
  return (
    <Wrapper2>
      <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d={svgPaths.p1a4bb100} id="Vector_4" opacity="0" stroke="var(--stroke-0, #444955)" />
    </Wrapper2>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
        <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">{text}</p>
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
type ButtonNavBienProps = {
  className?: string;
  propriete1?: "default light" | "hover light" | "Selected light" | "Selected dark" | "hover dark" | "default dark";
};

function ButtonNavBien({ className, propriete1 = "default light" }: ButtonNavBienProps) {
  const isSelectedDark = propriete1 === "Selected dark";
  return (
    <div className={className || `h-[50px] relative rounded-[16px] w-[68px] ${isSelectedDark ? "bg-[#22252b]" : propriete1 === "hover dark" ? "bg-[#333740]" : propriete1 === "Selected light" ? "bg-[#ecedee]" : propriete1 === "hover light" ? "bg-[#dadbdd]" : ""}`}>
      <Wrapper12>
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
      </Wrapper12>
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
                  <Wrapper12>
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
                  </Wrapper12>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper12>
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
                  </Wrapper12>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper12>
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
                  </Wrapper12>
                </div>
                <ButtonNavBien className="h-[50px] relative rounded-[16px] shrink-0 w-full" propriete1={isDark ? "default dark" : undefined} />
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper12>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_content_paste">
                      <Wrapper13 additionalClassNames="inset-[4.17%_12.5%_12.5%_12.5%] mask-position-[-3px_-1px]">
                        <path d={svgPaths.p32cd3180} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="content_paste" />
                      </Wrapper13>
                    </div>
                  </Wrapper12>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper12>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_data_table">
                      <Wrapper11>
                        <path d={svgPaths.p3cf36d00} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="data_table" />
                      </Wrapper11>
                    </div>
                  </Wrapper12>
                </div>
              </div>
              <AgentNavigationRailDesktopHelper>
                <line id="Line 49" stroke={isDark ? "var(--stroke-0, #737780)" : "var(--stroke-0, #A1A4AA)"} x2="10" y1="0.5" y2="0.5" />
              </AgentNavigationRailDesktopHelper>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper12>
                    <div className="absolute contents left-0 top-0">
                      <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
                    </div>
                    <div className="relative shrink-0 size-[24px]" data-name="icn_calendar_today">
                      <Wrapper13 additionalClassNames="inset-[8.33%_12.5%] mask-position-[-3px_-2px]">
                        <path d={svgPaths.p1fd79700} fill={(isDark ? "default dark" : undefined) === "default dark" ? "var(--fill-0, #737780)" : ["hover light", "Selected light", "hover dark", "Selected dark"].includes(isDark ? "default dark" : undefined) ? "var(--fill-0, #444955)" : "var(--fill-0, #A1A4AA)"} id="calendar_today" />
                      </Wrapper13>
                    </div>
                  </Wrapper12>
                </div>
                <div className="h-[50px] relative rounded-[16px] shrink-0 w-full">
                  <Wrapper12>
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
                  </Wrapper12>
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
          <Wrapper4>
            <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isShadowDark ? "text-[#ecedee]" : "text-[#444955]"}`}>
              <p className="leading-[20px]">{isDefaultLightOrDefaultDark ? "Text" : isShadowDark ? "Label" : "Label"}</p>
            </div>
            <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
              <Wrapper7>
                <path d={svgPaths.p336ed396} id="Vector" stroke={isShadowDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #444955)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                {["shadow light", "shadow dark"].includes(propriete1) && <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke={isShadowDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #444955)"} />}
                {isDefaultLightOrDefaultDark && <g id="Vector_2" opacity="0" />}
              </Wrapper7>
            </div>
          </Wrapper4>
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
        <Wrapper3>
          <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is0Dark ? "text-[#444955]" : is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : is1Light ? "text-white" : "text-[#a1a4aa]"}`}>{is2LightOr3LightOr4LightOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : is1Light ? "1" : is0Dark ? "0" : "0"}</p>
        </Wrapper3>
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
type ListAffaireProps = {
  className?: string;
  propriete1?: "Défaut light" | "hover light" | "Défaut dark" | "hover dark";
};

function ListAffaire({ className, propriete1 = "Défaut light" }: ListAffaireProps) {
  const isDefautDark = propriete1 === "Défaut dark";
  const isDefautDarkOrHoverDark = ["Défaut dark", "hover dark"].includes(propriete1);
  const isDefautLight = propriete1 === "Défaut light";
  const isHoverDark = propriete1 === "hover dark";
  const isHoverLight = propriete1 === "hover light";
  const isHoverLightOrDefautDarkOrHoverDark = ["hover light", "Défaut dark", "hover dark"].includes(propriete1);
  return (
    <div className={className || `relative rounded-[16px] w-[1201px] ${isHoverDark ? "bg-[#22252b]" : isDefautDark ? "bg-[#111215]" : isHoverLight ? "" : "bg-white"}`}>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative w-full">
        <div className={`h-[120px] relative rounded-[16px] shrink-0 w-full ${isHoverDark ? "bg-[#22252b]" : isDefautDark ? "bg-[#111215]" : isHoverLight ? "bg-[#ecedee]" : "bg-white"}`}>
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isHoverDark ? "border-[#333740]" : isDefautDark ? "border-[#22252b]" : isHoverLight ? "border-[#dadbdd]" : "border-[#ecedee]"}`} />
        </div>
        <div className="absolute content-stretch flex gap-[15px] items-center left-0 top-0 w-[1201px]">
          {isHoverLightOrDefautDarkOrHoverDark && (
            <>
              <div className="h-[120px] relative shrink-0 w-[333px]" data-name="section . list . affaire">
                <Wrapper14>
                  <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                    <div className={`h-[20px] relative rounded-[16px] shrink-0 ${isDefautDarkOrHoverDark ? "" : "bg-[#dadbdd]"}`} data-name="atome . sticker">
                      <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <Text1 text="VENTE" />
                    </div>
                    {isDefautDarkOrHoverDark && (
                      <>
                        <div className="h-[20px] relative shrink-0 w-[74px]" data-name="atome . id affaire">
                          <div className="absolute flex flex-col font-['roboto:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                            <p className="leading-[20px]">55679201</p>
                          </div>
                        </div>
                        <Wrapper2>
                          <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Vector_4" opacity="0" />
                        </Wrapper2>
                      </>
                    )}
                    {isHoverLight && (
                      <>
                        <AtomeIdAffaire className="h-[20px] relative shrink-0 w-[74px]" />
                        <VuesaxLinearProfileCircle />
                      </>
                    )}
                  </div>
                  <Text2 text="T3">
                    <path d={svgPaths.p550ea80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    {isDefautDarkOrHoverDark && <g id="Vector_3" opacity="0" />}
                    {isHoverLight && <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />}
                  </Text2>
                </Wrapper14>
              </div>
              <ListAffaireVerticalDivider84Px>
                <line id="Line 57" stroke={isDefautDarkOrHoverDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListAffaireVerticalDivider84Px>
              <Wrapper9>
                <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
                  <p className={`absolute font-["roboto:SemiBold",sans-serif] leading-[20px] left-0 not-italic text-[16px] top-0 tracking-[0.16px] whitespace-nowrap ${isDefautDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#a1a4aa]"}`}>DOSSIER</p>
                </div>
                <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
                  <ListAffaireAtomeIconTextMediumText text="1" />
                  <AtomeIconIcon1>
                    <path d={svgPaths.p23b3580} fill={isDefautDarkOrHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="check" />
                  </AtomeIconIcon1>
                  <Wrapper4>
                    <ListAffaireVuesaxLinearGallery>
                      <path d={svgPaths.pcd9f0c0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p389ef100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pdb12900} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      {isDefautDarkOrHoverDark && <g id="Vector_4" opacity="0" />}
                      {isHoverLight && <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_4" opacity="0" stroke="var(--stroke-0, #444955)" />}
                    </ListAffaireVuesaxLinearGallery>
                    <Wrapper5>
                      <path d={svgPaths.p23b3580} fill={isDefautDarkOrHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="check" />
                    </Wrapper5>
                  </Wrapper4>
                </div>
              </Wrapper9>
              <ListAffaireVerticalDivider84Px>
                <line id="Line 57" stroke={isDefautDarkOrHoverDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListAffaireVerticalDivider84Px>
              <Wrapper9>
                <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
                  <p className={`absolute font-["roboto:SemiBold",sans-serif] leading-[20px] left-0 not-italic text-[16px] top-0 tracking-[0.16px] whitespace-nowrap ${isDefautDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#a1a4aa]"}`}>PROMOTION</p>
                </div>
                <Wrapper text="3" text1="1">
                  <path d={svgPaths.p1a0d8200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  {isDefautDarkOrHoverDark && <g id="Vector_2" opacity="0" />}
                  {isHoverLight && <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_2" opacity="0" stroke="var(--stroke-0, #444955)" />}
                </Wrapper>
              </Wrapper9>
              <ListAffaireVerticalDivider84Px>
                <line id="Line 57" stroke={isDefautDarkOrHoverDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListAffaireVerticalDivider84Px>
              <Wrapper9>
                <div className="h-[20px] relative shrink-0 w-full" data-name="atome . title section list">
                  <p className={`absolute font-["roboto:SemiBold",sans-serif] leading-[20px] left-0 not-italic text-[16px] top-0 tracking-[0.16px] whitespace-nowrap ${isDefautDarkOrHoverDark ? "text-[#d0d1d4]" : "text-[#a1a4aa]"}`}>CLOSING</p>
                </div>
                <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">
                  <AtomeIconIcon1>
                    <path d={svgPaths.p23b3580} fill={isDefautDarkOrHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="check" />
                  </AtomeIconIcon1>
                  <Wrapper4>
                    <ListAffaireVuesaxLinearMoneyRecive />
                    <Wrapper5>
                      <path d={svgPaths.p23b3580} fill={isDefautDarkOrHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="check" />
                    </Wrapper5>
                  </Wrapper4>
                  <Wrapper4>
                    <ListAffaireVuesaxLinearJudge />
                    <Wrapper5>
                      <path d={svgPaths.p23b3580} fill={isDefautDarkOrHoverDark ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="check" />
                    </Wrapper5>
                  </Wrapper4>
                </div>
              </Wrapper9>
              <ListAffaireVerticalDivider84Px>
                <line id="Line 57" stroke={isDefautDarkOrHoverDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #DADBDD)"} x2="84" y1="0.5" y2="0.5" />
              </ListAffaireVerticalDivider84Px>
              <OrganismeListSuggestions>
                <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" data-name="atome . ai . suggestion">
                  <div className={`absolute inset-[0_1.47%] rounded-[16px] ${isDefautDarkOrHoverDark ? "" : "bg-[#ecedee]"}`} data-name="Sticker">
                    <div aria-hidden="true" className="absolute border border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <Wrapper3>
                      <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a4aa] text-[14px] tracking-[0.14px] whitespace-nowrap">0</p>
                    </Wrapper3>
                  </div>
                </div>
              </OrganismeListSuggestions>
            </>
          )}
          {isDefautLight && (
            <>
              <div className="h-[120px] relative shrink-0 w-[333px]" data-name="section . list . affaire">
                <Wrapper14>
                  <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                    <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
                      <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
                      <Text1 text="VENTE" />
                    </div>
                    <AtomeIdAffaire className="h-[20px] relative shrink-0 w-[74px]" />
                    <VuesaxLinearProfileCircle />
                  </div>
                  <Text2 text="T3">
                    <path d={svgPaths.p550ea80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                  </Text2>
                </Wrapper14>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <Wrapper9>
                <ListAffaireAtomeTitleSectionListText text="DOSSIER" />
                <div className="content-stretch flex gap-[28px] items-center relative shrink-0">
                  <ListAffaireAtomeIconTextMediumText text="1" />
                  <AtomeIconIcon />
                  <Wrapper4>
                    <ListAffaireVuesaxLinearGallery>
                      <path d={svgPaths.pcd9f0c0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p389ef100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.pdb12900} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_4" opacity="0" stroke="var(--stroke-0, #444955)" />
                    </ListAffaireVuesaxLinearGallery>
                    <IcnCheck />
                  </Wrapper4>
                </div>
              </Wrapper9>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <Wrapper9>
                <ListAffaireAtomeTitleSectionListText text="PROMOTION" />
                <Wrapper text="3" text1="1">
                  <path d={svgPaths.p1a0d8200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M23.5 0.5V23.5H0.5V0.5H23.5Z" id="Vector_2" opacity="0" stroke="var(--stroke-0, #444955)" />
                </Wrapper>
              </Wrapper9>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <Wrapper9>
                <ListAffaireAtomeTitleSectionListText text="CLOSING" />
                <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">
                  <AtomeIconIcon />
                  <Wrapper4>
                    <ListAffaireVuesaxLinearMoneyRecive />
                    <IcnCheck />
                  </Wrapper4>
                  <Wrapper4>
                    <ListAffaireVuesaxLinearJudge />
                    <IcnCheck />
                  </Wrapper4>
                </div>
              </Wrapper9>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <OrganismeListSuggestions>
                <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />
              </OrganismeListSuggestions>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ListAffairesBiensEnVenteLightMode() {
  return (
    <div className="bg-white relative size-full" data-name="list affaires . Biens en vente . light mode">
      <AgentNavigationRailDesktop className="-translate-y-1/2 absolute bg-white h-[1024px] left-0 top-[calc(50%-603px)] w-[90px]" />
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
                      <p className="leading-[34px]">Affaires</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[16px] shrink-0" data-name="button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                    <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Categorie</p>
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-down">
                      <VuesaxLinearArrowDown />
                    </div>
                  </div>
                </div>
              </div>
              <IconButton />
              <Wrapper6>
                <div className="relative shrink-0 size-[20px]" data-name="icn_search">
                  <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p2e267b00} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                    </svg>
                  </div>
                </div>
              </Wrapper6>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[115px] top-[500px] w-[1201px]">
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="relative rounded-[16px] shrink-0 w-full" propriete1="hover light" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
        <ListAffaire className="bg-white relative rounded-[16px] shrink-0 w-full" />
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-[115px] top-[1883px] w-[1201px]">
        <div className="h-[50px] relative rounded-[10px] shrink-0" data-name="dropdown">
          <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,minmax(0,1fr))] h-full inline-grid px-[10px] py-[6px] relative">
            <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="chips_label_icn_droite">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pr-[6px] relative">
                  <div className="relative shrink-0" data-name="Form label">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[10px] py-[6px] relative">
                        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#6d6d6d] text-[16px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          24
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
        <div className="bg-white h-[54px] relative rounded-[20px] shrink-0 w-[117px]" data-name="button . pagination">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[7px] py-[4px] relative size-full">
              <Wrapper6>
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-left">
                  <Wrapper10 additionalClassNames="absolute contents inset-0">
                    <g id="arrow-left">
                      <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_2" opacity="0" />
                    </g>
                  </Wrapper10>
                </div>
              </Wrapper6>
              <Wrapper6 additionalClassNames="bg-[#dadbdd]">
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                  <Wrapper10 additionalClassNames="absolute contents inset-0">
                    <g id="arrow-right">
                      <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #333740)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_2" opacity="0" />
                    </g>
                  </Wrapper10>
                </div>
              </Wrapper6>
            </div>
          </div>
        </div>
      </div>
      <GraphCourbe className="absolute h-[320px] left-[115px] top-[100px] w-[1191px]" />
      <div className="absolute content-stretch flex gap-[20px] items-center left-[115px] top-[438px]">
        <AtomeTextIconSmallText text="Filtre 01" />
        <AtomeTextIconSmallText text="Filtre 02" />
        <IconButton />
      </div>
    </div>
  );
}