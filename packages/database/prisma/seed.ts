import { PrismaClient, ClientStatus, ClientGender, MaritalStatus, DealType, DealStatus, PropertyType, PropertyStatus, EventType, EventStatus, OdjStatus, DocumentType, DocumentStatus, FileFormat, MessageSenderType, MessageChannel, MessageStatus } from '@prisma/client'

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
    const dealVenteAttente = await prisma.deal.create({
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
    const dealVenteMandatEdite = await prisma.deal.create({
        data: {
            clientId: clientPropVente.id,
            propertyId: propStudio.id,
            type: DealType.VENTE,
            status: DealStatus.VENTE_MANDAT_EDITE,
        }
    });

    // Vente . avec mandat signé + annonce publiée + visites effectuées + signature notaire programmée (sur le VENDU)
    const dealVenteAvancee = await prisma.deal.create({
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
    const dealBailAttente = await prisma.deal.create({
        data: {
            clientId: clientBailleur.id,
            propertyId: propT3.id,
            type: DealType.BAIL,
            status: DealStatus.BAIL_ATTENTE_MANDAT,
        }
    });

    // Bail . avec mandat signé
    const dealBailSigne = await prisma.deal.create({
        data: {
            clientId: clientBailleur.id,
            propertyId: propT1.id,
            type: DealType.BAIL,
            status: DealStatus.BAIL_MANDAT_SIGNE,
        }
    });

    // Acquisition . Recherche de bien
    const dealAcquisition = await prisma.deal.create({
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
    const dealLocation = await prisma.deal.create({
        data: {
            clientId: clientLocataire.id,
            type: DealType.LOCATION,
            status: DealStatus.LOCATION_RECHERCHE,
        }
    });

    // CREATE EVENTS (Visites)
    console.log('Creating Visit Events...')

    // Visite 1 — Programmée, ODJ en cours d'édition
    await prisma.event.create({
        data: {
            type: EventType.VISITE,
            title: 'Visite T4 Toulouse - Sophie Durand',
            eventDate: new Date('2026-04-28T10:00:00'),
            status: EventStatus.PROGRAMME,
            agentId: agentUser.id,
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            propertyId: propT4.id,
            odjContent: 'Bienvenue pour la visite du T4 Place du Capitole.\n\nPoints à aborder :\n- Superficie et distribution des pièces\n- État général et travaux éventuels\n- Charges de copropriété',
            odjStatus: OdjStatus.EDITE,
        }
    });

    // Visite 2 — Confirmée, ODJ envoyé
    await prisma.event.create({
        data: {
            type: EventType.VISITE,
            title: 'Visite Studio Paris - Sophie Durand',
            eventDate: new Date('2026-04-25T14:30:00'),
            status: EventStatus.CONFIRME,
            agentId: agentUser.id,
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            propertyId: propStudio.id,
            odjContent: 'Visite du studio Rue de la Pompe.\n\nÀ vérifier : luminosité, bruit, état cuisine/salle de bain.',
            odjStatus: OdjStatus.ENVOYE,
            odjSentAt: new Date('2026-04-23T12:00:00'),
        }
    });

    // Visite 3 — Terminée, avec guide de visite rempli
    const visiteTerminee = await prisma.event.create({
        data: {
            type: EventType.VISITE,
            title: 'Visite Maison Bordeaux - Sophie Durand',
            eventDate: new Date('2026-04-20T09:00:00'),
            status: EventStatus.TERMINE,
            agentId: agentUser.id,
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            propertyId: propMaison.id,
            odjContent: 'Visite de la maison de ville.\n\nPoints clés : jardin, garage, proximité écoles.',
            odjStatus: OdjStatus.ENVOYE,
            odjSentAt: new Date('2026-04-18T16:00:00'),
        }
    });

    await prisma.visitGuideResponse.create({
        data: {
            eventId: visiteTerminee.id,
            clientId: clientAcquereur.id,
            responses: {
                criterion_1: 'OUI',
                criterion_2: 'OUI',
                criterion_3: 'PEUT_ETRE',
                criterion_4: 'NON',
                criterion_5: 'PEUT_ETRE',
            },
            commentaire: 'Belle maison, mais le quartier est un peu bruyant le matin. À revoir.',
            submittedAt: new Date('2026-04-20T10:30:00'),
        }
    });

    // ══════════════════════════════════════════════════════════════════════════
    // DOCUMENTS
    // ══════════════════════════════════════════════════════════════════════════
    console.log('Creating Documents...')

    // --- Documents pour deal VENTE (attente mandat) ---
    await prisma.document.create({
        data: {
            dealId: dealVenteAttente.id,
            clientId: clientPropVente.id,
            propertyId: propT4.id,
            uploadedById: agentUser.id,
            type: DocumentType.DPE,
            title: 'Diagnostic de Performance Énergétique — T4 Toulouse',
            description: 'DPE réalisé le 15/03/2026 par DiagExpert',
            url: '/documents/dpe-t4-toulouse.pdf',
            fileName: 'dpe-t4-toulouse.pdf',
            fileSizeKb: 1240,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.RECU,
            isValid: true,
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealVenteAttente.id,
            clientId: clientPropVente.id,
            propertyId: propT4.id,
            uploadedById: agentUser.id,
            type: DocumentType.ACTE_PROPRIETE,
            title: 'Titre de propriété — T4 Toulouse',
            description: 'Acte notarié original',
            url: '/documents/titre-propriete-t4-toulouse.pdf',
            fileName: 'titre-propriete-t4-toulouse.pdf',
            fileSizeKb: 3200,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
        }
    });

    // --- Documents pour deal VENTE (mandat édité) ---
    await prisma.document.create({
        data: {
            dealId: dealVenteMandatEdite.id,
            clientId: clientPropVente.id,
            propertyId: propStudio.id,
            uploadedById: agentUser.id,
            type: DocumentType.MANDAT_VENTE,
            title: 'Mandat de vente — Studio Paris',
            description: 'Mandat exclusif en cours de rédaction',
            url: '/documents/mandat-vente-studio-paris.pdf',
            fileName: 'mandat-vente-studio-paris.pdf',
            fileSizeKb: 890,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.EN_ATTENTE,
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealVenteMandatEdite.id,
            clientId: clientPropVente.id,
            propertyId: propStudio.id,
            uploadedById: agentUser.id,
            type: DocumentType.CNI,
            title: 'CNI — Marie Curie',
            description: 'Carte nationale d\'identité du propriétaire',
            url: '/documents/cni-marie-curie.jpg',
            fileName: 'cni-marie-curie.jpg',
            fileSizeKb: 520,
            fileFormat: FileFormat.JPG,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
            expiryDate: new Date('2029-06-15'),
        }
    });

    // --- Documents pour deal VENTE avancée (compromis, acte notarié) ---
    await prisma.document.create({
        data: {
            dealId: dealVenteAvancee.id,
            clientId: clientPropVente.id,
            propertyId: propMaison.id,
            uploadedById: agentUser.id,
            type: DocumentType.COMPROMIS,
            title: 'Compromis de vente — Maison Bordeaux',
            description: 'Compromis signé le 10/04/2026',
            url: '/documents/compromis-maison-bordeaux.pdf',
            fileName: 'compromis-maison-bordeaux.pdf',
            fileSizeKb: 4500,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
            signedAt: new Date('2026-04-10T14:00:00'),
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealVenteAvancee.id,
            clientId: clientPropVente.id,
            propertyId: propMaison.id,
            uploadedById: agentUser.id,
            type: DocumentType.MANDAT_VENTE,
            title: 'Mandat de vente exclusif — Maison Bordeaux',
            description: 'Mandat exclusif signé',
            url: '/documents/mandat-vente-maison-bordeaux.pdf',
            fileName: 'mandat-vente-maison-bordeaux.pdf',
            fileSizeKb: 1100,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
            signedAt: new Date('2026-02-15T10:00:00'),
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealVenteAvancee.id,
            clientId: clientPropVente.id,
            propertyId: propMaison.id,
            uploadedById: agentUser.id,
            type: DocumentType.ANNONCE,
            title: 'Annonce immobilière — Maison Bordeaux',
            description: 'Annonce publiée sur SeLoger et LeBonCoin',
            url: '/documents/annonce-maison-bordeaux.pdf',
            fileName: 'annonce-maison-bordeaux.pdf',
            fileSizeKb: 780,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
        }
    });

    // --- Documents pour deal BAIL (attente mandat gestion) ---
    await prisma.document.create({
        data: {
            dealId: dealBailAttente.id,
            clientId: clientBailleur.id,
            propertyId: propT3.id,
            uploadedById: agentUser.id,
            type: DocumentType.DPE,
            title: 'DPE — T3 Lille',
            description: 'Diagnostic énergétique avant mise en location',
            url: '/documents/dpe-t3-lille.pdf',
            fileName: 'dpe-t3-lille.pdf',
            fileSizeKb: 1150,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.RECU,
            isValid: true,
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealBailAttente.id,
            clientId: clientBailleur.id,
            propertyId: propT3.id,
            uploadedById: agentUser.id,
            type: DocumentType.MANDAT_GESTION,
            title: 'Mandat de gestion — T3 Lille',
            description: 'Projet de mandat de gestion locative',
            url: '/documents/mandat-gestion-t3-lille.pdf',
            fileName: 'mandat-gestion-t3-lille.pdf',
            fileSizeKb: 950,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.EN_ATTENTE,
        }
    });

    // --- Documents pour deal BAIL (mandat signé) ---
    await prisma.document.create({
        data: {
            dealId: dealBailSigne.id,
            clientId: clientBailleur.id,
            propertyId: propT1.id,
            uploadedById: agentUser.id,
            type: DocumentType.BAIL,
            title: 'Bail meublé — T1 Strasbourg',
            description: 'Bail signé avec le locataire',
            url: '/documents/bail-t1-strasbourg.pdf',
            fileName: 'bail-t1-strasbourg.pdf',
            fileSizeKb: 2100,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
            signedAt: new Date('2026-03-01T11:00:00'),
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealBailSigne.id,
            clientId: clientBailleur.id,
            propertyId: propT1.id,
            uploadedById: agentUser.id,
            type: DocumentType.COMPTE_RENDU,
            title: 'État des lieux d\'entrée — T1 Strasbourg',
            description: 'État des lieux réalisé à l\'entrée du locataire',
            url: '/documents/edl-entree-t1-strasbourg.pdf',
            fileName: 'edl-entree-t1-strasbourg.pdf',
            fileSizeKb: 3400,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
        }
    });

    // --- Documents pour deal ACQUISITION ---
    await prisma.document.create({
        data: {
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            uploadedById: agentUser.id,
            type: DocumentType.ATTESTATION_FINANCEMENT,
            title: 'Attestation de financement — Sophie Durand',
            description: 'Attestation bancaire Crédit Mutuel',
            url: '/documents/attestation-financement-durand.pdf',
            fileName: 'attestation-financement-durand.pdf',
            fileSizeKb: 640,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
            expiryDate: new Date('2026-07-30'),
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            uploadedById: agentUser.id,
            type: DocumentType.FICHE_PAIE,
            title: 'Fiches de paie — Sophie Durand',
            description: 'Derniers bulletins de salaire (3 mois)',
            url: '/documents/fiches-paie-durand.pdf',
            fileName: 'fiches-paie-durand.pdf',
            fileSizeKb: 1800,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            uploadedById: agentUser.id,
            type: DocumentType.AVIS_IMPOSITION,
            title: 'Avis d\'imposition 2025 — Sophie Durand',
            description: 'Dernier avis d\'imposition',
            url: '/documents/avis-imposition-durand.pdf',
            fileName: 'avis-imposition-durand.pdf',
            fileSizeKb: 920,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.RECU,
        }
    });

    // --- Documents pour deal LOCATION ---
    await prisma.document.create({
        data: {
            dealId: dealLocation.id,
            clientId: clientLocataire.id,
            uploadedById: agentUser.id,
            type: DocumentType.CNI,
            title: 'CNI — Lucas Petit',
            description: 'Pièce d\'identité du candidat locataire',
            url: '/documents/cni-lucas-petit.jpg',
            fileName: 'cni-lucas-petit.jpg',
            fileSizeKb: 480,
            fileFormat: FileFormat.JPG,
            documentStatus: DocumentStatus.VERIFIE,
            isValid: true,
            expiryDate: new Date('2031-11-20'),
        }
    });

    await prisma.document.create({
        data: {
            dealId: dealLocation.id,
            clientId: clientLocataire.id,
            uploadedById: agentUser.id,
            type: DocumentType.FICHE_PAIE,
            title: 'Fiches de paie — Lucas Petit',
            description: 'Bulletins de salaire des 3 derniers mois',
            url: '/documents/fiches-paie-petit.pdf',
            fileName: 'fiches-paie-petit.pdf',
            fileSizeKb: 1650,
            fileFormat: FileFormat.PDF,
            documentStatus: DocumentStatus.RECU,
        }
    });

    // ══════════════════════════════════════════════════════════════════════════
    // MESSAGES
    // ══════════════════════════════════════════════════════════════════════════
    console.log('Creating Messages...')

    // --- Messages pour deal VENTE (attente mandat) ---
    const msgVente1 = await prisma.message.create({
        data: {
            dealId: dealVenteAttente.id,
            clientId: clientPropVente.id,
            agentId: agentUser.id,
            subject: 'Mise en vente de votre T4 à Toulouse',
            body: 'Bonjour Marie, suite à notre estimation, je vous propose de signer un mandat de vente exclusif pour votre T4 Place du Capitole. Le prix recommandé est de 360 000 €. Souhaitez-vous qu\'on en discute cette semaine ?',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-15T09:30:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealVenteAttente.id,
            clientId: clientPropVente.id,
            agentId: agentUser.id,
            parentMessageId: msgVente1.id,
            subject: 'Re: Mise en vente de votre T4 à Toulouse',
            body: 'Bonjour, merci pour l\'estimation. Le prix me semble correct. Je suis disponible jeudi après-midi pour en discuter. Pourriez-vous m\'envoyer le projet de mandat en avance ?',
            senderType: MessageSenderType.CLIENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.LU,
            messageDate: new Date('2026-04-16T14:15:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealVenteAttente.id,
            clientId: clientPropVente.id,
            agentId: agentUser.id,
            parentMessageId: msgVente1.id,
            subject: 'Re: Mise en vente de votre T4 à Toulouse',
            body: 'Parfait Marie ! Je vous envoie le projet de mandat d\'ici demain. RDV jeudi à 14h à l\'agence. Pensez à apporter votre pièce d\'identité et le titre de propriété.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-16T16:00:00'),
        }
    });

    // --- Messages pour deal VENTE avancée ---
    const msgVenteAv1 = await prisma.message.create({
        data: {
            dealId: dealVenteAvancee.id,
            clientId: clientPropVente.id,
            agentId: agentUser.id,
            subject: 'Offre d\'achat reçue — Maison Bordeaux',
            body: 'Bonne nouvelle Marie ! Nous avons reçu une offre d\'achat à 460 000 € pour la maison de Bordeaux. L\'acquéreur dispose d\'un financement confirmé. Je vous recommande d\'accepter cette offre qui est très proche du prix affiché.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.LU,
            messageDate: new Date('2026-04-05T11:00:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealVenteAvancee.id,
            clientId: clientPropVente.id,
            agentId: agentUser.id,
            parentMessageId: msgVenteAv1.id,
            subject: 'Re: Offre d\'achat reçue — Maison Bordeaux',
            body: 'Merci pour cette bonne nouvelle ! J\'accepte l\'offre à 460 000 €. Quelles sont les prochaines étapes ?',
            senderType: MessageSenderType.CLIENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.LU,
            messageDate: new Date('2026-04-05T18:30:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealVenteAvancee.id,
            clientId: clientPropVente.id,
            agentId: agentUser.id,
            parentMessageId: msgVenteAv1.id,
            subject: 'Re: Offre d\'achat reçue — Maison Bordeaux',
            body: 'Super ! Je confirme l\'acceptation auprès de l\'acquéreur. Prochaine étape : signature du compromis chez le notaire. Je vous recontacte dès que j\'ai une date.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-06T09:00:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealVenteAvancee.id,
            clientId: clientPropVente.id,
            agentId: agentUser.id,
            subject: 'Rappel RDV notaire — Compromis Maison Bordeaux',
            body: 'Bonjour Marie, je vous confirme le RDV chez Maître Dubois le 10 avril à 14h pour la signature du compromis. Merci de prévoir votre pièce d\'identité.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.SMS,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-08T10:00:00'),
        }
    });

    // --- Messages pour deal BAIL (attente mandat gestion) ---
    const msgBail1 = await prisma.message.create({
        data: {
            dealId: dealBailAttente.id,
            clientId: clientBailleur.id,
            agentId: agentUser.id,
            subject: 'Proposition de gestion locative — T3 Lille',
            body: 'Bonjour Paul, suite à notre échange, je vous propose un mandat de gestion locative pour votre T3 Boulevard Victor Hugo. Nos honoraires de gestion s\'élèvent à 7% HT des loyers encaissés. Souhaitez-vous que je vous envoie le projet de mandat ?',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-10T10:00:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealBailAttente.id,
            clientId: clientBailleur.id,
            agentId: agentUser.id,
            parentMessageId: msgBail1.id,
            subject: 'Re: Proposition de gestion locative — T3 Lille',
            body: 'Bonjour, oui envoyez-moi le mandat. J\'aimerais aussi savoir quels diagnostics sont nécessaires avant la mise en location.',
            senderType: MessageSenderType.CLIENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.LU,
            messageDate: new Date('2026-04-11T08:45:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealBailAttente.id,
            clientId: clientBailleur.id,
            agentId: agentUser.id,
            parentMessageId: msgBail1.id,
            subject: 'Re: Proposition de gestion locative — T3 Lille',
            body: 'Paul, je vous envoie le projet de mandat en PJ. Pour les diagnostics, il vous faudra : DPE, diagnostic électricité, diagnostic gaz, ERNMT et diagnostic plomb (si immeuble avant 1949). Je peux vous recommander un diagnostiqueur si besoin.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-11T11:30:00'),
        }
    });

    // --- Messages pour deal BAIL (mandat signé) ---
    await prisma.message.create({
        data: {
            dealId: dealBailSigne.id,
            clientId: clientBailleur.id,
            agentId: agentUser.id,
            subject: 'Compte-rendu mensuel — T1 Strasbourg',
            body: 'Bonjour Paul, voici le compte-rendu de gestion du mois de mars pour votre T1 à Strasbourg. Le loyer de 650 € a bien été encaissé. Aucun incident à signaler. Votre virement sera effectué le 5 avril.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-01T09:00:00'),
        }
    });

    // --- Messages pour deal ACQUISITION ---
    const msgAcq1 = await prisma.message.create({
        data: {
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            agentId: agentUser.id,
            subject: 'Biens correspondant à vos critères',
            body: 'Bonjour Sophie, j\'ai identifié 3 biens qui correspondent à vos critères de recherche. Je vous propose de visiter le T4 Place du Capitole à Toulouse et le Studio Rue de la Pompe à Paris. Quelles sont vos disponibilités cette semaine ?',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.LU,
            messageDate: new Date('2026-04-18T10:00:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            agentId: agentUser.id,
            parentMessageId: msgAcq1.id,
            subject: 'Re: Biens correspondant à vos critères',
            body: 'Bonjour, merci ! Le T4 à Toulouse m\'intéresse beaucoup. Je suis disponible lundi 28 avril le matin. Pour le studio, je préfère vendredi 25 en début d\'après-midi si possible.',
            senderType: MessageSenderType.CLIENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.LU,
            messageDate: new Date('2026-04-18T19:20:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            agentId: agentUser.id,
            parentMessageId: msgAcq1.id,
            subject: 'Re: Biens correspondant à vos critères',
            body: 'Parfait Sophie ! Je vous confirme : visite du studio vendredi 25 à 14h30, et visite du T4 lundi 28 à 10h. Je vous envoie les ordres du jour par email.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-19T08:30:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealAcquisition.id,
            clientId: clientAcquereur.id,
            agentId: agentUser.id,
            subject: 'Retour visite Maison Bordeaux',
            body: 'Sophie, suite à votre visite de la maison de Bordeaux, qu\'en avez-vous pensé ? Je vois dans votre guide de visite quelques réserves sur le bruit. Souhaitez-vous organiser une seconde visite à un autre moment de la journée ?',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.ENVOYE,
            messageDate: new Date('2026-04-21T09:00:00'),
        }
    });

    // --- Messages pour deal LOCATION ---
    const msgLoc1 = await prisma.message.create({
        data: {
            dealId: dealLocation.id,
            clientId: clientLocataire.id,
            agentId: agentUser.id,
            subject: 'Votre recherche de location',
            body: 'Bonjour Lucas, j\'ai bien pris note de vos critères de recherche. Budget max 800 €/mois, T2 minimum, idéalement proche transports. Je reviens vers vous dès qu\'un bien correspondant se libère.',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-12T11:00:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealLocation.id,
            clientId: clientLocataire.id,
            agentId: agentUser.id,
            parentMessageId: msgLoc1.id,
            subject: 'Re: Votre recherche de location',
            body: 'Merci beaucoup. J\'ai déjà transmis mes fiches de paie et ma CNI. Est-ce qu\'il manque des documents pour constituer mon dossier ?',
            senderType: MessageSenderType.CLIENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.LU,
            messageDate: new Date('2026-04-13T17:45:00'),
        }
    });

    await prisma.message.create({
        data: {
            dealId: dealLocation.id,
            clientId: clientLocataire.id,
            agentId: agentUser.id,
            parentMessageId: msgLoc1.id,
            subject: 'Re: Votre recherche de location',
            body: 'Lucas, votre dossier est presque complet. Il me manque uniquement votre dernier avis d\'imposition. Pourriez-vous me l\'envoyer par email ?',
            senderType: MessageSenderType.AGENT,
            channel: MessageChannel.EMAIL,
            status: MessageStatus.DELIVRE,
            messageDate: new Date('2026-04-14T09:15:00'),
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
