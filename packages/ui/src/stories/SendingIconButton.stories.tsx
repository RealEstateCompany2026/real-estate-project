import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SendingIconButton } from "../components/SendingIconButton";

const meta: Meta<typeof SendingIconButton> = {
  title: "Design System/Atoms/SendingIconButton",
  component: SendingIconButton,
};
export default meta;
type Story = StoryObj<typeof SendingIconButton>;

export const Idle: Story = {
  args: {
    status: "idle",
    onClick: () => console.log("Send clicked"),
  },
};

export const Sending: Story = {
  args: {
    status: "sending",
    onClick: () => console.log("Send clicked"),
  },
};

export const Sent: Story = {
  args: {
    status: "sent",
    onClick: () => console.log("Send clicked"),
  },
};

export const Disabled: Story = {
  args: {
    status: "idle",
    disabled: true,
  },
};
