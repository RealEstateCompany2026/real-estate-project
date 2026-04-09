/**
 * FIB_01_PageFicheBien - Page de détail d'un bien immobilier
 * Parcours P09 - Fiche bien
 *
 * Structure:
 * - AppBarDetail
 * - GraphCourbe
 * - AppBarBienAncres
 * - Galerie photos
 * - AppBarAnnonce
 * - Section Caractéristiques (8 sous-sections)
 * - Section Affaires
 * - Section Annonce
 * - Section Carnet
 * - Section Documents
 * - Section Acquéreurs appétents
 */

"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  AppBarDetail,
  AppBarFicheBien,
  GraphCourbe,
  AppBarBienAncres,
  AppBarAnnonce,
  AppBarEventQuinte,
  Sheet,
  LogHistory
} from "../components/organisms";
import { Gallery } from "../components/organisms/Gallery";
import { ListAffaire } from "../components/components/ListAffaire";
import { ListAnnonce } from "../components/molecules/ListAnnonce";
import { ListCarnet } from "../components/molecules/ListCarnet";
import { ListClient } from "../components/components/ListClient";
import { FileUpload } from "../components/molecules/FileUpload";
import { MessageReceived } from "../components/molecules/MessageReceived";
import { MessageSent } from "../components/molecules/MessageSent";
import { Button, IconButton } from "../components/atoms/Button";
import { Badge } from "../components/atoms/Badge";
import { Chip, ChipDate } from "../components/atoms/Chip";
import { Divider } from "../components/atoms/Divider";
import { IconDpe } from "../components/atoms/IconDpe";
import { KpiIndicator } from "../components/atoms/KpiIndicator";
import { User, Database, BookOpen, FileText, ChevronDown, ChevronUp, AlertTriangle, ArrowLeft, ArrowRight, Plus, Calendar, ListChecks, MessageCircle, ScrollText, Drill, Upload, Send, Trash2, Home, Square, X, Compass, Hammer, MapPin, Tag, Layers, ArrowUpDown, SquareParking, CookingPot, Package, Bird, BedDouble, Trophy, Calculator, Check, Info, Image, Copy } from "lucide-react";
import { DpeScale } from "../components/atoms/DpeScale";
import { GesScale } from "../components/atoms/GesScale";
import imgRectangle21 from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";
import imgRectangle22 from "figma:asset/d7b9b6cf39e9824f536d3d440df891f98e8aa3b3.png";
import imgRectangle23 from "figma:asset/fe5b53ca8a5da70fa46d1ac005bde7c58dc2fd2c.png";
import imgRectangle24 from "figma:asset/bf9fbb324551f3970ab08000b5fdf2c776660973.png";
import imgRectangle25 from "figma:asset/565403664482da2e6e9d5f6b5383dee1eae2d81a.png";
import imgRectangle26 from "figma:asset/f93d82ba3cf9a2fb835fbbfa642cbf05be53b9dc.png";
import imgRectangle27 from "figma:asset/2aedb81f3a7c93074ece4f59ada154ada7d8530e.png";
import imgRectangle28 from "figma:asset/dc3a33a41f3934c3675617a19f06288a7d587269.png";

