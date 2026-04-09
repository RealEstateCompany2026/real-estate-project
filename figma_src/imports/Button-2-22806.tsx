import svgPaths from "./svg-hgzonsuknr";
import { imgButton } from "./svg-6zxqp";

function ButtonIcnInfo() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="info" style={{ maskImage: `url('${imgButton}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
          <path d={svgPaths.p35a3ef40} fill="var(--fill-0, #A1A4AA)" id="info" />
        </svg>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#ecedee] relative rounded-[16px] size-full" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-[#a1a4aa] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <ButtonIcnInfo />
          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a1a4aa] text-[16px] tracking-[0.16px] whitespace-nowrap">Button title</p>
          <ButtonIcnInfo />
        </div>
      </div>
    </div>
  );
}