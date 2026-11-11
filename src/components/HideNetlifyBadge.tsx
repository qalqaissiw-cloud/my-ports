"use client";

import { useEffect } from "react";

const FRAME_IDS = ["nl-badge-frame", "nl-hud-frame"];

function stripBadge() {
  for (const id of FRAME_IDS) {
    document.getElementById(id)?.remove();
  }
  document.querySelectorAll('script[src*="/.netlify/scripts/hud"]').forEach((node) => {
    node.remove();
  });
}

/** Removes Netlify’s injected “Powered by Netlify” HUD badge if present. */
export function HideNetlifyBadge() {
  useEffect(() => {
    stripBadge();
    const observer = new MutationObserver(stripBadge);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
