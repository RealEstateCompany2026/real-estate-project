import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sheet } from "../components/Sheet";
import { Button } from "../components/Button";

const meta: Meta<typeof Sheet> = {
  title: "Design System/Organisms/Sheet",
  component: Sheet,
};
export default meta;
type Story = StoryObj<typeof Sheet>;

function SheetWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Ouvrir le Sheet</Button>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Détails de la fiche"
        width="narrow"
      >
        <div className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Informations générales</h3>
            <p className="text-sm text-content-body">
              Affichage des détails du bien immobilier avec toutes les caractéristiques principales.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm text-content-body">
              Dupont, Jean-François<br />
              jean-francois.dupont@email.fr<br />
              +33 6 12 34 56 78
            </p>
          </div>
        </div>
      </Sheet>
    </div>
  );
}

function SheetWrapperWide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Ouvrir le formulaire</Button>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Sélectionner un bien"
        width="wide"
        footer={
          <div className="flex gap-3 p-4 border-t border-edge-default">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Annuler
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Valider
            </Button>
          </div>
        }
      >
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-edge-default rounded-lg cursor-pointer hover:bg-surface-neutral-hover">
              <h4 className="font-semibold mb-1">BIEN-2026-4521</h4>
              <p className="text-sm text-content-body">42 rue de la Paix, Paris</p>
            </div>
            <div className="p-4 border border-edge-default rounded-lg cursor-pointer hover:bg-surface-neutral-hover">
              <h4 className="font-semibold mb-1">BIEN-2026-7834</h4>
              <p className="text-sm text-content-body">128 avenue des Champs-Élysées, Paris</p>
            </div>
            <div className="p-4 border border-edge-default rounded-lg cursor-pointer hover:bg-surface-neutral-hover">
              <h4 className="font-semibold mb-1">BIEN-2026-3159</h4>
              <p className="text-sm text-content-body">55 rue Rivoli, Paris</p>
            </div>
            <div className="p-4 border border-edge-default rounded-lg cursor-pointer hover:bg-surface-neutral-hover">
              <h4 className="font-semibold mb-1">BIEN-2026-5627</h4>
              <p className="text-sm text-content-body">12 place Vendôme, Paris</p>
            </div>
          </div>
        </div>
      </Sheet>
    </div>
  );
}

function SheetWrapperNoHeaderDivider() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Ouvrir (sans divider)</Button>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Historique d'activité"
        width="narrow"
        showHeaderDivider={false}
      >
        <div className="p-4">
          <div className="space-y-3">
            <div className="border-l-2 border-surface-branded-default pl-4 py-2">
              <p className="font-semibold text-sm">Bien créé</p>
              <p className="text-xs text-content-body">10 avr 2026, 14:32</p>
            </div>
            <div className="border-l-2 border-surface-branded-default pl-4 py-2">
              <p className="font-semibold text-sm">Client ajouté</p>
              <p className="text-xs text-content-body">10 avr 2026, 13:15</p>
            </div>
            <div className="border-l-2 border-surface-branded-default pl-4 py-2">
              <p className="font-semibold text-sm">Affaire créée</p>
              <p className="text-xs text-content-body">9 avr 2026, 11:42</p>
            </div>
          </div>
        </div>
      </Sheet>
    </div>
  );
}

export const Narrow: Story = {
  render: () => <SheetWrapper />,
};

export const Wide: Story = {
  render: () => <SheetWrapperWide />,
};

export const NoHeaderDivider: Story = {
  render: () => <SheetWrapperNoHeaderDivider />,
};

export const WithFooter: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Ouvrir avec footer</Button>
        <Sheet
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Créer un bien"
          width="narrow"
          footer={
            <div className="flex gap-3 p-4 border-t border-edge-default bg-surface-neutral-default">
              <Button variant="secondary" onClick={() => setIsOpen(false)} className="flex-1">
                Annuler
              </Button>
              <Button onClick={() => setIsOpen(false)} className="flex-1">
                Créer
              </Button>
            </div>
          }
        >
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm font-semibold mb-2 block">Adresse</label>
              <input
                type="text"
                placeholder="Ex: 42 rue de la Paix"
                className="w-full px-3 py-2 border border-edge-default rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-2 block">Type de transaction</label>
              <select className="w-full px-3 py-2 border border-edge-default rounded-lg">
                <option>À vendre</option>
                <option>À louer</option>
              </select>
            </div>
          </div>
        </Sheet>
      </div>
    );
  },
};
