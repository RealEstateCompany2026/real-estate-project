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

// App imports
import { useToast } from '@/components/ui/Toast';
import { createClient } from '@/lib/supabase/client';
import { propertyCreateSchema, type PropertyCreateData } from '@/lib/validations/property';
import {
  PROPERTY_CATEGORY_TYPES,
  CATEGORY_LABELS,
  PROPERTY_TYPE_LABELS,
  OPERATION_TYPE_LABELS,
  ROOM_COUNT_LABELS,
  PROPERTY_CONDITION_LABELS,
  HEATING_TYPE_LABELS,
  HOT_WATER_SYSTEM_LABELS,
  VIEW_TYPE_LABELS,
  PARKING_TYPE_LABELS,
  KITCHEN_TYPE_LABELS,
  ROOM_TYPE_LABELS,
  PROPERTY_STATUS_LABELS,
  EXPOSURE_LABELS,
  DPE_COLORS,
  type DpeClass,
  type PropertyCategory,
  type PropertyType,
  type OperationType,
  type RoomType,
  type Exposure,
  type PropertyRoomFormData,
} from '@/types/property';
import { searchAddress } from '@/lib/utils/address';

// ---------------------------------------------------------------------------
// FEATURE_KEYS — equipment checkboxes
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
// Residential types that show room count + floor fields
// ---------------------------------------------------------------------------

const APARTMENT_LIKE_TYPES: PropertyType[] = [
  'APPARTEMENT', 'STUDIO', 'LOFT', 'T1', 'T2', 'T3', 'T4',
];

const LAND_TYPES: PropertyType[] = ['MAISON', 'MAISON_DE_VILLE', 'TERRAIN'];

