import { AppBar, AppBarAction } from "../components/AppBar";
import { Card } from "../components/Card";

/**
 * Database page - Base de données
 * Placeholder page
 */
export default function Database() {
  return (
    <div className="flex flex-col h-full">
      <AppBar title="Base de données">
        <AppBarAction icon="search" />
        <AppBarAction icon="add" variant="branded">
          Importer
        </AppBarAction>
      </AppBar>

      <div className="flex-1 p-[24px] overflow-auto">
        <Card padding="lg">
          <h3 style={{ color: "var(--text-headings)" }}>Base de données</h3>
          <p className="mt-4" style={{ color: "var(--text-body)" }}>
            Page en cours de construction
          </p>
        </Card>
      </div>
    </div>
  );
}
