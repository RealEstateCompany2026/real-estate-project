import { ClientFormWizard } from '@/components/clients/ClientFormWizard';

export const metadata = {
  title: 'Nouveau client — RealAgent',
};

export default function NewClientPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-neutral-anthracite mb-8">Nouveau client</h1>
      <ClientFormWizard />
    </div>
  );
}
