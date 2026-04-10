import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeModal } from "../components/WelcomeModal";

const meta: Meta<typeof WelcomeModal> = {
  title: "Design System/Organisms/WelcomeModal",
  component: WelcomeModal,
};
export default meta;
type Story = StoryObj<typeof WelcomeModal>;

function WelcomeModalWrapper({ firstName }: { firstName?: string }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="px-4 py-2 bg-surface-branded-default text-content-on-branded-default rounded-lg"
      >
        Afficher la modale
      </button>
    );
  }

  return (
    <WelcomeModal
      firstName={firstName}
      onStart={() => {
        console.log("Tour guidé démarré");
        setIsVisible(false);
      }}
      onSkip={() => {
        console.log("Tour guidé ignoré");
        setIsVisible(false);
      }}
    />
  );
}

export const Default: Story = {
  render: () => <WelcomeModalWrapper firstName="Jean-François" />,
};

export const WithLongName: Story = {
  render: () => <WelcomeModalWrapper firstName="Marthéline-Rousseau" />,
};

export const WithoutName: Story = {
  render: () => <WelcomeModalWrapper />,
};

export const WithShortName: Story = {
  render: () => <WelcomeModalWrapper firstName="Sophie" />,
};

export const WithSpecialCharacters: Story = {
  render: () => <WelcomeModalWrapper firstName="François-Xavier" />,
};
