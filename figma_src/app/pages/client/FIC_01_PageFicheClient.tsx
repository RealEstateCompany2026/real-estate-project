"use client";

import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  GraphCourbe,
  AppBarClientAncres,
  AppBarFicheClient,
  AppBarDetail,
  AppBarEventQuinte,
  Sheet,
  LogHistory
} from "../../components/organisms";
import { Divider } from "../../components/atoms/Divider";
import { ListCarnet } from "../../components/molecules/ListCarnet";
import { ListAffaire } from "../../components/components/ListAffaire";
import { ListBien } from "../../components/components/ListBien";
import { FileUpload } from "../../components/molecules/FileUpload";
import { MessageReceived } from "../../components/molecules/MessageReceived";
import { MessageSent } from "../../components/molecules/MessageSent";
import { Button } from "../../components/atoms/Button";
import { Badge } from "../../components/atoms/Badge";
import { ChipDate, Chip } from "../../components/atoms/Chip";
import { KpiIndicator } from "../../components/atoms/KpiIndicator";
import { Calendar, Pencil, AlertTriangle, Plus, User, MessageCircle, ListChecks, Database, ScrollText, Upload, ChevronDown } from "lucide-react";
import { CollapsibleSection } from "../../components/molecules/CollapsibleSection";
import { AiSuggestion } from "../../components/atoms/AiSuggestion";
import { SheetEditProfilClient, ProfilClientData } from "./SheetEditProfilClient";

