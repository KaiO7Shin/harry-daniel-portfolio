"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { highlightCards } from "@/data/achievements";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function HighlightsSection() {
  return (
    <section className="section-space overflow-hidden bg-black-secondary">
      <div className="container-main">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="section-eyebrow mb-4">Compétitions</p>
            <h2 className="max-w-xl text-[clamp(2rem,4.5vw,3.25rem)] uppercase">
              Moments forts
            </h2>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted">
              Quelques jalons nationaux et continentaux qui jalonnent mon
              parcours.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/palmares"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-yellow"
            >
              Palmarès complet
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      <Stagger className="mt-12 flex gap-4 overflow-x-auto px-[max(1.25rem,calc((100vw-76rem)/2+1.25rem))] pb-4 hide-scrollbar md:gap-5">
        {highlightCards.map((card, index) => {
          const isInternational =
            card.location.includes("Botswana") ||
            card.location.includes("Ghana");

          return (
            <StaggerItem key={card.id} className="min-w-[280px] max-w-[320px] shrink-0 md:min-w-[300px]">
              <Link href={card.href} className="group block h-full">
                <article className="relative flex h-full min-h-[320px] flex-col justify-between border border-white-main/10 bg-black-main/40 p-6 transition-colors duration-300 hover:border-yellow/50">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-display text-3xl text-yellow">
                        {card.year}
                      </span>
                      <span className="text-[11px] tracking-[0.2em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-display text-xl uppercase leading-tight tracking-wide transition-colors group-hover:text-yellow">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm text-white-main/85">{card.type}</p>
                    <p className="mt-1 text-sm text-muted">{card.category}</p>
                  </div>
                  <p className="mt-8 flex items-center gap-2 text-sm text-muted">
                    {card.location}
                    {(isInternational || card.location === "Madagascar") && (
                      <MadagascarFlag />
                    )}
                  </p>
                </article>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
