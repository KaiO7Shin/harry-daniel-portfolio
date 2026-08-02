"use client";

import { player } from "@/data/player";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";

const techFacts = [
  { label: "Main dominante", value: player.dominantHand },
  { label: "Prise", value: player.grip },
  { label: "Style", value: player.playingStyle },
  { label: "Coup fort", value: player.strongestShot },
  { label: "Entraîneur", value: player.coach },
  { label: "Club", value: player.currentClub },
];

export function PlayerIntro() {
  return (
    <section className="section-space">
      <div className="container-main grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <ImageReveal
          src={player.images.profileAction}
          alt={`${player.displayName} en maillot de l’équipe nationale`}
          className="aspect-[4/5] w-full max-w-md border border-white-main/10 lg:max-w-none"
          imageClassName="object-cover object-[62%_16%] transition-transform duration-700 hover:scale-[1.03]"
          sizes="(max-width: 1024px) 90vw, 480px"
        />

        <div>
          <Reveal>
            <p className="section-eyebrow mb-4">Profil de jeu</p>
            <h2 className="max-w-xl text-[clamp(2rem,4.5vw,3.4rem)] uppercase">
              {player.introTitle}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted">
              {player.introText}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <dl className="mt-10 grid gap-0 border-t border-white-main/10 sm:grid-cols-2">
              {techFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-white-main/10 px-0 py-4 sm:pr-6"
                >
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm text-white-main">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <Button href="/profil">Voir le profil</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
