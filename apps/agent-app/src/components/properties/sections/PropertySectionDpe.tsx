'use client';

import type { Property } from '@/types/property';
import { DPE_COLORS } from '@/types/property';
import type { DpeClass } from '@/types/property';
import { DpeSelector } from '@/components/ui/DpeSelector';

interface PropertySectionDpeProps {
  property: Property;
  onUpdate: (field: string, value: unknown) => void;
}

const DPE_CLASSES: DpeClass[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

/**
 * Section DPE de la fiche bien (FIB-03).
 * Affiche les diagnostics énergie et GES avec les barres colorées.
 */
export function PropertySectionDpe({ property, onUpdate }: PropertySectionDpeProps) {
  return (
    <div className="space-y-6">
      {/* DPE Énergie */}
      <div>
        <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider mb-3">
          Consommation énergétique (kWh/m²/an)
        </h4>
        <DpeBars selectedClass={property.dpeEnergyClass} value={property.dpeEnergyKwh} unit="kWh/m²/an" />
        <div className="mt-3">
          <DpeSelector
            label="Modifier la classe énergie"
            value={property.dpeEnergyClass}
            onChange={(v) => onUpdate('dpeEnergyClass', v)}
          />
        </div>
      </div>

      {/* DPE GES */}
      <div>
        <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider mb-3">
          Émissions de gaz à effet de serre (kgCO₂/m²/an)
        </h4>
        <DpeBars selectedClass={property.dpeGasEmissionClass} value={property.dpeGasGco2} unit="kgCO₂/m²/an" />
        <div className="mt-3">
          <DpeSelector
            label="Modifier la classe GES"
            value={property.dpeGasEmissionClass}
            onChange={(v) => onUpdate('dpeGasEmissionClass', v)}
          />
        </div>
      </div>
    </div>
  );
}

function DpeBars({
  selectedClass,
  value,
  unit,
}: {
  selectedClass: DpeClass | null;
  value: number | null;
  unit: string;
}) {
  return (
    <div className="space-y-1">
      {DPE_CLASSES.map((cls, i) => {
        const isSelected = selectedClass === cls;
        const width = 30 + i * 10; // 30% to 90%
        const color = DPE_COLORS[cls];

        return (
          <div key={cls} className="flex items-center gap-2">
            <div
              className="h-7 rounded-r-md flex items-center px-2 transition-all"
              style={{
                width: `${width}%`,
                backgroundColor: isSelected ? color : `${color}30`,
              }}
            >
              <span
                className={`text-xs font-bold ${isSelected ? 'text-white' : ''}`}
                style={{ color: isSelected ? '#fff' : color }}
              >
                {cls}
              </span>
            </div>
            {isSelected && value != null && (
              <span className="text-xs font-bold text-content-headings">
                {value} {unit}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
