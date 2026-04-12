'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, UserPlus } from 'lucide-react';
import { clientQuickCreateSchema, type ClientQuickCreateData } from '@/lib/validations/client';
import { CLIENT_STATUS_LABELS } from '@/types/client';
import type { ClientStatus } from '@/types/client';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@real-estate/ui/button';
import { InputField } from '@real-estate/ui/input-field';
import { Chip } from '@real-estate/ui/chip';

interface ClientQuickCreateProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (client: { id: string; firstName: string; lastName: string }) => void;
  defaultStatus?: ClientStatus;
}

const STATUS_OPTIONS: { value: ClientStatus; label: string }[] = [
  { value: 'PROPRIETAIRE', label: CLIENT_STATUS_LABELS.PROPRIETAIRE },
  { value: 'ACQUEREUR', label: CLIENT_STATUS_LABELS.ACQUEREUR },
  { value: 'BAILLEUR', label: CLIENT_STATUS_LABELS.BAILLEUR },
  { value: 'LOCATAIRE', label: CLIENT_STATUS_LABELS.LOCATAIRE },
];

/**
 * Modale de création rapide d'un client (CLI-07).
 * Utilisée depuis le formulaire d'ajout de bien (BIE-02) quand le propriétaire n'existe pas encore.
 * Champs minimaux : prénom, nom, type, email, téléphone.
 */
export function ClientQuickCreate({ isOpen, onClose, onCreated, defaultStatus = 'PROPRIETAIRE' }: ClientQuickCreateProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ClientQuickCreateData>({
    resolver: zodResolver(clientQuickCreateSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      status: [defaultStatus],
      primaryEmail: '',
      mobilePhone: '',
    },
  });

  const selectedStatus = watch('status') ?? [];

  function toggleStatus(status: ClientStatus) {
    const current = selectedStatus;
    if (current.includes(status)) {
      setValue('status', current.filter((s) => s !== status), { shouldValidate: true });
    } else {
      setValue('status', [...current, status], { shouldValidate: true });
    }
  }

  async function onSubmit(data: ClientQuickCreateData) {
    setIsSubmitting(true);
    setError(null);
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      const { data: client, error: insertError } = await supabase
        .from('Client')
        .insert({
          ...data,
          agentId: user?.id ?? null,
          organizationId: user?.user_metadata?.organizationId ?? null,
          isActive: true,
          completionScore: 0,
          isPotentialDuplicate: false,
          source: 'MANUEL',
          language: 'fr',
          emailConsent: false,
        })
        .select('id, firstName, lastName')
        .single();

      if (insertError) throw insertError;

      onCreated(client);
      reset();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la création');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-neutral-anthracite">Création rapide client</h2>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            size="sm"
            icon={<X className="w-5 h-5" />}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Prénom & Nom */}
          <div className="grid grid-cols-2 gap-3">
            <InputField
              label="Prénom"
              id="qc-firstName"
              type="text"
              {...register('firstName')}
              placeholder="Prénom"
              error={errors.firstName?.message}
              required
            />
            <InputField
              label="Nom"
              id="qc-lastName"
              type="text"
              {...register('lastName')}
              placeholder="Nom"
              error={errors.lastName?.message}
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-bold text-neutral-anthracite mb-2">
              Type <span className="text-semantic-destructive">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map((opt) => {
                const isSelected = selectedStatus.includes(opt.value);
                return (
                  <Chip
                    key={opt.value}
                    label={opt.label}
                    onClick={() => toggleStatus(opt.value)}
                    selected={isSelected}
                    variant={isSelected ? 'filled' : 'outlined'}
                  />
                );
              })}
            </div>
            {errors.status && (
              <p className="text-xs text-semantic-destructive mt-0.5">{errors.status.message}</p>
            )}
          </div>

          {/* Email */}
          <InputField
            label="Email"
            id="qc-email"
            type="email"
            {...register('primaryEmail')}
            placeholder="email@exemple.com"
            error={errors.primaryEmail?.message}
            required
          />

          {/* Téléphone */}
          <InputField
            label="Téléphone"
            id="qc-phone"
            type="tel"
            {...register('mobilePhone')}
            placeholder="06 12 34 56 78"
          />

          {/* Error */}
          {error && (
            <p className="text-sm text-semantic-destructive bg-semantic-destructive/5 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="secondary"
              onClick={onClose}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Création...' : 'Créer'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
