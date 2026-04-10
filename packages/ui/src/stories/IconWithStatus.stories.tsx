import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconWithStatus } from "../components/IconWithStatus";
import { User, Settings, Bell, Home } from "lucide-react";

const meta: Meta<typeof IconWithStatus> = {
  title: "Design System/Atoms/IconWithStatus",
  component: IconWithStatus,
  argTypes: {
    showStatus: { control: "boolean" },
    statusColor: {
      control: {
        type: "radio",
        options: ["success", "error", "warning", "neutral"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconWithStatus>;

export const Default: Story = {
  args: {
    showStatus: true,
    statusColor: "success",
    children: <User size={32} />,
  },
};

export const NoStatus: Story = {
  args: {
    showStatus: false,
    statusColor: "success",
    children: <User size={32} />,
  },
};

export const StatusSuccess: Story = {
  args: {
    showStatus: true,
    statusColor: "success",
    children: <User size={32} />,
  },
};

export const StatusError: Story = {
  args: {
    showStatus: true,
    statusColor: "error",
    children: <User size={32} />,
  },
};

export const StatusWarning: Story = {
  args: {
    showStatus: true,
    statusColor: "warning",
    children: <User size={32} />,
  },
};

export const StatusNeutral: Story = {
  args: {
    showStatus: true,
    statusColor: "neutral",
    children: <User size={32} />,
  },
};

export const WithSettings: Story = {
  args: {
    showStatus: true,
    statusColor: "success",
    children: <Settings size={32} />,
  },
};

export const WithBell: Story = {
  args: {
    showStatus: true,
    statusColor: "error",
    children: <Bell size={32} />,
  },
};

export const WithHome: Story = {
  args: {
    showStatus: true,
    statusColor: "warning",
    children: <Home size={32} />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Status Colors</h3>
        <div className="flex gap-8">
          <IconWithStatus statusColor="success">
            <User size={32} />
          </IconWithStatus>
          <IconWithStatus statusColor="error">
            <User size={32} />
          </IconWithStatus>
          <IconWithStatus statusColor="warning">
            <User size={32} />
          </IconWithStatus>
          <IconWithStatus statusColor="neutral">
            <User size={32} />
          </IconWithStatus>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Different Icons</h3>
        <div className="flex gap-8">
          <IconWithStatus statusColor="success">
            <User size={32} />
          </IconWithStatus>
          <IconWithStatus statusColor="success">
            <Settings size={32} />
          </IconWithStatus>
          <IconWithStatus statusColor="success">
            <Bell size={32} />
          </IconWithStatus>
          <IconWithStatus statusColor="success">
            <Home size={32} />
          </IconWithStatus>
        </div>
      </div>
    </div>
  ),
};
