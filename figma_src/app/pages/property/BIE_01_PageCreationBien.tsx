/**
 * BIE-01 — Page création bien
 * Parcours P07 : Ajouter un bien | Vague 1
 * 
 * Formulaire multi-sections repliables dans une Sheet Wide.
 * Header avec titre « Nouveau bien » et IconButton close.
 * ProgressBar pour le suivi de complétion.
 */

"use client";

import React, { useState } from "react";
import { X, Save } from "lucide-react";
import { Sheet } from "../../components/organisms/Sheet";
import { ProgressBar } from "../../components/atoms/ProgressBar";
import { CollapsibleSection } from "../../components/molecules/CollapsibleSection";
import { InputField } from "../../components/molecules/InputField";
import { SelectField } from "../../components/molecules/SelectField";
import { InlineMessage } from "../../components/molecules/InlineMessage";
import { Button } from "../../components/atoms/Button";
import { FileUpload } from "../../components/molecules/FileUpload";
import { IconDpe } from "../../components/atoms/IconDpe";
import { Checkbox } from "../../components/atoms/Checkbox";
import { useTheme } from "../../context/ThemeContext";

export const BIE_01_PageCreationBien: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // État du Sheet
  const [isOpen, setIsOpen] = useState(true);

  // États du formulaire - Informations clés
  const [typeBien, setTypeBien] = useState("");
  const [sousType, setSousType] = useState("");
  const [typeOperation, setTypeOperation] = useState("");
  const [adresse, setAdresse] = useState("");
  const [surface, setSurface] = useState("");
  const [pieces, setPieces] = useState("");
  const [prix, setPrix] = useState("");
  const [proprietaire, setProprietaire] = useState("");
  const [etage, setEtage] = useState("");
  const [anneeConstruction, setAnneeConstruction] = useState("");
  const [etatGeneral, setEtatGeneral] = useState("");

  // États du formulaire - Caractéristiques
  const [surfaceTerrain, setSurfaceTerrain] = useState("");
  const [chambres, setChambres] = useState("");
  const [sdb, setSdb] = useState("");
  const [chauffage, setChauffage] = useState("");
  const [exposition, setExposition] = useState("");
  const [dpe, setDpe] = useState<"A" | "B" | "C" | "D" | "E" | "F" | "G" | null>(null);
  const [charges, setCharges] = useState("");
  const [taxeFonciere, setTaxeFonciere] = useState("");

  // Annexes (checkboxes)
  const [annexes, setAnnexes] = useState({
    cave: false,
    parking: false,
    balcon: false,
    terrasse: false,
    jardin: false,
    piscine: false,
  });

  // États du formulaire - Notes & statut
  const [statutBien, setStatutBien] = useState("");
  const [reference, setReference] = useState("");
  const [mandat, setMandat] = useState("");
  const [noteInterne, setNoteInterne] = useState("");
  const [tags, setTags] = useState("");

  // Détection de doublon adresse (simulée)
  const [showDoublonAdresse, setShowDoublonAdresse] = useState(false);

  // Calcul de la complétude avec pondération
  const calculateCompletion = () => {
    let score = 0;
    const weights = {
      // Informations clés (poids 3 - obligatoires)
      typeBien: 3,
      typeOperation: 3,
      adresse: 3,
      surface: 3,
      prix: 3,
      proprietaire: 3,
      
      // Informations complémentaires (poids 1)
      etage: 1,
      anneeConstruction: 1,
      etatGeneral: 1,
      
      // Caractéristiques (poids 1)
      chambres: 1,
      dpe: 1,
      
      // Notes & statut (poids 2)
      statutBien: 2,
      reference: 2,
    };

    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    
    if (typeBien) score += weights.typeBien;
    if (typeOperation) score += weights.typeOperation;
    if (adresse) score += weights.adresse;
    if (surface) score += weights.surface;
    if (prix) score += weights.prix;
    if (proprietaire) score += weights.proprietaire;
    if (etage) score += weights.etage;
    if (anneeConstruction) score += weights.anneeConstruction;
    if (etatGeneral) score += weights.etatGeneral;
    if (chambres) score += weights.chambres;
    if (dpe) score += weights.dpe;
    if (statutBien) score += weights.statutBien;
    if (reference) score += weights.reference;

    return Math.round((score / totalWeight) * 100);
  };

  const handleAdresseChange = (value: string) => {
    setAdresse(value);
    // Simulation détection doublon adresse
    if (value.toLowerCase().includes("champs")) {
      setShowDoublonAdresse(true);
    } else {
      setShowDoublonAdresse(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Navigation ou callback ici
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
        title="Nouveau bien"
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

        {/* Formulaire */}
        <div className="px-8 pb-8 space-y-4">
          {/* Section Informations clés */}
          <CollapsibleSection title="Informations clés" defaultExpanded={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <SelectField
                  label="Type de bien"
                  value={typeBien}
                  onChange={setTypeBien}
                  options={[
                    { value: "appartement", label: "Appartement" },
                    { value: "maison", label: "Maison" },
                    { value: "terrain", label: "Terrain" },
                    { value: "commerce", label: "Commerce" },
                    { value: "bureau", label: "Bureau" },
                  ]}
                  placeholder="Sélectionner un type"
                  required
                />

                <SelectField
                  label="Sous-type"
                  value={sousType}
                  onChange={setSousType}
                  options={[
                    { value: "t1", label: "T1" },
                    { value: "t2", label: "T2" },
                    { value: "t3", label: "T3" },
                    { value: "t4", label: "T4" },
                    { value: "t5", label: "T5+" },
                  ]}
                  placeholder="Préciser"
                  disabled={!typeBien}
                />
              </div>

              <SelectField
                label="Type d'opération"
                value={typeOperation}
                onChange={setTypeOperation}
                options={[
                  { value: "vente", label: "Vente" },
                  { value: "location", label: "Location" },
                  { value: "viager", label: "Viager" },
                ]}
                placeholder="Sélectionner le type d'opération"
                required
              />

              <InputField
                label="Adresse"
                value={adresse}
                onChange={handleAdresseChange}
                placeholder="Commencez à taper une adresse..."
                helperText="Auto-complétion via API adresse.data.gouv.fr"
                required
              />

              {/* Alerte doublon adresse */}
              {showDoublonAdresse && (
                <InlineMessage
                  type="warning"
                  message="Bien similaire : Appartement T3, 85m² - Avenue des Champs-Élysées (En vente)"
                  actionLabel="Voir la fiche"
                  onAction={() => console.log("Voir la fiche")}
                  secondaryActionLabel="Créer quand même"
                  onSecondaryAction={() => setShowDoublonAdresse(false)}
                />
              )}

              <div className="grid grid-cols-3 gap-4">
                <InputField
                  label="Surface (m²)"
                  value={surface}
                  onChange={setSurface}
                  placeholder="Ex: 85"
                  required
                />

                <InputField
                  label="Nombre de pièces"
                  value={pieces}
                  onChange={setPieces}
                  placeholder="Ex: 3"
                  required
                />

                <InputField
                  label="Prix"
                  value={prix}
                  onChange={setPrix}
                  placeholder="Ex: 350000"
                  required
                />
              </div>

              <SelectField
                label="Propriétaire"
                value={proprietaire}
                onChange={setProprietaire}
                options={[
                  { value: "dupont", label: "M. Dupont Jean" },
                  { value: "martin", label: "Mme Martin Sophie" },
                  { value: "nouveau", label: "+ Nouveau propriétaire" },
                ]}
                placeholder="Sélectionner ou créer un propriétaire"
                required
              />

              <div className="grid grid-cols-3 gap-4">
                <InputField
                  label="Étage"
                  value={etage}
                  onChange={setEtage}
                  placeholder="Ex: 3"
                />

                <InputField
                  label="Année de construction"
                  value={anneeConstruction}
                  onChange={setAnneeConstruction}
                  placeholder="Ex: 1998"
                />

                <SelectField
                  label="État général"
                  value={etatGeneral}
                  onChange={setEtatGeneral}
                  options={[
                    { value: "neuf", label: "Neuf" },
                    { value: "excellent", label: "Excellent" },
                    { value: "bon", label: "Bon" },
                    { value: "correct", label: "Correct" },
                    { value: "renover", label: "À rénover" },
                  ]}
                  placeholder="État"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Section Caractéristiques */}
          <CollapsibleSection title="Caractéristiques" defaultExpanded={false}>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <InputField
                  label="Surface terrain (m²)"
                  value={surfaceTerrain}
                  onChange={setSurfaceTerrain}
                  placeholder="Ex: 500"
                />

                <InputField
                  label="Chambres"
                  value={chambres}
                  onChange={setChambres}
                  placeholder="Ex: 2"
                />

                <InputField
                  label="Salles de bain"
                  value={sdb}
                  onChange={setSdb}
                  placeholder="Ex: 1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SelectField
                  label="Chauffage"
                  value={chauffage}
                  onChange={setChauffage}
                  options={[
                    { value: "individuel-gaz", label: "Individuel gaz" },
                    { value: "individuel-elec", label: "Individuel électrique" },
                    { value: "collectif", label: "Collectif" },
                    { value: "pompe-chaleur", label: "Pompe à chaleur" },
                  ]}
                  placeholder="Type de chauffage"
                />

                <SelectField
                  label="Exposition"
                  value={exposition}
                  onChange={setExposition}
                  options={[
                    { value: "nord", label: "Nord" },
                    { value: "sud", label: "Sud" },
                    { value: "est", label: "Est" },
                    { value: "ouest", label: "Ouest" },
                  ]}
                  placeholder="Exposition principale"
                />
              </div>

              {/* Annexes (checkboxes) */}
              <div>
                <label
                  className="block mb-3 text-sm font-semibold"
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}
                >
                  Annexes
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <Checkbox
                    label="Cave"
                    checked={annexes.cave}
                    onChange={(checked) => setAnnexes({ ...annexes, cave: checked })}
                  />
                  <Checkbox
                    label="Parking"
                    checked={annexes.parking}
                    onChange={(checked) => setAnnexes({ ...annexes, parking: checked })}
                  />
                  <Checkbox
                    label="Balcon"
                    checked={annexes.balcon}
                    onChange={(checked) => setAnnexes({ ...annexes, balcon: checked })}
                  />
                  <Checkbox
                    label="Terrasse"
                    checked={annexes.terrasse}
                    onChange={(checked) => setAnnexes({ ...annexes, terrasse: checked })}
                  />
                  <Checkbox
                    label="Jardin"
                    checked={annexes.jardin}
                    onChange={(checked) => setAnnexes({ ...annexes, jardin: checked })}
                  />
                  <Checkbox
                    label="Piscine"
                    checked={annexes.piscine}
                    onChange={(checked) => setAnnexes({ ...annexes, piscine: checked })}
                  />
                </div>
              </div>

              {/* Sélecteur DPE visuel */}
              <div>
                <label
                  className="block mb-3 text-sm font-semibold"
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "14px",
                    lineHeight: "16px",
                  }}
                >
                  Diagnostic de Performance Énergétique (DPE)
                </label>
                <div className="flex gap-2">
                  {(["A", "B", "C", "D", "E", "F", "G"] as const).map((classe) => (
                    <button
                      key={classe}
                      onClick={() => setDpe(classe)}
                      className="transition-transform hover:scale-105"
                    >
                      <IconDpe
                        classe={classe}
                        selected={dpe === classe}
                        size="medium"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Charges mensuelles (€)"
                  value={charges}
                  onChange={setCharges}
                  placeholder="Ex: 150"
                />

                <InputField
                  label="Taxe foncière (€/an)"
                  value={taxeFonciere}
                  onChange={setTaxeFonciere}
                  placeholder="Ex: 1200"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Section Médias */}
          <CollapsibleSection title="Médias" defaultExpanded={false}>
            <div className="space-y-4">
              <FileUpload
                label="Photos du bien"
                accept="image/*"
                multiple
                maxSize={10 * 1024 * 1024}
                helperText="Formats acceptés : JPG, PNG. Maximum 10MB par photo."
              />

              <FileUpload
                label="Documents (diagnostics, plans)"
                accept=".pdf,.doc,.docx"
                multiple
                maxSize={20 * 1024 * 1024}
                helperText="Formats acceptés : PDF, DOC, DOCX. Maximum 20MB par document."
              />
            </div>
          </CollapsibleSection>

          {/* Section Notes & statut */}
          <CollapsibleSection title="Notes & statut" defaultExpanded={false}>
            <div className="space-y-4">
              <SelectField
                label="Statut du bien"
                value={statutBien}
                onChange={setStatutBien}
                options={[
                  { value: "offmarket", label: "Off-market" },
                  { value: "envente", label: "En vente" },
                  { value: "vendu", label: "Vendu" },
                  { value: "location", label: "En location" },
                  { value: "loue", label: "Loué" },
                ]}
                placeholder="Sélectionner un statut"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Référence interne"
                  value={reference}
                  onChange={setReference}
                  placeholder="Ex: BIE-2024-001"
                  helperText="Référence unique du bien"
                />

                <InputField
                  label="N° de mandat"
                  value={mandat}
                  onChange={setMandat}
                  placeholder="Ex: MAN-2024-042"
                />
              </div>

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
                  value={noteInterne}
                  onChange={(e) => setNoteInterne(e.target.value)}
                  placeholder="Ajoutez vos notes internes..."
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
                placeholder="Ex: Rare, Coup de coeur, Urgent..."
                helperText="Multi-sélection, créables"
              />
            </div>
          </CollapsibleSection>
        </div>
      </Sheet>
    </div>
  );
};
