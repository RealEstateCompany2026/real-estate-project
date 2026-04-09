/**
 * DEMO PAGE: List Components
 * 
 * Page de démonstration des composants de liste du design system RealAgent
 */

import { useState } from "react";
import {
  ListItemImportSelect,
  ListItemImportSuccess,
  ListItemImportError,
  ListCarnet,
  ListAnnonce,
  ListMandat,
  ListVisite,
  ListPromesse,
  ListFinance,
  ListActeNotarie,
  CardCA,
} from "../components/molecules";
import { ListClient } from "../components/components/ListClient";
import { ListAffaire } from "../components/components/ListAffaire";
import { ListBien } from "../components/components/ListBien";
import { Card } from "../components/atoms/Card";
import { Button } from "../components/atoms/Button";
import imgBien from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";

export default function ListComponentsDemo() {
  const [selectedImport, setSelectedImport] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={theme === "dark" ? "dark" : ""}
      style={{ minHeight: "100vh" }}
    >
      <div
        className="min-h-screen p-8"
        style={{ backgroundColor: theme === "dark" ? "#111215" : "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header avec bouton theme toggle */}
          <div className="flex items-center justify-between mb-8">
            <h1
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h1)",
                lineHeight: "var(--lh-h1)",
              }}
            >
              Composants de Liste
            </h1>
            <Button
              variant="primary"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "Mode Dark" : "Mode Light"}
            </Button>
          </div>

          {/* Liste Import */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Import de Données
            </h2>

            <Card radius="scale400" padding="scale000">
              {/* État: Sélection */}
              <ListItemImportSelect
                tableName="clients_data"
                onSelect={() => setSelectedImport(true)}
              />

              {/* État: Succès */}
              <ListItemImportSuccess
                sourceTableName="properties_data"
                targetTableName="biens_immobiliers"
                onRemap={() => console.log("Remap")}
              />

              {/* État: Erreur */}
              <ListItemImportError
                sourceTableName="transactions_data"
                targetTableName="affaires"
                errorMessage="Le format de la colonne 'date_signature' est invalide. Attendu: YYYY-MM-DD, trouvé: DD/MM/YYYY. Veuillez vérifier et corriger les données."
                onRemap={() => console.log("Remap")}
              />
            </Card>
          </section>

          {/* Liste Clients */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Clients
            </h2>

            {/* État Default */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Default
              </h3>
              <Card radius="scale400" padding="scale000">
                <ListClient
                  firstName="Jean-Christophe"
                  lastName="LEMARCHAND"
                  badges={[
                    { label: "VENDEUR", variant: "default" },
                    { label: "ACQUÉREUR", variant: "default" },
                  ]}
                  aiSuggestions={2}
                  qualification={64}
                  engagement={82}
                  conversion={24}
                  reactivation={49}
                  engagementLevels={["success", "success", "success", "none", "none"]}
                  daysActive={280}
                  theme={theme}
                  onClientClick={() => console.log("Client clicked")}
                />
              </Card>
            </div>

            {/* État Hover */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Hover
              </h3>
              <Card radius="scale400" padding="scale000">
                <ListClient
                  firstName="Marie"
                  lastName="DUBOIS"
                  badges={[
                    { label: "VENDEUR", variant: "default" },
                  ]}
                  aiSuggestions={4}
                  qualification={64}
                  engagement={82}
                  conversion={24}
                  reactivation={49}
                  engagementLevels={["success", "success", "success", "success", "success"]}
                  daysActive={45}
                  theme={theme}
                  forceHover={true}
                  onClientClick={() => console.log("Client clicked")}
                />
              </Card>
            </div>
          </section>

          {/* Liste Affaires */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Affaires
            </h2>

            {/* État Default */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Default
              </h3>
              <Card radius="scale400" padding="scale000">
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
                  paymentReceived={true}
                  legalComplete={true}
                  aiSuggestions={2}
                  theme={theme}
                  onAffaireClick={() => console.log("Affaire clicked")}
                />
              </Card>
            </div>

            {/* État Hover */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Hover
              </h3>
              <Card radius="scale400" padding="scale000">
                <ListAffaire
                  type="LOCATION"
                  affaireId="55679202"
                  bienType="T2"
                  surface="65m²"
                  price="1 200€/mois"
                  messageCount={3}
                  documentComplete={false}
                  photosComplete={true}
                  envois={12}
                  visites={5}
                  favoris={2}
                  documentSigned={false}
                  paymentReceived={false}
                  legalComplete={false}
                  aiSuggestions={1}
                  theme={theme}
                  forceHover={true}
                  onAffaireClick={() => console.log("Affaire clicked")}
                />
              </Card>
            </div>
          </section>

          {/* Liste Biens */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Biens
            </h2>

            {/* État Default */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Default
              </h3>
              <Card radius="scale400" padding="scale000">
                <ListBien
                  imageUrl={imgBien}
                  type="VENTE"
                  price="450 000€"
                  location="Saint-jean-de-Vedas"
                  bienType="T3"
                  surface="120 m²"
                  dpe="A"
                  qualification={64}
                  entretien={38}
                  conversion={24}
                  aiSuggestions={2}
                  theme={theme}
                  onBienClick={() => console.log("Bien clicked")}
                />
              </Card>
            </div>

            {/* État Hover */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Hover
              </h3>
              <Card radius="scale400" padding="scale000">
                <ListBien
                  imageUrl={imgBien}
                  type="LOCATION"
                  price="1 200€/mois"
                  location="Montpellier"
                  bienType="T2"
                  surface="65 m²"
                  dpe="C"
                  qualification={72}
                  entretien={45}
                  conversion={31}
                  aiSuggestions={1}
                  theme={theme}
                  forceHover={true}
                  onBienClick={() => console.log("Bien clicked")}
                />
              </Card>
            </div>
          </section>

          {/* Liste Carnets */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Carnets
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <ListCarnet
                items={[
                  {
                    location: "Montpellier",
                    type: "T3",
                    surface: "120m²",
                    dpe: "A",
                    owner: "RASTAPOPULOS, Roberto",
                    status: {
                      label: "Activé",
                      variant: "success",
                    },
                    date: "12 fév. 2026",
                    aiSuggestions: 1,
                  },
                  {
                    location: "Paris",
                    type: "T2",
                    surface: "65m²",
                    dpe: "C",
                    owner: "DUPONT, Marie",
                    status: {
                      label: "Invité",
                      variant: "warning",
                    },
                    date: "15 mars 2026",
                    aiSuggestions: 3,
                  },
                  {
                    location: "Lyon",
                    type: "T4",
                    surface: "95m²",
                    dpe: "B",
                    owner: "MARTIN, Jean",
                    status: {
                      label: "Inactif",
                      variant: "disabled",
                    },
                    date: "20 jan. 2026",
                  },
                ]}
              />
            </div>
          </section>

          {/* Liste Annonces */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Annonces
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <ListAnnonce
                items={[
                  {
                    location: "Montpellier",
                    type: "T3",
                    surface: "120m²",
                    dpe: "A",
                    owner: "RASTAPOPULOS, Roberto",
                    editionStatus: "success",
                    revisionStatus: "success",
                    publicationStatus: "warning",
                    aiSuggestions: 1,
                    onView: () => console.log("Voir annonce Montpellier"),
                  },
                  {
                    location: "Paris",
                    type: "T2",
                    surface: "65m²",
                    dpe: "C",
                    owner: "DUPONT, Marie",
                    editionStatus: "success",
                    revisionStatus: "warning",
                    publicationStatus: "disabled",
                    aiSuggestions: 2,
                    onView: () => console.log("Voir annonce Paris"),
                  },
                  {
                    location: "Lyon",
                    type: "T4",
                    surface: "95m²",
                    dpe: "B",
                    owner: "MARTIN, Jean",
                    editionStatus: "disabled",
                    revisionStatus: "disabled",
                    publicationStatus: "disabled",
                    onView: () => console.log("Voir annonce Lyon"),
                  },
                ]}
              />
            </div>
          </section>

          {/* Liste Mandats */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Mandats
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <ListMandat
                items={[
                  {
                    id: "1",
                    reference: "MV.789.083.263",
                    editionStatus: "success",
                    revisionStatus: "disabled",
                    signatureStatus: "disabled",
                    aiSuggestions: 1,
                    onView: () => console.log("Voir mandat MV.789.083.263"),
                  },
                  {
                    id: "2",
                    reference: "MV.456.789.012",
                    editionStatus: "success",
                    revisionStatus: "success",
                    signatureStatus: "disabled",
                    aiSuggestions: 2,
                    onView: () => console.log("Voir mandat MV.456.789.012"),
                  },
                  {
                    id: "3",
                    reference: "MV.123.456.789",
                    editionStatus: "success",
                    revisionStatus: "success",
                    signatureStatus: "success",
                    onView: () => console.log("Voir mandat MV.123.456.789"),
                  },
                ]}
              />
            </div>
          </section>

          {/* Liste Visites */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Visites
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <ListVisite
                items={[
                  {
                    id: "1",
                    agentName: "Nathalie DUFLOT",
                    dateTime: "12 fév. 2026 à 14h00",
                    calendrierStatus: "success",
                    odjStatus: "success",
                    crStatus: "disabled",
                    aiSuggestions: 0,
                    onView: () => console.log("Voir visite 1"),
                  },
                  {
                    id: "2",
                    agentName: "Pierre MARTIN",
                    dateTime: "15 fév. 2026 à 10h30",
                    calendrierStatus: "success",
                    odjStatus: "disabled",
                    crStatus: "disabled",
                    aiSuggestions: 1,
                    onView: () => console.log("Voir visite 2"),
                  },
                  {
                    id: "3",
                    agentName: "Marie DUPONT",
                    dateTime: "18 fév. 2026 à 16h00",
                    calendrierStatus: "success",
                    odjStatus: "success",
                    crStatus: "success",
                    onView: () => console.log("Voir visite 3"),
                  },
                ]}
              />
            </div>
          </section>

          {/* Liste Promesses */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Promesses
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <ListPromesse
                items={[
                  {
                    id: "1",
                    clientName: "Nathalie DUFLOT",
                    recueStatus: "success",
                    transmiseStatus: "success",
                    accordStatus: "success",
                    aiSuggestions: 0,
                    onView: () => console.log("Voir promesse 1"),
                  },
                  {
                    id: "2",
                    clientName: "Jean BERNARD",
                    recueStatus: "success",
                    transmiseStatus: "success",
                    accordStatus: "disabled",
                    aiSuggestions: 2,
                    onView: () => console.log("Voir promesse 2"),
                  },
                  {
                    id: "3",
                    clientName: "Sophie LAURENT",
                    recueStatus: "success",
                    transmiseStatus: "disabled",
                    accordStatus: "disabled",
                    onView: () => console.log("Voir promesse 3"),
                  },
                ]}
              />
            </div>
          </section>

          {/* Liste Finance */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Finance
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <ListFinance
                items={[
                  {
                    id: "1",
                    name: "Nathalie DUFLOT",
                    status: "INCOMPLET",
                    notesCount: 0,
                  },
                  {
                    id: "2",
                    name: "Jean BERNARD",
                    status: "COMPLET",
                    notesCount: 3,
                  },
                  {
                    id: "3",
                    name: "Sophie LAURENT",
                    status: "EN_ATTENTE",
                    notesCount: 1,
                  },
                ]}
                onViewNotes={(item) => console.log("Voir notes pour", item.name)}
              />
            </div>
          </section>

          {/* Liste Acte Notarié */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Liste Acte Notarié
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <ListActeNotarie
                items={[
                  {
                    id: "1",
                    notaireName: "Nathalie DUFLOT",
                    dateTime: "12 mar 2026 à 17h30",
                    status: "PROGRAMME",
                    aiSuggestions: 0,
                  },
                  {
                    id: "2",
                    notaireName: "Jean BERNARD",
                    dateTime: "15 mar 2026 à 10h00",
                    status: "SIGNE",
                    aiSuggestions: 2,
                  },
                  {
                    id: "3",
                    notaireName: "Sophie LAURENT",
                    dateTime: "20 mar 2026 à 14h30",
                    status: "EN_ATTENTE",
                    aiSuggestions: 1,
                  },
                ]}
                onViewNotes={(item) => console.log("Voir notes pour", item.notaireName)}
              />
            </div>
          </section>

          {/* Card CA */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Card CA (Chiffre d'Affaires)
            </h2>

            <div className={theme === "dark" ? "dark" : ""}>
              <CardCA
                chiffreAffaire="32 000€"
                couts="3 900€"
                margeBrute="28 100€"
                tauxMarge="88%"
              />
            </div>
          </section>

          {/* Bouton retour */}
          <Button
            variant="text"
            size="lg"
            onClick={() => window.history.back()}
          >
            ← Retour
          </Button>
        </div>
      </div>
    </div>
  );
}