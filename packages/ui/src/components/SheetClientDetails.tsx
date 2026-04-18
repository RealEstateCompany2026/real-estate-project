"use client";

/**
 * SheetClientDetails - Panneau de décision rapide client
 *
 * Structure:
 * - Section 1: KPIs inline (qual, eng, conv, reac) variant="straight"
 * - Section 2: Suggestions IA (2 AiSuggestionBanner max)
 * - Section 3: Activités récentes (2-3 CardLog)
 * - Footer sticky: Boutons d'action (Voir la Fiche, Voir les actions, Message, Phone)
 */

import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestionBanner } from "./AiSuggestionBanner";
import { CardLog } from "./CardLog";
import { Button, IconButton } from "./Button";
import { MessageCircle, Phone } from "lucide-react";
import type { BadgeVariant } from "./Badge";

export interface SheetClientDetailsProps {
  // KPIs (0-100)
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;

  // Suggestions IA (2 max affichées)
  suggestions?: Array<{
    text: string;
    actionLabel?: string;
    onAction?: () => void;
  }>;

  // Activités récentes (2-3 logs)
  recentLogs?: Array<{
    date: string;
    time: string;
    author: string;
    category: string;
    description: string;
    badgeVariant?: BadgeVariant;
  }>;

  // Footer actions
  onViewFiche?: () => void;
  onViewActions?: () => void;
  onMessage?: () => void;
  onCall?: () => void;

  className?: string;
}

export function SheetClientDetails({
  qualification,
  engagement,
  conversion,
  reactivation,
  suggestions,
  recentLogs,
  onViewFiche,
  onViewActions,
  onMessage,
  onCall,
  className = "",
}: SheetClientDetailsProps) {
  return (
    <div className={`flex flex-col gap-5 px-5 py-5 pb-[100px] ${className}`.trim()}>
      {/* Section 1 — KPIs inline */}
      <div className="flex items-center justify-between gap-4">
        <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="straight" />
        <KpiIndicator kpi="eng" value={`${engagement}%`} percentage={engagement} variant="straight" />
        <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="straight" />
        <KpiIndicator kpi="reac" value={`${reactivation}%`} percentage={reactivation} variant="straight" />
      </div>

      {/* Section 2 — Suggestions IA */}
      {suggestions && suggestions.length > 0 && (
        <div className="flex flex-col gap-3">
          {suggestions.slice(0, 2).map((suggestion, idx) => (
            <AiSuggestionBanner
              key={idx}
              suggestion={suggestion.text}
              actionLabel={suggestion.actionLabel}
              onAction={suggestion.onAction}
            />
          ))}
        </div>
      )}

      {/* Section 3 — Activités récentes */}
      {recentLogs && recentLogs.length > 0 && (
        <div className="flex flex-col gap-0">
          {recentLogs.slice(0, 3).map((log, idx) => (
            <CardLog
              key={idx}
              date={log.date}
              time={log.time}
              author={log.author}
              category={log.category}
              description={log.description}
              badgeVariant={log.badgeVariant}
              className="w-full"
            />
          ))}
        </div>
      )}

      {/* Footer sticky */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-neutral-default border-t border-edge-divider px-5 py-4 flex flex-col gap-3">
        <div className="flex gap-3">
          <Button variant="primary" onClick={onViewFiche} className="flex-1">
            Voir la Fiche
          </Button>
          <Button variant="default" onClick={onViewActions} className="flex-1">
            Voir les actions
          </Button>
        </div>
        <div className="flex gap-3 justify-center">
          <IconButton variant="default" onClick={onMessage} icon={<MessageCircle size={20} />} />
          <IconButton variant="default" onClick={onCall} icon={<Phone size={20} />} />
        </div>
      </div>
    </div>
  );
}
