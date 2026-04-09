/**
 * BadgePaymentMethod - Badge d'identification de méthode de paiement
 * Based on Figma AtomePaiementMethod
 * 
 * Structure:
 * - Badge pill-shaped (border-radius 16px)
 * - Dimensions: 60×35px
 * - Border 1px solid #dadbdd
 * - Logo de la méthode de paiement centré
 * - 4 variantes: Visa, Mastercard, CB, PayPal
 * 
 * Usage:
 * <BadgePaymentMethod method="visa" />
 * <BadgePaymentMethod method="mastercard" />
 * <BadgePaymentMethod method="CB" />
 * <BadgePaymentMethod method="Paypal" />
 */

import imgVisa from "figma:asset/764300eebc6c2795288c79c1dd7f270e9d06577e.png";
import imgMastercard from "figma:asset/47d41e0f1e4a3afeac19785514365b2fe8314677.png";
import imgCB from "figma:asset/3400df735195c5833172fb8599de2a1381b65f5d.png";
import imgPaypal from "figma:asset/acbf028eb60c209d64acdaf44b3ba9b43feaa57f.png";

export type PaymentMethodType = "visa" | "mastercard" | "CB" | "Paypal";

export interface BadgePaymentMethodProps {
  method?: PaymentMethodType;
  className?: string;
}

export function BadgePaymentMethod({ 
  method = "visa", 
  className = "" 
}: BadgePaymentMethodProps) {
  const isCB = method === "CB";
  const isVisaOrMastercardOrPaypal = ["visa", "mastercard", "Paypal"].includes(method);

  // Sélection de l'image appropriée
  const logoSrc = 
    method === "Paypal" ? imgPaypal :
    method === "mastercard" ? imgMastercard :
    method === "visa" ? imgVisa :
    imgCB;

  return (
    <div className={`relative h-[35px] w-[60px] rounded-[16px] ${className}`.trim()}>
      <div
        className={`absolute pointer-events-none rounded-[16px] ${
          isCB ? "inset-[-2.86%_-1.67%]" : "inset-0"
        }`}
      >
        {/* Logo Visa/Mastercard/PayPal */}
        {isVisaOrMastercardOrPaypal && (
          <img
            alt={method}
            className="absolute inset-0 max-w-none object-contain rounded-[16px] size-full"
            src={logoSrc}
          />
        )}

        {/* Container avec border */}
        <div
          aria-hidden={isVisaOrMastercardOrPaypal ? "true" : undefined}
          className={`absolute inset-0 rounded-[16px] ${
            isCB ? "overflow-hidden" : "border border-[#dadbdd] border-solid"
          }`}
        >
          {/* Logo CB (positionnement spécial) */}
          {isCB && (
            <img
              alt="CB"
              className="absolute h-[126.71%] left-[-3.37%] max-w-none top-[-10.9%] w-[106.09%]"
              src={imgCB}
            />
          )}
        </div>

        {/* Border overlay pour CB */}
        {isCB && (
          <div
            aria-hidden="true"
            className="absolute border border-[#dadbdd] border-solid inset-0 rounded-[16px]"
          />
        )}
      </div>
    </div>
  );
}
