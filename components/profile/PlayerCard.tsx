import { player } from "@/data/player";
import { Badge } from "@/components/ui/Badge";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { MadagascarFlag } from "@/components/ui/MadagascarFlag";
import { Reveal } from "@/components/ui/Reveal";

export function PlayerCard() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <ImageReveal
        src={player.images.portrait}
        alt={`Portrait de ${player.displayName} en maillot de l’équipe nationale de Madagascar`}
        className="aspect-[4/5] w-full"
        imageClassName="object-cover object-[62%_16%]"
        sizes="(max-width: 1024px) 90vw, 420px"
        priority
      />

      <div>
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-yellow">
            Profil sportif <MadagascarFlag />
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] uppercase">
            {player.displayName}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-lg text-muted">
            {player.sport} — {player.country}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {player.badges.map((badge) => (
              <Badge key={badge} tone="yellow">
                {badge}
              </Badge>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 space-y-5">
            {player.biography.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-2xl text-[17px] leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
