/**
 * ORGANISM: SectionListEntretien
 * 
 * Section affichant l'état d'entretien d'un bien
 * Largeur: 220px
 * 
 * Titre: ENTRETIEN
 * Ligne: Statut création + Icône database + Paramétrage (jours)
 */

import { Shield, Database, Settings } from "lucide-react";
import { TitleSectionList } from "../atoms/TitleSectionList";
import { Chip } from "../atoms/Chip";

export interface SectionListEntretienProps {
  /** Statut de création */
  creationStatus?: string;
  /** Afficher l'icône database */
  showDatabase?: boolean;
  /** Nombre de jours de paramétrage */
  settingsDays?: string;
  /** Thème visuel */
  theme?: "light" | "dark";
}

export function SectionListEntretien({
  creationStatus = "Crée",
  showDatabase = true,
  settingsDays = "7 j",
  theme = "light",
}: SectionListEntretienProps) {
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

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
        <TitleSectionList theme={theme}>ENTRETIEN</TitleSectionList>

        {/* Ligne d'indicateurs */}
        <div className="flex gap-[26px] items-center">
          {/* Statut création */}
          <Chip
            size="medium"
            icon={<Shield size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {creationStatus}
          </Chip>

          {/* Icône database */}
          {showDatabase && (
            <div className="relative shrink-0 size-[20px]">
              <Database size={20} style={{ color: iconColor }} />
            </div>
          )}

          {/* Paramétrage (jours) */}
          <Chip
            size="medium"
            icon={<Settings size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {settingsDays}
          </Chip>
        </div>
      </div>
    </div>
  );
}
