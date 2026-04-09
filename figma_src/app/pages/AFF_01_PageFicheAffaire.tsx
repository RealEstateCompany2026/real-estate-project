/**
 * AFF_01_PageFicheAffaire - Page de détail d'une affaire
 * Parcours P10 - Fiche affaire
 *
 * Structure:
 * - AppBarDetail
 * - AppBarAffaireAncres (sticky)
 * - Sections: Mandat, Activité, Annonce, Leads, Visites, Promesse, Finance, Notaire, CA, Messages
 */

"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  AppBarDetail,
  AppBarAffaireAncres,
  GraphCourbe,
  LogHistory,
  Sheet,
  AppBarEventQuinte,
} from "../components/organisms";
import { Chip, ChipDate } from "../components/atoms/Chip";
import { Badge } from "../components/atoms/Badge";
import { KpiIndicator } from "../components/atoms/KpiIndicator";
import { Button, IconButton } from "../components/atoms/Button";
import { Divider } from "../components/atoms/Divider";
import { ListMandat } from "../components/molecules/ListMandat";
import { ListAnnonce } from "../components/molecules/ListAnnonce";
import { ListClient } from "../components/components";
import { ListVisite } from "../components/molecules/ListVisite";
import { ListPromesse } from "../components/molecules/ListPromesse";
import { ListFinance } from "../components/molecules/ListFinance";
import { ListActeNotarie } from "../components/molecules/ListActeNotarie";
import { CardCA } from "../components/molecules/CardCA";
import { Home, Maximize2, MapPin, Tag, Plus, ListChecks, Database, Drill, ScrollText, Inbox, ThumbsUp, User, Calendar, MessageCircle, ArrowRight, X, Square, Compass, Hammer, Layers, ArrowUpDown, SquareParking, CookingPot, Package, Bird, BedDouble, Trophy, Calculator, Check, Info, Image, Copy, FileText } from "lucide-react";
import { MessageReceived } from "../components/molecules/MessageReceived";
import { MessageSent } from "../components/molecules/MessageSent";
import { DpeScale } from "../components/atoms/DpeScale";
import { GesScale } from "../components/atoms/GesScale";
import { IconDpe } from "../components/atoms/IconDpe";
import imgRectangle21 from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";
import imgRectangle22 from "figma:asset/d7b9b6cf39e9824f536d3d440df891f98e8aa3b3.png";
import imgRectangle23 from "figma:asset/fe5b53ca8a5da70fa46d1ac005bde7c58dc2fd2c.png";
import imgRectangle24 from "figma:asset/bf9fbb324551f3970ab08000b5fdf2c776660973.png";

