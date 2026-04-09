type AtomeStickerProps = {
  className?: string;
  type?: "Default light" | "Disabled light" | "default dark" | "disabled dark" | "information light" | "warning light" | "success light" | "information dark" | "warning dark" | "success dark" | "error light" | "error dark";
};

function AtomeSticker({ className, type = "Default light" }: AtomeStickerProps) {
  const isDefaultDark = type === "default dark";
  const isDisabledLight = type === "Disabled light";
  const isErrorDark = type === "error dark";
  const isErrorLight = type === "error light";
  const isInformationDark = type === "information dark";
  const isInformationLight = type === "information light";
  const isSuccessDark = type === "success dark";
  const isSuccessLight = type === "success light";
  const isWarningDark = type === "warning dark";
  const isWarningLight = type === "warning light";
  return (
    <div className={className || `h-[20px] relative rounded-[16px] ${type === "disabled dark" ? "bg-[#22252b]" : isSuccessDark ? "bg-[#0c6304]" : isWarningDark ? "bg-[#803600]" : isInformationDark ? "bg-[#4a4595]" : isErrorDark ? "bg-[#800000]" : isDisabledLight ? "bg-[#ecedee]" : isSuccessLight ? "bg-[#e6f6e5]" : isWarningLight ? "bg-[#fff0e5]" : isInformationLight ? "bg-[#e5e6ff]" : isErrorLight ? "bg-[#ffe5e5]" : ""}`}>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isSuccessDark ? "border-[#109204]" : isWarningDark ? "border-[#bf5000]" : isInformationDark ? "border-[#635cc7]" : isErrorDark ? "border-[#bf0000]" : isDefaultDark ? "border-[#d0d1d4]" : isDisabledLight ? "border-[#a1a4aa]" : isSuccessLight ? "border-[#c3e9bf]" : isWarningLight ? "border-[#ffdabf]" : isInformationLight ? "border-[#bfc2ff]" : isErrorLight ? "border-[#ffbfbf]" : "border-[#444955]"}`} />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
          <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isSuccessDark ? "text-[#cfedcc]" : isWarningDark ? "text-[#ffe1cc]" : isInformationDark ? "text-[#e5e3fe]" : isErrorDark ? "text-[#fcc]" : isDefaultDark ? "text-[#dadbdd]" : isDisabledLight ? "text-[#a1a4aa]" : isSuccessLight ? "text-[#0da500]" : isWarningLight ? "text-[#ff6b00]" : isInformationLight ? "text-[#000aff]" : isErrorLight ? "text-[red]" : "text-[#444955]"}`}>LABEL</p>
        </div>
      </div>
    </div>
  );
}

export default function AtomeSticker1() {
  return <AtomeSticker className="relative rounded-[16px] size-full" />;
}