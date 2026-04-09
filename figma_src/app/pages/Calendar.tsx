import { AppBar, AppBarAction } from "../components/AppBar";
import { Card } from "../components/Card";

/**
 * Calendar page - Agenda
 * Placeholder page
 */
export default function Calendar() {
  return (
    <div className="flex flex-col h-full">
      <AppBar title="Agenda">
        <AppBarAction icon="add" variant="branded">
          Nouveau rendez-vous
        </AppBarAction>
      </AppBar>

      <div className="flex-1 p-[24px] overflow-auto">
        <Card padding="lg">
          <h3 style={{ color: "var(--text-headings)" }}>Agenda</h3>
          <p className="mt-4" style={{ color: "var(--text-body)" }}>
            Page en cours de construction
          </p>
        </Card>
      </div>
    </div>
  );
}
