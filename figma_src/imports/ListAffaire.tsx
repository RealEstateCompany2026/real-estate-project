import svgPaths from "./svg-1d0hxc5dtp";
import { imgCheck, imgSectionListDossier } from "./svg-2wlwu";
type ListAffaireHelper1Props = {
  additionalClassNames?: string;
};

function ListAffaireHelper1({ children, additionalClassNames = "" }: React.PropsWithChildren<ListAffaireHelper1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type ListAffaireHelperProps = {
  additionalClassNames?: string;
};

function ListAffaireHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<ListAffaireHelperProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function ListAffaireVuesaxLinearHeart({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/heart">
        {children}
      </div>
    </div>
  );
}

function ListAffaireVuesaxLinearDirectInbox({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/direct-inbox">
        {children}
      </div>
    </div>
  );
}

function ListAffaireVuesaxLinearGallery({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/gallery">
        {children}
      </div>
    </div>
  );
}

function ListAffaireVuesaxLinearMessageNotif({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/message-notif">
        {children}
      </div>
    </div>
  );
}

function VuesaxLinearTag({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/tag-2">
        {children}
      </div>
    </div>
  );
}

function VuesaxLinearFormatSquare({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/format-square">
        {children}
      </div>
    </div>
  );
}

function VuesaxLinearHome({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/home-2">
        {children}
      </div>
    </div>
  );
}

function VuesaxLinearProfileCircle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/profile-circle">
        {children}
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start pl-[28px] pr-[47px] py-[28px] relative size-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[258px]">{children}</div>
    </div>
  );
}

function VuesaxLinearDocumentText({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/document-text">
        {children}
      </div>
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

function ListAffaireAtomeIconTextMedium({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[44px]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[120px] relative shrink-0 w-[220px]">
      <div className="content-stretch flex flex-col items-start pl-[12px] pr-[13px] py-[28px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[195px]">{children}</div>
      </div>
    </div>
  );
}

function SectionListClosing({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <ListAffaireAtomeTitleSectionListText text="CLOSING" />
      <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">{children}</div>
    </Wrapper2>
  );
}

function SectionListPromotion({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <ListAffaireAtomeTitleSectionListText text="PROMOTION" />
      <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full">{children}</div>
    </Wrapper2>
  );
}

function SectionListDossier({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <ListAffaireAtomeTitleSectionListText text="DOSSIER" />
      <div className="content-stretch flex gap-[28px] items-center relative shrink-0">{children}</div>
    </Wrapper2>
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

function IcnCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
          <path d={svgPaths.p12294b00} fill="var(--fill-0, #0DA500)" id="check" />
        </svg>
      </div>
    </div>
  );
}

function ListAffaireAtomeIconIcon1() {
  return (
    <Wrapper3>
      <VuesaxLinearDocumentText>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="document-text">
            <path d={svgPaths.p32b60c80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p1cce7dc0} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d="M6.66667 10.8333H10" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d="M6.66667 14.1667H13.3333" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <g id="Vector_5" opacity="0" />
          </g>
        </svg>
      </VuesaxLinearDocumentText>
      <IcnCheck1 />
    </Wrapper3>
  );
}

function IcnCheck() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgSectionListDossier}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
          <path d={svgPaths.p23b3580} fill="var(--fill-0, #444955)" id="check" />
        </svg>
      </div>
    </div>
  );
}

