// TODO: refonte complète P10-AFF
/**
 * COMPONENT: ListAffaire
 *
 * Item de liste pour une affaire avec tous les détails
 * Utilise les organismes du design system Figma avec dimensions exactes
 *
 * Largeur totale: 1199px
 * Hauteur: 120px
 *
 * Structure:
 * - Section Affaire (333px)
 * - Divider + Spacing (30px)
 * - Section Dossier (220px)
 * - Divider + Spacing (30px)
 * - Section Promotion (220px)
 * - Divider + Spacing (30px)
 * - Section Closing (220px)
 * - Divider + Spacing (30px)
 * - Section AI Suggestions (86px)
 *
 * États: default light, hover light, default dark, hover dark
 */

import { useHoverState } from "../../hooks/useHoverState";
import { ListItemDivider } from "../atoms/ListItemDivider";
import { VerticalDivider } from "../atoms/VerticalDivider";
import { SectionListAffaire } from "../molecules/SectionListAffaire";
import { SectionListDossier } from "../molecules/SectionListDossier";
import { SectionListPromotion } from "../molecules/SectionListPromotion";
import { SectionListClosing } from "../molecules/SectionListClosing";
import { ListSuggestions } from "../organisms/ListSuggestions";

export interface ListAffaireProps {
  // Affaire
  type: string;
  affaireId: string;
  bienType: string;
  surface: string;
  price: string;
  
  // Dossier
  messageCount?: number;
  documentComplete?: boolean;
  photosComplete?: boolean;
  
  // Promotion
  envois?: number;
  visites?: number;
  favoris?: number;
  
  // Closing
  documentSigned?: boolean;
  paymentReceived?: boolean;
  legalComplete?: boolean;
  
  // AI
  aiSuggestions?: number;
  
  // Interactions
  onAffaireClick?: () => void;
  className?: string;
  theme?: "light" | "dark";
  forceHover?: boolean;
}

export function ListAffaire({
  type,
  affaireId,
  bienType,
  surface,
  price,
  messageCount = 0,
  documentComplete = false,
  photosComplete = false,
  envois = 0,
  visites = 0,
  favoris = 0,
  documentSigned = false,
  paymentReceived = false,
  legalComplete = false,
  aiSuggestions = 0,
  onAffaireClick,
  className = "",
  theme = "light",
  forceHover = false,
}: ListAffaireProps) {
  const { hovered, handlers } = useHoverState(forceHover);

  const getBorderColor = () => {
    const hovered = forceHover || isHovered;
    if (theme === "dark") {
      return hovered ? "var(--neutral-600)" : "var(--neutral-700)"; // neutral-600 : neutral-700
    }
    return hovered ? "var(--neutral-200)" : "var(--neutral-50)"; // neutral-200 : neutral-50
  };

  const getBackgroundColor = () => {
    const hovered = forceHover || isHovered;
    if (theme === "dark") {
      return hovered ? "var(--neutral-700)" : "var(--neutral-800)"; // neutral-700 : neutral-800
    }
    return hovered ? "var(--neutral-50)" : "var(--neutral-white)"; // neutral-50 : neutral-white
  };

  return (
    <div className={className} style={{ paddingTop: "15px", paddingBottom: "15px" }}>
      <div
        className="flex items-center transition-colors"
        style={{
          width: "100%",
          minHeight: "120px",
          border: `1px solid ${getBorderColor()}`,
          borderRadius: "16px",
          backgroundColor: getBackgroundColor(),
        }}
        {...handlers}
      >
        {/* Section Affaire - flex-1 */}
        <div className="flex-1 min-w-0">
          <SectionListAffaire
            type={type}
            affaireId={affaireId}
            bienType={bienType}
            surface={surface}
            price={price}
            theme={theme}
            onClick={onAffaireClick}
          />
        </div>

        {/* Divider + Spacing */}
        <div className="flex items-center px-4 shrink-0 h-full">
          <div className="w-px h-[84px]">
            <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* Section Dossier - 220px */}
        <div className="w-[220px] shrink-0 h-full">
          <SectionListDossier
            messageCount={messageCount}
            documentComplete={documentComplete}
            photosComplete={photosComplete}
            theme={theme}
          />
        </div>

        {/* Divider + Spacing */}
        <div className="flex items-center px-4 shrink-0 h-full">
          <div className="w-px h-[84px]">
            <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* Section Promotion - 220px */}
        <div className="w-[220px] shrink-0 h-full">
          <SectionListPromotion
            envois={envois}
            visites={visites}
            favoris={favoris}
            theme={theme}
          />
        </div>

        {/* Divider + Spacing */}
        <div className="flex items-center px-4 shrink-0 h-full">
          <div className="w-px h-[84px]">
            <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* Section Closing - 220px */}
        <div className="w-[220px] shrink-0 h-full">
          <SectionListClosing
            documentSigned={documentSigned}
            paymentReceived={paymentReceived}
            legalComplete={legalComplete}
            theme={theme}
          />
        </div>

        {/* Divider + Spacing */}
        <div className="flex items-center px-4 shrink-0 h-full">
          <div className="w-px h-[84px]">
            <VerticalDivider height={84} theme={theme} variant={hovered ? "hover" : "default"} />
          </div>
        </div>

        {/* AI Suggestions - 86px */}
        <div className="w-[86px] shrink-0 h-full">
          <ListSuggestions count={aiSuggestions} theme={theme} />
        </div>
      </div>

      <ListItemDivider />
    </div>
  );
}