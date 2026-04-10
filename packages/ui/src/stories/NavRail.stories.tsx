import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavRail } from "../components/NavRail";

const meta: Meta<typeof NavRail> = {
  title: "Design System/Organisms/NavRail",
  component: NavRail,
};
export default meta;
type Story = StoryObj<typeof NavRail>;

export const Default: Story = {
  args: {
    activeSection: "dashboard",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=JD",
    avatarAlt: "Jean Dupont",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false,
  },
};

export const DatabaseSelected: Story = {
  args: {
    activeSection: "database",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=SM",
    avatarAlt: "Sophie Martin",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false,
  },
};

export const ClientsSelected: Story = {
  args: {
    activeSection: "clients",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=MR",
    avatarAlt: "Marie Rousseau",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false,
  },
};

export const PropertiesSelected: Story = {
  args: {
    activeSection: "properties",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=PB",
    avatarAlt: "Pierre Bernard",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false,
  },
};

export const DealsSelected: Story = {
  args: {
    activeSection: "deals",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=CL",
    avatarAlt: "Claude Laurent",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false,
  },
};

export const CalendarSelected: Story = {
  args: {
    activeSection: "calendar",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=AC",
    avatarAlt: "Anne Charles",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false,
  },
};

export const AvatarSelected: Story = {
  args: {
    activeSection: "dashboard",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: "https://placehold.co/40x40?text=GP",
    avatarAlt: "Gabrielle Petit",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: true,
  },
};

export const WithoutAvatar: Story = {
  args: {
    activeSection: "dashboard",
    onNavigate: (section) => console.log("Navigate to:", section),
    avatarSrc: undefined,
    avatarAlt: "Utilisateur",
    onAvatarClick: () => console.log("Avatar clicked"),
    onLogoClick: () => console.log("Logo clicked"),
    avatarSelected: false,
  },
};
