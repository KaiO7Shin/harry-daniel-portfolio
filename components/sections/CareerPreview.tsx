"use client";

import { careerTimeline } from "@/data/clubs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type CareerPreviewProps = {
  embedded?: boolean;
};

export function CareerPreview({ embedded = false }: CareerPreviewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        embedded ? "pb-4" : "section-space",
        "bg-black-secondary/40",
      )}
    >
      <div className="container-main">
        <SectionTitle
          eyebrow="Parcours"
          title="Les étapes clés"
          description="Des clubs de formation à l’équipe nationale et aux compétitions africaines."
        />

        <div className="relative mt-12">
          <motion.div
            className="absolute top-3 left-3 hidden h-[calc(100%-1.5rem)] w-px origin-top bg-border md:block"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={reduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="space-y-6">
            {careerTimeline.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.04}>
                <li className="relative grid gap-3 md:grid-cols-[160px_1fr] md:gap-8">
                  <div className="flex items-center gap-3 md:block">
                    <span className="relative z-10 inline-flex size-6 items-center justify-center rounded-full border border-yellow/60 bg-black-main">
                      <span className="size-2 rounded-full bg-yellow" />
                    </span>
                    <p className="text-[12px] uppercase tracking-[0.18em] text-yellow md:mt-3">
                      {step.period}
                    </p>
                  </div>
                  <div className="border border-border bg-black-secondary px-5 py-4 md:px-6 md:py-5">
                    <h3 className="text-display text-lg uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
