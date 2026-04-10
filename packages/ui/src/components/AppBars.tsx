"use client";

import { ReactNode } from "react";
import { ArrowLeft, Plus, Search, X } from "lucide-react";
import { IconButton } from "./Button";
import { Badge } from "./Badge";
import { AiSuggestion } from "./AiSuggestion";
import { DropdownButton } from "./DropdownButton";
import { Chip, ChipDate, ChipId } from "./Chip";
import { KpiIndicator } from "./KpiIndicator";
import { MessageStatusDot, MessageStatus } from "./MessageStatusDot";

/**
 * AppBars - Famille de barres de navigation supérieures
 *
 * Structure commune:
 * - Height: 100px
 * - Padding vertical: 25px-27px
 * - Support light/dark mode
 * - Composants atomiques réutilisables
 *
 * Variantes:
 * 1. AppBarCategory - Pages liste avec catégories + dropdown
 * 2. AppBarBasic - Pages liste simple (titre + actions)
 * 3. AppBarImport - Flows d'import avec bouton save
 * 4. AppBarDetail - Fiches détail avec métadonnées
 *
 * Based on Figma AppBar designs
 */

// ==================== TYPES ====================

export interface AppBarBaseProps {
  /**
   * Titre principal (H4 Bold 28px)
   */
  title: string;
  /**
   * URL de retour (affiche bouton back si fourni)
   */
  backTo?: string;
  /**
   * Callback au clic sur back
   */
  onBack?: () => void;
  /**
   * Classes CSS additionnelles
   */
  className?: string;
  /**
   * Enfants (actions, badges, etc.)
   */
  children?: ReactNode;
}

// ==================== COMPOSANTS UTILITAIRES ====================

/**
 * AppBarContainer - Conteneur de base pour toutes les AppBars
 */
interface AppBarContainerProps {
  children: ReactNode;
  className?: string;
}

