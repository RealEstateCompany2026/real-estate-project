function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">{`Chiffre d’Affaire `}</p>
      </div>
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">32 000€</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Coûts de l’Affaire</p>
      </div>
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">3 900 €</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Marge Brute</p>
      </div>
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">28 100 €</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Taux de marge brute</p>
      </div>
      <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0" data-name="Body . md . light">
        <p className="font-['roboto:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">88%</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame4 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[13px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[#ecedee] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame1 />
    </div>
  );
}