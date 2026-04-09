/**
 * CLI-01 — Page création client
 * Parcours P06 : Ajouter un client | Vague 1
 * 
 * Formulaire complet en sections repliables dans une Sheet Wide.
 * Header avec titre « Nouveau client » et IconButton retour.
 * ProgressBar pour le suivi de complétion.
 */

"use client";

import React, { useState } from "react";
import { X, Save, Plus, Link } from "lucide-react";
import { Sheet } from "../../components/organisms/Sheet";
import { ProgressBar } from "../../components/atoms/ProgressBar";
import { CollapsibleSection } from "../../components/molecules/CollapsibleSection";
import { InputField } from "../../components/molecules/InputField";
import { SelectField } from "../../components/molecules/SelectField";
import { InlineMessage } from "../../components/molecules/InlineMessage";
import { Button } from "../../components/atoms/Button";
import { useTheme } from "../../context/ThemeContext";

export const CLI_01_PageCreationClient: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // État du Sheet
  const [isOpen, setIsOpen] = useState(true);

  // États du formulaire - Section Identité
  const [clientType, setClientType] = useState("");
  const [civilite, setCivilite] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  // États du formulaire - Section Coordonnées
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");

  // États du formulaire - Section Projet immobilier (Propriétaire)
  // Pas de champs supplémentaires, seulement les boutons

  // États du formulaire - Section Projet immobilier (Acquéreur)
  const [typeBienRecherche, setTypeBienRecherche] = useState("");
  const [budget, setBudget] = useState("");
  const [secteur, setSecteur] = useState("");
  const [surfaceMin, setSurfaceMin] = useState("");
  const [nbPieces, setNbPieces] = useState("");

  // États du formulaire - Section Projet immobilier (Locataire)
  const [typeBienRechercheLocataire, setTypeBienRechercheLocataire] = useState("");
  const [loyer, setLoyer] = useState("");
  const [secteurLocataire, setSecteurLocataire] = useState("");
  const [surfaceMinLocataire, setSurfaceMinLocataire] = useState("");
  const [nbPiecesLocataire, setNbPiecesLocataire] = useState("");

  // États du formulaire - Section Notes & tags
  const [note, setNote] = useState("");
  const [tags, setTags] = useState("");
  const [source, setSource] = useState("");

  // Détection de doublon (simulée)
  const [showDoublon, setShowDoublon] = useState(false);

  // Calcul de la complétude
  const calculateCompletion = () => {
    let filled = 0;
    const total = 12;
    
    if (clientType) filled++;
    if (civilite) filled++;
    if (nom) filled++;
    if (prenom) filled++;
    if (telephone) filled++;
    if (email) filled++;
    if (adresse) filled++;
    
    // Champs conditionnels selon le type de client
    if (clientType === "acquereur") {
      if (typeBienRecherche) filled++;
      if (budget) filled++;
      if (secteur) filled++;
      if (surfaceMin) filled++;
      if (nbPieces) filled++;
    } else if (clientType === "locataire") {
      if (typeBienRechercheLocataire) filled++;
      if (loyer) filled++;
      if (secteurLocataire) filled++;
      if (surfaceMinLocataire) filled++;
      if (nbPiecesLocataire) filled++;
    }
    
    if (note) filled++;
    if (tags) filled++;
    if (source) filled++;

    return Math.round((filled / total) * 100);
  };

  const handleNomChange = (value: string) => {
    setNom(value);
    // Simulation détection doublon
    if (value.toLowerCase().includes("dupont")) {
      setShowDoublon(true);
    } else {
      setShowDoublon(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Optionnel: navigation ou callback
  };

  // Détermine si la section Projet immobilier doit être affichée
  const shouldShowProjetSection = () => {
    return clientType === "proprietaire" || clientType === "acquereur" || clientType === "locataire";
  };

  // Rendu du contenu de la section Projet immobilier selon le type de client
  const renderProjetContent = () => {
    if (clientType === "proprietaire") {
      return (
        <div className="space-y-4">
          <div
            className="text-sm mb-4"
            style={{
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Gérez les biens de ce propriétaire
          </div>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              size="medium"
              iconLeft={<Link size={20} />}
              onClick={() => console.log("Associer un bien")}
            >
              Associer un bien
            </Button>
            <Button
              variant="secondary"
              size="medium"
              iconLeft={<Plus size={20} />}
              onClick={() => console.log("Créer un bien")}
            >
              Créer un bien
            </Button>
          </div>
        </div>
      );
    }

    if (clientType === "acquereur") {
      return (
        <div className="space-y-4">
          <SelectField
            label="Type de bien recherché"
            value={typeBienRecherche}
            onChange={setTypeBienRecherche}
            options={[
              { value: "appartement", label: "Appartement" },
              { value: "maison", label: "Maison" },
              { value: "terrain", label: "Terrain" },
              { value: "commerce", label: "Commerce" },
              { value: "bureau", label: "Bureau" },
            ]}
            placeholder="Sélectionner un type de bien"
          />

          <InputField
            label="Budget"
            value={budget}
            onChange={setBudget}
            placeholder="Ex: 300 000 - 400 000 €"
            helperText="Fourchette de prix"
          />

          <InputField
            label="Secteur géographique"
            value={secteur}
            onChange={setSecteur}
            placeholder="Communes recherchées..."
            helperText="Auto-complétion des communes"
          />

          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Surface min (m²)"
              value={surfaceMin}
              onChange={setSurfaceMin}
              placeholder="Ex: 80"
            />

            <InputField
              label="Nombre de pièces"
              value={nbPieces}
              onChange={setNbPieces}
              placeholder="Ex: 3"
            />
          </div>
        </div>
      );
    }

    if (clientType === "locataire") {
      return (
        <div className="space-y-4">
          <SelectField
            label="Type de bien recherché"
            value={typeBienRechercheLocataire}
            onChange={setTypeBienRechercheLocataire}
            options={[
              { value: "appartement", label: "Appartement" },
              { value: "maison", label: "Maison" },
              { value: "studio", label: "Studio" },
              { value: "commerce", label: "Commerce" },
              { value: "bureau", label: "Bureau" },
            ]}
            placeholder="Sélectionner un type de bien"
          />

          <InputField
            label="Loyer"
            value={loyer}
            onChange={setLoyer}
            placeholder="Ex: 800 - 1 200 € / mois"
            helperText="Fourchette de loyer"
          />

          <InputField
            label="Secteur géographique"
            value={secteurLocataire}
            onChange={setSecteurLocataire}
            placeholder="Communes recherchées..."
            helperText="Auto-complétion des communes"
          />

          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Surface min (m²)"
              value={surfaceMinLocataire}
              onChange={setSurfaceMinLocataire}
              placeholder="Ex: 50"
            />

            <InputField
              label="Nombre de pièces"
              value={nbPiecesLocataire}
              onChange={setNbPiecesLocataire}
              placeholder="Ex: 2"
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--surface-page)",
      }}
    >
      <Sheet
        isOpen={isOpen}
        onClose={handleClose}
        title="Nouveau client"
        width="wide"
        showHeaderDivider={false}
        closeIcon={<X size={20} />}
        footer={
          <div
            className="px-8 py-6 border-t"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
              borderColor: "var(--border-default)",
            }}
          >
            <div className="flex justify-end">
              <Button
                variant="primary"
                size="medium"
                iconLeft={<Save size={20} />}
              >
                Enregistrer
              </Button>
            </div>
          </div>
        }
      >
        {/* ProgressBar - sous le header, avant le formulaire */}
        <div className="px-8 pt-6 pb-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <ProgressBar progress={calculateCompletion()} />
            </div>
            <div
              className="text-sm font-medium"
              style={{
                color: "var(--text-body)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {calculateCompletion()}% complété
            </div>
          </div>
        </div>

        {/* Contenu du formulaire */}
        <div className="px-8 pb-6">
          <div className="space-y-4">
            {/* Section Identité */}
            <CollapsibleSection
              title="Identité"
              defaultExpanded={true}
            >
              <div className="space-y-4">
                <SelectField
                  label="Type de client"
                  value={clientType}
                  onChange={setClientType}
                  options={[
                    { value: "proprietaire", label: "Propriétaire" },
                    { value: "acquereur", label: "Acquéreur" },
                    { value: "locataire", label: "Locataire" },
                    { value: "vendeur", label: "Vendeur" },
                    { value: "autre", label: "Autre" },
                  ]}
                  placeholder="Sélectionner un type"
                  required
                />

                <div className="grid grid-cols-3 gap-4">
                  <SelectField
                    label="Civilité"
                    value={civilite}
                    onChange={setCivilite}
                    options={[
                      { value: "m", label: "M." },
                      { value: "mme", label: "Mme" },
                    ]}
                    placeholder="Civilité"
                    required
                  />

                  <InputField
                    label="Nom"
                    value={nom}
                    onChange={handleNomChange}
                    placeholder="Nom"
                    required
                  />

                  <InputField
                    label="Prénom"
                    value={prenom}
                    onChange={setPrenom}
                    placeholder="Prénom"
                    required
                  />
                </div>

                {/* Alerte doublon */}
                {showDoublon && (
                  <InlineMessage
                    type="warning"
                    message="Un client similaire existe déjà : M. Dupont (Propriétaire) - Agent : Marie Martin"
                    actionLabel="Voir la fiche"
                    onAction={() => console.log("Voir la fiche")}
                    secondaryActionLabel="Créer quand même"
                    onSecondaryAction={() => setShowDoublon(false)}
                  />
                )}
              </div>
            </CollapsibleSection>

            {/* Section Coordonnées */}
            <CollapsibleSection
              title="Coordonnées"
              defaultExpanded={true}
            >
              <div className="space-y-4">
                <InputField
                  label="Téléphone"
                  value={telephone}
                  onChange={setTelephone}
                  placeholder="+33 6 12 34 56 78"
                  helperText="Format international auto-détecté"
                  required
                />

                <InputField
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  type="email"
                  placeholder="email@exemple.fr"
                  helperText="Validation du format automatique"
                  required
                />

                <InputField
                  label="Adresse"
                  value={adresse}
                  onChange={setAdresse}
                  placeholder="Commencez à taper une adresse..."
                  helperText="Auto-complétion via API adresse.data.gouv.fr"
                />

                <div
                  className="text-sm"
                  style={{
                    color: "var(--text-subtle)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  * Au moins un moyen de contact requis
                </div>
              </div>
            </CollapsibleSection>

            {/* Section Projet immobilier - Conditionnelle */}
            {shouldShowProjetSection() && (
              <CollapsibleSection
                title="Projet immobilier"
                defaultExpanded={false}
              >
                {renderProjetContent()}
              </CollapsibleSection>
            )}

            {/* Section Notes & tags */}
            <CollapsibleSection
              title="Notes & tags"
              defaultExpanded={false}
            >
              <div className="space-y-4">
                <div>
                  <label
                    className="block mb-2 text-sm font-semibold"
                    style={{
                      color: "var(--text-body)",
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "14px",
                      lineHeight: "16px",
                    }}
                  >
                    Note interne
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Ajoutez vos notes..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border transition-colors"
                    style={{
                      backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
                      borderColor: isDark ? "var(--neutral-700)" : "var(--border-default)",
                      color: "var(--text-body)",
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  />
                </div>

                <InputField
                  label="Tags"
                  value={tags}
                  onChange={setTags}
                  placeholder="Ex: VIP, Urgent, Paris 15e..."
                  helperText="Multi-sélection, créables"
                />

                <SelectField
                  label="Source d'acquisition"
                  value={source}
                  onChange={setSource}
                  options={[
                    { value: "bouche", label: "Bouche-à-oreille" },
                    { value: "portail", label: "Portail immobilier" },
                    { value: "vitrine", label: "Vitrine agence" },
                    { value: "reseau", label: "Réseau social" },
                    { value: "autre", label: "Autre" },
                  ]}
                  placeholder="Sélectionner une source"
                />
              </div>
            </CollapsibleSection>
          </div>
        </div>
      </Sheet>
    </div>
  );
};
