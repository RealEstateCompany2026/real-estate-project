import svgPaths from "./svg-0oww15wkks";
import { imgArrowLeftAlt, imgIconButton } from "./svg-arrh6";

function AppBarAjoutBddImportVuesaxLinearArrowRight({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
        {children}
      </div>
    </div>
  );
}

function AppBarAjoutBddImportHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">{children}</div>
    </div>
  );
}

function AppBarAjoutBddImportIconButton({ children }: React.PropsWithChildren<{}>) {
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
type AppBarAjoutBddImportBodyMdLightTextProps = {
  text: string;
};

function AppBarAjoutBddImportBodyMdLightText({ text }: AppBarAjoutBddImportBodyMdLightTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type AppBarAjoutBddImportH4DesktopLightTextProps = {
  text: string;
};

function AppBarAjoutBddImportH4DesktopLightText({ text }: AppBarAjoutBddImportH4DesktopLightTextProps) {
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
type AppBarAjoutBddImportProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function AppBarAjoutBddImport({ className, propriete1 = "light" }: AppBarAjoutBddImportProps) {
  const isDark = propriete1 === "dark";
  return (
    <div className={className || `h-[100px] relative w-[1191px] ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center py-[27px] relative size-full">
          {propriete1 === "light" && (
            <div className="content-stretch flex gap-[360px] items-center relative shrink-0 w-full" data-name="bar import bdd light">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <AppBarAjoutBddImportIconButton>
                  <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgArrowLeftAlt}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
                      <path d={svgPaths.p1f93a640} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                    </svg>
                  </div>
                </AppBarAjoutBddImportIconButton>
                <AppBarAjoutBddImportH4DesktopLightText text="Import d’une base de données" />
                <AppBarAjoutBddImportBodyMdLightText text="Nom_du_fichier.csv" />
              </div>
              <div className="bg-[#7b72f9] relative rounded-[16px] shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#7b72f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarAjoutBddImportHelper>
                  <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap">Enregistrer</p>
                  <AppBarAjoutBddImportVuesaxLinearArrowRight>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="arrow-right">
                        <path d={svgPaths.p3a9aee80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_2" opacity="0" />
                      </g>
                    </svg>
                  </AppBarAjoutBddImportVuesaxLinearArrowRight>
                </AppBarAjoutBddImportHelper>
              </div>
            </div>
          )}
          {isDark && (
            <div className="content-stretch flex gap-[360px] items-center relative shrink-0 w-full" data-name="bar import bdd dark">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <AppBarAjoutBddImportIconButton>
                  <div className="absolute bottom-1/4 left-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-6px] mask-size-[24px_24px] right-[16.67%] top-1/4" data-name="arrow_left_alt" style={{ maskImage: `url('${imgIconButton}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                      <path d={svgPaths.p3f7b8a00} fill="var(--fill-0, #444955)" id="arrow_left_alt" />
                    </svg>
                  </div>
                </AppBarAjoutBddImportIconButton>
                <AppBarAjoutBddImportH4DesktopLightText text="H4 . Bold . Desktop" />
                <AppBarAjoutBddImportBodyMdLightText text="Body . md . SemiBold . 16/20px" />
              </div>
              <div className="bg-[#635cc7] relative rounded-[16px] shrink-0" data-name="button">
                <div aria-hidden="true" className="absolute border border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <AppBarAjoutBddImportHelper>
                  <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#111215] text-[16px] tracking-[0.16px] whitespace-nowrap">Enregistrer</p>
                  <AppBarAjoutBddImportVuesaxLinearArrowRight>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="arrow-right">
                        <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_2" opacity="0" />
                      </g>
                    </svg>
                  </AppBarAjoutBddImportVuesaxLinearArrowRight>
                </AppBarAjoutBddImportHelper>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AppBarAjoutBddImport1() {
  return <AppBarAjoutBddImport className="bg-white relative size-full" />;
}