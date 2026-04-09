import svgPaths from "./svg-1y96x2nejr";
import { imgAdd, imgSearch, imgIconButton, imgIconButton1 } from "./svg-vxsyq";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">{children}</div>
      </div>
    </div>
  );
}

function AppBarAjoutBddIconButton1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="icn_search">
        {children}
      </div>
    </Wrapper>
  );
}

function AppBarAjoutBddIconButton({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
        {children}
      </div>
    </Wrapper>
  );
}
type AppBarAjoutBddH4DesktopLightTextProps = {
  text: string;
};

function AppBarAjoutBddH4DesktopLightText({ text }: AppBarAjoutBddH4DesktopLightTextProps) {
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
type AppBarAjoutBddProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarAjoutBdd({ className, propriete1 = "light" }: AppBarAjoutBddProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-[#111215]" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[25px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar ajout bdd light">
              <AppBarAjoutBddH4DesktopLightText text="Base de données" />
              <AppBarAjoutBddIconButton>
                <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                    <path d={svgPaths.pe7cde70} fill="var(--fill-0, #444955)" id="add" />
                  </svg>
                </div>
              </AppBarAjoutBddIconButton>
              <AppBarAjoutBddIconButton1>
                <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path d={svgPaths.p14df6980} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                  </svg>
                </div>
              </AppBarAjoutBddIconButton1>
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="bar ajout bdd dark">
              <AppBarAjoutBddH4DesktopLightText text="H4 . Bold . Desktop" />
              <AppBarAjoutBddIconButton>
                <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgIconButton}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
                  </svg>
                </div>
              </AppBarAjoutBddIconButton>
              <AppBarAjoutBddIconButton1>
                <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgIconButton1}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p2e267b00} fill="var(--fill-0, #444955)" id="search" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
                  </svg>
                </div>
              </AppBarAjoutBddIconButton1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarAjoutBdd1() {
  return <AppBarAjoutBdd className="bg-white relative size-full" />;
}