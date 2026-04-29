'use client';

import { useState, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Plus, Trash2 } from 'lucide-react';

// DS imports
import { Button, IconButton } from '@real-estate/ui/button';
import { ProgressBar } from '@real-estate/ui/progress-bar';
import { Badge } from '@real-estate/ui/badge';
import { Checkbox } from '@real-estate/ui/checkbox';
import { Chip } from '@real-estate/ui/chip';
import { InputFieldOutlined } from '@real-estate/ui/input-field-outlined';
import { SelectField } from '@real-estate/ui/select-field';
import { TextArea } from '@real-estate/ui/text-area';
import { AddressField } from '@real-estate/ui/address-field';
import type { AddressSuggestion } from '@real-estate/ui/address-field';
import { Label } from '@real-estate/ui/label';
import { DatePicker } from '@real-estate/ui/date-picker';
import { IconDpe } from '@real-estate/ui/icon-dpe';
import { IconGes } from '@real-estate/ui/icon-ges';
import type { DpeType } from '@real-estate/ui/icon-dpe';
import type { GesType } from '@real-estate/ui/icon-ges';

// App imports
import { useToast } from '@/components/ui/Toast';
import { createClient } from '@/lib/supabase/client';
import { propertyCreateSchema, type PropertyCreateData } from '@/lib/validations/property';
import {
  PROPERTY_TYPE_LABELS,
  PROPERTY_CONDITION_LABELS,
  VIEW_TYPE_LABELS,
  PARKING_TYPE_LABELS,
  KITCHEN_TYPE_LABELS,
  ROOM_TYPE_LABELS,
  PROPERTY_STATUS_LABELS,
  EXPOSURE_LABELS,
  DIAGNOSTIC_TYPE_LABELS,
  ROOM_COUNT_LABELS,
  type DpeClass,
  type PropertyType,
  type PropertyStatus,
  type RoomType,
  type Exposure,
  type ViewType,
  type DiagnosticType,
  type PropertyRoomFormData,
} from '@/types/property';
import { searchAddress } from '@/lib/utils/address';

// ---------------------------------------------------------------------------
// FEATURE_KEYS — equipment options for add-row pattern
// ---------------------------------------------------------------------------

const FEATURE_KEYS = [
  { key: 'ascenseur', label: 'Ascenseur' },
  { key: 'balcon', label: 'Balcon' },
  { key: 'terrasse', label: 'Terrasse' },
  { key: 'cave', label: 'Cave' },
  { key: 'jardin', label: 'Jardin' },
  { key: 'piscine', label: 'Piscine' },
  { key: 'gardien', label: 'Gardien' },
  { key: 'digicode', label: 'Digicode' },
  { key: 'interphone', label: 'Interphone' },
  { key: 'cheminee', label: 'Cheminée' },
  { key: 'climatisation', label: 'Climatisation' },
  { key: 'alarme', label: 'Alarme' },
  { key: 'fibre_optique', label: 'Fibre optique' },
  { key: 'domotique', label: 'Domotique' },
  { key: 'parquet', label: 'Parquet' },
  { key: 'double_vitrage', label: 'Double vitrage' },
  { key: 'store_electrique', label: 'Stores électriques' },
  { key: 'portail_electrique', label: 'Portail électrique' },
];

// ---------------------------------------------------------------------------
// Apartment-like types that show building/floor fields
// ---------------------------------------------------------------------------

const APARTMENT_LIKE_TYPES: PropertyType[] = [
  'APPARTEMENT', 'STUDIO', 'LOFT', 'T1', 'T2', 'T3', 'T4',
];

// C1 — Status checkboxes: OFF_MARKET, A_VENDRE, A_LOUER, EN_VIAGER, SOUS_GESTION
const STATUS_CHECKBOX_VALUES: PropertyStatus[] = [
  'OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'EN_VIAGER', 'SOUS_GESTION',
];

// C3 — Simplified category options (direct PropertyType mapping)
const CATEGORY_OPTIONS: { value: PropertyType; label: string }[] = [
  { value: 'APPARTEMENT', label: 'Appartement' },
  { value: 'MAISON', label: 'Maison' },
  { value: 'LOFT', label: 'Loft' },
  { value: 'OTHER', label: 'Autre' },
];

// ---------------------------------------------------------------------------
// C7 — DPE/GES class computation helpers
// ---------------------------------------------------------------------------

function computeDpeClass(value: number): DpeClass {
  if (value <= 70) return 'A';
  if (value <= 110) return 'B';
  if (value <= 180) return 'C';
  if (value <= 250) return 'D';
  if (value <= 330) return 'E';
  if (value <= 420) return 'F';
  return 'G';
}

function computeGesClass(value: number): DpeClass {
  if (value <= 6) return 'A';
  if (value <= 11) return 'B';
  if (value <= 30) return 'C';
  if (value <= 50) return 'D';
  if (value <= 70) return 'E';
  if (value <= 100) return 'F';
  return 'G';
}

// ---------------------------------------------------------------------------
// FormSection sub-component
// ---------------------------------------------------------------------------

