import imgRectangle164 from "figma:asset/764300eebc6c2795288c79c1dd7f270e9d06577e.png";
import imgRectangle165 from "figma:asset/47d41e0f1e4a3afeac19785514365b2fe8314677.png";
import imgRectangle166 from "figma:asset/3400df735195c5833172fb8599de2a1381b65f5d.png";
import imgRectangle167 from "figma:asset/acbf028eb60c209d64acdaf44b3ba9b43feaa57f.png";
type AtomePaiementMethodProps = {
  className?: string;
  propriete1?: "visa" | "mastercard" | "CB" | "Paypal";
};

function AtomePaiementMethod({ className, propriete1 = "visa" }: AtomePaiementMethodProps) {
  const isCb = propriete1 === "CB";
  const isVisaOrMastercardOrPaypal = ["visa", "mastercard", "Paypal"].includes(propriete1);
  return (
    <div className={className || "h-[35px] relative rounded-[16px] w-[60px]"}>
      <div className={`absolute pointer-events-none rounded-[16px] ${isCb ? "inset-[-2.86%_-1.67%]" : "inset-0"}`}>
        {isVisaOrMastercardOrPaypal && <img alt="" className="absolute inset-0 max-w-none object-contain rounded-[16px] size-full" src={propriete1 === "Paypal" ? imgRectangle167 : propriete1 === "mastercard" ? imgRectangle165 : imgRectangle164} />}
        <div aria-hidden={isVisaOrMastercardOrPaypal ? "true" : undefined} className={`absolute inset-0 rounded-[16px] ${isCb ? "overflow-hidden" : "border border-[#dadbdd] border-solid"}`}>
          {isCb && <img alt="" className="absolute h-[126.71%] left-[-3.37%] max-w-none top-[-10.9%] w-[106.09%]" src={imgRectangle166} />}
        </div>
        {isCb && <div aria-hidden="true" className="absolute border border-[#dadbdd] border-solid inset-0 rounded-[16px]" />}
      </div>
    </div>
  );
}

export default function AtomePaiementMethod1() {
  return <AtomePaiementMethod className="relative rounded-[16px] size-full" />;
}