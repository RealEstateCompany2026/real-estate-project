import { PropertyDetailView } from '@/components/properties/PropertyDetailView';

export const metadata = {
  title: 'Fiche bien — RealAgent',
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;

  return <PropertyDetailView propertyId={id} />;
}