const RESIDENTIAL_ROOM_COUNT_TYPES: PropertyType[] = [
  'APPARTEMENT', 'MAISON_DE_VILLE', 'LOFT',
];

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
        <Badge variant={variant}>{Math.round(completion)}%</Badge>
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

  // Category selection (front-only grouping)
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory | null>(null);

  // Address autocomplete state
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [addressLoading, setAddressLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Rooms state (separate from react-hook-form — stored in PropertyRoom table)
  const [rooms, setRooms] = useState<PropertyRoomFormData[]>([
    { roomType: 'SEJOUR', areaSqm: null, kitchenType: null, hasBathtub: null, hasShower: null, hasToilet: null, equipment: [], sortOrder: 0 },
    { roomType: 'CUISINE', areaSqm: null, kitchenType: null, hasBathtub: null, hasShower: null, hasToilet: null, equipment: [], sortOrder: 0 },
  ]);

  // Client (owner) search state
  const [clientSearch, setClientSearch] = useState('');
  const [clientResults, setClientResults] = useState<{ id: string; firstName: string; lastName: string; primaryEmail: string }[]>([]);
  const [clientSearchLoading, setClientSearchLoading] = useState(false);
  const [selectedClient, setSelectedClient] = useState<{ id: string; name: string } | null>(null);
  const clientDebounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // ---------- Form ----------

  const methods = useForm<PropertyCreateData>({
    resolver: zodResolver(propertyCreateSchema) as any,
    defaultValues: {
      type: undefined,
      operationTypes: [],
      numberOfRooms: undefined,
      address: '',
      addressStreet: '',
      addressZipCode: '',
      addressCity: '',
      addressLat: undefined,
      addressLng: undefined,
      neighborhoodName: '',
      floorLevel: undefined,
      numberOfFloors: undefined,
      livingAreaSqm: undefined as unknown as number,
      landAreaSqm: undefined,
      terraceAreaSqm: undefined,
      balconyAreaSqm: undefined,
      gardenAreaSqm: undefined,
      rooms: [],
      condition: undefined,
      constructionYear: undefined,
      heatingType: undefined,
      hotWaterSystem: undefined,
      exposures: [],
      mainViewType: undefined,
      parkingType: undefined,
      parkingSpotCount: undefined,
      featureKeys: [],
      diagnostics: [],
      desiredSellingPrice: undefined as unknown as number,
      estimatedMarketValue: undefined,
      clientId: '',
      status: 'OFF_MARKET',
      internalRef: '',
      notes: '',
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

  // ---------- Completion logic ----------

  const { sectionCompletions, globalCompletion, isThresholdMet } = useMemo(() => {
    const isFilled = (v: unknown) => {
      if (Array.isArray(v)) return v.length > 0;
      if (typeof v === 'number') return true;
      if (typeof v === 'string') return v.length > 0;
      return v != null;
    };

    // S1: type + operationTypes
    const s1Fields = [formValues.type, formValues.operationTypes];
    const s1 = (s1Fields.filter(isFilled).length / 2) * 100;

    // S2: address (+ optional neighborhoodName, floorLevel, numberOfFloors — 4 fields)
    const s2Fields = [formValues.address, formValues.neighborhoodName, formValues.floorLevel, formValues.numberOfFloors];
    const s2 = (s2Fields.filter(isFilled).length / 4) * 100;

    // S3: livingAreaSqm + optional surfaces (5 fields)
    const s3Fields = [formValues.livingAreaSqm, formValues.landAreaSqm, formValues.terraceAreaSqm, formValues.balconyAreaSqm, formValues.gardenAreaSqm];
    const s3 = (s3Fields.filter(isFilled).length / 5) * 100;

    // S4: rooms — at least 1 room with areaSqm filled
    const s4 = rooms.some(r => r.areaSqm != null && r.areaSqm > 0) ? 100 : 0;

    // S5: characteristics (7 fields)
    const s5Fields = [formValues.condition, formValues.constructionYear, formValues.heatingType, formValues.hotWaterSystem, formValues.exposures, formValues.mainViewType, formValues.parkingType];
    const s5 = (s5Fields.filter(isFilled).length / 7) * 100;

    // S6: features — at least 1 selected
    const s6 = (formValues.featureKeys?.length ?? 0) > 0 ? 100 : 0;

    // S7: diagnostics — at least DPE filled
    const s7 = (formValues.diagnostics?.length ?? 0) > 0 && formValues.diagnostics?.some(d => d.class) ? 100 : 0;

    // S8: price
    const s8Fields = [formValues.desiredSellingPrice, formValues.estimatedMarketValue];
    const s8 = (s8Fields.filter(isFilled).length / 2) * 100;

    // S9: clientId + optional notes/tags (3 fields)
    const s9Fields = [formValues.clientId, formValues.notes, formValues.internalRef];
    const s9 = (s9Fields.filter(isFilled).length / 3) * 100;

    const sections = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
    const global = Math.round(sections.reduce((a, b) => a + b, 0) / 9);

    // Mandatory threshold: type + operationTypes + address + livingAreaSqm + desiredSellingPrice + clientId
    const met =
      !!formValues.type &&
      (formValues.operationTypes?.length ?? 0) > 0 &&
      !!formValues.address &&
      formValues.livingAreaSqm != null && formValues.livingAreaSqm > 0 &&
      formValues.desiredSellingPrice != null && formValues.desiredSellingPrice > 0 &&
      !!formValues.clientId;

    return { sectionCompletions: sections, globalCompletion: global, isThresholdMet: met };
  }, [formValues, rooms]);

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

  // ---------- Operation type toggle ----------

  const toggleOp = (op: OperationType) => {
    const current = formValues.operationTypes || [];
    const next = current.includes(op) ? current.filter(o => o !== op) : [...current, op];
    setValue('operationTypes', next, { shouldValidate: true });
  };

  // ---------- Exposure toggle ----------

  const toggleExposure = (exp: Exposure) => {
    const current = formValues.exposures || [];
    const next = current.includes(exp) ? current.filter(e => e !== exp) : [...current, exp];
    setValue('exposures', next, { shouldValidate: true });
  };

  // ---------- Room handlers ----------

  const addRoom = (type: RoomType) => {
    const existingOfType = rooms.filter(r => r.roomType === type);
    setRooms(prev => [...prev, {
      roomType: type,
      areaSqm: null,
      kitchenType: null,
      hasBathtub: type === 'SALLE_DE_BAIN' || type === 'DOUCHE' ? false : null,
      hasShower: type === 'SALLE_DE_BAIN' || type === 'DOUCHE' ? false : null,
      hasToilet: type === 'WC' ? true : null,
      equipment: [],
      sortOrder: existingOfType.length,
    }]);
  };

  const removeRoom = (index: number) => {
    setRooms(prev => prev.filter((_, i) => i !== index));
  };

  const updateRoom = (index: number, updates: Partial<PropertyRoomFormData>) => {
    setRooms(prev => prev.map((r, i) => i === index ? { ...r, ...updates } : r));
  };

  // ---------- Diagnostic helpers ----------

  const getDiagnostic = (type: string) => formValues.diagnostics?.find(d => d.diagnosticType === type);
  const setDiagnostic = (type: string, updates: Record<string, any>) => {
    const current = formValues.diagnostics ?? [];
    const existing = current.find(d => d.diagnosticType === type);
    if (existing) {
      setValue('diagnostics', current.map(d => d.diagnosticType === type ? { ...d, ...updates } : d), { shouldValidate: true });
    } else {
      setValue('diagnostics', [...current, { diagnosticType: type, class: null, value: null, unit: type === 'DPE' ? 'kWh/m²/an' : 'gCO₂/m²/an', validityDate: null, companyName: null, ...updates }], { shouldValidate: true });
    }
  };

  // ---------- Client search handlers ----------

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
    setValue('clientId', client.id, { shouldValidate: true });
    setSelectedClient({ id: client.id, name: `${client.firstName} ${client.lastName}` });
    setClientSearch('');
    setClientResults([]);
  }, [setValue]);

  // ---------- Submit ----------

  const onSubmit = async (data: PropertyCreateData) => {
    setIsSubmitting(true);
    try {
      // Validate rooms data (managed outside react-hook-form)
      const validatedRooms = rooms.filter(r => r.areaSqm != null || r.roomType === 'SEJOUR' || r.roomType === 'CUISINE');
      for (const room of validatedRooms) {
        if (room.areaSqm != null && (typeof room.areaSqm !== 'number' || isNaN(room.areaSqm) || room.areaSqm < 0)) {
          toast({ title: 'Surface de pièce invalide', variant: 'error' });
          setIsSubmitting(false);
          return;
        }
      }

      const supabase = createClient();

      // 1. Get current agent
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Non authentifié');

      const { data: agent } = await supabase
        .from('Agent')
        .select('id, organizationId')
        .eq('userId', user.id)
        .single();
      if (!agent) throw new Error('Agent non trouvé');

      // 2. Compute estimatedMarketValuePerSqm
      const estimatedMarketValuePerSqm =
        data.estimatedMarketValue && data.livingAreaSqm
          ? Math.round(data.estimatedMarketValue / data.livingAreaSqm)
          : null;

      // 3. Insert Property
      const { rooms: _rooms, diagnostics: _diags, featureKeys: _featureKeys, ...propertyData } = data;

      const { data: property, error: propertyError } = await supabase
        .from('Property')
        .insert({
          ...propertyData,
          agentId: agent.id,
          organizationId: agent.organizationId,
          estimatedMarketValuePerSqm,
          completionScore: 0,
        })
        .select('id')
        .single();

      if (propertyError || !property) throw propertyError ?? new Error('Erreur création bien');

      // 4. Insert PropertyRoom rows
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

      // 5. Insert PropertyDiagnostic rows
      const diagsToInsert = (data.diagnostics ?? [])
        .filter((d) => d.class != null)
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

      // 6. Insert PropertyFeature rows
      const featuresToInsert = (data.featureKeys ?? []).map((key) => ({
        propertyId: property.id,
        featureKey: key,
        featureValue: 'true',
      }));

      if (featuresToInsert.length > 0) {
        const { error: featuresError } = await supabase
          .from('PropertyFeature')
          .insert(featuresToInsert);
        if (featuresError) console.error('Erreur insertion équipements:', featuresError);
      }

      toast({ title: 'Bien créé avec succès', variant: 'success' });
      router.push(`/properties/${property.id}`);
    } catch (err) {
      console.error('Erreur création bien:', err);
      toast({ title: 'Erreur lors de la création', variant: 'error' });
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

  // ---------- Derived state ----------

  const showRoomCount =
    selectedCategory === 'RESIDENTIEL' ||
    (formValues.type && RESIDENTIAL_ROOM_COUNT_TYPES.includes(formValues.type));

  const showFloorFields = formValues.type != null && APARTMENT_LIKE_TYPES.includes(formValues.type);
  const showLandArea = formValues.type != null && LAND_TYPES.includes(formValues.type);

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

      {/* 9 sections */}
      <div className="space-y-6">

        {/* ── Section 1 — Catégorie de bien ── */}
        <FormSection title="Catégorie de bien" completion={sectionCompletions[0]}>
          <div className="space-y-4">
            {/* Category cards */}
            <div>
              <Label label="Catégorie" className="mb-2" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(Object.entries(CATEGORY_LABELS) as [PropertyCategory, string][]).map(
                  ([cat, label]) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        // If category has only one type, auto-select it
                        const types = PROPERTY_CATEGORY_TYPES[cat];
                        if (types.length === 1) {
                          setValue('type', types[0], { shouldValidate: true });
                        }
                      }}
                      className={`rounded-lg border p-4 text-center transition-colors ${
                        selectedCategory === cat
                          ? 'border-edge-branded-default bg-surface-information text-content-branded-action'
                          : 'border-edge-default bg-surface-neutral-action text-content-body hover:border-edge-branded-default'
                      }`}
                    >
                      <span className="text-sm font-semibold">{label}</span>
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Sub-types as Chips */}
            {selectedCategory && PROPERTY_CATEGORY_TYPES[selectedCategory].length > 1 && (
              <div>
                <Label label="Type de bien" className="mb-2" />
                <div className="flex flex-wrap gap-2">
                  {PROPERTY_CATEGORY_TYPES[selectedCategory].map((subType) => (
                    <Chip
                      key={subType}
                      label={PROPERTY_TYPE_LABELS[subType]}
                      selected={formValues.type === subType}
                      variant="filled"
                      onClick={() => setValue('type', subType, { shouldValidate: true })}
                    />
                  ))}
                </div>
              </div>
            )}
            {errors.type && (
              <p className="text-sm text-content-danger mt-1">{errors.type.message}</p>
            )}

            {/* Operation types */}
            <div>
              <Label label="Type d'opération *" className="mb-2" />
              <div className="flex flex-wrap gap-2">
                {(Object.entries(OPERATION_TYPE_LABELS) as [OperationType, string][]).map(
                  ([op, label]) => (
                    <Chip
                      key={op}
                      label={label}
                      selected={formValues.operationTypes?.includes(op) ?? false}
                      variant="filled"
                      onClick={() => toggleOp(op)}
                    />
                  ),
                )}
              </div>
              {errors.operationTypes && (
                <p className="text-sm text-content-danger mt-1">{errors.operationTypes.message}</p>
              )}
            </div>

            {/* Room count selector (residential only) */}
            {showRoomCount && (
              <div>
                <Label label="Nombre de pièces" className="mb-2" />
                <div className="flex flex-wrap gap-2">
                  {(Object.entries(ROOM_COUNT_LABELS) as [string, string][]).map(
                    ([count, label]) => (
                      <Chip
                        key={count}
                        label={label}
                        selected={formValues.numberOfRooms === Number(count)}
                        variant="filled"
                        onClick={() => setValue('numberOfRooms', Number(count), { shouldValidate: true })}
                      />
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </FormSection>

        {/* ── Section 2 — Localisation ── */}
        <FormSection title="Localisation" completion={sectionCompletions[1]}>
          <div className="space-y-4">
            {/* Address */}
            <div className="w-full">
              <Label label="Adresse *" className="mb-1" />
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
                <p className="text-sm text-content-danger mt-1">{errors.address.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Neighborhood */}
              <InputFieldOutlined
                label="Quartier"
                type="text"
                value={formValues.neighborhoodName ?? ''}
                onChange={(v) => setValue('neighborhoodName', v)}
                placeholder="Nom du quartier"
              />

              {/* Floor fields — apartment-like only */}
              {showFloorFields && (
                <>
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
                        {fieldState.error && (
                          <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="numberOfFloors"
                    control={control}
                    render={({ field, fieldState }) => (
                      <div>
                        <InputFieldOutlined
                          label="Nombre d'étages de l'immeuble"
                          type="number"
                          value={field.value != null ? String(field.value) : ''}
                          onChange={(v) => field.onChange(v === '' ? undefined : v)}
                          onBlur={field.onBlur}
                          error={!!fieldState.error}
                          placeholder="Ex: 7"
                        />
                        {fieldState.error && (
                          <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />
                </>
              )}
            </div>
          </div>
        </FormSection>

        {/* ── Section 3 — Surfaces ── */}
        <FormSection title="Surfaces" completion={sectionCompletions[2]}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="livingAreaSqm"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <InputFieldOutlined
                    label="Surface habitable (m²) *"
                    type="number"
                    value={field.value != null ? String(field.value) : ''}
                    onChange={(v) => field.onChange(v === '' ? undefined : v)}
                    onBlur={field.onBlur}
                    error={!!fieldState.error}
                    placeholder="Ex: 65"
                  />
                  {fieldState.error && (
                    <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            {showLandArea && (
              <Controller
                name="landAreaSqm"
                control={control}
                render={({ field, fieldState }) => (
                  <div>
                    <InputFieldOutlined
                      label="Surface terrain (m²)"
                      type="number"
                      value={field.value != null ? String(field.value) : ''}
                      onChange={(v) => field.onChange(v === '' ? undefined : v)}
                      onBlur={field.onBlur}
                      error={!!fieldState.error}
                      placeholder="Ex: 500"
                    />
                    {fieldState.error && (
                      <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />
            )}

            <Controller
              name="terraceAreaSqm"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <InputFieldOutlined
                    label="Surface terrasse (m²)"
                    type="number"
                    value={field.value != null ? String(field.value) : ''}
                    onChange={(v) => field.onChange(v === '' ? undefined : v)}
                    onBlur={field.onBlur}
                    error={!!fieldState.error}
                    placeholder="Ex: 15"
                  />
                  {fieldState.error && (
                    <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="balconyAreaSqm"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <InputFieldOutlined
                    label="Surface balcon (m²)"
                    type="number"
                    value={field.value != null ? String(field.value) : ''}
                    onChange={(v) => field.onChange(v === '' ? undefined : v)}
                    onBlur={field.onBlur}
                    error={!!fieldState.error}
                    placeholder="Ex: 8"
                  />
                  {fieldState.error && (
                    <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            <Controller
              name="gardenAreaSqm"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <InputFieldOutlined
                    label="Surface jardin (m²)"
                    type="number"
                    value={field.value != null ? String(field.value) : ''}
                    onChange={(v) => field.onChange(v === '' ? undefined : v)}
                    onBlur={field.onBlur}
                    error={!!fieldState.error}
                    placeholder="Ex: 200"
                  />
                  {fieldState.error && (
                    <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </FormSection>

        {/* ── Section 4 — Pièces ── */}
        <FormSection title="Pièces" completion={sectionCompletions[3]}>
          <div className="space-y-4">
            {rooms.map((room, index) => (
              <div
                key={`${room.roomType}-${index}`}
                className="border border-edge-default rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-content-headings">
                    {ROOM_TYPE_LABELS[room.roomType]}
                    {rooms.filter((r, i) => r.roomType === room.roomType && i <= index).length > 1 &&
                      ` ${rooms.filter((r, i) => r.roomType === room.roomType && i <= index).length}`}
                  </span>
                  {/* Only allow removal for dynamically added rooms (not default SEJOUR/CUISINE at index 0/1) */}
                  {index >= 2 && (
                    <IconButton variant="ghost" type="button" onClick={() => removeRoom(index)}>
                      <Trash2 size={16} />
                    </IconButton>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Area */}
                  <InputFieldOutlined
                    label="Surface (m²)"
                    type="number"
                    value={room.areaSqm != null ? String(room.areaSqm) : ''}
                    onChange={(v) => updateRoom(index, { areaSqm: v === '' ? null : Number(v) })}
                    placeholder="Ex: 20"
                  />

                  {/* Kitchen type (CUISINE only) */}
                  {room.roomType === 'CUISINE' && (
                    <SelectField
                      label="Type de cuisine"
                      value={room.kitchenType ?? ''}
                      onChange={(val) => updateRoom(index, { kitchenType: val as any })}
                      options={Object.entries(KITCHEN_TYPE_LABELS).map(([value, label]) => ({
                        value,
                        label,
                      }))}
                    />
                  )}

                  {/* Bathroom options (SALLE_DE_BAIN or DOUCHE) */}
                  {(room.roomType === 'SALLE_DE_BAIN' || room.roomType === 'DOUCHE') && (
                    <div className="flex items-center gap-6 md:col-span-2">
                      <Checkbox
                        label="Baignoire"
                        checked={room.hasBathtub ?? false}
                        onChange={(checked) => updateRoom(index, { hasBathtub: checked })}
                      />
                      <Checkbox
                        label="Douche"
                        checked={room.hasShower ?? false}
                        onChange={(checked) => updateRoom(index, { hasShower: checked })}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Add room buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                type="button"
                onClick={() => addRoom('CHAMBRE')}
              >
                <Plus size={16} className="mr-1" />
                Chambre
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => addRoom('SALLE_DE_BAIN')}
              >
                <Plus size={16} className="mr-1" />
                Salle de bain
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => addRoom('WC')}
              >
                <Plus size={16} className="mr-1" />
                WC
              </Button>
              <Button
                variant="outline"
                type="button"
                onClick={() => addRoom('BUREAU')}
              >
                <Plus size={16} className="mr-1" />
                Bureau
              </Button>
            </div>
          </div>
        </FormSection>

        {/* ── Section 5 — Caractéristiques techniques ── */}
        <FormSection title="Caractéristiques techniques" completion={sectionCompletions[4]}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Condition */}
              <SelectField
                label="État général"
                value={formValues.condition ?? ''}
                onChange={(val) => setValue('condition', val as any, { shouldValidate: true })}
                options={Object.entries(PROPERTY_CONDITION_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />

              {/* Construction year */}
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
                      <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                    )}
                  </div>
                )}
              />

              {/* Heating type */}
              <SelectField
                label="Type de chauffage"
                value={formValues.heatingType ?? ''}
                onChange={(val) => setValue('heatingType', val as any, { shouldValidate: true })}
                options={Object.entries(HEATING_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />

              {/* Hot water system */}
              <SelectField
                label="Eau chaude"
                value={formValues.hotWaterSystem ?? ''}
                onChange={(val) => setValue('hotWaterSystem', val as any, { shouldValidate: true })}
                options={Object.entries(HOT_WATER_SYSTEM_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />

              {/* View type */}
              <SelectField
                label="Vue principale"
                value={formValues.mainViewType ?? ''}
                onChange={(val) => setValue('mainViewType', val as any, { shouldValidate: true })}
                options={Object.entries(VIEW_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />

              {/* Parking type */}
              <SelectField
                label="Stationnement"
                value={formValues.parkingType ?? ''}
                onChange={(val) => setValue('parkingType', val as any, { shouldValidate: true })}
                options={Object.entries(PARKING_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />

              {/* Parking spot count (only if parking is not AUCUN) */}
              {formValues.parkingType && formValues.parkingType !== 'AUCUN' && (
                <Controller
                  name="parkingSpotCount"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div>
                      <InputFieldOutlined
                        label="Nombre de places"
                        type="number"
                        value={field.value != null ? String(field.value) : ''}
                        onChange={(v) => field.onChange(v === '' ? undefined : v)}
                        onBlur={field.onBlur}
                        error={!!fieldState.error}
                        placeholder="Ex: 1"
                      />
                      {fieldState.error && (
                        <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                      )}
                    </div>
                  )}
                />
              )}
            </div>

            {/* Exposures — multi-select Chips */}
            <div>
              <Label label="Expositions" className="mb-2" />
              <div className="flex flex-wrap gap-2">
                {(Object.entries(EXPOSURE_LABELS) as [Exposure, string][]).map(
                  ([exp, label]) => (
                    <Chip
                      key={exp}
                      label={label}
                      selected={formValues.exposures?.includes(exp) ?? false}
                      variant="filled"
                      onClick={() => toggleExposure(exp)}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </FormSection>

        {/* ── Section 6 — Équipements ── */}
        <FormSection title="Équipements" completion={sectionCompletions[5]}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {FEATURE_KEYS.map(({ key, label }) => (
              <Checkbox
                key={key}
                label={label}
                checked={formValues.featureKeys?.includes(key) ?? false}
                onChange={(checked) => {
                  const current = formValues.featureKeys ?? [];
                  const next = checked
                    ? [...current, key]
                    : current.filter((k) => k !== key);
                  setValue('featureKeys', next, { shouldValidate: true });
                }}
              />
            ))}
          </div>
        </FormSection>

        {/* ── Section 7 — Diagnostics ── */}
        <FormSection title="Diagnostics" completion={sectionCompletions[6]}>
          <div className="space-y-6">
            {/* DPE */}
            <div>
              <Label label="DPE — Énergie" className="mb-2" />
              <div className="flex flex-wrap gap-2 mb-3">
                {(['A', 'B', 'C', 'D', 'E', 'F', 'G'] as DpeClass[]).map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    className={`w-10 h-10 rounded-lg font-bold text-white transition-all ${
                      getDiagnostic('DPE')?.class === cls
                        ? 'ring-2 ring-offset-2 ring-content-strong scale-110'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: DPE_COLORS[cls] }}
                    onClick={() => setDiagnostic('DPE', { class: cls })}
                  >
                    {cls}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputFieldOutlined
                  label="Consommation (kWh/m²/an)"
                  type="number"
                  value={getDiagnostic('DPE')?.value != null ? String(getDiagnostic('DPE')!.value) : ''}
                  onChange={(v) => setDiagnostic('DPE', { value: v === '' ? null : Number(v) })}
                />
                <div>
                  <Label label="Date de validité DPE" className="mb-3" />
                  <DatePicker
                    variant="docked"
                    selectedDate={getDiagnostic('DPE')?.validityDate ? new Date(getDiagnostic('DPE')!.validityDate!) : undefined}
                    dateFormat="DD/MM/YYYY"
                    placeholder="Sélectionner une date"
                    onDateSelect={(date) => setDiagnostic('DPE', { validityDate: date ? date.toISOString().split('T')[0] : null })}
                  />
                </div>
              </div>
            </div>

            {/* GES */}
            <div>
              <Label label="GES — Gaz à effet de serre" className="mb-2" />
              <div className="flex flex-wrap gap-2 mb-3">
                {(['A', 'B', 'C', 'D', 'E', 'F', 'G'] as DpeClass[]).map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    className={`w-10 h-10 rounded-lg font-bold text-white transition-all ${
                      getDiagnostic('GES')?.class === cls
                        ? 'ring-2 ring-offset-2 ring-content-strong scale-110'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: DPE_COLORS[cls] }}
                    onClick={() => setDiagnostic('GES', { class: cls })}
                  >
                    {cls}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputFieldOutlined
                  label="Émissions (gCO₂/m²/an)"
                  type="number"
                  value={getDiagnostic('GES')?.value != null ? String(getDiagnostic('GES')!.value) : ''}
                  onChange={(v) => setDiagnostic('GES', { value: v === '' ? null : Number(v) })}
                />
              </div>
            </div>

            {/* Diagnostiqueur */}
            <InputFieldOutlined
              label="Nom du diagnostiqueur"
              value={getDiagnostic('DPE')?.companyName ?? ''}
              onChange={(v) => {
                setDiagnostic('DPE', { companyName: v || null });
                setDiagnostic('GES', { companyName: v || null });
              }}
              placeholder="Ex: Diagamter, Arliane..."
            />
          </div>
        </FormSection>

        {/* ── Section 8 — Prix ── */}
        <FormSection title="Prix" completion={sectionCompletions[7]}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="desiredSellingPrice"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <InputFieldOutlined
                    label="Prix de vente souhaité (€) *"
                    type="number"
                    value={field.value != null ? String(field.value) : ''}
                    onChange={(v) => field.onChange(v === '' ? undefined : v)}
                    onBlur={field.onBlur}
                    error={!!fieldState.error}
                    placeholder="Ex: 350000"
                  />
                  {fieldState.error && (
                    <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            <Controller
              name="estimatedMarketValue"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <InputFieldOutlined
                    label="Estimation valeur marché (€)"
                    type="number"
                    value={field.value != null ? String(field.value) : ''}
                    onChange={(v) => field.onChange(v === '' ? undefined : v)}
                    onBlur={field.onBlur}
                    error={!!fieldState.error}
                    placeholder="Ex: 340000"
                  />
                  {fieldState.error && (
                    <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
            {/* Computed price per sqm — read only */}
            {formValues.estimatedMarketValue && formValues.livingAreaSqm ? (
              <div className="md:col-span-2">
                <p className="text-sm text-content-subtle">
                  Prix estimé au m² :{' '}
                  <span className="font-semibold text-content-strong">
                    {Math.round(formValues.estimatedMarketValue / formValues.livingAreaSqm).toLocaleString('fr-FR')} €/m²
                  </span>
                </p>
              </div>
            ) : null}
          </div>
        </FormSection>

        {/* ── Section 9 — Informations complémentaires ── */}
        <FormSection title="Informations complémentaires" completion={sectionCompletions[8]}>
          <div className="space-y-4">
            {/* Client / owner search */}
            <div>
              <Label label="Propriétaire *" className="mb-2" />
              {selectedClient ? (
                <div className="flex items-center gap-2 p-3 border border-edge-default rounded-lg bg-surface-neutral-action">
                  <span className="text-sm font-medium text-content-strong flex-1">
                    {selectedClient.name}
                  </span>
                  <IconButton
                    variant="ghost"
                    onClick={() => {
                      setSelectedClient(null);
                      setValue('clientId', '', { shouldValidate: true });
                    }}
                  >
                    <X size={16} />
                  </IconButton>
                </div>
              ) : (
                <div className="relative">
                  <InputFieldOutlined
                    label=""
                    value={clientSearch}
                    onChange={handleClientSearch}
                    placeholder="Rechercher un client par nom ou email..."
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
                  {errors.clientId && (
                    <p className="text-sm text-content-danger mt-1">{errors.clientId.message}</p>
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Status */}
              <SelectField
                label="Statut du bien"
                value={formValues.status ?? 'OFF_MARKET'}
                onChange={(val) => setValue('status', val as any, { shouldValidate: true })}
                options={Object.entries(PROPERTY_STATUS_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />

              {/* Internal ref */}
              <Controller
                name="internalRef"
                control={control}
                render={({ field }) => (
                  <InputFieldOutlined
                    label="Référence interne"
                    value={field.value ?? ''}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    placeholder="Auto-généré si vide"
                  />
                )}
              />
            </div>

            {/* Notes */}
            <Controller
              name="notes"
              control={control}
              render={({ field, fieldState }) => (
                <div>
                  <TextArea
                    label="Notes internes"
                    value={field.value ?? ''}
                    onChange={field.onChange}
                    maxLength={2000}
                    error={!!fieldState.error}
                    placeholder="Notes privées sur ce bien..."
                  />
                  {fieldState.error && (
                    <p className="text-sm text-content-danger mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />

            {/* Tags */}
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <InputFieldOutlined
                  label="Tags"
                  value={field.value?.join(', ') ?? ''}
                  onChange={(v) => {
                    const tags = v
                      .split(',')
                      .map((t) => t.trim())
                      .filter(Boolean);
                    field.onChange(tags);
                  }}
                  placeholder="Séparés par des virgules (ex: vue mer, calme, lumineux)"
                />
              )}
            />
          </div>
        </FormSection>
      </div>

      {/* Submit footer */}
      <div className="flex justify-end gap-3 pt-6">
        <Button variant="outline" type="button" onClick={() => router.back()}>
          Annuler
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={!isThresholdMet || isSubmitting}
        >
          {isSubmitting ? 'Création...' : 'Créer le bien'}
        </Button>
      </div>
    </form>
  );
}
