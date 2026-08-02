"use client";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-yellow">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Heading
          className={cn(
            "text-balance text-[clamp(2.5rem,5vw,3.75rem)] uppercase",
            as === "h1" && "text-[clamp(2.75rem,7vw,5.5rem)]",
          )}
        >
          {title}
        </Heading>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-[17px] leading-relaxed text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