export default function FIB_01_PageFicheBien() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [showAllCaracteristiques, setShowAllCaracteristiques] = useState(false);
  const [isAddDocumentSheetOpen, setIsAddDocumentSheetOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isMessagerieSheetOpen, setIsMessagerieSheetOpen] = useState(false);
  const [isActiviteSheetOpen, setIsActiviteSheetOpen] = useState(false);
  const [isGalerieSheetOpen, setIsGalerieSheetOpen] = useState(false);
  const [isAnnonceSheetOpen, setIsAnnonceSheetOpen] = useState(false);

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

  // Styles de la page
  const sectionBackground = isDark ? "var(--neutral-800)" : "var(--neutral-white)";
  const textHeading = "var(--text-headings)";
  const textBody = "var(--text-body)";

  // Documents mockés
  const documents = [
    { name: "DPE" },
    { name: "Diagnostics immobiliers" },
    { name: "Plan cadastral" },
    {
      name: "Titre de propriété",
      alert: { type: "warning" as const, message: "À renouveler" }
    },
    { name: "Photos HD" },
    { name: "Visite virtuelle" },
  ];

  // Données mockées pour les logs d'activité
  const activityLogs = [
    {
      date: "15 mars 2026",
      time: "14:30",
      author: "Auteur",
      category: "VISITE",
      description: "Visite organisée pour M. et Mme DUPONT",
    },
    {
      date: "10 mars 2026",
      time: "09:45",
      author: "Auteur",
      category: "EMAIL",
      description: "Envoi des photos HD et visite virtuelle",
    },
    {
      date: "05 mars 2026",
      time: "16:20",
      author: "Système",
      category: "MODIFICATION",
      description: "Prix mis à jour : 340 000€",
    },
    {
      date: "28 fév. 2026",
      time: "11:15",
      author: "Auteur",
      category: "CRÉATION",
      description: "Fiche bien créée avec mandat de vente",
    },
  ];

  // Liste complète des activités pour la Sheet
  const allActivityLogs = [
    {
      date: "15 mars 2026",
      time: "14:30",
      author: "Auteur",
      category: "VISITE",
      description: "Visite organisée pour M. et Mme DUPONT",
    },
    {
      date: "10 mars 2026",
      time: "09:45",
      author: "Auteur",
      category: "EMAIL",
      description: "Envoi des photos HD et visite virtuelle",
    },
    {
      date: "05 mars 2026",
      time: "16:20",
      author: "Système",
      category: "MODIFICATION",
      description: "Prix mis à jour : 340 000€",
    },
    {
      date: "28 fév. 2026",
      time: "11:15",
      author: "Auteur",
      category: "CRÉATION",
      description: "Fiche bien créée avec mandat de vente",
    },
    {
      date: "25 fév. 2026",
      time: "10:00",
      author: "Auteur",
      category: "APPEL",
      description: "Contact avec le propriétaire pour signature mandat",
    },
    {
      date: "20 fév. 2026",
      time: "15:30",
      author: "Auteur",
      category: "VISITE",
      description: "Première visite du bien pour estimation",
    },
    {
      date: "18 fév. 2026",
      time: "09:00",
      author: "Système",
      category: "MODIFICATION",
      description: "DPE mis à jour : classe A",
    },
    {
      date: "15 fév. 2026",
      time: "14:20",
      author: "Auteur",
      category: "NOTE",
      description: "Bien en excellent état, terrasse avec vue dégagée",
    },
  ];

  return (
    <div
      className="min-h-screen pb-20"
      style={{
        backgroundColor: "var(--surface-page)",
      }}
    >
      {/* Position 1: Header - AppBar Fiche Bien */}
      <div
        className="sticky top-0 z-20"
        style={{
          backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
        }}
      >
        {/* TODO: brancher usePropertyScore(bienId) */}
        <AppBarFicheBien
          bienId="T4 - 82m²"
          transactionType="À VENDRE"
          contactName="DUPONT, Jean"
          qualification={64}
          showCarnet={true}
          showMandat={true}
          aiSuggestions={1}
          onBack={() => console.log("Back")}
        />
      </div>

      {/* Contenu principal */}
      <div className="page-content space-y-0">
        {/* Position 2: GraphCourbe */}
        <GraphCourbe
          title="Intérêt pour ce bien"
          selectedDate="15 mars 2026"
          selectedValue="42 vues"
          trendPercentage="12%"
          trendDirection="up"
        />
        {/* Position 3: AppBar Bien Ancres - Sticky sous AppBarDetail */}
        <div className="sticky z-10" style={{ top: "100px" }}>
          <AppBarBienAncres onItemClick={handleAnchorClick} />
        </div>
        {/* Position 4: Galerie photos */}
        <section id="galerie">
          <div
            style={{ width: "1191px", height: "277px", cursor: "pointer" }}
            onClick={() => setIsGalerieSheetOpen(true)}
          >
            {/* TODO: brancher photos bien */}
            <Gallery images={[]} theme={theme} />
          </div>
        </section>
        {/* Position 5: AppBarAnnonce */}
        <AppBarAnnonce
        type="T4"
        surface="82 m²"
        annee="2018"
        ville="Montpellier"
        prix="340 000 €"
        prixM2="1 450€ /m2"
      />

        {/* Position 6: Section Caractéristiques */}
        <section id="caracteristiques" className="pt-[50px]">
        <div className="flex items-center gap-3 mb-[30px]">
          <h2
            style={{
              color: textHeading,
              fontSize: "28px",
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Caractéristiques
          </h2>
          <Badge variant="success">88%</Badge>
        </div>

        {/* Sous-section 1: 3 colonnes (toujours visible) */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Localisation */}
          <div>
            <div
              style={{
                color: textHeading,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "20px",
                fontFamily: "Roboto, sans-serif",
                marginBottom: "8px",
              }}
            >
              Localisation
            </div>
            <div className="grid grid-cols-2 gap-y-3" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
              <div style={{ width: "178px", fontWeight: 400 }}>Adresse</div>
              <div style={{ width: "178px", fontWeight: 400 }}>12 avenue du Général Leclerc</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Ville</div>
              <div style={{ width: "178px", fontWeight: 400 }}>Montpellier</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Code postal</div>
              <div style={{ width: "178px", fontWeight: 400 }}>34000</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Bâtiment</div>
              <div style={{ width: "178px", fontWeight: 400 }}>A</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Étage</div>
              <div style={{ width: "178px", fontWeight: 400 }}>7</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Porte</div>
              <div style={{ width: "178px", fontWeight: 400 }}>701</div>
            </div>
          </div>

          {/* Type */}
          <div>
            <div
              style={{
                color: textHeading,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "20px",
                fontFamily: "Roboto, sans-serif",
                marginBottom: "8px",
              }}
            >
              Type
            </div>
            <div className="grid grid-cols-2 gap-y-3" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
              <div style={{ width: "178px", fontWeight: 400 }}>Construction</div>
              <div style={{ width: "178px", fontWeight: 400 }}>2018</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Type de bien</div>
              <div style={{ width: "178px", fontWeight: 400 }}>Appartement</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Surface habitable</div>
              <div style={{ width: "178px", fontWeight: 400 }}>85 m²</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Surface ext.</div>
              <div style={{ width: "178px", fontWeight: 400 }}>33 m²</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Surface totale</div>
              <div style={{ width: "178px", fontWeight: 400 }}>115 m²</div>

              <div style={{ width: "178px", fontWeight: 400 }}>Nombre de pièces</div>
              <div style={{ width: "178px", fontWeight: 400 }}>4</div>
            </div>
          </div>

          {/* Diagnostics */}
          <div>
            <div
              style={{
                color: textHeading,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "20px",
                fontFamily: "Roboto, sans-serif",
                marginBottom: "8px",
              }}
            >
              Diagnostics
            </div>
            <div className="grid grid-cols-2 gap-y-3" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
              <div style={{ width: "178px", fontWeight: 400 }}>Électricité</div>
              <div style={{ width: "178px", fontWeight: 400 }}>Individuel gaz</div>

              <div style={{ width: "178px", fontWeight: 400 }}>DPE</div>
              <div style={{ width: "178px", fontWeight: 400 }}>
                <IconDpe classe="A" size="small" />
              </div>

              <div style={{ width: "178px", fontWeight: 400 }}>Chauffage</div>
              <div style={{ width: "178px", fontWeight: 400 }}>Collectif gaz</div>

              <div style={{ width: "178px", fontWeight: 400 }}>GES</div>
              <div style={{ width: "178px", fontWeight: 400 }}>
                <IconDpe classe="A" size="small" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider avec Button */}
        <div style={{ position: "relative", margin: "50px 0" }}>
          <Divider spacing="none" />
          <div style={{ position: "absolute", top: "-22px", left: "50%", transform: "translateX(-50%)" }}>
            <Button
              variant="neutral"
              iconRight={showAllCaracteristiques ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              onClick={() => setShowAllCaracteristiques(!showAllCaracteristiques)}
            >
              {showAllCaracteristiques ? "Masquer les détails" : "Voir tous les détails"}
            </Button>
          </div>
        </div>

        {/* Sous-sections 2-8 (affichées conditionnellement) */}
        {showAllCaracteristiques && (
          <div className="space-y-12 mt-12">
            {/* Sous-section 2: Caractéristiques par pièce */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Caractéristiques par pièce
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  {/* Pièce à vivre */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Pièce à vivre</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>35 m²</div>
                    </div>
                  </div>

                  {/* Cuisine */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Cuisine</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>9 m²</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Type de cuisine</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>ouverte</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Équipement</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>complet</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 2 */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  {/* Chambre 1 */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Chambre 1</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>16 m²</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Placard</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>oui</div>
                    </div>
                  </div>

                  {/* Chambre 2 */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Chambre 2</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>11 m²</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Placard</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>non</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 3 */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  {/* WC */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>WC</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>2 m²</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Type de sanitaire</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>suspendu</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Point d'eau</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>oui</div>
                    </div>
                  </div>

                  {/* Salle de bain */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Salle de bain</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>7 m²</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Douche</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>non</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Baignoire</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>oui</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Type de lavabo</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>double vasque</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>WC</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>oui</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sous-section 3: Équipements */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Équipements
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  {/* Domotique */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Domotique</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Interphone</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>oui</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Domotique</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>oui</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 2 */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  {/* Fermetures */}
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Fermetures</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Type de fermetures</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>électriques</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Type de vitrage</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>double</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 3 - vide */}
                <div></div>
              </div>
            </div>

            {/* Sous-section 4: Extérieurs */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Extérieurs
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 - Balcons */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Balcons</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Nombre de balcons</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>2</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>18 m²</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 2 - Terrasses */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Terrasses</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Nombre de terrasses</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>1</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>30 m²</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 3 - Jardin, cour */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Jardin, cour</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>30 m²</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Piscine</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>oui, enterrée</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sous-section 5: Énergie */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Énergie
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 - Électricité */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Électricité</div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-y-3">
                        <div style={{ width: "178px", fontWeight: 400 }}>Type de source</div>
                        <div style={{ width: "178px", fontWeight: 400 }}>individuel gaz</div>
                      </div>

                      <div>
                        <div style={{ width: "178px", fontWeight: 400, marginBottom: "8px" }}>DPE</div>
                        <DpeScale activeClass="A" theme={theme} />
                      </div>

                      <div className="grid grid-cols-2 gap-y-3">
                        <div style={{ width: "178px", fontWeight: 400 }}>Dernier diagnostic</div>
                        <div style={{ width: "178px", fontWeight: 400 }}>2022</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne 2 - Chauffage */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Chauffage</div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-y-3">
                        <div style={{ width: "178px", fontWeight: 400 }}>Type de chauffage</div>
                        <div style={{ width: "178px", fontWeight: 400 }}>Collectif gaz</div>
                      </div>

                      <div>
                        <div style={{ width: "178px", fontWeight: 400, marginBottom: "8px" }}>GES</div>
                        <GesScale activeClass="A" theme={theme} />
                      </div>

                      <div className="grid grid-cols-2 gap-y-3">
                        <div style={{ width: "178px", fontWeight: 400 }}>Dernier diagnostic</div>
                        <div style={{ width: "178px", fontWeight: 400 }}>2022</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne 3 - vide */}
                <div></div>
              </div>
            </div>

            {/* Sous-section 6: Stationnement */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Stationnement
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 */}
                <div className="grid grid-cols-2 gap-y-3" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div style={{ width: "178px", fontWeight: 400 }}>Type</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>Collectif sécurisé</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Quantité</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>2</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Largeur</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>250cm</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Longueur</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>620cm</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Modularité</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>Boxable</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Commande</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>2</div>
                </div>

                {/* Colonnes 2 et 3 vides */}
                <div></div>
                <div></div>
              </div>
            </div>

            {/* Sous-section 7: Annexes */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Annexes
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 */}
                <div className="grid grid-cols-2 gap-y-3" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div style={{ width: "178px", fontWeight: 400 }}>Quantité</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>1</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Type</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>Cave</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Surface</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>6 m²</div>
                </div>

                {/* Colonnes 2 et 3 vides */}
                <div></div>
                <div></div>
              </div>
            </div>

            {/* Sous-section 8: Parties communes */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Parties communes
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 */}
                <div className="grid grid-cols-2 gap-y-3" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div style={{ width: "178px", fontWeight: 400 }}>Digicode</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>oui</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Ascenseur</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>oui</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Espace Vert</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>oui</div>
                </div>

                {/* Colonnes 2 et 3 vides */}
                <div></div>
                <div></div>
              </div>
            </div>

            {/* Sous-section 9: Quartier */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Quartier
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 - Enfance & soins */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Enfance & soins</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Crèches</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 500 m'}</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Écoles</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 500 m'}</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Hopital</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 1 km'}</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Pharmacie</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 500 m'}</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 2 - Transport */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Transport</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Métro, tram</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 300 m'}</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Bus</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 300 m'}</div>

                      <div style={{ width: "178px", fontWeight: 400 }}>Axe routier</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 1 km'}</div>
                    </div>
                  </div>
                </div>

                {/* Colonne 3 - Commerces */}
                <div className="space-y-4" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "8px" }}>Commerces</div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Commerces</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>{'< 300 m'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sous-section 10: Copropriété */}
            <div>
              <h3
                style={{
                  color: textHeading,
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Copropriété
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Colonne 1 */}
                <div className="grid grid-cols-2 gap-y-3" style={{ color: textBody, fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                  <div style={{ width: "178px", fontWeight: 400 }}>Type de copropriété</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>-</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Nombre de lots</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>54</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Charges Annuelles</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>3500 - 3700€</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Procédures en cours</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>non</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Procédures votées</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>non</div>
                </div>

                {/* Colonnes 2 et 3 vides */}
                <div></div>
                <div></div>
              </div>

              <Divider spacing="none" className="my-10" />
            </div>
          </div>
        )}
        </section>

        <Divider spacing="none" className="my-10" />

        {/* Section Activités */}
        <section id="activites" className="pt-[30px] pb-[50px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-[36px]">
              {/* Titre + Badge */}
              <div className="flex items-center gap-1">
                <h2
                  style={{
                    color: textHeading,
                    fontSize: "28px",
                    fontWeight: 700,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Activités
                </h2>
                <Badge variant="default" theme={theme}>12</Badge>
              </div>

              {/* 4 Chips filtres */}
              <div className="flex items-center gap-[24px]">
                <Chip size="medium" icon={<ListChecks size={20} />}>
                  Tous
                </Chip>
                <Chip size="medium" icon={<Database size={20} />} disabled>
                  Qualification
                </Chip>
                <Chip size="medium" icon={<Drill size={20} />} disabled>
                  Entretien
                </Chip>
                <Chip size="medium" icon={<ScrollText size={20} />} disabled>
                  Conversion
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

        <Divider spacing="none" className="my-10" />

        {/* Position 7: Section Affaires */}
      <section
        id="affaire"
        style={{
          padding: "0",
          backgroundColor: sectionBackground,
        }}
      >
        <div className="flex items-center gap-1 mb-[30px]">
          <h2
            style={{
              color: textHeading,
              fontSize: "28px",
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Affaire
          </h2>
          <Badge variant="default" theme={theme}>1</Badge>
        </div>
        <ListAffaire
          type="VENTE"
          affaireId="AFF-2026-001"
          bienType="T4"
          surface="82 m²"
          price="340 000 €"
          messageCount={3}
          documentComplete={true}
          photosComplete={true}
          envois={25}
          visites={12}
          favoris={8}
          documentSigned={false}
          paymentReceived={false}
          legalComplete={false}
          aiSuggestions={1}
          theme={theme}
        />
      </section>

      <Divider spacing="none" className="my-10" />

      {/* Position 8: Section Annonce */}
      <section
        id="annonce"
        style={{
          padding: "0",
          backgroundColor: sectionBackground,
        }}
      >
        <div className="flex items-center gap-1 mb-[30px]">
          <h2
            style={{
              color: textHeading,
              fontSize: "28px",
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Annonce
          </h2>
          <Badge variant="default" theme={theme}>1</Badge>
        </div>
        <ListAnnonce
          items={[
            {
              location: "Montpellier",
              type: "T4",
              surface: "82 m²",
              dpe: "A",
              owner: "DUPONT, Jean",
              editionStatus: "success",
              revisionStatus: "success",
              publicationStatus: "warning",
              aiSuggestions: 1,
              onView: () => setIsAnnonceSheetOpen(true),
            },
          ]}
        />
      </section>

      <Divider spacing="none" className="my-10" />

      {/* Position 9: Section Carnet */}
      <section
        id="carnet"
        style={{
          padding: "0",
          backgroundColor: sectionBackground,
        }}
      >
        <div className="flex items-center gap-1 mb-[30px]">
          <h2
            style={{
              color: textHeading,
              fontSize: "28px",
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Carnet
          </h2>
          <Badge variant="default" theme={theme}>1</Badge>
        </div>
        <ListCarnet
          items={[
            {
              location: "Montpellier",
              type: "T4",
              surface: "82 m²",
              dpe: "A",
              owner: "DUPONT, Jean",
              status: {
                label: "ACTIVÉ",
                variant: "success",
              },
              date: "15 mars 2026",
              aiSuggestions: 1,
            },
          ]}
        />
      </section>

      <Divider spacing="none" className="my-10" />

      {/* Position 10: Section Documents */}
      <section
        id="documents"
        style={{
          padding: "0",
          backgroundColor: sectionBackground,
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-1">
            <h2
              style={{
                color: textHeading,
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Documents
            </h2>
            <Badge variant="default" theme={theme}>6</Badge>
          </div>
          <Button
            variant="ghost"
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
      </section>

      <Divider spacing="none" className="my-10" />

      {/* Position 11: Section Acquéreurs appétents */}
      <section
        id="acquereurs"
        style={{
          padding: "0",
          backgroundColor: sectionBackground,
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-1">
            <h2
              style={{
                color: textHeading,
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Acquéreurs appétents
            </h2>
            <Badge variant="default" theme={theme}>28</Badge>
          </div>
          <Button
            variant="default"
            iconRight={<ArrowRight size={20} />}
            onClick={() => console.log("Voir tout acquéreurs")}
          >
            Voir tout
          </Button>
        </div>
        <div className="flex flex-col gap-[17px]">
          {[
            { firstName: "Jean", lastName: "DUPONT", qualification: 85, engagement: 82, conversion: 72, reactivation: 45 },
            { firstName: "Marie", lastName: "MARTIN", qualification: 78, engagement: 75, conversion: 68, reactivation: 52 },
            { firstName: "Pierre", lastName: "BERNARD", qualification: 72, engagement: 68, conversion: 65, reactivation: 38 },
            { firstName: "Sophie", lastName: "DUBOIS", qualification: 68, engagement: 72, conversion: 60, reactivation: 42 },
            { firstName: "Luc", lastName: "LEROY", qualification: 65, engagement: 70, conversion: 58, reactivation: 35 },
          ].map((client, index) => (
            <ListClient
              key={index}
              firstName={client.firstName}
              lastName={client.lastName}
              qualification={client.qualification}
              engagement={client.engagement}
              conversion={client.conversion}
              reactivation={client.reactivation}
              daysActive={45}
              aiSuggestions={1}
              theme={theme}
            />
          ))}
        </div>
      </section>

      <Divider spacing="none" className="my-10" />

      {/* Position 12: Section Messages */}
      <section
        id="messages"
        style={{
          padding: "0 0 100px 0",
          backgroundColor: sectionBackground,
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-1">
            <h2
              style={{
                color: textHeading,
                fontSize: "28px",
                fontWeight: 700,
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

      {/* Sheet Activité - Liste complète */}
      <Sheet
        isOpen={isActiviteSheetOpen}
        onClose={() => setIsActiviteSheetOpen(false)}
        title="Activité"
        width="narrow"
      >
        <LogHistory logs={allActivityLogs} />
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
            {/* Chip Medium nom client */}
            <Chip size="medium" icon={<User size={20} />}>
              DUPONT, Jean
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
                statuses={["success", "success", "fail", "none", "none"]}
              />

              {/* ChipDate */}
              <ChipDate icon={<Calendar size={20} />}>280 j</ChipDate>
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

      {/* Sheet Galerie photos */}
      <Sheet
        isOpen={isGalerieSheetOpen}
        onClose={() => setIsGalerieSheetOpen(false)}
        width="wide"
        showHeaderDivider={false}
      >
        <div className="px-10 py-8">
          {/* Header avec titre et boutons */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-1">
              <h4
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "34px",
                  letterSpacing: "0.28px",
                  color: "var(--text-strong)",
                }}
              >
                Galerie
              </h4>
              <Badge variant="default" theme={theme}>8</Badge>
            </div>

            <Button
              variant="ghost"
              iconRight={<Upload size={20} />}
              onClick={() => console.log("Importer photo")}
            >
              Importer une photo
            </Button>
          </div>

          {/* Image principale */}
          <div className="relative mb-4">
            <img
              src={imgRectangle21}
              alt="Photo principale"
              className="w-full h-[619px] object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <IconButton
                icon={<Trash2 size={20} />}
                variant="ghost"
                onClick={() => console.log("Supprimer photo")}
                title="Supprimer"
                size="md"
              />
            </div>
          </div>

          {/* Miniatures */}
          <div className="flex items-center gap-4 mb-8">
            <IconButton
              icon={<ArrowLeft size={20} />}
              variant="ghost"
              onClick={() => console.log("Navigation gauche")}
              title="Précédent"
              size="md"
            />
            <div className="flex gap-2 flex-1">
              {[
                imgRectangle22,
                imgRectangle23,
                imgRectangle24,
                imgRectangle25,
                imgRectangle26,
                imgRectangle27,
                imgRectangle28,
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Miniature ${index + 1}`}
                  className="w-[115px] h-[77px] object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => console.log(`Miniature ${index + 1} clicked`)}
                />
              ))}
            </div>
            <IconButton
              icon={<ArrowRight size={20} />}
              variant="ghost"
              onClick={() => console.log("Navigation droite")}
              title="Suivant"
              size="md"
            />
          </div>

          {/* Bouton Partager */}
          <div className="flex justify-end">
            <Button
              variant="outlined"
              iconRight={<Send size={20} />}
              onClick={() => console.log("Partager galerie")}
            >
              Partager la galerie
            </Button>
          </div>
        </div>
      </Sheet>

      {/* Sheet Annonce détaillée */}
      <Sheet
        isOpen={isAnnonceSheetOpen}
        onClose={() => setIsAnnonceSheetOpen(false)}
        width="wide"
        showHeaderDivider={false}
        customHeader={
          <div className="flex items-center justify-between px-10 pt-8 pb-4">
            <div className="flex items-center gap-6">
              {/* Position 1: Titre h4 "Annonce" */}
              <h4
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "34px",
                  letterSpacing: "0.28px",
                  color: "var(--text-strong)",
                }}
              >
                Annonce
              </h4>

              {/* Position 2: IconButton + Position 3: Text h4 (T4) */}
              <div className="flex items-center">
                <IconButton
                  icon={<Home size={20} />}
                  variant="ghost"
                  size="md"
                  onClick={() => console.log("Type bien")}
                />
                <h4
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.2px",
                    color: "var(--text-strong)",
                  }}
                >
                  T4
                </h4>
              </div>

              {/* Position 4: IconButton + Position 5: Text h4 (82 m²) */}
              <div className="flex items-center">
                <IconButton
                  icon={<Square size={20} />}
                  variant="ghost"
                  size="md"
                  onClick={() => console.log("Surface")}
                />
                <h4
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.2px",
                    color: "var(--text-strong)",
                  }}
                >
                  82 m²
                </h4>
              </div>

              {/* Position 6: Badge "ÉDITION" */}
              <Badge variant="success" theme={theme}>ÉDITION</Badge>

              {/* Position 7: Badge "RÉVISION" */}
              <Badge variant="disabled" theme={theme}>RÉVISION</Badge>

              {/* Position 8: Badge "PUBLICATION" */}
              <Badge variant="disabled" theme={theme}>PUBLICATION</Badge>
            </div>

            {/* Position 9: IconButton "close" */}
            <IconButton
              icon={<X size={20} />}
              variant="ghost"
              size="md"
              onClick={() => setIsAnnonceSheetOpen(false)}
              title="Fermer"
            />
          </div>
        }
      >
        <div className="px-10 py-8">
          {/* Section Galerie */}
          <div className="mb-8 relative">
            <div className="flex gap-0.5" style={{ width: "944px", height: "220px" }}>
              {/* Image 1 - avec coins arrondis à gauche */}
              <div style={{ width: "327px", height: "220px" }}>
                <img
                  src={imgRectangle21}
                  alt="Photo 1"
                  className="rounded-tl-2xl rounded-bl-2xl object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              {/* Image 2 - centrale */}
              <div style={{ width: "327px", height: "220px" }}>
                <img
                  src={imgRectangle23}
                  alt="Photo 2"
                  className="object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              {/* Image 3 - avec coins arrondis à droite + Button par dessus */}
              <div style={{ width: "290px", height: "220px", position: "relative" }}>
                <img
                  src={imgRectangle24}
                  alt="Photo 3"
                  className="rounded-tr-2xl rounded-br-2xl object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                  }}
                >
                  <Button
                    variant="default"
                    iconRight={<Image size={20} />}
                    onClick={() => setIsGalerieSheetOpen(true)}
                  >
                    Galerie
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Section informations complémentaires */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center">
              <IconButton
                icon={<Compass size={20} />}
                variant="ghost"
                size="md"
                onClick={() => console.log("Orientation")}
              />
              <h4
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0.2px",
                  color: "var(--text-strong)",
                }}
              >
                N.E
              </h4>
            </div>

            <div className="flex items-center">
              <IconButton
                icon={<Hammer size={20} />}
                variant="ghost"
                size="md"
                onClick={() => console.log("Année construction")}
              />
              <h4
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0.2px",
                  color: "var(--text-strong)",
                }}
              >
                2018
              </h4>
            </div>

            <div className="flex items-center">
              <IconButton
                icon={<MapPin size={20} />}
                variant="ghost"
                size="md"
                onClick={() => console.log("Localisation")}
              />
              <h4
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0.2px",
                  color: "var(--text-strong)",
                }}
              >
                Saint-jean-de-Luz
              </h4>
            </div>

            <div className="flex items-center">
              <IconButton
                icon={<Tag size={20} />}
                variant="ghost"
                size="md"
                onClick={() => console.log("Prix")}
              />
              <h4
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0.2px",
                  color: "var(--text-strong)",
                }}
              >
                340 000 €
              </h4>
            </div>

            <Badge variant="default" theme={theme}>1 450€ /m²</Badge>
          </div>

          {/* Section Copier le lien */}
          <div
            className="rounded-2xl mb-8"
            style={{
              backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
              padding: "25px 10px 25px 20px",
            }}
          >
            <div className="flex items-center gap-4">
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Copier
              </p>

              <div
                className="rounded-2xl"
                style={{
                  backgroundColor: isDark ? "var(--neutral-800)" : "white",
                  border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
                  padding: "21px 11px 21px 10px",
                  width: "741px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "var(--text-body)",
                    padding: "8px 10px",
                  }}
                >
                  http://www.realagent.com/fr/numero-de-reference-de-lannonce-du-bien-concerne
                </p>
              </div>

              <IconButton
                icon={<Copy size={20} />}
                variant="ghost"
                size="md"
                onClick={() => {
                  navigator.clipboard.writeText("http://www.realagent.com/fr/numero-de-reference-de-lannonce-du-bien-concerne");
                  console.log("Lien copié");
                }}
                title="Copier le lien"
              />
            </div>
          </div>

          {/* Divider avant Section Descriptif */}
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Divider spacing="none" />
          </div>

          {/* Section Descriptif de l'annonce */}
          <div className="mb-8">
            <h6
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.2px",
                color: "var(--text-strong)",
                marginBottom: "30px",
              }}
            >
              Splendide T4, prestations exceptionnelles
            </h6>
            <p
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "var(--text-body)",
                whiteSpace: "pre-line",
              }}
            >
              Dans le tout nouveau quartier des Halles Tropisme – Lepic à Montpellier, un superbe appartement neuf de type 4 pièces d'une surface généreuse de 84 m², , situé au 1er étage d'une petite résidence intimiste à l'architecture contemporaine. Cet appartement se distingue par sa belle pièce de vie lumineuse, ses deux chambres confortables, ainsi qu'une grande terrasse de 11,8 m² idéale pour profiter des beaux jours en toute tranquillité.

L'appartement bénéficie de prestations de qualité, pensées pour un confort de vie optimal : matériaux modernes, finitions soignées, isolation performante, et un agencement parfaitement étudié. Deux places de parking privatives complètent ce bien, ainsi qu'un local vélo commun, pratique pour les déplacements urbains.

Situé au calme, tout en étant proche du centre-ville, ce bien profite d'un emplacement stratégique, dans un quartier en plein essor qui accueillera la future ligne 5 du tramway, avec une mise en service prévue en décembre 2025. Ce nouvel axe de transport facilitera les déplacements quotidiens et valorisera davantage le secteur dans les années à venir.

Ce logement est idéal pour une résidence principale alliant confort et accessibilité, mais représente également une belle opportunité pour un investissement immobilier pérenne dans l'un des quartiers les plus prometteurs de Montpellier. Immobilière Déjean Pépin - Bertrand PEPIN Plus d'informations - Réf. 2644
            </p>
          </div>

          {/* Divider avant Section Caractéristiques */}
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Divider spacing="none" />
          </div>

          {/* Section Caractéristiques */}
          <div className="mb-8">
            <h6
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.2px",
                color: "var(--text-strong)",
                marginBottom: "30px",
              }}
            >
              Caractéristiques
            </h6>

            {/* 2 colonnes de chips */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Colonne 1 */}
              <div className="flex flex-col gap-6">
                <Chip size="medium" icon={<Layers size={20} />}>
                  3e étage / 5 étages
                </Chip>
                <Chip size="medium" icon={<ArrowUpDown size={20} />}>
                  Ascenseur
                </Chip>
                <Chip size="medium" icon={<SquareParking size={20} />}>
                  Box de stationnement
                </Chip>
                <Chip size="medium" icon={<Compass size={20} />}>
                  Exposition Nord Est
                </Chip>
              </div>

              {/* Colonne 2 */}
              <div className="flex flex-col gap-6">
                <Chip size="medium" icon={<CookingPot size={20} />}>
                  Cuisine équipée, cuisine ouverte
                </Chip>
                <Chip size="medium" icon={<Package size={20} />}>
                  Cave
                </Chip>
                <Chip size="medium" icon={<Bird size={20} />}>
                  Terrasse
                </Chip>
                <Chip size="medium" icon={<BedDouble size={20} />}>
                  2 chambres
                </Chip>
              </div>
            </div>

            {/* Bouton Voir toutes les caractéristiques */}
            <Button
              variant="outlined"
              onClick={() => console.log("Voir toutes les caractéristiques")}
            >
              Voir toutes les caractéristiques
            </Button>
          </div>

          {/* Divider avant Section Énergie */}
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Divider spacing="none" />
          </div>

          {/* Section Énergie */}
          <div className="mb-8">
            <h6
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.2px",
                color: "var(--text-strong)",
                marginBottom: "30px",
              }}
            >
              Énergie
            </h6>

            <div className="grid grid-cols-2 gap-6">
              {/* Colonne 1 - Électricité */}
              <div className="space-y-4" style={{ color: "var(--text-body)", fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: "8px" }}>Électricité</div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Type de source</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>individuel gaz</div>
                    </div>

                    <div>
                      <div style={{ width: "178px", fontWeight: 400, marginBottom: "8px" }}>DPE</div>
                      <DpeScale activeClass="A" theme={theme} />
                    </div>

                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Dernier diagnostic</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>2022</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colonne 2 - Chauffage */}
              <div className="space-y-4" style={{ color: "var(--text-body)", fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: "8px" }}>Chauffage</div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Type de chauffage</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>Collectif gaz</div>
                    </div>

                    <div>
                      <div style={{ width: "178px", fontWeight: 400, marginBottom: "8px" }}>GES</div>
                      <GesScale activeClass="A" theme={theme} />
                    </div>

                    <div className="grid grid-cols-2 gap-y-3">
                      <div style={{ width: "178px", fontWeight: 400 }}>Dernier diagnostic</div>
                      <div style={{ width: "178px", fontWeight: 400 }}>2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider avant Section Copropriété */}
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Divider spacing="none" />
          </div>

          {/* Section Copropriété */}
          <div className="mb-8">
            <h6
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.2px",
                color: "var(--text-strong)",
                marginBottom: "30px",
              }}
            >
              Copropriété
            </h6>

            <div className="grid grid-cols-2 gap-6">
              {/* Colonne 1 */}
              <div className="space-y-4" style={{ color: "var(--text-body)", fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                <div className="grid grid-cols-2 gap-y-3">
                  <div style={{ width: "178px", fontWeight: 400 }}>Nombre de lots</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>60</div>

                  <div style={{ width: "178px", fontWeight: 400 }}>Procédures syndicales</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>Aucune procédure en cours</div>
                </div>
              </div>

              {/* Colonne 2 */}
              <div className="space-y-4" style={{ color: "var(--text-body)", fontSize: "16px", lineHeight: "20px", fontFamily: "Roboto, sans-serif" }}>
                <div className="grid grid-cols-2 gap-y-3">
                  <div style={{ width: "178px", fontWeight: 400 }}>Charges annuelles</div>
                  <div style={{ width: "178px", fontWeight: 400 }}>1 640 €</div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider avant Section Prix dans le quartier */}
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Divider spacing="none" />
          </div>

          {/* Section Prix dans le quartier */}
          <div className="mb-8">
            <h6
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.2px",
                color: "var(--text-strong)",
                marginBottom: "30px",
              }}
            >
              Prix dans le quartier
            </h6>

            {/* Bloc avec fond vert */}
            <div
              className="relative mb-4 rounded-2xl p-6"
              style={{
                backgroundColor: isDark ? "var(--success-dark)" : "var(--success-50)",
                border: `1px solid ${isDark ? "var(--success-700)" : "var(--success-300)"}`,
                width: "530px",
                height: "94px",
              }}
            >
              <div className="flex items-center gap-3">
                <IconButton
                  icon={<Trophy size={20} />}
                  variant="ghost"
                  size="md"
                  onClick={() => console.log("Prix")}
                  style={{
                    backgroundColor: isDark ? "var(--success-dark)" : "var(--success-50)",
                  }}
                />
                <div>
                  <h6
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "24px",
                      letterSpacing: "0.2px",
                      color: isDark ? "var(--success-400)" : "var(--success-700)",
                    }}
                  >
                    4 826 € /m²
                  </h6>
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: isDark ? "var(--success-400)" : "var(--success-700)",
                      marginTop: "4px",
                    }}
                  >
                    Moins cher que des biens comparables dans la région.
                  </p>
                </div>
              </div>
            </div>

            {/* Barre de gradient */}
            <div
              className="mb-2 rounded-2xl"
              style={{
                width: "530px",
                height: "20px",
                background: "linear-gradient(to right, var(--success-400), var(--brand-500))",
              }}
            />

            {/* Labels de prix */}
            <div className="flex justify-between mb-6" style={{ width: "530px" }}>
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "var(--text-body)",
                }}
              >
                3 028 €/m²
              </p>
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "var(--text-body)",
                }}
              >
                5 804 €/m²
              </p>
            </div>

            {/* Texte explicatif */}
            <p
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                color: "var(--text-body)",
                maxWidth: "758px",
              }}
            >
              Le prix au m² est automatiquement calculé en fonction du prix de vente et du nombre de m² du bien. La comparaison est réalisée à partir des informations relatives au prix du marché sur le même secteur. Cette information ne préjuge en aucun cas de l'évaluation du bien, qui dépend de son état, ses caractéristiques et de sa localisation.
            </p>
          </div>

          {/* Divider avant Section Détails du prix */}
          <div style={{ marginTop: "40px", marginBottom: "40px" }}>
            <Divider spacing="none" />
          </div>

          {/* Section Détails du prix */}
          <div className="mb-8">
            <h6
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                letterSpacing: "0.2px",
                color: "var(--text-strong)",
                marginBottom: "30px",
              }}
            >
              Détails du prix
            </h6>

            {/* Chip vert succès */}
            <div
              className="flex items-center gap-1 mb-5 rounded-2xl px-3 py-2"
              style={{
                backgroundColor: isDark ? "var(--success-700)" : "var(--success-50)",
                width: "fit-content",
              }}
            >
              <Check
                size={24}
                style={{
                  color: isDark ? "var(--success-400)" : "var(--success-700)",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: isDark ? "var(--success-400)" : "var(--success-700)",
                  padding: "8px 10px",
                }}
              >
                Les honoraires sont à la charge du vendeur
              </p>
            </div>

            {/* Deux conteneurs côte à côte */}
            <div className="flex gap-5 mb-5">
              {/* Premier conteneur : Prix du bien + Frais de notaire */}
              <div
                className="relative rounded-2xl p-5 flex flex-col gap-4"
                style={{
                  backgroundColor: isDark ? "var(--neutral-800)" : "white",
                  border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
                }}
              >
                {/* Barre de gradient */}
                <div
                  className="rounded-2xl"
                  style={{
                    width: "380px",
                    height: "20px",
                    background: "linear-gradient(to right, var(--brand-500) 0%, var(--brand-500) 76.84%, var(--warning-500) 76.84%, var(--warning-500) 100%)",
                  }}
                />

                {/* Prix du bien */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div
                      className="rounded-2xl"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "var(--brand-500)",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "var(--text-body)",
                        padding: "8px 10px",
                      }}
                    >
                      Prix du bien
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                    }}
                  >
                    220 000 €
                  </p>
                </div>

                {/* Frais de notaire */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div
                      className="rounded-2xl"
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "var(--warning-500)",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "var(--text-body)",
                        padding: "8px 10px",
                      }}
                    >
                      Frais de notaire estimés (8%)
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                    }}
                  >
                    17 600 €
                  </p>
                </div>

                {/* Montant estimé du projet */}
                <div className="flex items-center justify-between">
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                    }}
                  >
                    Montant estimé du projet
                  </p>
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                    }}
                  >
                    237 600 €
                  </p>
                </div>
              </div>

              {/* Deuxième conteneur : Charges + Facture énergétique */}
              <div
                className="relative rounded-2xl p-5 flex flex-col gap-4"
                style={{
                  backgroundColor: isDark ? "var(--neutral-800)" : "white",
                  border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
                }}
              >
                {/* Charges de copropriété */}
                <div className="flex items-center justify-between">
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                    }}
                  >
                    Charges de copropriété
                  </p>
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                    }}
                  >
                    1 640 € /an
                  </p>
                </div>

                {/* Estimation de la facture énergétique */}
                <div className="flex items-center justify-between">
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                      maxWidth: "186px",
                    }}
                  >
                    Estimation de la facture énergétique
                  </p>
                  <p
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "var(--text-body)",
                      padding: "8px 10px",
                    }}
                  >
                    468 à 634 € /an
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton mensualités */}
            <div
              className="flex items-center justify-center gap-2 rounded-2xl px-3 py-3 cursor-pointer"
              style={{
                backgroundColor: isDark ? "var(--neutral-800)" : "white",
                border: `1px solid var(--text-body)`,
                width: "420px",
              }}
              onClick={() => console.log("Calcul mensualités")}
            >
              <Calculator size={20} style={{ color: "var(--text-body)" }} />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "var(--text-body)",
                }}
              >
                À partir de 1108 €/mois
              </p>
              <Info size={20} style={{ color: "var(--text-body)" }} />
            </div>
          </div>
        </div>
      </Sheet>
    </div>
  );
}
