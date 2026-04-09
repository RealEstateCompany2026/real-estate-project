import svgPaths from "./svg-op4sab8qa8";
import { imgClose } from "./svg-3o985";

function IconButtonMegaHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center p-[23px] relative size-full">
      <div className="relative shrink-0 size-[24px]" data-name="icn_close">
        <div className="absolute inset-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgClose}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type IconButtonMegaProps = {
  className?: string;
  propriete1?: "outlined default light" | "outlined hover light" | "neutral default light" | "branded default light" | "outlined default dark" | "outlined hover dark" | "neutral default dark" | "branded default dark" | "neutral hover light" | "neutral hover dark" | "branded hover dark" | "branded hover light";
};

function IconButtonMega({ className, propriete1 = "outlined default light" }: IconButtonMegaProps) {
  const isNeutralDefaultLightOrBrandedDefaultLightOrBrandedDefaultDarkOr = ["neutral default light", "branded default light", "branded default dark", "neutral default dark", "neutral hover light", "neutral hover dark", "branded hover light", "branded hover dark"].includes(propriete1);
  const isOutlinedDefaultLightOrOutlinedHoverLightOrOutlinedHoverDarkOr = ["outlined default light", "outlined hover light", "outlined hover dark", "outlined default dark"].includes(propriete1);
  const isOutlinedHoverLight = propriete1 === "outlined hover light";
  return (
    <div className={className || `relative rounded-[28px] size-[70px] ${propriete1 === "neutral hover dark" ? "bg-[#333740]" : ["outlined hover dark", "outlined default dark"].includes(propriete1) ? "" : propriete1 === "neutral default dark" ? "bg-[#111215]" : ["branded default dark", "branded hover light"].includes(propriete1) ? "bg-[#635cc7]" : ["branded default light", "branded hover dark"].includes(propriete1) ? "bg-[#7b72f9]" : ["outlined hover light", "neutral hover light"].includes(propriete1) ? "bg-[#dadbdd]" : "bg-white"}`}>
      <div aria-hidden={isOutlinedDefaultLightOrOutlinedHoverLightOrOutlinedHoverDarkOr ? "true" : undefined} className={propriete1 === "outlined default dark" ? "absolute border border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[28px]" : propriete1 === "outlined hover dark" ? "absolute border border-[#dadbdd] border-solid inset-0 pointer-events-none rounded-[28px]" : isNeutralDefaultLightOrBrandedDefaultLightOrBrandedDefaultDarkOr ? "flex flex-row items-center justify-center size-full" : isOutlinedHoverLight ? "absolute border border-[#333740] border-solid inset-0 pointer-events-none rounded-[28px]" : "absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[28px]"}>
        {isNeutralDefaultLightOrBrandedDefaultLightOrBrandedDefaultDarkOr && (
          <IconButtonMegaHelper>
            <path d={svgPaths.p2aa77200} fill={propriete1 === "neutral hover light" ? "var(--fill-0, #333740)" : ["branded default light", "branded hover light"].includes(propriete1) ? "var(--fill-0, white)" : "var(--fill-0, #444955)"} />
          </IconButtonMegaHelper>
        )}
      </div>
      {isOutlinedDefaultLightOrOutlinedHoverLightOrOutlinedHoverDarkOr && (
        <div className="flex flex-row items-center justify-center size-full">
          <IconButtonMegaHelper>
            <path d={svgPaths.p2aa77200} fill={isOutlinedHoverLight ? "var(--fill-0, #333740)" : "var(--fill-0, #444955)"} />
          </IconButtonMegaHelper>
        </div>
      )}
    </div>
  );
}

export default function IconButtonMega1() {
  return <IconButtonMega className="bg-white relative rounded-[28px] size-full" />;
}