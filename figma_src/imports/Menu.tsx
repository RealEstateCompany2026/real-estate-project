import svgPaths from "./svg-uvcxvr4hdc";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[18px] relative size-full">{children}</div>
    </div>
  );
}

function MenuScrollbar({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex h-full items-start justify-center p-[8px] relative">{children}</div>
      </div>
    </div>
  );
}

function MenuVuesaxLinearArrowRight() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="arrow-right">
            <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <g id="Vector_2" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type MenuProps = {
  className?: string;
  propriete1?: "Par défaut" | "Variante2";
  scrollbar?: boolean;
};

function Menu({ className, propriete1 = "Par défaut", scrollbar = true }: MenuProps) {
  const isVariante2 = propriete1 === "Variante2";
  return (
    <div className={className || "relative w-[347px]"}>
      <div className="content-stretch flex items-start relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[16px]">
          <div className={`h-[60px] relative shrink-0 w-full ${isVariante2 ? "bg-[#111215]" : "bg-white"}`} data-name="menu item">
            <div aria-hidden="true" className={`absolute border-b border-solid inset-0 pointer-events-none ${isVariante2 ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <Wrapper>
              <p className={`flex-[1_0_0] font-["roboto:SemiBold",sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.16px] ${isVariante2 ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Menu item</p>
              <MenuVuesaxLinearArrowRight />
            </Wrapper>
          </div>
          <div className={`h-[60px] relative shrink-0 w-full ${isVariante2 ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="menu item">
            <div aria-hidden="true" className={`absolute border-b border-solid inset-0 pointer-events-none ${isVariante2 ? "border-[#333740]" : "border-[#dadbdd]"}`} />
            <Wrapper>
              <p className={`flex-[1_0_0] font-["roboto:Bold",sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.16px] ${isVariante2 ? "text-[#dadbdd]" : "text-[#444955]"}`}>Menu item</p>
              <MenuVuesaxLinearArrowRight />
            </Wrapper>
          </div>
          <div className={`h-[60px] relative shrink-0 w-full ${isVariante2 ? "bg-[#111215]" : "bg-white"}`} data-name="menu item">
            <div aria-hidden="true" className={`absolute border-b border-solid inset-0 pointer-events-none ${isVariante2 ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <Wrapper>
              <p className={`flex-[1_0_0] font-["roboto:SemiBold",sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.16px] ${isVariante2 ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Menu item</p>
              <MenuVuesaxLinearArrowRight />
            </Wrapper>
          </div>
          <div className={`h-[60px] relative shrink-0 w-full ${isVariante2 ? "bg-[#111215]" : "bg-white"}`} data-name="menu item">
            <div aria-hidden="true" className={`absolute border-b border-solid inset-0 pointer-events-none ${isVariante2 ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <Wrapper>
              <p className={`flex-[1_0_0] font-["roboto:SemiBold",sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.16px] ${isVariante2 ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Menu item</p>
              <MenuVuesaxLinearArrowRight />
            </Wrapper>
          </div>
          <div className={`h-[60px] relative shrink-0 w-full ${isVariante2 ? "bg-[#111215]" : "bg-white"}`} data-name="menu item">
            <div aria-hidden="true" className={`absolute border-b border-solid inset-0 pointer-events-none ${isVariante2 ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <Wrapper>
              <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative text-[16px] tracking-[0.16px] ${isVariante2 ? "flex-[1_0_0] min-h-px min-w-px text-[#d0d1d4]" : "shrink-0 text-[#444955] w-[255px]"}`}>Menu item</p>
              <MenuVuesaxLinearArrowRight />
            </Wrapper>
          </div>
          <div className={`h-[60px] relative shrink-0 w-full ${isVariante2 ? "bg-[#111215]" : "bg-white"}`} data-name="menu item">
            <div aria-hidden="true" className={`absolute border-b border-solid inset-0 pointer-events-none ${isVariante2 ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <Wrapper>
              <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative text-[16px] tracking-[0.16px] ${isVariante2 ? "flex-[1_0_0] min-h-px min-w-px text-[#d0d1d4]" : "shrink-0 text-[#444955] w-[255px]"}`}>Menu item</p>
              <MenuVuesaxLinearArrowRight />
            </Wrapper>
          </div>
        </div>
        {propriete1 === "Par défaut" && scrollbar && (
          <MenuScrollbar>
            <div className="bg-[#444955] h-[49px] rounded-[16px] shrink-0 w-[5px]" />
          </MenuScrollbar>
        )}
        {isVariante2 && scrollbar && (
          <MenuScrollbar>
            <div className="bg-[#333740] h-[49px] rounded-[16px] shrink-0 w-[5px]" />
          </MenuScrollbar>
        )}
      </div>
    </div>
  );
}

export default function Menu1() {
  return <Menu className="relative size-full" />;
}