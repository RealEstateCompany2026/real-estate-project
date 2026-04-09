'use client'

export function StepperDots({
  steps,
  currentStep,
}: {
  steps: number
  currentStep: number
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: steps }).map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i === currentStep
              ? 'w-6 bg-[var(--color-indigo-couleur-fonctionnelle)]'
              : 'w-2 bg-[var(--color-grey-light-couleur-primaire)]'
          }`}
        />
      ))}
    </div>
  )
}
