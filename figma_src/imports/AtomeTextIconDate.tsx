import svgPaths from "./svg-7imbs57czp";
import { imgCalendarCheck, imgIcnCalendarCheck } from "./svg-3tzml";
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

export default function AtomeTextIconDate1() {
  return <AtomeTextIconDate className="relative size-full" />;
}