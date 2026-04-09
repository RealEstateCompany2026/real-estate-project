import svgPaths from "./svg-lhioocecdx";
import { imgAdd } from "./svg-cr1va";

export default function IconButton() {
  return (
    <div className="bg-[#635cc7] relative rounded-[16px] size-full" data-name="icon button">
      <div aria-hidden="true" className="absolute border border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="icn_plus">
            <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                <path d={svgPaths.pe7cde70} fill="var(--fill-0, white)" id="add" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[-4px] rounded-[16px]">
            <div aria-hidden="true" className="absolute border-2 border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}