import clsx from "clsx";
import svgPaths from "./svg-tuorjebsd4";
import { imgArrowDropDown, imgIcnArrowDropDown, imgEdit, imgIconButton } from "./svg-h1m48";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center py-[2px] relative size-full">
        <div className="relative shrink-0 w-[40px]" data-name="Body . md . light">
          <div className="flex flex-row items-center justify-center size-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
type AtomeDatepickerChiffre1Props = {
  text: string;
  additionalClassNames?: string;
};

function AtomeDatepickerChiffre1({ children, text, additionalClassNames = "" }: React.PropsWithChildren<AtomeDatepickerChiffre1Props>) {
  return (
    <div className="bg-[#ecedee] relative rounded-[20px] shrink-0 size-[40px]">
      <Wrapper1 additionalClassNames={additionalClassNames}>
        <div className={clsx("content-stretch flex items-center justify-center px-[10px] py-[8px] relative", additionalClassNames)}>
          <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] text-center tracking-[0.16px] whitespace-nowrap">{text}</p>
        </div>
      </Wrapper1>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative w-full">{children}</div>
    </Wrapper1>
  );
}
type ModalDatePickerBodySmDarkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ModalDatePickerBodySmDarkText({ text, additionalClassNames = "" }: ModalDatePickerBodySmDarkTextProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative size-full">
          <p className="font-['roboto:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d0d1d4] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type ModalDatePickerBodySmLightTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ModalDatePickerBodySmLightText({ text, additionalClassNames = "" }: ModalDatePickerBodySmLightTextProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[8px] relative size-full">
          <p className="font-['roboto:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] tracking-[0.14px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}

function AtomeDatepickerDay1() {
  return (
    <div className="relative shrink-0 w-[40px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative w-full">
          <BodyMdLightText text="M" />
        </div>
      </div>
    </div>
  );
}
type BodyMdLightTextProps = {
  text: string;
};

function BodyMdLightText({ text }: BodyMdLightTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative ">
          <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] text-center tracking-[0.16px] whitespace-nowrap">{text}</p>
        </div>
      </div>
    </div>
  );
}
type AtomeDatepickerMonthProps = {
  className?: string;
  propriete1?: "default . light" | "default. dark";
};

