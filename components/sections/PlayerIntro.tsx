import { player } from "@/data/player";
import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

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
      <div className="container-main grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <ImageReveal
          src={player.images.profileAction}
          alt={`${player.displayName} en maillot de l’équipe nationale`}
          className="aspect-[4/5] w-full max-w-md lg:max-w-none"
          imageClassName="object-cover object-[62%_16%]"
          sizes="(max-width: 1024px) 90vw, 480px"
        />

        <div>
          <SectionTitle title={player.introTitle} />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
              {player.introText}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {techFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border border-border bg-black-secondary px-4 py-3"
                >
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-white-main">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.24} className="mt-8">
            <Button href="/profil">Voir mon profil complet</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
