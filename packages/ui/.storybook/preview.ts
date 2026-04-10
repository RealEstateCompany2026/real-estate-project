import type { Preview } from "@storybook/react";

// Import Tailwind + design system tokens + Roboto font
import "../src/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "page",
      values: [
        { name: "page", value: "#FFFFFF" },
        { name: "neutral-50", value: "#ECEDEE" },
        { name: "dark", value: "#22252B" },
      ],
    },
  },
};

export default preview;