function AppBarContainer({ children, className = "" }: AppBarContainerProps) {
  return (
    <div
      className={`flex items-center px-[20px] h-[100px] bg-surface-neutral-default dark:bg-surface-neutral-default pt-[27px] pb-[27px] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/**
 * AppBarTitle - Titre H4 Bold 28px
 */
interface AppBarTitleProps {
  children: ReactNode;
}

function AppBarTitle({ children }: AppBarTitleProps) {
  return (
    <h4 className="font-bold text-[28px] leading-[34px] tracking-[0.28px] whitespace-nowrap px-[10px] text-text-headings">
      {children}
    </h4>
  );
}

/**
 * AppBarBackButton - Bouton retour avec icône
 */
interface AppBarBackButtonProps {
  onClick?: () => void;
  href?: string;
}

function AppBarBackButton({ onClick, href }: AppBarBackButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.location.href = href;
    } else {
      window.history.back();
    }
  };

  return (
    <IconButton
      icon={<ArrowLeft size={20} />}
      variant="ghost"
      onClick={handleClick}
      title="Retour"
      size="md"
    />
  );
}

/**
 * AppBarSpacer - Espace flexible
 */
function AppBarSpacer() {
  return <div className="flex-1" />;
}

/**
 * AppBarEventQuinte - 5 cercles de statut d'événements avec espacement 8px
 */
interface AppBarEventQuinteProps {
  /**
   * Array de 5 statuts pour les événements
   */
  statuses: [MessageStatus, MessageStatus, MessageStatus, MessageStatus, MessageStatus];
}

export function AppBarEventQuinte({ statuses }: AppBarEventQuinteProps) {
  return (
    <div className="flex items-center gap-[8px]">
      {statuses.map((status, index) => (
        <MessageStatusDot key={index} status={status} />
      ))}
    </div>
  );
}

// ==================== APPBAR CATEGORY ====================

export interface AppBarCategoryProps extends AppBarBaseProps {
  /**
   * Label de la catégorie sélectionnée
   */
  category?: string;
  /**
   * État du dropdown (ouvert/fermé)
   */
  categoryOpen?: boolean;
  /**
   * Callback au clic sur le dropdown catégorie
   */
  onCategoryClick?: () => void;
  /**
   * Afficher le bouton add
   */
  showAdd?: boolean;
  /**
   * Callback au clic sur add
   */
  onAdd?: () => void;
  /**
   * Afficher le bouton search
   */
  showSearch?: boolean;
  /**
   * Callback au clic sur search
   */
  onSearch?: () => void;
}

/**
 * AppBarCategory - Barre avec titre + dropdown catégorie + actions
 *
 * Usage:
 * <AppBarCategory
 *   title="Rubrique"
 *   category="Categorie"
 *   categoryOpen={isOpen}
 *   onCategoryClick={() => setIsOpen(!isOpen)}
 *   showAdd
 *   onAdd={() => {}}
 *   showSearch
 *   onSearch={() => {}}
 * />
 */
export function AppBarCategory({
  title,
  category = "Categorie",
  categoryOpen = false,
  onCategoryClick,
  showAdd = false,
  showSearch = false,
  onAdd,
  onSearch,
  className = "",
}: AppBarCategoryProps) {
  return (
    <AppBarContainer className={className}>
      <div className="flex items-center gap-[8px] flex-1">
        <AppBarTitle>{title}</AppBarTitle>

        {/* Category Dropdown */}
        <DropdownButton
          label={category}
          isOpen={categoryOpen}
          onClick={onCategoryClick}
          shadow={false}
        />

        {/* Add Button */}
        {showAdd && (
          <IconButton
            icon={<Plus size={20} />}
            variant="ghost"
            onClick={onAdd}
            title="Ajouter"
            size="md"
          />
        )}

        {/* Search Button */}
        {showSearch && (
          <IconButton
            icon={<Search size={20} />}
            variant="ghost"
            onClick={onSearch}
            title="Rechercher"
            size="md"
          />
        )}
      </div>
    </AppBarContainer>
  );
}

// ==================== APPBAR BASIC ====================

export interface AppBarBasicProps extends AppBarBaseProps {
  /**
   * Afficher le bouton add
   */
  showAdd?: boolean;
  /**
   * Callback au clic sur add
   */
  onAdd?: () => void;
  /**
   * Afficher le bouton search
   */
  showSearch?: boolean;
  /**
   * Callback au clic sur search
   */
  onSearch?: () => void;
}

/**
 * AppBarBasic - Barre simple avec titre + actions optionnelles
 *
 * Usage:
 * <AppBarBasic
 *   title="Base de données"
 *   showAdd
 *   onAdd={() => {}}
 *   showSearch
 *   onSearch={() => {}}
 * />
 */
export function AppBarBasic({
  title,
  showAdd = false,
  showSearch = false,
  onAdd,
  onSearch,
  className = "",
}: AppBarBasicProps) {
  return (
    <AppBarContainer className={className}>
      <div className="flex items-center gap-[8px] flex-1">
        <AppBarTitle>{title}</AppBarTitle>

        {/* Add Button */}
        {showAdd && (
          <IconButton
            icon={<Plus size={20} />}
            variant="ghost"
            onClick={onAdd}
            title="Ajouter"
            size="md"
          />
        )}

        {/* Search Button */}
        {showSearch && (
          <IconButton
            icon={<Search size={20} />}
            variant="ghost"
            onClick={onSearch}
            title="Rechercher"
            size="md"
          />
        )}
      </div>
    </AppBarContainer>
  );
}

// ==================== APPBAR IMPORT ====================

export interface AppBarImportProps extends AppBarBaseProps {
  /**
   * Nom du fichier en cours d'import (optionnel)
   * Affiché à côté du titre en texte secondaire
   */
  currentFileName?: string;
  /**
   * Nom du fichier importé
   */
  fileName?: string;
  /**
   * Label du bouton save
   */
  saveLabel?: string;
  /**
   * Callback au clic sur save
   */
  onSave?: () => void;
  /**
   * État loading du bouton save
   */
  saving?: boolean;
  /**
   * Actions supplémentaires à afficher avant le bouton save
   */
  actions?: ReactNode;
}

/**
 * AppBarImport - Barre pour flows d'import avec bouton save
 *
 * Usage:
 * <AppBarImport
 *   title="Import d'une base de données"
 *   fileName="Nom_du_fichier.csv"
 *   saveLabel="Enregistrer"
 *   onBack={() => {}}
 *   onSave={() => {}}
 *   saving={false}
 * />
 */
export function AppBarImport({
  title,
  currentFileName,
  fileName,
  saveLabel = "Enregistrer",
  backTo,
  onBack,
  onSave,
  saving = false,
  actions,
  className = "",
}: AppBarImportProps) {
  return (
    <AppBarContainer className={className}>
      <div className="flex items-center gap-[8px] flex-1">
        {/* Back Button */}
        {(backTo || onBack) && <AppBarBackButton onClick={onBack} href={backTo} />}

        {/* Title */}
        <AppBarTitle>{title}</AppBarTitle>

        {/* File Name */}
        {fileName && (
          <span className="font-semibold text-[16px] leading-[20px] tracking-[0.16px] px-[10px] py-[8px] text-content-body">
            {fileName}
          </span>
        )}
      </div>

      {/* Spacer */}
      <AppBarSpacer />

      {/* Actions */}
      {actions}

      {/* Save Button */}
      <button
        onClick={onSave}
        disabled={saving}
        className="flex items-center gap-[8px] px-[12px] py-[12px] rounded-[16px] transition-all hover:opacity-90 disabled:opacity-50 bg-surface-branded-default dark:bg-surface-branded-default text-content-on-branded-default dark:text-content-on-branded-default font-semibold text-[16px] leading-[20px] tracking-[0.16px]"
      >
        {saving ? "Enregistrement..." : saveLabel}
        {!saving && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </AppBarContainer>
  );
}

// ==================== APPBAR DETAIL ====================

export interface AppBarDetailProps extends AppBarBaseProps {
  /**
   * Badges à afficher après le titre
   */
  badges?: Array<{
    label: string;
    variant?: "default" | "success" | "warning" | "error" | "information";
  }>;
  /**
   * Nombre de suggestions AI (affiche badge si > 0)
   */
  aiSuggestions?: number;
  /**
   * Gap entre les éléments (8px ou 24px)
   */
  gap?: "sm" | "lg";
  /**
   * Masquer le bouton back
   */
  hideBack?: boolean;
  /**
   * Callback pour le bouton close (affiche un bouton X à droite si fourni)
   */
  onClose?: () => void;
}

/**
 * AppBarDetail - Barre pour fiches détail avec badges et métadonnées
 *
 * Usage:
 * <AppBarDetail
 *   title="NOM, prénom du client"
 *   backTo="/clients"
 *   badges={[
 *     { label: "VENDEUR", variant: "default" },
 *     { label: "ACQUÉREUR", variant: "default" }
 *   ]}
 *   aiSuggestions={1}
 *   gap="lg"
 * >
 *   <ChipScoreAuto score={50} />
 *   <AppBarEventQuinte statuses={["success", "success", "success", "none", "none"]} />
 *   <ChipDate icon={<Calendar />}>280 j</ChipDate>
 * </AppBarDetail>
 */
export function AppBarDetail({
  title,
  backTo,
  onBack,
  badges = [],
  aiSuggestions,
  gap = "lg",
  hideBack = false,
  onClose,
  children,
  className = "",
}: AppBarDetailProps) {
  const gapSize = gap === "sm" ? "8px" : "24px";

  return (
    <AppBarContainer className={className}>
      <div className="flex items-center flex-1" style={{ gap: gapSize }}>
        {/* Back Button */}
        {!hideBack && (backTo || onBack) && <AppBarBackButton onClick={onBack} href={backTo} />}

        {/* Title */}
        <AppBarTitle>{title}</AppBarTitle>

        {/* Badges */}
        {badges.map((badge, index) => (
          <Badge key={index} variant={badge.variant || "default"}>
            {badge.label}
          </Badge>
        ))}

        {/* Custom children (metadata, icons, etc.) */}
        {children}

        {/* AI Suggestions */}
        {aiSuggestions !== undefined && aiSuggestions > 0 && (
          <AiSuggestion count={aiSuggestions} />
        )}
      </div>

      {/* Close Button */}
      {onClose && (
        <IconButton
          icon={<X size={20} />}
          variant="ghost"
          onClick={onClose}
          title="Fermer"
          size="md"
        />
      )}
    </AppBarContainer>
  );
}
