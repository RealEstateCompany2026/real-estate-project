"use client";

import { ChevronDown } from "lucide-react";

/**
 * DatePickerMonth - Sélecteur de mois avec dropdown
 * Based on Figma AtomeDatepickerMonth
 *
 * Structure:
 * - Texte du mois : "Aout 2025"
 * - Icône dropdown : 20×20px
 * - Font : Roboto SemiBold 14px/16px
 * - Gap : 4px entre texte et icône
 *
 * Usage:
 * <DatePickerMonth month="Aout 2025" onClick={() => {}} />
 */

export interface DatePickerMonthProps {
  month: string; // ex: "Aout 2025", "Janvier 2026"
  onClick?: () => void;
  className?: string;
}

export function DatePickerMonth({
  month,
  onClick,
  className = "",
}: DatePickerMonthProps) {
  return (
    <button
      onClick={onClick}
      className={`h-[36px] relative ${className}`.trim()}
      type="button"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center relative">
          {/* Month text */}
          <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 whitespace-nowrap text-[14px] font-semibold tracking-[0.14px] text-content-body">
            <p className="leading-[16px]">{month}</p>
          </div>

          {/* Dropdown arrow icon */}
          <ChevronDown
            size={20}
            className="text-icon-neutral-default"
          />
        </div>
      </div>
    </button>
  );
}
