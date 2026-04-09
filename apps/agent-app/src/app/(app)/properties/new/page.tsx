import { PropertyFormWizard } from '@/components/properties/PropertyFormWizard';

export const metadata = {
  title: 'Nouveau bien — RealAgent',
};

export default function NewPropertyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-neutral-anthracite mb-8">Nouveau bien</h1>
      <PropertyFormWizard />
    </div>
  );
}
