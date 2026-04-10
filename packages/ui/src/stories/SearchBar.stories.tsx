import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "../components/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Design System/Molecules/SearchBar",
  component: SearchBar,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: "Rechercher un client ou une propriété...",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Rechercher...",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Rechercher un client ou une propriété...",
    size: "lg",
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState("Martin Dupont");
    return (
      <SearchBar
        value={value}
        onChange={setValue}
        placeholder="Rechercher..."
      />
    );
  },
};

export const Loading: Story = {
  args: {
    placeholder: "Recherche en cours...",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Recherche désactivée",
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [searchResult, setSearchResult] = useState("");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SearchBar
          value={value}
          onChange={setValue}
          onSearch={(query) => setSearchResult(`Recherche: "${query}"`)}
          onClear={() => {
            setValue("");
            setSearchResult("");
          }}
          placeholder="Cherchez un client..."
        />
        {searchResult && <p>{searchResult}</p>}
      </div>
    );
  },
};