function AtomeDatepickerMonth({ className, propriete1 = "default . light" }: AtomeDatepickerMonthProps) {
  const isDefaultDark = propriete1 === "default. dark";
  return (
    <div className={className || "h-[36px] relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center relative">
          <div className={`flex flex-col font-["roboto:SemiBold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${isDefaultDark ? "text-[#dadbdd]" : "text-[#444955]"}`}>
            <p className="leading-[16px]">Aout 2025</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name="icn_arrow_drop_down">
            <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-7px_-10px] mask-size-[24px_24px]" data-name="arrow_drop_down" style={isDefaultDark ? { maskImage: `url('${imgIcnArrowDropDown}')` } : { maskImage: `url('${imgArrowDropDown}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefaultDark ? "0 0 10 5" : "0 0 8.33333 4.16667"}>
                <path d={isDefaultDark ? svgPaths.p29d06c00 : svgPaths.p1ca7b580} fill="var(--fill-0, #444955)" id="arrow_drop_down" stroke="var(--stroke-0, #444955)" strokeWidth="0.025" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type AtomeDatepickerDayProps = {
  className?: string;
  propriete1?: "default . light" | "default . dark";
};

function AtomeDatepickerDay({ className, propriete1 = "default . light" }: AtomeDatepickerDayProps) {
  return (
    <div className={className || "relative w-[40px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative w-full">
          {propriete1 === "default . light" && <BodyMdLightText text="L" />}
          {propriete1 === "default . dark" && (
            <div className="relative shrink-0" data-name="Body . md . dark">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative">
                  <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d0d1d4] text-[16px] tracking-[0.16px] whitespace-nowrap">Body . md . Regular . 16/20px</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type AtomeDatepickerChiffreProps = {
  className?: string;
  propriete1?: "default . light" | "hover . light" | "selected . light" | "today. light" | "today. dark" | "selected . dark" | "hover. dark" | "default. dark";
};

function AtomeDatepickerChiffre({ className, propriete1 = "default . light" }: AtomeDatepickerChiffreProps) {
  const isDefaultDark = propriete1 === "default. dark";
  const isHoverLightOrSelectedLightOrHoverDarkOrSelectedDark = ["hover . light", "selected . light", "hover. dark", "selected . dark"].includes(propriete1);
  const isSelectedDark = propriete1 === "selected . dark";
  const isSelectedLight = propriete1 === "selected . light";
  const isTodayDark = propriete1 === "today. dark";
  const isTodayLight = propriete1 === "today. light";
  const isTodayLightOrTodayDark = ["today. light", "today. dark"].includes(propriete1);
  return (
    <div className={className || `relative rounded-[20px] size-[40px] ${isSelectedDark ? "bg-[#7b72f9]" : ["default. dark", "hover. dark", "today. dark"].includes(propriete1) ? "bg-[#22252b]" : isSelectedLight ? "bg-[#635cc7]" : "bg-[#ecedee]"}`}>
      <div aria-hidden={isTodayLightOrTodayDark ? "true" : undefined} className={isTodayDark ? "absolute border border-[#7b72f9] border-solid inset-0 pointer-events-none rounded-[20px]" : isTodayLight ? "absolute border border-[#635cc7] border-solid inset-0 pointer-events-none rounded-[20px]" : "flex flex-col items-center justify-center size-full"}>
        {["default . light", "hover . light", "selected . light", "default. dark", "hover. dark", "selected . dark"].includes(propriete1) && (
          <div className="content-stretch flex flex-col items-center justify-center py-[2px] relative size-full">
            <div className={`relative shrink-0 ${isHoverLightOrSelectedLightOrHoverDarkOrSelectedDark ? "" : "w-[40px]"}`} data-name="Body . md . light">
              <div className="flex flex-row items-center justify-center size-full">
                <div className={`content-stretch flex items-center justify-center px-[10px] py-[8px] relative ${isHoverLightOrSelectedLightOrHoverDarkOrSelectedDark ? "" : "w-full"}`}>
                  <p className={`leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap ${isSelectedDark ? 'font-["roboto:Bold",sans-serif] text-[#444955]' : isDefaultDark ? 'font-["roboto:Regular",sans-serif] text-[#444955]' : isSelectedLight ? 'font-["roboto:Bold",sans-serif] text-white' : ["hover . light", "hover. dark"].includes(propriete1) ? 'font-["roboto:SemiBold",sans-serif] text-[#444955]' : 'font-["roboto:Regular",sans-serif] text-[#444955] text-center'}`}>{isSelectedDark ? "Body . md . Bold . 16/20px" : propriete1 === "hover. dark" ? "Body . md . SemiBold . 16/20px" : isDefaultDark ? "Body . md . Regular . 16/20px" : ["hover . light", "selected . light"].includes(propriete1) ? "30" : "30"}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isTodayLightOrTodayDark && (
        <Wrapper>
          <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isTodayDark ? "" : "text-center"}`}>{isTodayDark ? "Body . md . Regular . 16/20px" : isTodayLight ? "30" : ""}</p>
        </Wrapper>
      )}
    </div>
  );
}
type ModalDatePickerProps = {
  className?: string;
  propriete1?: "default light" | "defautl dark";
};

function ModalDatePicker({ className, propriete1 = "default light" }: ModalDatePickerProps) {
  const isDefaultLight = propriete1 === "default light";
  const isDefautlDark = propriete1 === "defautl dark";
  return (
    <div className={className || "h-[500px] relative rounded-[16px] w-[390px]"}>
      <div className={`absolute border border-solid inset-0 rounded-[16px] ${isDefautlDark ? "bg-[#22252b] border-[#22252b]" : "bg-[#ecedee] border-[#ecedee]"}`} />
      <div className="absolute bottom-1/2 content-stretch flex gap-[10px] items-center justify-end left-[32.05%] right-[6.41%] top-[42%]">
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "1"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "2"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "3"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[20px] ${isDefautlDark ? "border-[#7b72f9]" : "border-[#635cc7]"}`} />
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "4"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "5"}</p>
          </Wrapper>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[10px] inset-[51.6%_6.41%_40.4%_6.41%] items-center">
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "6"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "7"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "8"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "9"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "10"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "11"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "12"}</p>
          </Wrapper>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[10px] inset-[61.2%_6.41%_30.8%_6.41%] items-center">
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "13"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "14"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "15"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "16"}</p>
          </Wrapper>
        </div>
        <AtomeDatepickerChiffre className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#7b72f9]" : "bg-[#635cc7]"}`} propriete1={isDefautlDark ? "selected . dark" : "selected . light"} />
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "18"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "19"}</p>
          </Wrapper>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[10px] inset-[70.8%_6.41%_21.2%_6.41%] items-center">
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "20"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "21"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "22"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "23"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "24"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "25"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "26"}</p>
          </Wrapper>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[10px] inset-[80.4%_32.05%_11.6%_6.41%] items-center">
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "27"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "28"}</p>
          </Wrapper>
        </div>
        <div className={`relative rounded-[20px] shrink-0 size-[40px] ${isDefautlDark ? "bg-[#22252b]" : "bg-[#ecedee]"}`} data-name="atome . datepicker . chiffre">
          <Wrapper>
            <p className={`font-["roboto:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap ${isDefautlDark ? "" : "text-center"}`}>{isDefautlDark ? "Body . md . Regular . 16/20px" : "29"}</p>
          </Wrapper>
        </div>
        {isDefaultLight && (
          <>
            <AtomeDatepickerChiffre1 text="30" additionalClassNames="w-full" />
            <AtomeDatepickerChiffre1 text="31" additionalClassNames="w-full" />
          </>
        )}
        {isDefautlDark && (
          <>
            <AtomeDatepickerChiffre className="bg-[#22252b] relative rounded-[20px] shrink-0 size-[40px]" propriete1="default. dark" />
            <div className="bg-[#22252b] relative rounded-[20px] shrink-0 size-[40px]" data-name="atome . datepicker . chiffre">
              <Wrapper>
                <p className="font-['roboto:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#444955] text-[16px] tracking-[0.16px] whitespace-nowrap">Body . md . Regular . 16/20px</p>
              </Wrapper>
            </div>
          </>
        )}
      </div>
      <div className="absolute content-stretch flex gap-[10px] inset-[33.2%_6.41%_59.6%_6.41%] items-center">
        {isDefaultLight && (
          <>
            <div className="relative shrink-0 w-[40px]" data-name="atome . datepicker . day">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative w-full">
                  <BodyMdLightText text="D" />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[40px]" data-name="atome . datepicker . day">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative w-full">
                  <BodyMdLightText text="L" />
                </div>
              </div>
            </div>
            <AtomeDatepickerDay1 />
            <AtomeDatepickerDay1 />
            <div className="relative shrink-0 w-[40px]" data-name="atome . datepicker . day">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative w-full">
                  <BodyMdLightText text="J" />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[40px]" data-name="atome . datepicker . day">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative w-full">
                  <BodyMdLightText text="V" />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[40px]" data-name="atome . datepicker . day">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative w-full">
                  <BodyMdLightText text="S" />
                </div>
              </div>
            </div>
          </>
        )}
        {isDefautlDark && (
          <>
            <AtomeDatepickerDay className="relative shrink-0 w-[40px]" propriete1="default . dark" />
            <AtomeDatepickerDay className="relative shrink-0 w-[40px]" propriete1="default . dark" />
            <AtomeDatepickerDay className="relative shrink-0 w-[40px]" propriete1="default . dark" />
            <AtomeDatepickerDay className="relative shrink-0 w-[40px]" propriete1="default . dark" />
            <AtomeDatepickerDay className="relative shrink-0 w-[40px]" propriete1="default . dark" />
            <AtomeDatepickerDay className="relative shrink-0 w-[40px]" propriete1="default . dark" />
            <AtomeDatepickerDay className="relative shrink-0 w-[40px]" propriete1="default . dark" />
          </>
        )}
      </div>
      <AtomeDatepickerMonth className="absolute inset-[24.4%_70.26%_68.4%_6.41%]" propriete1={isDefautlDark ? "default. dark" : undefined} />
      <div className="absolute aspect-[24/24] left-[73.08%] right-[21.79%] top-[130px]" data-name="vuesax/linear/arrow-left">
        <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-left">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-left">
              <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <g id="Vector_2" opacity="0" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[24/24] left-[85.9%] right-[8.97%] top-[130px]" data-name="vuesax/linear/arrow-right">
        <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-right">
              <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #444955)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <g id="Vector_2" opacity="0" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[22.8%_0_77.2%_0]" data-name="horizontal divider . 350 px">
        <div className="absolute bottom-full left-0 right-0 top-0">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isDefautlDark ? "0 0 350 1" : "0 0 390 1"}>
              <line id="Line 18" stroke={isDefautlDark ? "var(--stroke-0, #ECEDEE)" : "var(--stroke-0, #DADBDD)"} x2={isDefautlDark ? "350" : "390"} y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      {isDefaultLight && (
        <>
          <div className="absolute inset-[10.4%_57.69%_78.8%_3.85%]" data-name="H4 . Desktop . light">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[10px] relative size-full">
                <div className="flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444955] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">Lun 26 juil</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[11.4%_5.9%_79.8%_82.82%] rounded-[16px]" data-name="icon button">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[12px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Icn_edit">
                  <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="edit" style={{ maskImage: `url('${imgEdit}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                      <path d={svgPaths.p3629cf40} fill="var(--fill-0, #444955)" id="edit" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalDatePickerBodySmLightText text="Select date" additionalClassNames="inset-[2.4%_72.56%_91.2%_3.85%]" />
          <div className="absolute inset-[90%_17.95%_3.6%_65.64%]" data-name="Body . sm . light">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[10px] py-[8px] relative size-full">
                <p className="font-['roboto:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444955] text-[14px] text-right tracking-[0.14px] whitespace-nowrap">Cancel</p>
              </div>
            </div>
          </div>
          <ModalDatePickerBodySmLightText text="OK" additionalClassNames="inset-[90%_5.9%_3.6%_84.1%]" />
        </>
      )}
      {isDefautlDark && (
        <>
          <div className="absolute inset-[10.4%_57.69%_78.8%_3.85%]" data-name="H4 . Desktop . dark">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[10px] relative size-full">
                <div className="flex flex-col font-['roboto:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dadbdd] text-[28px] tracking-[0.28px] whitespace-nowrap">
                  <p className="leading-[34px]">H4 . Regular . Desktop</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[11.4%_5.9%_79.8%_82.82%] rounded-[16px]" data-name="icon button">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[12px] relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Icn_edit">
                  <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" data-name="edit" style={{ maskImage: `url('${imgIconButton}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p3d1e8600} fill="var(--fill-0, #444955)" id="edit" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalDatePickerBodySmDarkText text="Body . sm . SemiBold . 14/16px" additionalClassNames="inset-[2.4%_72.56%_91.2%_3.85%]" />
          <ModalDatePickerBodySmDarkText text="Body . sm . SemiBold . 14/16px" additionalClassNames="inset-[90%_17.95%_3.6%_65.64%]" />
          <ModalDatePickerBodySmDarkText text="Body . sm . SemiBold . 14/16px" additionalClassNames="inset-[90%_5.9%_3.6%_84.1%]" />
        </>
      )}
    </div>
  );
}

export default function ModalDatePicker1() {
  return <ModalDatePicker className="relative rounded-[16px] size-full" />;
}