import svgPaths from "./svg-tuvu2b74bs";

function AtomeTitreIconSuggestion({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">{children}</div>
      </div>
    </div>
  );
}

function IaSuggestionsDashboardBodyMdLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{children}</p>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid px-[6px] relative">
      <div className="col-1 justify-self-start relative row-1 self-start shrink-0" data-name="Body . sm . light">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[6px] py-[4px] relative">{children}</div>
        </div>
      </div>
    </div>
  );
}
type IaSuggestionsDashboardAtomeAiSuggestionTextProps = {
  text: string;
};

function IaSuggestionsDashboardAtomeAiSuggestionText({ text }: IaSuggestionsDashboardAtomeAiSuggestionTextProps) {
  return (
    <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]">
      <div className="absolute inset-[0_1.47%] rounded-[16px]" data-name="Sticker">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Wrapper>
          <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#474747] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
        </Wrapper>
      </div>
    </div>
  );
}
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
        <Wrapper>
          <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark ? "text-[#474747]" : is1Light ? "text-white" : "text-[#a1a4aa]"}`}>{is2LightOr3LightOr4LightOr0DarkOr1DarkOr2DarkOr3DarkOr4Dark ? "label" : is1Light ? "1" : "0"}</p>
        </Wrapper>
      </div>
    </div>
  );
}
type IaSuggestionsDashboardProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function IaSuggestionsDashboard({ className, propriete1 = "default light" }: IaSuggestionsDashboardProps) {
  const isDefaultDark = propriete1 === "default dark";
  const isDefaultLight = propriete1 === "default light";
  return (
    <div className={className || `relative rounded-[16px] w-[1191px] ${isDefaultDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[28px] relative w-full">
          <div className="content-stretch flex gap-[46px] items-center relative shrink-0">
            <AtomeTitreIconSuggestion>
              <IaSuggestionsDashboardBodyMdLight>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Conseil"}</IaSuggestionsDashboardBodyMdLight>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />}
              {isDefaultDark && <IaSuggestionsDashboardAtomeAiSuggestionText text="label" />}
            </AtomeTitreIconSuggestion>
            <AtomeTitreIconSuggestion>
              <IaSuggestionsDashboardBodyMdLight>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Service"}</IaSuggestionsDashboardBodyMdLight>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />}
              {isDefaultDark && <IaSuggestionsDashboardAtomeAiSuggestionText text="label" />}
            </AtomeTitreIconSuggestion>
            <AtomeTitreIconSuggestion>
              <IaSuggestionsDashboardBodyMdLight>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Administratif"}</IaSuggestionsDashboardBodyMdLight>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" propriete1="1 light" />}
              {isDefaultDark && <IaSuggestionsDashboardAtomeAiSuggestionText text="label" />}
            </AtomeTitreIconSuggestion>
            <AtomeTitreIconSuggestion>
              <IaSuggestionsDashboardBodyMdLight>{isDefaultDark ? "Body . md . SemiBold . 16/20px" : "Transaction"}</IaSuggestionsDashboardBodyMdLight>
              {isDefaultLight && <AtomeAiSuggestion className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" />}
              {isDefaultDark && <IaSuggestionsDashboardAtomeAiSuggestionText text="label" />}
            </AtomeTitreIconSuggestion>
          </div>
          <div className={`relative rounded-[16px] shrink-0 ${isDefaultDark ? "bg-[#635cc7]" : "bg-[#7b72f9]"}`} data-name="button">
            <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDefaultDark ? "border-[#635cc7]" : "border-[#7b72f9]"}`} />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                <p className={`font-["roboto:SemiBold",sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefaultDark ? "text-[#111215]" : "text-white"}`}>Voir les suggestions</p>
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                  <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 24 24" : "0 0 20 20"}>
                      <g id="arrow-right">
                        <path d={isDefaultDark ? svgPaths.p1c2f080 : svgPaths.p3a9aee80} id="Vector" stroke={isDefaultDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, white)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_2" opacity="0" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IaSuggestionsDashboard1() {
  return <IaSuggestionsDashboard className="bg-[#ecedee] relative rounded-[16px] size-full" />;
}