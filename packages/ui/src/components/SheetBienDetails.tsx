"use client";

/**
 * SheetBienDetails - Panneau de décision rapide bien immobilier
 *
 * Structure:
 * - Position 1: Map placeholder
 * - Position 2: Infos bien (badges, chips, DPE)
 * - Section 3: KPIs inline (qual, ent, conv) variant="straight"
 * - Section 4: Suggestions IA (2 AiSuggestionBanner max)
 * - Section 5: Activités récentes (2-3 CardLog)
 * - Footer sticky: Boutons d'action
 */

import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Chip } from "./Chip";
import { IconDpe, DpeType } from "./IconDpe";
import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestionBanner } from "./AiSuggestionBanner";
import { CardLog } from "./CardLog";
import { MapPin, Tag, Home, Square } from "lucide-react";

export interface SheetBienDetailsProps {
  // Infos bien
  bienType: string;
  surface: string;
  type: string;
  price: string;
  location: string;
  dpe?: DpeType;

  // KPIs
  qualification: number;
  entretien: number;
  conversion: number;

  // Suggestions IA
  suggestions?: Array<{
    text: string;
    actionLabel?: string;
    onAction?: () => void;
  }>;

  // Activités récentes
  recentLogs?: Array<{
    date: string;
    time: string;
    author: string;
    category: string;
    description: string;
    badgeVariant?: BadgeVariant;
  }>;

  className?: string;
}

export function SheetBienDetails({
  bienType,
  surface,
  type,
  price,
  location,
  dpe = "A",
  qualification,
  entretien,
  conversion,
  suggestions,
  recentLogs,
  className = "",
}: SheetBienDetailsProps) {
  return (
    <div className={`flex flex-col gap-5 px-5 py-5 ${className}`.trim()}>
      {/* Position 1: Map */}
      <div
        className="w-full h-[115px] rounded-2xl flex items-center justify-center border border-edge-default bg-surface-neutral-default"
      />

      {/* Position 2: Infos bien (badges, chips, DPE) */}
      <div className="flex flex-col gap-6">
        {/* Ligne 1: Badge type + Chip prix + Badge CARNET */}
        <div className="flex gap-2 items-center">
          <Badge variant="default">
            {type}
          </Badge>

          <Chip
            size="medium"
            icon={<Tag size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {price}
          </Chip>

          <Badge variant="success">
            CARNET
          </Badge>
        </div>

        {/* Ligne 2: Chip localisation + Chip type + Chip surface + Icon DPE */}
        <div className="flex gap-2 items-center">
          <Chip
            size="medium"
            icon={<MapPin size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {location}
          </Chip>

          <Chip
            size="medium"
            icon={<Home size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {bienType}
          </Chip>

          <Chip
            size="medium"
            icon={<Square size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {surface}
          </Chip>

          <IconDpe type={dpe} size="small" />
        </div>
      </div>

      {/* Section 3 — KPIs inline */}
      <div className="flex items-center justify-between gap-4">
        <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="straight" />
        <KpiIndicator kpi="ent" value={`${entretien}%`} percentage={entretien} variant="straight" />
        <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="straight" />
      </div>

      {/* Section 4 — Suggestions IA */}
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

      {/* Section 5 — Activités récentes */}
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

    </div>
  );
}