function FormSection({
  title,
  completion,
  children,
  className,
}: {
  title: string;
  completion: number;
  children: React.ReactNode;
  className?: string;
}) {
  const variant = completion === 100 ? 'success' : completion >= 50 ? 'warning' : 'error';
  return (
    <div className={`border border-edge-default rounded-lg p-6 ${className ?? ''}`.trim()}>
      <div className="flex items-center gap-2 mb-4">
        <h6 className="text-h6 text-content-headings">{title}</h6>
        {className?.includes('bg-surface-neutral-action') ? null : (
          <Badge variant={variant}>{Math.round(completion)}%</Badge>
        )}
      </div>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// PropertyCreateView — main component
// ---------------------------------------------------------------------------

export function PropertyCreateView() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Address autocomplete state
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [addressLoading, setAddressLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Rooms state (separate from react-hook-form — stored in PropertyRoom table)
  const [rooms, setRooms] = useState<PropertyRoomFormData[]>([
    { roomType: 'SEJOUR', areaSqm: null, kitchenType: null, hasBathtub: null, hasShower: null, hasToilet: null, equipment: [], sortOrder: 0 },
    { roomType: 'CUISINE', areaSqm: null, kitchenType: null, hasBathtub: null, hasShower: null, hasToilet: null, equipment: [], sortOrder: 1 },
  ]);

  // Diagnostics state (add-row pattern)
  const [diagnosticRows, setDiagnosticRows] = useState<{
    diagnosticType: DiagnosticType;
    class: string | null;
    value: number | null;
    unit: string | null;
    validityDate: string | null;
    companyName: string | null;
  }[]>([
    { diagnosticType: 'DPE', class: null, value: null, unit: 'kWh/m²/an', validityDate: null, companyName: null },
    { diagnosticType: 'GES', class: null, value: null, unit: 'kgCO₂/m²/an', validityDate: null, companyName: null },
  ]);

  // Equipment state (add-row pattern with key + comment)
  const [equipmentRows, setEquipmentRows] = useState<{ key: string; comment: string }[]>([]);

  // Parking state (add-row pattern — multi-row ready, first row stored in flat columns)
  const [parkingRows, setParkingRows] = useState<{
    parkingType: string;
    parkingLengthM: string;
    parkingWidthM: string;
  }[]>([]);

  // C2 — Multi-owner state
  const [clientSearch, setClientSearch] = useState('');
  const [clientResults, setClientResults] = useState<{ id: string; firstName: string; lastName: string; primaryEmail: string }[]>([]);
  const [clientSearchLoading, setClientSearchLoading] = useState(false);
  const [selectedClients, setSelectedClients] = useState<{ id: string; name: string }[]>([]);
  const [showClientSearch, setShowClientSearch] = useState(false);
  const clientDebounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // ---------- Form ----------

  const methods = useForm<PropertyCreateData>({
    resolver: zodResolver(propertyCreateSchema) as any,
    defaultValues: {
      statusCheckboxes: [],
      clientIds: [],
      type: undefined,
      livingAreaSqm: undefined as unknown as number,
      numberOfRooms: undefined,
      mainExposure: undefined,
      mainViewType: undefined,
      address: '',
      addressStreet: '',
      addressZipCode: '',
      addressCity: '',
      addressLat: undefined,
      addressLng: undefined,
      building: '',
      doorNumber: '',
      floorLevel: undefined,
      numberOfFloors: undefined,
      constructionYear: undefined,
      condition: undefined,
      desiredSellingPrice: undefined,
      estimatedMarketValue: undefined,
      landAreaSqm: undefined,
      terraceAreaSqm: undefined,
      rooms: [],
      diagnostics: [],
      featureKeys: [],
      parkingType: undefined,
      parkingLengthM: undefined,
      parkingWidthM: undefined,
      hasElevator: false,
      hasDigicode: false,
      hasIntercom: false,
      notes: '',
      exposures: [],
      operationTypes: [],
      status: 'OFF_MARKET',
      tags: [],
    },
    mode: 'onTouched',
  });

  const {
    watch,
    setValue,
    control,
    handleSubmit,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = methods;

  const formValues = watch();

  // ---------- Derived state ----------

  const isApartmentType = formValues.type != null && APARTMENT_LIKE_TYPES.includes(formValues.type);

  // ---------- Completion logic ----------

  const { sectionCompletions, globalCompletion, isThresholdMet } = useMemo(() => {
    const isFilled = (v: unknown) => {
      if (Array.isArray(v)) return v.length > 0;
      if (typeof v === 'number') return true;
      if (typeof v === 'string') return v.length > 0;
      if (typeof v === 'boolean') return v;
      return v != null;
    };

    // S1: statusCheckboxes (at least 1) + clientIds
    const s1a = (formValues.statusCheckboxes?.length ?? 0) > 0 ? 1 : 0;
    const s1b = (formValues.clientIds?.length ?? 0) > 0 ? 1 : 0;
    const s1 = ((s1a + s1b) / 2) * 100;

    // S2: type + address required, + optional fields proportional
    const s2Required = [formValues.type, formValues.address];
    const s2Optional = [
      formValues.numberOfRooms,
      formValues.mainExposure,
      formValues.mainViewType,
      formValues.building,
      formValues.floorLevel,
      formValues.doorNumber,
      formValues.constructionYear,
      formValues.condition,
    ];
    const s2ReqFilled = s2Required.filter(isFilled).length;
    const s2OptFilled = s2Optional.filter(isFilled).length;
    const s2 = ((s2ReqFilled + s2OptFilled) / (2 + 8)) * 100;

    // S3: 2 optional prices
    const s3Fields = [formValues.desiredSellingPrice, formValues.estimatedMarketValue];
    const s3 = (s3Fields.filter(isFilled).length / 2) * 100;

    // S4: 3 surfaces (livingAreaSqm required + 2 optional)
    const s4Fields = [formValues.livingAreaSqm, formValues.terraceAreaSqm, formValues.landAreaSqm];
    const s4 = (s4Fields.filter(isFilled).length / 3) * 100;

    // S5: at least 1 room with areaSqm filled
    const s5 = rooms.some(r => r.areaSqm != null && r.areaSqm > 0) ? 100 : 0;

    // S6: at least 1 diagnostic with value filled
    const s6 = diagnosticRows.some(d => d.value != null) ? 100 : 0;

    // S7: at least 1 equipment selected
    const s7 = equipmentRows.length > 0 ? 100 : 0;

    // S8: parking filled
    const s8 = parkingRows.length > 0 && parkingRows[0].parkingType ? 100 : 0;

    // S9: proportional on 3 checkboxes
    const s9Checks = [formValues.hasElevator, formValues.hasDigicode, formValues.hasIntercom];
    const s9 = (s9Checks.filter(Boolean).length / 3) * 100;

    // S10: notes filled
    const s10 = (formValues.notes?.length ?? 0) > 0 ? 100 : 0;

    const sections = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
    const global = Math.round(sections.reduce((a, b) => a + b, 0) / 10);

    // Mandatory threshold: type + address + livingAreaSqm + clientIds
    const met =
      !!formValues.type &&
      !!formValues.address &&
      formValues.livingAreaSqm != null && formValues.livingAreaSqm > 0 &&
      (formValues.clientIds?.length ?? 0) > 0;

    return { sectionCompletions: sections, globalCompletion: global, isThresholdMet: met };
  }, [formValues, rooms, diagnosticRows, equipmentRows, parkingRows]);

  // ---------- Address handlers ----------

  const handleAddressSearch = useCallback(
    (query: string) => {
      setValue('address', query, { shouldValidate: false });
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (query.length < 3) {
        setAddressSuggestions([]);
        return;
      }
      debounceRef.current = setTimeout(async () => {
        setAddressLoading(true);
        const results = await searchAddress(query, 5);
        setAddressSuggestions(
          results.map((r) => ({
            label: r.label,
            street: r.street,
            zipCode: r.zipCode,
            city: r.city,
            lat: r.lat,
            lng: r.lng,
          })),
        );
        setAddressLoading(false);
      }, 300);
    },
    [setValue],
  );

  const handleAddressSelect = useCallback(
    (suggestion: AddressSuggestion) => {
      setValue('address', suggestion.label, { shouldValidate: true });
      setValue('addressStreet', suggestion.street ?? '');
      setValue('addressZipCode', suggestion.zipCode ?? '');
      setValue('addressCity', suggestion.city ?? '');
      setValue('addressLat', suggestion.lat);
      setValue('addressLng', suggestion.lng);
      setAddressSuggestions([]);
    },
    [setValue],
  );

  const handleAddressClear = useCallback(() => {
    setValue('address', '', { shouldValidate: true });
    setValue('addressStreet', '');
    setValue('addressZipCode', '');
    setValue('addressCity', '');
    setValue('addressLat', undefined);
    setValue('addressLng', undefined);
    setAddressSuggestions([]);
  }, [setValue]);

  // ---------- Status checkbox toggle ----------

  const toggleStatusCheckbox = (status: PropertyStatus) => {
    const current = formValues.statusCheckboxes ?? [];
    if (current.includes(status as any)) {
      setValue('statusCheckboxes', current.filter((s) => s !== status) as any, { shouldValidate: true });
    } else {
      setValue('statusCheckboxes', [...current, status] as any, { shouldValidate: true });
    }
  };

  // ---------- Room handlers ----------

  const addRoom = () => {
    setRooms(prev => [...prev, {
      roomType: 'CHAMBRE',
      areaSqm: null,
      kitchenType: null,
      hasBathtub: null,
      hasShower: null,
      hasToilet: null,
      equipment: [],
      sortOrder: prev.length,
    }]);
  };

  const removeRoom = (index: number) => {
    setRooms(prev => prev.filter((_, i) => i !== index));
  };

  const updateRoom = (index: number, updates: Partial<PropertyRoomFormData>) => {
    setRooms(prev => prev.map((r, i) => i === index ? { ...r, ...updates } : r));
  };

  // ---------- Diagnostic handlers ----------

  const addDiagnostic = () => {
    setDiagnosticRows(prev => [...prev, {
      diagnosticType: 'AMIANTE',
      class: null,
      value: null,
      unit: null,
      validityDate: null,
      companyName: null,
    }]);
  };

  const removeDiagnostic = (index: number) => {
    setDiagnosticRows(prev => prev.filter((_, i) => i !== index));
  };

  const updateDiagnostic = (index: number, updates: Record<string, any>) => {
    setDiagnosticRows(prev => prev.map((d, i) => {
      if (i !== index) return d;
      const updated = { ...d, ...updates };
      // C7 — Auto-compute class for DPE/GES based on value
      if (updated.diagnosticType === 'DPE' && updated.value != null && updated.value > 0) {
        updated.class = computeDpeClass(updated.value);
      } else if (updated.diagnosticType === 'GES' && updated.value != null && updated.value > 0) {
        updated.class = computeGesClass(updated.value);
      }
      return updated;
    }));
  };

  // ---------- Equipment handlers ----------

  const addEquipment = () => {
    setEquipmentRows(prev => [...prev, { key: '', comment: '' }]);
  };

  const removeEquipment = (index: number) => {
    setEquipmentRows(prev => prev.filter((_, i) => i !== index));
  };

  const updateEquipment = (index: number, updates: Partial<{ key: string; comment: string }>) => {
    setEquipmentRows(prev => prev.map((e, i) => i === index ? { ...e, ...updates } : e));
  };

  // ---------- Parking handlers ----------

  const addParking = () => {
    setParkingRows(prev => [...prev, { parkingType: '', parkingLengthM: '', parkingWidthM: '' }]);
  };

  const removeParking = (index: number) => {
    setParkingRows(prev => prev.filter((_, i) => i !== index));
  };

  const updateParking = (index: number, updates: Partial<{ parkingType: string; parkingLengthM: string; parkingWidthM: string }>) => {
    setParkingRows(prev => prev.map((p, i) => i === index ? { ...p, ...updates } : p));
  };

  // ---------- C2 — Client search handlers (multi-owner) ----------

  const handleClientSearch = useCallback((query: string) => {
    setClientSearch(query);
    if (clientDebounceRef.current) clearTimeout(clientDebounceRef.current);
    if (query.length < 2) {
      setClientResults([]);
      return;
    }
    clientDebounceRef.current = setTimeout(async () => {
      setClientSearchLoading(true);
      const supabase = createClient();
      const { data } = await supabase
        .from('Client')
        .select('id, firstName, lastName, primaryEmail')
        .or(`firstName.ilike.%${query}%,lastName.ilike.%${query}%,primaryEmail.ilike.%${query}%`)
        .limit(8);
      setClientResults(data ?? []);
      setClientSearchLoading(false);
    }, 300);
  }, []);

  const selectClient = useCallback((client: { id: string; firstName: string; lastName: string }) => {
    const newClient = { id: client.id, name: `${client.firstName} ${client.lastName}` };
    // Don't add duplicates
    setSelectedClients(prev => {
      if (prev.some(c => c.id === client.id)) return prev;
      const updated = [...prev, newClient];
      setValue('clientIds', updated.map(c => c.id), { shouldValidate: true });
      return updated;
    });
    setClientSearch('');
    setClientResults([]);
    setShowClientSearch(false);
  }, [setValue]);

  const removeClient = useCallback((clientId: string) => {
    setSelectedClients(prev => {
      const updated = prev.filter(c => c.id !== clientId);
      setValue('clientIds', updated.map(c => c.id), { shouldValidate: true });
      return updated;
    });
  }, [setValue]);

  // ---------- Submit ----------

  const onSubmit = async (data: PropertyCreateData) => {
    setIsSubmitting(true);
    try {
      const supabase = createClient();

      // 1. Get current agent
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Non authentifié');

      const { data: userRow } = await supabase
        .from('User')
        .select('id')
        .eq('supabase_id', user.id)
        .single();
      if (!userRow) throw new Error('Utilisateur non trouvé');

      const { data: agent } = await supabase
        .from('Agent')
        .select('id, organizationId')
        .eq('userId', userRow.id)
        .single();
      if (!agent) throw new Error('Agent non trouvé');

      // 2. Compute estimatedMarketValuePerSqm
      const estimatedMarketValuePerSqm =
        data.estimatedMarketValue && data.livingAreaSqm
          ? Math.round(data.estimatedMarketValue / data.livingAreaSqm)
          : null;

      // 3. Derive operationTypes + status from statusCheckboxes
      const opTypes: string[] = [];
      const statusChecks = data.statusCheckboxes ?? [];
      if (statusChecks.includes('A_VENDRE' as any)) opTypes.push('VENTE');
      if (statusChecks.includes('A_LOUER' as any)) opTypes.push('LOCATION');
      if (statusChecks.includes('EN_VIAGER' as any)) opTypes.push('VIAGER');

      const primaryStatus = statusChecks.length > 0 ? statusChecks[0] : 'OFF_MARKET';

      // 4. Build parking data from first row
      const firstParking = parkingRows[0];
      const parkingType = firstParking?.parkingType || null;
      const parkingLengthM = firstParking?.parkingLengthM ? Number(firstParking.parkingLengthM) : null;
      const parkingWidthM = firstParking?.parkingWidthM ? Number(firstParking.parkingWidthM) : null;

      // 5. Build mainExposure → exposures array for retro-compat
      const exposuresArray = data.mainExposure ? [data.mainExposure] : [];

      // C2 — Use first clientId for the Property row
      const primaryClientId = data.clientIds[0];

      // 6. Insert Property
      const { statusCheckboxes: _sc, clientIds: _cids, rooms: _rooms, diagnostics: _diags, featureKeys: _fk, ...rest } = data;

      const { data: property, error: propertyError } = await supabase
        .from('Property')
        .insert({
          id: crypto.randomUUID(),
          ...rest,
          clientId: primaryClientId,
          operationTypes: opTypes,
          status: primaryStatus,
          exposures: exposuresArray,
          parkingType,
          parkingLengthM,
          parkingWidthM,
          agentId: agent.id,
          organizationId: agent.organizationId,
          estimatedMarketValuePerSqm,
          completionScore: 0,
        })
        .select('id')
        .single();

      if (propertyError || !property) throw propertyError ?? new Error('Erreur création bien');

      // 7. Insert PropertyRoom rows
      const roomsToInsert = rooms
        .filter((r) => r.areaSqm != null || r.roomType === 'SEJOUR' || r.roomType === 'CUISINE')
        .map((r) => ({
          propertyId: property.id,
          organizationId: agent.organizationId,
          roomType: r.roomType,
          areaSqm: r.areaSqm,
          kitchenType: r.kitchenType,
          hasBathtub: r.hasBathtub,
          hasShower: r.hasShower,
          hasToilet: r.hasToilet,
          equipment: r.equipment,
          sortOrder: r.sortOrder,
        }));

      if (roomsToInsert.length > 0) {
        const { error: roomsError } = await supabase
          .from('PropertyRoom')
          .insert(roomsToInsert);
        if (roomsError) console.error('Erreur insertion pièces:', roomsError);
      }

      // 8. Insert PropertyDiagnostic rows
      const diagsToInsert = diagnosticRows
        .filter((d) => d.value != null || (d.class != null && d.class.length > 0))
        .map((d) => ({
          propertyId: property.id,
          organizationId: agent.organizationId,
          diagnosticType: d.diagnosticType,
          class: d.class,
          value: d.value,
          unit: d.unit,
          validityDate: d.validityDate,
          companyName: d.companyName,
        }));

      if (diagsToInsert.length > 0) {
        const { error: diagsError } = await supabase
          .from('PropertyDiagnostic')
          .insert(diagsToInsert);
        if (diagsError) console.error('Erreur insertion diagnostics:', diagsError);
      }

      // 9. Insert PropertyFeature rows (key + comment)
      const featuresToInsert = equipmentRows
        .filter((e) => e.key.length > 0)
        .map((e) => ({
          propertyId: property.id,
          organizationId: agent.organizationId,
          featureKey: e.key,
          featureValue: e.comment || 'true',
        }));

      if (featuresToInsert.length > 0) {
        const { error: featuresError } = await supabase
          .from('PropertyFeature')
          .insert(featuresToInsert);
        if (featuresError) console.error('Erreur insertion équipements:', featuresError);
      }

      toast('Bien créé avec succès', 'success');
      router.push(`/properties/${property.id}`);
    } catch (err) {
      console.error('Erreur création bien:', (err as any)?.message ?? (err as any)?.code ?? JSON.stringify(err));
      toast('Erreur lors de la création', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- Close ----------

  const handleClose = () => {
    if (isDirty && !isSubmitSuccessful) {
      if (!window.confirm('Quitter sans enregistrer ?')) return;
    }
    router.back();
  };

  // ---------- Render ----------

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[1191px] mx-auto">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 bg-surface-page pb-2">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-h6 text-content-headings">Ajouter un bien</h1>
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={!isThresholdMet || isSubmitting}
            >
              {isSubmitting ? 'Création...' : 'Créer le bien'}
            </Button>
            <IconButton variant="ghost" type="button" onClick={handleClose}>
              <X size={20} />
            </IconButton>
          </div>
        </div>

        <ProgressBar
          progress={globalCompletion}
          showPercentage
          threshold={isThresholdMet ? 1 : 101}
        />
      </div>

      {/* 10 sections */}
      <div className="space-y-6">

        {/* ── Section 1 — Statut du bien ── */}
        <FormSection title="Statut du bien" completion={sectionCompletions[0]} className="bg-surface-neutral-action">
          <div className="space-y-4">
            {/* Ligne 1: Status checkboxes — C1 */}
            <div className="flex flex-wrap gap-4">
              {STATUS_CHECKBOX_VALUES.map((status) => (
                <Checkbox
                  key={status}
                  label={PROPERTY_STATUS_LABELS[status]}
                  checked={formValues.statusCheckboxes?.includes(status as any) ?? false}
                  onChange={() => toggleStatusCheckbox(status)}
                />
              ))}
            </div>
            <p className="text-xs text-content-caption">
              Un bien peut être proposé en vente et en location simultanément.
            </p>

            {/* Ligne 2: C2 — Multi-owner with Chips + Add button */}
            <div>
              <Label label="Propriétaire(s)" required className="mb-2" />
              <div className="flex flex-wrap items-center gap-2">
                {selectedClients.map((client) => (
                  <div key={client.id} className="flex items-center gap-1">
                    <Button variant="outline" type="button">
                      {client.name}
                    </Button>
                    <IconButton variant="ghost" type="button" onClick={() => removeClient(client.id)}>
                      <X size={14} />
                    </IconButton>
                  </div>
                ))}
                {!showClientSearch && (
                  <IconButton
                    variant="outline"
                    type="button"
                    onClick={() => setShowClientSearch(true)}
                  >
                    <Plus size={16} />
                  </IconButton>
                )}
              </div>

              {showClientSearch && (
                <div className="mt-2">
                  <div className="relative">
                    <InputFieldOutlined
                      label=""
                      value={clientSearch}
                      onChange={handleClientSearch}
                      placeholder="Rechercher un client par nom ou email..."
                      error={false}
                    />
                    {clientResults.length > 0 && (
                      <div className="absolute z-10 top-full left-0 right-0 mt-1 border border-edge-default rounded-lg bg-surface-neutral-default shadow-lg max-h-48 overflow-y-auto">
                        {clientResults.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            className="w-full px-4 py-3 text-left hover:bg-surface-neutral-action transition-colors text-sm"
                            onClick={() => selectClient(c)}
                          >
                            <span className="font-medium text-content-strong">
                              {c.firstName} {c.lastName}
                            </span>
                            <span className="ml-2 text-content-subtle">{c.primaryEmail}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end mt-1">
                    <Button
                      variant="ghost"
                      type="button"
                      onClick={() => {
                        setShowClientSearch(false);
                        setClientSearch('');
                        setClientResults([]);
                      }}
                    >
                      Annuler
                    </Button>
                  </div>
                </div>
              )}

              {errors.clientIds && (
                <p className="text-xs text-content-error mt-1">{errors.clientIds.message}</p>
              )}
            </div>
          </div>
        </FormSection>

        {/* ── Section 2 — Informations générales ── */}
        <FormSection title="Informations générales" completion={sectionCompletions[1]}>
          <div className="space-y-4">
            {/* C3 + C4 — Single line: Catégorie + Nb pièces + Orientation + Vue */}
            <div className="flex gap-4">
              <div className="w-[330px]">
                <SelectField
                  label="Catégorie"
                  value={formValues.type ?? ''}
                  onChange={(val) => {
                    setValue('type', val as PropertyType, { shouldValidate: true });
                  }}
                  options={CATEGORY_OPTIONS}
                  error={errors.type ? 'Catégorie requise' : undefined}
                />
              </div>
              <div className="w-[180px]">
                <SelectField
                  label="Nombre de pièces"
                  value={formValues.numberOfRooms != null ? String(formValues.numberOfRooms) : ''}
                  onChange={(val) => setValue('numberOfRooms', val === '' ? undefined : Number(val), { shouldValidate: true })}
                  options={Object.entries(ROOM_COUNT_LABELS).map(([value, label]) => ({
                    value,
                    label,
                  }))}
                />
              </div>
              <div className="w-[180px]">
                <SelectField
                  label="Orientation"
                  value={formValues.mainExposure ?? ''}
                  onChange={(val) => setValue('mainExposure', val as Exposure, { shouldValidate: true })}
                  options={Object.entries(EXPOSURE_LABELS).map(([value, label]) => ({
                    value,
                    label,
                  }))}
                />
              </div>
              <div className="w-[180px]">
                <SelectField
                  label="Avec vue"
                  value={formValues.mainViewType ?? ''}
                  onChange={(val) => setValue('mainViewType', val as ViewType, { shouldValidate: true })}
                  options={Object.entries(VIEW_TYPE_LABELS).map(([value, label]) => ({
                    value,
                    label,
                  }))}
                />
              </div>
            </div>

            {/* Ligne 2: Adresse */}
            <div className="w-[1030px]">
              <Label label="Adresse" required className="mb-1" />
              <AddressField
                value={formValues.address ?? ''}
                suggestions={addressSuggestions}
                onSearch={handleAddressSearch}
                onSelect={handleAddressSelect}
                onClear={handleAddressClear}
                loading={addressLoading}
                placeholder="Rechercher une adresse..."
                error={!!errors.address}
              />
              {errors.address && (
                <p className="text-xs text-content-error mt-1">{errors.address.message}</p>
              )}
            </div>

            {/* Ligne 3: Building fields (apartment-like only) */}
            {isApartmentType && (
              <div className="flex gap-4">
                <div className="w-[200px]">
                  <InputFieldOutlined
                    label="Bâtiment"
                    type="text"
                    value={formValues.building ?? ''}
                    onChange={(v) => setValue('building', v)}
                    placeholder="Ex: A"
                  />
                </div>
                <div className="w-[200px]">
                  <Controller
                    name="floorLevel"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div>
                        <InputFieldOutlined
                          label="Étage"
                          type="number"
                          value={field.value != null ? String(field.value) : ''}
                          onChange={(v) => field.onChange(v === '' ? undefined : v)}
                          onBlur={field.onBlur}
                          error={!!fieldState.error}
                          placeholder="Ex: 3"
                        />
                      </div>
                    )}
                  />
                </div>
                <div className="w-[200px]">
                  <InputFieldOutlined
                    label="Porte"
                    type="text"
                    value={formValues.doorNumber ?? ''}
                    onChange={(v) => setValue('doorNumber', v)}
                    placeholder="Ex: 12B"
                  />
                </div>
                <div className="w-[200px]">
                  <Controller
                    name="numberOfFloors"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div>
                        <InputFieldOutlined
                          label="Nb étages immeuble"
                          type="number"
                          value={field.value != null ? String(field.value) : ''}
                          onChange={(v) => field.onChange(v === '' ? undefined : v)}
                          onBlur={field.onBlur}
                          error={!!fieldState.error}
                          placeholder="Ex: 7"
                        />
                      </div>
                    )}
                  />
                </div>
              </div>
            )}

            {/* Ligne 4: Année de construction + État général */}
            <div className="flex gap-4">
              <div className="w-[330px]">
                <Controller
                  name="constructionYear"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <InputFieldOutlined
                        label="Année de construction"
                        type="number"
                        value={field.value != null ? String(field.value) : ''}
                        onChange={(v) => field.onChange(v === '' ? undefined : v)}
                        onBlur={field.onBlur}
                        error={!!fieldState.error}
                        placeholder="Ex: 1985"
                      />
                      {fieldState.error && (
                        <p className="text-xs text-content-error mt-1">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="w-[330px]">
                <SelectField
                  label="État général"
                  value={formValues.condition ?? ''}
                  onChange={(val) => setValue('condition', val as any, { shouldValidate: true })}
                  options={Object.entries(PROPERTY_CONDITION_LABELS).map(([value, label]) => ({
                    value,
                    label,
                  }))}
                />
              </div>
            </div>
          </div>
        </FormSection>

        {/* ── Section 3 — Valeur marché ── */}
        <FormSection title="Valeur marché" completion={sectionCompletions[2]}>
          <div className="flex gap-4">
            <div className="w-[330px]">
              <Controller
                name="desiredSellingPrice"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputFieldOutlined
                      label="Prix client (€)"
                      type="number"
                      value={field.value != null ? String(field.value) : ''}
                      onChange={(v) => field.onChange(v === '' ? undefined : v)}
                      onBlur={field.onBlur}
                      error={!!fieldState.error}
                      placeholder="Ex: 350000"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-content-error mt-1">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="w-[330px]">
              <Controller
                name="estimatedMarketValue"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputFieldOutlined
                      label="Prix marché (€)"
                      type="number"
                      value={field.value != null ? String(field.value) : ''}
                      onChange={(v) => field.onChange(v === '' ? undefined : v)}
                      onBlur={field.onBlur}
                      error={!!fieldState.error}
                      placeholder="Ex: 340000"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-content-error mt-1">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
        </FormSection>

        {/* ── Section 4 — Surfaces (C5) ── */}
        <FormSection title="Surfaces" completion={sectionCompletions[3]}>
          <div className="flex gap-4">
            <div className="w-[240px]">
              <Controller
                name="livingAreaSqm"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputFieldOutlined
                      label="Surface habitable (m²)"
                      type="number"
                      value={field.value != null ? String(field.value) : ''}
                      onChange={(v) => field.onChange(v === '' ? undefined : v)}
                      onBlur={field.onBlur}
                      error={!!fieldState.error}
                      required
                    />
                    {fieldState.error && (
                      <p className="text-xs text-content-error mt-1">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="w-[240px]">
              <Controller
                name="terraceAreaSqm"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputFieldOutlined
                      label="Surface extérieure (m²)"
                      type="number"
                      value={field.value != null ? String(field.value) : ''}
                      onChange={(v) => field.onChange(v === '' ? undefined : v)}
                      onBlur={field.onBlur}
                      error={!!fieldState.error}
                      placeholder="Balcon, terrasse, jardin..."
                    />
                  </div>
                )}
              />
            </div>
            <div className="w-[240px]">
              <Controller
                name="landAreaSqm"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputFieldOutlined
                      label="Surface annexe (m²)"
                      type="number"
                      value={field.value != null ? String(field.value) : ''}
                      onChange={(v) => field.onChange(v === '' ? undefined : v)}
                      onBlur={field.onBlur}
                      error={!!fieldState.error}
                      placeholder="Cave, etc."
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </FormSection>

        {/* ── Section 5 — Caractéristiques par pièce (C6) ── */}
        <FormSection title="Caractéristiques par pièce" completion={sectionCompletions[4]}>
          <div className="space-y-4">
            {rooms.map((room, index) => (
              <div
                key={`room-${index}`}
                className="flex items-start gap-4"
              >
                <div className="w-[220px]">
                  <SelectField
                    label="Type de pièce"
                    value={room.roomType}
                    onChange={(val) => updateRoom(index, { roomType: val as RoomType })}
                    options={Object.entries(ROOM_TYPE_LABELS).map(([value, label]) => ({
                      value,
                      label,
                    }))}
                  />
                </div>
                <div className="w-[150px]">
                  <InputFieldOutlined
                    label="Surface (m²)"
                    type="number"
                    value={room.areaSqm != null ? String(room.areaSqm) : ''}
                    onChange={(v) => updateRoom(index, { areaSqm: v === '' ? null : Number(v) })}
                    placeholder="Ex: 20"
                  />
                </div>

                {/* Kitchen type (CUISINE only) */}
                {room.roomType === 'CUISINE' && (
                  <div className="w-[220px]">
                    <SelectField
                      label="Type"
                      value={room.kitchenType ?? ''}
                      onChange={(val) => updateRoom(index, { kitchenType: val as any })}
                      options={Object.entries(KITCHEN_TYPE_LABELS).map(([value, label]) => ({
                        value,
                        label,
                      }))}
                    />
                  </div>
                )}

                {/* Bathroom options (SALLE_DE_BAIN or DOUCHE) */}
                {(room.roomType === 'SALLE_DE_BAIN' || room.roomType === 'DOUCHE') && (
                  <>
                    <div className="w-[100px] pt-6">
                      <Checkbox
                        label="Baignoire"
                        checked={room.hasBathtub ?? false}
                        onChange={(checked) => updateRoom(index, { hasBathtub: checked })}
                      />
                    </div>
                    <div className="w-[100px] pt-6">
                      <Checkbox
                        label="Douche"
                        checked={room.hasShower ?? false}
                        onChange={(checked) => updateRoom(index, { hasShower: checked })}
                      />
                    </div>
                    <div className="w-[100px] pt-6">
                      <Checkbox
                        label="WC"
                        checked={room.hasToilet ?? false}
                        onChange={(checked) => updateRoom(index, { hasToilet: checked })}
                      />
                    </div>
                  </>
                )}

                {/* C6 — Equipment text field */}
                <div className="flex-1">
                  <InputFieldOutlined
                    label="Équipement"
                    type="text"
                    value={room.equipment[0] ?? ''}
                    onChange={(v) => updateRoom(index, { equipment: v ? [v] : [] })}
                    placeholder="Équipement de la pièce..."
                  />
                </div>

                {/* Delete button (not for first 2 default rows) */}
                {index >= 2 && (
                  <div className="pt-6">
                    <IconButton variant="ghost" type="button" onClick={() => removeRoom(index)}>
                      <Trash2 size={16} />
                    </IconButton>
                  </div>
                )}
              </div>
            ))}

            <Button variant="outline" type="button" onClick={addRoom}>
              <Plus size={16} className="mr-1" />
              Ajouter une pièce
            </Button>
          </div>
        </FormSection>

        {/* ── Section 6 — Diagnostics (C7 + C8) ── */}
        <FormSection title="Diagnostics" completion={sectionCompletions[5]}>
          <div className="space-y-4">
            {diagnosticRows.map((diag, index) => (
              <div
                key={`diag-${index}`}
                className="space-y-3"
              >
                <div className="flex items-start gap-4">
                  <div className="w-[220px]">
                    <SelectField
                      label="Type"
                      value={diag.diagnosticType}
                      onChange={(val) => updateDiagnostic(index, { diagnosticType: val })}
                      options={Object.entries(DIAGNOSTIC_TYPE_LABELS).map(([value, label]) => ({
                        value,
                        label,
                      }))}
                    />
                  </div>

                  {/* C7 — DPE/GES: Score input + auto-computed icon */}
                  {(diag.diagnosticType === 'DPE' || diag.diagnosticType === 'GES') ? (
                    <div className="flex items-end gap-4">
                      <div className="w-[180px]">
                        <InputFieldOutlined
                          label="Score"
                          type="number"
                          value={diag.value != null ? String(diag.value) : ''}
                          onChange={(v) => updateDiagnostic(index, { value: v === '' ? null : Number(v) })}
                          placeholder={diag.diagnosticType === 'DPE' ? 'kWh/m²/an' : 'kgCO₂/m²/an'}
                        />
                      </div>
                      {diag.value != null && diag.value > 0 && (
                        <div>
                          {diag.diagnosticType === 'DPE' ? (
                            <IconDpe
                              classe={computeDpeClass(diag.value) as DpeType}
                              size="medium"
                            />
                          ) : (
                            <IconGes
                              classe={computeGesClass(diag.value) as GesType}
                              size="medium"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-[150px]">
                      <InputFieldOutlined
                        label="Valeur"
                        type="text"
                        value={diag.value != null ? String(diag.value) : ''}
                        onChange={(v) => updateDiagnostic(index, { value: v === '' ? null : Number(v) })}
                      />
                    </div>
                  )}

                  <div className="w-[180px]">
                    <InputFieldOutlined
                      label="Diagnostiqueur"
                      type="text"
                      value={diag.companyName ?? ''}
                      onChange={(v) => updateDiagnostic(index, { companyName: v || null })}
                      placeholder="Ex: Diagamter"
                    />
                  </div>

                  <div className="w-[180px]">
                    <div className="flex flex-col gap-[12px]">
                      <Label label="Date validité" />
                      <DatePicker
                        variant="docked"
                        selectedDate={diag.validityDate ? new Date(diag.validityDate) : undefined}
                        dateFormat="DD/MM/YYYY"
                        onDateSelect={(date) => {
                          updateDiagnostic(index, {
                            validityDate: date ? date.toISOString().split('T')[0] : null,
                          });
                        }}
                        placeholder="Sélectionner"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <IconButton variant="ghost" type="button" onClick={() => removeDiagnostic(index)}>
                      <Trash2 size={16} />
                    </IconButton>
                  </div>
                </div>
              </div>
            ))}

            <Button variant="outline" type="button" onClick={addDiagnostic}>
              <Plus size={16} className="mr-1" />
              Ajouter un diagnostic
            </Button>
          </div>
        </FormSection>

        {/* ── Section 7 — Équipements ── */}
        <FormSection title="Équipements" completion={sectionCompletions[6]}>
          <div className="space-y-4">
            {equipmentRows.map((equip, index) => (
              <div
                key={`equip-${index}`}
                className="flex items-start gap-4"
              >
                <div className="w-[330px]">
                  <SelectField
                    label="Équipement"
                    value={equip.key}
                    onChange={(val) => updateEquipment(index, { key: val })}
                    options={FEATURE_KEYS.map((f) => ({
                      value: f.key,
                      label: f.label,
                    }))}
                  />
                </div>
                <div className="flex-1">
                  <InputFieldOutlined
                    label="Commentaire"
                    type="text"
                    value={equip.comment}
                    onChange={(v) => updateEquipment(index, { comment: v })}
                    placeholder="Détail optionnel..."
                  />
                </div>
                <div className="pt-6">
                  <IconButton variant="ghost" type="button" onClick={() => removeEquipment(index)}>
                    <Trash2 size={16} />
                  </IconButton>
                </div>
              </div>
            ))}

            <Button variant="outline" type="button" onClick={addEquipment}>
              <Plus size={16} className="mr-1" />
              Ajouter un équipement
            </Button>
          </div>
        </FormSection>

        {/* ── Section 8 — Stationnement ── */}
        <FormSection title="Stationnement" completion={sectionCompletions[7]}>
          <div className="space-y-4">
            {parkingRows.map((parking, index) => (
              <div
                key={`parking-${index}`}
                className="flex items-start gap-4"
              >
                <div className="w-[220px]">
                  <SelectField
                    label="Type"
                    value={parking.parkingType}
                    onChange={(val) => updateParking(index, { parkingType: val })}
                    options={Object.entries(PARKING_TYPE_LABELS).map(([value, label]) => ({
                      value,
                      label,
                    }))}
                  />
                </div>
                <div className="w-[150px]">
                  <InputFieldOutlined
                    label="Longueur (m)"
                    type="number"
                    value={parking.parkingLengthM}
                    onChange={(v) => updateParking(index, { parkingLengthM: v })}
                    placeholder="Ex: 5"
                  />
                </div>
                <div className="w-[150px]">
                  <InputFieldOutlined
                    label="Largeur (m)"
                    type="number"
                    value={parking.parkingWidthM}
                    onChange={(v) => updateParking(index, { parkingWidthM: v })}
                    placeholder="Ex: 2.5"
                  />
                </div>
                <div className="pt-6">
                  <IconButton variant="ghost" type="button" onClick={() => removeParking(index)}>
                    <Trash2 size={16} />
                  </IconButton>
                </div>
              </div>
            ))}

            <Button variant="outline" type="button" onClick={addParking}>
              <Plus size={16} className="mr-1" />
              Ajouter un stationnement
            </Button>
          </div>
        </FormSection>

        {/* ── Section 9 — Parties Communes ── */}
        <FormSection title="Parties communes" completion={sectionCompletions[8]}>
          <div className="flex items-center gap-6">
            <Checkbox
              label="Ascenseur"
              checked={formValues.hasElevator ?? false}
              onChange={(checked) => setValue('hasElevator', checked)}
            />
            <Checkbox
              label="Digicode"
              checked={formValues.hasDigicode ?? false}
              onChange={(checked) => setValue('hasDigicode', checked)}
            />
            <Checkbox
              label="Interphone"
              checked={formValues.hasIntercom ?? false}
              onChange={(checked) => setValue('hasIntercom', checked)}
            />
          </div>
        </FormSection>

        {/* ── Section 10 — Informations complémentaires ── */}
        <FormSection title="Informations complémentaires" completion={sectionCompletions[9]}>
          <Label label="Commentaire libre" className="mb-1" />
          <TextArea
            value={formValues.notes ?? ''}
            onChange={(val) => setValue('notes', val)}
            placeholder="Notes visibles uniquement par l'équipe..."
            maxLength={2000}
            showCharCount
            rows={4}
          />
        </FormSection>
      </div>
    </form>
  );
}
