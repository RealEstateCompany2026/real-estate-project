type SwitchProps = {
  className?: string;
  type?: "Off light" | "On light" | "Off dark" | "On dark";
};

function Switch({ className, type = "Off light" }: SwitchProps) {
  const isOnLightOrOnDark = ["On light", "On dark"].includes(type);
  return (
    <div className={className || `h-[30px] relative rounded-[16px] w-[48px] ${type === "Off dark" ? "bg-[#444955]" : isOnLightOrOnDark ? "bg-[#0da500]" : "bg-[#d0d1d4]"}`}>
      <div className={`flex flex-row items-center size-full ${isOnLightOrOnDark ? "justify-end" : ""}`}>
        <div className={`content-stretch flex items-center px-[3px] py-[5px] relative size-full ${isOnLightOrOnDark ? "justify-end" : ""}`}>
          <div className="relative shrink-0 size-[24px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" fill={["On dark", "Off dark"].includes(type) ? "var(--fill-0, #111215)" : "var(--fill-0, white)"} id="Ellipse 4" r="12" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Switch1() {
  return <Switch className="bg-[#d0d1d4] relative rounded-[16px] size-full" />;
}