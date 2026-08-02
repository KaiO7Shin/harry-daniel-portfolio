import { player } from "@/data/player";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function ProfileExtras() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <Reveal>
        <div className="h-full border border-white-main/10 bg-black-secondary/40 p-6 md:p-8">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] uppercase">
            Entraînement & scolarité
          </h2>
          <ul className="mt-6 space-y-3 text-[15px] text-muted">
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
              Je m’entraîne environ 4 h/semaine en période scolaire
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
              Environ 7 h/semaine pendant les vacances
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
              {player.training.goal}
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
              Élève à l’{player.school} — {player.educationLevel.toLowerCase()}
            </li>
            <li className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
              {player.educationProject}
            </li>
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="h-full border border-white-main/10 bg-black-main/20 p-6 md:p-8">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] uppercase">
            Qualités & centres d’intérêt
          </h2>

          <p className="mt-6 mb-3 text-[11px] uppercase tracking-[0.16em] text-muted">
            Qualités
          </p>
          <div className="flex flex-wrap gap-2">
            {player.qualities.map((quality) => (
              <Badge key={quality} tone="yellow">
                {quality}
              </Badge>
            ))}
          </div>

          <p className="mt-8 mb-3 text-[11px] uppercase tracking-[0.16em] text-muted">
            Langues
          </p>
          <div className="flex flex-wrap gap-2">
            {player.languages.map((language) => (
              <Badge key={language}>{language}</Badge>
            ))}
          </div>

          <p className="mt-8 mb-3 text-[11px] uppercase tracking-[0.16em] text-muted">
            Centres d’intérêt
          </p>
          <div className="flex flex-wrap gap-2">
            {player.interests.map((interest) => (
              <Badge key={interest}>{interest}</Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
