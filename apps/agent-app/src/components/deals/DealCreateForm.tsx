'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

// -- DS Components (from packages/ui — verified in package.json exports) --
import { AppBarFicheAffaireAjout } from '@real-estate/ui/app-bar-fiche-affaire-ajout';
import { CollapsibleSection } from '@real-estate/ui/collapsible-section';
import { InputFieldOutlined } from '@real-estate/ui/input-field-outlined';
import { SelectField } from '@real-estate/ui/select-field';
import { Checkbox } from '@real-estate/ui/checkbox';
import { Button } from '@real-estate/ui/button';
import { SearchBar } from '@real-estate/ui/search-bar';
import { Chip } from '@real-estate/ui/chip';
import { Spinner } from '@real-estate/ui/spinner';
import type { DealType } from '@real-estate/ui/deal-types';

// -- App-level --
import { createClient } from '@/lib/supabase/client';

// ---------------------------------------------------------------------------
// Types locaux
// ---------------------------------------------------------------------------

interface ClientOption {
  id: string;
  firstName: string;
  lastName: string;
}

interface PropertyOption {
  id: string;
  type: string;
  livingAreaSqm: number | null;
  addressCity: string | null;
  desiredSellingPrice: number | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Badge % completion — meme pattern que ClientDetailView (lignes 1120-1125) */
function completionBadge(fields: unknown[]): React.ReactNode {
  const filled = fields.filter(f => f != null && f !== '').length;
  const pct = Math.round((filled / fields.length) * 100);
  const color =
    pct >= 80
      ? 'bg-surface-success-subtle text-content-success'
      : pct >= 50
        ? 'bg-surface-warning-subtle text-content-warning'
        : 'bg-surface-error-subtle text-content-error';
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>
      {pct}%
    </span>
  );
}

/** Label client adapte au type */
function clientLabel(dealType: DealType | ''): string {
  switch (dealType) {
    case 'VENTE':
    case 'GESTION':
      return 'Proprietaire';
    case 'ACQUISITION':
      return 'Acquereur';
    case 'LOCATION':
      return 'Candidat locataire';
    default:
      return 'Client';
  }
}

/** Label budget adapte au type */
function budgetLabel(dealType: DealType | '', suffix: 'min' | 'max'): string {
  const base = dealType === 'LOCATION' ? 'Loyer mensuel' : "Budget d'achat";
  const unit = dealType === 'LOCATION' ? '/mois' : '';
  return `${base} ${suffix} (${'\u20AC'}${unit})`;
}

// ---------------------------------------------------------------------------
// Composant principal
// ---------------------------------------------------------------------------

