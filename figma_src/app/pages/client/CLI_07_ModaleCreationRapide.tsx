/**
 * CLI-07 — Modale création rapide
 * Parcours P06 : Ajouter un client | Vague 1
 * 
 * Modale compacte avec les 5 champs essentiels + dédoublonnage.
 * Utilisée dans les créations contextuelles.
 * Utilise Sheet Narrow (420px)
 */

"use client";

import React, { useState } from "react";
import { Sheet } from "../../components/organisms/Sheet";
import { InputField } from "../../components/molecules/InputField";
import { SelectField } from "../../components/molecules/SelectField";
import { InlineMessage } from "../../components/molecules/InlineMessage";
import { Button } from "../../components/atoms/Button";
import { useTheme } from "../../context/ThemeContext";

interface ModaleCreationRapideProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export const CLI_07_ModaleCreationRapide: React.FC<ModaleCreationRapideProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // États du formulaire
  const [clientType, setClientType] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  // Détection de doublon (simulée)
  const [showDoublon, setShowDoublon] = useState(false);

  const handleNomChange = (value: string) => {
    setNom(value);
    // Simulation détection doublon
    if (value.toLowerCase().includes("martin")) {
      setShowDoublon(true);
    } else {
      setShowDoublon(false);
    }
  };

  const handleSave = () => {
    const data = {
      clientType,
      nom,
      prenom,
      telephone,
      email,
    };
    
    if (onSave) {
      onSave(data);
    }
    
    // Reset form
    setClientType("");
    setNom("");
    setPrenom("");
    setTelephone("");
    setEmail("");
    setShowDoublon(false);
    
    onClose();
  };

  const isFormValid = () => {
    return clientType && nom && prenom && (telephone || email);
  };

  const footer = (
    <div
      className="px-5 py-4"
      style={{
        borderTop: "1px solid var(--border-default)",
        backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
      }}
    >
      <div className="flex gap-3">
        <Button
          variant="secondary"
          size="medium"
          className="flex-1"
          onClick={onClose}
        >
          Annuler
        </Button>
        <Button
          variant="primary"
          size="medium"
          className="flex-1"
          onClick={handleSave}
          disabled={!isFormValid()}
        >
          Créer
        </Button>
      </div>
    </div>
  );

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Nouveau client"
      width="narrow"
      footer={footer}
    >
      <div className="px-5 py-6 space-y-4">
        {/* Type de client */}
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

        {/* Nom */}
        <InputField
          label="Nom"
          value={nom}
          onChange={handleNomChange}
          placeholder="Nom"
          required
        />

        {/* Alerte doublon */}
        {showDoublon && (
          <InlineMessage
            type="warning"
            message="Client similaire : Martin Sophie (Acquéreur)"
            actionLabel="Voir"
            onAction={() => console.log("Voir la fiche")}
            secondaryActionLabel="Créer quand même"
            onSecondaryAction={() => setShowDoublon(false)}
          />
        )}

        {/* Prénom */}
        <InputField
          label="Prénom"
          value={prenom}
          onChange={setPrenom}
          placeholder="Prénom"
          required
        />

        {/* Téléphone */}
        <InputField
          label="Téléphone"
          value={telephone}
          onChange={setTelephone}
          placeholder="+33 6 12 34 56 78"
          helperText="Au moins un contact requis"
        />

        {/* Email */}
        <InputField
          label="Email"
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="email@exemple.fr"
        />

        <div
          className="text-sm pt-2"
          style={{
            color: "var(--text-subtle)",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Les champs marqués d'un * sont obligatoires
        </div>
      </div>
    </Sheet>
  );
};