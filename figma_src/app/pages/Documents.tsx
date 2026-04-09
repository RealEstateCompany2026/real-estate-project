import { AppBar, AppBarAction, AppBarChip } from "../components/AppBar";
import { Card } from "../components/Card";

/**
 * Documents page - Liste des documents
 * Placeholder page
 */
export default function Documents() {
  return (
    <div className="flex flex-col h-full">
      <AppBar title="Documents">
        <AppBarChip label="Tous" active />
        <AppBarChip label="Mandats" />
        <AppBarChip label="Compromis" />
        <AppBarChip label="Actes" />
        <AppBarAction icon="search" />
        <AppBarAction icon="add" variant="branded">
          Ajouter
        </AppBarAction>
      </AppBar>

      <div className="flex-1 p-[24px] overflow-auto">
        <Card padding="lg">
          <h3 style={{ color: "var(--text-headings)" }}>Documents</h3>
          <p className="mt-4" style={{ color: "var(--text-body)" }}>
            Page en cours de construction
          </p>
        </Card>
      </div>
    </div>
  );
}
