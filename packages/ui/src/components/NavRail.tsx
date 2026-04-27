"use client";

import {
  Gauge,
  Database,
  User,
  Home,
  ClipboardList,
  Layers,
  Calendar,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { NavButton } from "./NavButton";
import { NavDivider } from "./NavDivider";
import { NavAvatar } from "./NavAvatar";
import { NavLogo } from "./NavLogo";
import { SwitchTheme } from "./SwitchTheme";

/**
 * NavRail - Navigation principale verticale
 * Organism du design system RealAgent
 *
 * Barre de navigation verticale fixe sur le côté gauche de l'application.
 *
 * Specs:
 * - Largeur: 90px
 * - Hauteur: 100vh
 * - Position: fixed left
 * - Background: surface-neutral-default (adaptatif light/dark)
 * - Sections séparées par dividers
 *
 * Structure:
 * - Logo en haut
 * - Section 1: Dashboard, Database
 * - Divider
 * - Section 2: Clients, Biens, Affaires, Documents
 * - Divider
 * - Section 3: Agenda, Automatisations
 * - Avatar utilisateur en bas
 */

export type NavSection = "dashboard" | "database" | "clients" | "properties" | "deals" | "documents" | "calendar" | "automations";

export interface NavRailSection {
  id: NavSection;
  icon: LucideIcon;
  label: string;
}

export interface NavRailProps {
  /**
   * Section active
   */
  activeSection?: NavSection;
  /**
   * Callback de navigation
   */
  onNavigate?: (section: NavSection) => void;
  /**
   * URL de l'avatar utilisateur
   */
  avatarSrc?: string;
  /**
   * Texte alternatif de l'avatar
   */
  avatarAlt?: string;
  /**
   * Callback au clic sur l'avatar
   */
  onAvatarClick?: () => void;
  /**
   * Callback au clic sur le logo
   */
  onLogoClick?: () => void;
  /**
   * Afficher l'avatar comme sélectionné
   */
  avatarSelected?: boolean;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
  /**
   * Mode sombre actif
   */
  isDark?: boolean;
  /**
   * Callback toggle theme
   */
  onThemeToggle?: () => void;  // Aligned with SwitchTheme.onChange: () => void
}

// Définition des sections de navigation
const NAV_SECTIONS: NavRailSection[][] = [
  // Section 1: Vue d'ensemble
  [
    { id: "dashboard", icon: Gauge, label: "Tableau de bord" },
    { id: "database", icon: Database, label: "Base de données" },
  ],
  // Section 2: Données principales
  [
    { id: "clients", icon: User, label: "Clients" },
    { id: "properties", icon: Home, label: "Biens" },
    { id: "deals", icon: ClipboardList, label: "Affaires" },
    { id: "documents", icon: Layers, label: "Documents" },
  ],
  // Section 3: Outils
  [
    { id: "calendar", icon: Calendar, label: "Agenda" },
    { id: "automations", icon: Workflow, label: "Automatisations" },
  ],
];

export function NavRail({
  activeSection,
  onNavigate,
  avatarSrc = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  avatarAlt = "Utilisateur",
  onAvatarClick,
  onLogoClick,
  avatarSelected = false,
  className = "",
  isDark = false,
  onThemeToggle,
}: NavRailProps) {
  return (
    <div
      className={`
        fixed left-0 top-0
        flex flex-col items-center
        bg-surface-neutral-default
        ${className}
      `.trim()}
      style={{
        width: "90px",
        height: "100vh",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      {/* Logo en haut */}
      <NavLogo onClick={onLogoClick} />

      {/* Sections de navigation */}
      <div className="flex flex-col items-center gap-[20px] mt-[20px] flex-1">
        {NAV_SECTIONS.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col items-center gap-[10px]">
            {sectionIndex > 0 && <NavDivider />}

            <div className="flex flex-col items-center gap-[10px]">
              {section.map((item) => (
                <NavButton
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  selected={activeSection === item.id}
                  onClick={() => onNavigate?.(item.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Theme toggle + Avatar en bas */}
      <div className="flex flex-col items-center gap-[16px]">
        {onThemeToggle && (
          <SwitchTheme isDark={isDark} onChange={onThemeToggle} />
        )}
        <NavAvatar src={avatarSrc} alt={avatarAlt} selected={avatarSelected} onClick={onAvatarClick} />
      </div>
    </div>
  );
}
