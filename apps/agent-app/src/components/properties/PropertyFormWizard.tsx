'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { propertyCreateSchema, type PropertyCreateData } from '@/lib/validations/property';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@real-estate/ui/button';
import { HorizontalDivider } from '@real-estate/ui/horizontal-divider';
import { useToast } from '@/components/ui/Toast';
import { ClientFormStepper } from '@/components/clients/ClientFormStepper';

import { StepPropertyType } from './steps/StepPropertyType';
import { StepPropertyKey } from './steps/StepPropertyKey';
import { StepPropertyDetails } from './steps/StepPropertyDetails';
import { StepPropertyCharacteristics } from './steps/StepPropertyCharacteristics';
import { StepPropertyPhotos } from './steps/StepPropertyPhotos';
import { StepPropertyReview } from './steps/StepPropertyReview';

const STEPS = [
  { id: 'type', label: 'Type & Opération', fields: ['type', 'operationTypes'] },
  { id: 'key', label: 'Infos clés', fields: ['address', 'livingAreaSqm', 'numberOfRooms', 'desiredSellingPrice', 'clientId'] },
  { id: 'details', label: 'Description', fields: [] },
  { id: 'characteristics', label: 'Caractéristiques', fields: [] },
  { id: 'photos', label: 'Photos', fields: [] },
  { id: 'review', label: 'Récapitulatif', fields: [] },
] as const;

/**
 * Wizard multi-étapes pour la création de bien (P07 — BIE-01 à BIE-06).
 * 6 étapes : Type → Infos clés → Description → Caractéristiques → Photos → Récapitulatif.
 */
export function PropertyFormWizard() {
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<PropertyCreateData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(propertyCreateSchema) as any,
    defaultValues: {
      type: 'APPARTEMENT',
      operationTypes: [],
      address: '',
      addressStreet: '',
      addressZipCode: '',
      addressCity: '',
      livingAreaSqm: undefined,
      numberOfRooms: undefined,
      desiredSellingPrice: undefined,
      clientId: '',
      floorLevel: undefined,
      numberOfFloors: undefined,
      constructionYear: undefined,
      condition: undefined,
      landAreaSqm: undefined,
      bedroomCount: undefined,
      bathroomCount: undefined,
      showerRoomCount: undefined,
      toiletCount: undefined,
      heatingType: undefined,
      exposures: [],
      dpeEnergyClass: undefined,
      dpeGasEmissionClass: undefined,
      hasElevator: false,
      hasIntercom: false,
      hasPool: false,
      hasHomeAutomation: false,
      parkingType: undefined,
      parkingSpotCount: undefined,
      status: 'OFF_MARKET',
      notes: '',
      tags: [],
    },
    mode: 'onTouched',
  });

  const { trigger, handleSubmit } = methods;

  const goNext = useCallback(async () => {
    const fieldsToValidate = STEPS[currentStep].fields as unknown as (keyof PropertyCreateData)[];
    const isValid = fieldsToValidate.length === 0 || (await trigger(fieldsToValidate));
    if (isValid && currentStep < STEPS.length - 1) {
      setCurrentStep((s) => s + 1);
    }
  }, [currentStep, trigger]);

  const goBack = useCallback(() => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }, [currentStep]);

  const onSubmit = useCallback(
    async (data: PropertyCreateData) => {
      setIsSubmitting(true);
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        const orgId = user?.user_metadata?.organizationId ?? null;

        const { data: property, error } = await supabase
          .from('Property')
          .insert({
            ...data,
            agentId: user?.id ?? null,
            organizationId: orgId,
            completionScore: 0,
          })
          .select('id')
          .single();

        if (error) throw error;

        toast('Bien créé avec succès', 'success');
        router.push(`/properties/${property.id}`);
      } catch (err) {
        console.error('Error creating property:', err);
        toast('Erreur lors de la création du bien', 'error');
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
        <ClientFormStepper
          steps={STEPS.map((s) => s.label)}
          currentStep={currentStep}
          onStepClick={(i) => { if (i < currentStep) setCurrentStep(i); }}
        />

        <div className="mt-8 min-h-[300px]">
          {currentStep === 0 && <StepPropertyType />}
          {currentStep === 1 && <StepPropertyKey />}
          {currentStep === 2 && <StepPropertyDetails />}
          {currentStep === 3 && <StepPropertyCharacteristics />}
          {currentStep === 4 && <StepPropertyPhotos />}
          {currentStep === 5 && <StepPropertyReview />}
        </div>

        <HorizontalDivider className="my-8" />
        <div className="flex items-center justify-between">
          <Button
            variant="secondary"
            onClick={goBack}
            disabled={currentStep === 0}
          >
            Retour
          </Button>

          {isLastStep ? (
            <Button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Création...' : 'Créer le bien'}
            </Button>
          ) : (
            <Button
              onClick={goNext}
            >
              Continuer
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
