import { ClientDetailView } from '@/components/clients/ClientDetailView';

export const metadata = {
  title: 'Fiche client — RealAgent',
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ClientDetailPage({ params }: Props) {
  const { id } = await params;

  return <ClientDetailView clientId={id} />;
}
