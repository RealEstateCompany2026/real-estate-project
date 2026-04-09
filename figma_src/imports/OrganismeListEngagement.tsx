import svgPaths from "./svg-7bp6xi25tm";
import { imgCalendarCheck, imgIcnCalendarCheck } from "./svg-yw0v3";
type AtomeTextIconDateProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function AtomeTextIconDate({ className, propriete1 = "default light" }: AtomeTextIconDateProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">
          <div className="relative shrink-0 size-[20px]" data-name="icn_calendar_check">
            <div className="absolute inset-[8.33%_7.6%_6.25%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="calendar_check" style={isDefaultDark ? { maskImage: `url('${imgIcnCalendarCheck}')` } : { maskImage: `url('${imgCalendarCheck}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 19.175 20.5" : "0 0 15.9792 17.0833"}>
                <path d={isDefaultDark ? svgPaths.p2721eb80 : svgPaths.p1ec73600} fill="var(--fill-0, #444955)" id="calendar_check" />
              </svg>
            </div>
          </div>
          <div className={`flex flex-col font-["roboto:Regular",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDark ? "text-[#d0d1d4]" : "text-[#444955]"}`}>
            <p className="leading-[20px]">280 j</p>
          </div>
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

export default function OrganismeListEngagement() {
  return (
    <div className="relative size-full" data-name="organisme . list . engagement">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[13px] py-[28px] relative size-full">
          <div className="relative shrink-0 w-[195px]" data-name="organisme . engagement">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">
              <div className="h-[20px] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] w-full whitespace-nowrap" data-name="atome . title section list">
                <p className="absolute font-['roboto:SemiBold',sans-serif] left-0 top-0">ENGAGEMENT</p>
                <p className="-translate-x-full absolute font-['roboto:Regular',sans-serif] left-[195px] text-right top-0">48%</p>
              </div>
              <div className="relative shrink-0 w-full" data-name="organisme event quinte + icon text date">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative">
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
                    <AtomeTextIconDate className="relative shrink-0" />
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