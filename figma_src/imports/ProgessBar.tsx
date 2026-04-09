import svgPaths from "./svg-g11e1ka1o1";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center size-full">
      <div className="content-stretch flex flex-col items-start justify-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function ProgessBarHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[12px] items-center relative">
        <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/arrow-left">
          <Wrapper>
            <g id="arrow-left">
              <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <g id="Vector_2" opacity="0" />
            </g>
          </Wrapper>
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/arrow-right">
          <Wrapper>
            <g id="arrow-right">
              <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <g id="Vector_2" opacity="0" />
            </g>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
type ProgessBarProps = {
  className?: string;
  propriete1?: "light" | "dark";
};

function ProgessBar({ className, propriete1 = "light" }: ProgessBarProps) {
  const isDark = propriete1 === "dark";
  const isLight = propriete1 === "light";
  return (
    <div className={className || `h-[100px] max-w-[1191px] min-w-[380px] relative rounded-[20px] w-[1191px] ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="flex flex-col justify-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] px-[10px] py-[34px] relative size-full">
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            {isLight && (
              <>
                <ProgessBarHelper>
                  <p className="font-['roboto:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">Complétion</p>
                </ProgessBarHelper>
                <div className="relative shrink-0">
                  <Helper />
                </div>
                <div className="bg-[#ecedee] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[16px]">
                  <Wrapper1>
                    <div className={`bg-[#0da500] h-[20px] rounded-[20px] shrink-0 ${"20%" === "100%" ? "w-full" : "20%" === "80%" ? "w-[869px]" : "20%" === "60%" ? "w-[657px]" : "20%" === "40%" ? "w-[423px]" : "w-[214px]"}`} />
                  </Wrapper1>
                </div>
              </>
            )}
            {isDark && (
              <>
                <ProgessBarHelper>
                  <p className="font-['roboto:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d0d1d4] text-[14px] tracking-[0.14px] whitespace-nowrap">Body . sm . SemiBold . 14/16px</p>
                </ProgessBarHelper>
                <div className="relative shrink-0" data-name="button . pagination . mini">
                  <Helper />
                </div>
                <div className="bg-[#22252b] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[16px]" data-name="atome . process bar">
                  <Wrapper1>
                    <div className="bg-[#0da500] h-[20px] rounded-[20px] shrink-0 w-[214px]" />
                  </Wrapper1>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProgessBar1() {
  return <ProgessBar className="bg-white relative rounded-[20px] size-full" />;
}