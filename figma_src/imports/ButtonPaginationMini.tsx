import svgPaths from "./svg-t7ybo9awtv";

function ButtonPaginationMiniHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

export default function ButtonPaginationMini() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center relative">
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/arrow-left">
            <ButtonPaginationMiniHelper>
              <g id="arrow-left">
                <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <g id="Vector_2" opacity="0" />
              </g>
            </ButtonPaginationMiniHelper>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/arrow-right">
            <ButtonPaginationMiniHelper>
              <g id="arrow-right">
                <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <g id="Vector_2" opacity="0" />
              </g>
            </ButtonPaginationMiniHelper>
          </div>
        </div>
      </div>
    </div>
  );
}