import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ButtonMultiLabel } from "../components/ButtonMultiLabel";

const meta: Meta<typeof ButtonMultiLabel> = {
  title: "Design System/Atoms/ButtonMultiLabel",
  component: ButtonMultiLabel,
};
export default meta;
type Story = StoryObj<typeof ButtonMultiLabel>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 1",
    onChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <ButtonMultiLabel
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const FullWidth: Story = {
  args: {
    options: ["Small", "Medium", "Large"],
    value: "Medium",
    onChange: () => {},
    fullWidth: true,
  },
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <div className="w-full">
        <ButtonMultiLabel
          {...args}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};