export const FIC_01_PageFicheClient: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [showIaSuggestion] = useState(true);
  const [isEditProfilOpen, setIsEditProfilOpen] = useState(false);
  const [isActiviteSheetOpen, setIsActiviteSheetOpen] = useState(false);
  const [isAddDocumentSheetOpen, setIsAddDocumentSheetOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isMessagerieSheetOpen, setIsMessagerieSheetOpen] = useState(false);

  // Handler pour la navigation par ancres
  const handleAnchorClick = (anchorId: string) => {
    const element = document.getElementById(anchorId);
    
    if (element) {
      // scrollIntoView utilise automatiquement scroll-margin-top défini en CSS
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // TODO: remplacer par useClientDetails(clientId) — mock pour l'instant
  const profileDisplayData = {
    identity: [
      { label: "Nom", value: "Bertoglio" },
      { label: "Prénom", value: "Jean-Philippe" },
      { label: "Type", value: "Propriétaire, Vendeur" },
      { label: "Date de naissance", value: "15/03/1972" },
      { label: "Genre", value: "Homme" },
      { label: "Nationalité", value: "Française" },
    ],
    contact: [
      { label: "Téléphone", value: "+33 6 12 34 56 78" },
      { label: "Email", value: "jean.philippe@example.com" },
      { label: "Adresse", value: "12 Rue de la Paix, 75002 Paris" },
      { label: "Canal préféré", value: "Email" },
    ],
    professional: [
      { label: "Profession", value: "Chef d'entreprise" },
      { label: "Entreprise", value: "BNP - 73390 Luxembourg" },
      { label: "SIREN", value: "123 456 789" },
      { label: "Revenus", value: "60K - 125K / an" },
    ],
    kyc: [
      { label: "Pièce d'identité", value: "CNI" },
      { label: "N° pièce", value: "•••• 4521" },
      { label: "Date d'expiration", value: "12/2028" },
      { label: "Source", value: "Recommandation" },
      { label: "Consentement email", value: "Oui — 15/01/2025" },
      { label: "Langue", value: "Français" },
    ],
    patrimoine: [
      { label: "Biens possédés", value: "3" },
      { label: "Biens en gestion", value: "1" },
      { label: "Transactions passées", value: "2 (via notre agence)" },
      { label: "Valeur estimée totale", value: "1 250 000 €" },
    ],
    financement: [
      { label: "Capacité d'emprunt", value: "450 000 €" },
      { label: "Apport personnel", value: "120 000 €" },
      { label: "Prêt en cours", value: "Oui — 280 000 € restant" },
      { label: "Taux actuel", value: "1.85%" },
      { label: "Fin de prêt", value: "09/2038" },
    ],
    meta: [
      { label: "Cycle de vie", value: "Actif" },
      { label: "Date de création", value: "15/01/2024" },
      { label: "Dernière activité", value: "12/02/2026" },
      { label: "Agent assigné", value: "Sophie Martin" },
      { label: "Notes", value: "Client fidèle, sensible au marché haut de gamme" },
    ],
  };
  const [showAllSections, setShowAllSections] = useState(false);

  // Données mockées pour le formulaire d'édition
  const profilData: ProfilClientData = {
    nom: "Bertoglio",
    prenom: "Jean-Philippe",
    types: ["Propriétaire", "Vendeur"],
    email: "jean.philippe@example.com",
    telephone: "+33 6 12 34 56 78",
    adresse: "12 Rue de la Paix, 75002 Paris",
    profession: "Chef d'entreprise",
    entreprise: "BNP - 73390 Luxembourg",
    revenus: "60K - 125K / an",
  };

  // Handler pour sauvegarder les modifications du profil
  const handleSaveProfile = (data: ProfilClientData) => {
    console.log("Profil sauvegardé :", data);
    // TODO: Mettre à jour les données du profil
  };

  // Données mockées pour les logs d'activité
  const activityLogs = [
    {
      date: "12 fév. 2026",
      time: "12:56",
      author: "Auteur",
      category: "EMAIL",
      description: "A envoyé 4 biens par email correspondant au mandat de travaux",
    },
    {
      date: "28 Jan. 2026",
      time: "14:32",
      author: "Auteur",
      category: "APPEL",
      description: "1er échange téléphonique, très positif. Budget et géo en ligne",
    },
    {
      date: "21 Jan. 2026",
      time: "09:14",
      author: "Système",
      category: "CRÉATION",
      description: "Fiche client créée suite à une visite de site web",
    },
    {
      date: "18 Jan. 2026",
      time: "16:23",
      author: "Auteur",
      category: "VISITE",
      description: "Visite réalisée 25 Av. des Champs-Élysées - Très emballé",
    },
  ];

  // Liste complète des activités pour la Sheet (15 items)
  const allActivityLogs = [
    {
      date: "12 fév. 2026",
      time: "12:56",
      author: "Auteur",
      category: "EMAIL",
      description: "A envoyé 4 biens par email correspondant au mandat de travaux",
    },
    {
      date: "28 Jan. 2026",
      time: "14:32",
      author: "Auteur",
      category: "APPEL",
      description: "1er échange téléphonique, très positif. Budget et géo en ligne",
    },
    {
      date: "21 Jan. 2026",
      time: "09:14",
      author: "Système",
      category: "CRÉATION",
      description: "Fiche client créée suite à une visite de site web",
    },
    {
      date: "18 Jan. 2026",
      time: "16:23",
      author: "Auteur",
      category: "VISITE",
      description: "Visite réalisée 25 Av. des Champs-Élysées - Très emballé",
    },
    {
      date: "15 Jan. 2026",
      time: "11:45",
      author: "Auteur",
      category: "EMAIL",
      description: "Envoi d'une proposition de bien à Montpellier",
    },
    {
      date: "12 Jan. 2026",
      time: "17:30",
      author: "Auteur",
      category: "NOTE",
      description: "Client très intéressé par les biens avec terrasse",
    },
    {
      date: "08 Jan. 2026",
      time: "10:15",
      author: "Système",
      category: "MODIFICATION",
      description: "Budget mis à jour : 450k - 550k€",
    },
    {
      date: "05 Jan. 2026",
      time: "14:20",
      author: "Auteur",
      category: "APPEL",
      description: "Confirmation du rendez-vous pour visite",
    },
    {
      date: "03 Jan. 2026",
      time: "09:00",
      author: "Auteur",
      category: "VISITE",
      description: "Visite de l'appartement rue de la Pompe - Feedback positif",
    },
    {
      date: "28 Déc. 2025",
      time: "16:45",
      author: "Auteur",
      category: "EMAIL",
      description: "Réponse à la demande de renseignements complémentaires",
    },
    {
      date: "20 Déc. 2025",
      time: "11:30",
      author: "Auteur",
      category: "APPEL",
      description: "Discussion sur les critères de recherche et le quartier souhaité",
    },
    {
      date: "15 Déc. 2025",
      time: "15:10",
      author: "Système",
      category: "MODIFICATION",
      description: "Type de bien modifié : T3 ou T4",
    },
    {
      date: "10 Déc. 2025",
      time: "10:00",
      author: "Auteur",
      category: "VISITE",
      description: "Première visite d'un T3 dans le 16ème - Intéressé mais budget trop élevé",
    },
    {
      date: "05 Déc. 2025",
      time: "14:50",
      author: "Auteur",
      category: "EMAIL",
      description: "Envoi de la sélection initiale de 5 biens correspondants",
    },
    {
      date: "01 Déc. 2025",
      time: "09:30",
      author: "Système",
      category: "CRÉATION",
      description: "Premier contact établi via formulaire web",
    },
  ];

  // Documents mockés
  const documents = [
    { name: "Acte de propriété" },
    { name: "Contrat de réservation" },
    { name: "DIA" },
    { name: "Mandat" },
    { 
      name: "Carte d'identité", 
      alert: { type: "warning" as const, message: "Expire le 15/05/2026" }
    },
    { name: "Contrat de mandat" },
  ];

  return (
    <div
      className="min-h-screen pb-20"
      style={{
        backgroundColor: "var(--surface-page)",
      }}
    >
      {/* Position 1 : Header - AppBar Fiche Client */}
      <div
        className="sticky top-0 z-20"
        style={{
          backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
        }}
      >
        {/* TODO: brancher useClientScore(clientId) */}
        <AppBarFicheClient
          clientName="BERTOGLIO, Jean-Philippe"
          tags={["VENDEUR", "ACQUÉREUR"]}
          qualification={64}
          engagement={82}
          conversion={24}
          reactivation={49}
          aiSuggestions={1}
          onBack={() => console.log("Back clicked")}
        />
      </div>

      {/* Contenu principal */}
      <div className="page-content space-y-0">
        {/* Position 2 : Graph Courbe */}
        {/* TODO: session dédiée GraphCourbe */}
        <GraphCourbe
          title="Engagement"
          selectedDate="22 fév 2026"
          selectedValue="28 réactions positives"
          trendPercentage="7%"
          trendDirection="up"
        />

        {/* Position 3 : AppBar Client Ancres - Sticky sous AppBarDetail */}
        <div className="sticky z-10" style={{ top: "100px" }}>
          <AppBarClientAncres onItemClick={handleAnchorClick} />
        </div>

        {/* Position 5 : Section Profil */}
        <section id="profil" className="pt-[30px] pb-[50px]">
          <div className="flex justify-between items-center mb-6">
            <h2
              className="text-2xl font-bold"
              style={{
                color: "var(--text-strong)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Profil
            </h2>
            <Button
              variant="ghost"
              iconLeft={<Pencil size={20} />}
              onClick={() => setIsEditProfilOpen(true)}
            >
              Éditer
            </Button>
          </div>

          {/* 7 blocs CollapsibleSection — 3 visibles par défaut, 4 sous "Voir tout" */}
          <div className="space-y-3">
            {/* Bloc 1 : Identité (ouvert par défaut) */}
            <CollapsibleSection title="Identité" defaultExpanded={true} badge={`${profileDisplayData.identity.filter(i => i.value).length}/${profileDisplayData.identity.length}`}>
              <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                {profileDisplayData.identity.map((item, index) => (
                  <div key={index} className="flex flex-col gap-0.5">
                    <div className="font-semibold text-sm" style={{ color: "var(--text-subtle)", fontFamily: "Roboto, sans-serif" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "var(--text-body)", fontFamily: "Roboto, sans-serif" }}>
                      {item.value || "—"}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Bloc 2 : Contact (ouvert par défaut) */}
            <CollapsibleSection title="Contact" defaultExpanded={true} badge={`${profileDisplayData.contact.filter(i => i.value).length}/${profileDisplayData.contact.length}`}>
              <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                {profileDisplayData.contact.map((item, index) => (
                  <div key={index} className="flex flex-col gap-0.5">
                    <div className="font-semibold text-sm" style={{ color: "var(--text-subtle)", fontFamily: "Roboto, sans-serif" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "var(--text-body)", fontFamily: "Roboto, sans-serif" }}>
                      {item.value || "—"}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Bloc 3 : Professionnel (ouvert par défaut) */}
            <CollapsibleSection title="Professionnel" defaultExpanded={true} badge={`${profileDisplayData.professional.filter(i => i.value).length}/${profileDisplayData.professional.length}`}>
              <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                {profileDisplayData.professional.map((item, index) => (
                  <div key={index} className="flex flex-col gap-0.5">
                    <div className="font-semibold text-sm" style={{ color: "var(--text-subtle)", fontFamily: "Roboto, sans-serif" }}>
                      {item.label}
                    </div>
                    <div style={{ color: "var(--text-body)", fontFamily: "Roboto, sans-serif" }}>
                      {item.value || "—"}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>

            {/* Blocs 4–7 : masqués par défaut, affichés via "Voir tout" */}
            {showAllSections && (
              <>
                {/* Bloc 4 : KYC & Conformité */}
                <CollapsibleSection title="KYC & Conformité" defaultExpanded={false}>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                    {profileDisplayData.kyc.map((item, index) => (
                      <div key={index} className="flex flex-col gap-0.5">
                        <div className="font-semibold text-sm" style={{ color: "var(--text-subtle)", fontFamily: "Roboto, sans-serif" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "var(--text-body)", fontFamily: "Roboto, sans-serif" }}>
                          {item.value || "—"}
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>

                {/* Bloc 5 : Patrimoine */}
                <CollapsibleSection title="Patrimoine" defaultExpanded={false}>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                    {profileDisplayData.patrimoine.map((item, index) => (
                      <div key={index} className="flex flex-col gap-0.5">
                        <div className="font-semibold text-sm" style={{ color: "var(--text-subtle)", fontFamily: "Roboto, sans-serif" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "var(--text-body)", fontFamily: "Roboto, sans-serif" }}>
                          {item.value || "—"}
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>

                {/* Bloc 6 : Financement */}
                <CollapsibleSection title="Financement" defaultExpanded={false}>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                    {profileDisplayData.financement.map((item, index) => (
                      <div key={index} className="flex flex-col gap-0.5">
                        <div className="font-semibold text-sm" style={{ color: "var(--text-subtle)", fontFamily: "Roboto, sans-serif" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "var(--text-body)", fontFamily: "Roboto, sans-serif" }}>
                          {item.value || "—"}
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>

                {/* Bloc 7 : Méta */}
                <CollapsibleSection title="Méta & Suivi" defaultExpanded={false}>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-8">
                    {profileDisplayData.meta.map((item, index) => (
                      <div key={index} className="flex flex-col gap-0.5">
                        <div className="font-semibold text-sm" style={{ color: "var(--text-subtle)", fontFamily: "Roboto, sans-serif" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "var(--text-body)", fontFamily: "Roboto, sans-serif" }}>
                          {item.value || "—"}
                        </div>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>
              </>
            )}

            {/* Bouton Voir tout / Réduire */}
            <button
              className="flex items-center gap-2 text-sm font-medium mt-2 transition-colors"
              style={{ color: "var(--text-branded-strong)" }}
              onClick={() => setShowAllSections(!showAllSections)}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              {showAllSections ? "Réduire" : "Voir tout (4 sections)"}
              <ChevronDown
                size={16}
                style={{
                  transform: showAllSections ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </button>
          </div>

          {/* Suggestion IA conditionnelle */}
          {showIaSuggestion && (
            <div className="mt-6">
              {/* TODO: AiSuggestionBlock organism */}
              <AiSuggestion count={1} theme={theme} />
            </div>
          )}
        </section>

        {/* Divider */}
        <div className="my-[40px]">
          <Divider spacing="none" />
        </div>

        {/* Position 6 : Section Activité */}
        <section id="activites" className="pt-[30px] pb-[50px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-[36px]">
              {/* Titre + Badge */}
              <div className="flex items-center gap-1">
                <h2
                  className="text-2xl font-bold"
                  style={{
                    color: "var(--text-strong)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Activités
                </h2>
                <Badge variant="default" theme={theme}>17</Badge>
              </div>

              {/* 4 Chips filtres */}
              <div className="flex items-center gap-[24px]">
                <Chip size="medium" icon={<ListChecks size={20} />}>
                  Tous
                </Chip>
                <Chip size="medium" icon={<Database size={20} />} disabled>
                  Base de données
                </Chip>
                <Chip size="medium" icon={<MessageCircle size={20} />} disabled>
                  Messages
                </Chip>
                <Chip size="medium" icon={<ScrollText size={20} />} disabled>
                  Historique
                </Chip>
              </div>
            </div>

            <Button
              variant="ghost"
              onClick={() => setIsActiviteSheetOpen(true)}
            >
              Voir tout →
            </Button>
          </div>

          <LogHistory logs={activityLogs} />
        </section>

        {/* Divider */}
        <div className="my-[40px]">
          <Divider spacing="none" />
        </div>

        {/* Position 7 : Section Affaires */}
        <section id="affaires" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              className="text-2xl font-bold"
              style={{
                color: "var(--text-strong)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Affaires
            </h2>
            <Badge variant="default" theme={theme}>1</Badge>
          </div>
          <div className="flex flex-col gap-[17px]">
            <ListAffaire
              type="VENTE"
              affaireId="55679201"
              bienType="T3"
              surface="120m²"
              price="450 000€"
              messageCount={1}
              documentComplete={true}
              photosComplete={true}
              envois={8}
              visites={3}
              favoris={1}
              documentSigned={true}
              paymentReceived={false}
              legalComplete={false}
              aiSuggestions={1}
              theme={theme}
              onAffaireClick={() => console.log("Affaire clicked")}
            />
          </div>
        </section>

        {/* Divider */}
        <div className="my-[40px]">
          <Divider spacing="none" />
        </div>

        {/* Section Biens */}
        <section id="biens" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              className="text-2xl font-bold"
              style={{
                color: "var(--text-strong)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Biens
            </h2>
            <Badge variant="default" theme={theme}>2</Badge>
          </div>
          <div className="flex flex-col gap-[17px]">
            {/* TODO: brancher usePropertyDetails(clientId) */}
            <ListBien
              imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
              type="T4"
              price="340 000 €"
              location="Saint-Jean-de-Védas"
              bienType="Appartement"
              surface="82 m²"
              dpe="A"
              qualification={74}
              entretien={42}
              conversion={24}
              aiSuggestions={1}
              theme={theme}
              onBienClick={() => console.log("Bien 1 clicked")}
            />
            <ListBien
              imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"
              type="T3"
              price="280 000 €"
              location="Montpellier"
              bienType="Appartement"
              surface="65 m²"
              dpe="B"
              qualification={74}
              entretien={42}
              conversion={24}
              aiSuggestions={0}
              theme={theme}
              onBienClick={() => console.log("Bien 2 clicked")}
            />
          </div>
        </section>

        {/* Divider */}
        <div className="my-[40px]">
          <Divider spacing="none" />
        </div>

        {/* Section Carnet */}
        <section id="carnet" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              className="text-2xl font-bold"
              style={{
                color: "var(--text-strong)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Carnet
            </h2>
            <Badge variant="default" theme={theme}>1</Badge>
          </div>

          <ListCarnet />
        </section>

        {/* Divider */}
        <div className="my-[40px]">
          <Divider spacing="none" />
        </div>

        {/* Position 9 : Section Documents */}
        <section id="documents" className="pt-[30px] pb-[50px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-1">
              <h2
                className="text-2xl font-bold"
                style={{
                  color: "var(--text-strong)",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Documents
              </h2>
              <Badge variant="default" theme={theme}>6</Badge>
            </div>
            <Button
              variant="ghost"
              iconLeft={<Upload size={20} />}
              onClick={() => setIsAddDocumentSheetOpen(true)}
            >
              Ajouter
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {documents.map((doc, index) => (
              <Button
                key={index}
                variant="outlined"
                iconRight={doc.alert ? <AlertTriangle size={20} /> : undefined}
                onClick={() => console.log(`Ouvrir ${doc.name}`)}
              >
                {doc.name}
              </Button>
            ))}
          </div>

          {/* IA Suggestion Documents */}
          <div className="mt-6">
            {/* TODO: AiSuggestionBlock organism */}
            <AiSuggestion count={1} theme={theme} />
          </div>
        </section>

        {/* Divider */}
        <div className="my-[40px]">
          <Divider spacing="none" />
        </div>

        {/* Position 10 : Section Messages */}
        <section id="messages" className="pt-[30px] pb-[50px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-1">
              <h2
                className="text-2xl font-bold"
                style={{
                  color: "var(--text-strong)",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Messages
              </h2>
              <Badge variant="default" theme={theme}>2</Badge>
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsMessagerieSheetOpen(true)}
            >
              Voir tout →
            </Button>
          </div>

          <MessageReceived theme={theme} />
        </section>
      </div>

      {/* Sheet Edit Profil Client */}
      <SheetEditProfilClient
        isOpen={isEditProfilOpen}
        onClose={() => setIsEditProfilOpen(false)}
        initialData={profilData}
        onSave={handleSaveProfile}
      />

      {/* Sheet Activité - Liste complète */}
      <Sheet
        isOpen={isActiviteSheetOpen}
        onClose={() => setIsActiviteSheetOpen(false)}
        title="Activité"
        width="narrow"
      >
        <LogHistory logs={allActivityLogs} />
      </Sheet>

      {/* Sheet pour ajouter un document */}
      <Sheet
        isOpen={isAddDocumentSheetOpen}
        onClose={() => {
          setIsAddDocumentSheetOpen(false);
          setSelectedFile(null);
        }}
        title="Ajouter un document"
        width="narrow"
      >
        <div className="p-6">
          <FileUpload
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            maxSize={10 * 1024 * 1024}
            selectedFile={selectedFile}
            onFileSelect={(file) => setSelectedFile(file)}
            onFileRemove={() => setSelectedFile(null)}
          />

          <div className="flex gap-3 mt-6">
            <Button
              variant="default"
              disabled={!selectedFile}
              onClick={() => {
                if (selectedFile) {
                  console.log("Upload document:", selectedFile.name);
                  setIsAddDocumentSheetOpen(false);
                  setSelectedFile(null);
                }
              }}
            >
              Télécharger
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setIsAddDocumentSheetOpen(false);
                setSelectedFile(null);
              }}
            >
              Annuler
            </Button>
          </div>
        </div>
      </Sheet>

      {/* Sheet pour la messagerie */}
      <Sheet
        isOpen={isMessagerieSheetOpen}
        onClose={() => setIsMessagerieSheetOpen(false)}
        width="wide"
        showHeaderDivider={false}
        customHeader={
          <AppBarDetail
            title="Messages"
            hideBack={true}
            onClose={() => setIsMessagerieSheetOpen(false)}
            gap="lg"
          >
            <Chip size="medium" icon={<User size={20} />}>
              BERTOGLIO, Sofia
            </Chip>

            {/* Groupe KpiIndicator + Events + Date */}
            <div className="flex items-center gap-[24px]">
              {/* KpiIndicator Straight Engagement */}
              <KpiIndicator
                icon={<MessageCircle size={20} />}
                value="82%"
                percentage={82}
                variant="straight"
                theme={theme}
              />

              {/* 5 MessageStatusDot */}
              <AppBarEventQuinte
                statuses={["success", "success", "success", "fail", "none"]}
              />

              {/* ChipDate */}
              <ChipDate icon={<Calendar size={20} />}>150 j</ChipDate>
            </div>
          </AppBarDetail>
        }
        footer={
          <div
            className="sticky bottom-0 w-full flex items-center justify-end gap-[12px] px-[20px] py-[20px]"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
              borderTop: `1px solid ${isDark ? "var(--neutral-600)" : "var(--neutral-50)"}`,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => console.log("Écrire un message")}
            >
              Écrire un message
            </Button>
            <Button
              variant="branded"
              onClick={() => console.log("Voir les suggestions")}
            >
              Voir les suggestions
            </Button>
          </div>
        }
      >

        {/* Messages */}
        <div className="px-6 pt-6 space-y-6" style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Message reçu - aligné à gauche */}
          <div className="flex justify-start">
            <MessageReceived theme={theme} />
            {/* TODO: brancher données messages */}
          </div>

          {/* Message envoyé - aligné à droite */}
          <div className="flex justify-end">
            <MessageSent theme={theme} />
            {/* TODO: brancher données messages */}
          </div>

          {/* Message reçu - aligné à gauche */}
          <div className="flex justify-start">
            <MessageReceived theme={theme} />
            {/* TODO: brancher données messages */}
          </div>

          {/* Message envoyé - aligné à droite */}
          <div className="flex justify-end">
            <MessageSent theme={theme} />
            {/* TODO: brancher données messages */}
          </div>

          {/* Message reçu - aligné à gauche */}
          <div className="flex justify-start">
            <MessageReceived theme={theme} />
            {/* TODO: brancher données messages */}
          </div>

          {/* Message envoyé - aligné à droite */}
          <div className="flex justify-end">
            <MessageSent theme={theme} />
            {/* TODO: brancher données messages */}
          </div>
        </div>
      </Sheet>
    </div>
  );
};