import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sheet } from "../components/Sheet";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";

const meta: Meta<typeof Sheet> = {
  title: "Design System/Organisms/Sheet",
  component: Sheet,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj<typeof Sheet>;

/* ── Always open narrow — pour vérifier radius + shadow ── */

export const NarrowOpen: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Sheets title",
    width: "narrow",
    children: (
      <div style={{ padding: 20 }}>
        <p style={{ color: "var(--text-body)" }}>
          Vérifie : border-radius 16px uniquement sur bords gauches (tl + bl),
          shadow 0 0 10px 7px autour du panneau.
        </p>
      </div>
    ),
  },
};

/* ── Always open wide ───────────────────────── */

export const WideOpen: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Sheets title",
    width: "wide",
    children: (
      <div style={{ padding: 40 }}>
        <p style={{ color: "var(--text-body)" }}>
          Sheet wide (1024px). Même radius gauche, même shadow.
        </p>
      </div>
    ),
  },
};

/* ── Interactive narrow ─────────────────────── */

export const NarrowInteractive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Ouvrir narrow (420px)
        </button>
        <Sheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Détails de la fiche"
          width="narrow"
        >
          <div style={{ padding: 20 }}>
            <p style={{ color: "var(--text-body)" }}>
              Contenu du sheet narrow. Cliquer sur × ou sur le backdrop pour fermer.
            </p>
          </div>
        </Sheet>
      </div>
    );
  },
};

/* ── Interactive wide with footer ───────────── */

export const WideWithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Ouvrir wide (1024px)
        </button>
        <Sheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Sélectionner un bien"
          width="wide"
          footer={
            <div
              style={{
                padding: "16px 40px",
                borderTop: "1px solid var(--border-neutral-default)",
                display: "flex",
                justifyContent: "flex-end",
                gap: 8,
              }}
            >
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 16,
                  backgroundColor: "var(--surface-branded-default)",
                  color: "var(--text-branded-on-action)",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Valider
              </button>
            </div>
          }
        >
          <div style={{ padding: 40, minHeight: 400 }}>
            <p style={{ color: "var(--text-body)" }}>
              Sheet wide avec footer sticky.
            </p>
          </div>
        </Sheet>
      </div>
    );
  },
};

/* ── With Header Composable ────────────────── */

export const WithHeaderComposable: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: 40 }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "10px 20px",
            borderRadius: 8,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Ouvrir header composable
        </button>
        <Sheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Annonce"
          width="wide"
          headerAfterTitle={
            <div className="flex items-center gap-3">
              <Badge variant="success">ÉDITION</Badge>
              <Badge variant="warning">RÉVISION</Badge>
              <Badge variant="disabled">PUBLICATION</Badge>
            </div>
          }
          headerActions={
            <Button variant="outline" onClick={() => {}}>
              Publier
            </Button>
          }
        >
          <div style={{ padding: 40, minHeight: 400 }}>
            <p style={{ color: "var(--text-body)" }}>
              Header composable : titre + badges (headerAfterTitle) + bouton (headerActions) + close.
            </p>
          </div>
        </Sheet>
      </div>
    );
  },
};
