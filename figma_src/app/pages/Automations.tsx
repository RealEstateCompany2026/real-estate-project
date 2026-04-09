import { AppBar, AppBarAction, AppBarChip } from "../components/AppBar";
import { Card } from "../components/Card";

/**
 * Automations page - Liste des automatisations
 * Placeholder page
 */
export default function Automations() {
  return (
    <div className="flex flex-col h-full">
      <AppBar title="Automatisations">
        <AppBarChip label="Toutes" active />
        <AppBarChip label="Actives" />
        <AppBarChip label="Inactives" />
        <AppBarAction icon="search" />
        <AppBarAction icon="add" variant="branded">
          Créer
        </AppBarAction>
      </AppBar>

      <div className="flex-1 p-[24px] overflow-auto">
        <Card padding="lg">
          <h3 style={{ color: "var(--text-headings)" }}>Automatisations</h3>
          <p className="mt-4" style={{ color: "var(--text-body)" }}>
            Page en cours de construction
          </p>
        </Card>
      </div>
    </div>
  );
}
