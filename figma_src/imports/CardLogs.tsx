function CardLogsBodySmLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}
type CardLogsProps = {
  className?: string;
  propriete1?: "default light" | "default dark";
};

function CardLogs({ className, propriete1 = "default light" }: CardLogsProps) {
  const isDefaultDark = propriete1 === "default dark";
  return (
    <div className={className || "relative w-[360px]"}>
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[10px] py-[6px] relative w-full">
        <div className="h-0 relative shrink-0 w-full" data-name="horizontal divider . 350 px">
          <div className="absolute bottom-full left-0 right-0 top-0">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 350 1" : "0 0 340 1"}>
                <line id="Line 18" stroke="var(--stroke-0, #ECEDEE)" x2={isDefaultDark ? "350" : "340"} y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex items-start relative shrink-0">
            <CardLogsBodySmLight>
              <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#444955]" : "text-[#d0d1d4]"}`}>{isDefaultDark ? "Body . sm . Bold . 14/16px" : "12 fév. 2026"}</p>
            </CardLogsBodySmLight>
            <CardLogsBodySmLight>
              <p className={`font-["roboto:Bold",sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#444955]" : "text-[#d0d1d4]"}`}>{isDefaultDark ? "Body . sm . Bold . 14/16px" : "12:56"}</p>
            </CardLogsBodySmLight>
          </div>
          <div className="content-stretch flex items-center relative shrink-0">
            <CardLogsBodySmLight>
              <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{isDefaultDark ? "Body . sm . Bold . 14/16px" : "Auteur"}</p>
            </CardLogsBodySmLight>
            <div className="h-[20px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${isDefaultDark ? "border-[#d0d1d4]" : "border-[#444955]"}`} />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
                  <p className={`font-["roboto:Bold",sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap ${isDefaultDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>{isDefaultDark ? "LABEL" : "CATÉGORIE"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Body . sm . light">
            <div className="content-stretch flex items-start px-[10px] py-[8px] relative w-full">
              <p className={`font-["roboto:Regular",sans-serif] leading-[16px] not-italic relative text-[#444955] text-[14px] tracking-[0.14px] ${isDefaultDark ? "shrink-0 whitespace-nowrap" : "flex-[1_0_0] min-h-px min-w-px"}`}>{isDefaultDark ? "Body . sm . Regular . 14/16px" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardLogs1() {
  return <CardLogs className="relative size-full" />;
}