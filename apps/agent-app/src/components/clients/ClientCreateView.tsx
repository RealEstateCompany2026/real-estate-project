'use client';

import { useState, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Plus } from 'lucide-react';

// DS imports
import { Button, IconButton } from '@real-estate/ui/button';
import { ProgressBar } from '@real-estate/ui/progress-bar';
import { Badge } from '@real-estate/ui/badge';
import { Checkbox } from '@real-estate/ui/checkbox';
import { InputFieldOutlined } from '@real-estate/ui/input-field-outlined';
import { SelectField } from '@real-estate/ui/select-field';
import { TextArea } from '@real-estate/ui/text-area';
import { AddressField } from '@real-estate/ui/address-field';
import type { AddressSuggestion } from '@real-estate/ui/address-field';
import { DatePicker } from '@real-estate/ui/date-picker';
import { Label } from '@real-estate/ui/label';

// App imports
import { useToast } from '@/components/ui/Toast';
import { createClient } from '@/lib/supabase/client';
import { clientCreateSchema, type ClientCreateData, normalizePhoneE164 } from '@/lib/validations/client';
import {
  CLIENT_STATUS_LABELS,
  MARITAL_STATUS_LABELS,
  INCOME_BRACKET_OPTIONS,
  type ClientStatus,
  type MaritalStatus,
} from '@/types/client';
import { searchAddress } from '@/lib/utils/address';
import { useDuplicateCheck } from '@/hooks/useDuplicateCheck';
import { DuplicateAlert } from '@/components/ui/DuplicateAlert';

// ---------------------------------------------------------------------------
// FormSection — internal sub-component
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
// ClientCreateView — main component
// ---------------------------------------------------------------------------

