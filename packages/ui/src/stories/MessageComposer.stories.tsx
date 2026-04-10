import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageComposer } from "../components/MessageComposer";

const meta: Meta<typeof MessageComposer> = {
  title: "Design System/Molecules/MessageComposer",
  component: MessageComposer,
  argTypes: {
    variant: {
      control: "select",
      options: ["standard", "chat"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MessageComposer>;

export const Standard: Story = {
  args: {
    variant: "standard",
    placeholder: "Écrivez votre message...",
    onSend: (message, attachments) => {
      console.log("Message envoyé:", message);
      console.log("Pièces jointes:", attachments);
    },
  },
};

export const Chat: Story = {
  args: {
    variant: "chat",
    placeholder: "Message...",
    onSend: (message, attachments) => {
      console.log("Message envoyé:", message);
      console.log("Pièces jointes:", attachments);
    },
  },
};

export const WithPlaceholder: Story = {
  args: {
    variant: "standard",
    placeholder: "Tapez votre réponse ici...",
  },
};

export const ChatVariant: Story = {
  args: {
    variant: "chat",
    placeholder: "Votre message...",
  },
};

export const Disabled: Story = {
  args: {
    variant: "standard",
    placeholder: "Composeur désactivé",
    disabled: true,
  },
};

export const WithCallback: Story = {
  args: {
    variant: "standard",
    placeholder: "Répondre au message...",
    onSend: (message, attachments) => {
      alert(`Message: "${message}"\nPièces jointes: ${attachments.length}`);
    },
  },
};
