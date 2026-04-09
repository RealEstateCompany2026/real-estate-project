import svgPaths from "./svg-pqlvr9h64o";

function VuesaxLinearProfileCircle() {
  return (
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
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="atome . icon + text . medium">
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/profile-circle">
          <VuesaxLinearProfileCircle />
        </div>
        <div className="flex flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[20px]">Nathalie DUFLOT</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="bg-[#e6f6e5] content-stretch flex h-[20px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
        <div aria-hidden="true" className="absolute border border-[#c3e9bf] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0da500] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">INCOMPLET</p>
      </div>
    </div>
  );
}

function VuesaxLinearArrowRight() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right">
          <path d={svgPaths.p3a9aee80} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame />
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[16px] shrink-0" data-name="button">
        <div aria-hidden="true" className="absolute border-0 border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Voir les notes</p>
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
          <VuesaxLinearArrowRight />
        </div>
      </div>
      <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" data-name="atome . ai . suggestion">
        <div className="absolute gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid inset-[0_1.47%] px-[6px] rounded-[16px]" data-name="Sticker">
          <div aria-hidden="true" className="absolute border border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="col-1 content-stretch flex items-center justify-self-start px-[6px] py-[4px] relative row-1 self-start shrink-0" data-name="Body . sm . light">
            <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a4aa] text-[14px] tracking-[0.14px] whitespace-nowrap">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4 />
      <Frame1 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center px-[20px] py-[13px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
    </div>
  );
}