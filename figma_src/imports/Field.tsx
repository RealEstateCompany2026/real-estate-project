import svgPaths from "./svg-ukop040xip";
import { imgField } from "./svg-fdz9y";

export default function Field() {
  return (
    <div className="bg-white relative size-full" data-name="Field">
      <div aria-hidden="true" className="absolute border-[#ecedee] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="icn_person">
            <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="person_2" style={{ maskImage: `url('${imgField}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p2d66dc00} fill="var(--fill-0, #A1A4AA)" id="person_2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['roboto:SemiBold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#a1a4aa] text-[16px] tracking-[0.16px]">
            <p className="leading-[20px]">First name</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="icn_info">
            <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="info" style={{ maskImage: `url('${imgField}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path d={svgPaths.p35a3ef40} fill="var(--fill-0, #A1A4AA)" id="info" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}