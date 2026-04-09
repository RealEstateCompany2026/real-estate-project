import svgPaths from "./svg-2qpgx4ae2m";

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="bg-[#e6f6e5] content-stretch flex h-[20px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
        <div aria-hidden="true" className="absolute border border-[#c3e9bf] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0da500] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">ÉDITION</p>
      </div>
      <div className="bg-[#ecedee] content-stretch flex h-[20px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
        <div aria-hidden="true" className="absolute border border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#a1a4aa] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">RÉVISION</p>
      </div>
      <div className="bg-[#ecedee] content-stretch flex h-[20px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="atome . sticker">
        <div aria-hidden="true" className="absolute border border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="font-['roboto:Bold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#a1a4aa] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">SIGNATURE</p>
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
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Voir le mandat</p>
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/arrow-right">
          <VuesaxLinearArrowRight />
        </div>
      </div>
      <div className="h-[24px] relative rounded-[16px] shrink-0 w-[34px]" data-name="atome . ai . suggestion">
        <div className="absolute bg-[#7b72f9] gap-x-[10px] gap-y-[10px] grid-cols-[repeat(1,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] inline-grid inset-[0_1.47%] px-[6px] rounded-[16px]" data-name="Sticker">
          <div aria-hidden="true" className="absolute border border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="col-1 content-stretch flex items-center justify-self-start px-[6px] py-[4px] relative row-1 self-start shrink-0" data-name="Body . sm . light">
            <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">MV.789.083.263</p>
      </div>
      <Frame1 />
    </div>
  );
}

export default function ListMandat() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center px-[20px] py-[13px] relative rounded-[16px] size-full" data-name="List . mandat">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame2 />
    </div>
  );
}