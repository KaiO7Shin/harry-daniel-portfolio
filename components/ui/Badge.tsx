import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "yellow" | "international";
};

export function Badge({
  children,
  className,
  tone = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-[11px] uppercase tracking-[0.16em]",
        tone === "default" && "border-border bg-anthracite text-muted",
        tone === "yellow" &&
          "border-yellow/40 bg-yellow/10 text-yellow",
        tone === "international" &&
          "border-yellow/50 bg-yellow/8 text-yellow",
        className,
      )}
    >
      {children}
    </span>
  );
}
