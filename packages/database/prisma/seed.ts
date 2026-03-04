import { PrismaClient, ClientStatus, ClientGender, MaritalStatus, DealType, DealStatus, PropertyType, PropertyStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Starting seed...')

    // CREATE USERS (Agent & Owner Accounts)
    const agentUser = await prisma.user.upsert({
        where: { email: 'agent@realestate.com' },
        update: {},
        create: {
            email: 'agent@realestate.com',
            name: 'Agent Principal',
            role: 'AGENT',
        },
    });

    const ownerUser = await prisma.user.upsert({
        where: { email: 'owner@realestate.com' },
        update: {},
        create: {
            email: 'owner@realestate.com',
            name: 'Propriétaire Compte',
            role: 'OWNER',
        },
    });

    // CREATE CLIENTS
    console.log('Creating Clients...')

    // 1. Client . Propriétaire . Inactif
    const clientPropInactif = await prisma.client.create({
        data: {
            firstName: 'Jean',
            lastName: 'Dupont',
            status: [ClientStatus.PROPRIETAIRE],
            gender: ClientGender.HOMME,
            primaryEmail: 'jean.dupont.inactif@example.com',
            isActive: false,
        }
    });

    // 2. Client . Propriétaire . Sous mandat de vente
    const clientPropVente = await prisma.client.create({
        data: {
            userId: ownerUser.id, // linked to the app user to view dashboard
            firstName: 'Marie',
            lastName: 'Curie',
            status: [ClientStatus.PROPRIETAIRE],
            gender: ClientGender.FEMME,
            primaryEmail: 'marie.curie.vente@example.com',
            isActive: true,
            incomeBracket: '80 000 à 120 000 euros Brut / an',
        }
    });

    // 3. Client . Propriétaire . Sous mandat de gestion (bailleur)
    const clientBailleur = await prisma.client.create({
        data: {
            firstName: 'Paul',
            lastName: 'Martin',
            status: [ClientStatus.BAILLEUR],
            gender: ClientGender.HOMME,
            primaryEmail: 'paul.martin.bailleur@example.com',
            isActive: true,
        }
    });

    // 4. Client . Acquéreur . En recherche d'un bien à acheter
    const clientAcquereur = await prisma.client.create({
        data: {
            firstName: 'Sophie',
            lastName: 'Durand',
            status: [ClientStatus.ACQUEREUR],
            gender: ClientGender.FEMME,
            primaryEmail: 'sophie.durand.achat@example.com',
            isActive: true,
        }
    });

    // 5. Client . Locataire . En recherche d'un bien à louer
    const clientLocataire = await prisma.client.create({
        data: {
            firstName: 'Lucas',
            lastName: 'Petit',
            status: [ClientStatus.LOCATAIRE],
            gender: ClientGender.HOMME,
            primaryEmail: 'lucas.petit.locataire@example.com',
            isActive: true,
        }
    });

    // CREATE PROPERTIES
    console.log('Creating Properties...')

    const propStudio = await prisma.property.create({
        data: {
            address: '10 Rue de la Pompe, Paris',
            type: PropertyType.STUDIO,
            status: PropertyStatus.A_VENDRE,
            ownerId: ownerUser.id,
            clientId: clientPropVente.id
        }
    });

    const propT2 = await prisma.property.create({
        data: {
            address: '25 Avenue Jean Jaurès, Lyon',
            type: PropertyType.T2,
            status: PropertyStatus.OFF_MARKET,
            clientId: clientPropInactif.id
        }
    });

    const propT3 = await prisma.property.create({
        data: {
            address: '14 Boulevard Victor Hugo, Lille',
            type: PropertyType.T3,
            status: PropertyStatus.A_LOUER,
            clientId: clientBailleur.id
        }
    });

    const propMaison = await prisma.property.create({
        data: {
            address: '5 Impasse des Fauvettes, Bordeaux',
            type: PropertyType.MAISON_DE_VILLE,
            status: PropertyStatus.VENDU,
            ownerId: ownerUser.id,
            clientId: clientPropVente.id
        }
    });

    const propT4 = await prisma.property.create({
        data: {
            address: '8 Place du Capitole, Toulouse',
            type: PropertyType.T4,
            status: PropertyStatus.A_VENDRE,
            ownerId: ownerUser.id,
            clientId: clientPropVente.id
        }
    });

    const propT1 = await prisma.property.create({
        data: {
            address: '12 Rue Longue, Strasbourg',
            type: PropertyType.T1,
            status: PropertyStatus.LOUER,
            clientId: clientBailleur.id
        }
    });

    // CREATE DEALS
    console.log('Creating Deals & Analytics...')

    // Vente . en attente de mandat de vente
    await prisma.deal.create({
        data: {
            clientId: clientPropVente.id,
            propertyId: propT4.id,
            type: DealType.VENTE,
            status: DealStatus.VENTE_ATTENTE_MANDAT,
            saleAnalyses: {
                create: [
                    { propertyId: propT4.id, estimatedValue: 350000, targetPrice: 360000, notes: 'Quartier très prisé' }
                ]
            }
        }
    });

    // Vente . avec mandat édité
    await prisma.deal.create({
        data: {
            clientId: clientPropVente.id,
            propertyId: propStudio.id,
            type: DealType.VENTE,
            status: DealStatus.VENTE_MANDAT_EDITE,
        }
    });

    // Vente . avec mandat signé + annonce publiée + visites effectuées + signature notaire programmée (sur le VENDU)
    await prisma.deal.create({
        data: {
            clientId: clientPropVente.id,
            propertyId: propMaison.id,
            type: DealType.VENTE,
            status: DealStatus.VENTE_MANDAT_SIGNE_ANNONCE_PUBLIEE_VISITES_EFFECTUEES_NOTAIRE,
            saleAnalyses: {
                create: [
                    { propertyId: propMaison.id, estimatedValue: 450000, targetPrice: 470000, finalPrice: 460000, notes: 'Maison familiale vendue au prix marché' }
                ]
            }
        }
    });

    // Bail . en attente de mandat de gestion
    await prisma.deal.create({
        data: {
            clientId: clientBailleur.id,
            propertyId: propT3.id,
            type: DealType.BAIL,
            status: DealStatus.BAIL_ATTENTE_MANDAT,
        }
    });

    // Bail . avec mandat signé
    await prisma.deal.create({
        data: {
            clientId: clientBailleur.id,
            propertyId: propT1.id,
            type: DealType.BAIL,
            status: DealStatus.BAIL_MANDAT_SIGNE,
        }
    });

    // Acquisition . Recherche de bien
    await prisma.deal.create({
        data: {
            clientId: clientAcquereur.id,
            type: DealType.ACQUISITION,
            status: DealStatus.ACQUISITION_RECHERCHE,
            loanAnalyses: {
                create: [
                    { clientId: clientAcquereur.id, maxLoanAmount: 250000, interestRate: 3.5, durationMonths: 300, monthlyPayment: 1250, bankName: 'Crédit Mutuel', status: 'APPROVED' }
                ]
            }
        }
    });

    // Location . Recherche de bien
    await prisma.deal.create({
        data: {
            clientId: clientLocataire.id,
            type: DealType.LOCATION,
            status: DealStatus.LOCATION_RECHERCHE,
        }
    });

    console.log('Seed completed successfully.')
}

main()
    .catch((e) => {
        console.error('Error during seeding:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
