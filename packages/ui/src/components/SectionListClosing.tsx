"use client";

/**
 * MOLECULE: SectionListClosing
 *
 * Section affichant l'état du closing d'une affaire
 * Largeur: 220px
 *
 * Titre: CLOSING
 * Ligne: 3 icônes avec statut de complétion (document, argent, justice)
 */

import { FileText, ArrowDownLeft, Gavel, Check } from "lucide-react";
import { TitleSectionList } from "./TitleSectionList";

export interface SectionListClosingProps {
  /** Le document final est-il signé ? */
  documentSigned?: boolean;
  /** Le paiement est-il reçu ? */
  paymentReceived?: boolean;
  /** Les démarches juridiques sont-elles complètes ? */
  legalComplete?: boolean;
  className?: string;
}

export function SectionListClosing({
  documentSigned = false,
  paymentReceived = false,
  legalComplete = false,
  className = "",
}: SectionListClosingProps) {
  const checkColor = "var(--success-500)";

  return (
    <div
      className={`relative size-full flex items-start ${className}`.trim()}
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-6 items-start"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList>CLOSING</TitleSectionList>

        {/* Ligne d'icônes avec check */}
        <div className="flex gap-7 items-center">
          {/* Document + check */}
          <div className="flex gap-1 items-center">
            <div className="relative shrink-0 size-5">
              <FileText size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />
            </div>
            {documentSigned && (
              <div className="relative shrink-0 size-5">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Argent + check */}
          <div className="flex gap-1 items-center">
            <div className="relative shrink-0 size-5">
              <ArrowDownLeft size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />
            </div>
            {paymentReceived && (
              <div className="relative shrink-0 size-5">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Justice + check */}
          <div className="flex gap-1 items-center">
            <div className="relative shrink-0 size-5">
              <Gavel size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />
            </div>
            {legalComplete && (
              <div className="relative shrink-0 size-5">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
