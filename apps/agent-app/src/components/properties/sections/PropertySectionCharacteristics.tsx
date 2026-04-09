'use client';

import type { Property } from '@/types/property';
import { formatSurface } from '@/lib/utils/format';
import { Bed, Bath, ShowerHead, DoorOpen, Car, Zap, Wifi, Waves, Cpu } from 'lucide-react';

interface PropertySectionCharacteristicsProps {
  property: Property;
  onUpdate: (field: string, value: unknown) => void;
}

/**
 * Section Caractéristiques de la fiche bien (FIB-04).
 * Pièces, surfaces, équipements, exposition.
 */
export function PropertySectionCharacteristics({ property }: PropertySectionCharacteristicsProps) {
  const rooms = [
    { icon: <Bed className="w-4 h-4" />, label: 'Chambres', value: property.bedroomCount },
    { icon: <Bath className="w-4 h-4" />, label: 'Salles de bain', value: property.bathroomCount },
    { icon: <ShowerHead className="w-4 h-4" />, label: "Salles d'eau", value: property.showerRoomCount },
    { icon: <DoorOpen className="w-4 h-4" />, label: 'WC', value: property.toiletCount },
  ].filter((r) => r.value != null && r.value > 0);

  const surfaces = [
    { label: 'Surface habitable', value: property.livingAreaSqm },
    { label: 'Terrain', value: property.landAreaSqm },
    { label: 'Terrasse', value: property.terraceAreaSqm },
    { label: 'Balcon', value: property.balconyAreaSqm },
    { label: 'Jardin', value: property.gardenAreaSqm },
  ].filter((s) => s.value != null && s.value > 0);

  const equipment = [
    { icon: <Zap className="w-4 h-4" />, label: 'Ascenseur', active: property.hasElevator },
    { icon: <Wifi className="w-4 h-4" />, label: 'Interphone', active: property.hasIntercom },
    { icon: <Waves className="w-4 h-4" />, label: 'Piscine', active: property.hasPool },
    { icon: <Cpu className="w-4 h-4" />, label: 'Domotique', active: property.hasHomeAutomation },
  ];

  const hasEquipment = equipment.some((e) => e.active);

  return (
    <div className="space-y-6">
      {/* Pièces */}
      {rooms.length > 0 && (
        <div>
          <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-3">Pièces</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {rooms.map((r) => (
              <div key={r.label} className="flex items-center gap-2 p-3 rounded-lg bg-background-subtle">
                <span className="text-primary">{r.icon}</span>
                <div>
                  <p className="text-lg font-bold text-neutral-anthracite">{r.value}</p>
                  <p className="text-xs text-neutral-grey-bold">{r.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Surfaces */}
      {surfaces.length > 1 && (
        <div>
          <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-3">Surfaces</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {surfaces.map((s) => (
              <div key={s.label} className="p-3 rounded-lg bg-background-subtle">
                <p className="text-sm font-bold text-neutral-anthracite">{formatSurface(s.value)}</p>
                <p className="text-xs text-neutral-grey-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chauffage & Exposition */}
      <div className="grid grid-cols-2 gap-6">
        {property.heatingType && (
          <div>
            <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-2">Chauffage</h4>
            <p className="text-sm text-neutral-anthracite">{property.heatingType.replace(/_/g, ' ').toLowerCase()}</p>
          </div>
        )}
        {property.exposures && property.exposures.length > 0 && (
          <div>
            <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-2">Exposition</h4>
            <div className="flex gap-1">
              {property.exposures.map((exp) => (
                <span
                  key={exp}
                  className="w-8 h-8 rounded-md bg-background-softBlue text-primary text-xs font-bold flex items-center justify-center"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Parking */}
      {property.parkingType && property.parkingType !== 'AUCUN' && (
        <div className="flex items-center gap-2">
          <Car className="w-4 h-4 text-primary" />
          <span className="text-sm text-neutral-anthracite">
            {property.parkingType.replace(/_/g, ' ').toLowerCase()}
            {property.parkingSpotCount ? ` (${property.parkingSpotCount} place${property.parkingSpotCount > 1 ? 's' : ''})` : ''}
          </span>
        </div>
      )}

      {/* Équipements */}
      {hasEquipment && (
        <div>
          <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-2">Équipements</h4>
          <div className="flex flex-wrap gap-2">
            {equipment
              .filter((e) => e.active)
              .map((e) => (
                <span
                  key={e.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background-softBlue text-primary text-xs font-bold"
                >
                  {e.icon}
                  {e.label}
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
