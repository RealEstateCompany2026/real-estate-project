'use client';

import type { CompletionLevel } from '@/lib/utils/completion';

interface CompletionGaugeProps {
  score: number;
  level: CompletionLevel;
  suggestion?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LEVEL_COLORS: Record<CompletionLevel, string> = {
  red: '#EF4444',
  orange: '#F97316',
  yellow: '#EAB308',
  green: '#22C55E',
};

const SIZE_MAP = {
  sm: { width: 40, stroke: 4, fontSize: 'text-xs' },
  md: { width: 56, stroke: 5, fontSize: 'text-sm' },
  lg: { width: 72, stroke: 6, fontSize: 'text-base' },
};

/**
 * Jauge circulaire de complétude (BIE-08, FIC-01, FIB-01).
 * Affiche le score en % avec un arc coloré selon le niveau.
 */
export function CompletionGauge({ score, level, suggestion, size = 'md' }: CompletionGaugeProps) {
  const { width, stroke, fontSize } = SIZE_MAP[size];
  const radius = (width - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = LEVEL_COLORS[level];

  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width, height: width }}>
        <svg width={width} height={width} className="-rotate-90">
          {/* Background circle */}
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke="var(--border-default)"
            strokeWidth={stroke}
          />
          {/* Progress arc */}
          <circle
            cx={width / 2}
            cy={width / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <span
          className={`absolute inset-0 flex items-center justify-center font-bold ${fontSize}`}
          style={{ color }}
        >
          {score}%
        </span>
      </div>
      {suggestion && (
        <p className="text-xs text-neutral-grey-bold max-w-[180px]">{suggestion}</p>
      )}
    </div>
  );
}
