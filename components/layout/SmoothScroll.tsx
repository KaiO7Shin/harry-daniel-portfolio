"use client";

/**
 * Smooth scroll désactivé volontairement.
 * Lenis cassait l’IntersectionObserver de Framer Motion
 * (images / reveals restaient invisibles).
 * On garde le scroll natif, plus fiable et accessible.
 */
export function SmoothScroll() {
  return null;
}
