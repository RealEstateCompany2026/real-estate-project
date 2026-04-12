'use client';

import type { Client } from '@/types/client';
import { InlineEdit } from '@/components/ui/InlineEdit';

interface ClientSectionIdentityProps {
  client: Client;
  onUpdate: (field: string, value: unknown) => void;
}

/**
 * Section Identité & Coordonnées de la fiche client (FIC-02 + FIC-08 inline edit).
 */
export function ClientSectionIdentity({ client, onUpdate }: ClientSectionIdentityProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
      {/* Colonne gauche — Identité */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider">Identité</h4>
        <InlineEdit
          label="Prénom"
          value={client.firstName}
          onSave={(v) => onUpdate('firstName', v)}
        />
        <InlineEdit
          label="Nom"
          value={client.lastName}
          onSave={(v) => onUpdate('lastName', v)}
        />
        <InlineEdit
          label="Date de naissance"
          value={client.dateOfBirth ?? ''}
          onSave={(v) => onUpdate('dateOfBirth', v || null)}
          type="text"
          placeholder="JJ/MM/AAAA"
        />
        <InlineEdit
          label="Nationalité"
          value={client.nationality ?? ''}
          onSave={(v) => onUpdate('nationality', v || null)}
        />
      </div>

      {/* Colonne droite — Coordonnées */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider">Coordonnées</h4>
        <InlineEdit
          label="Email"
          value={client.primaryEmail}
          onSave={(v) => onUpdate('primaryEmail', v)}
          type="email"
        />
        <InlineEdit
          label="Email 2"
          value={client.secondaryEmail ?? ''}
          onSave={(v) => onUpdate('secondaryEmail', v || null)}
          type="email"
          placeholder="Email secondaire"
        />
        <InlineEdit
          label="Téléphone"
          value={client.mobilePhone ?? ''}
          onSave={(v) => onUpdate('mobilePhone', v || null)}
          type="tel"
        />
        <InlineEdit
          label="Adresse"
          value={client.address ?? ''}
          onSave={(v) => onUpdate('address', v || null)}
        />
      </div>

      {/* Professionnel */}
      {(client.jobTitle || client.employer) && (
        <div className="space-y-3 md:col-span-2 pt-3 border-t border-edge-default">
          <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider">Professionnel</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            <InlineEdit
              label="Poste"
              value={client.jobTitle ?? ''}
              onSave={(v) => onUpdate('jobTitle', v || null)}
            />
            <InlineEdit
              label="Employeur"
              value={client.employer ?? ''}
              onSave={(v) => onUpdate('employer', v || null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
