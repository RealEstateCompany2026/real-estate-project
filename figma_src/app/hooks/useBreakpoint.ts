/**
 * useBreakpoint - Hook responsive pour détection breakpoint
 * Breakpoints: mobile <768, tablet 768-1279, desktop 1280-1599, large ≥1600
 */

"use client";

import { useState, useEffect } from "react";

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280, large: 1600 } as const;

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < BREAKPOINTS.tablet) setBp('mobile');
      else if (w < BREAKPOINTS.desktop) setBp('tablet');
      else if (w < BREAKPOINTS.large) setBp('desktop');
      else setBp('large');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return bp;
}
