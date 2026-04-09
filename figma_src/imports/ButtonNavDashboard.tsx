import svgPaths from "./svg-7jt3o3qvpj";
import { imgSpeed } from "./svg-lossv";
type ButtonNavDashboardProps = {
  className?: string;
  propriete1?: "default light" | "hover light" | "Selected light" | "Selected dark" | "hover dark" | "default dark";
};

function ButtonNavDashboard({ className, propriete1 = "default light" }: ButtonNavDashboardProps) {
  const isHoverLight = propriete1 === "hover light";
  return (
    <div className={className || `h-[50px] relative rounded-[16px] w-[68px] ${propriete1 === "Selected dark" ? "bg-[#22252b]" : propriete1 === "hover dark" ? "bg-[#333740]" : propriete1 === "Selected light" ? "bg-[#ecedee]" : isHoverLight ? "bg-[#dadbdd]" : ""}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center py-[12px] relative size-full">
          <div className="absolute contents left-0 top-0">
            <div className="absolute h-[50px] left-0 top-0 w-[68px]" />
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="icn_speed">
            <div className="absolute inset-[16.67%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-4px] mask-size-[24px_24px]" data-name="speed" style={{ maskImage: `url('${imgSpeed}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0017 16">
                <path d={svgPaths.p53e9480} fill={["Selected light", "default dark", "hover dark", "Selected dark"].includes(propriete1) ? "var(--fill-0, #444955)" : isHoverLight ? "var(--fill-0, #635CC7)" : "var(--fill-0, #A1A4AA)"} id="speed" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ButtonNavDashboard1() {
  return <ButtonNavDashboard className="relative rounded-[16px] size-full" />;
}