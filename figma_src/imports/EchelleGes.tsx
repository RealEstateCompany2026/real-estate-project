export default function EchelleGes({ className }: { className?: string }) {
  return (
    <div className={className || "h-[44px] relative w-[328px]"} data-name="echelle - GES">
      <div className="absolute content-stretch flex inset-[27.27%_47.87%_0_15.55%] items-center px-[10px] py-[8px]" data-name="Body . sm . light">
        <p className="font-['roboto:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">4 K CO² /m² /an</p>
      </div>
      <div className="absolute bg-[#a3dbfc] inset-[6.82%_87.8%_20.45%_0] rounded-bl-[20px] rounded-tl-[20px]" />
      <div className="absolute content-stretch flex inset-[0_87.8%_13.64%_1.52%] items-center justify-center px-[10px] py-[6px]" data-name="H3">
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[20px] text-white tracking-[0.2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          A
        </p>
      </div>
      <div className="absolute bg-[#8ab5d2] bottom-3/4 left-[14.63%] right-[73.17%] top-[6.82%]" />
      <div className="absolute bg-[#7692b1] bottom-3/4 left-[29.27%] right-[58.54%] top-[6.82%]" />
      <div className="absolute bg-[#5e708d] bottom-3/4 left-[43.9%] right-[43.9%] top-[6.82%]" />
      <div className="absolute bg-[#4d5272] bottom-3/4 left-[58.54%] right-[29.27%] top-[6.82%]" />
      <div className="absolute bg-[#3a3550] bottom-3/4 left-[73.17%] right-[14.63%] top-[6.82%]" />
      <div className="absolute bg-[#291b35] bottom-3/4 left-[87.8%] right-0 top-[6.82%]" />
    </div>
  );
}