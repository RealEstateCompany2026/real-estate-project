function AtomeDatepickerDayHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative">{children}</div>
      </div>
    </div>
  );
}

export default function AtomeDatepickerDay() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative w-full">
          {"default . light" === "default . light" && (
            <AtomeDatepickerDayHelper>
              <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] text-center tracking-[0.16px] whitespace-nowrap">L</p>
            </AtomeDatepickerDayHelper>
          )}
          {"default . light" === "default . dark" && (
            <AtomeDatepickerDayHelper>
              <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Body . md . Regular . 16/20px</p>
            </AtomeDatepickerDayHelper>
          )}
        </div>
      </div>
    </div>
  );
}