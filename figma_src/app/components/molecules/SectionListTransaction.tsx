/**
 * ORGANISM: SectionListTransaction
 * 
 * Section affichant l'état des transactions d'un bien
 * Largeur: 220px
 * 
 * Titre: TRANSACTION
 * Ligne: Compteur offres + Prix validé (check) + Factures (X ou check)
 */

import { Archive, Tag, FileText, Check, X } from "lucide-react";
import { TitleSectionList } from "../atoms/TitleSectionList";
import { Chip } from "../atoms/Chip";

export interface SectionListTransactionProps {
  /** Nombre d'offres */
  offerCount?: number;
  /** Le prix est-il validé ? */
  priceValidated?: boolean;
  /** Les factures sont-elles complètes ? */
  invoicesComplete?: boolean;
  /** Thème visuel */
  theme?: "light" | "dark";
}

export function SectionListTransaction({
  offerCount = 0,
  priceValidated = false,
  invoicesComplete = false,
  theme = "light",
}: SectionListTransactionProps) {
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  const checkColor = "var(--success-500)";

  return (
    <div
      className="relative size-full flex items-start"
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-[24px] items-start justify-center"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList theme={theme}>TRANSACTION</TitleSectionList>

        {/* Ligne d'indicateurs */}
        <div className="flex gap-[24px] items-center">
          {/* Nombre d'offres */}
          <Chip
            size="medium"
            icon={<Archive size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {offerCount}
          </Chip>

          {/* Prix + check */}
          <div className="flex gap-[4px] items-center">
            <div className="relative shrink-0 size-[20px]">
              <Tag size={20} style={{ color: iconColor }} />
            </div>
            {priceValidated && (
              <div className="relative shrink-0 size-[20px]">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Factures + check ou X */}
          <div className="flex gap-[4px] items-center">
            <div className="relative shrink-0 size-[20px]">
              <FileText size={20} style={{ color: iconColor }} />
            </div>
            {invoicesComplete ? (
              <div className="relative shrink-0 size-[20px]">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            ) : (
              <div className="relative shrink-0 size-[20px]">
                <X size={20} style={{ color: iconColor }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
