"use client";

/**
 * MOLECULE: SectionListEntretien
 *
 * Section affichant l'état d'entretien d'un bien
 * Largeur: 220px
 *
 * Titre: ENTRETIEN
 * Ligne: Statut création + Icône database + Paramétrage (jours)
 */

import { Shield, Database, Settings } from "lucide-react";
import { TitleSectionList } from "./TitleSectionList";
import { Chip } from "./Chip";

export interface SectionListEntretienProps {
  /** Statut de création */
  creationStatus?: string;
  /** Afficher l'icône database */
  showDatabase?: boolean;
  /** Nombre de jours de paramétrage */
  settingsDays?: string;
  className?: string;
}

export function SectionListEntretien({
  creationStatus = "Crée",
  showDatabase = true,
  settingsDays = "7 j",
  className = "",
}: SectionListEntretienProps) {
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
        <TitleSectionList>ENTRETIEN</TitleSectionList>

        {/* Ligne d'indicateurs */}
        <div className="flex gap-6.5 items-center">
          {/* Statut création */}
          <Chip
            size="medium"
            icon={<Shield size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {creationStatus}
          </Chip>

          {/* Icône database */}
          {showDatabase && (
            <div className="relative shrink-0 size-5">
              <Database size={20} className="text-icon-neutral-default" />
            </div>
          )}

          {/* Paramétrage (jours) */}
          <Chip
            size="medium"
            icon={<Settings size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {settingsDays}
          </Chip>
        </div>
      </div>
    </div>
  );
}
