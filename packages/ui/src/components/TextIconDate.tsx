"use client";

import { Calendar } from "lucide-react";

/**
 * TextIconDate - Texte avec icône calendrier
 *
 * Basé sur AtomeTextIconDate dans OrganismeListEngagement.tsx
 */

export interface TextIconDateProps {
  days: number;
  className?: string;
}

export function TextIconDate({ days, className = "" }: TextIconDateProps) {
  return (
    <div className={`relative flex flex-row items-center gap-[8px] ${className}`}>
      {/* Calendar Icon */}
      <div className="relative shrink-0 w-[20px] h-[20px]">
        <Calendar
          size={20}
          className="text-content-body"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center leading-none not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap text-content-body">
        <p className="leading-[20px]">{days} j</p>
      </div>
    </div>
  );
}
