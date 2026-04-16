'use client';

import { useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import type { PropertyCreateData } from '@/lib/validations/property';
import { InputFieldOutlined } from '@real-estate/ui/input-field-outlined';
import { Button } from '@real-estate/ui/button';
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
        <label className="block text-sm font-bold text-content-headings mb-1">
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
          <Controller
            name="livingAreaSqm"
            control={control}
            render={({ field: { value, ...field } }) => (
              <InputFieldOutlined
                label="Surface (m²)"
                id="livingAreaSqm"
                type="number"
                {...field}
                value={value ? String(value) : ''}
                placeholder="75"
                error={!!errors.livingAreaSqm?.message}
                required
              />
            )}
          />
          {errors.livingAreaSqm?.message && <p className="text-xs text-semantic-destructive mt-0.5">{errors.livingAreaSqm.message}</p>}
        </div>
        <div>
          <Controller
            name="numberOfRooms"
            control={control}
            render={({ field: { value, ...field } }) => (
              <InputFieldOutlined
                label="Pièces"
                id="numberOfRooms"
                type="number"
                {...field}
                value={value ? String(value) : ''}
                placeholder="3"
                error={!!errors.numberOfRooms?.message}
                required
              />
            )}
          />
          {errors.numberOfRooms?.message && <p className="text-xs text-semantic-destructive mt-0.5">{errors.numberOfRooms.message}</p>}
        </div>
        <div>
          <Controller
            name="desiredSellingPrice"
            control={control}
            render={({ field: { value, ...field } }) => (
              <InputFieldOutlined
                label="Prix souhaité"
                id="desiredSellingPrice"
                type="number"
                {...field}
                value={value ? String(value) : ''}
                placeholder="350000"
                error={!!errors.desiredSellingPrice?.message}
                required
              />
            )}
          />
          {errors.desiredSellingPrice?.message && <p className="text-xs text-semantic-destructive mt-0.5">{errors.desiredSellingPrice.message}</p>}
        </div>
      </div>

      {/* Propriétaire (Client) */}
      <div>
        <label className="block text-sm font-bold text-content-headings mb-1">
          Propriétaire <span className="text-semantic-destructive">*</span>
        </label>

        {selectedClient ? (
          <div className="flex items-center justify-between px-3 py-2.5 rounded-lg border border-edge-branded-default bg-surface-information">
            <span className="text-sm font-medium text-content-branded-action">
              {selectedClient.firstName} {selectedClient.lastName} — {selectedClient.primaryEmail}
            </span>
            <Button
              variant="link"
              onClick={() => {
                setSelectedClient(null);
                setValue('clientId', '', { shouldValidate: true });
              }}
            >
              Changer
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <InputFieldOutlined
              label=""
              id="client-search"
              type="text"
              value={clientSearch}
              onChange={setClientSearch}
              placeholder="Rechercher un client existant..."
              leftIcon={Search}
            />

            {/* Résultats recherche client */}
            {clientResults.length > 0 && (
              <ul className="border border-edge-default rounded-lg divide-y divide-edge-default max-h-48 overflow-y-auto">
                {clientResults.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => selectClient(c)}
                      className="w-full text-left px-3 py-2 hover:bg-surface-neutral-action transition-colors"
                    >
                      <span className="text-sm font-medium text-content-headings">
                        {c.firstName} {c.lastName}
                      </span>
                      <span className="text-xs text-content-caption ml-2">{c.primaryEmail}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Création rapide */}
            <Button
              variant="link"
              onClick={() => setShowQuickCreate(true)}
            >
              <UserPlus className="w-4 h-4" />
              Créer un nouveau client
            </Button>
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
