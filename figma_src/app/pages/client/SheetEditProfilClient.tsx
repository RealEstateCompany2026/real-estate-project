/**
 * SheetEditProfilClient - Sheet d'édition du profil client
 * Formulaire organisé en 3 sous-sections avec layout 2 colonnes :
 * - Informations d'identité (Nom | Prénom, Types pleine largeur)
 * - Informations de contact (Email | Téléphone, Adresse pleine largeur)
 * - Informations professionnelles (Profession | Entreprise, Revenus pleine largeur)
 */

"use client";

import React, { useState } from "react";
import { Sheet } from "../../components/organisms/Sheet";
import { InputField } from "../../components/molecules/InputField";
import { MultiSelect } from "../../components/atoms/MultiSelect";
import { Button } from "../../components/atoms/Button";
import { Label } from "../../components/atoms/Label";

export interface ProfilClientData {
  // Identité
  nom: string;
  prenom: string;
  types: string[];
  
  // Contact
  email: string;
  telephone: string;
  adresse: string;
  
  // Professionnel
  profession?: string;
  entreprise?: string;
  revenus?: string;
}

export interface SheetEditProfilClientProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: ProfilClientData;
  onSave?: (data: ProfilClientData) => void;
}

const defaultData: ProfilClientData = {
  nom: "",
  prenom: "",
  types: [],
  email: "",
  telephone: "",
  adresse: "",
  profession: "",
  entreprise: "",
  revenus: "",
};

export const SheetEditProfilClient: React.FC<SheetEditProfilClientProps> = ({
  isOpen,
  onClose,
  initialData = defaultData,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProfilClientData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof ProfilClientData, string>>>({});

  // Validation du formulaire
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ProfilClientData, string>> = {};

    // Champs obligatoires
    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est obligatoire";
    }
    if (!formData.prenom.trim()) {
      newErrors.prenom = "Le prénom est obligatoire";
    }
    if (formData.types.length === 0) {
      newErrors.types = "Au moins un type est obligatoire";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le téléphone est obligatoire";
    }
    if (!formData.adresse.trim()) {
      newErrors.adresse = "L'adresse est obligatoire";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion de la sauvegarde
  const handleSave = () => {
    if (validateForm()) {
      onSave?.(formData);
      onClose();
    }
  };

  // Gestion de l'annulation
  const handleCancel = () => {
    setFormData(initialData);
    setErrors({});
    onClose();
  };

  return (
    <Sheet 
      isOpen={isOpen} 
      onClose={handleCancel} 
      width="wide" 
      title="Éditer le profil"
      footer={
        <div className="flex justify-end gap-3 px-5 py-6 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <Button variant="ghost" onClick={handleCancel}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Enregistrer
          </Button>
        </div>
      }
    >
      {/* Contenu du formulaire */}
      <div className="px-5 py-6 space-y-8">
        {/* Sous-section 1 : Informations d'identité */}
        <div>
          <h3
            className="text-lg font-semibold mb-6"
            style={{
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Informations d'identité
          </h3>
          
          {/* Nom et Prénom : côte à côte */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <InputField
                label="Nom"
                required
                value={formData.nom}
                onChange={(value) => setFormData({ ...formData, nom: value })}
                placeholder="Entrez le nom"
                error={!!errors.nom}
              />
              {errors.nom && (
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--error-500)", fontFamily: "Roboto, sans-serif" }}
                >
                  {errors.nom}
                </p>
              )}
            </div>

            <div>
              <InputField
                label="Prénom"
                required
                value={formData.prenom}
                onChange={(value) => setFormData({ ...formData, prenom: value })}
                placeholder="Entrez le prénom"
                error={!!errors.prenom}
              />
              {errors.prenom && (
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--error-500)", fontFamily: "Roboto, sans-serif" }}
                >
                  {errors.prenom}
                </p>
              )}
            </div>
          </div>

          {/* Types : pleine largeur */}
          <div>
            <Label label="Types" required />
            <div className="mt-3">
              <MultiSelect
                label="Types"
                options={["Vendeur", "Acquéreur", "Propriétaire", "Locataire", "Bailleur"]}
                value={formData.types}
                onChange={(values) => setFormData({ ...formData, types: values })}
                placeholder="Sélectionnez un ou plusieurs types"
                width="100%"
              />
            </div>
            {errors.types && (
              <p
                className="text-sm mt-1"
                style={{ color: "var(--error-500)", fontFamily: "Roboto, sans-serif" }}
              >
                {errors.types}
              </p>
            )}
          </div>
        </div>

        {/* Sous-section 2 : Informations de contact */}
        <div>
          <h3
            className="text-lg font-semibold mb-6"
            style={{
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Informations de contact
          </h3>
          
          {/* Email et Téléphone : côte à côte */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <InputField
                label="Email"
                required
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder="exemple@email.com"
                error={!!errors.email}
              />
              {errors.email && (
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--error-500)", fontFamily: "Roboto, sans-serif" }}
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <InputField
                label="Téléphone"
                required
                type="tel"
                value={formData.telephone}
                onChange={(value) => setFormData({ ...formData, telephone: value })}
                placeholder="+33 6 12 34 56 78"
                error={!!errors.telephone}
              />
              {errors.telephone && (
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--error-500)", fontFamily: "Roboto, sans-serif" }}
                >
                  {errors.telephone}
                </p>
              )}
            </div>
          </div>

          {/* Adresse : pleine largeur */}
          <div>
            <InputField
              label="Adresse"
              required
              value={formData.adresse}
              onChange={(value) => setFormData({ ...formData, adresse: value })}
              placeholder="12 Rue de la Paix, 75002 Paris"
              error={!!errors.adresse}
            />
            {errors.adresse && (
              <p
                className="text-sm mt-1"
                style={{ color: "var(--error-500)", fontFamily: "Roboto, sans-serif" }}
              >
                {errors.adresse}
              </p>
            )}
          </div>
        </div>

        {/* Sous-section 3 : Informations professionnelles */}
        <div>
          <h3
            className="text-lg font-semibold mb-6"
            style={{
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Informations professionnelles
          </h3>
          
          {/* Profession et Entreprise : côte à côte */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <InputField
                label="Profession"
                value={formData.profession || ""}
                onChange={(value) => setFormData({ ...formData, profession: value })}
                placeholder="Chef d'entreprise"
              />
            </div>

            <div>
              <InputField
                label="Entreprise"
                value={formData.entreprise || ""}
                onChange={(value) => setFormData({ ...formData, entreprise: value })}
                placeholder="BNP - 73390 Luxembourg"
              />
            </div>
          </div>

          {/* Revenus : pleine largeur */}
          <div>
            <InputField
              label="Revenus"
              value={formData.revenus || ""}
              onChange={(value) => setFormData({ ...formData, revenus: value })}
              placeholder="60K - 125K / an"
            />
          </div>
        </div>
      </div>
    </Sheet>
  );
};