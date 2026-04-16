import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ViewModeDropdown, type ViewMode } from "../components/ViewModeDropdown";

const meta: Meta<typeof ViewModeDropdown> = {
  title: "Design System/Molecules/ViewModeDropdown",
  component: ViewModeDropdown,
};

export default meta;
type Story = StoryObj<typeof ViewModeDropdown>;

export const ListMode: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("list");
    return (
      <div style={{ padding: "20px" }}>
        <ViewModeDropdown
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <p style={{ marginTop: "16px" }}>Mode: {viewMode}</p>
      </div>
    );
  },
};

export const CardsMode: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("cards");
    return (
      <div style={{ padding: "20px" }}>
        <ViewModeDropdown
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <p style={{ marginTop: "16px" }}>Mode: {viewMode}</p>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("list");
    return (
      <div style={{ padding: "20px" }}>
        <ViewModeDropdown
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          disabled
        />
        <p style={{ marginTop: "16px" }}>Mode: {viewMode} (disabled)</p>
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState<ViewMode>("list");
    return (
      <div>
        <div style={{ padding: "20px", borderBottom: "1px solid #e0e0e0" }}>
          <ViewModeDropdown
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
        <div style={{ padding: "20px" }}>
          {viewMode === "list" ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "4px" }}>
                Propriété 1 - Vue liste
              </div>
              <div style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "4px" }}>
                Propriété 2 - Vue liste
              </div>
              <div style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "4px" }}>
                Propriété 3 - Vue liste
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div
                style={{
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                Propriété 1
              </div>
              <div
                style={{
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                Propriété 2
              </div>
              <div
                style={{
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                Propriété 3
              </div>
              <div
                style={{
                  padding: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                Propriété 4
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
};
