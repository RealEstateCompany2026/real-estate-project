import type { StorybookConfig } from "@storybook/react-vite";
import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // Ensure automatic JSX runtime (required for React 19)
    config.plugins = config.plugins?.filter(
      (p) => p && !(Array.isArray(p) ? p[0] : p)?.name?.includes("vite:react")
    );
    config.plugins?.push(react({ jsxRuntime: "automatic" }));
    return config;
  },
};

export default config;
