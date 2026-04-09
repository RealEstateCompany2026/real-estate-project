import svgPaths from "./svg-lmjimd5wp2";
import { imgArrowDropUp, imgArrowDropDown } from "./svg-tniqh";
type OrganismeScoringSectionListProps = {
  className?: string;
  propriete1?: "Up light" | "Down light" | "Up dark" | "Down dark";
};

function OrganismeScoringSectionList({ className, propriete1 = "Up light" }: OrganismeScoringSectionListProps) {
  const isDownDark = propriete1 === "Down dark";
  return (
    <div className={className || "relative w-[60px]"}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[8px] relative w-full">
          <div className="mb-[-8px] relative shrink-0 w-full" data-name="H2 . Desktop . light">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[6px] relative w-full">
                <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[40px] tracking-[0.4px] whitespace-nowrap">
                  <p className="leading-[48px]">{["Up dark", "Down dark"].includes(propriete1) ? "H2 . SemiBold . Desktop" : propriete1 === "Down light" ? "76" : "76"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[-8px] relative shrink-0 w-full" data-name="atome . scoring . trend">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative w-full">
                <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="Body . sm">
                  <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">score</p>
                </div>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none">
                    {["Up light", "Up dark"].includes(propriete1) && (
                      <div className="relative size-[24px]" data-name="icn_arrow_drop_up">
                        <div className="absolute inset-[37.5%_29.17%_41.67%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-9px] mask-size-[24px_24px]" data-name="arrow_drop_up" style={{ maskImage: `url('${imgArrowDropUp}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                            <path d="M0 5L5 0L10 5H0Z" fill={propriete1 === "Up dark" ? "var(--fill-0, #444955)" : "var(--fill-0, #0DA500)"} id="arrow_drop_up" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {["Down light", "Down dark"].includes(propriete1) && (
                      <div className="relative size-[24px]" data-name="icn_arrow_drop_down">
                        <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-10px] mask-size-[24px_24px]" data-name="arrow_drop_down" style={{ maskImage: `url('${imgArrowDropDown}')` }}>
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
                            <path d={svgPaths.p29d06c00} fill={isDownDark ? "var(--fill-0, #444955)" : "var(--fill-0, #FF0000)"} id="arrow_drop_down" stroke={isDownDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #FF0000)"} strokeWidth="0.025" />
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

export default function OrganismeListScoring() {
  return (
    <div className="relative size-full" data-name="organisme . list . scoring">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[15px] py-[28px] relative size-full">
          <OrganismeScoringSectionList className="relative shrink-0 w-[60px]" />
        </div>
      </div>
    </div>
  );
}