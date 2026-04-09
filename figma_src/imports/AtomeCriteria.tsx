import svgPaths from "./svg-w5z1cld1ue";
import { imgCancel, imgChipsLabelStickerIcnDroite } from "./svg-vsl6a";
type AtomeCriteriaProps = {
  className?: string;
  propriete1?: "outlined light" | "outlined dark" | "default light" | "default dark";
};

function AtomeCriteria({ className, propriete1 = "outlined light" }: AtomeCriteriaProps) {
  const isDefaultDark = propriete1 === "default dark";
  const isDefaultLightOrDefaultDark = ["default light", "default dark"].includes(propriete1);
  const isOutlinedDark = propriete1 === "outlined dark";
  const isOutlinedLightOrOutlinedDark = ["outlined light", "outlined dark"].includes(propriete1);
  return (
    <div className={className || `relative rounded-[16px] ${isDefaultDark ? "bg-[#22252b]" : propriete1 === "default light" ? "bg-[#ecedee]" : isOutlinedDark ? "" : "h-[24px]"}`}>
      <div aria-hidden={isOutlinedLightOrOutlinedDark ? "true" : undefined} className={isDefaultLightOrDefaultDark ? "gap-x-[10px] gap-y-[4px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative" : isOutlinedDark ? "absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[16px]" : "absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]"}>
        {isDefaultLightOrDefaultDark && (
          <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="chips_label_sticker_icn_droite">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative">
                <div className="relative shrink-0" data-name="Body . sm . light">
                  <div className="flex flex-row items-center size-full">
                    <div className={`content-stretch flex items-center relative ${isDefaultDark ? "px-[10px] py-[8px]" : "px-[6px] py-[4px]"}`}>
                      <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">label</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[18px]" data-name="icn_cancel">
                  <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="cancel" style={isDefaultDark ? { maskImage: `url('${imgChipsLabelStickerIcnDroite}')` } : { maskImage: `url('${imgCancel}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 20 20" : "0 0 15 15"}>
                      <path d={isDefaultDark ? svgPaths.p20c08740 : svgPaths.p338f1380} fill="var(--fill-0, #444955)" id="cancel" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isOutlinedLightOrOutlinedDark && (
        <div className={`gap-x-[10px] gap-y-[4px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative ${isOutlinedDark ? "" : "h-full"}`}>
          <div className={`col-1 justify-self-start relative row-1 shrink-0 ${isOutlinedDark ? "self-start" : "self-stretch"}`} data-name="chips_label_sticker_icn_droite">
            <div className="flex flex-row items-center size-full">
              <div className={`content-stretch flex items-center relative ${isOutlinedDark ? "" : "h-full"}`}>
                <div className="relative shrink-0" data-name="Body . sm . light">
                  <div className="flex flex-row items-center size-full">
                    <div className={`content-stretch flex items-center relative ${isOutlinedDark ? "px-[10px] py-[8px]" : "px-[6px] py-[4px]"}`}>
                      <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">label</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[18px]" data-name="icn_cancel">
                  <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="cancel" style={isOutlinedDark ? { maskImage: `url('${imgChipsLabelStickerIcnDroite}')` } : { maskImage: `url('${imgCancel}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isOutlinedDark ? "0 0 20 20" : "0 0 15 15"}>
                      <path d={isOutlinedDark ? svgPaths.p20c08740 : svgPaths.p338f1380} fill="var(--fill-0, #444955)" id="cancel" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AtomeCriteria1() {
  return <AtomeCriteria className="relative rounded-[16px] size-full" />;
}