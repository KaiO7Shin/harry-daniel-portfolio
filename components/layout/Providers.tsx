"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
