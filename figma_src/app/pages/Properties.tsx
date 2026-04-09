import { AppBar, AppBarAction, AppBarChip } from "../components/AppBar";
import { Card } from "../components/Card";

/**
 * Properties page - Liste des biens
 * Placeholder page
 */
export default function Properties() {
  return (
    <div className="flex flex-col h-full">
      <AppBar title="Biens">
        <AppBarChip label="Tous" active />
        <AppBarChip label="En vente" />
        <AppBarChip label="En location" />
        <AppBarChip label="Off-market" />
        <AppBarAction icon="search" />
        <AppBarAction icon="add" variant="branded">
          Ajouter
        </AppBarAction>
      </AppBar>

      <div className="flex-1 p-[24px] overflow-auto">
        <Card padding="lg">
          <h3 style={{ color: "var(--text-headings)" }}>Biens</h3>
          <p className="mt-4" style={{ color: "var(--text-body)" }}>
            Page en cours de construction
          </p>
        </Card>
      </div>
    </div>
  );
}
