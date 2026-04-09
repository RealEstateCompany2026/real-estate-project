/**
 * useHoverState - Hook partagé pour le pattern forceHover/isHovered
 * Utilisé par CardClient, ListClient, CardBien, ListBien, ListAffaire
 */

"use client";

import { useState } from "react";

export function useHoverState(forceHover: boolean = false) {
  const [isHovered, setIsHovered] = useState(forceHover);
  const hovered = forceHover || isHovered;
  const handlers = {
    onMouseEnter: () => !forceHover && setIsHovered(true),
    onMouseLeave: () => !forceHover && setIsHovered(false),
  };
  return { hovered, handlers };
}
