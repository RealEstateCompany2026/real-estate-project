import type { Preview } from "@storybook/react";
import { useEffect } from "react";

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
        { name: "dark", value: "#111215" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const bg = context.globals?.backgrounds?.value || context.parameters?.backgrounds?.default;
      const isDark = bg === "#111215" || bg === "dark";

      useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }, [isDark]);

      return Story();
    },
  ],
};

export default preview;
