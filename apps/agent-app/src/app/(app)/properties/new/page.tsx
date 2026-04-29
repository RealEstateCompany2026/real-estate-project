import { PropertyCreateView } from '@/components/properties/PropertyCreateView';

export const metadata = {
  title: 'Nouveau bien — RealAgent',
};

export default function NewPropertyPage() {
  return (
    <div className="px-6 py-8">
      <PropertyCreateView />
    </div>
  );
}
