// Types Event — alignés sur Supabase (table "Event", 26 cols)

export type EventType =
  | 'APPEL_ENTRANT' | 'APPEL_SORTANT'
  | 'VISITE' | 'ESTIMATION'
  | 'EMAIL_ENVOYE' | 'EMAIL_RECU'
  | 'RENDEZ_VOUS' | 'NOTE'
  | 'OFFRE' | 'COMPROMIS'
  | 'CLIENT_CREATED' | 'CLIENT_UPDATED' | 'CLIENT_MERGED' | 'CLIENT_ARCHIVED' | 'CLIENT_TRANSFERRED'
  | 'PROPERTY_CREATED' | 'PROPERTY_UPDATED' | 'PROPERTY_STATUS_CHANGED' | 'PROPERTY_OWNER_CHANGED'
  | 'PROPERTY_PHOTO_ADDED' | 'PROPERTY_PHOTO_REMOVED' | 'PROPERTY_SHARED'
  | 'DOCUMENT_UPLOADED'
  | 'OTHER';

export type EventStatus = 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';

export interface Event {
  id: string;
  organizationId: string | null;
  agentId: string | null;
  clientId: string | null;
  propertyId: string | null;
  dealId: string | null;

  type: EventType;
  title: string;
  description: string | null;
  eventDate: string | null;
  status: EventStatus | null;

  isTask: boolean;
  taskCompleted: boolean | null;

  recurrenceRule: string | null;
  location: string | null;
  duration: number | null;

  createdAt: string;
  updatedAt: string;
}

// Sous-ensemble pour la Timeline compacte
export interface EventListItem {
  id: string;
  type: EventType;
  title: string;
  eventDate: string | null;
  agentId: string | null;
  createdAt: string;
}

// Icônes par type pour la Timeline
export const EVENT_TYPE_ICONS: Record<string, string> = {
  APPEL_ENTRANT: 'PhoneIncoming',
  APPEL_SORTANT: 'PhoneOutgoing',
  VISITE: 'MapPin',
  ESTIMATION: 'Calculator',
  EMAIL_ENVOYE: 'Send',
  EMAIL_RECU: 'Mail',
  RENDEZ_VOUS: 'Calendar',
  NOTE: 'StickyNote',
  OFFRE: 'FileText',
  COMPROMIS: 'FileCheck',
  CLIENT_CREATED: 'UserPlus',
  CLIENT_UPDATED: 'UserCog',
  PROPERTY_CREATED: 'Home',
  PROPERTY_UPDATED: 'Edit',
  PROPERTY_STATUS_CHANGED: 'ArrowRightLeft',
  PROPERTY_PHOTO_ADDED: 'ImagePlus',
  DOCUMENT_UPLOADED: 'Upload',
  OTHER: 'Circle',
};
