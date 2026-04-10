"use client";

/**
 * MOLECULE: SectionListDossier
 *
 * Section affichant l'état du dossier d'une affaire
 * Largeur: 220px
 *
 * Titre: DOSSIER
 * Ligne: 3 icônes avec statut (message + nombre, document + check, gallery + check)
 */

import { MessageCircle, FileText, Image, Check } from "lucide-react";
import { TitleSectionList } from "./TitleSectionList";
import { Chip } from "./Chip";

export interface SectionListDossierProps {
  /** Nombre de messages */
  messageCount?: number;
  /** Le document est-il complet ? */
  documentComplete?: boolean;
  /** Les photos sont-elles complètes ? */
  photosComplete?: boolean;
  className?: string;
}

export function SectionListDossier({
  messageCount = 0,
  documentComplete = false,
  photosComplete = false,
  className = "",
}: SectionListDossierProps) {
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
        <TitleSectionList>DOSSIER</TitleSectionList>

        {/* Ligne d'icônes */}
        <div className="flex gap-7 items-center">
          {/* Message + count */}
          <Chip
            size="medium"
            icon={<MessageCircle size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {messageCount}
          </Chip>

          {/* Document + check */}
          <div className="flex gap-1 items-center">
            <div className="relative shrink-0 size-5">
              <FileText size={20} className="text-icon-neutral-default" />
            </div>
            {documentComplete && (
              <div className="relative shrink-0 size-5">
                <Check size={20} style={{ color: checkColor }} />
              </div>
            )}
          </div>

          {/* Gallery + check */}
          <div className="flex gap-1 items-center">
            <div className="relative shrink-0 size-5">
              <Image size={20} className="text-icon-neutral-default" />
            </div>
            {photosComplete && (
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
