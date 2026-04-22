// checkMandateEligibility.ts
// Checks whether all required fields are present for automatic mandate generation

export type EligibilityEntity = 'organization' | 'client' | 'property' | 'deal';

export interface MissingField {
  entity: EligibilityEntity;
  field: string;
  label: string;
  section: string;
  type: 'text' | 'number' | 'date' | 'select';
}

export interface EligibilityResult {
  isEligible: boolean;
  missingFields: MissingField[];
  filledCount: number;
  totalCount: number;
}

interface OrgData {
  name: string | null;
  address: string | null;
  siret: string | null;
  rcpInsuranceRef: string | null;
  rcpExpiryDate: string | null;
  carteTNumber: string | null;
  carteGNumber: string | null;
}

interface ClientData {
  firstName: string | null;
  lastName: string | null;
  address: string | null;
}

interface PropertyData {
  type: string | null;
  address: string | null;
  addressCity: string | null;
  livingAreaSqm: number | null;
  numberOfRooms: number | null;
  desiredSellingPrice: number | null;
}

interface DealData {
  type: string;
  clientId: string | null;
  propertyId: string | null;
  searchCity: string | null;
  searchPropertyType: string | null;
  searchSurfaceMin: number | null;
  searchSurfaceMax: number | null;
  acquisitionMinBudget: number | null;
  acquisitionMaxBudget: number | null;
  locationMinBudget: number | null;
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

function check(
  allChecks: { field: MissingField; filled: boolean }[],
  filled: boolean,
  field: MissingField,
): void {
  allChecks.push({ field, filled });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function checkMandateEligibility(
  deal: DealData,
  client: ClientData | null,
  property: PropertyData | null,
  organization: OrgData | null,
): EligibilityResult {
  const allChecks: { field: MissingField; filled: boolean }[] = [];

  // ---- Organization checks (common) ----

  check(allChecks, !!organization?.name, {
    entity: 'organization',
    field: 'name',
    label: 'Nom agence',
    section: 'Agence',
    type: 'text',
  });

  check(allChecks, !!organization?.address, {
    entity: 'organization',
    field: 'address',
    label: 'Adresse agence',
    section: 'Agence',
    type: 'text',
  });

  check(allChecks, !!organization?.siret, {
    entity: 'organization',
    field: 'siret',
    label: 'SIRET',
    section: 'Agence',
    type: 'text',
  });

  check(allChecks, !!organization?.rcpInsuranceRef, {
    entity: 'organization',
    field: 'rcpInsuranceRef',
    label: 'Assurance RCP',
    section: 'Agence',
    type: 'text',
  });

  check(allChecks, !!organization?.rcpExpiryDate, {
    entity: 'organization',
    field: 'rcpExpiryDate',
    label: 'Expiration RCP',
    section: 'Agence',
    type: 'date',
  });

  // Carte pro: GESTION → carteG, else → carteT
  if (deal.type === 'GESTION') {
    check(allChecks, !!organization?.carteGNumber, {
      entity: 'organization',
      field: 'carteGNumber',
      label: 'Carte G',
      section: 'Agence',
      type: 'text',
    });
  } else {
    check(allChecks, !!organization?.carteTNumber, {
      entity: 'organization',
      field: 'carteTNumber',
      label: 'Carte T',
      section: 'Agence',
      type: 'text',
    });
  }

  // ---- Client checks (common) ----

  if (!client) {
    check(allChecks, !!deal.clientId, {
      entity: 'deal',
      field: 'clientId',
      label: 'Client lié',
      section: 'Client',
      type: 'text',
    });
  } else {
    check(allChecks, !!client.firstName, {
      entity: 'client',
      field: 'firstName',
      label: 'Prénom client',
      section: 'Client',
      type: 'text',
    });

    check(allChecks, !!client.lastName, {
      entity: 'client',
      field: 'lastName',
      label: 'Nom client',
      section: 'Client',
      type: 'text',
    });

    check(allChecks, !!client.address, {
      entity: 'client',
      field: 'address',
      label: 'Adresse client',
      section: 'Client',
      type: 'text',
    });
  }

  // ---- Type-specific checks ----

  switch (deal.type) {
    case 'VENTE': {
      if (!property) {
        check(allChecks, !!deal.propertyId, {
          entity: 'deal',
          field: 'propertyId',
          label: 'Bien rattaché',
          section: 'Bien',
          type: 'text',
        });
      } else {
        check(allChecks, !!property.type, {
          entity: 'property',
          field: 'type',
          label: 'Type de bien',
          section: 'Bien',
          type: 'select',
        });

        check(allChecks, !!property.address, {
          entity: 'property',
          field: 'address',
          label: 'Adresse bien',
          section: 'Bien',
          type: 'text',
        });

        check(allChecks, !!property.addressCity, {
          entity: 'property',
          field: 'addressCity',
          label: 'Ville',
          section: 'Bien',
          type: 'text',
        });

        check(allChecks, property?.livingAreaSqm != null, {
          entity: 'property',
          field: 'livingAreaSqm',
          label: 'Surface habitable',
          section: 'Bien',
          type: 'number',
        });

        check(allChecks, property?.numberOfRooms != null, {
          entity: 'property',
          field: 'numberOfRooms',
          label: 'Nombre de pièces',
          section: 'Bien',
          type: 'number',
        });

        check(allChecks, property?.desiredSellingPrice != null, {
          entity: 'property',
          field: 'desiredSellingPrice',
          label: 'Prix de vente',
          section: 'Bien',
          type: 'number',
        });
      }
      break;
    }

    case 'GESTION': {
      if (!property) {
        check(allChecks, !!deal.propertyId, {
          entity: 'deal',
          field: 'propertyId',
          label: 'Bien rattaché',
          section: 'Bien',
          type: 'text',
        });
      } else {
        check(allChecks, !!property.type, {
          entity: 'property',
          field: 'type',
          label: 'Type de bien',
          section: 'Bien',
          type: 'select',
        });

        check(allChecks, !!property.address, {
          entity: 'property',
          field: 'address',
          label: 'Adresse bien',
          section: 'Bien',
          type: 'text',
        });

        check(allChecks, !!property.addressCity, {
          entity: 'property',
          field: 'addressCity',
          label: 'Ville',
          section: 'Bien',
          type: 'text',
        });

        check(allChecks, property?.livingAreaSqm != null, {
          entity: 'property',
          field: 'livingAreaSqm',
          label: 'Surface habitable',
          section: 'Bien',
          type: 'number',
        });
      }
      break;
    }

    case 'ACQUISITION': {
      check(allChecks, !!deal.searchCity, {
        entity: 'deal',
        field: 'searchCity',
        label: 'Ville recherchée',
        section: 'Recherche',
        type: 'text',
      });

      check(allChecks, !!deal.searchPropertyType, {
        entity: 'deal',
        field: 'searchPropertyType',
        label: 'Type de bien',
        section: 'Recherche',
        type: 'text',
      });

      check(allChecks, deal.searchSurfaceMin != null, {
        entity: 'deal',
        field: 'searchSurfaceMin',
        label: 'Surface min',
        section: 'Recherche',
        type: 'number',
      });

      check(allChecks, deal.searchSurfaceMax != null, {
        entity: 'deal',
        field: 'searchSurfaceMax',
        label: 'Surface max',
        section: 'Recherche',
        type: 'number',
      });

      check(allChecks, deal.acquisitionMinBudget != null, {
        entity: 'deal',
        field: 'acquisitionMinBudget',
        label: 'Budget min',
        section: 'Recherche',
        type: 'number',
      });

      check(allChecks, deal.acquisitionMaxBudget != null, {
        entity: 'deal',
        field: 'acquisitionMaxBudget',
        label: 'Budget max',
        section: 'Recherche',
        type: 'number',
      });
      break;
    }

    case 'LOCATION': {
      check(allChecks, !!deal.searchCity, {
        entity: 'deal',
        field: 'searchCity',
        label: 'Ville recherchée',
        section: 'Recherche',
        type: 'text',
      });

      check(allChecks, !!deal.searchPropertyType, {
        entity: 'deal',
        field: 'searchPropertyType',
        label: 'Type de bien',
        section: 'Recherche',
        type: 'text',
      });

      check(allChecks, deal.searchSurfaceMin != null, {
        entity: 'deal',
        field: 'searchSurfaceMin',
        label: 'Surface min',
        section: 'Recherche',
        type: 'number',
      });

      check(allChecks, deal.searchSurfaceMax != null, {
        entity: 'deal',
        field: 'searchSurfaceMax',
        label: 'Surface max',
        section: 'Recherche',
        type: 'number',
      });

      check(allChecks, deal.locationMinBudget != null, {
        entity: 'deal',
        field: 'locationMinBudget',
        label: 'Budget location',
        section: 'Recherche',
        type: 'number',
      });
      break;
    }
  }

  // ---- Compute result ----

  const missingFields = allChecks.filter((c) => !c.filled).map((c) => c.field);
  const filledCount = allChecks.filter((c) => c.filled).length;
  const totalCount = allChecks.length;

  return {
    isEligible: missingFields.length === 0,
    missingFields,
    filledCount,
    totalCount,
  };
}
