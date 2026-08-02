"use client";

import Link from "next/link";
import { ArrowUpRight, Medal, Globe2, Trophy, Flag } from "lucide-react";
import { highlightCards } from "@/data/achievements";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = [Medal, Globe2, Trophy, Flag];

export function HighlightsSection() {
  return (
    <section className="section-space bg-black-secondary">
      <div className="container-main">
        <SectionTitle
          eyebrow="Résultats majeurs"
          title="Moments forts"
          description="Des jalons nationaux et continentaux qui marquent ma trajectoire de jeune athlète en progression."
        />

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlightCards.map((card, index) => {
            const Icon = icons[index % icons.length];
            const isInternational =
              card.location.includes("Botswana") ||
              card.location.includes("Ghana");

            return (
              <StaggerItem key={card.id}>
                <article className="group flex h-full flex-col border border-border bg-anthracite p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow/55">
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <span className="text-display text-2xl text-yellow">
                      {card.year}
                    </span>
                    <Icon className="size-5 text-muted transition-colors group-hover:text-yellow" />
                  </div>
                  <h3 className="text-display text-xl uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-white-main/90">{card.type}</p>
                  <p className="mt-1 text-sm text-muted">{card.category}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                    {card.location}
                    {(isInternational || card.location === "Madagascar") && (
                      <MadagascarFlag />
                    )}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-yellow transition-all group-hover:gap-3"
                  >
                    Découvrir
                    <ArrowUpRight className="size-4" />
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-10">
          <Link
            href="/palmares"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-yellow hover:underline"
          >
            Consulter le palmarès complet
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
