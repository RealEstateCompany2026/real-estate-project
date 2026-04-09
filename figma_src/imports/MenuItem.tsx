import svgPaths from "./svg-xros0x1j0l";
import { imgMenuItem } from "./svg-wmh73";

function MenuItemHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ maskImage: `url('${imgMenuItem}')` }} className="absolute inset-[16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-4px] mask-size-[24px_24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

export default function MenuItem() {
  return (
    <div className="bg-white relative size-full" data-name="menu item">
      <div aria-hidden="true" className="absolute border-[#dadbdd] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="icn_person">
            <MenuItemHelper>
              <path d={svgPaths.p2c4b9f00} fill="var(--fill-0, #444955)" id="person_2" />
            </MenuItemHelper>
          </div>
          <p className="flex-[1_0_0] font-['roboto:SemiBold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#444955] text-[16px] tracking-[0.16px]">Menu item</p>
          <div className="relative shrink-0 size-[24px]" data-name="icn_arrow_forward">
            <MenuItemHelper>
              <path d={svgPaths.p3997600} fill="var(--fill-0, #444955)" id="arrow_forward" />
            </MenuItemHelper>
          </div>
        </div>
      </div>
    </div>
  );
}