import type { Meta, StoryObj } from "@storybook/react";
import { AppBarMessagerie } from "../components/AppBarMessagerie";

const meta: Meta<typeof AppBarMessagerie> = {
  title: "Design System/Organisms/AppBarMessagerie",
  component: AppBarMessagerie,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Barre d'en-tête messagerie — titre + contact + engagement score + 5 statuts messages (none/reçu/lu) + date dernier message + fermer.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppBarMessagerie>;

export const BonEngagement: Story = {
  args: {
    contactName: "CAPELLO, Jean-François",
    engagementScore: 82,
    lastMessageStatuses: ["none", "none", "received", "read", "read"],
    lastMessageAge: "280 j",
  },
};

export const EngagementMoyen: Story = {
  args: {
    contactName: "MARTIN, Pierre",
    engagementScore: 45,
    lastMessageStatuses: ["none", "none", "none", "received", "read"],
    lastMessageAge: "3 j",
  },
};

export const FaibleEngagement: Story = {
  args: {
    contactName: "DUPONT, Jean",
    engagementScore: 15,
    lastMessageStatuses: ["none", "none", "none", "none", "received"],
    lastMessageAge: "45 j",
  },
};

export const TousLus: Story = {
  args: {
    contactName: "LEFEVRE, Marie",
    engagementScore: 97,
    lastMessageStatuses: ["read", "read", "read", "read", "read"],
    lastMessageAge: "2 h",
  },
};
