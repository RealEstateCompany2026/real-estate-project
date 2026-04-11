"use client";

import React from "react";
import { Timer, Copy, MoreVertical } from "lucide-react";
import { Badge } from "./Badge";

/**
 * ListAutomatisation - Ligne de liste automatisation
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) — une seule variante (light/dark auto via tokens).
 *
 * Layout :
 *   - Gauche : nom de l'automatisation + tags (badges default)
 *   - Droite : switch on/off + 3 icon buttons (historique, dupliquer, menu)
 *
 * Figma : "list . automation" — h=70px, px=10, justify-between
 */

export interface ListAutomatisationProps {
  /** Nom de l'automatisation */
  name: string;
  /** Tags descriptifs (ex: ["Email", "Relance", "J+7"]) */
  tags?: string[];
  /** Si l'automatisation est active */
  isActive: boolean;
  /** Callback changement d'état on/off */
  onToggle?: (active: boolean) => void;
  /** Callback clic sur historique */
  onHistory?: () => void;
  /** Callback clic sur dupliquer */
  onDuplicate?: () => void;
  /** Callback clic sur menu (more) */
  onMore?: () => void;
  /** Callback au clic sur la ligne */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Switch toggle atom
 */
function ToggleSwitch({
  active,
  onToggle,
}: {
  active: boolean;
  onToggle?: (val: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={(e) => {
        e.stopPropagation();
        onToggle?.(!active);
      }}
      className={`relative inline-flex h-[30px] w-[48px] shrink-0 items-center rounded-full px-[3px] transition-colors ${
        active
          ? "bg-[var(--success-500)]"
          : "bg-[var(--border-disabled)]"
      }`}
    >
      <span
        className={`inline-block size-[24px] rounded-full bg-surface-neutral-default shadow transition-transform ${
          active ? "translate-x-[18px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}

/**
 * Icon button atom
 */
function IconButton({
  icon,
  onClick,
  label,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className="flex items-center justify-center p-[12px] rounded-2xl hover:bg-[var(--surface-neutral-action)] transition-colors"
    >
      {icon}
    </button>
  );
}

export function ListAutomatisation({
  name,
  tags = [],
  isActive,
  onToggle,
  onHistory,
  onDuplicate,
  onMore,
  onClick,
  className = "",
}: ListAutomatisationProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[10px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : nom + tags */}
      <div className="flex gap-[20px] items-center flex-1 min-w-0">
        <span className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap px-[10px] py-[8px]">
          {name}
        </span>
        {tags.length > 0 && (
          <div className="flex gap-[8px] items-center">
            {tags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Droite : switch + icon buttons */}
      <div className="flex gap-[30px] items-center shrink-0">
        <ToggleSwitch active={isActive} onToggle={onToggle} />

        <div className="flex items-center px-[10px]">
          <IconButton
            icon={<Timer size={20} style={{ color: iconColor }} />}
            onClick={onHistory}
            label="Historique"
          />
          <IconButton
            icon={<Copy size={20} style={{ color: iconColor }} />}
            onClick={onDuplicate}
            label="Dupliquer"
          />
          <IconButton
            icon={<MoreVertical size={20} style={{ color: iconColor }} />}
            onClick={onMore}
            label="Plus d'options"
          />
        </div>
      </div>
    </div>
  );
}
