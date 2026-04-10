import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageEdit } from "../components/MessageEdit";

const meta: Meta<typeof MessageEdit> = {
  title: "Design System/Molecules/MessageEdit",
  component: MessageEdit,
};

export default meta;
type Story = StoryObj<typeof MessageEdit>;

export const Default: Story = {
  args: {
    message: "Bonjour, j'aimerais avoir plus de détails sur cette propriété.",
    onSave: (message) => console.log("Message mis à jour:", message),
    onCancel: () => console.log("Édition annulée"),
  },
};

export const WithLongMessage: Story = {
  args: {
    message:
      "Bonjour,\n\nJ'aimerais avoir plus de détails sur cette propriété. Pouvez-vous me fournir:\n- Les dimensions exactes\n- L'année de construction\n- Les détails des travaux de rénovation\n- Le diagnostic énergétique\n\nCordialement",
    onSave: (message) => console.log("Message sauvegardé:", message),
    onCancel: () => console.log("Annulation"),
  },
};

export const EmptyMessage: Story = {
  args: {
    message: "",
    onSave: (message) => console.log("Message:", message),
    onCancel: () => console.log("Annulé"),
  },
};

export const Interactive: Story = {
  render: () => {
    const [message, setMessage] = React.useState(
      "Ceci est un message à éditer"
    );
    const [saved, setSaved] = React.useState(false);

    return (
      <div>
        <MessageEdit
          message={message}
          onSave={(newMessage) => {
            setMessage(newMessage);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }}
          onCancel={() => console.log("Annulé")}
        />
        {saved && <p style={{ marginTop: "16px", color: "green" }}>Message sauvegardé!</p>}
      </div>
    );
  },
};
