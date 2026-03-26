"use client";

// 1. ARIA-Konstanten für z. B. mobile Navigation
export const ariaMainNav = {
  label: "Hauptnavigation",
  controlsId: "main-nav",
  expanded: (open: boolean) => (open ? "true" : "false"),
};
