import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ImageBien } from "../components/ImageBien";

const meta: Meta<typeof ImageBien> = {
  title: "Design System/Atoms/ImageBien",
  component: ImageBien,
};
export default meta;
type Story = StoryObj<typeof ImageBien>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=160&fit=crop",
    alt: "Luxury apartment",
  },
};

export const WithCustomAlt: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=200&h=160&fit=crop",
    alt: "Modern house with garden",
  },
};

export const Placeholder: Story = {
  args: {
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='120'%3E%3Crect fill='%23ccc' width='160' height='120'/%3E%3C/svg%3E",
    alt: "Placeholder image",
  },
};
