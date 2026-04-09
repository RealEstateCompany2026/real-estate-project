import { AiSuggestion } from "./AiSuggestion";

/**
 * AiTitleWithBadge - Titre avec badge de suggestions IA
 * 
 * Variante spécialisée de l'atome "Text + Icon" pour la famille IA
 * L'icône est remplacée par le badge AiSuggestion
 * 
 * Structure: Texte + Badge (gap 8px)
 * Font: Roboto SemiBold 16px/20px
 * 
 * Usage:
 * <AiTitleWithBadge title="Conseil" count={3} />
 * <AiTitleWithBadge title="Service" count={0} />
 */

export interface AiTitleWithBadgeProps {
  title: string;
  count: number;
  className?: string;
}

export function AiTitleWithBadge({
  title,
  count,
  className = "",
}: AiTitleWithBadgeProps) {
  return (
    <div className={`relative shrink-0 ${className}`.trim()}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative">
          {/* Title text */}
          <div className="relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
                <p
                  className="text-[16px] leading-[20px] tracking-[0.16px] font-semibold not-italic relative shrink-0 whitespace-nowrap"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  {title}
                </p>
              </div>
            </div>
          </div>

          {/* AI Suggestion Badge */}
          <AiSuggestion count={count} />
        </div>
      </div>
    </div>
  );
}
