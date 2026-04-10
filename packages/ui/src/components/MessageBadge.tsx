"use client";

/**
 * MessageBadge - Badge de statut de message
 *
 * Badge affichant le statut du message : REÇU, ENVOYÉ, MODIFIÉ.
 *
 * Specs:
 * - Height: 20px (auto width)
 * - Padding: 4px × 8px
 * - Border-radius: 16px
 * - Border: 1px solid
 * - Font: Roboto Bold 12px/14px
 */

export interface MessageBadgeProps {
  /**
   * Texte du badge
   */
  label: string;
  className?: string;
}

export function MessageBadge({
  label,
  className = "",
}: MessageBadgeProps) {
  return (
    <div
      className={`
        h-[20px] relative rounded-[16px] shrink-0
        border border-solid border-edge-neutral-default
        ${className}
      `.trim()}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
          <p className="text-[12px] leading-[14px] text-center tracking-[0.12px] whitespace-nowrap font-bold text-content-caption">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
