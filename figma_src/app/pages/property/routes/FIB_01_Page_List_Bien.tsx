/**
 * FIB_01_Page_List_Bien - Page de liste des biens
 *
 * Specifications:
 * - Goutière: 25px à gauche
 * - Largeur de zone de contenus: 1191px
 *
 * Composants:
 * - AppBarCategory (titre: Biens)
 * - GraphCourbe
 * - Filtres et tris + changement affichage (list vs cards)
 * - Liste de composants ListItemBien (25)
 * - Navigation (suivant, précédent)
 */

import { useState } from "react";
import { AppBarCategory } from "../../../components/organisms/AppBars";
import { GraphCourbe } from "../../../components/organisms/GraphCourbe";
import { ListBien } from "../../../components/components/ListBien";
import { CardBien } from "../../../components/components/CardBien";
import { BadgeCriteria } from "../../../components/atoms/BadgeCriteria";
import { ButtonPagination } from "../../../components/atoms/ButtonPagination";
import { IconButton } from "../../../components/atoms/Button";
import { Button } from "../../../components/atoms/Button";
import { Sheet } from "../../../components/organisms/Sheet";
import { SheetBienDetails } from "../../../components/molecules/SheetBienDetails";
import { ViewModeDropdown } from "../../../components/molecules/ViewModeDropdown";
import { Filter, Plus, ArrowRight } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export default function FIB_01_Page_List_Bien() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bp = useBreakpoint();

  // États
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "cards">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedBien, setSelectedBien] = useState<any>(null);

  const effectiveViewMode = bp === "mobile" ? "cards" : viewMode;

  // Données mock pour les biens
  // TODO: brancher usePropertyList(filters, page)
  const types = ["À VENDRE", "À LOUER", "OFF"];
  const mockBiens = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    type: types[i % 3],
    price: "450 000€",
    location: "Saint-Jean-de-Vedas",
    bienType: "T3",
    surface: "120m²",
    dpe: "A" as const,
    qualification: 61,
    entretien: 75,
    conversion: 42,
    aiSuggestions: i % 5,
    // KPIs pour la sheet
    qualification: 61,
    entretien: 38,
    conversion: 24,
  }));

  const totalPages = 5;

  return (
    <div
      className="min-h-screen"
      style={{
        background: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
      }}
    >
      {/* AppBar */}
      <AppBarCategory
        title="Biens"
        category="Tous"
        categoryOpen={categoryOpen}
        onCategoryClick={() => setCategoryOpen(!categoryOpen)}
        showAdd
        onAdd={() => console.log("Add bien")}
        showSearch
        onSearch={() => console.log("Search")}
      />

      {/* Content Area */}
      <div className="page-content">
        {/* GraphCourbe */}
        <div className="mt-[20px]">
          <GraphCourbe
            title="Nouvelles annonces"
            selectedDate="22 fév 2026"
            selectedValue="12 nouvelles annonces"
            trendPercentage="5%"
            trendDirection="up"
          />
        </div>

        {/* Filtres */}
        <div className="mt-[20px] flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            {/* Icône Funnel */}
            <Filter
              size={20}
              style={{
                color: isDark ? "var(--neutral-200)" : "var(--neutral-500)",
              }}
            />

            {/* Badge Critère 1 */}
            <BadgeCriteria
              variant="default"
              label="Ile-de-France"
              onRemove={() => console.log("Remove filter 1")}
            />

            {/* Badge Critère 2 */}
            <BadgeCriteria
              variant="default"
              label="Inactif > 12 mois"
              onRemove={() => console.log("Remove filter 2")}
            />

            {/* Bouton Add */}
            <IconButton
              icon={<Plus size={20} />}
              variant="ghost"
              onClick={() => console.log("Add filter")}
              title="Ajouter un filtre"
              size="md"
            />
          </div>

          {/* View Mode Toggle */}
          <ViewModeDropdown viewMode={viewMode} onViewModeChange={setViewMode} theme={theme} />
        </div>

        {/* Liste ou Grille des biens */}
        {effectiveViewMode === "list" ? (
          <div className="mt-[20px] flex flex-col gap-[17px]">
            {mockBiens.map((bien) => (
              <ListBien
                key={bien.id}
                imageUrl={bien.imageUrl}
                type={bien.type}
                price={bien.price}
                location={bien.location}
                bienType={bien.bienType}
                surface={bien.surface}
                dpe={bien.dpe}
                qualification={bien.qualification}
                entretien={bien.entretien}
                conversion={bien.conversion}
                aiSuggestions={bien.aiSuggestions}
                onBienClick={() => {
                  setSelectedBien(bien);
                  setSheetOpen(true);
                }}
                theme={theme}
              />
            ))}
          </div>
        ) : (
          <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
            {mockBiens.map((bien) => (
              <CardBien
                key={bien.id}
                imageUrl={bien.imageUrl}
                type={bien.type}
                price={bien.price}
                location={bien.location}
                bienType={bien.bienType}
                surface={bien.surface}
                dpe={bien.dpe}
                qualification={bien.qualification}
                entretien={bien.entretien}
                conversion={bien.conversion}
                aiSuggestions={bien.aiSuggestions}
                onBienClick={() => {
                  setSelectedBien(bien);
                  setSheetOpen(true);
                }}
                theme={theme}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-[20px] mb-[40px] flex items-center justify-between">
          <div
            className="text-[14px] leading-[16px] tracking-[0.14px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: isDark ? "var(--neutral-200)" : "var(--neutral-500)",
            }}
          >
            100
          </div>

          <ButtonPagination
            onPrevious={() => setCurrentPage((p) => Math.max(1, p - 1))}
            onNext={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            canGoPrevious={currentPage > 1}
            canGoNext={currentPage < totalPages}
            variant={isDark ? "dark" : "light"}
          />
        </div>
      </div>

      {/* Sheet Bien Details */}
      <Sheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title={selectedBien ? `${selectedBien.bienType} . ${selectedBien.surface}` : ""}
        width="narrow"
        footer={
          <div
            className="sticky bottom-0 w-full flex items-center justify-center gap-[12px] px-[20px] py-[20px]"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
              borderTop: `1px solid ${isDark ? "var(--neutral-600)" : "var(--neutral-50)"}`,
            }}
          >
            <Button
              variant="outlined"
              iconRight={<ArrowRight size={20} />}
              onClick={() => console.log("Voir la fiche")}
            >
              Voir la fiche
            </Button>
            <Button
              variant="branded"
              iconRight={<ArrowRight size={20} />}
              onClick={() => console.log("Voir les actions")}
            >
              Voir les actions
            </Button>
          </div>
        }
      >
        {selectedBien && (
          <SheetBienDetails
            bienType={selectedBien.bienType}
            surface={selectedBien.surface}
            type={selectedBien.type}
            price={selectedBien.price}
            location={selectedBien.location}
            dpe={selectedBien.dpe}
            qualification={selectedBien.qualification}
            entretien={selectedBien.entretien}
            conversion={selectedBien.conversion}
          />
        )}
      </Sheet>
    </div>
  );
}
