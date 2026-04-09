import { AppBar, AppBarAction, AppBarChip } from "../components/AppBar";
import { Card } from "../components/Card";

/**
 * Clients page - Liste des clients
 * Placeholder page
 */
export default function Clients() {
  return (
    <div className="flex flex-col h-full">
      <AppBar title="Clients">
        <AppBarChip label="Tous" active />
        <AppBarChip label="Vendeurs" />
        <AppBarChip label="Acquéreurs" />
        <AppBarChip label="Locataires" />
        <AppBarAction icon="search" />
        <AppBarAction icon="add" variant="branded">
          Ajouter
        </AppBarAction>
      </AppBar>

      <div className="flex-1 p-[24px] overflow-auto">
        <Card padding="lg">
          <h3 style={{ color: "var(--text-headings)" }}>Clients</h3>
          <p className="mt-4" style={{ color: "var(--text-body)" }}>
            Page en cours de construction
          </p>
        </Card>
      </div>
    </div>
  );
}
