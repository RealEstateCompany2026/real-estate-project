import clsx from "clsx";
import svgPaths from "./svg-hegq8i5hi5";
import { imgDatabase, imgCheck, imgSectionListTransaction, imgSectionListEntretien } from "./svg-cnb6t";
import imgRectangle278 from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";
type Wrapper12Props = {
  additionalClassNames?: string;
};

function Wrapper12({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper12Props>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <ListBienHelper additionalClassNames="absolute contents inset-0">{children}</ListBienHelper>
    </div>
  );
}
type ListBienHelperProps = {
  additionalClassNames?: string;
};

function ListBienHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<ListBienHelperProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pr-[63px] relative size-full">
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">{children}</div>
    </div>
  );
}
type Wrapper10Props = {
  additionalClassNames?: string;
};

function Wrapper10({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper10Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function VuesaxLinearArchiveTick({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/archive-tick">
        {children}
      </div>
    </div>
  );
}

function VuesaxLinearSettings({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/settings">
        {children}
      </div>
    </div>
  );
}

function VuesaxLinearSecuritySafe({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/security-safe">
        {children}
      </div>
    </div>
  );
}

function Wrapper9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/tag-2">
        {children}
      </div>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[195px]">{children}</div>
    </div>
  );
}

function OrganismeListSuggestions({ children }: React.PropsWithChildren<{}>) {
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
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
      <div className="h-[20px] relative rounded-[16px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
            <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">{"VENTE"}</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/location">
        <div className="absolute contents inset-0" data-name="vuesax/linear/location">
          {children}
        </div>
      </div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper8>
      <AtomeTitleSectionListText text="TYPE" />
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">{children}</div>
    </Wrapper8>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper8>
      <AtomeTitleSectionListText text="TRANSACTION" />
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">{children}</div>
    </Wrapper8>
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

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">
        <AtomeTitleSectionListText text="ENTRETIEN" />
        <div className="content-stretch flex gap-[26px] items-center relative shrink-0">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center relative size-full">
        <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[16px]">{children}</p>
        </div>
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

function ListBienVerticalDivider84Px() {
  return (
    <div className="h-[84px] relative shrink-0 w-0">
      <Wrapper>
        <line id="Line 57" stroke="var(--stroke-0, #ECEDEE)" x2="84" y1="0.5" y2="0.5" />
      </Wrapper>
    </div>
  );
}

function ListBienVuesaxLinearTag() {
  return (
    <Wrapper9>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tag-2">
          <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </Wrapper9>
  );
}

function Image() {
  return (
    <div className="absolute inset-0 rounded-bl-[16px] rounded-tl-[16px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-tl-[16px] size-full" src={imgRectangle278} />
    </div>
  );
}

function VuesaxLinearTag() {
  return (
    <Wrapper9>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="tag-2">
          <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </Wrapper9>
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
type AtomeAiSuggestionProps = {
  className?: string;
  propriete1?: "0 light" | "1 light" | "2 light" | "3 light" | "4 light" | "0 dark" | "4 dark" | "3 dark" | "2 dark" | "1 dark";
};

function AtomeAiSuggestion({ className, propriete1 = "0 light" }: AtomeAiSuggestionProps) {
  const is1LightOr2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4 = ["1 light", "2 light", "3 light", "4 light", "0 dark", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1);
  return (
    <div className={className || "h-[24px] relative rounded-[16px] w-[34px]"}>
      <div className={`absolute inset-[0_1.47%] rounded-[16px] ${["1 light", "2 light", "3 light", "4 light", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "bg-[#7b72f9]" : ""}`} data-name="Sticker">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${["1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "border-[#968ffa]" : propriete1 === "0 dark" ? "border-[#444955]" : ["1 light", "2 light", "3 light", "4 light"].includes(propriete1) ? "border-[#635cc7]" : "border-[#a1a4aa]"}`} />
        <Wrapper1>
          <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is1LightOr2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4 ? "text-[#474747]" : "text-[#a1a4aa]"}`}>{is1LightOr2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4 ? "label" : "0"}</p>
        </Wrapper1>
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
      <Wrapper>
        <line id="Line 57" stroke={propriete1 === "hover dark" ? "var(--stroke-0, #333740)" : propriete1 === "default dark" ? "var(--stroke-0, #22252B)" : propriete1 === "hover light" ? "var(--stroke-0, #DADBDD)" : "var(--stroke-0, #ECEDEE)"} x2="84" y1="0.5" y2="0.5" />
      </Wrapper>
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
      <Wrapper2>{isG ? "G" : isF ? "F" : isE ? "E" : isD ? "D" : isC ? "C" : isB ? "B" : "A"}</Wrapper2>
    </div>
  );
}
type ListBienProps = {
  className?: string;
  propriete1?: "défaut light" | "hover light" | "default dark" | "hover dark";
};

function ListBien({ className, propriete1 = "défaut light" }: ListBienProps) {
  const isDefaultDark = propriete1 === "default dark";
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
                <Wrapper11>
                  <div className="h-[120px] relative shrink-0 w-[160px]" data-name="atome . image . bien">
                    <Image />
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[94px]">
                    <Wrapper7>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p3d149500} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                          <path d={svgPaths.p21efb480} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                          <g id="Vector_3" opacity="0" />
                        </g>
                      </svg>
                    </Wrapper7>
                    <AtomeIconTextMedium additionalClassNames="w-full">
                      <ListBienVuesaxLinearTag />
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">450 000€</p>
                      </div>
                    </AtomeIconTextMedium>
                  </div>
                </Wrapper11>
              </div>
              <ListBienVerticalDivider84Px />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="section . list . type">
                <Wrapper6>
                  <Wrapper4>
                    <Wrapper12>
                      <g id="home-2">
                        <path d={svgPaths.p550ea80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_3" opacity="0" />
                      </g>
                    </Wrapper12>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">T3</p>
                    </div>
                  </Wrapper4>
                  <Wrapper4>
                    <Wrapper12>
                      <g id="format-square">
                        <path d={svgPaths.p3cdc2c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p107add00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p28e63f40} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p210cb300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p2f229a00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_6" opacity="0" />
                      </g>
                    </Wrapper12>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">120m²</p>
                    </div>
                  </Wrapper4>
                  <div className="bg-[#00a774] relative rounded-[16px] shrink-0 size-[20px]" data-name="icon . dpe">
                    <Wrapper2>A</Wrapper2>
                  </div>
                </Wrapper6>
              </div>
              <ListBienVerticalDivider84Px />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="section . list . transaction">
                <Wrapper5>
                  <AtomeIconTextMedium additionalClassNames="w-[44px]">
                    <VuesaxLinearArchiveTick>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="archive-tick">
                          <path d={svgPaths.p1de04b00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p21906b20} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Vector_3" opacity="0" />
                        </g>
                      </svg>
                    </VuesaxLinearArchiveTick>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">2</p>
                    </div>
                  </AtomeIconTextMedium>
                  <Wrapper4>
                    <ListBienVuesaxLinearTag />
                    <div className="relative shrink-0 size-[20px]" data-name="icn_check">
                      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgSectionListTransaction}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
                          <path d={svgPaths.p23b3580} fill="var(--fill-0, #444955)" id="check" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper4>
                  <Wrapper4>
                    <ListBienHelper additionalClassNames="relative shrink-0 size-[20px]">
                      <g id="vuesax/linear/receipt-text">
                        <path d={svgPaths.p2606a200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.pc38d600} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d="M6 9H12" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M6.75 13H11.25" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </ListBienHelper>
                    <div className="relative shrink-0 size-[20px]" data-name="icn_close">
                      <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgSectionListTransaction}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d={svgPaths.p2aa77200} fill="var(--fill-0, #444955)" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper4>
                </Wrapper5>
              </div>
              <ListBienVerticalDivider84Px />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="section . list . entretien">
                <Wrapper3>
                  <AtomeIconTextMedium additionalClassNames="w-[70px]">
                    <VuesaxLinearSecuritySafe>
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
                    </VuesaxLinearSecuritySafe>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">Crée</p>
                    </div>
                  </AtomeIconTextMedium>
                  <div className="relative shrink-0 size-[20px]" data-name="icn_database_medium">
                    <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database" style={{ maskImage: `url('${imgSectionListEntretien}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={svgPaths.p2cbf71b0} fill="var(--fill-0, #444955)" id="database" />
                      </svg>
                    </div>
                  </div>
                  <Wrapper4>
                    <VuesaxLinearSettings>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="settings">
                          <path d={svgPaths.p1ae4c70} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M2 12H7" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M17 12H22" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Vector_4" opacity="0" />
                        </g>
                      </svg>
                    </VuesaxLinearSettings>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">7 j</p>
                    </div>
                  </Wrapper4>
                </Wrapper3>
              </div>
              <ListBienVerticalDivider84Px />
              <OrganismeListSuggestions>
                <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" data-name="atome . ai . suggestion">
                  <div className="absolute inset-[0_1.47%] rounded-[16px]" data-name="Sticker">
                    <div aria-hidden="true" className="absolute border border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    <Wrapper1>
                      <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a4aa] text-[14px] tracking-[0.14px] whitespace-nowrap">0</p>
                    </Wrapper1>
                  </div>
                </div>
              </OrganismeListSuggestions>
            </>
          )}
          {isDefautLight && (
            <>
              <div className="h-[120px] relative shrink-0 w-[333px]" data-name="section . list . bien">
                <Wrapper11>
                  <div className="h-[120px] relative shrink-0 w-[160px]" data-name="atome . image . bien">
                    <Image />
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[94px]">
                    <Wrapper7>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.p3cede380} id="Vector" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                          <path d={svgPaths.p31303b00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeWidth="1.5" />
                          <path d={svgPaths.p304c5900} id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                        </g>
                      </svg>
                    </Wrapper7>
                    <AtomeIconTextMedium additionalClassNames="w-full">
                      <VuesaxLinearTag />
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">450 000€</p>
                      </div>
                    </AtomeIconTextMedium>
                  </div>
                </Wrapper11>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="section . list . type">
                <Wrapper6>
                  <Wrapper4>
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/home-2">
                      <Wrapper10 additionalClassNames="absolute contents inset-0">
                        <g id="home-2">
                          <path d={svgPaths.p11095310} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M10 14.9917V12.4917" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                        </g>
                      </Wrapper10>
                    </div>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">T3</p>
                    </div>
                  </Wrapper4>
                  <Wrapper4>
                    <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/format-square">
                      <Wrapper10 additionalClassNames="absolute contents inset-0">
                        <g id="format-square">
                          <path d={svgPaths.p9818000} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.pa852840} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p169aca80} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.pcf2c780} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p699ac00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Vector_6" opacity="0" />
                        </g>
                      </Wrapper10>
                    </div>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">120m²</p>
                    </div>
                  </Wrapper4>
                  <IconDpe className="bg-[#00a774] relative rounded-[16px] shrink-0 size-[20px]" />
                </Wrapper6>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="section . list . transaction">
                <Wrapper5>
                  <AtomeIconTextMedium additionalClassNames="w-[44px]">
                    <VuesaxLinearArchiveTick>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="archive-tick">
                          <path d={svgPaths.p16073380} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p2fb40900} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                        </g>
                      </svg>
                    </VuesaxLinearArchiveTick>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">2</p>
                    </div>
                  </AtomeIconTextMedium>
                  <Wrapper4>
                    <VuesaxLinearTag />
                    <div className="relative shrink-0 size-[20px]" data-name="icn_check">
                      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
                          <path d={svgPaths.p12294b00} fill="var(--fill-0, #0DA500)" id="check" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper4>
                  <Wrapper4>
                    <Wrapper10 additionalClassNames="relative shrink-0 size-[20px]">
                      <g id="vuesax/linear/receipt-text">
                        <path d={svgPaths.p39feaa00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p3e7ea80} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d="M5 7.5H10" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M5.625 10.8333H9.375" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </Wrapper10>
                    <div className="relative shrink-0 size-[20px]" data-name="icn_close">
                      <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgCheck}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                          <path d={svgPaths.p19fbbe60} fill="var(--fill-0, #444955)" />
                        </svg>
                      </div>
                    </div>
                  </Wrapper4>
                </Wrapper5>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <div className="h-[120px] relative shrink-0 w-[220px]" data-name="section . list . entretien">
                <Wrapper3>
                  <AtomeIconTextMedium additionalClassNames="w-[70px]">
                    <VuesaxLinearSecuritySafe>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="security-safe">
                          <path d={svgPaths.p2221f7c0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Group">
                            <path d={svgPaths.p3fa24ef0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                            <path d="M10 10.4167V12.9167" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                          </g>
                          <g id="Vector_4" opacity="0" />
                        </g>
                      </svg>
                    </VuesaxLinearSecuritySafe>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">Crée</p>
                    </div>
                  </AtomeIconTextMedium>
                  <div className="relative shrink-0 size-[20px]" data-name="icn_database_medium">
                    <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="database" style={{ maskImage: `url('${imgDatabase}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <path d={svgPaths.p2ca4e80} fill="var(--fill-0, #444955)" id="database" />
                      </svg>
                    </div>
                  </div>
                  <Wrapper4>
                    <VuesaxLinearSettings>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="settings">
                          <path d={svgPaths.p2544fc00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M1.66667 10H5.83333" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14.1667 10H18.3333" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Vector_4" opacity="0" />
                        </g>
                      </svg>
                    </VuesaxLinearSettings>
                    <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                      <p className="leading-[20px]">7 j</p>
                    </div>
                  </Wrapper4>
                </Wrapper3>
              </div>
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

export default function ListBien1() {
  return <ListBien className="bg-white relative rounded-[16px] size-full" />;
}