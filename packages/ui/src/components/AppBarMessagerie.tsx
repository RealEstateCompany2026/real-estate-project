"use client";

import React from "react";
import { UserCircle, CalendarCheck, X } from "lucide-react";
import { MessageStatusDot } from "./MessageStatusDot";
import type { MessageStatus as DsMessageStatus } from "./MessageStatusDot";
import { KpiIndicator } from "./KpiIndicator";

/**
 * AppBarMessagerie - Barre d'en-tête de la page messagerie client
 * Organism du design system RealAgent
 *
 * Hauteur fixe : 100px. Évalue en un coup d'œil les indicateurs clés
 * de la messagerie du client.
 *
 * Figma : "app bar . messagerie" — h=100px, px=20, py=27, justify-between
 *
 * Composition :
 *   1. Titre "Messages" — H4 Bold
 *   2. Nom du contact [client_id] (profile-circle icon)
 *   3. Scoring engagement [engagement_score] (KpiIndicator kpi="eng" variant="straight")
 *   4. 5 derniers statuts de messages [last_5_statuses] (MessageStatusDot)
 *   5. Date dernier message [last_message_date] (calendar-check icon + durée)
 *   6. Bouton fermer (✕)
 */

export type AppBarMessageStatus = "none" | "received" | "read";

const STATUS_MAP: Record<AppBarMessageStatus, DsMessageStatus> = {
  none: "none",
  received: "fail",
  read: "success",
};

export interface AppBarMessagerieProps {
  /** Nom du contact */
  contactName: string;
  /** Score d'engagement (0-100) */
  engagementScore: number;
  /** Statuts des 5 derniers messages */
  lastMessageStatuses: [AppBarMessageStatus, AppBarMessageStatus, AppBarMessageStatus, AppBarMessageStatus, AppBarMessageStatus];
  /** Durée depuis le dernier message (ex: "280 j", "3 h", "12 min") */
  lastMessageAge: string;
  /** Callback fermer */
  onClose?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Icon+Text atom
 */
function IconText({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex gap-[4px] items-center shrink-0">
      <div className="shrink-0 size-[20px] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

export function AppBarMessagerie({
  contactName,
  engagementScore,
  lastMessageStatuses,
  lastMessageAge,
  onClose,
  className = "",
}: AppBarMessagerieProps) {
  return (
    <div
      className={`bg-surface-neutral-default h-[100px] flex items-center justify-between px-[20px] py-[27px] ${className}`.trim()}
    >
      {/* Gauche : titre + contact + engagement + statuts + date */}
      <div className="flex gap-[24px] items-center px-[10px]">
        {/* 1. Titre "Messages" — H4 Bold */}
        <h4 className="whitespace-nowrap font-bold text-[28px] leading-[34px] tracking-[0.28px] text-content-headings px-[10px] py-[10px]">
          Messages
        </h4>

        {/* 2. Nom du contact */}
        <IconText
          icon={<UserCircle size={20} className="text-icon-neutral-default" />}
        >
          {contactName}
        </IconText>

        {/* 3. Engagement score + dot (DS KpiIndicator) */}
        <KpiIndicator kpi="eng" value={`${engagementScore}%`} percentage={engagementScore} variant="straight" />

        {/* 4. 5 derniers statuts de messages (DS MessageStatusDot) */}
        <div className="flex gap-[8px] items-center py-px shrink-0">
          {lastMessageStatuses.map((status, i) => (
            <MessageStatusDot key={i} status={STATUS_MAP[status]} />
          ))}
        </div>

        {/* 5. Date dernier message */}
        <div className="flex gap-[8px] items-center shrink-0">
          <CalendarCheck size={20} className="text-icon-neutral-default" />
          <span className="text-base font-normal font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
            {lastMessageAge}
          </span>
        </div>
      </div>

      {/* Droite : bouton fermer */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="p-[12px] rounded-lg transition-colors hover:opacity-70 text-content-body"
      >
        <X size={20} />
      </button>
    </div>
  );
}