export function DealCreateForm() {
  const router = useRouter();

  // -- Etat du formulaire --

  // Type d'affaire
  const [dealType, setDealType] = useState<DealType | ''>('');

  // Client
  const [clientSearch, setClientSearch] = useState('');
  const [clients, setClients] = useState<ClientOption[]>([]);
  const [selectedClient, setSelectedClient] = useState<ClientOption | null>(null);
  const [clientLoading, setClientLoading] = useState(false);

  // Bien (VENTE / GESTION)
  const [properties, setProperties] = useState<PropertyOption[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<PropertyOption | null>(null);
  const [propertyLoading, setPropertyLoading] = useState(false);

  // Criteres recherche (ACQUISITION / LOCATION)
  const [searchPropertyType, setSearchPropertyType] = useState('');
  const [searchZone, setSearchZone] = useState('');
  const [budgetMin, setBudgetMin] = useState('');
  const [budgetMax, setBudgetMax] = useState('');

  // Details & Mandat
  const [forecastRevenue, setForecastRevenue] = useState('');
  const [mandateStatus, setMandateStatus] = useState('');
  const [mandateWaived, setMandateWaived] = useState(false);
  const [mandateStartDate, setMandateStartDate] = useState('');
  const [mandateEndDate, setMandateEndDate] = useState('');
  const [note, setNote] = useState('');

  // UI
  const [isSubmitting, setIsSubmitting] = useState(false);

  // -------------------------------------------------------------------------
  // Recherche clients (Supabase)
  // -------------------------------------------------------------------------

  const searchClients = useCallback(async (query: string) => {
    if (query.length < 2) {
      setClients([]);
      return;
    }
    setClientLoading(true);
    const supabase = createClient();
    const { data } = await supabase
      .from('Client')
      .select('id, firstName, lastName')
      .or(`firstName.ilike.%${query}%,lastName.ilike.%${query}%`)
      .limit(10);
    setClients(data ?? []);
    setClientLoading(false);
  }, []);

  // Debounce de la recherche client
  useEffect(() => {
    if (!clientSearch || clientSearch.length < 2) {
      setClients([]);
      return;
    }
    const timer = setTimeout(() => searchClients(clientSearch), 300);
    return () => clearTimeout(timer);
  }, [clientSearch, searchClients]);

  // -------------------------------------------------------------------------
  // Charger les biens du client selectionne (VENTE / GESTION)
  // -------------------------------------------------------------------------

  useEffect(() => {
    if (!selectedClient || (dealType !== 'VENTE' && dealType !== 'GESTION')) {
      setProperties([]);
      setSelectedProperty(null);
      return;
    }
    let cancelled = false;
    (async () => {
      setPropertyLoading(true);
      const supabase = createClient();
      const { data } = await supabase
        .from('Property')
        .select('id, type, livingAreaSqm, addressCity, desiredSellingPrice')
        .eq('clientId', selectedClient.id);
      if (!cancelled) {
        setProperties(data ?? []);
        setPropertyLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [selectedClient, dealType]);

  // -------------------------------------------------------------------------
  // Reset section 2 quand le type change
  // -------------------------------------------------------------------------

  const handleDealTypeChange = useCallback((v: string) => {
    setDealType(v as DealType);
    setSelectedProperty(null);
    setSearchPropertyType('');
    setSearchZone('');
    setBudgetMin('');
    setBudgetMax('');
  }, []);

  // -------------------------------------------------------------------------
  // Badges completion
  // -------------------------------------------------------------------------

  const section1Badge = useMemo(
    () => completionBadge([dealType, selectedClient?.id]),
    [dealType, selectedClient],
  );

  const section2Badge = useMemo(() => {
    if (!dealType) return completionBadge([]);
    if (dealType === 'VENTE' || dealType === 'GESTION') {
      return completionBadge([selectedProperty?.id]);
    }
    return completionBadge([searchPropertyType, searchZone, budgetMin, budgetMax]);
  }, [dealType, selectedProperty, searchPropertyType, searchZone, budgetMin, budgetMax]);

  const section3Badge = useMemo(() => {
    const fields: unknown[] = [forecastRevenue];
    if (!mandateWaived) fields.push(mandateStatus);
    fields.push(note || undefined); // note optionnelle mais comptee
    return completionBadge(fields);
  }, [forecastRevenue, mandateStatus, mandateWaived, note]);

  // -------------------------------------------------------------------------
  // Validation
  // -------------------------------------------------------------------------

  const isFormValid = useMemo(() => {
    // Tronc commun
    if (!dealType || !selectedClient) return false;
    if (!forecastRevenue) return false;
    if (!mandateWaived && !mandateStatus) return false;

    // Conditionnel selon le type
    if ((dealType === 'VENTE' || dealType === 'GESTION') && !selectedProperty) return false;
    if (dealType === 'ACQUISITION' || dealType === 'LOCATION') {
      if (!searchPropertyType || !searchZone || !budgetMin || !budgetMax) return false;
    }

    return true;
  }, [dealType, selectedClient, selectedProperty, forecastRevenue, mandateStatus, mandateWaived, searchPropertyType, searchZone, budgetMin, budgetMax]);

  // -------------------------------------------------------------------------
  // Soumission — INSERT Supabase
  // -------------------------------------------------------------------------

  async function handleCreate() {
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);

    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      // 1. Generer la reference (requete pour trouver le max existant)
      const prefix: Record<DealType, string> = { VENTE: 'MV', ACQUISITION: 'MRA', LOCATION: 'MRL', GESTION: 'MG' };
      const pfx = prefix[dealType as DealType];
      const { data: lastDeal } = await supabase
        .from('Deal')
        .select('reference')
        .ilike('reference', `${pfx}-%`)
        .order('reference', { ascending: false })
        .limit(1);

      const lastNum = lastDeal?.[0]?.reference
        ? parseInt(lastDeal[0].reference.split('-').pop() ?? '0', 10)
        : 0;
      const reference = `${pfx}-${String(lastNum + 1).padStart(4, '0')}`;

      // 2. Determiner le pipeline initial
      const pipelineStage = mandateWaived ? 'PROMOTION' : 'MANDAT';
      const winProbability = mandateWaived ? 40 : 15;

      // 3. INSERT Deal
      const dealPayload: Record<string, unknown> = {
        reference,
        type: dealType,
        clientId: selectedClient!.id,
        propertyId: (dealType === 'VENTE' || dealType === 'GESTION') ? selectedProperty!.id : null,
        pipelineStage,
        status: 'EN_COURS',
        trend: 'NEUTRE',
        forecastRevenue: parseFloat(forecastRevenue),
        winProbability,
        mandateWaived,
        lastActivityDate: new Date().toISOString(),
        agentId: user?.id ?? null,
        organizationId: user?.user_metadata?.organizationId ?? null,
      };

      // Statut mandat
      if (!mandateWaived) {
        if (dealType === 'GESTION') {
          dealPayload.mgmtMandateStatus = mandateStatus;
        } else {
          dealPayload.saleMandateStatus = mandateStatus;
        }
      }

      // Dates mandat
      if (mandateStartDate) dealPayload.saleMandateSignedDate = mandateStartDate;
      if (mandateEndDate) dealPayload.saleMandateEndDate = mandateEndDate;

      // Criteres recherche (Acquisition)
      if (dealType === 'ACQUISITION') {
        dealPayload.acquisitionMinBudget = parseFloat(budgetMin);
        dealPayload.acquisitionMaxBudget = parseFloat(budgetMax);
        dealPayload.acquisitionCriteriaSummary = `${searchPropertyType} à ${searchZone} — ${budgetMin}-${budgetMax}€`;
      }

      // Criteres recherche (Location)
      if (dealType === 'LOCATION') {
        dealPayload.locationMinBudget = parseFloat(budgetMin);
        dealPayload.locationCriteriaSummary = `${searchPropertyType} à ${searchZone} — ${budgetMin}-${budgetMax}€/mois`;
      }

      const { data: newDeal, error } = await supabase
        .from('Deal')
        .insert(dealPayload)
        .select('id')
        .single();

      if (error) throw error;

      // 4. INSERT Event (note optionnelle)
      if (note.trim()) {
        await supabase.from('Event').insert({
          type: 'NOTE',
          dealId: newDeal.id,
          clientId: selectedClient!.id,
          propertyId: selectedProperty?.id ?? null,
          title: 'Note de creation',
          description: note,
          eventDate: new Date().toISOString(),
          status: 'EFFECTUE',
        });
      }

      // 5. Redirection
      router.push(`/affaires/${newDeal.id}`);
    } catch (err) {
      console.error('Erreur creation affaire:', err);
      setIsSubmitting(false);
    }
  }

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  const showMandateDates = mandateStatus === 'EDITE' || mandateStatus === 'ENVOYE' || mandateStatus === 'SIGNE';

  return (
    <div className="flex flex-col min-h-screen bg-surface-page">
      {/* AppBar */}
      <AppBarFicheAffaireAjout
        title="Ajouter une affaire"
        saveLabel="Creer l'affaire"
        disabled={!isFormValid || isSubmitting}
        onSave={handleCreate}
        onClose={() => router.push('/affaires')}
      />

      {/* Contenu scrollable */}
      <div className="flex-1 overflow-y-auto px-[20px] py-[20px] flex flex-col gap-[16px] max-w-[800px] mx-auto w-full">

        {/* ═══════════════════════════════════════════════════════
            Section 1 — Type & Client
            ═══════════════════════════════════════════════════════ */}
        <CollapsibleSection
          title="Type & Client"
          defaultExpanded={true}
          badge={section1Badge}
        >
          <div className="flex flex-col gap-[16px]">
            {/* Type d'affaire */}
            <SelectField
              label="Type d'affaire"
              value={dealType}
              onChange={handleDealTypeChange}
              options={[
                { value: 'VENTE', label: 'Vente — Vendre un bien pour un proprietaire' },
                { value: 'ACQUISITION', label: 'Acquisition — Trouver un bien pour un acquereur' },
                { value: 'LOCATION', label: 'Location — Trouver un logement pour un locataire' },
                { value: 'GESTION', label: 'Gestion — Gerer un bien en mandat de gestion' },
              ]}
              required
            />

            {/* Recherche client */}
            <div className="flex flex-col gap-[8px]">
              <p className="text-sm font-medium text-content-body">{clientLabel(dealType)}</p>

              {selectedClient ? (
                <div className="flex items-center gap-[8px]">
                  <Chip
                    variant="filled"
                    label={`${selectedClient.firstName} ${selectedClient.lastName}`}
                    icon={<X size={14} />}
                    iconPosition="right"
                    onClick={() => {
                      setSelectedClient(null);
                      setClientSearch('');
                      setProperties([]);
                      setSelectedProperty(null);
                    }}
                  />
                </div>
              ) : (
                <>
                  <SearchBar
                    value={clientSearch}
                    onChange={setClientSearch}
                    placeholder={`Rechercher un ${clientLabel(dealType).toLowerCase()}...`}
                    loading={clientLoading}
                    size="sm"
                  />
                  {/* Resultats recherche */}
                  {clients.length > 0 && (
                    <div className="border border-edge-default rounded-lg bg-surface-neutral-default overflow-hidden">
                      {clients.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          className="w-full text-left px-4 py-3 text-sm text-content-body hover:bg-surface-neutral-action transition-colors border-b border-edge-default last:border-b-0"
                          onClick={() => {
                            setSelectedClient(c);
                            setClients([]);
                            setClientSearch('');
                          }}
                        >
                          {c.firstName} {c.lastName}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </CollapsibleSection>

        {/* ═══════════════════════════════════════════════════════
            Section 2 — Bien / Recherche
            ═══════════════════════════════════════════════════════ */}
        <CollapsibleSection
          title="Bien / Recherche"
          defaultExpanded={true}
          badge={section2Badge}
        >
          <div className="flex flex-col gap-[16px]">
            {!dealType && (
              <p className="text-sm text-content-subtle italic">
                Selectionnez un type d'affaire pour voir cette section
              </p>
            )}

            {/* VENTE / GESTION : selection du bien */}
            {(dealType === 'VENTE' || dealType === 'GESTION') && (
              <>
                {!selectedClient && (
                  <p className="text-sm text-content-subtle italic">
                    Selectionnez d'abord un client pour voir ses biens
                  </p>
                )}

                {selectedClient && propertyLoading && (
                  <div className="flex justify-center py-4">
                    <Spinner size="md" />
                  </div>
                )}

                {selectedClient && !propertyLoading && properties.length === 0 && (
                  <p className="text-sm text-content-subtle italic">
                    Ce client n'a aucun bien enregistre
                  </p>
                )}

                {selectedClient && !propertyLoading && properties.length > 0 && (
                  <div className="flex flex-col gap-[8px]">
                    {selectedProperty ? (
                      <div className="flex items-center gap-[8px]">
                        <Chip
                          variant="filled"
                          label={`${selectedProperty.type} - ${selectedProperty.livingAreaSqm ?? '?'}m2 - ${selectedProperty.addressCity ?? 'Ville inconnue'}`}
                          icon={<X size={14} />}
                          iconPosition="right"
                          onClick={() => setSelectedProperty(null)}
                        />
                      </div>
                    ) : (
                      <div className="border border-edge-default rounded-lg bg-surface-neutral-default overflow-hidden">
                        {properties.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            className="w-full text-left px-4 py-3 text-sm text-content-body hover:bg-surface-neutral-action transition-colors border-b border-edge-default last:border-b-0"
                            onClick={() => setSelectedProperty(p)}
                          >
                            {p.type} - {p.livingAreaSqm ?? '?'}m2 - {p.addressCity ?? 'Ville inconnue'}
                            {p.desiredSellingPrice ? ` - ${p.desiredSellingPrice.toLocaleString('fr-FR')}\u00A0\u20AC` : ''}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {/* ACQUISITION / LOCATION : criteres de recherche */}
            {(dealType === 'ACQUISITION' || dealType === 'LOCATION') && (
              <>
                <SelectField
                  label="Type de bien recherche"
                  value={searchPropertyType}
                  onChange={setSearchPropertyType}
                  options={[
                    { value: 'APPARTEMENT', label: 'Appartement' },
                    { value: 'MAISON', label: 'Maison' },
                    { value: 'TERRAIN', label: 'Terrain' },
                    { value: 'LOCAL_COMMERCIAL', label: 'Local commercial' },
                    { value: 'IMMEUBLE', label: 'Immeuble' },
                    { value: 'PARKING', label: 'Parking' },
                    { value: 'AUTRE', label: 'Autre' },
                  ]}
                  required
                />
                <InputFieldOutlined
                  label="Zone geographique"
                  value={searchZone}
                  onChange={setSearchZone}
                  placeholder="Ex: Paris 16e, Boulogne, Neuilly..."
                  required
                />
                <InputFieldOutlined
                  label={budgetLabel(dealType, 'min')}
                  value={budgetMin}
                  onChange={setBudgetMin}
                  type="number"
                  placeholder="0"
                  required
                />
                <InputFieldOutlined
                  label={budgetLabel(dealType, 'max')}
                  value={budgetMax}
                  onChange={setBudgetMax}
                  type="number"
                  placeholder="0"
                  required
                />
              </>
            )}
          </div>
        </CollapsibleSection>

        {/* ═══════════════════════════════════════════════════════
            Section 3 — Details & Mandat
            ═══════════════════════════════════════════════════════ */}
        <CollapsibleSection
          title="Details & Mandat"
          defaultExpanded={true}
          badge={section3Badge}
        >
          <div className="flex flex-col gap-[16px]">
            {/* CA en jeu */}
            <InputFieldOutlined
              label="CA en jeu (\u20AC)"
              value={forecastRevenue}
              onChange={setForecastRevenue}
              type="number"
              placeholder="0"
              required
            />

            {/* Checkbox mandat pas necessaire (ACQUISITION / LOCATION uniquement) */}
            {(dealType === 'ACQUISITION' || dealType === 'LOCATION') && (
              <div className="flex items-center gap-[12px]">
                <Checkbox
                  checked={mandateWaived}
                  onChange={(checked) => {
                    setMandateWaived(checked);
                    if (checked) setMandateStatus('');
                  }}
                />
                <span className="text-sm text-content-body">Mandat pas necessaire</span>
              </div>
            )}

            {/* Statut mandat */}
            <SelectField
              label="Statut mandat"
              value={mandateStatus}
              onChange={setMandateStatus}
              options={[
                { value: 'NON_CREE', label: 'Non cree' },
                { value: 'EDITE', label: 'Edite' },
                { value: 'ENVOYE', label: 'Envoye' },
                { value: 'SIGNE', label: 'Signe' },
              ]}
              disabled={mandateWaived}
              required={!mandateWaived}
            />

            {/* Dates mandat (si statut >= EDITE) */}
            {showMandateDates && (
              <>
                <InputFieldOutlined
                  label="Date debut mandat"
                  value={mandateStartDate}
                  onChange={setMandateStartDate}
                  type="date"
                />
                <InputFieldOutlined
                  label="Date fin mandat"
                  value={mandateEndDate}
                  onChange={setMandateEndDate}
                  type="date"
                />
              </>
            )}

            {/* Note interne */}
            <InputFieldOutlined
              label="Note interne"
              value={note}
              onChange={setNote}
              placeholder="Contexte, remarques..."
            />
          </div>
        </CollapsibleSection>

        {/* Bouton mobile en bas (redondant avec AppBar pour UX mobile) */}
        <div className="py-[16px]">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            disabled={!isFormValid || isSubmitting}
            onClick={handleCreate}
          >
            {isSubmitting ? (
              <>
                <Spinner size="sm" variant="inverse" />
                Creation en cours...
              </>
            ) : (
              "Creer l'affaire"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
