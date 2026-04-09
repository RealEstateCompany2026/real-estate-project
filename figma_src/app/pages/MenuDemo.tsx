import { useState } from "react";
import {
  User,
  Settings,
  LogOut,
  Edit,
  Trash,
  Copy,
  Download,
  Share2,
  Star,
  Heart,
  Bookmark,
  ArrowRight,
  Check,
  Filter,
  SortAsc,
} from "lucide-react";
import { MenuItem, DropdownButton, MultiSelectControlled } from "../components/atoms";
import { Menu } from "../components/organisms";
import { useTheme } from "../context/ThemeContext";

/**
 * MenuDemo - Page de démonstration des composants Dropdown
 * 
 * Démontre :
 * - MenuItem (atome) : Item de menu avec variants
 * - Menu (organisme) : Liste de MenuItems avec scrollbar
 * - DropdownButton (atome) : Bouton trigger pour dropdown
 * - MultiSelect (atome) : Liste déroulante à choix multiple
 * - Dropdown interactif : DropdownButton + Menu
 */

export default function MenuDemo() {
  const { theme, toggleTheme } = useTheme();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number | null>(
    null
  );

  // Dropdown states
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Date");
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [selectedAction, setSelectedAction] = useState("Actions");

  return (
    <div
      className="min-h-screen p-[40px]"
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#111215",
      }}
    >
      <div className="max-w-[1400px] mx-auto space-y-[60px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-[32px] leading-[40px] font-bold mb-[8px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Dropdowns - RealAgent
            </h1>
            <p
              className="text-[16px] leading-[24px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Items de menu, menus déroulants et sélection multiple pour dropdowns et actions
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-[16px] py-[12px] rounded-[12px] font-semibold text-[14px] transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--surface-neutral-action)",
              color: "var(--text-body)",
            }}
          >
            Mode: {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>

        {/* Section 1: MenuItem états de base */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. MenuItem - États et variants
          </h2>
          <div className="grid grid-cols-1 gap-[2px]">
            <MenuItem
              label="MenuItem Default"
              leftIcon={User}
              rightIcon={ArrowRight}
            />
            <MenuItem
              label="MenuItem Hover (survolez-moi)"
              leftIcon={Settings}
              rightIcon={ArrowRight}
            />
            <MenuItem
              label="MenuItem Selected"
              leftIcon={Star}
              rightIcon={ArrowRight}
              selected={true}
            />
            <MenuItem
              label="MenuItem Disabled"
              leftIcon={LogOut}
              rightIcon={ArrowRight}
              disabled={true}
            />
          </div>
        </section>

        {/* Section 2: Menu items avec couleurs personnalisées */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. MenuItem avec couleurs personnalisées (Design System)
          </h2>
          <p
            className="text-[14px] mb-[16px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Passez la souris sur les items pour voir le hover automatique /500 → /600
          </p>
          <div className="grid grid-cols-1 gap-[2px]">
            <MenuItem
              label="Success - Hover /500 → /600"
              leftIcon={Check}
              backgroundColor="#0da500"
              textColor="white"
            />
            <MenuItem
              label="Error - Hover /500 → /600"
              leftIcon={Trash}
              backgroundColor="#FF0000"
              textColor="white"
            />
            <MenuItem
              label="Warning - Hover /500 → /600"
              leftIcon={Star}
              backgroundColor="#FF6B00"
              textColor="white"
            />
            <MenuItem
              label="Information - Hover /500 → /600"
              leftIcon={Download}
              backgroundColor="#000AFF"
              textColor="white"
            />
            <MenuItem
              label="Branded/Violet - Hover /500 → /600"
              leftIcon={Heart}
              backgroundColor="#7b72f9"
              textColor="white"
            />
          </div>
        </section>

        {/* Section 3: Use cases */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Cas d'usage dans RealAgent
          </h2>

          <div className="space-y-[40px]">
            {/* Dropdown client */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Dropdown actions client
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Menu contextuel sur une fiche client (clic droit ou bouton "...")
              </p>
              <Menu
                items={[
                  {
                    label: "Voir la fiche",
                    leftIcon: User,
                    rightIcon: ArrowRight,
                    onClick: () => alert("Voir fiche client"),
                  },
                  {
                    label: "Modifier",
                    leftIcon: Edit,
                    rightIcon: ArrowRight,
                    onClick: () => alert("Modifier client"),
                  },
                  {
                    label: "Dupliquer",
                    leftIcon: Copy,
                    rightIcon: ArrowRight,
                    onClick: () => alert("Dupliquer client"),
                  },
                  {
                    label: "Ajouter aux favoris",
                    leftIcon: Star,
                    rightIcon: ArrowRight,
                    onClick: () => alert("Favoris"),
                  },
                  {
                    label: "Supprimer",
                    leftIcon: Trash,
                    rightIcon: ArrowRight,
                    backgroundColor: "#FF0000",
                    textColor: "white",
                    onClick: () => alert("Supprimer client"),
                  },
                ]}
                showScrollbar={true}
              />
            </div>

            {/* Dropdown bien */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Menu bien immobilier
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Actions rapides sur une fiche bien
              </p>
              <Menu
                items={[
                  {
                    label: "Éditer le bien",
                    leftIcon: Edit,
                    onClick: () => {},
                  },
                  {
                    label: "Télécharger les photos",
                    leftIcon: Download,
                    onClick: () => {},
                  },
                  {
                    label: "Partager le bien",
                    leftIcon: Share2,
                    onClick: () => {},
                  },
                  {
                    label: "Marquer comme favori",
                    leftIcon: Heart,
                    onClick: () => {},
                  },
                ]}
                showScrollbar={false}
              />
            </div>

            {/* Dropdown document */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Menu document
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Actions sur un document uploadé
              </p>
              <Menu
                items={[
                  {
                    label: "Télécharger",
                    leftIcon: Download,
                    onClick: () => {},
                  },
                  {
                    label: "Partager",
                    leftIcon: Share2,
                    onClick: () => {},
                  },
                  {
                    label: "Renommer",
                    leftIcon: Edit,
                    onClick: () => {},
                  },
                  {
                    label: "Supprimer",
                    leftIcon: Trash,
                    onClick: () => {},
                    backgroundColor: "#FF0000",
                    textColor: "white",
                  },
                ]}
                showScrollbar={false}
              />
            </div>
          </div>
        </section>

        {/* Section 4: Dropdown interactif */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Dropdown interactif
          </h2>

          <div className="space-y-[40px]">
            {/* Dropdown 1 */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Dropdown avec filtre et tri (Cliquez pour ouvrir/fermer)
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                DropdownButton + Menu - Exemple de filtres
              </p>
              <div className="flex items-start gap-[16px]">
                {/* Dropdown Filter */}
                <div className="relative">
                  <DropdownButton
                    label={selectedFilter}
                    isOpen={isDropdown1Open}
                    onClick={() => {
                      setIsDropdown1Open(!isDropdown1Open);
                      setIsDropdown2Open(false);
                      setIsDropdown3Open(false);
                    }}
                  />
                  {isDropdown1Open && (
                    <div className="absolute top-[48px] left-0 z-10">
                      <Menu
                        items={[
                          {
                            label: "Tous",
                            selected: selectedFilter === "Tous",
                            onClick: () => {
                              setSelectedFilter("Tous");
                              setIsDropdown1Open(false);
                            },
                          },
                          {
                            label: "Clients",
                            selected: selectedFilter === "Clients",
                            onClick: () => {
                              setSelectedFilter("Clients");
                              setIsDropdown1Open(false);
                            },
                          },
                          {
                            label: "Biens",
                            selected: selectedFilter === "Biens",
                            onClick: () => {
                              setSelectedFilter("Biens");
                              setIsDropdown1Open(false);
                            },
                          },
                          {
                            label: "Affaires",
                            selected: selectedFilter === "Affaires",
                            onClick: () => {
                              setSelectedFilter("Affaires");
                              setIsDropdown1Open(false);
                            },
                          },
                          {
                            label: "Documents",
                            selected: selectedFilter === "Documents",
                            onClick: () => {
                              setSelectedFilter("Documents");
                              setIsDropdown1Open(false);
                            },
                          },
                        ]}
                        showScrollbar={false}
                        width={200}
                      />
                    </div>
                  )}
                </div>

                {/* Dropdown Sort */}
                <div className="relative">
                  <DropdownButton
                    label={selectedSort}
                    isOpen={isDropdown2Open}
                    onClick={() => {
                      setIsDropdown2Open(!isDropdown2Open);
                      setIsDropdown1Open(false);
                      setIsDropdown3Open(false);
                    }}
                  />
                  {isDropdown2Open && (
                    <div className="absolute top-[48px] left-0 z-10">
                      <Menu
                        items={[
                          {
                            label: "Date",
                            selected: selectedSort === "Date",
                            onClick: () => {
                              setSelectedSort("Date");
                              setIsDropdown2Open(false);
                            },
                          },
                          {
                            label: "Nom",
                            selected: selectedSort === "Nom",
                            onClick: () => {
                              setSelectedSort("Nom");
                              setIsDropdown2Open(false);
                            },
                          },
                          {
                            label: "Prix",
                            selected: selectedSort === "Prix",
                            onClick: () => {
                              setSelectedSort("Prix");
                              setIsDropdown2Open(false);
                            },
                          },
                          {
                            label: "Surface",
                            selected: selectedSort === "Surface",
                            onClick: () => {
                              setSelectedSort("Surface");
                              setIsDropdown2Open(false);
                            },
                          },
                        ]}
                        showScrollbar={false}
                        width={200}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Dropdown 2 */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Dropdown avec menu d'actions
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Menu d'actions contextuel avec icônes et action destructive
              </p>
              <div className="relative inline-block">
                <DropdownButton
                  label={selectedAction}
                  isOpen={isDropdown3Open}
                  onClick={() => {
                    setIsDropdown3Open(!isDropdown3Open);
                    setIsDropdown1Open(false);
                    setIsDropdown2Open(false);
                  }}
                />
                {isDropdown3Open && (
                  <div className="absolute top-[48px] left-0 z-10">
                    <Menu
                      items={[
                        {
                          label: "Éditer",
                          leftIcon: Edit,
                          onClick: () => {
                            setSelectedAction("Éditer");
                            setIsDropdown3Open(false);
                          },
                        },
                        {
                          label: "Dupliquer",
                          leftIcon: Copy,
                          onClick: () => {
                            setSelectedAction("Dupliquer");
                            setIsDropdown3Open(false);
                          },
                        },
                        {
                          label: "Télécharger",
                          leftIcon: Download,
                          onClick: () => {
                            setSelectedAction("Télécharger");
                            setIsDropdown3Open(false);
                          },
                        },
                        {
                          label: "Partager",
                          leftIcon: Share2,
                          onClick: () => {
                            setSelectedAction("Partager");
                            setIsDropdown3Open(false);
                          },
                        },
                        {
                          label: "Ajouter aux favoris",
                          leftIcon: Star,
                          onClick: () => {
                            setSelectedAction("Ajouter aux favoris");
                            setIsDropdown3Open(false);
                          },
                        },
                        {
                          label: "Supprimer",
                          leftIcon: Trash,
                          onClick: () => {
                            setSelectedAction("Supprimer");
                            setIsDropdown3Open(false);
                          },
                          backgroundColor: "#FF0000",
                          textColor: "white",
                        },
                      ]}
                      showScrollbar={true}
                      width={250}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Dropdown Button variants */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Variants DropdownButton
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Avec et sans ombre, états ouvert/fermé, avec icône gauche
              </p>
              <div className="flex items-center gap-[16px] flex-wrap">
                <DropdownButton label="Avec ombre" shadow={true} isOpen={false} />
                <DropdownButton label="Sans ombre" shadow={false} isOpen={false} />
                <DropdownButton label="Ouvert ▲" shadow={true} isOpen={true} />
                <DropdownButton label="Fermé ▼" shadow={true} isOpen={false} />
                <DropdownButton label="Disabled" shadow={true} disabled={true} />
                <DropdownButton 
                  label="Filtrer" 
                  leftIcon={Filter} 
                  shadow={true} 
                  isOpen={false} 
                />
                <DropdownButton 
                  label="Trier" 
                  leftIcon={SortAsc} 
                  shadow={true} 
                  isOpen={false} 
                />
                <DropdownButton 
                  label="Utilisateur" 
                  leftIcon={User} 
                  shadow={true} 
                  isOpen={false} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: MultiSelect */}
        <section>
          <h2
            className="text-[24px] leading-[32px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. MultiSelect - Sélection multiple
          </h2>

          <div className="space-y-[40px]">
            {/* Basic MultiSelect */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                MultiSelect basique
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Dropdown avec choix multiples et checkboxes
              </p>
              <div className="flex gap-[24px] flex-wrap">
                <MultiSelectControlled
                  label="Type de bien"
                  options={["Appartement", "Maison", "Terrain", "Commercial", "Parking"]}
                  placeholder="Sélectionner un ou plusieurs types"
                />
                
                <MultiSelectControlled
                  label="Statut"
                  options={["Disponible", "Vendu", "En négociation", "Compromis", "Retiré"]}
                  defaultValue={["Disponible"]}
                  width="320px"
                />
              </div>
            </div>

            {/* Cas d'usage */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Cas d'usage dans RealAgent
              </h3>
              <p
                className="text-[14px] mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Filtres avancés avec sélection multiple
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <MultiSelectControlled
                  label="Équipements"
                  options={[
                    "Ascenseur",
                    "Parking",
                    "Balcon",
                    "Terrasse",
                    "Cave",
                    "Piscine",
                    "Jardin",
                    "Garage",
                  ]}
                  defaultValue={["Parking", "Balcon"]}
                  width="100%"
                />

                <MultiSelectControlled
                  label="Ville"
                  options={[
                    "Paris",
                    "Lyon",
                    "Marseille",
                    "Toulouse",
                    "Nice",
                    "Nantes",
                    "Bordeaux",
                  ]}
                  width="100%"
                />

                <MultiSelectControlled
                  label="Tags client"
                  options={[
                    "VIP",
                    "Premier achat",
                    "Investisseur",
                    "Particulier",
                    "Professionnel",
                  ]}
                  defaultValue={["VIP"]}
                  width="100%"
                />

                <MultiSelectControlled
                  label="Catégories"
                  options={[
                    "Neuf",
                    "Ancien",
                    "Rénové",
                    "À rénover",
                    "Haut standing",
                  ]}
                  width="100%"
                />
              </div>
            </div>

            {/* États */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                États
              </h3>
              <div className="flex gap-[24px] flex-wrap">
                <MultiSelectControlled
                  label="Normal"
                  options={["Option 1", "Option 2", "Option 3"]}
                />
                
                <MultiSelectControlled
                  label="Avec valeur par défaut"
                  options={["Option 1", "Option 2", "Option 3"]}
                  defaultValue={["Option 1", "Option 2"]}
                />
                
                <MultiSelectControlled
                  label="Disabled"
                  options={["Option 1", "Option 2", "Option 3"]}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <div
          className="p-[24px] rounded-[12px] border"
          style={{
            backgroundColor: "var(--surface-neutral-action)",
            borderColor: "var(--neutral-200)",
          }}
        >
          <h3
            className="text-[16px] font-semibold mb-[12px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            📝 Notes techniques
          </h3>
          <ul
            className="space-y-[8px] text-[14px] leading-[20px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            <li>
              • <strong>MenuItem</strong>: Height 60px, padding 12px 18px, gap
              12px
            </li>
            <li>
              • Font: Roboto <strong>SemiBold</strong> 16/20px (
              <strong>Bold</strong> si selected)
            </li>
            <li>
              • Icônes: 24×24px (Lucide), optionnelles gauche/droite
            </li>
            <li>
              • États: default, hover, selected, disabled
            </li>
            <li>
              • Hover: bg #ecedee (light) / #22252b (dark)
            </li>
            <li>
              • Selected: bg #ecedee (light) / #22252b (dark), texte Bold
            </li>
            <li>
              • <strong>Menu</strong>: Width 347px par défaut, border-radius
              16px
            </li>
            <li>
              • Scrollbar: 5px width, #444955 (light) / #333740 (dark)
            </li>
            <li>• Support light/dark mode automatique via ThemeProvider</li>
            <li>
              • Couleurs personnalisables via props{" "}
              <code>backgroundColor</code> et <code>textColor</code>
            </li>
            <li>
              • <strong>Hover automatique /500 → /600</strong> : Si backgroundColor = couleur design system /500 (success, error, warning, information, branded), le hover passe automatiquement à /600
            </li>
            <li>• Callbacks onClick sur chaque MenuItem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}