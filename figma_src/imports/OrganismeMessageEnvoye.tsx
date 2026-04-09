import svgPaths from "./svg-epaloy6thu";
import { imgAttachFile, imgButton } from "./svg-pw9nt";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type OrganismeMessageEnvoyeBodySmDarkTextProps = {
  text: string;
};

function OrganismeMessageEnvoyeBodySmDarkText({ text }: OrganismeMessageEnvoyeBodySmDarkTextProps) {
  return (
    <Wrapper>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d0d1d4] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type OrganismeMessageEnvoyeBodySmLightTextProps = {
  text: string;
};

function OrganismeMessageEnvoyeBodySmLightText({ text }: OrganismeMessageEnvoyeBodySmLightTextProps) {
  return (
    <Wrapper>
      <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
    </Wrapper>
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
type OrganismeMessageEnvoyeProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function OrganismeMessageEnvoye({ className, propriete1 = "light" }: OrganismeMessageEnvoyeProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || "relative w-[370px]"} style={{ maxWidth: "370px" }}>
      <div className="content-stretch flex flex-col gap-[10px] items-start relative" style={{ maxWidth: "370px" }}>
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-circle-left">
            <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-circle-left">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDark ? "0 0 24 24" : "0 0 20 20"}>
                <g id="arrow-circle-left">
                  <path d={isDark ? svgPaths.pace200 : svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                  <path d={isDark ? svgPaths.p101eb340 : svgPaths.p7537e00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <g id="Vector_3" opacity="0" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            {isLight && (
              <>
                <OrganismeMessageEnvoyeBodySmLightText text="le 12 fév 2026" />
                <OrganismeMessageEnvoyeBodySmLightText text="à 12:47" />
              </>
            )}
            {isDark && (
              <>
                <OrganismeMessageEnvoyeBodySmDarkText text="Body . sm . Regular . 14/16px" />
                <OrganismeMessageEnvoyeBodySmDarkText text="Body . sm . Regular . 14/16px" />
              </>
            )}
          </div>
          <AtomeMessageStatus className="relative rounded-[8px] shrink-0 size-[18px]" propriete1={isDark ? "none dark" : undefined} />
          <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#d0d1d4]" : "border-[#444955]"}`} />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
                <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>{isDark ? "LABEL" : "ENVOYÉ"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative rounded-[16px] shrink-0 ${isDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`}>
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border-[#22252b]" : "border-[#ecedee]"}`} />
          <div className="flex flex-col items-end">
            <div className="content-stretch flex flex-col gap-[10px] items-end p-[10px] relative">
              <div className="relative shrink-0" data-name="Body . md . light">
                <div className="flex flex-row items-center justify-end">
                  <div className="content-stretch flex items-center justify-end px-[10px] py-[8px] relative">
                    <p className={`relative text-[#444955] text-[16px] tracking-[0.16px] ${isDark ? 'font-["roboto:Regular",sans-serif] leading-[20px] not-italic shrink-0 whitespace-nowrap' : 'font-["Roboto:Regular",sans-serif] font-normal leading-[22px] text-right'}`} style={isLight ? { fontVariationSettings: "'wdth' 100" } : undefined}>
                      {isDark ? "Body . md . Regular . 16/20px" : "Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab..."}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`relative rounded-[16px] shrink-0 ${isDark ? "bg-[#111215]" : "bg-white"}`} data-name="button">
                <div aria-hidden="true" className={`absolute border-solid inset-0 pointer-events-none rounded-[16px] ${isDark ? "border border-[#111215]" : "border-0 border-[#444955]"}`} />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                    <div className="relative shrink-0 size-[20px]" data-name="icn_attach_file">
                      <div className="absolute bottom-[8.33%] left-[22.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.5px_-2px] mask-size-[24px_24px] right-1/4 top-[8.33%]" data-name="attach_file" style={isDark ? { maskImage: `url('${imgButton}')` } : { maskImage: `url('${imgAttachFile}')` }}>
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDark ? "0 0 12.5 20" : "0 0 10.4167 16.6667"}>
                          <path d={isDark ? svgPaths.p2507e0f0 : svgPaths.p205bf000} fill="var(--fill-0, #444955)" id="attach_file" />
                        </svg>
                      </div>
                    </div>
                    <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>Button title</p>
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

export default function OrganismeMessageEnvoye1() {
  return <OrganismeMessageEnvoye className="relative size-full" />;
}