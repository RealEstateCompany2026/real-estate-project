"use client";

/**
 * BadgePaymentMethod - Badge d'identification de méthode de paiement
 *
 * Structure:
 * - Badge pill-shaped (border-radius 16px)
 * - Dimensions: 60×35px
 * - Border 1px solid #dadbdd
 * - Logo de la méthode de paiement centré
 * - 4 variantes: Visa, Mastercard, CB, PayPal
 *
 * Note: Les logos/images doivent être importés ou servies via URL
 */

export type PaymentMethodType = "visa" | "mastercard" | "cb" | "paypal";

export interface BadgePaymentMethodProps {
  method?: PaymentMethodType;
  logoSrc?: string;
  className?: string;
}

export function BadgePaymentMethod({
  method = "visa",
  logoSrc,
  className = "",
}: BadgePaymentMethodProps) {
  // Fallback text if no logo provided
  const getMethodLabel = () => {
    switch (method) {
      case "visa":
        return "Visa";
      case "mastercard":
        return "Mastercard";
      case "cb":
        return "CB";
      case "paypal":
        return "PayPal";
      default:
        return method.toUpperCase();
    }
  };

  return (
    <div
      className={`
        relative h-[35px] w-[60px] rounded-[16px]
        border border-[#dadbdd] border-solid
        flex items-center justify-center
        bg-white dark:bg-neutral-800
        ${className}
      `.trim()}
    >
      {logoSrc ? (
        <img
          alt={method}
          src={logoSrc}
          className="w-full h-full object-contain rounded-[16px] p-1"
        />
      ) : (
        <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
          {getMethodLabel()}
        </span>
      )}
    </div>
  );
}
