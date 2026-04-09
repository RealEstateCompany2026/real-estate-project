import svgPaths from "./svg-569gj2toft";

function Group() {
  return (
    <div className="absolute contents left-0 top-[232px]">
      <div className="absolute content-stretch flex items-center left-0 px-[10px] py-[8px] top-[232px] w-[758px]" data-name="Body . md . light">
        <p className="flex-[1_0_0] font-['roboto:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#444955] text-[16px] tracking-[0.16px]">{`Le prix au m² est automatiquement calculé en fonction du prix de vente et du nombre de m² du bien. La comparaison est réalisée à partir des informations relatives au prix du marché sur le même secteur. Cette information ne préjuge en aucun cas de l'évaluation du bien, qui dépend de son état, ses caractéristiques et de sa localisation. `}</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[192px]">
      <div className="absolute content-stretch flex items-center left-0 px-[10px] py-[8px] top-[192px] w-[123px]" data-name="Body . md . light">
        <p className="flex-[1_0_0] font-['roboto:Bold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#444955] text-[16px] tracking-[0.16px]">3 028 €/m²</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[425px] top-[192px]">
      <div className="absolute content-stretch flex items-center left-[425px] px-[10px] py-[8px] top-[192px] w-[105px]" data-name="Body . md . light">
        <p className="font-['roboto:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">5 804 €/m²</p>
      </div>
    </div>
  );
}

function VuesaxLinearCup() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/cup">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="cup">
          <path d="M10.1253 13.75V15.5" id="Vector" stroke="var(--stroke-0, #0C6304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1852f880} id="Vector_2" stroke="var(--stroke-0, #0C6304)" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M5.12533 18.3333H15.1253" id="Vector_3" stroke="var(--stroke-0, #0C6304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1097f270} id="Vector_4" stroke="var(--stroke-0, #0C6304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pf3d9140} id="Vector_5" stroke="var(--stroke-0, #0C6304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14cdcc80} id="Vector_6" stroke="var(--stroke-0, #0C6304)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_7" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex items-center left-0 p-[10px] top-0" data-name="H6 . Desktop . light">
        <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333740] text-[20px] tracking-[0.2px] whitespace-nowrap">
          <p className="leading-[24px]">Prix dans le quartier</p>
        </div>
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <div className="absolute bg-[#e6f6e5] border border-[#86d280] border-solid h-[94px] left-0 rounded-[16px] top-[61px] w-[530px]" />
      <div className="absolute bg-gradient-to-r from-[#0da500] h-[20px] left-0 rounded-[16px] to-[#7b72f9] top-[166px] w-[530px]" />
      <div className="absolute content-stretch flex items-center left-[62px] p-[10px] top-[73px]" data-name="H6 . Desktop . light">
        <div className="flex flex-col font-['roboto:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0c6304] text-[20px] tracking-[0.2px] whitespace-nowrap">
          <p>
            <span className="leading-[24px]">4 826 € /m</span>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              ²
            </span>
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex items-center left-[62px] px-[10px] py-[8px] top-[107px]" data-name="Body . md . light">
        <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0c6304] text-[16px] tracking-[0.16px] whitespace-nowrap">Moins cher que des biens comparables dans la région.</p>
      </div>
      <div className="absolute bg-[#e6f6e5] content-stretch flex items-center left-[18px] p-[12px] rounded-[16px] top-[86px]" data-name="icon button">
        <div aria-hidden="true" className="absolute border-0 border-[#444955] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/cup">
          <VuesaxLinearCup />
        </div>
      </div>
    </div>
  );
}