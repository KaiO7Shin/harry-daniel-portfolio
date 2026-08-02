"use client";

import { keyStats, statsNote } from "@/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function StatsSection() {
  return (
    <section className="relative border-y border-white-main/10 bg-black-secondary">
      <div className="court-line absolute inset-x-0 top-0" aria-hidden />
      <div className="container-main section-space !py-16 md:!py-20">
        <Reveal>
          <p className="section-eyebrow mb-10">Repères</p>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {keyStats.map((stat, index) => (
            <StaggerItem key={stat.id}>
              <article className="group relative">
                <span
                  className="mb-3 block text-[11px] tracking-[0.2em] text-muted/70"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  displayOverride={stat.displayOverride}
                  className="text-display block text-[clamp(2.25rem,4.5vw,3.4rem)] font-bold text-yellow transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <p className="mt-3 max-w-[12rem] text-sm leading-snug text-muted">
                  {stat.label}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12}>
          <p className="mt-12 text-xs text-muted/70">{statsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
