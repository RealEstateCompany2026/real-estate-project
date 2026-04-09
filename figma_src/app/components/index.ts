/**
 * Central export file for all reusable components
 * Makes imports cleaner: import { Button, Card } from "@/components"
 */

// Layout
export { Layout } from "./Layout";
export { NavRail } from "./NavRail";

// Navigation & Headers
export { AppBar, AppBarAction, AppBarChip } from "./AppBar";

// UI Components
export { Button, IconButton } from "./Button";
export type { ButtonVariant, ButtonSize } from "./Button";

export {
  Badge,
  StatusBadge,
  ClientTypeBadge,
  DealTypeBadge,
} from "./Badge";
export type { BadgeVariant } from "./Badge";

export { Card, CardHeader, CardSection } from "./Card";
