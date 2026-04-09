import svgPaths from "./svg-xxqh30ywll";
import { imgAttachFile } from "./svg-4m97j";

export default function OrganismeMessageEdition() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="organisme . message . édition">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Body . md . light">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">
              <div className="flex-[1_0_0] font-['roboto:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#444955] text-[0px] text-[16px] tracking-[0.16px] whitespace-pre-wrap">
                <p className="leading-[20px] mb-0">{`Bonjour Jean-Philippe, `}</p>
                <p>
                  <span className="leading-[20px]">{`Pourriez-vous m’apporter quelques précisions concernant votre profil afin que je puisse améliorer mes capacités à vous apporter une pleine satisfaction svp ? Pour cela, rien de plus simple. Il vous suffit de `}</span>
                  <span className="decoration-solid font-['Roboto:Bold',sans-serif] font-bold leading-[20px] tracking-[0.16px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                    cliquer ici
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[16px] shrink-0" data-name="Status=default, Type=outlined light">
          <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
              <div className="relative shrink-0 size-[20px]" data-name="icn_attach_file">
                <div className="absolute bottom-[8.33%] left-[22.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.5px_-2px] mask-size-[24px_24px] right-1/4 top-[8.33%]" data-name="attach_file" style={{ maskImage: `url('${imgAttachFile}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4167 16.6667">
                    <path d={svgPaths.p205bf000} fill="var(--fill-0, #444955)" id="attach_file" />
                  </svg>
                </div>
              </div>
              <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Pièce jointe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}