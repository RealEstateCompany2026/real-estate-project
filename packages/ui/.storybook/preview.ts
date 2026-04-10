import type { Preview } from "@storybook/react";

// Import design system tokens (CSS custom properties)
import "../src/tokens.css";
// Import Tailwind utilities + Roboto font
import "../src/globals.css";
// Import Roboto font weights
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";

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
