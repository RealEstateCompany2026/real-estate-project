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

export default function AtomeMessageStatus1() {
  return <AtomeMessageStatus className="relative rounded-[8px] size-full" />;
}