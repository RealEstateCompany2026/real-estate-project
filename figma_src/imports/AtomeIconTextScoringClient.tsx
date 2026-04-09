import svgPaths from "./svg-oxd6s4xfit";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}

function AtomeIconTextScoringClientBodyMdLight({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{children}</p>
    </Wrapper>
  );
}
type AtomeIconTextScoringClientBodyMdDarkTextProps = {
  text: string;
};

function AtomeIconTextScoringClientBodyMdDarkText({ text }: AtomeIconTextScoringClientBodyMdDarkTextProps) {
  return (
    <Wrapper>
      <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}

export default function AtomeIconTextScoringClient() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative">
          {["very low . light", "very low . dark"].includes("very low . light") && (
            <div className="h-[20.4px] relative shrink-0 w-[32px]" data-name="very low">
              <div className="absolute h-[20.141px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.141">
                  <path d={svgPaths.p319a7380} fill="var(--fill-0, #EC0119)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["low . light", "low . dark"].includes("very low . light") && (
            <div className="h-[20.706px] relative shrink-0 w-[32px]" data-name="low">
              <div className="absolute h-[20.014px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.0137">
                  <path d={svgPaths.p2d8a4b80} fill="var(--fill-0, #FF882F)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["very low . light", "low . light"].includes("very low . light") && <AtomeIconTextScoringClientBodyMdLight>{"very low . light" === "low . light" ? "25" : "5"}</AtomeIconTextScoringClientBodyMdLight>}
          {["medium . light", "medium . dark"].includes("very low . light") && (
            <div className="h-[19.979px] relative shrink-0 w-[32px]" data-name="medium">
              <div className="absolute h-[19.963px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19.963">
                  <path d={svgPaths.p3e2bce80} fill="var(--fill-0, #FDEB03)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["very low . dark", "low . dark", "medium . dark"].includes("very low . light") && <AtomeIconTextScoringClientBodyMdDarkText text="Body . md . SemiBold . 16/20px" />}
          {["high . light", "high . dark"].includes("very low . light") && (
            <div className="h-[20.569px] relative shrink-0 w-[32px]" data-name="high">
              <div className="absolute h-[19.979px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 19.9793">
                  <path d={svgPaths.p21e37f00} fill="var(--fill-0, #4AC57B)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["medium . light", "high . light"].includes("very low . light") && <AtomeIconTextScoringClientBodyMdLight>{"very low . light" === "high . light" ? "75" : "very low . light" === "medium . light" ? "50" : ""}</AtomeIconTextScoringClientBodyMdLight>}
          {["very high . light", "very high . dark"].includes("very low . light") && (
            <div className="h-[20.408px] relative shrink-0 w-[32px]" data-name="very high">
              <div className="absolute h-[20.111px] left-0 right-0 top-0" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20.1106">
                  <path d={svgPaths.p22896d00} fill="var(--fill-0, #00A774)" id="Union" />
                </svg>
              </div>
            </div>
          )}
          {["high . dark", "very high . dark"].includes("very low . light") && <AtomeIconTextScoringClientBodyMdDarkText text="Body . md . SemiBold . 16/20px" />}
          {"very low . light" === "very high . light" && <AtomeIconTextScoringClientBodyMdLight>95</AtomeIconTextScoringClientBodyMdLight>}
        </div>
      </div>
    </div>
  );
}