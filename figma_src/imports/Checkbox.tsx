import svgPaths from "./svg-7i16ic76jl";
import { imgCheck, imgIcnCheck } from "./svg-zrd1g";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[10px] items-center p-[4px] relative">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
          {children}
        </svg>
      </div>
    </div>
  );
}

function CheckboxHelper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center p-[4px] relative">
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}

function IcnCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgIcnCheck}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
          <path d={svgPaths.p23b3580} fill="var(--fill-0, #444955)" id="check" />
        </svg>
      </div>
    </div>
  );
}

function CheckboxHelper1() {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center p-[4px] relative">
        <IcnCheck1 />
      </div>
    </div>
  );
}

function IcnCheck() {
  return (
    <Wrapper>
      <path d={svgPaths.p12294b00} fill="var(--fill-0, #444955)" id="check" />
    </Wrapper>
  );
}

function CheckboxHelper() {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center p-[4px] relative">
        <IcnCheck />
      </div>
    </div>
  );
}
type CheckboxProps = {
  className?: string;
  status?: "default dark" | "hover dark" | "focus dark" | "disabled dark" | "error dark" | "default light" | "hover light" | "focus light" | "disabled light" | "error light";
  type?: boolean;
};

function Checkbox({ className, status = "default light", type = true }: CheckboxProps) {
  if (status === "hover light" && type) {
    return (
      <div className={className || "bg-[#ecedee] relative rounded-[8px]"} data-name="Status=hover light, Type=selected">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <CheckboxHelper />
      </div>
    );
  }
  if (status === "focus light" && type) {
    return (
      <div className={className || "bg-white relative rounded-[8px]"} data-name="Status=focus light, Type=selected">
        <div aria-hidden="true" className="absolute border-0 border-[#444955] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Wrapper1>
          <IcnCheck />
          <div className="absolute left-[-5px] rounded-[8px] size-[38px] top-[-5px]">
            <div aria-hidden="true" className="absolute border-2 border-[#444955] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </Wrapper1>
      </div>
    );
  }
  if (status === "disabled light" && type) {
    return (
      <div className={className || "bg-[#ecedee] relative rounded-[8px]"} data-name="Status=disabled light, Type=selected">
        <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <CheckboxHelper2>
          <path d={svgPaths.p12294b00} fill="var(--fill-0, #D0D1D4)" id="check" />
        </CheckboxHelper2>
      </div>
    );
  }
  if (status === "error light" && type) {
    return (
      <div className={className || "bg-[#ffe5e5] relative rounded-[8px]"} data-name="Status=error light, Type=selected">
        <div aria-hidden="true" className="absolute border border-[#ffbfbf] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <CheckboxHelper2>
          <path d={svgPaths.p12294b00} fill="var(--fill-0, #FF0000)" id="check" />
        </CheckboxHelper2>
      </div>
    );
  }
  if (status === "default light" && !type) {
    return (
      <div className={className || "bg-white relative rounded-[8px] size-[28px]"} data-name="Status=default light, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "hover light" && !type) {
    return (
      <div className={className || "bg-[#ecedee] relative rounded-[8px] size-[28px]"} data-name="Status=hover light, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "focus light" && !type) {
    return (
      <div className={className || "bg-white relative rounded-[8px] size-[28px]"} data-name="Status=focus light, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "disabled light" && !type) {
    return (
      <div className={className || "bg-[#ecedee] relative rounded-[8px] size-[28px]"} data-name="Status=disabled light, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "error light" && !type) {
    return (
      <div className={className || "bg-[#ffe5e5] relative rounded-[8px] size-[28px]"} data-name="Status=error light, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#ffbfbf] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "default dark" && type) {
    return (
      <div className={className || "bg-[#111215] relative rounded-[8px]"} data-name="Status=default dark, Type=selected">
        <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <CheckboxHelper1 />
      </div>
    );
  }
  if (status === "hover dark" && type) {
    return (
      <button className={className || "bg-[#333740] cursor-pointer relative rounded-[8px]"} data-name="Status=hover dark, Type=selected">
        <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <CheckboxHelper1 />
      </button>
    );
  }
  if (status === "focus dark" && type) {
    return (
      <div className={className || "bg-[#111215] relative rounded-[8px]"} data-name="Status=focus dark, Type=selected">
        <div aria-hidden="true" className="absolute border-0 border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <Wrapper1>
          <IcnCheck1 />
          <div className="absolute left-[-5px] rounded-[8px] size-[38px] top-[-5px]">
            <div aria-hidden="true" className="absolute border-2 border-[#d0d1d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </Wrapper1>
      </div>
    );
  }
  if (status === "disabled dark" && type) {
    return (
      <div className={className || "bg-[#333740] relative rounded-[8px]"} data-name="Status=disabled dark, Type=selected">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <CheckboxHelper1 />
      </div>
    );
  }
  if (status === "error dark" && type) {
    return (
      <div className={className || "bg-[#400000] relative rounded-[8px]"} data-name="Status=error dark, Type=selected">
        <div aria-hidden="true" className="absolute border border-[#bf0000] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <CheckboxHelper1 />
      </div>
    );
  }
  if (status === "default dark" && !type) {
    return (
      <div className={className || "bg-[#111215] relative rounded-[8px] size-[28px]"} data-name="Status=default dark, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "hover dark" && !type) {
    return (
      <button className={className || "bg-[#333740] block cursor-pointer relative rounded-[8px] size-[28px]"} data-name="Status=hover dark, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </button>
    );
  }
  if (status === "focus dark" && !type) {
    return (
      <div className={className || "bg-[#111215] relative rounded-[8px] size-[28px]"} data-name="Status=focus dark, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#d0d1d4] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "disabled dark" && !type) {
    return (
      <div className={className || "bg-[#333740] relative rounded-[8px] size-[28px]"} data-name="Status=disabled dark, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  if (status === "error dark" && !type) {
    return (
      <div className={className || "bg-[#400000] relative rounded-[8px] size-[28px]"} data-name="Status=error dark, Type=unselected">
        <div aria-hidden="true" className="absolute border border-[#bf0000] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
    );
  }
  return (
    <div className={className || "bg-white relative rounded-[8px]"} data-name="Status=default light, Type=selected">
      <div aria-hidden="true" className="absolute border border-[#444955] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <CheckboxHelper />
    </div>
  );
}

export default function Checkbox1() {
  return <Checkbox className="bg-white relative rounded-[8px] size-full" />;
}