export default function AFF_01_PageFicheAffaire() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isActiviteSheetOpen, setIsActiviteSheetOpen] = useState(false);
  const [isMessagerieSheetOpen, setIsMessagerieSheetOpen] = useState(false);
  const [isMandatSheetOpen, setIsMandatSheetOpen] = useState(false);
  const [isAnnonceSheetOpen, setIsAnnonceSheetOpen] = useState(false);
  const [isGalerieSheetOpen, setIsGalerieSheetOpen] = useState(false);
  const [isVisiteSheetOpen, setIsVisiteSheetOpen] = useState(false);
  const [isPromesseSheetOpen, setIsPromesseSheetOpen] = useState(false);

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

  // Styles
  const sectionBackground = isDark ? "var(--neutral-800)" : "var(--neutral-white)";
  const textHeading = "var(--text-headings)";

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
  ];

  return (
    <div
      style={{
        backgroundColor: isDark ? "var(--neutral-900)" : "var(--neutral-white)",
        minHeight: "100vh",
      }}
    >
      {/* Position 1: AppBar Detail - Sticky en haut */}
      <div className="sticky top-0 z-20">
        <AppBarDetail
          title="MV.789.083.263"
          onBack={() => console.log("Back clicked")}
          badges={[{ label: "VENTE", variant: "success" }]}
          aiSuggestions={1}
          gap="lg"
        >
          {/* Chip Medium type de bien avec icône Home */}
          <Chip size="medium" icon={<Home size={20} />}>T4</Chip>

          {/* Chip Medium surface avec icône Maximize2 */}
          <Chip size="medium" icon={<Maximize2 size={20} />}>84 m²</Chip>

          {/* Chip Medium ville avec icône MapPin */}
          <Chip size="medium" icon={<MapPin size={20} />}>Charleville-Mézière</Chip>

          {/* Chip Medium prix avec icône Tag */}
          <Chip size="medium" icon={<Tag size={20} />}>360 000€</Chip>
        </AppBarDetail>
      </div>

      {/* Container principal avec gouttière gauche 25px et largeur max 1216px */}
      <div className="pl-[25px] space-y-0" style={{ maxWidth: "1216px" }}>
        {/* Position 2: GraphCourbe */}
        <GraphCourbe
          percentage={82}
          trend={12}
          trendDirection="up"
        />

        {/* Position 3: AppBar Affaire Ancres - Sticky sous AppBarDetail et GraphCourbe */}
        <div className="sticky z-10" style={{ top: "100px" }}>
          <AppBarAffaireAncres onItemClick={handleAnchorClick} />
        </div>
        {/* Divider avant Section Mandat */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Position 4: Section Mandat */}
        <section id="mandat" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              style={{
                color: "var(--text-strong)",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Mandat
            </h2>
            <Badge variant="default" theme={theme}>1</Badge>
          </div>
          <ListMandat
            items={[
              {
                id: "1",
                reference: "MV.789.083.263",
                editionStatus: "success",
                revisionStatus: "disabled",
                signatureStatus: "disabled",
                aiSuggestions: 1,
                onView: () => setIsMandatSheetOpen(true),
              },
            ]}
          />
        </section>

        {/* Divider avant Section Activités */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Position 5: Section Activités */}
        <section id="activite" className="pt-[30px] pb-[50px]">
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

        {/* Divider avant Section Annonce */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Position 6: Section Annonce */}
        <section id="annonce" style={{ padding: "0", backgroundColor: sectionBackground }}>
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

        {/* Divider avant Section Leads */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Position 7: Section Leads */}
        <section id="leads" className="pt-[30px] pb-[50px]">
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
                  Leads
                </h2>
                <Badge variant="default" theme={theme}>24</Badge>
              </div>

              {/* 3 Chips filtres */}
              <div className="flex items-center gap-[24px]">
                <Chip size="medium" icon={<ListChecks size={20} />}>
                  Tous
                </Chip>
                <Chip size="medium" icon={<Inbox size={20} />} disabled>
                  Entrants
                </Chip>
                <Chip size="medium" icon={<ThumbsUp size={20} />} disabled>
                  Qualifiés
                </Chip>
              </div>
            </div>

            <Button variant="ghost">
              Voir tout →
            </Button>
          </div>

          {/* Liste de clients (leads) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "17px" }}>
            <ListClient
              name="DUPONT, Marie"
              tags={["ACQUÉREUR"]}
              qualification={78}
              engagement={65}
              conversion={42}
              reactivation={12}
              onClick={() => console.log("Client clicked")}
            />
            <ListClient
              name="MARTIN, Pierre"
              tags={["ACQUÉREUR"]}
              qualification={65}
              engagement={80}
              conversion={55}
              reactivation={8}
              onClick={() => console.log("Client clicked")}
            />
            <ListClient
              name="BERNARD, Sophie"
              tags={["ACQUÉREUR"]}
              qualification={82}
              engagement={72}
              conversion={38}
              reactivation={15}
              onClick={() => console.log("Client clicked")}
            />
          </div>
        </section>

        {/* Divider avant Section Visites */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Section Visites */}
        <section id="visites" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              style={{
                color: "var(--text-strong)",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Visites
            </h2>
            <Badge variant="default" theme={theme}>3</Badge>
          </div>

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
                onView: () => setIsVisiteSheetOpen(true),
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
        </section>

        {/* Divider avant Section Promesse */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Section Promesse */}
        <section id="promesse" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              style={{
                color: "var(--text-strong)",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Promesse
            </h2>
            <Badge variant="default" theme={theme}>2</Badge>
          </div>

          <ListPromesse
            items={[
              {
                id: "1",
                clientName: "Nathalie DUFLOT",
                recueStatus: "success",
                transmiseStatus: "success",
                accordStatus: "success",
                aiSuggestions: 0,
                onView: () => setIsPromesseSheetOpen(true),
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
            ]}
          />
        </section>

        {/* Divider avant Section Finance */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Section Finance */}
        <section id="finance" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              style={{
                color: "var(--text-strong)",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Finance
            </h2>
            <Badge variant="default" theme={theme}>1</Badge>
          </div>

          <ListFinance
            items={[
              {
                id: "1",
                name: "Nathalie DUFLOT",
                status: "INCOMPLET",
                notesCount: 0,
              },
            ]}
            onViewNotes={(item) => console.log("Voir notes pour", item.name)}
          />
        </section>

        {/* Divider avant Section Notaire */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Section Notaire */}
        <section id="notaire" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              style={{
                color: "var(--text-strong)",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Notaire
            </h2>
            <Badge variant="default" theme={theme}>1</Badge>
          </div>

          <ListActeNotarie
            items={[
              {
                id: "1",
                notaireName: "Nathalie DUFLOT",
                dateTime: "12 mar 2026 à 17h30",
                status: "PROGRAMME",
                aiSuggestions: 0,
              },
            ]}
            onViewNotes={(item) => console.log("Voir notes pour", item.notaireName)}
          />
        </section>

        {/* Divider avant Section CA */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Section CA */}
        <section id="ca" className="pt-[30px] pb-[50px]">
          <div className="flex items-center gap-1 mb-6">
            <h2
              style={{
                color: "var(--text-strong)",
                fontSize: "28px",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              CA
            </h2>
            <Badge variant="default" theme={theme}>1</Badge>
          </div>

          <CardCA
            chiffreAffaire="32 000€"
            couts="3 900€"
            margeBrute="28 100€"
            tauxMarge="88%"
          />
        </section>

        {/* Divider avant Section Messages */}
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Divider spacing="none" />
        </div>

        {/* Section Messages */}
        <section id="messages" className="pt-[30px] pb-[50px]">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-1">
              <h2
                style={{
                  color: "var(--text-strong)",
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

      {/* Sheet pour le détail du mandat */}
      <Sheet
        isOpen={isMandatSheetOpen}
        onClose={() => setIsMandatSheetOpen(false)}
        width="narrow"
        title="MV.789.083.263"
        footer={
          <div className="flex gap-3">
            <Button
              variant="default"
              iconRight={<ArrowRight size={20} />}
              onClick={() => console.log("Voir le mandat")}
            >
              Voir le mandat
            </Button>
            <Button
              variant="outlined"
              iconRight={<ArrowRight size={20} />}
              onClick={() => console.log("Écrire au client")}
            >
              Écrire au client
            </Button>
          </div>
        }
      >
        <div className="px-6 pt-6 pb-6 space-y-4">
          {/* Card 1: Édition du mandat */}
          <div
            className="rounded-2xl p-5 space-y-2"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Édition du mandat
              </div>
              <Badge variant="success" theme={theme}>
                ÉDITÉ
              </Badge>
            </div>
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
                padding: "8px 10px",
              }}
            >
              Édité le 12 fév. 2026
            </div>
          </div>

          {/* Card 2: Révision du mandat */}
          <div
            className="rounded-2xl p-5 space-y-2"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Révision du mandat
              </div>
              <Badge variant="success" theme={theme}>
                RÉVISÉ
              </Badge>
            </div>
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
                padding: "8px 10px",
              }}
            >
              Révisé le 13 fév. 2026
            </div>
          </div>

          {/* Card 3: Signature du mandat */}
          <div
            className="rounded-2xl p-5 space-y-2"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Signature du mandat
              </div>
              <Badge variant="disabled" theme={theme}>
                SIGNATURE
              </Badge>
            </div>
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
                padding: "8px 10px",
              }}
            >
              Envoyé le 14 fév. 2026
            </div>
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
                padding: "8px 10px",
              }}
            >
              En attente de signature
            </div>
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
              <Badge variant="success" theme={theme}>RÉVISION</Badge>

              {/* Position 8: Badge "PUBLICATION" */}
              <Badge variant="warning" theme={theme}>PUBLICATION</Badge>
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
                Montpellier
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
                      color: isDark ? "var(--success-500)" : "var(--success-700)",
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
                      color: isDark ? "var(--success-500)" : "var(--success-700)",
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
                background: "linear-gradient(to right, var(--success-500), var(--brand-500))",
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
                  color: isDark ? "var(--success-500)" : "var(--success-700)",
                }}
              />
              <p
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: isDark ? "var(--success-500)" : "var(--success-700)",
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
                    background: "linear-gradient(to right, var(--brand-500) 0%, var(--brand-500) 76.84%, var(--warning-400) 76.84%, var(--warning-400) 100%)",
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
                        backgroundColor: "var(--warning-400)",
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

      {/* Sheet pour le détail de la visite */}
      <Sheet
        isOpen={isVisiteSheetOpen}
        onClose={() => setIsVisiteSheetOpen(false)}
        width="narrow"
        title="Nathalie DUFLOT"
      >
        <div className="px-6 pt-6 pb-6 space-y-4">
          {/* Card 1: Invitations */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            {/* Titre avec icône */}
            <div className="flex items-center gap-1">
              <User size={20} style={{ color: "var(--text-body)" }} />
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                }}
              >
                Invitations
              </div>
            </div>

            {/* Nathalie DUFLOT */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Nathalie DUFLOT
              </div>
              <Badge variant="success" theme={theme}>
                RÉSERVÉ
              </Badge>
            </div>

            {/* Jacques DUFLOT */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Jacques DUFLOT
              </div>
              <Badge variant="success" theme={theme}>
                RÉSERVÉ
              </Badge>
            </div>

            {/* Bouton Date et heure */}
            <Button
              variant="outlined"
              iconLeft={<Calendar size={20} />}
              onClick={() => console.log("Date et heure")}
              className="w-full"
            >
              12 fév. 2026 à 14h00
            </Button>

            {/* Moi */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Moi
              </div>
              <Badge variant="warning" theme={theme}>
                CONFIRMER
              </Badge>
            </div>
          </div>

          {/* Card 2: Ordre du Jour */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            {/* Titre avec icône */}
            <div className="flex items-center gap-1">
              <FileText size={20} style={{ color: "var(--text-body)" }} />
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                }}
              >
                Ordre du Jour
              </div>
            </div>

            {/* Édition */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Édition
              </div>
              <Badge variant="success" theme={theme}>
                EDITÉ
              </Badge>
            </div>

            {/* Révision */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Révision
              </div>
              <Badge variant="success" theme={theme}>
                RÉVISÉ
              </Badge>
            </div>

            {/* Envoi */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Envoi
              </div>
              <Badge variant="warning" theme={theme}>
                ENVOYER
              </Badge>
            </div>

            {/* Bouton Voir l'Ordre du jour */}
            <Button
              variant="outlined"
              onClick={() => console.log("Voir l'Ordre du jour")}
              className="w-full"
            >
              Voir l'Ordre du jour
            </Button>
          </div>

          {/* Card 3: Compte-rendu */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            {/* Titre avec icône */}
            <div className="flex items-center gap-1">
              <FileText size={20} style={{ color: "var(--text-body)" }} />
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                }}
              >
                Compte-rendu
              </div>
            </div>

            {/* Édition */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Édition
              </div>
              <Badge variant="disabled" theme={theme}>
                EDITER
              </Badge>
            </div>

            {/* Révision */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Révision
              </div>
              <Badge variant="disabled" theme={theme}>
                RÉVISER
              </Badge>
            </div>

            {/* Envoi */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Envoi
              </div>
              <Badge variant="disabled" theme={theme}>
                ENVOYER
              </Badge>
            </div>

            {/* Bouton Voir le Compte-rendu */}
            <Button
              variant="outlined"
              onClick={() => console.log("Voir le Compte-rendu")}
              className="w-full"
            >
              Voir le Compte-rendu
            </Button>
          </div>
        </div>
      </Sheet>

      {/* Sheet pour le détail de la promesse */}
      <Sheet
        isOpen={isPromesseSheetOpen}
        onClose={() => setIsPromesseSheetOpen(false)}
        width="narrow"
        title="Promesse d'achat"
      >
        <div className="px-6 pt-6 pb-6 space-y-4">
          {/* Card 1: Nathalie DUFLOT */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            {/* Titre avec icône */}
            <div className="flex items-center gap-1">
              <User size={20} style={{ color: "var(--text-body)" }} />
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                }}
              >
                Nathalie DUFLOT
              </div>
            </div>

            {/* Promesse reçue */}
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
                padding: "8px 10px",
              }}
            >
              Promesse reçue le 12 fév. 2026
            </div>

            {/* Bouton Promesse d'achat */}
            <Button
              variant="outlined"
              onClick={() => console.log("Promesse d'achat")}
              className="w-full"
            >
              Promesse d'achat
            </Button>
          </div>

          {/* Card 2: Transmission */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            {/* Titre avec icône */}
            <div className="flex items-center gap-1">
              <FileText size={20} style={{ color: "var(--text-body)" }} />
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                }}
              >
                Transmission
              </div>
            </div>

            {/* Contrôle */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Contrôle
              </div>
              <Badge variant="success" theme={theme}>
                CONTRÔLÉ
              </Badge>
            </div>

            {/* Révision */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Révision
              </div>
              <Badge variant="success" theme={theme}>
                RÉVISÉ
              </Badge>
            </div>

            {/* Envoi au propriétaire */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Envoi au propriétaire
              </div>
              <Badge variant="warning" theme={theme}>
                ENVOYER
              </Badge>
            </div>
          </div>

          {/* Card 3: Accord */}
          <div
            className="rounded-2xl p-5 space-y-4"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "white",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
            }}
          >
            {/* Titre avec icône */}
            <div className="flex items-center gap-1">
              <FileText size={20} style={{ color: "var(--text-body)" }} />
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                }}
              >
                Accord
              </div>
            </div>

            {/* Décision du client */}
            <div className="flex items-center justify-between">
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                  color: "var(--text-body)",
                  padding: "8px 10px",
                }}
              >
                Décision du client
              </div>
              <Badge variant="success" theme={theme}>
                VALIDER
              </Badge>
            </div>
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
    </div>
  );
}
