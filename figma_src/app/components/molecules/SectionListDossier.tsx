/**
 * ORGANISM: SectionListDossier
 * 
 * Section affichant l'état du dossier d'une affaire
 * Largeur: 220px
 * 
 * Titre: DOSSIER
 * Ligne: 3 icônes avec statut (message + nombre, document + check, gallery + check)
 */

import { MessageCircle, FileText, Image, Check } from "lucide-react";
import { TitleSectionList } from "../atoms/TitleSectionList";
import { Chip } from "../atoms/Chip";

export interface SectionListDossierProps {
  /** Nombre de messages */
  messageCount?: number;
  /** Le document est-il complet ? */
  documentComplete?: boolean;
  /** Les photos sont-elles complètes ? */
  photosComplete?: boolean;
  /** Thème visuel */
  theme?: "light" | "dark";
}

export function SectionListDossier({
  messageCount = 0,
  documentComplete = false,
  photosComplete = false,
  theme = "light",
}: SectionListDossierProps) {
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
        <TitleSectionList theme={theme}>DOSSIER</TitleSectionList>

        {/* Ligne d'icônes */}
        <div className="flex gap-[28px] items-center">
          {/* Message + count */}
          <Chip
            size="medium"
            icon={<MessageCircle size={20} style={{ color: iconColor }} />}
            iconPosition="left"
          >
            {messageCount}
          </Chip>

          {/* Document + check */}
          <div className="flex gap-[4px] items-center">
            <div className="relative shrink-0 size-[20px]">
              <FileText size={20} style={{ color: iconColor }} />
            </div>
            {documentComplete && (
              <div className="relative shrink-0 size-[20px]">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Gallery + check */}
          <div className="flex gap-[4px] items-center">
            <div className="relative shrink-0 size-[20px]">
              <Image size={20} style={{ color: iconColor }} />
            </div>
            {photosComplete && (
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