export function ClientCreateView() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Address autocomplete state
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [addressLoading, setAddressLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Duplicate check
  const { matches, checkDuplicates, dismiss } = useDuplicateCheck();

  // Linked properties & deals state
  const [linkedProperties, setLinkedProperties] = useState<{ id: string; label: string }[]>([]);
  const [linkedDeals, setLinkedDeals] = useState<{ id: string; label: string }[]>([]);
  const [showPropertySearch, setShowPropertySearch] = useState(false);
  const [showDealSearch, setShowDealSearch] = useState(false);
  const [propertySearchQuery, setPropertySearchQuery] = useState('');
  const [dealSearchQuery, setDealSearchQuery] = useState('');
  const [propertyResults, setPropertyResults] = useState<{ id: string; label: string }[]>([]);
  const [dealResults, setDealResults] = useState<{ id: string; label: string }[]>([]);

  const methods = useForm<ClientCreateData>({
    resolver: zodResolver(clientCreateSchema) as any,
    defaultValues: {
      status: [],
      gender: undefined,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      placeOfBirth: '',
      nationality: '',
      maritalStatus: undefined,
      primaryEmail: '',
      secondaryEmail: '',
      mobilePhone: '',
      address: '',
      emailConsent: false,
      smsConsent: false,
      whatsappConsent: false,
      jobTitle: '',
      employer: '',
      incomeBracket: '',
      notes: '',
      source: 'MANUEL',
      language: 'fr',
    },
    mode: 'onTouched',
  });

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = methods;

  const formValues = watch();

  // ---------- Completion logic ----------

  const { sectionCompletions, globalCompletion, isThresholdMet } = useMemo(() => {
    const isFilled = (v: unknown) => typeof v === 'string' ? v.length > 0 : v != null;

    // Section 1: status
    const s1 = (formValues.status?.length ?? 0) > 0 ? 100 : 0;

    // Section 2: profile (7 fields)
    const profileFields = [
      formValues.gender,
      formValues.lastName,
      formValues.firstName,
      formValues.dateOfBirth,
      formValues.placeOfBirth,
      formValues.nationality,
      formValues.maritalStatus,
    ];
    const s2 = (profileFields.filter(isFilled).length / 7) * 100;

    // Section 3: contact (4 fields)
    const contactFields = [
      formValues.primaryEmail,
      formValues.secondaryEmail,
      formValues.mobilePhone,
      formValues.address,
    ];
    const s3 = (contactFields.filter(isFilled).length / 4) * 100;

    // Section 4: marketing (3 booleans)
    const consents = [formValues.emailConsent, formValues.smsConsent, formValues.whatsappConsent];
    const s4 = (consents.filter(Boolean).length / 3) * 100;

    // Section 5: professional (3 fields)
    const proFields = [formValues.jobTitle, formValues.employer, formValues.incomeBracket];
    const s5 = (proFields.filter(isFilled).length / 3) * 100;

    // Section 6: notes
    const s6 = (formValues.notes?.length ?? 0) > 0 ? 100 : 0;

    const sections = [s1, s2, s3, s4, s5, s6];
    const global = Math.round(sections.reduce((a, b) => a + b, 0) / 6);

    // Threshold: all 8 mandatory fields filled
    const met =
      (formValues.status?.length ?? 0) > 0 &&
      !!formValues.gender &&
      !!formValues.firstName &&
      !!formValues.lastName &&
      !!formValues.dateOfBirth &&
      !!formValues.primaryEmail &&
      !!formValues.mobilePhone &&
      !!formValues.address;

    return { sectionCompletions: sections, globalCompletion: global, isThresholdMet: met };
  }, [formValues]);

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
      setAddressSuggestions([]);
    },
    [setValue],
  );

  const handleAddressClear = useCallback(() => {
    setValue('address', '', { shouldValidate: true });
    setAddressSuggestions([]);
  }, [setValue]);

  // ---------- Property & Deal search ----------

  const searchProperties = useCallback(async (query: string) => {
    if (query.length < 2) {
      setPropertyResults([]);
      return;
    }
    const supabase = createClient();
    const { data } = await supabase
      .from('Property')
      .select('id, type, livingAreaSqm, addressCity')
      .ilike('addressCity', `%${query}%`)
      .limit(5);
    if (data) {
      setPropertyResults(
        data.map((p) => ({
          id: p.id,
          label: `${p.type ?? ''} . ${p.livingAreaSqm ?? '?'} m² . ${p.addressCity ?? ''}`.trim(),
        })),
      );
    }
  }, []);

  const searchDeals = useCallback(async (query: string) => {
    if (query.length < 2) {
      setDealResults([]);
      return;
    }
    const supabase = createClient();
    const { data } = await supabase
      .from('Deal')
      .select('id, reference')
      .ilike('reference', `%${query}%`)
      .limit(5);
    if (data) {
      setDealResults(
        data.map((d) => ({
          id: d.id,
          label: d.reference ?? d.id,
        })),
      );
    }
  }, []);

  const removeLinkedProperty = useCallback((id: string) => {
    setLinkedProperties((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const removeLinkedDeal = useCallback((id: string) => {
    setLinkedDeals((prev) => prev.filter((d) => d.id !== id));
  }, []);

  // ---------- Duplicate check ----------

  const handleEmailBlur = () => {
    const email = watch('primaryEmail');
    if (email) checkDuplicates({ email, firstName: watch('firstName'), lastName: watch('lastName') });
  };

  const handlePhoneBlur = () => {
    const phone = watch('mobilePhone');
    if (phone) checkDuplicates({ phone, firstName: watch('firstName'), lastName: watch('lastName') });
  };

  // ---------- Status toggle ----------

  const toggleStatus = (status: ClientStatus) => {
    const current = watch('status') ?? [];
    if (current.includes(status)) {
      setValue(
        'status',
        current.filter((s) => s !== status),
        { shouldValidate: true },
      );
    } else {
      setValue('status', [...current, status], { shouldValidate: true });
    }
  };

  // ---------- Submit ----------

  const onSubmit = useCallback(
    async (data: ClientCreateData) => {
      setIsSubmitting(true);
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const orgId = user?.user_metadata?.organizationId ?? null;

        const { data: client, error } = await supabase
          .from('Client')
          .insert({
            ...data,
            mobilePhone: normalizePhoneE164(data.mobilePhone),
            dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString() : null,
            agentId: user?.id ?? null,
            organizationId: orgId,
            isActive: true,
            completionScore: 0,
            isPotentialDuplicate: false,
            emailConsentSource: data.emailConsent ? 'formulaire' : null,
            emailConsentDate: data.emailConsent ? new Date().toISOString() : null,
            smsConsentSource: data.smsConsent ? 'formulaire' : null,
            smsConsentDate: data.smsConsent ? new Date().toISOString() : null,
            whatsappConsentSource: data.whatsappConsent ? 'formulaire' : null,
            whatsappConsentDate: data.whatsappConsent ? new Date().toISOString() : null,
          })
          .select('id')
          .single();

        if (error) throw error;

        // Link properties & deals to the new client
        const linkedPropertyIds = linkedProperties.map((p) => p.id);
        const linkedDealIds = linkedDeals.map((d) => d.id);

        if (linkedPropertyIds.length > 0) {
          await supabase.from('Property').update({ clientId: client.id }).in('id', linkedPropertyIds);
        }
        if (linkedDealIds.length > 0) {
          await supabase.from('Deal').update({ clientId: client.id }).in('id', linkedDealIds);
        }

        toast('Client créé avec succès', 'success');
        router.push(`/clients/${client.id}`);
      } catch (err) {
        console.error('Error creating client:', err);
        toast('Erreur lors de la création du client', 'error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [router, toast, linkedProperties, linkedDeals],
  );

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
      <div className="sticky top-0 z-10 bg-surface-page pb-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-h6 text-content-headings">
            Ajouter un client
          </h1>
          <div className="flex items-center gap-3">
            <Button variant="primary" type="submit" disabled={!isThresholdMet || isSubmitting}>
              {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
            </Button>
            <IconButton variant="ghost" type="button" onClick={handleClose}>
              <X size={20} />
            </IconButton>
          </div>
        </div>

        {/* Progress bar */}
        <ProgressBar
          progress={globalCompletion}
          showPercentage
          threshold={isThresholdMet ? 1 : 101}
        />
      </div>

      {/* Duplicate alert */}
      <DuplicateAlert matches={matches} onDismiss={dismiss} />

      {/* 6 sections */}
      <div className="space-y-6">
        {/* Section 1 — Type de client */}
        <FormSection title="Type de client" completion={sectionCompletions[0]} className="bg-surface-neutral-action">
          <p className="text-xs text-content-caption mb-3">
            Un client peut avoir plusieurs rôles (ex : propriétaire et acquéreur).
          </p>
          <div className="flex flex-wrap gap-4">
            {(Object.entries(CLIENT_STATUS_LABELS) as [ClientStatus, string][]).map(
              ([value, label]) => (
                <Checkbox
                  key={value}
                  label={label}
                  checked={formValues.status?.includes(value) ?? false}
                  onChange={() => toggleStatus(value)}
                />
              ),
            )}
          </div>
          {errors.status && (
            <p className="text-xs text-content-error mt-2">{errors.status.message}</p>
          )}

          {/* Biens associés */}
          <div className="mt-4">
            <Label label="Biens associés" className="mb-2" />
            <div className="flex items-center gap-2 flex-wrap">
              {linkedProperties.map((p) => (
                <div key={p.id} className="flex items-center gap-1">
                  <Button variant="outline" type="button" onClick={() => router.push(`/biens/${p.id}`)}>
                    {p.label}
                  </Button>
                  <IconButton variant="ghost" type="button" onClick={() => removeLinkedProperty(p.id)}>
                    <X size={14} />
                  </IconButton>
                </div>
              ))}
              <IconButton variant="outline" type="button" onClick={() => setShowPropertySearch(true)}>
                <Plus size={20} />
              </IconButton>
            </div>
            {showPropertySearch && (
              <div className="mt-2 p-3 border border-edge-default rounded-lg bg-surface-neutral-default">
                <InputFieldOutlined
                  label="Rechercher un bien"
                  id="propertySearch"
                  type="text"
                  value={propertySearchQuery}
                  onChange={(value) => {
                    setPropertySearchQuery(value);
                    searchProperties(value);
                  }}
                  placeholder="Rechercher par ville..."
                />
                {propertyResults.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {propertyResults.map((p) => (
                      <li key={p.id}>
                        <button
                          type="button"
                          className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-surface-neutral-action transition-colors cursor-pointer"
                          onClick={() => {
                            if (!linkedProperties.some((lp) => lp.id === p.id)) {
                              setLinkedProperties((prev) => [...prev, p]);
                            }
                            setShowPropertySearch(false);
                            setPropertySearchQuery('');
                            setPropertyResults([]);
                          }}
                        >
                          {p.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <Button variant="ghost" size="sm" type="button" onClick={() => { setShowPropertySearch(false); setPropertySearchQuery(''); setPropertyResults([]); }}>
                  Fermer
                </Button>
              </div>
            )}
          </div>

          {/* Affaires associées */}
          <div className="mt-4">
            <Label label="Affaires associées" className="mb-2" />
            <div className="flex items-center gap-2 flex-wrap">
              {linkedDeals.map((d) => (
                <div key={d.id} className="flex items-center gap-1">
                  <Button variant="outline" type="button" onClick={() => router.push(`/affaires/${d.id}`)}>
                    {d.label}
                  </Button>
                  <IconButton variant="ghost" type="button" onClick={() => removeLinkedDeal(d.id)}>
                    <X size={14} />
                  </IconButton>
                </div>
              ))}
              <IconButton variant="outline" type="button" onClick={() => setShowDealSearch(true)}>
                <Plus size={20} />
              </IconButton>
            </div>
            {showDealSearch && (
              <div className="mt-2 p-3 border border-edge-default rounded-lg bg-surface-neutral-default">
                <InputFieldOutlined
                  label="Rechercher une affaire"
                  id="dealSearch"
                  type="text"
                  value={dealSearchQuery}
                  onChange={(value) => {
                    setDealSearchQuery(value);
                    searchDeals(value);
                  }}
                  placeholder="Rechercher par référence..."
                />
                {dealResults.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {dealResults.map((d) => (
                      <li key={d.id}>
                        <button
                          type="button"
                          className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-surface-neutral-action transition-colors cursor-pointer"
                          onClick={() => {
                            if (!linkedDeals.some((ld) => ld.id === d.id)) {
                              setLinkedDeals((prev) => [...prev, d]);
                            }
                            setShowDealSearch(false);
                            setDealSearchQuery('');
                            setDealResults([]);
                          }}
                        >
                          {d.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <Button variant="ghost" size="sm" type="button" onClick={() => { setShowDealSearch(false); setDealSearchQuery(''); setDealResults([]); }}>
                  Fermer
                </Button>
              </div>
            )}
          </div>
        </FormSection>

        {/* Section 2 — Informations de profil */}
        <FormSection title="Informations de profil" completion={sectionCompletions[1]}>
          <div className="space-y-4">
            {/* Ligne 1 : Civilité + Nom + Prénom */}
            <div className="flex gap-4">
              <div className="w-[100px]">
                <SelectField
                  label="Civilité"
                  value={formValues.gender ?? ''}
                  onChange={(val) => setValue('gender', val as 'HOMME' | 'FEMME', { shouldValidate: true })}
                  options={[
                    { value: 'HOMME', label: 'Mr' },
                    { value: 'FEMME', label: 'Mme' },
                  ]}
                  error={errors.gender ? 'Civilité requise' : undefined}
                  required
                />
              </div>
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Nom"
                  id="lastName"
                  type="text"
                  value={formValues.lastName}
                  onChange={(value) => setValue('lastName', value, { shouldValidate: true })}
                  placeholder="Nom du client"
                  error={!!errors.lastName}
                  required
                />
                {errors.lastName && (
                  <p className="text-xs text-content-error mt-1">{errors.lastName.message}</p>
                )}
              </div>
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Prénom"
                  id="firstName"
                  type="text"
                  value={formValues.firstName}
                  onChange={(value) => setValue('firstName', value, { shouldValidate: true })}
                  placeholder="Prénom du client"
                  error={!!errors.firstName}
                  required
                />
                {errors.firstName && (
                  <p className="text-xs text-content-error mt-1">{errors.firstName.message}</p>
                )}
              </div>
            </div>

            {/* Ligne 2 : Date naissance + Ville + Nationalité */}
            <div className="flex gap-4">
              <div className="w-[330px]">
                <div className="flex flex-col gap-[12px]">
                  <Label label="Date de naissance" required />
                  <DatePicker
                    variant="docked"
                    selectedDate={formValues.dateOfBirth ? new Date(formValues.dateOfBirth) : undefined}
                    dateFormat="DD/MM/YYYY"
                    maxDate={new Date()}
                    onDateSelect={(date) => {
                      setValue('dateOfBirth', date ? date.toISOString() : '', { shouldValidate: true });
                    }}
                    placeholder="Sélectionner la date"
                    error={!!errors.dateOfBirth}
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="text-xs text-content-error mt-1">{errors.dateOfBirth.message}</p>
                )}
              </div>
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Ville de naissance"
                  id="placeOfBirth"
                  type="text"
                  value={formValues.placeOfBirth ?? ''}
                  onChange={(value) => setValue('placeOfBirth', value)}
                  placeholder="Ville de naissance"
                />
              </div>
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Nationalité"
                  id="nationality"
                  type="text"
                  value={formValues.nationality ?? ''}
                  onChange={(value) => setValue('nationality', value)}
                  placeholder="Nationalité"
                />
              </div>
            </div>

            {/* Ligne 3 : Statut marital */}
            <div className="w-[330px]">
              <SelectField
                label="Statut marital"
                value={formValues.maritalStatus ?? ''}
                onChange={(val) =>
                  setValue('maritalStatus', val as MaritalStatus, { shouldValidate: true })
                }
                options={Object.entries(MARITAL_STATUS_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
            </div>
          </div>
        </FormSection>

        {/* Section 3 — Informations de contact */}
        <FormSection title="Informations de contact" completion={sectionCompletions[2]}>
          <div className="space-y-4">
            {/* Ligne 1 : Email + Email secondaire + Téléphone */}
            <div className="flex gap-4">
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Email"
                  id="primaryEmail"
                  type="email"
                  value={formValues.primaryEmail}
                  onChange={(value) => setValue('primaryEmail', value, { shouldValidate: true })}
                  onBlur={handleEmailBlur}
                  placeholder="email@exemple.com"
                  error={!!errors.primaryEmail}
                  required
                />
                {errors.primaryEmail && (
                  <p className="text-xs text-content-error mt-1">{errors.primaryEmail.message}</p>
                )}
              </div>
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Email secondaire"
                  id="secondaryEmail"
                  type="email"
                  value={formValues.secondaryEmail ?? ''}
                  onChange={(value) => setValue('secondaryEmail', value)}
                  placeholder="email-secondaire@exemple.com"
                />
              </div>
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Téléphone"
                  id="mobilePhone"
                  type="tel"
                  value={formValues.mobilePhone}
                  onChange={(value) => setValue('mobilePhone', value, { shouldValidate: true })}
                  onBlur={handlePhoneBlur}
                  placeholder="06 12 34 56 78"
                  error={!!errors.mobilePhone}
                  required
                />
                {errors.mobilePhone && (
                  <p className="text-xs text-content-error mt-1">{errors.mobilePhone.message}</p>
                )}
              </div>
            </div>

            {/* Ligne 2 : Adresse pleine largeur */}
            <div className="w-full">
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
          </div>
        </FormSection>

        {/* Section 4 — Informations marketing */}
        <FormSection title="Informations marketing" completion={sectionCompletions[3]}>
          <Label label="Opt-in" className="mb-2" />
          <div className="flex items-center gap-6">
            <Checkbox
              label="Email"
              checked={formValues.emailConsent}
              onChange={(checked) => setValue('emailConsent', checked)}
            />
            <Checkbox
              label="SMS"
              checked={formValues.smsConsent}
              onChange={(checked) => setValue('smsConsent', checked)}
            />
            <Checkbox
              label="WhatsApp"
              checked={formValues.whatsappConsent}
              onChange={(checked) => setValue('whatsappConsent', checked)}
            />
          </div>
        </FormSection>

        {/* Section 5 — Informations professionnelles */}
        <FormSection title="Informations professionnelles" completion={sectionCompletions[4]}>
          <div className="space-y-4">
            {/* Ligne 1 : Profession + Employeur */}
            <div className="flex gap-4">
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Profession"
                  id="jobTitle"
                  type="text"
                  value={formValues.jobTitle ?? ''}
                  onChange={(value) => setValue('jobTitle', value)}
                  placeholder="Profession du client"
                />
              </div>
              <div className="w-[330px]">
                <InputFieldOutlined
                  label="Employeur"
                  id="employer"
                  type="text"
                  value={formValues.employer ?? ''}
                  onChange={(value) => setValue('employer', value)}
                  placeholder="Nom de l'employeur"
                />
              </div>
            </div>

            {/* Ligne 2 : Revenus */}
            <div className="w-[680px]">
              <SelectField
                label="Revenus"
                value={formValues.incomeBracket ?? ''}
                onChange={(val) => setValue('incomeBracket', val)}
                options={INCOME_BRACKET_OPTIONS.map((opt) => ({ value: opt, label: opt }))}
              />
            </div>
          </div>
        </FormSection>

        {/* Section 6 — Informations complémentaires */}
        <FormSection title="Informations complémentaires" completion={sectionCompletions[5]}>
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
