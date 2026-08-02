"use client";

import { keyStats, statsNote } from "@/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function StatsSection() {
  return (
    <section className="section-space border-y border-border bg-black-secondary">
      <div className="container-main">
        <Reveal>
          <p className="mb-10 text-[12px] uppercase tracking-[0.22em] text-yellow">
            Chiffres clés
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {keyStats.map((stat) => (
            <StaggerItem key={stat.id}>
              <article className="group h-full border border-border bg-anthracite/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow/50">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  displayOverride={stat.displayOverride}
                  className="text-display block text-[clamp(2rem,4vw,3rem)] font-bold text-yellow"
                />
                <p className="mt-3 text-sm leading-snug text-muted">
                  {stat.label}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mt-8 text-xs text-muted/80">{statsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
