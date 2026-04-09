'use client';

import type { DpeClass } from '@/types/property';
import { DPE_COLORS } from '@/types/property';

interface DpeSelectorProps {
  label: string;
  value: DpeClass | null;
  onChange: (value: DpeClass) => void;
  disabled?: boolean;
}

const DPE_CLASSES: DpeClass[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

/**
 * Sélecteur visuel de classe DPE (énergie ou GES).
 * Affiche les 7 classes A→G avec leurs couleurs officielles.
 */
export function DpeSelector({ label, value, onChange, disabled = false }: DpeSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-bold text-neutral-anthracite mb-2">{label}</label>
      <div className="flex gap-1">
        {DPE_CLASSES.map((cls) => {
          const isSelected = value === cls;
          const color = DPE_COLORS[cls];
          return (
            <button
              key={cls}
              type="button"
              onClick={() => !disabled && onChange(cls)}
              disabled={disabled}
              className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'
              }`}
              style={{
                backgroundColor: isSelected ? color : 'transparent',
                color: isSelected ? '#fff' : color,
                border: `2px solid ${color}`,
              }}
              aria-label={`DPE classe ${cls}`}
              aria-pressed={isSelected}
            >
              {cls}
            </button>
          );
        })}
      </div>
    </div>
  );
}
