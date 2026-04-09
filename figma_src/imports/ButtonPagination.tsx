import svgPaths from "./svg-zyfjnf5k0l";
type ButtonPaginationProps = {
  className?: string;
  type?: "light" | "dark";
};

function ButtonPagination({ className, type = "light" }: ButtonPaginationProps) {
  const isDark = type === "dark";
  return (
    <div className={className || "h-[54px] relative rounded-[20px] w-[117px]"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[7px] py-[4px] relative size-full">
          <div className="relative rounded-[16px] shrink-0" data-name="icon button">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[12px] relative">
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-left">
                  <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-left">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDark ? "0 0 24 24" : "0 0 20 20"}>
                      <g id="arrow-left">
                        <path d={isDark ? svgPaths.p2a5cd480 : svgPaths.p3a43fe80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                        <g id="Vector_2" opacity="0" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`relative rounded-[16px] shrink-0 ${isDark ? "bg-[#333740]" : "bg-[#dadbdd]"}`} data-name="icon button">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[12px] relative">
                <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
                  <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="arrow-right">
                        <path d={svgPaths.p1c2f080} id="Vector" stroke={isDark ? "var(--stroke-0, #444955)" : "var(--stroke-0, #333740)"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
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

export default function ButtonPagination1() {
  return <ButtonPagination className="relative rounded-[20px] size-full" />;
}