function ButtonMultiLabelBodyMdLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonMultiLabelProps = {
  className?: string;
  propriete1?: "first light" | "second light" | "third light" | "first dark" | "third dark" | "second dark";
};

function ButtonMultiLabel({ className, propriete1 = "first light" }: ButtonMultiLabelProps) {
  const isSecondDarkOrThirdDarkOrFirstDark = ["second dark", "third dark", "first dark"].includes(propriete1);
  const isSecondLight = propriete1 === "second light";
  const isSecondLightOrThirdLight = ["second light", "third light"].includes(propriete1);
  const isThirdLight = propriete1 === "third light";
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative">
          <div className={`content-stretch flex items-center justify-center p-[6px] relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-[119px] ${propriete1 === "first dark" ? "bg-[#333740]" : ["second dark", "third dark"].includes(propriete1) ? "bg-[#111215]" : isSecondLightOrThirdLight ? "bg-white" : "bg-[#dadbdd]"}`} data-name="btn_label">
            <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none rounded-bl-[20.5px] rounded-tl-[20.5px] ${isSecondDarkOrThirdDarkOrFirstDark ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <ButtonMultiLabelBodyMdLight>
              <p className={`leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isSecondDarkOrThirdDarkOrFirstDark ? 'font-["roboto:Bold",sans-serif] text-[#444955]' : isSecondLightOrThirdLight ? 'font-["roboto:SemiBold",sans-serif] text-[#444955]' : 'font-["roboto:Bold",sans-serif] text-[#333740]'}`}>{isSecondDarkOrThirdDarkOrFirstDark ? "Body . md . Bold . 16/20px" : isSecondLightOrThirdLight ? "Label" : "Label"}</p>
            </ButtonMultiLabelBodyMdLight>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[6px] relative shrink-0 w-[116px] ${["third dark", "first dark"].includes(propriete1) ? "bg-[#111215]" : propriete1 === "second dark" ? "bg-[#333740]" : isSecondLight ? "bg-[#dadbdd]" : "bg-white"}`} data-name="btn_label">
            <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none ${isSecondDarkOrThirdDarkOrFirstDark ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <ButtonMultiLabelBodyMdLight>
              <p className={`leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isSecondLight ? 'font-["roboto:Bold",sans-serif] text-[#333740]' : 'font-["roboto:SemiBold",sans-serif] text-[#444955]'}`}>{isSecondDarkOrThirdDarkOrFirstDark ? "Body . md . SemiBold . 16/20px" : isSecondLightOrThirdLight ? "label" : "label"}</p>
            </ButtonMultiLabelBodyMdLight>
          </div>
          <div className={`content-stretch flex items-center justify-center p-[6px] relative rounded-br-[20px] rounded-tr-[20px] shrink-0 w-[119px] ${propriete1 === "third dark" ? "bg-[#333740]" : ["second dark", "first dark"].includes(propriete1) ? "bg-[#111215]" : isThirdLight ? "bg-[#dadbdd]" : "bg-white"}`} data-name="btn_label">
            <div aria-hidden="true" className={`absolute border border-solid inset-[-0.5px] pointer-events-none rounded-br-[20.5px] rounded-tr-[20.5px] ${isSecondDarkOrThirdDarkOrFirstDark ? "border-[#22252b]" : "border-[#dadbdd]"}`} />
            <ButtonMultiLabelBodyMdLight>
              <p className={`leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isThirdLight ? 'font-["roboto:Bold",sans-serif] text-[#333740]' : 'font-["roboto:SemiBold",sans-serif] text-[#444955]'}`}>{isSecondDarkOrThirdDarkOrFirstDark ? "Body . md . SemiBold . 16/20px" : isSecondLightOrThirdLight ? "label" : "label"}</p>
            </ButtonMultiLabelBodyMdLight>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ButtonMultiLabel1() {
  return <ButtonMultiLabel className="relative size-full" />;
}