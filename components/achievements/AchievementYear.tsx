"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Achievement } from "@/data/achievements";
import { InternationalHighlight } from "@/components/achievements/InternationalHighlight";
import { Reveal } from "@/components/ui/Reveal";

type AchievementYearProps = {
  year: number;
  items: Achievement[];
};

export function AchievementYear({ year, items }: AchievementYearProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal>
      <div className="relative grid gap-6 md:grid-cols-[120px_1fr]">
        <div className="flex items-start gap-3 md:block">
          <motion.span
            className="mt-1 inline-flex size-3 rounded-full border border-yellow bg-yellow shadow-[0_0_0_4px_rgba(244,196,48,0.12)]"
            initial={reduceMotion ? false : { scale: 0.6, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          />
          <p className="text-display text-3xl text-yellow md:mt-4">{year}</p>
        </div>

        <div className="space-y-3 border-l border-border pl-0 md:border-l-0 md:pl-0">
          {items.map((item) =>
            item.highlight || item.scopes.includes("international") ? (
              <InternationalHighlight key={item.id} achievement={item} />
            ) : (
              <article
                key={item.id}
                className="border border-border bg-black-secondary p-5 transition-colors hover:border-yellow/40"
              >
                <h3 className="text-display text-base uppercase tracking-wide">
                  {item.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                  {item.category && <span>{item.category}</span>}
                  {item.location && <span>{item.location}</span>}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </Reveal>
  );
}
