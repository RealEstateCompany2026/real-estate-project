import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { LoadingOverlay } from "../components/LoadingOverlay";

const meta: Meta<typeof LoadingOverlay> = {
  title: "Design System/Molecules/LoadingOverlay",
  component: LoadingOverlay,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Default: Story = {
  args: {
    size: "md",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
          border: "1px solid #ccc",
        }}
      >
        <div style={{ padding: "20px" }}>
          <p>Contenu du conteneur</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const WithMessage: Story = {
  args: {
    size: "md",
    message: "Chargement des données...",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
          border: "1px solid #ccc",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    message: "Sync en cours",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "250px",
          position: "relative",
          border: "1px solid #ccc",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const LargeSize: Story = {
  args: {
    size: "lg",
    message: "Traitement important en cours...",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "400px",
          position: "relative",
          border: "1px solid #ccc",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const ContainerOverlay: Story = {
  args: {
    size: "md",
    message: "Sauvegarde en cours",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
          border: "2px dashed #999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h3>Contenu de mon application</h3>
          <p>Ce contenu est masqué pendant le chargement</p>
        </div>
        <Story />
      </div>
    ),
  ],
};
