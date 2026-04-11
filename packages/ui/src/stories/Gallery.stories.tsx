import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "../components/Gallery";

const meta: Meta<typeof Gallery> = {
  title: "Design System/Organisms/Gallery",
  component: Gallery,
  parameters: {
    layout: "padded",
  },
};
export default meta;
type Story = StoryObj<typeof Gallery>;

const sampleImages = [
  { url: "https://placehold.co/800x400/e8a87c/fff?text=Salon", alt: "Salon" },
  {
    url: "https://placehold.co/800x400/7b8fa1/fff?text=Chambre",
    alt: "Chambre",
  },
  {
    url: "https://placehold.co/800x400/c4a882/fff?text=Salle+de+bain",
    alt: "Salle de bain",
  },
];

/* ── 3 images — layout Figma standard ──────── */

export const ThreeImages: Story = {
  args: {
    images: sampleImages,
    onGalleryClick: () => console.log("Galerie clicked"),
  },
};

/* ── 2 images ──────────────────────────────── */

export const TwoImages: Story = {
  args: {
    images: sampleImages.slice(0, 2),
    onGalleryClick: () => console.log("Galerie clicked"),
  },
};

/* ── 1 image ───────────────────────────────── */

export const SingleImage: Story = {
  args: {
    images: sampleImages.slice(0, 1),
    onGalleryClick: () => console.log("Galerie clicked"),
  },
};

/* ── Empty ─────────────────────────────────── */

export const Empty: Story = {
  args: {
    images: [],
  },
};

/* ── Sans bouton Galerie ───────────────────── */

export const NoBoutonGalerie: Story = {
  args: {
    images: sampleImages,
  },
};

/* ── Version étroite (sheet annonce) ───────── */

export const Narrow: Story = {
  args: {
    images: sampleImages,
    onGalleryClick: () => console.log("Galerie clicked"),
    height: 200,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
};