function ListAffaireAtomeIconIcon() {
  return (
    <Wrapper3>
      <VuesaxLinearDocumentText>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="document-text">
            <path d={svgPaths.p42a4a00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p35359700} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d="M8 13H12" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d="M8 17H16" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <g id="Vector_5" opacity="0" />
          </g>
        </svg>
      </VuesaxLinearDocumentText>
      <IcnCheck />
    </Wrapper3>
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

function ListAffaireVerticalDivider84Px() {
  return (
    <div className="h-[84px] relative shrink-0 w-0">
      <Wrapper>
        <line id="Line 57" stroke="var(--stroke-0, #ECEDEE)" x2="84" y1="0.5" y2="0.5" />
      </Wrapper>
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
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
          <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">{text}</p>
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
type ListAffaireProps = {
  className?: string;
  propriete1?: "Défaut light" | "hover light" | "Défaut dark" | "hover dark";
};

function ListAffaire({ className, propriete1 = "Défaut light" }: ListAffaireProps) {
  const isDefautDark = propriete1 === "Défaut dark";
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
                <Wrapper4>
                  <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                    <AtomeStickerText text="VENTE" />
                    <div className="h-[20px] relative shrink-0 w-[74px]" data-name="atome . id affaire">
                      <div className="absolute flex flex-col font-['roboto:Regular',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">55679201</p>
                      </div>
                    </div>
                    <VuesaxLinearProfileCircle>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="profile-circle">
                          <path d={svgPaths.p30875a80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p364c500} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.pace200} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <g id="Vector_4" opacity="0" />
                        </g>
                      </svg>
                    </VuesaxLinearProfileCircle>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                    <Wrapper3>
                      <VuesaxLinearHome>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g id="home-2">
                            <path d={svgPaths.p550ea80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <g id="Vector_3" opacity="0" />
                          </g>
                        </svg>
                      </VuesaxLinearHome>
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">T3</p>
                      </div>
                    </Wrapper3>
                    <Wrapper3>
                      <VuesaxLinearFormatSquare>
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
                      </VuesaxLinearFormatSquare>
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">120m²</p>
                      </div>
                    </Wrapper3>
                    <Wrapper3>
                      <VuesaxLinearTag>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g id="tag-2">
                            <path d={svgPaths.p7410180} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p24ca100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                            <path d={svgPaths.pe4fd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                            <g id="Vector_4" opacity="0" />
                          </g>
                        </svg>
                      </VuesaxLinearTag>
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">450 000€</p>
                      </div>
                    </Wrapper3>
                  </div>
                </Wrapper4>
              </div>
              <ListAffaireVerticalDivider84Px />
              <SectionListDossier>
                <ListAffaireAtomeIconTextMedium>
                  <ListAffaireVuesaxLinearMessageNotif>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="message-notif">
                        <path d={svgPaths.p1f74b800} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p32688800} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M15.9965 11H16.0054" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M11.9945 11H12.0035" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M7.99451 11H8.00349" id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <g id="Vector_6" opacity="0" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearMessageNotif>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] w-[41px]">
                    <p className="leading-[20px]">1</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
                <ListAffaireAtomeIconIcon />
                <Wrapper3>
                  <ListAffaireVuesaxLinearGallery>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="gallery">
                        <path d={svgPaths.pcd9f0c0} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p389ef100} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.pdb12900} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_4" opacity="0" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearGallery>
                  <IcnCheck />
                </Wrapper3>
              </SectionListDossier>
              <ListAffaireVerticalDivider84Px />
              <SectionListPromotion>
                <ListAffaireAtomeIconTextMedium>
                  <ListAffaireVuesaxLinearDirectInbox>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="direct-inbox">
                        <path d="M12 2V9L14 7" id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M12 9L10 7" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p1fe19180} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p147d7800} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearDirectInbox>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">8</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
                <ListAffaireAtomeIconTextMedium>
                  <div className="relative shrink-0 size-[20px]" data-name="icn_door_front">
                    <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="door_front" style={{ maskImage: `url('${imgSectionListDossier}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={svgPaths.p1563d300} fill="var(--fill-0, #444955)" id="door_front" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">3</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
                <ListAffaireAtomeIconTextMedium>
                  <ListAffaireVuesaxLinearHeart>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="heart">
                        <path d={svgPaths.p1a0d8200} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_2" opacity="0" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearHeart>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">1</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
              </SectionListPromotion>
              <ListAffaireVerticalDivider84Px />
              <SectionListClosing>
                <ListAffaireAtomeIconIcon />
                <Wrapper3>
                  <ListAffaireHelper additionalClassNames="relative shrink-0 size-[20px]">
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
                  </ListAffaireHelper>
                  <IcnCheck />
                </Wrapper3>
                <Wrapper3>
                  <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/judge">
                    <ListAffaireHelper additionalClassNames="absolute contents inset-0">
                      <g id="judge">
                        <path d={svgPaths.p19f2fc40} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p180c6c80} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d="M2 21H8" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p368d0e80} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </ListAffaireHelper>
                  </div>
                  <IcnCheck />
                </Wrapper3>
              </SectionListClosing>
              <ListAffaireVerticalDivider84Px />
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
              <div className="h-[120px] relative shrink-0 w-[333px]" data-name="section . list . affaire">
                <Wrapper4>
                  <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                    <AtomeStickerText text="VENTE" />
                    <div className="h-[20px] relative shrink-0 w-[74px]">
                      <div className={`absolute flex flex-col font-["roboto:Regular",sans-serif] inset-0 justify-center leading-[0] not-italic text-[16px] tracking-[0.16px] whitespace-nowrap ${"default light" === "default dark" ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
                        <p className="leading-[20px]">55679201</p>
                      </div>
                    </div>
                    <VuesaxLinearProfileCircle>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="profile-circle">
                          <path d={svgPaths.p35d95c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p22ef9d00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p14d24500} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p304c5900} id="Vector_4" opacity="0" stroke="var(--stroke-0, #444955)" />
                        </g>
                      </svg>
                    </VuesaxLinearProfileCircle>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
                    <Wrapper3>
                      <VuesaxLinearHome>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="home-2">
                            <path d={svgPaths.p11095310} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d="M10 14.9917V12.4917" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_3" opacity="0" stroke="var(--stroke-0, #444955)" />
                          </g>
                        </svg>
                      </VuesaxLinearHome>
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">T3</p>
                      </div>
                    </Wrapper3>
                    <Wrapper3>
                      <VuesaxLinearFormatSquare>
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
                      </VuesaxLinearFormatSquare>
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">120m²</p>
                      </div>
                    </Wrapper3>
                    <Wrapper3>
                      <VuesaxLinearTag>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="tag-2">
                            <path d={svgPaths.pe50eb00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p3609ae00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeWidth="1.5" />
                            <path d={svgPaths.p2bd68080} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                            <g id="Vector_4" opacity="0" />
                          </g>
                        </svg>
                      </VuesaxLinearTag>
                      <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                        <p className="leading-[20px]">450 000€</p>
                      </div>
                    </Wrapper3>
                  </div>
                </Wrapper4>
              </div>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <SectionListDossier>
                <ListAffaireAtomeIconTextMedium>
                  <ListAffaireVuesaxLinearMessageNotif>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="message-notif">
                        <path d={svgPaths.p2bbe5580} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p15485180} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M13.3304 9.16667H13.3379" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M9.99542 9.16667H10.0029" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M6.66209 9.16667H6.66957" id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <g id="Vector_6" opacity="0" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearMessageNotif>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] w-[41px]">
                    <p className="leading-[20px]">1</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
                <ListAffaireAtomeIconIcon1 />
                <Wrapper3>
                  <ListAffaireVuesaxLinearGallery>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="gallery">
                        <path d={svgPaths.p1e16c800} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p12909080} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.padfd680} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_4" opacity="0" stroke="var(--stroke-0, #444955)" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearGallery>
                  <IcnCheck1 />
                </Wrapper3>
              </SectionListDossier>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <SectionListPromotion>
                <ListAffaireAtomeIconTextMedium>
                  <ListAffaireVuesaxLinearDirectInbox>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="direct-inbox">
                        <path d={svgPaths.p36ec4800} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M10 7.5L8.33333 5.83333" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p3e483c00} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p3c5e300} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearDirectInbox>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">8</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
                <ListAffaireAtomeIconTextMedium>
                  <div className="relative shrink-0 size-[20px]" data-name="icn_door_front">
                    <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="door_front" style={{ maskImage: `url('${imgCheck}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <path d={svgPaths.p167b1980} fill="var(--fill-0, #444955)" id="door_front" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">3</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
                <ListAffaireAtomeIconTextMedium>
                  <ListAffaireVuesaxLinearHeart>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="heart">
                        <path d={svgPaths.p122ec340} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" id="Vector_2" opacity="0" stroke="var(--stroke-0, #444955)" />
                      </g>
                    </svg>
                  </ListAffaireVuesaxLinearHeart>
                  <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
                    <p className="leading-[20px]">1</p>
                  </div>
                </ListAffaireAtomeIconTextMedium>
              </SectionListPromotion>
              <VerticalDivider84Px className="h-[84px] relative shrink-0 w-0" />
              <SectionListClosing>
                <ListAffaireAtomeIconIcon1 />
                <Wrapper3>
                  <ListAffaireHelper1 additionalClassNames="relative shrink-0 size-[20px]">
                    <g id="vuesax/linear/money-recive">
                      <g id="Group">
                        <path d={svgPaths.p2a8aa300} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M10 6.25V13.75" id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                      <path d={svgPaths.p3e8009c0} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M14.1667 2.5V5.83333H17.5" id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p6126a00} id="Vector_5" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <g id="Vector_6" opacity="0" />
                    </g>
                  </ListAffaireHelper1>
                  <IcnCheck1 />
                </Wrapper3>
                <Wrapper3>
                  <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/judge">
                    <ListAffaireHelper1 additionalClassNames="absolute contents inset-0">
                      <g id="judge">
                        <path d={svgPaths.p336f6d00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p1d8cd600} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d="M1.66667 17.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <path d={svgPaths.p35654800} id="Vector_4" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_5" opacity="0" />
                      </g>
                    </ListAffaireHelper1>
                  </div>
                  <IcnCheck1 />
                </Wrapper3>
              </SectionListClosing>
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

export default function ListAffaire1() {
  return <ListAffaire className="bg-white relative rounded-[16px] size-full" />;
}