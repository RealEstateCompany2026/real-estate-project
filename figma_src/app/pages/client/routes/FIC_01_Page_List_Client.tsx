/**
 * FIC_01_Page_List_Client - Page de liste des clients
 *
 * Specifications:
 * - Goutière: 25px à droite
 * - Largeur de zone de contenus: 1191px
 *
 * Composants:
 * - AppBarCategory (titre: Clients)
 * - GraphCourbe
 * - Filtres et tris + changement affichage (list vs cards)
 * - Liste de composants ListItemClient (25)
 * - Navigation (suivant, précédent)
 */

import { useState } from "react";
import { AppBarCategory } from "../../../components/organisms/AppBars";
import { GraphCourbe } from "../../../components/organisms/GraphCourbe";
import { ListClient } from "../../../components/components/ListClient";
import { CardClient } from "../../../components/components/CardClient";
import { BadgeCriteria } from "../../../components/atoms/BadgeCriteria";
import { ButtonPagination } from "../../../components/atoms/ButtonPagination";
import { IconButton } from "../../../components/atoms/Button";
import { Button } from "../../../components/atoms/Button";
import { Sheet } from "../../../components/organisms/Sheet";
import { SheetClientDetails } from "../../../components/molecules/SheetClientDetails";
import { ViewModeDropdown } from "../../../components/molecules/ViewModeDropdown";
import { Filter, Plus, ArrowRight } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

export default function FIC_01_Page_List_Client() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bp = useBreakpoint();

  // États
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "cards">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);

  const effectiveViewMode = bp === "mobile" ? "cards" : viewMode;

  // Données mock pour les clients
  // TODO: brancher useClientList(filters, page)
  const mockClients = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    firstName: "Jean-Christophe",
    lastName: "LEMARCHAND",
    badges: [
      { label: "VENDEUR", variant: "default" as const },
      { label: "ACQUÉREUR", variant: "default" as const },
    ],
    aiSuggestions: i % 5,
    qualification: 64,
    engagement: 82,
    conversion: 24,
    reactivation: 49,
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
        title="Clients"
        category="Tous"
        categoryOpen={categoryOpen}
        onCategoryClick={() => setCategoryOpen(!categoryOpen)}
        showAdd
        onAdd={() => console.log("Add client")}
        showSearch
        onSearch={() => console.log("Search")}
      />

      {/* Content Area */}
      <div className="page-content">
        {/* GraphCourbe */}
        <div className="mt-[20px]">
          <GraphCourbe
            title="Réactions positives"
            selectedDate="22 fév 2026"
            selectedValue="28 réactions positives"
            trendPercentage="7%"
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
              label="Île-de-France"
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

        {/* Liste ou Grille des clients */}
        {effectiveViewMode === "list" ? (
          <div className="mt-[20px] space-y-[12px]">
            {mockClients.map((client) => (
              <ListClient
                key={client.id}
                firstName={client.firstName}
                lastName={client.lastName}
                badges={client.badges}
                aiSuggestions={client.aiSuggestions}
                qualification={client.qualification}
                engagement={client.engagement}
                conversion={client.conversion}
                reactivation={client.reactivation}
                onClientClick={() => {
                  setSelectedClient(client);
                  setSheetOpen(true);
                }}
                theme={theme}
              />
            ))}
          </div>
        ) : (
          <div className="mt-[20px] grid grid-cols-3 gap-[20px]">
            {mockClients.map((client) => (
              <CardClient
                key={client.id}
                firstName={client.firstName}
                lastName={client.lastName}
                badges={client.badges}
                aiSuggestions={client.aiSuggestions}
                qualification={client.qualification}
                engagement={client.engagement}
                conversion={client.conversion}
                reactivation={client.reactivation}
                onClientClick={() => {
                  setSelectedClient(client);
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

      {/* Sheet Client Details */}
      <Sheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title={selectedClient ? `${selectedClient.firstName} ${selectedClient.lastName.charAt(0)}.` : ""}
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
        {selectedClient && (
          <SheetClientDetails
            qualification={selectedClient.qualification}
            engagement={selectedClient.engagement}
            conversion={selectedClient.conversion}
            reactivation={selectedClient.reactivation}
          />
        )}
      </Sheet>
    </div>
  );
}
