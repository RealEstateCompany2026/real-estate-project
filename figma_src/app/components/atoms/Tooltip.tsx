import { ReactNode } from "react";
import {
  Tooltip as RadixTooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";

/**
 * Tooltip - Infobulle au survol
 * 
 * Affiche une infobulle contextuelle au survol d'un élément.
 * Utilise Radix UI avec un style adapté au design system RealAgent.
 * 
 * Specs:
 * - Background Light: neutral-700 (#22252B)
 * - Background Dark: neutral-50 (#ECEDEE)
 * - Text Light: white (#FFFFFF)
 * - Text Dark: grey-700 (#333740)
 * - Font: Roboto Regular 14px/18px
 * - Padding: 6px 12px
 * - Border-radius: 8px
 * - Max-width: 300px
 * - Arrow: 8px
 * - Animation: Fade in/out avec zoom
 * 
 * Usage:
 * <Tooltip content="Ceci est une info">
 *   <button>Survolez-moi</button>
 * </Tooltip>
 * 
 * <Tooltip content="Informations supplémentaires" side="top">
 *   <IconButton icon={Info} />
 * </Tooltip>
 */

export interface TooltipProps {
  /**
   * Contenu du tooltip (texte ou JSX)
   */
  content: ReactNode;
  /**
   * Élément déclencheur
   */
  children: ReactNode;
  /**
   * Position du tooltip
   * @default "top"
   */
  side?: "top" | "right" | "bottom" | "left";
  /**
   * Délai avant affichage (ms)
   * @default 200
   */
  delayDuration?: number;
  /**
   * Décalage par rapport au trigger (px)
   * @default 8
   */
  sideOffset?: number;
  /**
   * Classes CSS supplémentaires
   */
  className?: string;
}

export function Tooltip({
  content,
  children,
  side = "top",
  delayDuration = 200,
  sideOffset = 8,
  className = "",
}: TooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <RadixTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          className={className}
          style={{
            maxWidth: "300px",
            padding: "6px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            lineHeight: "18px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
          }}
        >
          {content}
        </TooltipContent>
      </RadixTooltip>
    </TooltipProvider>
  );
}
