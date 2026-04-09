import svgPaths from "./svg-b38h16y90w";
import { imgAdd, imgSearch, imgIconButton, imgIconButton1 } from "./svg-7ux13";

function AppBarCategoryVuesaxLinearArrowDown({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
        {children}
      </div>
    </div>
  );
}

function AppBarCategoryButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarCategoryIconButton1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="icn_search">
        {children}
      </div>
    </Wrapper>
  );
}

function AppBarCategoryIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
        {children}
      </div>
    </Wrapper>
  );
}
type AppBarCategoryH4DesktopLightTextProps = {
  text: string;
};

function AppBarCategoryH4DesktopLightText({ text }: AppBarCategoryH4DesktopLightTextProps) {
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
type AppBarCategoryProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarCategory({ className, propriete1 = "light" }: AppBarCategoryProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[25px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar category light">
              <AppBarCategoryH4DesktopLightText text="Rubrique" />
              <AppBarCategoryButton>
                <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Categorie</p>
                <AppBarCategoryVuesaxLinearArrowDown>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="arrow-down">
                      <path d={svgPaths.p1134a680} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_2" opacity="0" />
                    </g>
                  </svg>
                </AppBarCategoryVuesaxLinearArrowDown>
              </AppBarCategoryButton>
              <AppBarCategoryIconButton>
                <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                    <path d={svgPaths.pe7cde70} fill="var(--fill-0, #444955)" id="add" />
                  </svg>
                </div>
              </AppBarCategoryIconButton>
              <AppBarCategoryIconButton1>
                <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path d={svgPaths.p14df6980} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                  </svg>
                </div>
              </AppBarCategoryIconButton1>
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar category dark">
              <AppBarCategoryH4DesktopLightText text="H4 . Bold . Desktop" />
              <AppBarCategoryButton>
                <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Categorie</p>
                <AppBarCategoryVuesaxLinearArrowDown>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="arrow-down">
                      <path d={svgPaths.p336ed396} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                      <g id="Vector_2" opacity="0" />
                    </g>
                  </svg>
                </AppBarCategoryVuesaxLinearArrowDown>
              </AppBarCategoryButton>
              <AppBarCategoryIconButton>
                <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgIconButton}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
                  </svg>
                </div>
              </AppBarCategoryIconButton>
              <AppBarCategoryIconButton1>
                <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgIconButton1}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p2e267b00} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                  </svg>
                </div>
              </AppBarCategoryIconButton1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarCategory1() {
  return <AppBarCategory className="bg-white relative size-full" />;
}