import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Spotlight } from "../components/Spotlight";

const meta: Meta<typeof Spotlight> = {
  title: "Design System/Molecules/Spotlight",
  component: Spotlight,
};

export default meta;
type Story = StoryObj<typeof Spotlight>;

export const Default: Story = {
  args: {
    targetRect: {
      top: 100,
      left: 100,
      width: 200,
      height: 100,
    },
    children: <div>Cliquez ici pour continuer</div>,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", position: "relative" }}>
        <button
          style={{
            position: "absolute",
            top: "100px",
            left: "100px",
            width: "200px",
            height: "100px",
            padding: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Bouton en évidence
        </button>
        <Story />
      </div>
    ),
  ],
};

export const WithCustomPadding: Story = {
  args: {
    targetRect: {
      top: 80,
      left: 120,
      width: 160,
      height: 120,
    },
    padding: 16,
    children: <div>Zone avec plus d'espace</div>,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", position: "relative" }}>
        <input
          type="text"
          placeholder="Entrez votre email"
          style={{
            position: "absolute",
            top: "80px",
            left: "120px",
            width: "160px",
            padding: "12px",
            borderRadius: "8px",
            border: "2px solid #007bff",
          }}
        />
        <Story />
      </div>
    ),
  ],
};

export const HighZIndex: Story = {
  args: {
    targetRect: {
      top: 150,
      left: 150,
      width: 100,
      height: 100,
    },
    zIndex: 50,
    children: <p>Spotlight au premier plan</p>,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "150px",
            left: "150px",
            width: "100px",
            height: "100px",
            backgroundColor: "#FF9800",
            borderRadius: "8px",
          }}
        />
        <Story />
      </div>
    ),
  ],
};

export const WithSkipCallback: Story = {
  args: {
    targetRect: {
      top: 100,
      left: 100,
      width: 200,
      height: 80,
    },
    children: <p>Cliquez sur le bouton de retrait</p>,
    onSkip: () => console.log("Spotlight ignoré"),
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "100px",
            width: "200px",
            height: "80px",
            backgroundColor: "#2196F3",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Élément à découvrir
        </div>
        <Story />
      </div>
    ),
  ],
};

export const BorderRadius: Story = {
  args: {
    targetRect: {
      top: 120,
      left: 80,
      width: 240,
      height: 100,
    },
    borderRadius: 24,
    padding: 12,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "120px",
            left: "80px",
            width: "240px",
            height: "100px",
            backgroundColor: "#9C27B0",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "16px",
          }}
        >
          Zone arrondie
        </div>
        <Story />
      </div>
    ),
  ],
};
