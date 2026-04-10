"use client";

/**
 * MOLECULE: SectionListTransaction
 *
 * Section affichant l'état des transactions d'un bien
 * Largeur: 220px
 *
 * Titre: TRANSACTION
 * Ligne: Compteur offres + Prix validé (check) + Factures (X ou check)
 */

import { Archive, Tag, FileText, Check, X } from "lucide-react";
import { TitleSectionList } from "./TitleSectionList";
import { Chip } from "./Chip";

export interface SectionListTransactionProps {
  /** Nombre d'offres */
  offerCount?: number;
  /** Le prix est-il validé ? */
  priceValidated?: boolean;
  /** Les factures sont-elles complètes ? */
  invoicesComplete?: boolean;
  className?: string;
}

export function SectionListTransaction({
  offerCount = 0,
  priceValidated = false,
  invoicesComplete = false,
  className = "",
}: SectionListTransactionProps) {
  const checkColor = "var(--success-500)";

  return (
    <div
      className={`relative size-full flex items-start ${className}`.trim()}
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-6 items-start justify-center"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList>TRANSACTION</TitleSectionList>

        {/* Ligne d'indicateurs */}
        <div className="flex gap-6 items-center">
          {/* Nombre d'offres */}
          <Chip
            size="medium"
            icon={<Archive size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {offerCount}
          </Chip>

          {/* Prix + check */}
          <div className="flex gap-1 items-center">
            <div className="relative shrink-0 size-5">
              <Tag size={20} className="text-icon-neutral-default" />
            </div>
            {priceValidated && (
              <div className="relative shrink-0 size-5">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Factures + check ou X */}
          <div className="flex gap-1 items-center">
            <div className="relative shrink-0 size-5">
              <FileText size={20} className="text-icon-neutral-default" />
            </div>
            {invoicesComplete ? (
              <div className="relative shrink-0 size-5">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            ) : (
              <div className="relative shrink-0 size-5">
                <X size={20} className="text-icon-neutral-default" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
