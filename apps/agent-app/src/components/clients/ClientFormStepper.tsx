'use client';

import { Check } from 'lucide-react';

interface ClientFormStepperProps {
  steps: string[];
  currentStep: number;
  onStepClick: (index: number) => void;
}

/**
 * Indicateur d'étapes horizontal pour le wizard client (CLI-01).
 */
export function ClientFormStepper({ steps, currentStep, onStepClick }: ClientFormStepperProps) {
  return (
    <nav aria-label="Étapes de création" className="flex items-center gap-2">
      {steps.map((label, i) => {
        const isCompleted = i < currentStep;
        const isCurrent = i === currentStep;

        return (
          <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => onStepClick(i)}
              disabled={i > currentStep}
              className={`flex items-center gap-2 ${
                i > currentStep ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors shrink-0 ${
                  isCompleted
                    ? 'bg-semantic-success text-white'
                    : isCurrent
                      ? 'bg-surface-branded-action text-white'
                      : 'bg-surface-neutral-action text-content-caption'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span
                className={`text-sm whitespace-nowrap ${
                  isCurrent
                    ? 'font-bold text-content-headings'
                    : isCompleted
                      ? 'text-semantic-success'
                      : 'text-content-caption'
                }`}
              >
                {label}
              </span>
            </button>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div
                className={`flex-1 h-px min-w-[20px] ${
                  i < currentStep ? 'bg-semantic-success' : 'bg-edge-default'
                }`}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
