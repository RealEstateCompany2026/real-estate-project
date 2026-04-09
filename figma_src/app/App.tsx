import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";

/**
 * RealAgent - CRM Immobilier
 * Main app entry point with React Router
 */
export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <ToastProvider position="bottom-right" defaultDuration={5000} maxToasts={5}>
        <RouterProvider router={router} />
      </ToastProvider>
    </ThemeProvider>
  );
}