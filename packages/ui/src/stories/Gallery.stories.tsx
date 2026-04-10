import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "../components/Gallery";

const meta: Meta<typeof Gallery> = {
  title: "Design System/Organisms/Gallery",
  component: Gallery,
};
export default meta;
type Story = StoryObj<typeof Gallery>;

const sampleImages = [
  { url: "https://placehold.co/600x400?text=Facade", alt: "Façade de la propriété" },
  { url: "https://placehold.co/600x400?text=Salon", alt: "Salon principal" },
  { url: "https://placehold.co/600x400?text=Chambre", alt: "Chambre principale" },
  { url: "https://placehold.co/600x400?text=Cuisine", alt: "Cuisine équipée" },
  { url: "https://placehold.co/600x400?text=Jardin", alt: "Jardin extérieur" },
];

export const Default: Story = {
  args: {
    images: sampleImages,
    onExpand: () => console.log("Expand clicked"),
  },
};

export const TwoImages: Story = {
  args: {
    images: [
      { url: "https://placehold.co/600x400?text=Vue+1", alt: "Vue 1" },
      { url: "https://placehold.co/600x400?text=Vue+2", alt: "Vue 2" },
    ],
    onExpand: () => console.log("Expand clicked"),
  },
};

export const SingleImage: Story = {
  args: {
    images: [
      { url: "https://placehold.co/600x400?text=Propriete", alt: "Propriété" },
    ],
    onExpand: () => console.log("Expand clicked"),
  },
};

export const Empty: Story = {
  args: {
    images: [],
    onExpand: () => console.log("Expand clicked"),
  },
};

export const ManyImages: Story = {
  args: {
    images: [
      { url: "https://placehold.co/600x400?text=Photo+1", alt: "Photo 1" },
      { url: "https://placehold.co/600x400?text=Photo+2", alt: "Photo 2" },
      { url: "https://placehold.co/600x400?text=Photo+3", alt: "Photo 3" },
      { url: "https://placehold.co/600x400?text=Photo+4", alt: "Photo 4" },
      { url: "https://placehold.co/600x400?text=Photo+5", alt: "Photo 5" },
      { url: "https://placehold.co/600x400?text=Photo+6", alt: "Photo 6" },
      { url: "https://placehold.co/600x400?text=Photo+7", alt: "Photo 7" },
      { url: "https://placehold.co/600x400?text=Photo+8", alt: "Photo 8" },
    ],
    onExpand: () => console.log("Expand clicked"),
  },
};
