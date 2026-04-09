import clsx from "clsx";
import svgPaths from "./svg-hv3dkyadiy";
import { imgAdd, imgKidStar } from "./svg-u21zf";
import imgEllipse4 from "figma:asset/82e8d804cfdfda1c76f48520ffd46524d87d1170.png";
type SheetsSide1024PxBtnIcnTinyProps = {
  additionalClassNames?: string;
};

function SheetsSide1024PxBtnIcnTiny({ children, additionalClassNames = "" }: React.PropsWithChildren<SheetsSide1024PxBtnIcnTinyProps>) {
  return (
    <div className={clsx("absolute left-[93px] rounded-[20px] size-[46px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

export default function SheetsSide1024Px() {
  return (
    <div className="relative size-full" data-name="Sheets_side_1024px">
      <div className="absolute bg-white inset-0 shadow-[0px_0px_10px_7px_rgba(0,0,0,0.05)]" />
      <SheetsSide1024PxBtnIcnTiny additionalClassNames="top-[223px]">
        <div className="relative shrink-0 size-[24px]" data-name="icn_conversion_path">
          <div className="absolute inset-[12.5%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-3px] mask-size-[24px_24px]" data-name="conversion_path" style={{ maskImage: `url('${imgKidStar}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
              <path d={svgPaths.p5aa8780} fill="var(--fill-0, #444955)" id="conversion_path" />
            </svg>
          </div>
        </div>
      </SheetsSide1024PxBtnIcnTiny>
      <SheetsSide1024PxBtnIcnTiny additionalClassNames="top-[283px]">
        <div className="relative shrink-0 size-[24px]" data-name="icn_kid_star">
          <div className="absolute inset-[8.33%_8.23%_12.5%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="kid_star" style={{ maskImage: `url('${imgKidStar}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.025 19">
              <path d={svgPaths.p113f4e00} fill="var(--fill-0, #444955)" id="kid_star" />
            </svg>
          </div>
        </div>
      </SheetsSide1024PxBtnIcnTiny>
      <SheetsSide1024PxBtnIcnTiny additionalClassNames="top-[343px]">
        <div className="relative shrink-0 size-[24px]" data-name="icn_plus">
          <div className="-translate-y-1/2 absolute aspect-[14/14] left-[20.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-5px] mask-size-[24px_24px] right-[20.83%] top-1/2" data-name="add" style={{ maskImage: `url('${imgAdd}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2ccb20} fill="var(--fill-0, #444955)" id="add" />
            </svg>
          </div>
        </div>
      </SheetsSide1024PxBtnIcnTiny>
      <div className="absolute left-[215px] top-[51px]" data-name="H4 . Desktop . light">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[10px] relative">
            <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[28px] tracking-[0.28px] whitespace-nowrap">
              <p className="leading-[34px]">Sheets title</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[43px] size-[150px] top-[39px]">
        <img alt="" className="absolute block max-w-none size-full" height="150" src={imgEllipse4} width="150" />
      </div>
      <div className="absolute inset-[3.81%_5.27%_89.36%_87.89%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
          <g id="Group 58">
            <circle cx="35" cy="35" fill="var(--fill-0, #FCFBFC)" id="Ellipse 3" r="34.5" stroke="var(--stroke-0, #E2E2E2)" />
            <g>
              <mask height="24" id="mask0_26_11035" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="23" y="23">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" x="23" y="23" />
              </mask>
              <g mask="url(#mask0_26_11035)">
                <path d={svgPaths.p457d480} fill="var(--fill-0, #1C1B1F)" id="close_2" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}