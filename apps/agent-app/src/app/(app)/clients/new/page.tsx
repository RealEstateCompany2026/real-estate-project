import { ClientCreateView } from '@/components/clients/ClientCreateView';

export const metadata = {
  title: 'Nouveau client — RealAgent',
};

export default function NewClientPage() {
  return (
    <div className="px-6 py-8">
      <ClientCreateView />
    </div>
  );
}
