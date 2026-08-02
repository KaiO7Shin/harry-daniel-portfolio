"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
