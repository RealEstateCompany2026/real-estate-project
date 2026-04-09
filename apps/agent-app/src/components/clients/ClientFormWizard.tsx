'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientCreateSchema, type ClientCreateData } from '@/lib/validations/client';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ui/Toast';

import { StepIdentity } from './steps/StepIdentity';
import { StepContact } from './steps/StepContact';
import { StepProject } from './steps/StepProject';
import { StepNotes } from './steps/StepNotes';
import { StepReview } from './steps/StepReview';
import { ClientFormStepper } from './ClientFormStepper';

const STEPS = [
  { id: 'identity', label: 'Identité', fields: ['firstName', 'lastName', 'gender', 'status'] },
  { id: 'contact', label: 'Coordonnées', fields: ['primaryEmail', 'mobilePhone', 'address'] },
  { id: 'project', label: 'Projet', fields: ['searchCriteriaSummary'] },
  { id: 'notes', label: 'Notes & Tags', fields: ['notes', 'tags', 'source', 'emailConsent'] },
  { id: 'review', label: 'Récapitulatif', fields: [] },
] as const;

/**
 * Wizard multi-étapes pour la création client (P06 — CLI-01 à CLI-06).
 * 5 étapes : Identité → Coordonnées → Projet → Notes & Tags → Récapitulatif.
 */
export function ClientFormWizard() {
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<ClientCreateData>({
    resolver: zodResolver(clientCreateSchema),
    defaultValues: {
      gender: undefined,
      firstName: '',
      lastName: '',
      status: [],
      primaryEmail: '',
      secondaryEmail: '',
      mobilePhone: '',
      address: '',
      searchCriteriaSummary: '',
      source: 'MANUEL',
      notes: '',
      tags: [],
      emailConsent: false,
      language: 'fr',
    },
    mode: 'onTouched',
  });

  const { trigger, handleSubmit } = methods;

  const goNext = useCallback(async () => {
    const fieldsToValidate = STEPS[currentStep].fields as unknown as (keyof ClientCreateData)[];
    const isValid = fieldsToValidate.length === 0 || (await trigger(fieldsToValidate));
    if (isValid && currentStep < STEPS.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  }, [currentStep, trigger]);

  const goBack = useCallback(() => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }, [currentStep]);

  const onSubmit = useCallback(
    async (data: ClientCreateData) => {
      setIsSubmitting(true);
      try {
        const supabase = createClient();

        // Get current user for agentId
        const { data: { user } } = await supabase.auth.getUser();

        // Get organization (from user metadata or a separate query)
        const orgId = user?.user_metadata?.organizationId ?? null;

        const { data: client, error } = await supabase
          .from('Client')
          .insert({
            ...data,
            agentId: user?.id ?? null,
            organizationId: orgId,
            isActive: true,
            completionScore: 0, // sera recalculé côté serveur
            isPotentialDuplicate: false,
          })
          .select('id')
          .single();

        if (error) throw error;

        toast('Client créé avec succès', 'success');
        router.push(`/clients/${client.id}`);
      } catch (err) {
        console.error('Error creating client:', err);
        toast('Erreur lors de la création du client', 'error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [router, toast]
  );

  const isLastStep = currentStep === STEPS.length - 1;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Stepper */}
        <ClientFormStepper
          steps={STEPS.map((s) => s.label)}
          currentStep={currentStep}
          onStepClick={(i) => {
            if (i < currentStep) setCurrentStep(i);
          }}
        />

        {/* Step content */}
        <div className="mt-8 min-h-[300px]">
          {currentStep === 0 && <StepIdentity />}
          {currentStep === 1 && <StepContact />}
          {currentStep === 2 && <StepProject />}
          {currentStep === 3 && <StepNotes />}
          {currentStep === 4 && <StepReview />}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-grey-light">
          <button
            type="button"
            onClick={goBack}
            disabled={currentStep === 0}
            className="px-6 py-2.5 rounded-lg text-sm font-bold text-neutral-grey-bold hover:text-neutral-anthracite hover:bg-background-subtle transition-colors disabled:opacity-0"
          >
            Retour
          </button>

          {isLastStep ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Création...' : 'Créer le client'}
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="px-8 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:opacity-90 transition-opacity"
            >
              Continuer
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
