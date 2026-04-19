'use client';
import { useParams } from 'next/navigation';
import { DealDetailView } from '@/components/deals/DealDetailView';
export default function FicheAffairePage() {
  const params = useParams();
  return <DealDetailView dealId={params.id as string} />;
}
