import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "../components/Menu";
import type { MenuItemProps } from "../components/MenuItem";
import { FileText, Edit, Trash2, Eye, Share2, Download, Archive } from "lucide-react";

const meta: Meta<typeof Menu> = {
  title: "Design System/Organisms/Menu",
  component: Menu,
};
export default meta;
type Story = StoryObj<typeof Menu>;

const basicItems: MenuItemProps[] = [
  {
    label: "Afficher",
    icon: <Eye size={20} />,
    onClick: () => console.log("View clicked"),
  },
  {
    label: "Modifier",
    icon: <Edit size={20} />,
    onClick: () => console.log("Edit clicked"),
  },
  {
    label: "Dupliquer",
    icon: <FileText size={20} />,
    onClick: () => console.log("Duplicate clicked"),
  },
  {
    label: "Supprimer",
    icon: <Trash2 size={20} />,
    onClick: () => console.log("Delete clicked"),
    variant: "danger",
  },
];

const extendedItems: MenuItemProps[] = [
  {
    label: "Afficher",
    icon: <Eye size={20} />,
    onClick: () => console.log("View clicked"),
  },
  {
    label: "Modifier",
    icon: <Edit size={20} />,
    onClick: () => console.log("Edit clicked"),
  },
  {
    label: "Dupliquer",
    icon: <FileText size={20} />,
    onClick: () => console.log("Duplicate clicked"),
  },
  {
    label: "Partager",
    icon: <Share2 size={20} />,
    onClick: () => console.log("Share clicked"),
  },
  {
    label: "Télécharger",
    icon: <Download size={20} />,
    onClick: () => console.log("Download clicked"),
  },
  {
    label: "Archiver",
    icon: <Archive size={20} />,
    onClick: () => console.log("Archive clicked"),
  },
  {
    label: "Supprimer",
    icon: <Trash2 size={20} />,
    onClick: () => console.log("Delete clicked"),
    variant: "danger",
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
    showScrollbar: true,
  },
};

export const WithoutScrollbar: Story = {
  args: {
    items: basicItems,
    showScrollbar: false,
  },
};

export const Extended: Story = {
  args: {
    items: extendedItems,
    showScrollbar: true,
    maxHeight: 300,
  },
};

export const CustomWidth: Story = {
  args: {
    items: basicItems,
    width: 280,
    showScrollbar: true,
  },
};

export const WithMaxHeight: Story = {
  args: {
    items: extendedItems,
    showScrollbar: true,
    maxHeight: 200,
  },
};

export const LargeWidth: Story = {
  args: {
    items: basicItems,
    width: 400,
    showScrollbar: true,
  },
};

export const SmallMenu: Story = {
  args: {
    items: basicItems,
    showScrollbar: true,
    size: "small",
  },
};
