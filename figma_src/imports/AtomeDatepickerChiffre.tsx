type AtomeDatepickerChiffreProps = {
  className?: string;
  propriete1?: "default . light" | "hover . light" | "selected . light" | "today. light" | "today. dark" | "selected . dark" | "hover. dark" | "default. dark";
};

function AtomeDatepickerChiffre({ className, propriete1 = "default . light" }: AtomeDatepickerChiffreProps) {
  const isDefaultDark = propriete1 === "default. dark";
  const isHoverLightOrSelectedLightOrHoverDarkOrSelectedDark = ["hover . light", "selected . light", "hover. dark", "selected . dark"].includes(propriete1);
  const isSelectedDark = propriete1 === "selected . dark";
  const isSelectedLight = propriete1 === "selected . light";
  const isTodayDark = propriete1 === "today. dark";
  const isTodayLight = propriete1 === "today. light";
  const isTodayLightOrTodayDark = ["today. light", "today. dark"].includes(propriete1);
  return (
    <div className={className || `relative rounded-[20px] size-[40px] ${isSelectedDark ? "bg-[#7b72f9]" : ["default. dark", "hover. dark", "today. dark"].includes(propriete1) ? "bg-[#22252b]" : isSelectedLight ? "bg-[#635cc7]" : "bg-[#ecedee]"}`}>
      <div aria-hidden={isTodayLightOrTodayDark ? "true" : undefined} className={isTodayDark ? "absolute border border-[#7b72f9] border-solid inset-0 pointer-events-none rounded-[20px]" : isTodayLight ? "absolute border border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[20px]" : "flex flex-col items-center justify-center size-full"}>
        {["default . light", "hover . light", "selected . light", "default. dark", "hover. dark", "selected . dark"].includes(propriete1) && (
          <div className="content-stretch flex flex-col items-center justify-center py-[2px] relative size-full">
            <div className={`relative shrink-0 ${isHoverLightOrSelectedLightOrHoverDarkOrSelectedDark ? "" : "w-[40px]"}`} data-name="Body . md . light">
              <div className="flex flex-row items-center justify-center size-full">
                <div className={`content-stretch flex items-center justify-center px-[10px] py-[8px] relative ${isHoverLightOrSelectedLightOrHoverDarkOrSelectedDark ? "" : "w-full"}`}>
                  <p className={`leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isSelectedDark ? 'font-["roboto:Bold",sans-serif] text-[#444955]' : isDefaultDark ? 'font-["roboto:Regular",sans-serif] text-[#444955]' : isSelectedLight ? 'font-["roboto:Bold",sans-serif] text-white' : ["hover . light", "hover. dark"].includes(propriete1) ? 'font-["roboto:SemiBold",sans-serif] text-[#444955]' : 'font-["roboto:Regular",sans-serif] text-[#444955] text-center'}`}>{isSelectedDark ? "Body . md . Bold . 16/20px" : propriete1 === "hover. dark" ? "Body . md . SemiBold . 16/20px" : isDefaultDark ? "Body . md . Regular . 16/20px" : ["hover . light", "selected . light"].includes(propriete1) ? "30" : "30"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isTodayLightOrTodayDark && (
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center py-[2px] relative size-full">
            <div className="relative shrink-0 w-[40px]" data-name="Body . md . light">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative w-full">
                  <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isTodayDark ? "" : "text-center"}`}>{isTodayDark ? "Body . md . Regular . 16/20px" : isTodayLight ? "30" : ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AtomeDatepickerChiffre1() {
  return <AtomeDatepickerChiffre className="bg-[#ecedee] relative rounded-[20px] size-full" />;
}