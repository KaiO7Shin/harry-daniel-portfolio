import {
  goalHorizons,
  partnerVisibility,
  priorityNeeds,
  whySupport,
} from "@/data/goals";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Partenariats",
  description:
    "Mes objectifs sportifs et les opportunités de partenariat autour de mon projet.",
  path: "/partenariats",
});

export default function PartenariatsPage() {
  return (
    <div className="section-space pt-32">
      <div className="container-main space-y-16">
        <SectionTitle
          as="h1"
          eyebrow="Projet"
          title="Objectifs & Partenariats"
          description="Mon projet sportif est clair, ambitieux et ouvert aux clubs, sponsors et partenaires qui souhaitent m’accompagner."
        />

        <Stagger className="grid gap-4 lg:grid-cols-3">
          {goalHorizons.map((horizon) => (
            <StaggerItem key={horizon.id}>
              <article className="h-full border border-border bg-black-secondary p-6 transition-all hover:-translate-y-1 hover:border-yellow/45">
                <h2 className="text-display text-2xl uppercase text-yellow">
                  {horizon.title}
                </h2>
                <ul className="mt-6 space-y-3">
                  {horizon.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
                      <span className="capitalize">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <section>
          <Reveal>
            <h2 className="mb-8 text-[clamp(1.8rem,3.5vw,2.5rem)] uppercase">
              Pourquoi me soutenir ?
            </h2>
          </Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whySupport.map((reason) => (
              <StaggerItem key={reason}>
                <div className="border border-border bg-anthracite px-5 py-5">
                  <p className="text-sm leading-relaxed text-white-main/90 first-letter:uppercase">
                    {reason}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className="grid gap-10 border border-border bg-black-secondary p-6 md:p-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="mb-5 text-[clamp(1.5rem,3vw,2rem)] uppercase">
                Besoins prioritaires
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <ul className="grid gap-2 sm:grid-cols-2">
                {priorityNeeds.map((need) => (
                  <li
                    key={need}
                    className="border border-border bg-anthracite px-3 py-2.5 text-sm capitalize text-muted"
                  >
                    {need}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="mb-5 text-[clamp(1.5rem,3vw,2rem)] uppercase">
                Visibilité partenaires
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <ul className="space-y-3">
                {partnerVisibility.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm capitalize leading-relaxed text-muted"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden border border-border bg-anthracite px-6 py-12 md:px-10">
          <div className="mg-stripe absolute inset-x-0 top-0" />
          <Reveal>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,2.75rem)] uppercase">
              Discuter d’un partenariat
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-2xl text-muted">
              Clubs, sponsors et partenaires : construisons ensemble ma
              prochaine étape internationale.
            </p>
          </Reveal>
          <Reveal delay={0.14} className="mt-8">
            <Button href="/contact">Discuter d’un partenariat</Button>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
