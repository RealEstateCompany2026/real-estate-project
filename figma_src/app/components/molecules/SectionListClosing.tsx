/**
 * ORGANISM: SectionListClosing
 * 
 * Section affichant l'état du closing d'une affaire
 * Largeur: 220px
 * 
 * Titre: CLOSING
 * Ligne: 3 icônes avec statut de complétion (document, argent, justice)
 */

import { FileText, ArrowDownLeft, Gavel, Check } from "lucide-react";
import { TitleSectionList } from "../atoms/TitleSectionList";

export interface SectionListClosingProps {
  /** Le document final est-il signé ? */
  documentSigned?: boolean;
  /** Le paiement est-il reçu ? */
  paymentReceived?: boolean;
  /** Les démarches juridiques sont-elles complètes ? */
  legalComplete?: boolean;
  /** Thème visuel */
  theme?: "light" | "dark";
}

export function SectionListClosing({
  documentSigned = false,
  paymentReceived = false,
  legalComplete = false,
  theme = "light",
}: SectionListClosingProps) {
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  const checkColor = "var(--success-500)";

  return (
    <div
      className="relative size-full flex items-start"
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-[24px] items-start"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList theme={theme}>CLOSING</TitleSectionList>

        {/* Ligne d'icônes avec check */}
        <div className="flex gap-[28px] items-center">
          {/* Document + check */}
          <div className="flex gap-[4px] items-center">
            <div className="relative shrink-0 size-[20px]">
              <FileText size={20} style={{ color: iconColor }} />
            </div>
            {documentSigned && (
              <div className="relative shrink-0 size-[20px]">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Argent + check */}
          <div className="flex gap-[4px] items-center">
            <div className="relative shrink-0 size-[20px]">
              <ArrowDownLeft size={20} style={{ color: iconColor }} />
            </div>
            {paymentReceived && (
              <div className="relative shrink-0 size-[20px]">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Justice + check */}
          <div className="flex gap-[4px] items-center">
            <div className="relative shrink-0 size-[20px]">
              <Gavel size={20} style={{ color: iconColor }} />
            </div>
            {legalComplete && (
              <div className="relative shrink-0 size-[20px]">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
