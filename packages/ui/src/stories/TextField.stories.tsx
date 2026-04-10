import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "../components/TextField";
import { Search, Mail, Eye } from "lucide-react";

const meta: Meta<typeof TextField> = {
  title: "Design System/Atoms/TextField",
  component: TextField,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["text", "email", "tel", "url", "password", "number", "search"],
      },
    },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    value: { control: "text" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    value: "",
    type: "text",
    disabled: false,
    error: false,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Enter text...",
    value: "Sample text",
    type: "text",
    disabled: false,
    error: false,
  },
};

export const Email: Story = {
  args: {
    placeholder: "name@example.com",
    type: "email",
    disabled: false,
    error: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Search...",
    leftIcon: Search,
    type: "search",
    disabled: false,
    error: false,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "password...",
    rightIcon: Eye,
    type: "password",
    disabled: false,
    error: false,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Email address",
    leftIcon: Mail,
    rightIcon: Eye,
    type: "email",
    disabled: false,
    error: false,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Enter text...",
    value: "",
    type: "text",
    disabled: false,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled field",
    value: "Cannot edit",
    type: "text",
    disabled: true,
    error: false,
  },
};

export const Required: Story = {
  args: {
    placeholder: "Required field...",
    type: "text",
    disabled: false,
    error: false,
    required: true,
  },
};

export const Number: Story = {
  args: {
    placeholder: "Enter a number...",
    type: "number",
    disabled: false,
    error: false,
  },
};

export const Telephone: Story = {
  args: {
    placeholder: "+1 (555) 000-0000",
    type: "tel",
    disabled: false,
    error: false,
  },
};
