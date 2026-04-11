import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MessageEdit } from "../components/MessageEdit";

const meta: Meta<typeof MessageEdit> = {
  title: "Design System/Molecules/MessageEdit",
  component: MessageEdit,
};

export default meta;
type Story = StoryObj<typeof MessageEdit>;

export const Standard: Story = {
  args: {
    variant: "standard",
    placeholder: "Votre message...",
    onSend: (html, text, files) =>
      console.log("Send:", { html, text, files }),
  },
};

export const StandardEditing: Story = {
  args: {
    variant: "standard",
    isEditing: true,
    defaultValue: "Bonjour, j'aimerais avoir plus de détails sur cette propriété.",
    onSend: (html, text, files) =>
      console.log("Save:", { html, text, files }),
    onCancel: () => console.log("Cancel"),
  },
};

export const Chat: Story = {
  args: {
    variant: "chat",
    placeholder: "Tapez un message...",
    onSend: (html, text, files) =>
      console.log("Send:", { html, text, files }),
  },
};

export const ChatEditing: Story = {
  args: {
    variant: "chat",
    isEditing: true,
    defaultValue: "Message en cours d'édition",
    onSend: (html, text, files) =>
      console.log("Save:", { html, text, files }),
    onCancel: () => console.log("Cancel"),
  },
};
