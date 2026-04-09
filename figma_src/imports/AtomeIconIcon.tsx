import svgPaths from "./svg-xvc99zx8eg";
import { imgPerson2 } from "./svg-w1e6e";

export default function AtomeIconIcon() {
  return (
    <div className="relative size-full" data-name="atome . icon + icon">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center relative size-full">
          <div className="relative shrink-0 size-[20px]" data-name="icn_person">
            <div className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]" data-name="person_2" style={{ maskImage: `url('${imgPerson2}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p2d66dc00} fill="var(--fill-0, #444955)" id="person_2" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="icn_vital_signs">
            <div className="absolute inset-[16.67%_4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-4px] mask-size-[24px_24px]" data-name="vital_signs" style={{ maskImage: `url('${imgPerson2}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 13.3333">
                <path d={svgPaths.p6ff9340} fill="var(--fill-0, #0DA500)" id="vital_signs" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}