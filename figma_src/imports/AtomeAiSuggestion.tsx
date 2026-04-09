type AtomeAiSuggestionProps = {
  className?: string;
  propriete1?: "0 light" | "1 light" | "2 light" | "3 light" | "4 light" | "0 dark" | "4 dark" | "3 dark" | "2 dark" | "1 dark";
};

function AtomeAiSuggestion({ className, propriete1 = "0 light" }: AtomeAiSuggestionProps) {
  const is1Light = propriete1 === "1 light";
  const is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark = ["2 light", "3 light", "4 light", "0 dark", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1);
  return (
    <div className={className || "h-[24px] relative rounded-[16px] w-[34px]"}>
      <div className={`absolute inset-[0_1.47%] rounded-[16px] ${["1 light", "2 light", "3 light", "4 light", "1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "bg-[#7b72f9]" : ""}`} data-name="Sticker">
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${["1 dark", "2 dark", "3 dark", "4 dark"].includes(propriete1) ? "border-[#968ffa]" : propriete1 === "0 dark" ? "border-[#444955]" : ["1 light", "2 light", "3 light", "4 light"].includes(propriete1) ? "border-[#635cc7]" : "border-[#a1a4aa]"}`} />
        <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative">
          <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[6px] py-[4px] relative">
                <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : is1Light ? "text-white" : "text-[#a1a4aa]"}`}>{is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : is1Light ? "1" : "0"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AtomeAiSuggestion1() {
  return <AtomeAiSuggestion className="relative rounded-[16px] size-full" />;
}