'use client';

import { useEffect, useState } from 'react';
import { FileText, Upload, Eye, Download } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { DocumentListItem } from '@/types/document';
import { formatDate, formatFileSize } from '@/lib/utils/format';
import { EmptyState } from '@/components/ui/EmptyState';

interface ClientSectionDocumentsProps {
  clientId: string;
}

/**
 * Section Documents de la fiche client (FIC-04).
 * Affiche les documents rattachés au client (CNI, passeport, KBIS, etc.).
 * Limite à 3 affichés, "Voir tout" pour le reste.
 */
export function ClientSectionDocuments({ clientId }: ClientSectionDocumentsProps) {
  const [documents, setDocuments] = useState<DocumentListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Document')
        .select('id, title, type, format, storagePath, fileSizeBytes, fileName, createdAt')
        .eq('clientId', clientId)
        .order('createdAt', { ascending: false });
      setDocuments((data ?? []) as unknown as DocumentListItem[]);
      setIsLoading(false);
    }
    load();
  }, [clientId]);

  if (isLoading) {
    return <div className="h-20 flex items-center justify-center text-sm text-neutral-grey-bold">Chargement...</div>;
  }

  if (documents.length === 0) {
    return (
      <EmptyState
        icon={<FileText className="w-6 h-6" />}
        title="Aucun document"
        description="Les documents rattachés au client apparaîtront ici."
        action={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-primary bg-background-softBlue hover:bg-primary hover:text-white transition-colors"
          >
            <Upload className="w-4 h-4" />
            Ajouter un document
          </button>
        }
      />
    );
  }

  const visible = showAll ? documents : documents.slice(0, 3);

  return (
    <div className="space-y-2">
      {visible.map((doc) => (
        <div
          key={doc.id}
          className="flex items-center justify-between px-3 py-2 rounded-lg border border-neutral-grey-light hover:bg-background-subtle transition-colors"
        >
          <div className="flex items-center gap-3 min-w-0">
            <FileText className="w-4 h-4 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-neutral-anthracite truncate">{doc.title}</p>
              <p className="text-xs text-neutral-grey-bold">
                {doc.type} · {formatFileSize(doc.fileSizeBytes ?? doc.fileSizeKb)} · {formatDate(doc.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" className="p-1.5 rounded hover:bg-background-subtle" title="Voir">
              <Eye className="w-4 h-4 text-neutral-grey-bold" />
            </button>
            <button type="button" className="p-1.5 rounded hover:bg-background-subtle" title="Télécharger">
              <Download className="w-4 h-4 text-neutral-grey-bold" />
            </button>
          </div>
        </div>
      ))}

      {!showAll && documents.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="text-sm text-primary font-bold hover:underline"
        >
          Voir tout ({documents.length})
        </button>
      )}
    </div>
  );
}
