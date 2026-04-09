'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, UserPlus } from 'lucide-react';
import { clientQuickCreateSchema, type ClientQuickCreateData } from '@/lib/validations/client';
import { CLIENT_STATUS_LABELS } from '@/types/client';
import type { ClientStatus } from '@/types/client';
import { createClient } from '@/lib/supabase/client';

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
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md hover:bg-background-subtle transition-colors"
          >
            <X className="w-5 h-5 text-neutral-grey-bold" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Prénom & Nom */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="qc-firstName" className="block text-sm font-bold text-neutral-anthracite mb-1">
                Prénom <span className="text-semantic-destructive">*</span>
              </label>
              <input
                id="qc-firstName"
                type="text"
                {...register('firstName')}
                className="w-full px-3 py-2 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                placeholder="Prénom"
              />
              {errors.firstName && (
                <p className="text-xs text-semantic-destructive mt-0.5">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="qc-lastName" className="block text-sm font-bold text-neutral-anthracite mb-1">
                Nom <span className="text-semantic-destructive">*</span>
              </label>
              <input
                id="qc-lastName"
                type="text"
                {...register('lastName')}
                className="w-full px-3 py-2 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
                placeholder="Nom"
              />
              {errors.lastName && (
                <p className="text-xs text-semantic-destructive mt-0.5">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-bold text-neutral-anthracite mb-1">
              Type <span className="text-semantic-destructive">*</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {STATUS_OPTIONS.map((opt) => {
                const isSelected = selectedStatus.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleStatus(opt.value)}
                    className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                      isSelected
                        ? 'border-primary bg-background-softBlue text-primary font-bold'
                        : 'border-neutral-grey-light text-neutral-grey-bold hover:border-primary/50'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            {errors.status && (
              <p className="text-xs text-semantic-destructive mt-0.5">{errors.status.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="qc-email" className="block text-sm font-bold text-neutral-anthracite mb-1">
              Email <span className="text-semantic-destructive">*</span>
            </label>
            <input
              id="qc-email"
              type="email"
              {...register('primaryEmail')}
              className="w-full px-3 py-2 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
              placeholder="email@exemple.com"
            />
            {errors.primaryEmail && (
              <p className="text-xs text-semantic-destructive mt-0.5">{errors.primaryEmail.message}</p>
            )}
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="qc-phone" className="block text-sm font-bold text-neutral-anthracite mb-1">
              Téléphone
            </label>
            <input
              id="qc-phone"
              type="tel"
              {...register('mobilePhone')}
              className="w-full px-3 py-2 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
              placeholder="06 12 34 56 78"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-semantic-destructive bg-semantic-destructive/5 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm font-bold text-neutral-grey-bold hover:bg-background-subtle transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Création...' : 'Créer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
