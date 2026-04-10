import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavButton } from "../components/NavButton";
import { Home, Settings, Bell, Search, Star, User } from "lucide-react";

const meta: Meta<typeof NavButton> = {
  title: "Design System/Atoms/NavButton",
  component: NavButton,
  argTypes: {
    selected: { control: "boolean" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
  args: {
    icon: Home,
    label: "Home",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    icon: Home,
    label: "Home",
    selected: true,
  },
};

export const WithSettings: Story = {
  args: {
    icon: Settings,
    label: "Settings",
    selected: false,
  },
};

export const SelectedWithSettings: Story = {
  args: {
    icon: Settings,
    label: "Settings",
    selected: true,
  },
};

export const WithBell: Story = {
  args: {
    icon: Bell,
    label: "Notifications",
    selected: false,
  },
};

export const WithSearch: Story = {
  args: {
    icon: Search,
    label: "Search",
    selected: false,
  },
};

export const WithStar: Story = {
  args: {
    icon: Star,
    label: "Favorites",
    selected: false,
  },
};

export const WithUser: Story = {
  args: {
    icon: User,
    label: "Profile",
    selected: false,
  },
};

export const AllButtons: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <NavButton icon={Home} label="Home" selected={false} />
      <NavButton icon={Home} label="Home" selected={true} />
      <NavButton icon={Settings} label="Settings" selected={false} />
      <NavButton icon={Bell} label="Notifications" selected={false} />
      <NavButton icon={Search} label="Search" selected={false} />
      <NavButton icon={Star} label="Favorites" selected={false} />
      <NavButton icon={User} label="Profile" selected={true} />
    </div>
  ),
};
