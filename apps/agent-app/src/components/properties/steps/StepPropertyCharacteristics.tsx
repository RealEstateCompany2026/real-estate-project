'use client';

import { useFormContext } from 'react-hook-form';
import type { PropertyCreateData } from '@/lib/validations/property';
import type { Exposure, HeatingType } from '@/types/property';
import { DpeSelector } from '@/components/ui/DpeSelector';
import type { DpeClass } from '@/types/property';

const HEATING_OPTIONS: { value: HeatingType; label: string }[] = [
  { value: 'INDIVIDUEL_GAZ', label: 'Individuel gaz' },
  { value: 'INDIVIDUEL_ELECTRIQUE', label: 'Individuel électrique' },
  { value: 'COLLECTIF_GAZ', label: 'Collectif gaz' },
  { value: 'PAC', label: 'Pompe à chaleur' },
  { value: 'FUEL', label: 'Fuel' },
  { value: 'BOIS', label: 'Bois' },
];

const EXPOSURE_OPTIONS: Exposure[] = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'];

/**
 * Étape 4 — Caractéristiques du bien (BIE-04).
 * Chambres, SDB, chauffage, exposition, DPE, équipements.
 */
export function StepPropertyCharacteristics() {
  const { register, watch, setValue } = useFormContext<PropertyCreateData>();
  const exposures = watch('exposures') ?? [];

  function toggleExposure(exp: Exposure) {
    if (exposures.includes(exp)) {
      setValue('exposures', exposures.filter((e) => e !== exp));
    } else {
      setValue('exposures', [...exposures, exp]);
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-xs text-content-caption">
        Toutes ces informations sont facultatives et améliorent la visibilité de l&apos;annonce.
      </p>

      {/* Pièces détaillées */}
      <div className="grid grid-cols-4 gap-3">
        <div>
          <label htmlFor="bedroomCount" className="block text-xs font-bold text-content-headings mb-1">
            Chambres
          </label>
          <input
            id="bedroomCount"
            type="number"
            min={0}
            {...register('bedroomCount', { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded-lg border border-edge-default text-sm focus:border-edge-branded-default focus:ring-1 focus:ring-[var(--border-branded-default)]/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="bathroomCount" className="block text-xs font-bold text-content-headings mb-1">
            Salles de bain
          </label>
          <input
            id="bathroomCount"
            type="number"
            min={0}
            {...register('bathroomCount', { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded-lg border border-edge-default text-sm focus:border-edge-branded-default focus:ring-1 focus:ring-[var(--border-branded-default)]/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="showerRoomCount" className="block text-xs font-bold text-content-headings mb-1">
            Salles d&apos;eau
          </label>
          <input
            id="showerRoomCount"
            type="number"
            min={0}
            {...register('showerRoomCount', { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded-lg border border-edge-default text-sm focus:border-edge-branded-default focus:ring-1 focus:ring-[var(--border-branded-default)]/20 outline-none"
          />
        </div>
        <div>
          <label htmlFor="toiletCount" className="block text-xs font-bold text-content-headings mb-1">
            WC
          </label>
          <input
            id="toiletCount"
            type="number"
            min={0}
            {...register('toiletCount', { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded-lg border border-edge-default text-sm focus:border-edge-branded-default focus:ring-1 focus:ring-[var(--border-branded-default)]/20 outline-none"
          />
        </div>
      </div>

      {/* Surfaces complémentaires */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="landAreaSqm" className="block text-xs font-bold text-content-headings mb-1">
            Surface terrain (m²)
          </label>
          <input
            id="landAreaSqm"
            type="number"
            step="0.1"
            {...register('landAreaSqm', { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded-lg border border-edge-default text-sm focus:border-edge-branded-default focus:ring-1 focus:ring-[var(--border-branded-default)]/20 outline-none"
            placeholder="500"
          />
        </div>
        <div>
          <label htmlFor="parkingSpotCount" className="block text-xs font-bold text-content-headings mb-1">
            Places de parking
          </label>
          <input
            id="parkingSpotCount"
            type="number"
            min={0}
            {...register('parkingSpotCount', { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded-lg border border-edge-default text-sm focus:border-edge-branded-default focus:ring-1 focus:ring-[var(--border-branded-default)]/20 outline-none"
          />
        </div>
      </div>

      {/* Chauffage */}
      <div>
        <label htmlFor="heatingType" className="block text-sm font-bold text-content-headings mb-1">
          Chauffage
        </label>
        <select
          id="heatingType"
          {...register('heatingType')}
          className="w-full px-3 py-2.5 rounded-lg border border-edge-default text-sm bg-white focus:border-edge-branded-default focus:ring-1 focus:ring-[var(--border-branded-default)]/20 outline-none"
        >
          <option value="">— Sélectionner —</option>
          {HEATING_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Exposition */}
      <div>
        <label className="block text-sm font-bold text-content-headings mb-2">
          Exposition
        </label>
        <div className="flex flex-wrap gap-1.5">
          {EXPOSURE_OPTIONS.map((exp) => (
            <button
              key={exp}
              type="button"
              onClick={() => toggleExposure(exp)}
              className={`w-10 h-10 rounded-lg border text-xs font-bold transition-colors ${
                exposures.includes(exp)
                  ? 'border-edge-branded-default bg-surface-information text-content-branded-action'
                  : 'border-edge-default text-content-caption hover:border-edge-branded-default'
              }`}
            >
              {exp}
            </button>
          ))}
        </div>
      </div>

      {/* DPE */}
      <div className="grid grid-cols-2 gap-6">
        <DpeSelector
          label="DPE Énergie"
          value={watch('dpeEnergyClass') as DpeClass | null ?? null}
          onChange={(v) => setValue('dpeEnergyClass', v)}
        />
        <DpeSelector
          label="DPE GES"
          value={watch('dpeGasEmissionClass') as DpeClass | null ?? null}
          onChange={(v) => setValue('dpeGasEmissionClass', v)}
        />
      </div>

      {/* Équipements */}
      <div>
        <label className="block text-sm font-bold text-content-headings mb-2">
          Équipements
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { field: 'hasElevator', label: 'Ascenseur' },
            { field: 'hasIntercom', label: 'Interphone' },
            { field: 'hasPool', label: 'Piscine' },
            { field: 'hasHomeAutomation', label: 'Domotique' },
          ].map(({ field, label }) => (
            <label key={field} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register(field as keyof PropertyCreateData)}
                className="w-4 h-4 rounded border-edge-default text-content-branded-action focus:ring-[var(--border-branded-default)]"
              />
              <span className="text-sm text-content-headings">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
