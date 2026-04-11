"use client";

import React from "react";
import { UserCircle, MessageCircleCheck, CalendarCheck, X } from "lucide-react";

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
 *   3. Scoring engagement [engagement_score] (message-circle-check icon + %)
 *      + dot couleur (success/warning/error selon le score)
 *   4. 5 derniers statuts de messages [last_5_statuses] (NONE/REÇU/LU)
 *   5. Date dernier message [last_message_date] (calendar-check icon + durée)
 *   6. Bouton fermer (✕)
 */

export type MessageStatus = "none" | "received" | "read";

const STATUS_COLORS: Record<MessageStatus, string> = {
  none: "var(--border-disabled)",
  received: "var(--border-default)",
  read: "var(--success-500)",
};

export interface AppBarMessagerieProps {
  /** Nom du contact */
  contactName: string;
  /** Score d'engagement (0-100) */
  engagementScore: number;
  /** Statuts des 5 derniers messages */
  lastMessageStatuses: [MessageStatus, MessageStatus, MessageStatus, MessageStatus, MessageStatus];
  /** Durée depuis le dernier message (ex: "280 j", "3 h", "12 min") */
  lastMessageAge: string;
  /** Callback fermer */
  onClose?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Score engagement color dot
 */
function getScoreColor(score: number): string {
  if (score >= 60) return "var(--success-500)";
  if (score >= 30) return "var(--warning-500)";
  return "var(--error-500)";
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
  const iconColor = "var(--icon-neutral-default)";
  const scoreColor = getScoreColor(engagementScore);

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
          icon={<UserCircle size={20} style={{ color: iconColor }} />}
        >
          {contactName}
        </IconText>

        {/* 3. Engagement score + dot */}
        <div className="flex gap-[10px] items-center shrink-0">
          <IconText
            icon={
              <MessageCircleCheck size={20} style={{ color: iconColor }} />
            }
          >
            {engagementScore}%
          </IconText>
          <div
            className="size-[14px] rounded-lg"
            style={{ backgroundColor: scoreColor }}
          />
        </div>

        {/* 4. 5 derniers statuts de messages */}
        <div className="flex gap-[8px] items-center py-px shrink-0">
          {lastMessageStatuses.map((status, i) => (
            <div
              key={i}
              className="size-[18px] rounded-lg"
              style={{ backgroundColor: STATUS_COLORS[status] }}
            />
          ))}
        </div>

        {/* 5. Date dernier message */}
        <div className="flex gap-[8px] items-center shrink-0">
          <CalendarCheck size={20} style={{ color: iconColor }} />
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
        className="p-[12px] rounded-2xl transition-colors hover:opacity-70 text-content-body"
      >
        <X size={20} />
      </button>
    </div>
  );
}
