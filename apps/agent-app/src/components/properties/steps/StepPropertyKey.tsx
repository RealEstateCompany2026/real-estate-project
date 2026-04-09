'use client';

import { useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import type { PropertyCreateData } from '@/lib/validations/property';
import { AddressAutocomplete } from '@/components/ui/AddressAutocomplete';
import { ClientQuickCreate } from '@/components/clients/ClientQuickCreate';
import { createClient } from '@/lib/supabase/client';
import { UserPlus, Search } from 'lucide-react';

interface ClientOption {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string;
}

/**
 * Étape 2 — Informations clés du bien (BIE-02).
 * Adresse (autocomplete BAN), surface, pièces, prix, propriétaire.
 */
export function StepPropertyKey() {
  const { register, formState: { errors }, setValue, watch, control } = useFormContext<PropertyCreateData>();
  const [clientSearch, setClientSearch] = useState('');
  const [clientResults, setClientResults] = useState<ClientOption[]>([]);
  const [isSearchingClient, setIsSearchingClient] = useState(false);
  const [showQuickCreate, setShowQuickCreate] = useState(false);
  const selectedClientId = watch('clientId');
  const [selectedClient, setSelectedClient] = useState<ClientOption | null>(null);

  // Search clients
  useEffect(() => {
    if (clientSearch.length < 2) {
      setClientResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setIsSearchingClient(true);
      const supabase = createClient();
      const { data } = await supabase
        .from('Client')
        .select('id, firstName, lastName, primaryEmail')
        .eq('isActive', true)
        .or(`firstName.ilike.%${clientSearch}%,lastName.ilike.%${clientSearch}%,primaryEmail.ilike.%${clientSearch}%`)
        .limit(8);
      setClientResults(data ?? []);
      setIsSearchingClient(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [clientSearch]);

  function selectClient(client: ClientOption) {
    setSelectedClient(client);
    setValue('clientId', client.id, { shouldValidate: true });
    setClientSearch('');
    setClientResults([]);
  }

  return (
    <div className="space-y-6">
      {/* Adresse */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-1">
          Adresse <span className="text-semantic-destructive">*</span>
        </label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <AddressAutocomplete
              value={field.value}
              onChange={(addr) => {
                setValue('address', addr.label, { shouldValidate: true });
                setValue('addressStreet', addr.street);
                setValue('addressZipCode', addr.zipCode);
                setValue('addressCity', addr.city);
                setValue('addressLat', addr.lat);
                setValue('addressLng', addr.lng);
              }}
              onRawChange={(text) => setValue('address', text)}
            />
          )}
        />
        {errors.address && (
          <p className="text-xs text-semantic-destructive mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* Surface, Pièces, Prix */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="livingAreaSqm" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Surface (m²) <span className="text-semantic-destructive">*</span>
          </label>
          <input
            id="livingAreaSqm"
            type="number"
            step="0.1"
            {...register('livingAreaSqm', { valueAsNumber: true })}
            className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
            placeholder="75"
          />
          {errors.livingAreaSqm && (
            <p className="text-xs text-semantic-destructive mt-1">{errors.livingAreaSqm.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="numberOfRooms" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Pièces <span className="text-semantic-destructive">*</span>
          </label>
          <input
            id="numberOfRooms"
            type="number"
            {...register('numberOfRooms', { valueAsNumber: true })}
            className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
            placeholder="3"
          />
          {errors.numberOfRooms && (
            <p className="text-xs text-semantic-destructive mt-1">{errors.numberOfRooms.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="desiredSellingPrice" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Prix souhaité <span className="text-semantic-destructive">*</span>
          </label>
          <div className="relative">
            <input
              id="desiredSellingPrice"
              type="number"
              {...register('desiredSellingPrice', { valueAsNumber: true })}
              className="w-full px-3 py-2.5 pr-8 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
              placeholder="350000"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-neutral-grey-bold">€</span>
          </div>
          {errors.desiredSellingPrice && (
            <p className="text-xs text-semantic-destructive mt-1">{errors.desiredSellingPrice.message}</p>
          )}
        </div>
      </div>

      {/* Propriétaire (Client) */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-1">
          Propriétaire <span className="text-semantic-destructive">*</span>
        </label>

        {selectedClient ? (
          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-primary bg-background-softBlue">
            <span className="text-sm font-medium text-primary">
              {selectedClient.firstName} {selectedClient.lastName} — {selectedClient.primaryEmail}
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedClient(null);
                setValue('clientId', '', { shouldValidate: true });
              }}
              className="text-xs text-primary hover:underline"
            >
              Changer
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-grey-bold" />
              <input
                type="text"
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                placeholder="Rechercher un client existant..."
              />
            </div>

            {/* Résultats recherche client */}
            {clientResults.length > 0 && (
              <ul className="border border-neutral-grey-light rounded-lg divide-y divide-neutral-grey-light max-h-48 overflow-y-auto">
                {clientResults.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => selectClient(c)}
                      className="w-full text-left px-3 py-2 hover:bg-background-subtle transition-colors"
                    >
                      <span className="text-sm font-medium text-neutral-anthracite">
                        {c.firstName} {c.lastName}
                      </span>
                      <span className="text-xs text-neutral-grey-bold ml-2">{c.primaryEmail}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Création rapide */}
            <button
              type="button"
              onClick={() => setShowQuickCreate(true)}
              className="inline-flex items-center gap-1.5 text-sm text-primary font-bold hover:underline"
            >
              <UserPlus className="w-4 h-4" />
              Créer un nouveau client
            </button>
          </div>
        )}
        {errors.clientId && (
          <p className="text-xs text-semantic-destructive mt-1">{errors.clientId.message}</p>
        )}
      </div>

      {/* Modale création rapide client */}
      <ClientQuickCreate
        isOpen={showQuickCreate}
        onClose={() => setShowQuickCreate(false)}
        onCreated={(client) => {
          selectClient({ ...client, primaryEmail: '' });
        }}
        defaultStatus="PROPRIETAIRE"
      />
    </div>
  );
}
