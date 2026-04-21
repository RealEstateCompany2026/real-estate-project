/**
 * Gabarits de mandat — Structure des templates
 *
 * Chaque gabarit contient des sections avec des champs dynamiques
 * entre doubles accolades {{variable}}.
 *
 * Les variables seront remplies automatiquement à partir des données
 * Deal, Client, Property, Agent.
 *
 * TODO: Remplacer le lorem ipsum par le contenu juridique réel.
 */

export interface MandateSection {
  title: string;
  body: string;
}

export interface MandateTemplate {
  id: string;
  title: string;
  dealType: string;
  sections: MandateSection[];
}

export const MANDATE_TEMPLATE_VENTE: MandateTemplate = {
  id: 'TPL-VENTE',
  title: 'Mandat de Vente',
  dealType: 'VENTE',
  sections: [
    {
      title: '1. Parties',
      body: `Le mandant : {{clientFirstName}} {{clientLastName}}, demeurant au {{clientAddress}}, ci-après dénommé "le Mandant",\n\nConfie au mandataire : {{agentName}}, agence {{agencyName}}, {{agencyAddress}}, ci-après dénommé "le Mandataire",\n\nLe mandat de vendre le bien immobilier désigné ci-après.`,
    },
    {
      title: '2. Désignation du bien',
      body: `Bien de type {{propertyType}} situé au {{propertyAddress}}, {{propertyCity}}.\nSurface habitable : {{propertySurface}} m².\nNombre de pièces : {{propertyRooms}}.\nRéférence cadastrale : {{propertyCadastralRef}}.`,
    },
    {
      title: '3. Prix de vente',
      body: `Le Mandant fixe le prix de vente net vendeur à {{desiredSellingPrice}} €.\nHonoraires du Mandataire : {{commissionRate}}% soit {{commissionAmount}} €.\nPrix de vente FAI : {{priceWithFees}} €.`,
    },
    {
      title: '4. Durée du mandat',
      body: `Le présent mandat est consenti pour une durée de {{mandateDuration}} mois à compter de sa signature, soit du {{mandateStartDate}} au {{mandateEndDate}}.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      title: '5. Obligations du mandataire',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
      title: '6. Obligations du mandant',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      title: '7. Signatures',
      body: `Fait à {{city}}, le {{signatureDate}}\n\nLe Mandant : {{clientFirstName}} {{clientLastName}}\n\nLe Mandataire : {{agentName}}`,
    },
  ],
};

export const MANDATE_TEMPLATE_ACQUISITION: MandateTemplate = {
  id: 'TPL-ACQUISITION',
  title: 'Mandat de Recherche Acquisition',
  dealType: 'ACQUISITION',
  sections: [
    {
      title: '1. Parties',
      body: `Le mandant : {{clientFirstName}} {{clientLastName}}, demeurant au {{clientAddress}}, ci-après dénommé "le Mandant",\n\nConfie au mandataire : {{agentName}}, agence {{agencyName}}, {{agencyAddress}}, ci-après dénommé "le Mandataire",\n\nLe mandat de rechercher un bien immobilier correspondant aux critères définis ci-après.`,
    },
    {
      title: '2. Critères de recherche',
      body: `Type de bien recherché : {{searchPropertyType}}\nZone géographique : {{searchCity}}\nSurface minimale : {{searchSurfaceMin}} m²\nSurface maximale : {{searchSurfaceMax}} m²\nBudget minimum : {{budgetMin}} €\nBudget maximum : {{budgetMax}} €`,
    },
    {
      title: '3. Honoraires',
      body: `Honoraires du Mandataire : {{commissionRate}}% du prix d'acquisition.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      title: '4. Durée du mandat',
      body: `Le présent mandat est consenti pour une durée de {{mandateDuration}} mois à compter de sa signature.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      title: '5. Obligations réciproques',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,
    },
    {
      title: '6. Signatures',
      body: `Fait à {{city}}, le {{signatureDate}}\n\nLe Mandant : {{clientFirstName}} {{clientLastName}}\n\nLe Mandataire : {{agentName}}`,
    },
  ],
};

export const MANDATE_TEMPLATE_LOCATION: MandateTemplate = {
  id: 'TPL-LOCATION',
  title: 'Mandat de Recherche Location',
  dealType: 'LOCATION',
  sections: [
    {
      title: '1. Parties',
      body: `Le mandant : {{clientFirstName}} {{clientLastName}}, demeurant au {{clientAddress}}, ci-après dénommé "le Mandant",\n\nConfie au mandataire : {{agentName}}, agence {{agencyName}}, {{agencyAddress}}, ci-après dénommé "le Mandataire",\n\nLe mandat de rechercher un bien en location correspondant aux critères définis ci-après.`,
    },
    {
      title: '2. Critères de recherche',
      body: `Type de bien recherché : {{searchPropertyType}}\nZone géographique : {{searchCity}}\nSurface minimale : {{searchSurfaceMin}} m²\nSurface maximale : {{searchSurfaceMax}} m²\nLoyer maximum : {{maxRent}} € / mois`,
    },
    {
      title: '3. Honoraires',
      body: `Honoraires du Mandataire conformément au barème en vigueur.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      title: '4. Durée du mandat',
      body: `Le présent mandat est consenti pour une durée de {{mandateDuration}} mois à compter de sa signature.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      title: '5. Signatures',
      body: `Fait à {{city}}, le {{signatureDate}}\n\nLe Mandant : {{clientFirstName}} {{clientLastName}}\n\nLe Mandataire : {{agentName}}`,
    },
  ],
};

export const MANDATE_TEMPLATE_GESTION: MandateTemplate = {
  id: 'TPL-GESTION',
  title: 'Mandat de Gestion Locative',
  dealType: 'GESTION',
  sections: [
    {
      title: '1. Parties',
      body: `Le mandant : {{clientFirstName}} {{clientLastName}}, demeurant au {{clientAddress}}, ci-après dénommé "le Propriétaire",\n\nConfie au mandataire : {{agentName}}, agence {{agencyName}}, {{agencyAddress}}, ci-après dénommé "le Gestionnaire",\n\nLe mandat de gérer le bien immobilier désigné ci-après.`,
    },
    {
      title: '2. Désignation du bien',
      body: `Bien de type {{propertyType}} situé au {{propertyAddress}}, {{propertyCity}}.\nSurface habitable : {{propertySurface}} m².\nLoyer mensuel : {{monthlyRent}} € charges comprises.`,
    },
    {
      title: '3. Mission du gestionnaire',
      body: `Le Gestionnaire est chargé de :\n- La recherche de locataires\n- L'encaissement des loyers\n- La gestion des travaux d'entretien courant\n- La gestion des sinistres\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      title: '4. Honoraires de gestion',
      body: `Honoraires de gestion : {{managementFeeRate}}% HT du loyer encaissé.\nHonoraires de mise en location : {{lettingFeeAmount}} € TTC.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      title: '5. Durée du mandat',
      body: `Le présent mandat est consenti pour une durée de {{mandateDuration}} mois, renouvelable par tacite reconduction.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      title: '6. Signatures',
      body: `Fait à {{city}}, le {{signatureDate}}\n\nLe Propriétaire : {{clientFirstName}} {{clientLastName}}\n\nLe Gestionnaire : {{agentName}}`,
    },
  ],
};

/** Récupère le gabarit correspondant au type d'affaire */
export function getMandateTemplate(dealType: string): MandateTemplate {
  switch (dealType) {
    case 'VENTE': return MANDATE_TEMPLATE_VENTE;
    case 'ACQUISITION': return MANDATE_TEMPLATE_ACQUISITION;
    case 'LOCATION': return MANDATE_TEMPLATE_LOCATION;
    case 'GESTION': return MANDATE_TEMPLATE_GESTION;
    default: return MANDATE_TEMPLATE_VENTE;
  }
}
