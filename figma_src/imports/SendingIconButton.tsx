import svgPaths from "./svg-uf80becwu6";
import { imgSend, imgIcnSend } from "./svg-a57jt";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">{children}</div>
    </div>
  );
}

function SendingIconButtonHelper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="relative shrink-0 size-[20px]" data-name="icn_check">
        {children}
      </div>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="relative shrink-0 size-[20px]" data-name="icn_send">
        {children}
      </div>
    </Wrapper1>
  );
}

function SendingIconButtonHelper1() {
  return (
    <Wrapper>
      <div className="absolute inset-[16.67%_8.33%_16.67%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-4px] mask-size-[24px_24px]" data-name="send" style={{ maskImage: `url('${imgIcnSend}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
          <path d={svgPaths.p1ef1000} fill="var(--fill-0, #444955)" id="send" />
        </svg>
      </div>
    </Wrapper>
  );
}

function SendingIconButtonHelper() {
  return (
    <Wrapper>
      <div className="absolute inset-[16.67%_8.33%_16.67%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-4px] mask-size-[24px_24px]" data-name="send" style={{ maskImage: `url('${imgSend}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8333 13.3333">
          <path d={svgPaths.p1e6f06f0} fill="var(--fill-0, white)" id="send" />
        </svg>
      </div>
    </Wrapper>
  );
}
type SendingIconButtonProps = {
  className?: string;
  status?: "send branded light" | "sent branded light" | "send branded hover light" | "sent branded dark" | "send branded hover dark" | "send branded dark";
};

function SendingIconButton({ className, status = "send branded light" }: SendingIconButtonProps) {
  if (status === "sent branded light") {
    return (
      <div className={className || "bg-[#0da500] relative rounded-[16px] size-[46px]"} data-name="Status=sent branded light">
        <div aria-hidden="true" className="absolute border border-[#0da500] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
        <SendingIconButtonHelper2>
          <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgSend}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5833 10.0208">
              <path d={svgPaths.p12294b00} fill="var(--fill-0, white)" id="check" />
            </svg>
          </div>
        </SendingIconButtonHelper2>
      </div>
    );
  }
  if (status === "send branded hover light") {
    return (
      <div className={className || "bg-[#635cc7] relative rounded-[16px] size-[46px]"} data-name="Status=send branded hover light">
        <div aria-hidden="true" className="absolute border border-[#635cc7] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
        <SendingIconButtonHelper />
      </div>
    );
  }
  if (status === "send branded dark") {
    return (
      <div className={className || "bg-[#635cc7] relative rounded-[16px] size-[46px]"} data-name="Status=send branded dark">
        <div aria-hidden="true" className="absolute border border-[#635cc7] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
        <SendingIconButtonHelper1 />
      </div>
    );
  }
  if (status === "send branded hover dark") {
    return (
      <button className={className || "bg-[#7b72f9] cursor-pointer relative rounded-[16px] size-[46px]"} data-name="Status=send branded hover dark">
        <div aria-hidden="true" className="absolute border border-[#7b72f9] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
        <SendingIconButtonHelper1 />
      </button>
    );
  }
  if (status === "sent branded dark") {
    return (
      <div className={className || "bg-[#0da500] relative rounded-[16px] size-[46px]"} data-name="Status=sent branded dark">
        <div aria-hidden="true" className="absolute border border-[#0da500] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
        <SendingIconButtonHelper2>
          <div className="absolute bottom-1/4 left-[16.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.85px_-5.975px] mask-size-[24px_24px] right-[16.04%] top-[24.9%]" data-name="check" style={{ maskImage: `url('${imgIcnSend}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
              <path d={svgPaths.p23b3580} fill="var(--fill-0, #444955)" id="check" />
            </svg>
          </div>
        </SendingIconButtonHelper2>
      </div>
    );
  }
  return (
    <div className={className || "bg-[#7b72f9] relative rounded-[16px] size-[46px]"} data-name="Status=send branded light">
      <div aria-hidden="true" className="absolute border border-[#7b72f9] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
      <SendingIconButtonHelper />
    </div>
  );
}

export default function SendingIconButton1() {
  return <SendingIconButton className="bg-[#7b72f9] relative rounded-[16px] size-full" />;
}