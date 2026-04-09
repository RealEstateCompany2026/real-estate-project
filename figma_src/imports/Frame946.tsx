import svgPaths from "./svg-lwzq51jtgs";
import { imgContentCopy } from "./svg-xg9sk";

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[70px] items-start justify-center pb-[21px] pl-[10px] pr-[11px] pt-[17px] relative rounded-[16px] shrink-0 w-[741px]">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0 w-[720px]" data-name="Body . sm . light">
        <p className="font-['roboto:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{`http://www.realagent.com/fr/numero-de-reference-de-lannonce-du-bien-concerne`}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Copier</p>
      </div>
      <Frame />
      <div className="content-stretch flex items-center p-[12px] relative rounded-[16px] shrink-0" data-name="icon button">
        <div className="relative shrink-0 size-[20px]" data-name="icn_content_copy">
          <div className="absolute inset-[8.33%_16.67%_8.33%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-2px] mask-size-[24px_24px]" data-name="content_copy" style={{ maskImage: `url('${imgContentCopy}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1667 16.6667">
              <path d={svgPaths.p20525400} fill="var(--fill-0, #444955)" id="content_copy" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#ecedee] content-stretch flex flex-col items-start pl-[20px] pr-[10px] py-[25px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
    </div>
  );
}