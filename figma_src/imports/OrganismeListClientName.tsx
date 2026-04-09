import svgPaths from "./svg-coj5df3gk9";

export default function OrganismeListClientName() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[30px] pr-[138px] py-[34px] relative size-full" data-name="organisme . list . client name">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[259px]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="content-stretch flex h-[20px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
            <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">VENDEUR</p>
          </div>
          <div className="content-stretch flex h-[20px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
            <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#444955] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">ACQUÉREUR</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="atome . icon + text . medium">
          <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/profile-circle">
            <div className="absolute contents inset-0" data-name="vuesax/linear/profile-circle">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="profile-circle">
                  <path d={svgPaths.p35d95c00} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p22ef9d00} id="Vector_2" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p14d24500} id="Vector_3" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <g id="Vector_4" opacity="0" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
            <p className="leading-[20px]">Jean-Christophe LEMARCHAND</p>
          </div>
        </div>
      </div>
    </div>
  );
}