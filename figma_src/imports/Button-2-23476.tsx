import svgPaths from "./svg-xhy9u8rvap";
import { imgInfo } from "./svg-qeuqn";

function ButtonIcnInfo() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="info" style={{ maskImage: `url('${imgInfo}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
          <path d={svgPaths.p35a3ef40} fill="var(--fill-0, white)" id="info" />
        </svg>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#635cc7] relative rounded-[16px] size-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <ButtonIcnInfo />
          <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap">Button title</p>
          <ButtonIcnInfo />
          <div className="absolute inset-[-4px] rounded-[16px]">
            <div aria-hidden="true" className="absolute border-2 border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}