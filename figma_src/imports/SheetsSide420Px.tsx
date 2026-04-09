import svgPaths from "./svg-qdbq8g8afj";
import { imgClose, imgIconButton } from "./svg-rv7vy";
type SheetsSide420PxProps = {
  className?: string;
  propriete1?: "default dark" | "default light";
};

function SheetsSide420Px({ className, propriete1 = "default light" }: SheetsSide420PxProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || "h-[1024px] relative w-[420px]"}>
      <div className={`absolute inset-0 shadow-[0px_0px_10px_7px_rgba(0,0,0,0.05)] ${isDefaultDark ? "bg-[#22252b]" : "bg-white"}`} />
      <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[47px] w-[350px]">
        <div className="relative shrink-0" data-name="H4 . Desktop . light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[10px] relative">
              <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
                <p className="leading-[34px]">{isDefaultDark ? "H4 . Bold . Desktop" : "Sheets title"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[16px] shrink-0" data-name="icon button">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center p-[12px] relative">
              <div className="relative shrink-0 size-[20px]" data-name="icn_close">
                <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={isDefaultDark ? { maskImage: `url('${imgIconButton}')` } : { maskImage: `url('${imgClose}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 14 14" : "0 0 11.6667 11.6667"}>
                    <path d={isDefaultDark ? svgPaths.p2aa77200 : svgPaths.p19fbbe60} fill="var(--fill-0, #444955)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SheetsSide420Px1() {
  return <SheetsSide420Px className="relative size-full" />;
}