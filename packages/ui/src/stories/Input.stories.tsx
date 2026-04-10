import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "Saisissez un texte…" },
};

export const Email: Story = {
  args: { type: "email", placeholder: "email@example.com" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Mot de passe" },
};

export const Disabled: Story = {
  args: { placeholder: "Champ désactivé", disabled: true },
};

export const WithValue: Story = {
  args: { defaultValue: "Jean Dupont" },
};

export const FormExample: Story = {
  render: () => (
    <div style={{ maxWidth: 400, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--text-body)", marginBottom: 4 }}>
          Prénom
        </label>
        <Input placeholder="Jean" />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--text-body)", marginBottom: 4 }}>
          Nom
        </label>
        <Input placeholder="Dupont" />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--text-body)", marginBottom: 4 }}>
          Email
        </label>
        <Input type="email" placeholder="jean.dupont@email.com" />
      </div>
      <div>
        <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--text-body)", marginBottom: 4 }}>
          Téléphone
        </label>
        <Input type="tel" placeholder="06 12 34 56 78" />
      </div>
    </div>
  ),
};
