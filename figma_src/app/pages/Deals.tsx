import { AppBar, AppBarAction, AppBarChip } from "../components/AppBar";
import { Card } from "../components/Card";

/**
 * Deals page - Liste des affaires
 * Placeholder page
 */
export default function Deals() {
  return (
    <div className="flex flex-col h-full">
      <AppBar title="Affaires">
        <AppBarChip label="Toutes" active />
        <AppBarChip label="Vente" />
        <AppBarChip label="Acquisition" />
        <AppBarChip label="Location" />
        <AppBarAction icon="search" />
        <AppBarAction icon="add" variant="branded">
          Ajouter
        </AppBarAction>
      </AppBar>

      <div className="flex-1 p-[24px] overflow-auto">
        <Card padding="lg">
          <h3 style={{ color: "var(--text-headings)" }}>Affaires</h3>
          <p className="mt-4" style={{ color: "var(--text-body)" }}>
            Page en cours de construction
          </p>
        </Card>
      </div>
    </div>
  );
}
